export default {
  "data<optinal|len>": [{
    "number": {
      "shortInt": "#shortInt(min,max)",
      "Int": "#Int(min,max)",
      "longInt": "#longInt(min,max)",
      "float": "#float(min,max,precision)"
    },
    "string": {
      "shortText": "#cword(content,min,max)",
      "Text": "#ctitle(content,min,max)",
      "longText": "#csentence(content,min,max)",
      "longlongText": "#cparagraph(content,min,max)",
      "timestamp": "#date(min,max)",
      "userChineseName": "#ChineseName",
      "userEnglishName": "#EnglishName",
      "phoneNum": "#phone",
      "url": "#url",
      "email": "#email",
      "image": "#image(size, background, foreground, format, text)",
      "region": "#region",
      "province": "#province",
      "city": "#city(prefix)",
      "county": "#county(prefix)"
    },
    "boolean": "#bool(rate)", //rate:返回true的概率
    "regexp": /\d{5,10}/,
    "data": function () {
      var a = 1;
      return a + 3;
    },
    "increment": "#increment(startNum)", // 自加1返回
    "decrease": "#decrease(startNum)", // 自减1返回
    // arrayData：随机选择一个元素的数组，数组元素可以是#开头定义的规则关键字，这时会随机返回对应结果
    "randomSelectOne": "#randomSelect(arrayData)",
  }],
};
