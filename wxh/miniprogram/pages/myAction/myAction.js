//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    result: {
      memo: "六一儿童节到来了，本机构为小朋友准备了各种礼物，派发给大家六一儿童节到来了，本机构为小朋友准备了各种礼物，派发给大家六一儿童节到来了，本机构为小朋友准备了各种礼物，派发给大家六一儿童节到来了，本机构为小朋友准备",
      myAward: {
        name: "水彩笔",
        images: [
          'http://bpic.588ku.com/element_origin_min_pic/16/10/30/528aa13209e86d5d9839890967a6b9c1.jpg',
          'http://bpic.588ku.com/element_origin_min_pic/16/10/30/54fcef525fa8f6037d180f3c26f3be65.jpg',
          'http://bpic.588ku.com/element_origin_min_pic/16/10/30/62e3ca3a02dddb002eff00482078d194.jpg',
          'http://bpic.588ku.com/element_origin_min_pic/16/10/31/c7167fcfb4ebcd12621c05b0c852e98e.jpg'
        ]
      },
      awardList: [
        {
          name: "米奇书包",
          username:"张三",
          images: [
            'http://bpic.588ku.com/element_origin_min_pic/16/10/30/528aa13209e86d5d9839890967a6b9c1.jpg',
            'http://bpic.588ku.com/element_origin_min_pic/16/10/30/54fcef525fa8f6037d180f3c26f3be65.jpg',
            'http://bpic.588ku.com/element_origin_min_pic/16/10/30/62e3ca3a02dddb002eff00482078d194.jpg',
            'http://bpic.588ku.com/element_origin_min_pic/16/10/31/c7167fcfb4ebcd12621c05b0c852e98e.jpg'
          ]
        },
        {
          name: "钢笔",
          username: "李四",
          images: [
            'http://bpic.588ku.com/element_origin_min_pic/16/10/30/528aa13209e86d5d9839890967a6b9c1.jpg',
            'http://bpic.588ku.com/element_origin_min_pic/16/10/30/54fcef525fa8f6037d180f3c26f3be65.jpg',
            'http://bpic.588ku.com/element_origin_min_pic/16/10/30/62e3ca3a02dddb002eff00482078d194.jpg',
            'http://bpic.588ku.com/element_origin_min_pic/16/10/31/c7167fcfb4ebcd12621c05b0c852e98e.jpg'
          ]
        }
      ]
    }
  },
  onLoad: function () {
    let that = this;
    wx.cloud.callFunction({
      // 云函数名称
      name: 'getActionResult',
      // 传给云函数的参数
      data: {},
      success: function (res) {
        that.setData({
          result: res.data
        });
      },
      fail: console.error
    })
  }
})
