### 根据自定义mock规则，生成mock数据

### mock规则编写规范
```
{
  "data<optional|len>": [{
    "number": {
      "shortInt": "#int16(min,max)",
      "Int": "#int32(min,max)",
      "longInt": "#int64(min,max)",
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
    "function": function () {
      var a = 1;
      return a + 3;
    },
    "increment": "#increment(step)", // 自加1返回
    "decrease": "#decrease(step)", // 自减1返回
    // arrayData：随机选择一个元素的数组，数组元素如果是#开头定义的规则关键字，这时会随机返回对应结果；
    "randomSelectOne": "#randomSelect(arrayData)",
  }],
}
```

### mock规则编写示例
```
{
    "status": {
        "code": "#randomSelect([0,1])",
        "msg": "#ctitle"
    },
    "pageTO": {
        "currentPage": "#int16(1,100)",
        "perPage": "30",
        "total": "#int64"
    },
    "breifDistributorTOs<optional|10>": [
        {
            "id": "#increment(10)",
            "name": "#ChineseName",
            "status": "#decrease",
            "productImg":"#image",
            "address":"#county(true)",
            "contactNum":"#phone",
            "publishTime":"#date",
            "detailUrl":"#url"
        }
    ]
}
```

