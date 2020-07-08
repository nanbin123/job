// pages/UserContent/UserContent.js
var url = require("../../utils/request.js")
const date = new Date()
const years = []
const months = []
const years1 = []
const months1 = []


for (let i = 1800; i <= date.getFullYear(); i++) {
  years.push(i)
}

for (let i = 1; i <= 12; i++) {
  months.push(i)
}


for (let i = 1800; i <= date.getFullYear(); i++) {
  years1.push(i)
}

for (let i = 1; i <= 12; i++) {
  months1.push(i)
}



Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [
      {
        name: '0', value: '男士', checked: 'true'
      },
      { name: '1 ', value: '女士' },
    ],
    // items1: [
    //   {
    //     name: '职场人', value: '职场人', checked: 'true'
    //   },
    // ],
    years: years,//年
    years1: years1,//年

    // year: date.getFullYear(),
    months: months,//月
    months1: months1,//月
    value: [9999, 15, 1],
    showModal: true,
    showModaltest: true,
    userName: '',//用户姓名
    sex: 0,//性别
    birthDate: '',//出生年月
    workDate: '',//参加工作时间
    listArr:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var token = wx.getStorageSync('token')
    var urls = url.default
    var that = this
    console.log(token,155555)

      console.log('token有效')
      wx.request({
        url: urls+'user/selectUserJobByUserid', 
        method: "POST",
        header: {
          "token": token,
          "Content-Type": "application/x-www-form-urlencoded",

        },
        data: {
        },
        success(res) {
          that.setData({
            listArr: res.data,
            userName:res.data.userName
          })
          console.log(res.data,222)
        }
      })
    }
,
  radioChange: function (e) {
    this.setData({
      sex: e.detail.value
    })
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  },
  radioChange1: function (e) {
    this.setData({
      sex: e.detail.value
    })
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  },

  // 判断input框是否为空
  bindKeyInput: function (e) {
    if (e.detail.value) {
      this.setData({
        userName: e.detail.value
      })
    } else {
      wx.showToast({
        title: '不能为空或您未更改',
        icon: 'false',
        duration: 2000
      })
    }
  },
  // 日期
  bindChange: function (e) {
    const val = e.detail.value
    this.setData({
      year: this.data.years[val[0]],
      month: this.data.months[val[1]],
    })
  },

  bindChange1: function (e) {
    const val = e.detail.value
    this.setData({
      year1: this.data.years[val[0]],
      month1: this.data.months[val[1]],
    })
  },

  /** 
   * 弹出框蒙层截断touchmove事件 
   */
  preventTouchMove: function () {
  },
  /** 
   * 隐藏模态对话框 
   */
  hideModal() {
    var that = this;
    that.setData({
      showModal: true,
      showModaltest: true
    })
  },
  showModalBtn() {
    var that = this;
    that.setData({
      showModal: false
    })
  },
  showModalBtn1() {
    var that = this;
    that.setData({
      showModaltest: false
    })
  },
  formSubmit: function (e) {
    this.setData({
      userName: e.detail.value.userName,
      birthDate: e.detail.value.birthDate,
      workDate: e.detail.value.workDate

    })
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    console.log('form发生了submit事件，携带数据为：', this.data.userName)
    console.log('form发生了submit事件，携带数据为：', this.data.birthDate)
    console.log('form发生了submit事件，携带数据为：', this.data.workDate)
  },

  checkLogin() {
    var url = "http://101.132.155.107:8080/new_product/user/updateUserJob";
    var token = wx.getStorageSync('token')
    console.log(token, 1111)
    wx.request({
      url,
      method: 'POST',
      data: {
        userName: this.data.userName,
        sex: this.data.sex,
        birthDate: this.data.birthDate,
        workDate: this.data.workDate
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
    console.log(this.data.userName, 111)
    console.log(this.data.sex, 55)
    console.log(this.data.birthDate, 88)
    console.log(this.data.workDate, 77)
    wx.navigateBack();
  },

  /**
   *
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