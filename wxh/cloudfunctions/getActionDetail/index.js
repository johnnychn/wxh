// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext();
  const db = cloud.database();
  let action = await db.collection('action').doc(event.id).get();
  let giftList = await db.collection('gift').where({
    actionId: event.id
  }).get();
  action.gift = giftList;
  return {
    action
  }
}