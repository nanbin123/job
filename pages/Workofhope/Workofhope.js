// pages/Workofhope/Workofhope.js
let listDatas = require('../../datas/betweenJobs.js');
var url = require("../../utils/request.js")

Page({

  /**
   * 页面的初始数据
   */
  data: {
    showActionsheet: false,
    actionSheetItems: [],
    menu: '',
    jobStatus:0,
    position: [],


  },
    
  close() {
    console.log("close")
    this.setData({
      showActionsheet: !this.data.showActionsheet
    })
  },
  btnClick(e) {
    var flag = e.currentTarget.dataset.flag
    let index = e.detail.index
    var urls = url.default

    var token = wx.getStorageSync('token')
    console.log(token, 1111)
    console.log(flag)
    if (!flag){
     this.setData({
       menu: this.data.actionSheetItems[index].text,
       jobStatus: this.data.actionSheetItems[index].value
     })
     console.log('用户点击了')
     wx.request({
      url: urls+"user/updateUserJob",
      method: 'POST',
      data: {
        menu: this.data.actionSheetItems[index].text,
        jobStatus: this.data.actionSheetItems[index].value
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded",
        'token': token
      },
      success(res) {
        console.log(res)
      }
    });
   }
   
   this.close()

  },
  toJobExpectations(){
 wx.navigateTo({
   url: '/pages/filledJobExpectations/filledJobExpectations',

 })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      actionSheetItems: listDatas.betweenJob_list.data
    })
    var urls = url.default
    var token = wx.getStorageSync('token')
    var that = this;
    wx.request({
      url: urls+'user/selectByUseridUserjobExpect',
      method: "POST",
      // 请求头部
      header: {
        'content-type': 'application/text',
        'token': token
      },
      success: function (res) {
        console.log(res)
        that.setData({
          position: res.data,
          id: res.data[0].id,
          id1:res.data[0].id
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
    var urls = url.default
    var token = wx.getStorageSync('token')
    var that = this;
    wx.request({
      url: urls+'user/selectByUseridUserjobExpect',
      method: "POST",
      // 请求头部
      header: {
        'content-type': 'application/text',
        'token': token
      },
      success: function (res) {
        console.log(res)
        that.setData({
          position: res.data,
          id: res.data[0].id,
          id1:res.data[0].id
        })
      }
    })
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