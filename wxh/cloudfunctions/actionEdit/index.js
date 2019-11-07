// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext();

  let docAction = cloud.database().collection("action");
  let docGift = cloud.database().collection("gift");
  let action = event;
  let gifts = [];

  // 完善 Action 数据
  action.userId = wxContext.OPENID;
  action.inDate = cloud.database().serverDate();
  action.status = 0;
  if (action.gifts) {
    gifts = [];
    action.gifts.forEach(function (item, index) {
      gifts.push(item);
    });
  }
  delete action.gifts;
  // Action 入库
  let idAction = await docAction.add({
    data: action
  });
  action.id = idAction._id;

  if (gifts) {
    for (let i = 0; i < gifts.length; i++) {
      let gift = {};

      // 完善 Gift 数据
      gift.actionId = action.id;
      gift.leftCount = gifts[i].count;
      gift.name = gifts[i].name;
      gift.count = gifts[i].count;
      gift.images = [];
      for (let j = 0; j < gifts[i].files.length; j++){
        console.log(gifts[i].files);
        gift.images.push(gifts[i].files[j]);
      }
      // Gift 入库
      await docGift.add({
        data: gift
      });
    }
  }

  return {
    event,
    gifts,
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID,
  }
}