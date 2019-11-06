// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
// event传入奖品id数组（参数传ids）,会从数组中返回一个id
exports.main = (event, context) => {
  var select = event.ids[Math.floor(Math.random() * event.ids.length)];

  return {
    select
  }
}