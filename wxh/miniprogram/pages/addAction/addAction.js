// miniprogram/pages/addAction/addAction.js

function dateFormat(fmt, date) {
  let ret;
  let opt = {
    "Y+": date.getFullYear().toString(),        // 年
    "m+": (date.getMonth() + 1).toString(),     // 月
    "d+": date.getDate().toString(),            // 日
    "H+": date.getHours().toString(),           // 时
    "M+": date.getMinutes().toString(),         // 分
    "S+": date.getSeconds().toString()          // 秒
    // 有其他格式化字符需求可以继续添加，必须转化成字符串
  };
  for (let k in opt) {
    ret = new RegExp("(" + k + ")").exec(fmt);
    if (ret) {
      fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
    };
  };
  return fmt;
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    date:dateFormat('YYYY-mm-dd',new Date()),
    startDate:dateFormat('YYYY-mm-dd',new Date()),
    name:'',
    desc:'',
    currentDescWordsCount:0
  },

  bindName:function(e){
    //活动名称
    this.setData({
      name: e.detail.value
    })
    // console.log(e.detail.value)
  },

  bindDesc:function(e){
    //活动描述
    this.setData({
      desc: e.detail.value,
      currentDescWordsCount:e.detail.value.length
    })


    // console.log(e.detail.value)
  },

  bindDateChange:function(e){
    //结束日期
    this.setData({
      date: e.detail.value
    })
    // console.log(e.detail.value)

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