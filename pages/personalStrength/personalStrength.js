// pages/personalStrength/personalStrength.js
var url = require("../../utils/request.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    advantage:''
  },

  bindFormSubmit: function (e) {
    var str = e.detail.value.advantage.split('\n').join('&hc')
    console.log(str,111)
    this.setData({
      advantage:str
    })
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    console.log('form发生了submit事件，携带数据为：', this.data.advantage)
    this.checkStrength()
  },
  //保存时发送数据
 checkStrength() {
  var urls = url.default
  var token = wx.getStorageSync('token')
  console.log(this.data.advantage, 1111)
      wx.request({
        url: urls+"user/updateUserJob",
        method: 'POST',
        data: {
          advantage: this.data.advantage
        },
        header: {
          "Content-Type": "application/x-www-form-urlencoded",
          'token': token
        },
        success(res) {
          console.log(res)
          if (res.data.code = 200) {
            wx.showToast({
              title: '成功',
              icon: 'success',
              duration: 2000
            })
          }
        }
      });
      console.log(this.data.advantage,222)

  wx.navigateBack({})

},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var advantage = options.advantage
    this.setData({
      advantage:advantage
    })
  //   var urls = url.default
  //   var token = wx.getStorageSync('token')
  // console.log(this.data.advantage)
  //   wx.request({
  //     url: urls+"user/updateUserJob",
  //     method: 'POST',
  //     data: {
  //       advantage: advantage
  //     },
  //     header: {
  //       "Content-Type": "application/x-www-form-urlencoded",
  //       'token': token
  //     },
  //     success(res) {
  //       console.log(res)
  //     }
  //   });
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