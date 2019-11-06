// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  
  
  let myAward = await db.collection('award').where({
    userId: wxContext.OPENID
  }).get();
  let action = await db.collection('action').doc(myAward.actionId).get();
  let awardList = await db.collection('award').where({
    actionId: myAward.actionId
  }).get();
  let myGift = await db.collection('gift').doc(myAward.giftId).get();
  let data = {};
  
  data.memo = action.memo;
  data.myAward = {
    name: myGift.name,
    images: myGift.images
  };
  data.awardList = [];
  for (let i = 0; awardList.length; i++) {
    if (awardList[i].userId == wxContext.OPENID){
      continue;
    }
    let gift = await db.collection('gift').doc(awardList[i].giftId).get();
    data.awardList.push({
      name: gift.name,
      username: awardList[i].username,
      images: gift.images
    });
  }
  
  return {
    data,
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID,
  }
}