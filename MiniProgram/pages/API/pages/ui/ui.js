// pages/API/pages/ui/ui.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  //交互
  showToast(){
    wx.showToast({
      title: '就是想提示一下',
      icon: '',  //放success，loading，none
      image: '/assets/foo.png',  //存放路径
      duration: 1000,  //单位ms
      mask: false,
      success: function(res) {
        console.log(res)
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  showModal(){
    wx.showModal({
      title: '警告',
      content: '确定不还钱吗？',
      showCancel: true,
      cancelText: '还还还',
      cancelColor: '',
      confirmText: '确定',
      confirmColor: '',
      success: function(res) {
        console.log(res)
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  showLoading(){
    wx.showLoading({
      title: 'Loading...',
      mask: true,
      success: function(res) {
        console.log(res)
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  showActionSheet(){
    wx.showActionSheet({
      itemList: ['打架','斗殴'],
      itemColor: '',
      success: function(res) {
        console.log(res)
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  hideToast(){
    wx.hideToast()
  },
  //动画
  














  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '哈哈哈',
    })
    wx.setNavigationBarColor({
      frontColor: '#000000',
      backgroundColor: '#ADFF2F',
    })
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