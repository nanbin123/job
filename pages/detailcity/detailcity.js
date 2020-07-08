// pages/detailcity/detailcity.js
var city = require("../../datas/city")
console.log()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cityData:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   this.setData({
     cityData:city.cityData[0].districts
   })
  },
  toexperience(e){
    var pages = getCurrentPages()
    var prevPage = pages[pages.length - 2]
    //向上一个页面中的data 中赋值
    prevPage.setData({
      city: e.currentTarget.dataset.name,
      adcode: e.currentTarget.dataset.adcode
    })
      this.setData({
        active: e.currentTarget.dataset.experience
      })
  },
  toback(){
    wx.navigateBack({
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  formReset(e) {    
    this.setData({
      active:''
    })
  },
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