var call = require("../../utils/request.js")

// pages/mytaobao/index.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
     login_btn:"登录",
     account:'',
     password:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getStorage({
      key: 'isLogin',
      success(res) {
        wx.switchTab({
          url: '../taobao/index',
        })
      }
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

  },
  /*登录*/
  login:function(){
    let account = this.data.account;
    let password = this.data.password;
    let valid = /^[a-zA-Z][0-9a-zA-Z]{5,9}/;
    let valid_pw = /^[0-9a-zA-Z]{6,18}/;
    if (!valid.test(account)){
       wx.showToast({
         title: '请输入6-10位字母开头是账号',
         icon:'none',
         duration:2000
       })
       return false
    }
    if(!valid_pw.test(password)){
      wx.showToast({
        title: '请输入6-18位字母或数字组合密码',
        icon:'none',
        duration:2000
      });
      return false
    }
    this.setData({
      login_btn:'正在登录中...'
    });

    var login_data = {
      user_name: this.data.account,
      password: this.data.password
    }


    call.request('admin/login',login_data,this.login_success,this.login_fail);
  
  
  },
  /*动态获取input输入值*/
  inputAccount:function(e){
     this.setData({
       account: e.detail.value
     })
  },
  inputPassword: function (e) {
    this.setData({
      password: e.detail.value
    })
  },
  //登录成功
  login_success: function (data) {
    wx.showToast({
      title: '登录成功',
      icon: 'success',
      duration: 1000
    });
    wx.setStorage({
      key: 'isLogin',
      data: 'ture',
    })
    wx.switchTab({
      url: '../taobao/index',
    })
  },
  //登录失败
  login_fail:function(){
    wx.showToast({
      title: '登录失败',
      icon: 'fail',
      duration: 1000
    });
  }

})