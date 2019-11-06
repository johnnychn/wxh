// miniprogram/pages/addAction/addAction.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date:'2019/10/11'
  },

  bindDateChange:function(data){
    this.data.date=data.detail.value
    console.log(data.detail.value)

  },
  addAction: function(e){
    wx.cloud.callFunction({
      // 云函数名称
      name: 'addAction',
      // 传给云函数的参数
      data: {
        title: 'title',
        memo: 'memo',
        endDate: 'endDate',
        userId: 'userId',
        inDate: 'inDate'
      },
      success: function (res) {
        console.log(res.result.sum) // 3
      },
      fail: console.error
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  }
})