// pages/personalStrength/personalStrength.js
var url = require("../../utils/request.js"),
  request = require("../../common/js/request"),
  config = require("../../config.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    buttonSubmit:'下一步',
    status:""
  },

  bindFormSubmit: function (e) {
    if (this.data.status == config.jobAdopt) {
        this.updateUserJob(e.detail.value.advantage.split('\n').join('&hc'))
        wx.navigateBack({})
      } else {
      switch (this.data.status) {
          case config.jobExpect: {//期望职位
            this.updateUserJob(e.detail.value.advantage.split('\n').join('&hc'))
            wx.navigateTo({
              url: "/my/filledJobExpectations/filledJobExpectations"
            });
            break
        } case config.jobExperience: {//工作经历
          this.updateUserJob(e.detail.value.advantage.split('\n').join('&hc'))
          wx.navigateTo({
            url: "/my/workExperienceTitle/workExperienceTitle"
          });
          break
        } case config.jobEducation: {//教育经历
          this.updateUserJob(e.detail.value.advantage.split('\n').join('&hc'))
          wx.navigateTo({
            url: "/my/educationExperienceTitle/educationExperienceTitle"
          });
          break
        }
      }
    }
  },

  updateUserJob: function (advantage){
    wx.request({
      url: url.default + "user/updateUserJob",
      method: 'POST',
      data: {
        advantage: advantage
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded",
        'token': wx.getStorageSync('token')
      },
      success(res) {
        if (res.data.code = 200) {
          wx.showToast({
            title: '个人优势添加成功',
            icon: 'none',
            duration: 2000
          })
        }
      }
    });
  },

  /**
   *  生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    request.serveRequest({
      url: "/user/checkStatus",
      method: "POST",
      data: {
        status: 1001
      }
    }).then(function (res) { 
      //如果没有下级页面了按钮变成提交 
      if (res.data.status == config.jobAdopt) {
        that.setData({
          buttonSubmit: '提交'
        })
      }
      that.setData({
        status: res.data.status
      })
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