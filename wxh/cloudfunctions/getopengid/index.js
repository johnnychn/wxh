// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
// 云函数解析加密的openGId
// 详解：https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/signature.html#method-cloud
exports.main = async (event, context) => {
  return {
    event
  }
}