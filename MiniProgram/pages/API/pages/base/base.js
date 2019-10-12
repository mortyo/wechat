// pages/API/pages/base/base.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'nina'
  },
  canIUse(){
    console.log(wx.canIUse('console.log'))
  },
  //系统信息
  getSystemInfoSync(){
    console.log(wx.getSystemInfoSync())
  },
  getSystemInfo(){
    wx.getSystemInfo({
      success: function(res) {
        console.log(res)
      },
      fail: function(res) {
        console.log('fail')
      },
      complete: function(res) {
        console.log('complete')
      },
    })
  },
  setEnableDebug(){
    wx.setEnableDebug({
      enableDebug: true,
    })
  },
  console(){
    console.log('console.log():'+this.data.name)
  },
  setTimeout(){
    setTimeout(()=>{
      console.log('1s later')
    },1000)
  },
  setInterval(){
    setInterval(()=>{
      console.log('interval 1s')
    },1000)
  },













  //生命周期
  getLaunchOptionsSync(){
    console.log(wx.getLaunchOptionsSync())
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