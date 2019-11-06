// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext();
  const action = event.action;
  const db = cloud.database();
  db.collection('action').add({
    data:action,
    success: function (res) {
      // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
      console.log(res);
    }
  });
  return {
    event,
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID,
  }
}