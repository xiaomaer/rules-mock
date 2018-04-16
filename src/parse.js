/**
 * 解析自定义mock规则，生成mock数据
 */
import Mock from './mock';
import regMatchStr from './regexp';
// 属性名定义中，获取属性名和规则
const REG_KEY = /(\w+)(?:<(\d+|\w+)?\|?(\d+|\w+)?>)?/;
// 属性值定义的mock规则中，获取函数名称和传参
const REG_FUNC = /^#(\w+)(?:\((.*?)\))?/
// optional字段返回null的概率
const RATE_NULL = 0.35;

export default {
  mock(rules, name = '', context = {}) {
    const type = this.type(rules);
    const nameInfo = this.parseName(name);
    if (this[type]) {
      let data = this[type]({
        rule: rules,
        ...nameInfo,
        context,
      });
      return data;
    }
    // 规则为null或者undefined
    return rules;
  },
  // 获取mock规则类型，包括：array，object，string，number，boolean，regexp，function
  type(rule) {
    return (rule === null || rule === undefined) ? String(rule) : Object.prototype.toString.call(rule).match(/\[object (\w+)\]/)[1].toLowerCase();
  },
  // 解析属性名的规则
  parseName(propName) {
    if (propName) {
      const keys = propName.match(REG_KEY);
      const name = keys[1];
      const optional = !!(keys[2] && keys[2].indexOf('optional') > -1 || keys[3] && keys[3].indexOf('optional') > -1);
      const len = parseInt(keys[2], 10) || parseInt(keys[3], 10);
      return {
        name,
        optional,
        len,
      }
    }
    return {};
  },
  object(options) {
    let result = {};
    const {
      rule,
      optional,
    } = options;
    for (let prop in rule) {
      const value = rule[prop];
      const nameInfo = this.parseName(prop);
      const key = nameInfo.name;
      // 字段为optional时，返回为null
      if (nameInfo.optional && Math.random() <= RATE_NULL) {
        result[key] = null;
      } else {
        result[key] = this.mock(value, prop, result);
      }
    }
    return result;
  },
  array(options) {
    let result = [];
    const {
      rule,
      optional,
      len = 15, // 数组默认长度15
    } = options;
    if (optional && Math.random() <= RATE_NULL) return result;
    for (let i = 0; i < len; i++) {
      result.push(this.mock(rule[0]));
    }
    return result;
  },
  regexp(options) {
    return regMatchStr(options.rule);
  },
  // 执行函数返回结果，函数上下文为属性所在的对象
  function (options) {
    const {
      rule: funcName,
      optional,
      context,
    } = options;
    return funcName.apply(context);
  },
  string(options) {
    const {
      rule,
      optional,
    } = options;
    if (rule.startsWith('#')) {
      const funcInfo = rule.match(REG_FUNC);
      const funcName = funcInfo[1];
      const funcParam = funcInfo[2];
      // 判断方法是否存在，如果存在执行函数返回结果；如果不存在直接返回该规则作为结果
      if (funcName in Mock) {
        if (funcName === 'randomSelect') {
          const params = funcParam ? eval(funcParam) : [];
          const result = Mock[funcName].call(Mock, params);
          // 返回结果可能仍是一个mock规则，执行后才可以得到结果
          return this.mock(result);
        } else {
          const params = funcParam ? funcParam.split(',') : undefined;
          let result = Mock[funcName].apply(Mock, params);
          if (result === undefined) result = '';
          return result;
        }
      }
      return rule;
    }
    return rule;
  },
  number(options) {
    return options.rule;
  },
  boolean(options) {
    return options.rule;
  },
}
