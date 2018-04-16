/**
 * @module parseToRules：从解析后的IDL文件中，获取指定接口的mock的规则
 * @author: mamy
 * @since: 2018-04-13 16:09:22
 */

const UNMATCHED = 'NO_TYPE'; // 没有匹配的数据类型时返回的规则

/**
 * 
 * @param {string} type：接口返回数据类型
 * @param {obje} ast：IDL解析后的文件
 */
export default function generate(type, ast) {
  // 解析接口返回类型，获取model和对应的返回结构
  const ret = type.split(".");
  // 接口返回类型非基本数据类型
  if (ret.length > 1) {
    // 获取接口返回数据对应的model
    ast = ast.include[ret[0]];
    // 获取接口返回数据的IDL定义
    const structItems = getStruct(ret.slice(1).join(".") || (ret.length === 1 ? ret[0] : type), ast).struct;
    return getMockRules(structItems, ast);
  }
  // 接口返回类型为基本数据类型
  return getRule('', type);
}

function getRule(name, type) {
  switch (type) {
    case "i16":
      return '#int16';
    case "i32":
      if (/code/i.test(name)) {
        return '#int32(0, 600)';
      }
      return '#int32';
    case "i64":
      if (/date/i.test(name) || /time/i.test(name) || /period/i.test(name)) {
        return '#date';
      }
      if (/total/i.test(name)) {
        return '#int16';
      }
      return '#int64';
    case "string":
      if (/contact/i.test(name) || /^(\w+)tor(\w*)$/i.test(name)) {
        return '#ChineseName';
      }
      if (/image/i.test(name) || /img/i.test(name) || /path/i.test(name)) {
        return '#image"';
      }
      if (/url/i.test(name)) {
        return '#url"';
      }
      if (/email/i.test(name)) {
        return '#email';
      }
      if (/pinyin/i.test(name)) {
        return '#word';
      }
      if (/phone/i.test(name) || /tel/i.test(name)) {
        return '#phone';
      }
      if (/province/i.test(name)) {
        return '#province';
      }
      if (/city/i.test(name)) {
        return '#city';
      }
      if (/county/i.test(name)) {
        return '#county';
      }
      if (/address/i.test(name)) {
        return '#county(true)'
      }
      if (/name/i.test(name) || /msg/i.test(name) || /message/i.test(name)) {
        return '#ctitle';
      }
      // 等概率随机返回字段很短、正常、很短（中文、英文、中英文）的情况
      const random = Math.random();
      if (random < 0.33) {
        return '#ctitle'; // 短
      } else if (random >= 0.33 && random < 0.66) {
        return '#csentence'; //正常
      } else if (random >= 0.66 && random < 1) {
        return '#cparagraph'; // 过长
      }
    case "double":
      return '#float';
    case "bool":
      return '#bool';
    default:
      return UNMATCHED;
  }
}

function getMockRules(structItems, ast) {
  return structItems.reduce((ret, item, idx) => {
    const isOptional = !!(item.option === 'optional');
    let key = item.name;
    if (isOptional) {
      key = `${item.name}<optional>`;
    }
    // 返回类型为非数组时
    if (typeof item.type === 'string') {
      const rule = getRule(item.name, item.type);
      // 非基本数据类型
      if (rule === UNMATCHED) {
        let items;
        // 获取字段返回数据model和对应的结构体
        let result = item.type.split(".");
        let innerAst = ast;
        if (result.length > 1) {
          let ret = findModel(result[0], ast);
          let model = ret.model;
          if (model && model.struct) {
            items = model.struct[result[1]];
          }
          innerAst = ret.model;
        } else {
          items = innerAst.struct[item.type];
        }
        extendModels(innerAst, ast);
        ret[key] = getMockRules(items, innerAst);
      } else {
        ret[key] = rule;
      }
    } else { // 返回类型为数组时
      // 数组中元素的数据类型
      const valueType = item.type.valueType;
      let rules = [];
      switch (item.type.name) {
        case "set":
        case "list":
          const rule = getRule(item.name, valueType);
          if (rule === UNMATCHED) {
            const data = getStruct(valueType, ast);
            const items = data.struct;
            let innerAst = data.ast;
            extendModels(innerAst, ast);
            rules.push(getMockRules(items, innerAst));
            ret[key] = rules;
          } else {
            ret[key] = [rule];
          }
          break;
        case "map":
          // TODO, 未实现
          break;
      }
    }
    return ret;
  }, {})
}

function getStruct(type, ast) {
  let ret = type.split(".");
  if (ret.length > 1) {
    ast = ast.include[ret[0]];
    return getStruct(ret.slice(1).join("."), ast);
  } else {
    return {
      struct: ast.struct[type],
      ast
    };
  }
}

function extendModels(innerAst, outerAst) {
  if (innerAst && outerAst && outerAst.include) {
    innerAst.include = innerAst.include || {};
    for (let model in outerAst.include) {
      if (!innerAst.include[model]) {
        innerAst.include[model] = outerAst.include[model];
      }
    }
  }
}

function findModel(model, ast) {
  if (ast.include) {
    if (ast && ast.include && ast.include[model]) {
      return {
        model: ast.include[model],
        ast
      };
    }
    for (let i in ast.include) {
      const ret = findModel(model, ast.include[i]);
      if (ret !== null) {
        return ret;
      }
    }
  }
  return null;
}
