// pages/workExperienceContent/workExperienceContent.js
let listDatas = require('../../datas/postList.js');
var url = require("../../utils/request.js")


Page({

  /**
   * 页面的初始数据
   */
  data: {
    // multiArray:[['1990年','1991年','1992年','1993年','1994年','1995年','1996年','1997年','1998年','1999年','2000年','2001年','2002年','2003年','2004年','2005年','2006年','2007年','2008年','2009年','2010年','2011年','2012年','2013年','2014年','2015年','2016年','2017年','2018年','2019年','2020年','2021年','2022年','2023年','2024年','2025年','2026年','2027年','2028年','2029年','2030年'],['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月',]],
    // multiIndex: ['', ''],
    // multiArray1:[['1990年','1991年','1992年','1993年','1994年','1995年','1996年','1997年','1998年','1999年','2000年','2001年','2002年','2003年','2004年','2005年','2006年','2007年','2008年','2009年','2010年','2011年','2012年','2013年','2014年','2015年','2016年','2017年','2018年','2019年','2020年','2021年','2022年','2023年','2024年','2025年','2026年','2027年','2028年','2029年','2030年'],['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月',]],
    // multiIndex1: ['', ''],
    // date:'',
    // date1:'',
    multiArray: [
      [{
          name: "1990",
          code: 209
        }, {
          name: "1991",
          code: 210
        },
        {
          name: "1992",
          code: 209
        }, {
          name: "1993",
          code: 210
        },
        {
          name: "1994",
          code: 210
        },
        {
          name: "1995",
          code: 210
        },
        {
          name: "1996",
          code: 210
        },
        {
          name: "1997",
          code: 210
        },
        {
          name: "1998",
          code: 210
        },
        {
          name: "2000",
          code: 210
        },
        {
          name: "2001",
          code: 210
        },
        {
          name: "2002",
          code: 210
        },
        {
          name: "2003",
          code: 210
        },
        {
          name: "2004",
          code: 210
        },
        {
          name: "2005",
          code: 210
        },
        {
          name: "2006",
          code: 210
        },
        {
          name: "2007",
          code: 210
        },
        {
          name: "2008",
          code: 210
        },
        {
          name: "2009",
          code: 210
        },
        {
          name: "2010",
          code: 210
        },
        {
          name: "2011",
          code: 210
        },
        {
          name: "2012",
          code: 210
        },
        {
          name: "2013",
          code: 210
        },
        {
          name: "2014",
          code: 210
        },

        {
          name: "2015",
          code: 210
        },
        {
          name: "2016",
          code: 210
        },
        {
          name: "2017",
          code: 210
        },
        {
          name: "2018",
          code: 210
        },
        {
          name: "2019",
          code: 210
        },
        {
          name: "2020",
          code: 210
        },
        {
          name: "2021",
          code: 210
        },
        {
          name: "2022",
          code: 210
        },
        {
          name: "2023",
          code: 210
        },
        {
          name: "2024",
          code: 210
        },

        {
          name: "2025",
          code: 210
        },
        {
          name: "2026",
          code: 210
        },
        {
          name: "2027",
          code: 210
        },
        {
          name: "2028",
          code: 210
        },
        {
          name: "2029",
          code: 210
        },
        {
          name: "2030",
          code: 210
        },
      ],
      [{
        name: "1",
        code: 1
      }, {
        name: "2",
        code: 2
      },
      {
        name: "3",
        code: 2
      },
      {
        name: "4",
        code: 2
      },
      {
        name: "5",
        code: 2
      },
      {
        name: "6",
        code: 2
      },
      {
        name: "7",
        code: 2
      },
      {
        name: "8",
        code: 2
      },
      {
        name: "9",
        code: 2
      },
      {
        name: "10",
        code: 2
      },
      {
        name: "11",
        code: 2
      },
      {
        name: "12",
        code: 2
      },

      
    ]
    ],
    multiIndex: ['', ''],
    multiArray1: [
      [{
          name: "1990",
          code: 209
        }, {
          name: "1991",
          code: 210
        },
        {
          name: "1992",
          code: 209
        }, {
          name: "1993",
          code: 210
        },
        {
          name: "1994",
          code: 210
        },
        {
          name: "1995",
          code: 210
        },
        {
          name: "1996",
          code: 210
        },
        {
          name: "1997",
          code: 210
        },
        {
          name: "1998",
          code: 210
        },
        {
          name: "2000",
          code: 210
        },
        {
          name: "2001",
          code: 210
        },
        {
          name: "2002",
          code: 210
        },
        {
          name: "2003",
          code: 210
        },
        {
          name: "2004",
          code: 210
        },
        {
          name: "2005",
          code: 210
        },
        {
          name: "2006",
          code: 210
        },
        {
          name: "2007",
          code: 210
        },
        {
          name: "2008",
          code: 210
        },
        {
          name: "2009",
          code: 210
        },
        {
          name: "2010",
          code: 210
        },
        {
          name: "2011",
          code: 210
        },
        {
          name: "2012",
          code: 210
        },
        {
          name: "2013",
          code: 210
        },
        {
          name: "2014",
          code: 210
        },

        {
          name: "2015",
          code: 210
        },
        {
          name: "2016",
          code: 210
        },
        {
          name: "2017",
          code: 210
        },
        {
          name: "2018",
          code: 210
        },
        {
          name: "2019",
          code: 210
        },
        {
          name: "2020",
          code: 210
        },
        {
          name: "2021",
          code: 210
        },
        {
          name: "2022",
          code: 210
        },
        {
          name: "2023",
          code: 210
        },
        {
          name: "2024",
          code: 210
        },

        {
          name: "2025",
          code: 210
        },
        {
          name: "2026",
          code: 210
        },
        {
          name: "2027",
          code: 210
        },
        {
          name: "2028",
          code: 210
        },
        {
          name: "2029",
          code: 210
        },
        {
          name: "2030",
          code: 210
        },
      ],
      [{
        name: "1",
        code: 1
      }, {
        name: "2",
        code: 2
      },
      {
        name: "3",
        code: 2
      },
      {
        name: "4",
        code: 2
      },
      {
        name: "5",
        code: 2
      },
      {
        name: "6",
        code: 2
      },
      {
        name: "7",
        code: 2
      },
      {
        name: "8",
        code: 2
      },
      {
        name: "9",
        code: 2
      },
      {
        name: "10",
        code: 2
      },
      {
        name: "11",
        code: 2
      },
      {
        name: "12",
        code: 2
      },

      
    ]
    ],
    multiIndex1: ['', ''],
    companyName:'',
    positionType:'',
    positionName:'',
    content:'',
    achievement:'',
    serviceTimeStr:'',
    serviceTimeEnd :'',
    positionnames:'',
    userId:''
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
  //学历水平
  bindMultiPickerChange: function (e) {
    var v = e.detail.value;

    this.setData({
      serviceTimeStr: this.data.multiArray[0][v[0]].name + "." + this.data.multiArray[1][v[1]].name
    })
  },

  bindMultiPickerChange1: function (e) {
    var v = e.detail.value;

    this.setData({
      serviceTimeEnd: this.data.multiArray[0][v[0]].name + "." + this.data.multiArray[1][v[1]].name
    })
  },
  formSubmit: function (e) {
    this.setData({
      companyName: e.detail.value.companyName,
      positionType: e.detail.value.positionType,
      positionName: e.detail.value.positionName,
      content: e.detail.value.content,
      achievement: e.detail.value.achievement,
      serviceTimeStr: e.detail.value.serviceTimeStr,
      serviceTimeEnd: e.detail.value.serviceTimeEnd,
      

    })
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    console.log('form发生了submit事件，携带数据为：', this.data.companyName)
    console.log('form发生了submit事件，携带数据为：', this.data.positionType)
    console.log('form发生了submit事件，携带数据为：', this.data.positionName)
    console.log('form发生了submit事件，携带数据为：', this.data.department)
    console.log('form发生了submit事件，携带数据为：', this.data.content)
    console.log('form发生了submit事件，携带数据为：', this.data.achievement)
    console.log('form发生了submit事件，携带数据为：', this.data.serviceTimeStr)
    console.log('form发生了submit事件，携带数据为：', this.data.serviceTimeEnd)
  },
  formReset:function(e){
    console.log(111)
    var urls = url.default
    var token = wx.getStorageSync('token')
    console.log(this.data.userId,'77777777777777')
    wx.request({
      url: urls + 'user/updateUserUserJobExperience', 
      method: 'POST',
      data: {
        id:this.data.userId,
        delflag:1

      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded",
        'token': token
      },
      success(res) {
        console.log(res)
        if (res.data.code = 200) {
          // wx.showToast({
          //   title: '成功',
          //   icon: 'success',
          //   duration: 2000
          // })
          wx.navigateBack({
          })
        }
      }
    });
    },
  checkSave() {
    var urls = url.default
    var token = wx.getStorageSync('token')
    var positionType = wx.getStorageSync('id')
    console.log(token, 1111)
    wx.request({
      url: urls + "user/updateUserUserJobExperience",
      method: 'POST',
      data: {
        companyName: this.data.companyName,
        positionType: positionType,
        positionName: this.data.positionName,
        content: this.data.content,
        achievement: this.data.achievement,
        serviceTimeStr: this.data.serviceTimeStr,
        serviceTimeEnd: this.data.serviceTimeEnd,
        id:this.data.userId
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
    // console.log(this.data.companyName, 11)
    // console.log(this.data.positionName, 33)
    // console.log(this.data.content, 55)
    // console.log(this.data.achievement, 66)
    // console.log(this.data.serviceTimeStr, 77)
    // console.log(this.data.serviceTimeEnd, 88)
    wx.navigateBack({
      success: (res) => {
        wx.removeStorageSync("name")
        wx.removeStorageSync("id")
      },
    }
     
    );
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var id = options.id
     this.setData({
     userId:id
   })
   var urls = url.default
   var token = wx.getStorageSync('token')
   var that = this
   console.log(token, 1111)
   wx.request({
     url: urls + 'user/selectByIdUserJobExperience', 
     method: 'POST',
     data: {
        id:id
     },
     header: {
       "Content-Type": "application/x-www-form-urlencoded",
       'token': token
     },
     success(res) {
       console.log(res)
       if (res.data.code = 200) {
         that.setData({
          companyName:res.data.data.companyName,
          positionType:res.data.data.positionType,
          positionName:res.data.data.positionName,
          content:res.data.data.content,
          achievement:res.data.data.achievement,
          serviceTimeStr:res.data.data.serviceTimeStr,
          serviceTimeEnd :res.data.data.serviceTimeEnd,
         })
       }
     }
   });
  },
  toclassification(){
   wx.navigateTo({
     url: '/pages/position_classification/positionClassification',
   })
  },
  // changeMultiPicker3(e) {

  //   this.setData({ multiIndex3: e.detail.value })

  // },
  // tojobSearch(){
  //   wx.navigateTo({
  //     url: '/pages/jobSearch/jobSearch',
  //   })
  // },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function (e) {
   
    this.setData({
      positionnames: wx.getStorageSync('name')
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