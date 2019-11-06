//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    festivalList: [
      {
        name: "张三",
        festival: "米奇书包",
        imgs: [
          "../../images/subject.png",
          "../../images/subject.png",
          "../../images/subject.png"
        ]
      },
      {
        name: "李四",
        festival: "米奇铅笔盒",
        imgs: [
          "../../images/subject.png",
          "../../images/subject.png",
          "../../images/subject.png"
        ]
      },
      {
        name: "王五",
        festival: "米奇笔记本",
        imgs: [
          "../../images/subject.png",
          "../../images/subject.png",
          "../../images/subject.png"
        ]
      },
      {
        name: "赵六",
        festival: "米奇书包",
        imgs: [
          "../../images/subject.png",
          "../../images/subject.png",
          "../../images/subject.png"
        ]
      },
      {
        name: "关羽",
        festival: "米奇书包",
        imgs: [
          "../../images/subject.png",
          "../../images/subject.png",
          "../../images/subject.png"
        ]
      },
      {
        name: "刘备",
        festival: "米奇书包",
        imgs: [
          "../../images/subject.png",
          "../../images/subject.png",
          "../../images/subject.png"
        ]
      },
    ],
  },

  createActivityPage: function () {
    wx.navigateTo({
      url: '../createActivity/createActivity'
    })
  },
  detail: function () {
    wx.navigateTo({
      url: '../activityDetailPage/activityDetailPage'
    })
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
