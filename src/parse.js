/**
 * 解析自定义mock规则，生成mock数据
 */
import Mock from './mock';
import regMatchStr from './regexp';
export default {
  mock(rules, name = '') {
    const type = this.type(rules);
    const nameInfo = this.parseName(name);
    if (this[type]) {
      let data = this[type]({
        rule: rules,
        ...nameInfo,
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
      const REG_KEY = /(\w+)(?:<(\d+|\w+)?\|?(\d+|\w+)?>)?/;
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
    if (optional && Math.random() <= 0.25) return null;
    for (let prop in rule) {
      const value = rule[prop];
      const REG_KEY = /(\w+)(?:<(\d+|\w+)?\|?(\d+|\w+)?>)?/;
      const key = prop.match(REG_KEY)[1];
      result[key] = this.mock(value, prop);
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
    if (optional && Math.random() <= 0.25) return result;
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
      ctx,
    } = options;
    return funcName.apply(ctx);
  },
  string(options) {
    const rule = options.rule;
    if (rule.startsWith('#')) {
      const REG_FUNC = /^#(\w+)(?:\((.*?)\))?/
      const funcInfo = rule.match(REG_FUNC);
      const funcName = funcInfo[1];
      const funcParam = funcInfo[2];
      const params = funcParam ? funcParam.split(',') : undefined;
      // 判断方法是否存在，如果存在执行函数返回结果；如果不存在直接返回该规则作为结果
      if (funcName in Mock) {
        let result = Mock[funcName].apply(Mock, params);
        if (result === undefined) result = '';
        return result;
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
