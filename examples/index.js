import Mock from '../src/mock';
import regMatchStr from '../src/regexp';
import RULE from './rules';
import parse from '../index';
import rules from './rules';
console.log('短整型', Mock.shortInt(0, 10));
console.log('整型', Mock.Int(1000, 2000));
console.log('长整型', Mock.longInt(3000, 4000));
console.log('浮点型', Mock.float(10, 1000, 4));
console.log('布尔', Mock.bool(10));
console.log('单个字符', Mock.charactor('小马'));
console.log('字符串', Mock.string('小马'));
console.log('英文单词', Mock.word());
console.log('汉字', Mock.cword('马美英'));
console.log('英文标题', Mock.title());
console.log('中文标题', Mock.ctitle('随机生成一句中文标题'));
console.log('英文句子', Mock.sentence());
console.log('中文句子', Mock.csentence());
console.log('英文段落', Mock.paragraph());
console.log('中文段落', Mock.cparagraph());
console.log('英文名字', Mock.EnglishName());
console.log('中文名字', Mock.ChineseName());
console.log('电话号码', Mock.phone());
console.log('时间戳', Mock.date());
console.log('url', Mock.url());
console.log('邮箱', Mock.email());
console.log('自增-1', Mock.increment(100));
console.log('自增-2', Mock.increment());
console.log('自减-32766', Mock.decrease(50))
console.log('自减-32765', Mock.decrease())
console.log('图片URL', Mock.image());
console.log('大区', Mock.region());
console.log('省份', Mock.province());
console.log('城市', Mock.city());
console.log('区县', Mock.county());
const reg1 = /\w\W\s\S\d\D/
console.log('根据正则表达式解析文件生成匹配的字符串1', regMatchStr(reg1));
const reg2 = new RegExp('\\d{5,10}');
console.log('根据正则表达式解析文件生成匹配的字符串2', regMatchStr(reg2));
console.log('根据自定义mock规则，生成mock数据', parse(RULE.simpleRules));
