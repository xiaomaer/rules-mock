const rules = {
  "data<optional|len>": [{
    "number": {
      "shortInt": "#shortInt",
      "Int": "#Int()",
      "longInt": "#longInt(0,10)",
      "float": "#float(20,100,4)"
    },
    "string": {
      "shortText": "#cword",
      "Text": "#ctitle('我是title',)",
      "longText": "#csentence()",
      "longlongText": "#cparagraph('',1,3)",
      "timestamp": "#date",
      "userChineseName": "#ChineseName",
      "userEnglishName": "#EnglishName",
      "phoneNum": "#phone",
      "url": "#url",
      "email": "#email",
      "image": "#image",
      "region": "#region",
      "province": "#province",
      "city": "#city(true)",
      "county": "#county"
    },
    "boolean": "#bool(80)", //rate:返回true的概率
    "regexp": /\d{5,10}/,
    "func": function () {
      var a = 1;
      return a + 3;
    },
    "increment": "#increment(10)", // 自加1返回
    "decrease": "#decrease()", // 自减1返回
    // arrayData：随机选择一个元素的数组，数组元素可以是#开头定义的规则关键字，这时会随机返回对应结果
    "randomSelectOne": "#randomSelect(['post','get'])",
  }],
};
const simpleRules = {
  "number": {
    "shortInt": "#shortInt",
    "Int": "#Int()",
    "longInt": "#longInt(0,10)",
    "float": "#float(20,100,4)"
  },
  "increment": "#increment(10)", // 自加1返回
  "decrease": "#decrease()", // 自减1返回
  // arrayData：随机选择一个元素的数组，数组元素可以是#开头定义的规则关键字，这时会随机返回对应结果
  "randomSelectOne": "#randomSelect(['post','get'])",
  "arr<5>": [{
    "province": "#province",
    "city": "#city(true)",
    "county": "#county",
  }],
  "optional<optional>": /\d{5,10}/,
  "func": function () {
    var a = 1;
    return a + this.number.Int;
  },
}
const arrRules = [{
  "province": "#province",
  "city": "#city(true)",
  "county": "#county",
}];
export default {
  rules,
  simpleRules,
  arrRules,
};
