// 生成随机数
export function randomRange(min, max) {
  return Math.round(Math.random() * (max - min)) + min;
};
// 单词首字母大写
export function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
};
// 随机选择数组中的元素
export function randomSelect(elems = []) {
  const len = elems.length - 1;
  return len === 0 ? elems[0] : elems[randomRange(0, len)];
};
