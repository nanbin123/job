var url = require("../../utils/request.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    gender: [{ id: 0, name: '男', checked: true }, { id: 1, name: '女', checked: false }],
    multiArray:[],
    multiIndex: [20, 0],
    multiArray1:[],
    multiIndex1: [10, 0],
    showModal:true,
    showModaltest: true,
    userName:'',//用户姓名
    sex:0,//性别
    birthDate:'',//出生年月
    workDate:'',//参加工作时间
    phone:'',//手机号    
    type:'job',
    show: false,
    listDatas:[],
    date: '',
    date1:''
  },//切换性别
  parameterTap: function (e) {
    var that = this
    var this_checked = e.currentTarget.dataset.id
    var genderList = this.data.gender//获取Json数组  
    for (var i = 0; i < genderList.length; i++) {
      if (genderList[i].id == this_checked) {
        genderList[i].checked = true;//当前点击的位置为true即选中
        this.data.sex = genderList[i].id;
      }
      else {
        genderList[i].checked = false;//其他的位置为false
      }
    }
    that.setData({
      gender: genderList
    })
  },

  bindMultiPickerChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    var v = e.detail.value
    this.setData({
      birthDate: this.data.multiArray[0][v[0]]+'-'+this.data.multiArray[1][v[1]]
    })
  },
  bindMultiPickerChange1: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    var v = e.detail.value

    this.setData({
      workDate: this.data.multiArray1[0][v[0]]+'-'+this.data.multiArray1[1][v[1]],

    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取当前年
    var fullYear=new Date().getFullYear();
    var birthDate = [];//出生日期
    var workDate=[]
    for (var birthYear = [], i = fullYear; i >= 1970; i--)
       birthYear.push(i);
       birthDate.push(birthYear);
    for (var workYear = [], i = fullYear; i >= 1990; i--)
      workYear.push(i);
      workDate.push(workYear);
    for (var month = [], i = 1; i <= 12; i++){
      if (i < 10) month.push("0" + i)
        else month.push(i);
    }
    birthDate.push(month);
    workDate.push(month);
    this.setData({
      multiArray: birthDate,
      multiArray1: workDate
    })

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
  // 日期
  // bindChange: function (e) {
  //   const val = e.detail.value
  //   this.setData({
  //     year: this.data.years[val[0]],
  //     month: this.data.months[val[1]],
  //   })
  // },
   
  // bindChange1: function (e) {
  //   const val = e.detail.value
  //   this.setData({
  //     year1: this.data.years[val[0]],
  //     month1: this.data.months[val[1]],
  //   })
  // },
  quxiao(){
  this.setData({
    showModaltest: "false"
  })
  },
  queding(){
    this.setData({
      showModaltest: "false"
    })
  },
  quxiao1(){
    this.setData({
      showModal: "false"
    })
    },
    queding1(){
      this.setData({
        showModal: "false"
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
  // hideModal() {
  //   var that = this;
  //   that.setData({
  //     showModal: true,
  //     showModaltest: true
  //   })
  // },
  // showModalBtn() {
  //   var that = this;
  //   that.setData({
  //     showModal: false
  //   })
  // },
  // showModalBtn1() {
  //   var that = this;
  //   that.setData({
  //     showModaltest: false
  //   })
  // },
  formSubmit: function (e) {
    var arr = e.detail.value.birthDate.split('月');
    var str = arr[0].replace('年', '-');
    var arr1 = e.detail.value.workDate.split('月');
    var str1 = arr1[0].replace('年', '-');
    console.log(str1)
    this.setData({
      userName: e.detail.value.userName,
      birthDate: str,
      workDate: str1

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
  checkLogin (e) {
    var urls = url.default
    var token = wx.getStorageSync('token')
    this.setData({
        phone: wx.getStorageSync('phone')
    })
    if( this.data.userName!='' && this.data.birthDate!='' && this.data.workDate!=''){
      wx.request({
        url: urls + 'user/insertUserJob',
        method: 'POST',
        data: {
          userName: this.data.userName,
          sex: this.data.sex,
          birthDate:this.data.birthDate,
          workDate:this.data.workDate,
          phone: wx.getStorageSync('phone'),
          type: this.data.type,
        },
        header: {
          "Content-Type": "application/x-www-form-urlencoded",
          'token': token,
        },
        success:(res) =>{       
          if (res.data.code = 200) {
            wx.showToast({
              title: '成功',
              icon: 'success',
              duration: 2000
            })
            wx.setStorageSync('id', res.data.data.id)
            wx.setStorageSync('openid', res.data.data.openid)
            wx.setStorageSync('loginData', 'true')
            wx.navigateBack();
          }
        }
      }); 
    }else{
      wx.showToast({
        title: '请将信息填写完整',
        icon: 'none',
        duration: 2000
      })
    }
   
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