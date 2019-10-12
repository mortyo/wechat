// pages/API/pages/openAPI/openAPI.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  login(){
    wx.login({
      success: function(res) {
        console.log(res)
      },
      fail: function(res) {},
      complete: function(res) {},
    })
    // 账号信息
    const accountInfo = wx.getAccountInfoSync()
    console.log(accountInfo)
    // 用户信息
    wx.getUserInfo({
      success(res){
        console.log(res)
      }
    })
  },
  requestPayment(){
    wx.requestPayment({
      timeStamp: '',
      nonceStr: '',
      package: '',
      signType: 'MD5',
      paySign: '',
      success: function(res) {
        console.log(res)
      },
      fail: function(res) {
        console.log('fail')
      },
      complete: function(res) {},
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