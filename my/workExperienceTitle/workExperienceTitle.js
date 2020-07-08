var listDatas = require('../../datas/postList.js'),
   url = require("../../utils/request.js"),  
   request = require("../../common/js/request"),
   config = require("../../config.js")


Page({
  /**
   * 页面的初始数据
   */
  data: {
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
    buttonSubmit:'下一步',
    multiIndex1: ['', ''],
    companyName: '',
    positionType: '',
    positionName: '',
    positionId: '',
    content: '',
    achievement: '',
    serviceTimeStr: '',
    serviceTimeEnd: '' 
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
      content: e.detail.value.content,
      achievement: e.detail.value.achievement,
      serviceTimeStr: e.detail.value.serviceTimeStr,
      serviceTimeEnd: e.detail.value.serviceTimeEnd,
    })
  },
 
  insertUserJobAchievement: function(){
    if (this.data.companyName != '' && this.data.positionId != '' && this.data.positionName != '' && this.data.content != '' && this.data.achievement != '' && this.data.serviceTimeStr != '' && this.data.serviceTimeEnd != '') {
      wx.request({
        url: url.default + "user/insertUserJobAchievement",
        method: 'POST',
        data: {
          companyName: this.data.companyName,
          positionType: this.data.positionId,
          positionName: this.data.positionName,
          content: this.data.content,
          achievement: this.data.achievement,
          serviceTimeStr: this.data.serviceTimeStr,
          serviceTimeEnd: this.data.serviceTimeEnd,
        },
        header: {
          "Content-Type": "application/x-www-form-urlencoded",
          'token': wx.getStorageSync('token')
        },
        success(res) {
          console.log(res)
          if (res.data.code = 200) {
            wx.showToast({
              title: '工作经历保存成功',
              icon: 'none',
              duration: 2000
            })
          }
        }
      });
    } else {
      wx.showToast({
        title: '请将信息填写完整',
        icon: 'none'
      })
    }
  },



  checkSave:function() {
    if (this.data.status == config.jobAdopt) {
      this.insertUserJobAchievement();
      let pages = getCurrentPages();
      let della = 0;
      for (let i = pages.length - 1; i >= 0; i--) {
        if (pages[i].route === 'pages/detailPage/detailPage') {
          break
        }
        della += 1;
      }
      wx.navigateBack({ delta: della })
    } else {
      switch (this.data.status) {
        case config.jobEducation: {//教育经历
          this.insertUserJobAchievement();
          wx.navigateTo({
            url: "/my/educationExperienceTitle/educationExperienceTitle"
          });
          break
        }
      }
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    //判断status状态
    request.serveRequest({
      url: "/user/checkStatus",
      method: "POST",
      data: {
        status: '1001,1002,1003'
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
  toclassification() {
    wx.navigateTo({
      url: '/pages/position_classification/positionClassification',
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
  onShow: function (e) {

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