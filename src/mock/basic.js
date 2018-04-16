import CONST from './constant';
import {
  randomRange,
  capitalize,
  randomSelect,
} from './utils';

export default {
  /* Int16, 等于short, 占2个字节. -32768 32767(2^15)
  Int32, 等于int, 占4个字节. -2147483648 2147483647(2^31)
  Int64, 等于long, 占8个字节. -9223372036854775808 9223372036854775807(2^63) */
  // 短整型
  int16(min = 0, max = 32767) {
    return randomRange(min, max);
  },

  // 整型(Int32)
  int32(min = 0, max = 2147483647) {
    return randomRange(min, max);
  },

  // 长整型(Int64)
  int64(min = 0, max = 9223372036854775807) {
    return randomRange(min, max);
  },

  /**
   * 浮点型
   * @param {number} min ：整数部分最小值，默认为0
   * @param {number} max ：整数部分最大值，默认为2147483647
   * @param {number} dot ：小数点后的位数，默认为两位
   */
  float(min, max, dot = 2) {
    let result = this.int32(min, max) + '.';
    for (let i = 0; i < dot; i++) {
      result += this.charactor('123456789');
    }
    // 小数点后，最后一位是0时，parseFloat后会忽略掉
    return parseFloat(result, 10);
  },

  /**
   * 布尔值
   * @param {number} rate ：0-100之间的数字，rate/100为返回true的概率
   */
  bool(rate) {
    if (rate) {
      return Math.random() > parseFloat(rate) / 100 ? false : true;
    }
    return Math.random() >= 0.5;
  },

  // 单个字符
  charactor(content) {
    const str = content || (CONST.CHARS.lower + CONST.CHARS.upper + CONST.CHARS.number + CONST.CHARS.symbol);
    const len = str.length - 1;
    return str.charAt(randomRange(0, len));
  },

  // string
  string(content, min = 3, max = 10) {
    const len = randomRange(min, max);
    let result = '';
    for (let i = 0; i < len; i++) {
      result += this.charactor(content);
    }
    return result;
  },

  /* ==================文本（单词/汉字、句子、段落）=================== */

  // 随机生成一个英文单词
  word(min = 3, max = 6) {
    const len = randomRange(min, max);
    let result = '';
    for (let i = 0; i < len; i++) {
      result += this.charactor(CONST.CHARS.lower);
    }
    return result;
  },

  // 随机生成一个汉字
  cword(content) {
    const str = content || CONST.CHINA_CHARS;
    const len = str.length - 1;
    return str.charAt(randomRange(0, len));
  },

  // 随机生成一句标题，其中每个单词的首字母大写
  title(min = 3, max = 5) {
    const len = randomRange(min, max);
    let result = []
    for (let i = 0; i < len; i++) {
      result.push(capitalize(this.word()))
    }
    return result.join(' ')
  },

  // 随机生成一句中文标题
  ctitle(content, min = 6, max = 9) {
    const len = randomRange(min, max);
    let result = []
    for (var i = 0; i < len; i++) {
      result.push(this.cword(content))
    }
    return result.join('')
  },

  // 英文句子
  sentence(min = 6, max = 10) {
    const len = randomRange(min, max);
    let result = [];
    for (let i = 0; i < len; i++) {
      result.push(this.word());
    }
    return capitalize(result.join(' ')) + '.';
  },

  // 汉语句子
  csentence(contnet, min = 15, max = 20) {
    const len = randomRange(min, max);
    let result = [];
    for (let i = 0; i < len; i++) {
      result.push(this.cword(contnet));
    }
    return result.join('') + '。';
  },

  // 英文段落
  paragraph(min = 4, max = 6) {
    const len = randomRange(min, max);
    let result = [];
    for (let i = 0; i < len; i++) {
      result.push(this.sentence());
    }
    return result.join('');
  },

  // 汉语段落
  cparagraph(contnet, min = 6, max = 8) {
    const len = randomRange(min, max);
    let result = [];
    for (let i = 0; i < len; i++) {
      result.push(this.csentence(contnet));
    }
    return result.join('');
  },

  /* ==================文本（单词/汉字、句子、段落）=================== */

  // 英文姓名
  EnglishName() {
    const firstName = randomSelect(CONST.FIRST_NAME);
    const lastName = randomSelect(CONST.LAST_NAME);
    return `${firstName} ${lastName}`;
  },

  // 中文姓名
  ChineseName() {
    const surname = randomSelect(CONST.CHINA_SURNAME);
    const username = randomSelect(CONST.CHINA_NAME);
    return `${surname}${username}`;
  },

  // 电话号码
  phone() {
    const prefixArray = ["130", "131", "132", "133", "135", "137", "138", "170", "187", "189"];
    const index = parseInt(Math.random() * 10);
    let prefix = prefixArray[index];
    for (let i = 0; i < 8; i++) {
      prefix += Math.floor(Math.random() * 10);
    }
    return prefix;
  },

  /**
   * 时间戳
   * @param {时间戳} min ：默认0，即new Date(0)，1970-01-01 08:00:00
   * @param {时间戳} max ：默认为当前时间，即Date.now()
   */
  date(min = 0, max = Date.now()) {
    return randomRange(min, max);
  },

  // 随机生成一个 URL 协议。
  protocol() {
    return randomSelect(CONST.PROTOCOL);
  },

  // 随机生成一个域名。
  domain(tld) {
    return `${this.word()}.${(tld || this.tld())}`;
  },

  // 随机生成一个顶级域名
  tld() {
    return randomSelect(CONST.TLD);
  },

  //随机生成一个URL
  url(protocol, host) {
    return `${(protocol || this.protocol())}://${(host || this.domain())}/${this.word()}`;
  },

  // email
  email() {
    return `${this.word()}.${this.word()}@${this.word()}.${this.tld()}`;
  },

  /**
   * 自增
   * @param {number} step :自增步数，默认是1
   */
  increment(step = 1) {
    if (!this.incrementNum) this.incrementNum = 0;
    return this.incrementNum += parseInt(step);
  },

  /**
   * 自减
   * @param {number} step :自减步数，默认是1
   */
  decrease(step = 1) {
    if (!this.decreaseNum) this.decreaseNum = 32767;
    return this.decreaseNum -= parseInt(step);
  },

  /*
  生成一个随机的图片地址。
  替代图片源
      http://fpoimg.com/
  参考自 
      http://rensanning.iteye.com/blog/1933310
      http://code.tutsplus.com/articles/the-top-8-placeholders-for-web-designers--net-19485
  */
  image(size, background, foreground, format, text) {
    // image( size, background, foreground, text )
    if (arguments.length === 4) {
      text = format;
      format = undefined;
    }
    // image( size, background, text )
    if (arguments.length === 3) {
      text = foreground;
      foreground = undefined;
    }
    // image()
    if (!size) size = randomSelect(CONST.COMMON_SIZE);
    if (background && background.indexOf('#') > -1) background = background.slice(1);
    if (foreground && foreground.indexOf('#') > -1) foreground = foreground.slice(1);
    // https://dummyimage.com/600x400/cc00cc/470047.png&text=hello
    return 'https://dummyimage.com/' + size +
      (background ? '/' + background : '') +
      (foreground ? '/' + foreground : '') +
      (format ? '.' + format : '') +
      (text ? '&text=' + text : '');
  },
}
