//测试引入以javascript的文件
let app = getApp();
var cs = [{ id: 1, name: "cw" }, { id: 2, name: "cw2" }, { id: 3, name: "cw3" }]
var id = 1;
var fl = cs.filter(item => {
  return item.id == id
})
module.exports.id = fl;
