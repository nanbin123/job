// socialSecurity/ssIncreaseStaff/ssIncreaseStaff.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    radioId: "",
    loves: [
      { id: 1, name: "月付(100元/项)", checked: 'true' },
      { id: 2, name: "季度付(270元/项)" },
      { id: 3, name: "半年付(500元/项)" },
      { id: 3, name: "年付(700元/项)" },
      { id: 3, name: "其他" },
    ],
    confirm: [
      { id: 1, name: "本人对以上参保信息的真实性、准确性负责。并已知晓以上提示内容。"},     
    ]
  },
  updataRadio: function (e) {
    var Id = e.value.id
    this.setData({
      radioId: Id
    })
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