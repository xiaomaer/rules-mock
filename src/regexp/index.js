// 根据正则表达式反向生成可以匹配它的字符串
import Parser from './parser';
import Handler from './handler';
/**
 * 根据正则表达式反向生成可以匹配它的字符串
 * 
 * @param {RegExp} regexp :支持/pattern/attributes和new RegExp(pattern, attributes)两种表达式
 */
export default function regMatchStr(regexp) {
	// RegExp对象包括global、lastIndex、source等属性，参考链接：http://www.w3school.com.cn/jsref/jsref_obj_regexp.asp
	const reg = regexp.source; //获得用于模式匹配的文本，去掉两头的/
	const ast = Parser.parse(reg); // 解析正则表达式，参考：https://github.com/ForbesLindesay/regexp
	return Handler.gen(ast); // 根据解析后的文件生成匹配字符串
}
