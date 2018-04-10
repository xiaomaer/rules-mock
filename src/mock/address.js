import {
  DICT,
  REGION,
} from './constant';
import {
  randomSelect,
} from './utils';


// id pid/parentId name children
function _tree(list) {
  let mapped = {};
  let result = [];
  for (let i = 0, item; i < list.length; i++) {
    item = list[i];
    if (!item || !item.id) continue;
    mapped[item.id] = item;
  }
  for (let ii = 0, item; ii < list.length; ii++) {
    item = list[ii]
    if (!item) continue
    if (item.pid == undefined && item.parentId == undefined) {
      result.push(item)
      continue;
    }
    let parent = mapped[item.pid] || mapped[item.parentId]
    if (!parent) continue
    if (!parent.children) parent.children = []
    parent.children.push(item);
  }
  return result
}

// 处理嵌套数据结构
/* 处理后的数据结构如下：
 [{
  children: [{
    children: [{
      id: "130102",
      name: "长安区",
      pid: "130100",
    }],
    id: "130100",
    name: "石家庄市",
    pid: "130000",
  }],
  id: '130000',
  pid: undefined,
  name: '河北省'
}] */

function _fixedDICT() {
  let fixed = []
  for (let id in DICT) {
    const pid = id.slice(2, 6) === '0000' ? undefined :
      id.slice(4, 6) == '00' ? (id.slice(0, 2) + '0000') :
      id.slice(0, 4) + '00'
    fixed.push({
      id: id,
      pid: pid,
      name: DICT[id]
    });
  }
  return _tree(fixed);
}

// 处理后的地址数据，按照省市县(区)三级属性展示
const ADDR = _fixedDICT();

export default {
  // 随机生成一个大区。
  region() {
    return randomSelect(REGION);
  },
  // 随机生成一个（中国）省（或直辖市、自治区、特别行政区）。
  province() {
    return randomSelect(ADDR).name;
  },
  /**
   * 随机生成一个（中国）市。
   * @param {boolean} prefix :指示是否生成所属的省。
   */
  city(prefix) {
    const province = randomSelect(ADDR);
    const city = randomSelect(province.children);
    return prefix ? [province.name, city.name].join(' ') : city.name
  },
  /**
   * 随机生成一个（中国）县。
   * @param {boolean} prefix:指示是否生成所属的省、市 
   */
  county(prefix) {
    const province = randomSelect(ADDR)
    const city = randomSelect(province.children)
    const county = randomSelect(city.children) || {
      name: '-'
    }
    return prefix ? [province.name, city.name, county.name].join(' ') : county.name
  },
}
