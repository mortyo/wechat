// pages/WeUI/WeUI.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'http://desk-fd.zol-img.com.cn/g5/M00/02/05/ChMkJ1bKyZmIWCwZABEwe5zfvyMAALIQABa1z4AETCT730.jpg',
      'https://desk-fd.zol-img.com.cn/t_s1366x768c5/g4/M06/09/0A/ChMly12MILmIeCngAAal0iIuJuwAAX05wG7LqUABqXq690.jpg',
      'https://desk-fd.zol-img.com.cn/t_s1366x768c5/g4/M05/09/0A/ChMly12MIK2IO5DRAARbrhLcP8EAAX05gPL1B4ABFvG036.jpg'
    ],
    show: false
  },

  show(){
    this.setData({
      show:true
    })
  },
  change(e) {
    console.log('current index has changed', e.detail)
  },
  delete(e) {
    console.log('delete', e.detail)
  },
  hide() {
    console.log('component hide')
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