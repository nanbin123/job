// pages/educationExperienceContent/educationExperienceContent.js
var url = require("../../utils/request.js")

Page({

  /**
   * 页面的初始数据
   */
  data: {
    multiArray: [['博士', '硕士', '本科', '大专', '高中', '中专/中技', '初中及以下'], ['全日制', '非全日制']],
    objectMultiArray: [
      [
        {
          id: 0,
          name: '博士'
        },
        {
          id: 1,
          name: '硕士'
        },
        {
          id: 2,
          name: '本科'
        },
        {
          id: 3,
          name: '大专'
        },
        {
          id: 4,
          name: '高中'
        },
        {
          id: 5,
          name: '中专/中技'
        },
        {
          id: 6,
          name: '初中及以下'
        },
      ], [
        {
          id: 0,
          name: '全日制'
        },
        {
          id: 1,
          name: '非全日制'
        },
      ]
    ],
    multiArray1:[['1980','1981','1982','1983','1984','1985','1986','1987','1988','1989','1990','1991','1992','1993','1994','1995','1996','1997','1998','1999','2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018','2019','2020','2021','2022','2023','2024','2025','2026','2027','2028','2029','2030'],['1980','1981','1982','1983','1984','1985','1986','1987','1988','1989','1990','1991','1992','1993','1994','1995','1996','1997','1998','1999','2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018','2019','2020','2021','2022','2023','2024','2025','2026','2027','2028','2029','2030']],
    multiIndex: [0, 0],
    multiIndex1: [0, 0],
    school:'',//学校名称
    education: '',//学历水平
    major: '',//专业名称
    eduTimeStr: '',//时间段（开始时间）
    eduTimeEnd: '',//时间段（结束时间）
    experience: '',//在校经历
    userId:'',
    time:'',
    fullTime:''
  },

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

  /** 
   * 弹出框蒙层截断touchmove事件 
   */
  preventTouchMove: function () {
  },  
  educationBindtap: function(e){
    wx.hideKeyboard()
  },
  //学历水平
  bindMultiPickerChange: function (e) {
    var v = e.detail.value

    this.setData({
      education:this.data.multiArray[0][v[0]]+'-'+this.data.multiArray[1][v[1]]
    })
  },
  bindMultiPickerChange1: function (e) {
    var v = e.detail.value
    this.setData({
      time: this.data.multiArray1[0][v[0]]+'-'+this.data.multiArray1[1][v[1]]
    })
  },
  bindMultiPickerColumnChange: function (e) {
    var data = {
      multiArray: this.data.multiArray,
      multiIndex: this.data.multiIndex
    };
    data.multiIndex[e.detail.column] = e.detail.value;
    switch (e.detail.column) {
      case 0:
        switch (data.multiIndex[0]) {
          case 0:
            data.multiArray[1] = ['全日制', '非全日制'];
            break;
          case 1:
            data.multiArray[1] = ['全日制', '非全日制'];
            break;
          case 2:
            data.multiArray[1] = ['全日制', '非全日制'];
            break;
          case 3:
            data.multiArray[1] = ['全日制', '非全日制'];
            break;
          case 4:
            data.multiArray[1] = ['', ''];
            break;
          case 5:
            data.multiArray[1] = ['', ''];
            break;
          case 6:
            data.multiArray[1] = ['', ''];
            break;


        }
        data.multiIndex[1] = 0;
        break;
    }
    // console.log(data.multiIndex[0]);
    this.setData(data);
    this.setData({
      subscript: data.multiIndex[0]
    })
  },
  formSubmit: function (e) {
    var time = e.detail.value.time
    var arr=time.split("-");
    var education = e.detail.value.education.split("-")
    this.setData({
      school: e.detail.value.school,
      education: education[0],
      major: e.detail.value.major,
      experience: e.detail.value.experience,
      eduTimeStr:arr[0],
      eduTimeEnd:arr[1],
      fullTime:education[1]
    })
},
formReset:function(e){
  wx.request({
    url: url.default + 'user/updateByIdUserJobEducation', 
    method: 'POST',
    data: {
      id:this.data.userId,
      delflag:1
    },
    header: {
      "Content-Type": "application/x-www-form-urlencoded",
      'token': wx.getStorageSync('token')
    },
    success(res) {
      console.log(res)
      if (res.data.code = 200) {
        wx.showToast({
          title: '刪除教育经历成功',
          icon: 'success',
          duration: 2000
        })
        wx.navigateBack({
        })
      }
    }
  });
  },
  checkSave() { 
    wx.request({
        url: url.default+"user/updateByIdUserJobEducation",
      method: 'POST',
      data: {
        school: this.data.school,
        education: this.data.education,
        major: this.data.major,
        eduTimeStr: this.data.eduTimeStr,
        eduTimeEnd: this.data.eduTimeEnd,
        experience: this.data.experience,
        id: this.data.userId,
        fullTime:this.data.fullTime
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded",
        'token': wx.getStorageSync('token')
      },
      success(res) {   
        if (res.data.code = 200) {
          wx.showToast({
            title: '修改教育经历成功',
            icon: 'none',
            duration: 2000
          })
        }
      }
    });
    wx.navigateBack();
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var id = options.id
    this.setData({
    userId:id
  })
  var that = this
  wx.request({
    url: url.default+'user/selectByIdUserJobEducation', 
    method: 'POST',
    data: {
       id:id
    },
    header: {
      "Content-Type": "application/x-www-form-urlencoded",
      'token': wx.getStorageSync('token')
    },
    success(res) {
      if (res.data.code = 200) {
        that.setData({
         school:res.data.data.school,//学校名称
         education: res.data.data.education,//学历水平
         major: res.data.data.major,//专业名称
         experience:res.data.data.experience,//在校经历
         time:res.data.data.eduTimeStr+'-'+res.data.data.eduTimeEnd
        })
      }
    }
  });
  },

  toAssociationActivity(e){
    var experience = this.data.experience
    wx.navigateTo({
      url: '/pages/associationActivity/associationActivity?experience=' + experience,
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