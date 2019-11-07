// miniprogram/pages/actionDetail/actionDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShowDele: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options.id){
      let id = options.id;
      let that = this;
      wx.cloud.callFunction({
        // 云函数名称
        name: 'getActionDetail',
        // 传给云函数的参数
        data: {
          id: id
        },
        success: function (res) {
          console.log(res);
          let action = res.result.data;
          if (action.status == 0 && new Date(action.endDate) < new Date()) {
            action.status = 2;
          }
          action.gift = res.result.gift.data;
          that.setData({
            action: action,
            isShowDele: action.status==0
          });
        },
        fail: console.error
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    wx.showShareMenu({
      withShareTicket: true
    });
    return {
      title: '领取奖品活动',
      path: 'pages/myAction/myAction'
    }
  },

  openGallery: function () {
    this.setData({
      istrue: true
    })
  },

  closeGallery: function () {
    this.setData({
      istrue: false
    })
  },

  delAction: function(e){
    let that = this;
    wx.showModal({
      title: '提示',
      content: '确定要删除此活动吗？',
      confirmText: "确定",
      cancelText: "取消",
      success: function (res) {
        console.log(res);
        if (res.confirm) {
          wx.cloud.callFunction({
            // 云函数名称
            name: 'deleteAction',
            // 传给云函数的参数
            data: {
              id: that.data.action.id
            },
            success: function (res) {
              that.setData({
                action: res.result.data
              });
            },
            fail: console.error
          })
        }
      }
    });
  },

  previewImg: function (e) {
    var imgArr = e.currentTarget.dataset.src;
    wx.previewImage({
      current: imgArr[0],     //当前图片地址
      urls: imgArr,               //所有要预览的图片的地址集合 数组形式
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  }
})