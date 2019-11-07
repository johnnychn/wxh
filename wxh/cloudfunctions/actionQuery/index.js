// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext();
  let actions = await cloud.database().collection('action').where({
    userId: wxContext.OPENID
  }).get();
  let currentDate = new Date();
  for (let i = 0; i < actions.length; i++){
    if (actions[i].status == 0 && new Date(actions[i].endDate) < currentDate){
      actions[i].status = 2;
    }
  }
  return {
    actions,
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID,
  }
}