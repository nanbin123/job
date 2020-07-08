// pages/associationActivity/associationActivity.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     experience:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options.experience){
      this.setData({
        experience: options.experience
      })
    }

  },
  bindFormSubmit: function (e) {
    // this.setData({
    //   advantage: e.detail.value.advantage

    // })

    //=== 2.存储到数据缓存的方式 =========
    // wx.setStorage({
    //   key: "advantage",
    //   data: this.data.advantage,
    //   success: function () {
    //     wx.navigateBack();   //返回上一个页面
    //   }
    // })

    var pages = getCurrentPages()
    var prevPage = pages[pages.length - 2]
    //向上一个页面中的data 中赋值
    prevPage.setData({
      experience: e.detail.value.advantage
    })
    wx.navigateBack({});
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