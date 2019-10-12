//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  component_tap:function(){
    wx.navigateTo({
      url: '../components/components',
    })
  },
  API_tap:function(){
    wx.navigateTo({
      url: '../API/API',
    })
  },
  server_side:function(){
    wx.navigateTo({
      url: '../server/server',
    })
  },


  
  onLoad: function () {
    //
  },
})
