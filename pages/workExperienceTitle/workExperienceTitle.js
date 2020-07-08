// pages/workExperienceTitle/workExperienceTitle.js
let listDatas = require('../../datas/postList.js');
var url = require("../../utils/request.js")


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
    multiIndex1: ['', ''],
    // date:'',
    // date1:'',
    companyName: '',
    positionType: '',
    positionName: '',
    positionNamea:'',
    positionId: '',
    content: '',
    achievement: '',
    serviceTimeStr: '',
    serviceTimeEnd: '',
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
      positionNamea: e.detail.value.positionNamea,
    })

  },

  checkSave() {
    if (this.data.companyName != '' && this.data.positionId != '' && this.data.positionNamea != '' &&          this.data.content != '' && this.data.achievement != '' && this.data.serviceTimeStr != '' &&           this.data.serviceTimeEnd != '') {
      wx.request({
        url: url.default + "user/insertUserJobAchievement",
        method: 'POST',
        data: {
          companyName: this.data.companyName,
          positionType: this.data.positionId,
          positionName: this.data.positionNamea,
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
            wx.navigateBack({
              success: (res) => {
                wx.removeStorageSync("name")
                wx.removeStorageSync("id")
              },
            });
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

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.removeStorageSync('name')

    // //获取省市区json
    // var ssls = listDatas.postList;
    // console.log(ssls, 555)
    // //定义对应变量
    // var sheng = [];
    // var shi = [];
    // var qu = [];
    // var shengName = [];
    // var shiName = [];
    // var quName = [];
    // for (var i in ssls) {
    //   if (ssls[i].parentId == 0) {
    //     sheng.push(ssls[i])
    //     shengName.push(ssls[i].name)
    //   }

    // }
    // for (var v in sheng) {
    //   for (var i in ssls) {
    //     if (ssls[i].parentId == sheng[v].id) {
    //       shi.push(ssls[i])
    //       shiName.push(ssls[i].name)
    //     }
    //   }
    // }
    // for (var u in shi) {
    //   for (var i in ssls) {
    //     if (ssls[i].parentId == shi[u].id) {
    //       qu.push(ssls[i])
    //       quName.push(ssls[i].name)
    //     }
    //   }

    // }

    // console.log(sheng, shi);
    // this.setData({
    //   multiArray3: [shengName, shiName, quName]
    // });
    // console.log(this.data.multiArray3, 222222)
    // console.log(sheng, 44)
    // console.log(qu, 55)
    // console.log(shi, 66)
  },
  toclassification() {
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