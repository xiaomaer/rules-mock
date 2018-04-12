/**
 * 参考资料：mock.js数据模板定义规范 
 * 链接：https://github.com/nuysoft/Mock/wiki/Syntax-Specification
 */

// 自己定义的mock规则
const meRules = {
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
    "increment": "#increment(step)", // 自增步数，默认1
    "decrease": "#decrease(step)", // 自减步数，默认1
    // arrayData：随机选择一个元素的数组，数组元素可以是#开头定义的规则关键字，这时会随机返回对应结果；
    "randomSelectOne": "#randomSelect(arrayData)",
  }],
};

// easy mock的mock规则
const easyMockRules = {
  "base": {
    "range": "@range(3, 7)",
    "string": "@string(7, 20)",
    "character": "@character('abcde')",
    "float": "@float(60, 100)",
    "integer": "@integer(60, 100)",
    "natural": "@natural(60, 100)",
    "boolean": "@boolean"
  },
  "date": {
    "date": "@date",
    "time": "@time",
    "datetime": "@datetime",
    "now": "@now"
  },
  "image": {
    "image": "@image('200x100', '#50B347', '#FFF', 'EasyMock')"
  },
  "color": {
    "color": "@color",
    "hex": "@hex",
    "rgb": "@rgb",
    "rgba": "@rgba",
    "hsl": "@hsl"
  },
  "text": {
    "paragraph": "@paragraph(1, 3)",
    "sentence": "@sentence(3, 5)",
    "word": "@word(3, 5)",
    "title": "@title(3, 5)",
    "cparagraph": "@cparagraph(1, 3)",
    "csentence": "@csentence(3, 5)",
    "cword": "@cword('零一二三四五六七八九十', 5, 7)",
    "ctitle": "@ctitle(3, 5)"
  },
  "name": {
    "first": "@first",
    "last": "@last",
    "name": "@name",
    "cfirst": "@cfirst",
    "clast": "@clast",
    "cname": "@cname"
  },
  "web": {
    "url": "@url",
    "domain": "@domain",
    "protocol": "@protocol",
    "tld": "@tld",
    "email": "@email",
    "ip": "@ip"
  },
  "address": {
    "region": "@region",
    "province": "@province",
    "city": "@city(true)",
    "county": "@county(true)",
    "zip": "@zip"
  },
  "helper": {
    "capitalize": "@capitalize('hello')",
    "upper": "@upper('hello')",
    "lower": "@lower('HELLO')",
    "pick": "@pick(['a', 'e', 'i', 'o', 'u'])",
    "shuffle": "@shuffle(['a', 'e', 'i', 'o', 'u'])"
  },
  "miscellaneous": {
    "id": "@id",
    "guid": "@guid",
    "increment": "@increment(1000)"
  }
};

// RAP mock rules
const rapMockRules = {
  "data|1-5": [{
    "cn|1-5": "汉字",
    "date": "@DATE",
    "datetime": "@DATETIME",
    "dummyimage": {
      "background": "@COLOR",
      "foreground": "@COLOR",
      "format|1": [
        "png,gif,jpg"
      ],
      "size": "@AD_SIZE",
      "text": "@WORD",
      "url": "http://ex.com/@size/@background"
    },
    "email": "@EMAIL",
    "float1|.1-10": 82736,
    "float2|1-100.1-10": 23671,
    "float3|999.1-10": 88035,
    "float4|.3-10": 41272,
    "grade1|1-100": 20684,
    "grade2|90-100": 65510,
    "id|+1": 104,
    "img1": "@IMG(200x200)",
    "img2": "@IMG",
    "img3": "@IMG(@size)",
    "img4": "@IMG(@AD_SIZE)",
    "method|1": [
      "GET",
      "POST",
      "HEAD",
      "DELETE"
    ],
    "param": "abc=123",
    "published|1-2": false,
    "repeat|10": "A",
    "size": "@AD_SIZE",
    "star|1-5": "★",
    "time": "@TIME",
    "title": "@TITLE",
    "url1": "@img3?@param",
    "url2": "@img4?@ID&id=@id"
  }],
  "abc": function () {
    var a = 1;
    return this.x * 5 + 3;
  },
  "x": 2
};
