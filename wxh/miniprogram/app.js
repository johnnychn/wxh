//app.js
App({
  onLaunch: function (res) {

    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        // env 参数说明：
        //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
        //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
        //   如不填则使用默认环境（第一个创建的环境）
        // env: 'my-env-id',
        traceUser: true,
      })
    }
    //如果是通过群聊进来的
    if (res.scene == 1044) {
      wx.getShareInfo({
        shareTicket: res.shareTicket,
        success: function (res) {
          var cloudID = res.cloudID;
          wx.cloud.callFunction({
            name: 'getopengid',
            data: {
              groupid: wx.cloud.CloudID(cloudID)
            },
            success: res => {
              console.log("微信群id:" + res.result.event.groupid.data.openGId)
            }
          })
        }
      })
    }
    this.globalData = {}
  },
  onShow: function (res) {
    //如果是通过群聊进来的
    if (res.scene == 1044) {
      wx.getShareInfo({
        shareTicket: res.shareTicket,
        success: function (res) {
          var cloudID = res.cloudID;
          wx.cloud.callFunction({
            name: 'getopengid',
            data: {
              groupid: wx.cloud.CloudID(cloudID)
            },
            success: res => {
              console.log("微信群id:" + res.result.event.groupid.data.openGId)
            }
          })
        }
      })
    }
  }
})
