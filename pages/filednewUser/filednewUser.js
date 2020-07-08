var url = require("../../utils/request.js")


Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [{
        name: '0',
        value: '男士',
      },
      {
        name: '1',
        value: '女士',
      },
    ],
    // items1: [
    //   {
    //     name: '职场人', value: '职场人', checked: 'true'
    //   },
    // ],
    multiArray: [
      ['1970','1971','1972','1973','1974','1975','1976','1977','1978','1979','1980','1981','1982','1983','1984','1985','1986','1987','1988','1989','1990','1991','1992','1993','1994','1995','1996','1997','1998','1999','2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018','2019','2020','2021','2022','2023','2024','2025','2026','2027','2028','2029','2030'],['01','02','03','04','05','06','07','08','09','10','11','12',]
    ],
    multiIndex: ['', ''],
    multiArray1: [
      ['1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025', '2026', '2027', '2028', '2029', '2030'],
      ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', ]
    ],
    multiIndex1: ['', ''],
    showModal: true,
    showModaltest: true,
    userName: '', //用户姓名
    sex: 0, //性别
    birthDate: '', //出生年月
    workDate: '', //参加工作时间
    phone: '', //手机号    
    type: 'job',
    show: false,
    listDatas: [],
    hah:''
  },
  bindMultiPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    var v = e.detail.value
    this.setData({
      birthDate: this.data.multiArray[0][v[0]] + '-' + this.data.multiArray[1][v[1]]
    })

  },
  bindMultiPickerChange1: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    var v = e.detail.value

    this.setData({
      workDate: this.data.multiArray1[0][v[0]] + '-' + this.data.multiArray1[1][v[1]],

    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var urls = url.default
    var token = wx.getStorageSync('token')
    wx.request({
      url: urls + 'user/selectUserJobByUserid',
      method: 'POST',
      data: {},
      header: {
        "Content-Type": "application/x-www-form-urlencoded",
        'token': token,

      },
      success: (res) => {
        console.log(res, 111111111)
        if (res.data.sex == 1) {
          this.setData({
            items: [{
                name: '0',
                value: '男士',
              },
              {
                name: '1 ',
                value: '女士',
                checked: true
              },
            ],
          })
        }
        if (res.data.sex == 0) {
          this.setData({
            items: [{
                name: '0',
                value: '男士',
                checked: true
              },
              {
                name: '1 ',
                value: '女士',
              },
            ],
          })
        }
        console.log(this.data.items)
        if (res.data.code = 200) {

          this.setData({
            listDatas: res.data,
            year1: res.data.salaryStr,
            month1: res.data.salaryEnd,
            sex: res.data.sex,
            birthDate: res.data.birthDate,
            workDate: res.data.workDate
          })
        }

      }
    });
  },
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
  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  bindDateChange1: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date1: e.detail.value
    })
  },

  quxiao() {
    this.setData({
      showModaltest: "false"
    })
  },
  queding() {
    this.setData({
      showModaltest: "false"
    })
  },
  quxiao1() {
    this.setData({
      showModal: "false"
    })
  },
  queding1() {
    this.setData({
      showModal: "false"
    })
  },
  /** 
   * 弹出框蒙层截断touchmove事件 
   */
  preventTouchMove: function () {},
  /** 
   * 隐藏模态对话框 
   */

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

  touchStart(e) {
    this.touchStartTime = e.timeStamp;
  },
  touchEnd(e) {
    this.touchEndTime = e.timeStamp;
  },
  checkLogin(e) {
    var urls = url.default
    var token = wx.getStorageSync('token')
    this.setData({
      phone: wx.getStorageSync('phone')
    })
    console.log(token, 1111)
    var vm = this;
    wx.request({
      url: urls + 'user/updateUserJob',
      method: 'POST',
      data: {
        userName: this.data.userName,
        sex: this.data.sex,
        birthDate: this.data.birthDate,
        workDate: this.data.workDate,
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded",
        'token': token,

      },
      success: (res) => {
        console.log(res, 111111111)
        if (res.data.code = 200) {
          wx.showToast({
            title: '成功',
            icon: 'success',
            duration: 2000
          })
          // console.log('token',res.data)
          // console.log(this.data.userName, 111)
          // console.log(this.data.sex, 55)
          // console.log(this.data.birthDate, 88)
          // console.log(this.data.workDate, 77)
          // console.log(this.data.phone, 22)
          // console.log(this.data.type, 22)
          wx.navigateBack();
        }


      }
    });




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