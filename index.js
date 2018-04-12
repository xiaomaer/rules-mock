import Mock from './src/parse';

/**
 * 根据自定义的mock规则生成mock数据
 * @param {object} rules ：自定义的mock规则
 */
export default function parse(rules) {
  return Mock.mock(rules);
}
