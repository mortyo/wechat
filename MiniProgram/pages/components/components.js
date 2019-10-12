// pages/components.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    fruits:[],
    name: 'nina',
    skill: ['请选择','eat','fly','aaa','bbb',111],
    poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
    song_name: '此时此刻',
    author: '许巍',
    song_src: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
    //拍摄视频src
    video_src: '',
    //弹幕输入
    input_value:'',
    //地图数据
    marker:[{
      id:0,
      iconPath: '/assets/favicon.png',
      latitude: 23,
      longitude: 113,
      width: 50,
      height: 50,
    }],
    polyline: [{
      points: [{
        longitude: 113,
        latitude: 23
      }, {
        longitude: 113.324520,
        latitude: 23.21229
      }],
      color: "#66CD00",
      width: 2,
      dottedLine: true  //虚线
    }],
    controls: [{
      id: 1,
      iconPath: '/assets/favicon.png',
      position: {
        left: 0,
        top: 300 - 50,
        width: 50,
        height: 50
      },
      clickable: true
    }]
  },


  change:function(e){
    console.log(e.detail.value)
    this.data.fruits = e.detail.value
    console.log(this.data.fruits)
  },
  form_submit:function(e){
    console.log(e.detail.value)
  },
  form_reset:function(){
    console.log('form发生了reset事件')
  },
  picker_change:function(e){
    console.log(e.detail.value)
  },
  picker_cancel:function(){
    console.log('picker已取消')
  },
  //audio canvasCtx操控
  song_play:function(){
    this.audioCtx.play()
  },
   song_pause: function () {
    this.audioCtx.pause()
  }, 
  song_to10: function () {
    this.audioCtx.seek(10)
  }, 
  song_toStart: function () {
    this.audioCtx.seek(0)
  },
  //获取照片
  take_photo:function(){
    const cameraCtx = wx.createCameracanvasCtx(this)
    cameraCtx.takePhoto({
      quality: 'high',
      success:(res) => {
        this.setData({
          src:res.tempImagePath
        })
      }
    })
  },
  error:function(err){
    console.log(err.detail)
  },
  //获取视频
  get_video:function(){
    var that = this
    wx.chooseVideo({
      sourceType: ['album', 'camera'],
      maxDuration: 60,
      camera: ['front', 'back'],
      success: function (res) {
        that.setData({
          src: res.tempFilePath
        })
        console.log('选择视频成功')
      }
    })
  },
  //视频弹幕
  input_danmu: function (e) {
    this.data.input_value = e.detail.value
    console.log('发送弹幕：'+this.data.input_value)
  },
  send_danmu:function(){
    this.videoCtx.sendDanmu({
      text:this.data.input_value,
      // color:
    })
  },
  //地图
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log(e.markerId)
  },
  controltap(e) {
    console.log(e.controlId)
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('')
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.audioCtx = wx.createAudioContext('myaudio')
    this.videoCtx = wx.createVideoContext('myvideo')
    
    let canvasCtx = wx.createCanvasContext('mycanvas')
    canvasCtx.setStrokeStyle("#00ff00")
    canvasCtx.setLineWidth(5)
    canvasCtx.rect(0, 0, 200, 200)
    canvasCtx.stroke()
    canvasCtx.setStrokeStyle("#ff0000")
    canvasCtx.setLineWidth(2)
    canvasCtx.moveTo(160, 100)
    canvasCtx.arc(100, 100, 60, 0, 2 * Math.PI, true)
    canvasCtx.moveTo(140, 100)
    canvasCtx.arc(100, 100, 40, 0, Math.PI, false)
    canvasCtx.moveTo(85, 80)
    canvasCtx.arc(80, 80, 5, 0, 2 * Math.PI, true)
    canvasCtx.moveTo(125, 80)
    canvasCtx.arc(120, 80, 5, 0, 2 * Math.PI, true)
    canvasCtx.stroke()
    canvasCtx.draw()
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