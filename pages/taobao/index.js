//引入js文件
var js = require("ceshi.js")

Page({

  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots : true,
    imgUrls: [
      'http://gw.alicdn.com/imgextra/i4/195/TB2TTzyaCiJ.eBjSszfXXa4bVXa_!!195-0-yamato.jpg_q50.jpg',
      'http://gw.alicdn.com/imgextra/i2/196/TB2XHXZamCI.eBjy1XbXXbUBFXa_!!196-0-yamato.jpg_q50.jpg',
      'http://img.alicdn.com/tps/TB1LX_WNVXXXXX7XpXXXXXXXXXX-1125-352.jpg_q50.jpg',
      'http://img.alicdn.com/imgextra/i2/83/TB2p6W8axuI.eBjy0FdXXXgbVXa_!!83-0-yamato.jpg_q50.jpg'

    ],
    menu:[
      {
        imgUrl: 'http://gw.alicdn.com/tps/i2/TB19BluIVXXXXX6XpXXN4ls0XXX-183-129.png?imgtag=avatar',
        descs:'天猫'
      },
      {
        imgUrl: 'http://gw.alicdn.com/tps/i2/TB19BluIVXXXXX6XpXXN4ls0XXX-183-129.png?imgtag=avatar',
        descs: '天猫'
      },
      {
        imgUrl: 'http://gw.alicdn.com/tps/i2/TB19BluIVXXXXX6XpXXN4ls0XXX-183-129.png?imgtag=avatar',
        descs: '天猫'
      },
      {
        imgUrl: 'http://gw.alicdn.com/tps/i2/TB19BluIVXXXXX6XpXXN4ls0XXX-183-129.png?imgtag=avatar',
        descs: '天猫'
      }, {
        imgUrl: 'http://gw.alicdn.com/tps/i2/TB19BluIVXXXXX6XpXXN4ls0XXX-183-129.png?imgtag=avatar',
        descs: '天猫'
      }, {
        imgUrl: 'http://gw.alicdn.com/tps/i2/TB19BluIVXXXXX6XpXXN4ls0XXX-183-129.png?imgtag=avatar',
        descs: '天猫'
      }, {
        imgUrl: 'http://gw.alicdn.com/tps/i2/TB19BluIVXXXXX6XpXXN4ls0XXX-183-129.png?imgtag=avatar',
        descs: '天猫'
      }, {
        imgUrl: 'http://gw.alicdn.com/tps/i2/TB19BluIVXXXXX6XpXXN4ls0XXX-183-129.png?imgtag=avatar',
        descs: '天猫'
      }, {
        imgUrl: 'http://gw.alicdn.com/tps/i2/TB19BluIVXXXXX6XpXXN4ls0XXX-183-129.png?imgtag=avatar',
        descs: '天猫'
      }, {
        imgUrl: 'http://gw.alicdn.com/tps/i2/TB19BluIVXXXXX6XpXXN4ls0XXX-183-129.png?imgtag=avatar',
        descs: '天猫'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    wx.setNavigationBarTitle({
      title:'首页'
    });
  
    console.log(js)
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  /**
   * 测试函数
   */
  ceshi:function(){
    console.log('dianji')
  }
})