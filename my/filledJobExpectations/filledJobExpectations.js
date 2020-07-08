// pages/filledJobExpectations/filledJobExpectations.js
var url = require("../../utils/request.js"),
  request = require("../../common/js/request"),
  config = require("../../config.js")

Page({

  /**
   * 页面的初始数据
   */
  data: {
    position: '', //职位类别id
    salaryStr: '', //起始薪资
    salaryEnd: '', //结束薪资
    buttonSubmit: '下一步',
    status: "",
    multiArray: [
      ['面议', '1k', '2k', '3k', '4k', '5k', '6k', '7k', '8k', '9k', '10k', '11k', '12k', '13k', '14k', '15k', '16k', '17k', '18k', '19k', '20k', '21k', '22k', '23k', '24k', '25k', '26k', '27k', '28k', '29k', '30k', '31k', '32k', '33k', '34k', '35k', '36k', '37k', '38k', '39k', '40k', '41k', '42k', '43k', '44k', '45k', '46k', '47k', '48k', '49k', '50k',], ['面议']
    ],
    positionName: '',
    positionId:'',
    city: '',
    items: [{
      name: '0',
      value: '全职',
    },
    {
      name: '1 ',
      value: '兼职'
    },
    ],
    sex: '',
    salary: '',
    multiIndex: ['', ''],
    objectMultiArray: [
      [{
        id: 0,
        name: '面议'
      },
      {
        id: 1,
        name: '1k'
      },
      {
        id: 2,
        name: '2k'
      },
      {
        id: 3,
        name: '3k'
      },
      {
        id: 4,
        name: '4k'
      },
      {
        id: 5,
        name: '5k'
      },
      {
        id: 6,
        name: '6k'
      },
      {
        id: 7,
        name: '7k'
      }, {
        id: 8,
        name: '8k'
      }, {
        id: 9,
        name: '9k'
      }, {
        id: 10,
        name: '10k'
      }, {
        id: 11,
        name: '11k'
      }, {
        id: 12,
        name: '12k'
      }, {
        id: 13,
        name: '13k'
      }, {
        id: 14,
        name: '14k'
      }, {
        id: 15,
        name: '15k'
      }, {
        id: 16,
        name: '16k'
      }, {
        id: 17,
        name: '17k'
      }, {
        id: 18,
        name: '18k'
      }, {
        id: 19,
        name: '19k'
      }, {
        id: 20,
        name: '20k'
      }, {
        id: 21,
        name: '21k'
      }, {
        id: 22,
        name: '22k'
      }, {
        id: 23,
        name: '23k'
      }, {
        id: 24,
        name: '24k'
      }, {
        id: 25,
        name: '25k'
      }, {
        id: 26,
        name: '26k'
      }, {
        id: 27,
        name: '27k'
      }, {
        id: 28,
        name: '28k'
      }, {
        id: 29,
        name: '29k'
      }, {
        id: 30,
        name: '30k'
      }, {
        id: 31,
        name: '31k'
      }, {
        id: 32,
        name: '32k'
      }, {
        id: 33,
        name: '33k'
      }, {
        id: 34,
        name: '34k'
      }, {
        id: 35,
        name: '35k'
      }, {
        id: 36,
        name: '36k'
      }, {
        id: 37,
        name: '37k'
      }, {
        id: 38,
        name: '38k'
      }, {
        id: 39,
        name: '39k'
      }, {
        id: 40,
        name: '40k'
      }, {
        id: 41,
        name: '41k'
      }, {
        id: 42,
        name: '42k'
      }, {
        id: 43,
        name: '43k'
      }, {
        id: 44,
        name: '44k'
      }, {
        id: 45,
        name: '45k'
      }, {
        id: 46,
        name: '46k'
      }, {
        id: 47,
        name: '47k'
      }, {
        id: 48,
        name: '48k'
      }, {
        id: 49,
        name: '49k'
      }, {
        id: 50,
        name: '50k'
      },
      ],
      [{
        id: 0,
        name: '全日制'
      },
      {
        id: 1,
        name: '非全日制'
      },
      ]
    ],
   
  },


  radioChange: function (e) {
    this.setData({
      sex: e.detail.value
    })
   
  },
  radioChange1: function (e) {
    this.setData({
      sex: e.detail.value
    })
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
      salary: this.data.multiArray[0][v[0]] + "-" + this.data.multiArray[1][v[1]]
    })
  },

  formSubmit: function (e) {
    var salary = e.detail.value.salary
    var arr = salary.split("-")
    var arr1 = arr[0].substr(0, arr[0].length - 1);
    var arr2 = arr[1].substr(0, arr[1].length - 1);
    if (arr1 == '面' && arr2 == '面') {
      this.setData({
        salaryStr: 0,
        salaryEnd: 0,
      })
    } else {
      this.setData({
        salaryStr: arr1,
        salaryEnd: arr2,
      })
    }
    this.setData({
      position: e.detail.value.position,
    })
  },

  toPositionClassification() {//期望职位
    wx.navigateTo({
      url: '/pages/position_classification/positionClassification',
    })
  },
  todetailcity() {
    wx.navigateTo({
      url: '/pages/detailcity/detailcity',
    })
  },
  checkSave() {
    if (this.data.status == config.jobAdopt) {
      this.insertUserjobExpect();
      let pages=getCurrentPages();
      let della=0;
      for(let i=pages.length -1;i>=0;i--){
        if (pages[i].route === 'pages/detailPage/detailPage'){
          break
        }
        della+=1;
      }
      wx.navigateBack({delta:della})
    } else {
      switch (this.data.status) {
        case config.jobExperience: {//工作经历
          this.insertUserjobExpect();
          wx.navigateTo({
            url: "/my/workExperienceTitle/workExperienceTitle"
          });
          break
        } case config.jobEducation: {//教育经历
          this.insertUserjobExpect();
          wx.navigateTo({
            url: "/my/educationExperienceTitle/educationExperienceTitle"
          });
          break
        }
      }
    }
  },

/**
 * 数据保存
 */
  insertUserjobExpect: function () {
    if (this.data.positionId != '' && this.data.salaryStr !== '' && this.data.salaryEnd !== '' && this.data.district != '') {
      wx.request({
        url: url.default + 'user/insertUserjobExpect',
        method: 'POST',
        data: {
          position: this.data.positionId,
          salaryStr: this.data.salaryStr,
          salaryEnd: this.data.salaryEnd,
          district: this.data.city,
          category: this.data.sex
        },
        header: {
          "Content-Type": "application/x-www-form-urlencoded",
          'token': wx.getStorageSync('token')
        },
        success(res) {
          if (res.data.code = 200) {
            wx.showToast({
              title: '求职期望保存成功',
              icon: 'none',
              duration: 2000
            })
          }
        }
      });

    } else {
      wx.showToast({
        title: '请将信息填完整',
        icon: 'none'
      })
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
        status: '1001,1002'
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
   * 好像是薪资滑动的动态效果
   */
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
            data.multiArray[1] = ['面议'];
            break;
          case 1:
            data.multiArray[1] = ['2k', '3k', '4k', '5k', '6k', '7k', '8k', '9k',];
            break;
          case 2:
            data.multiArray[1] = ['3k', '4k', '5k', '6k', '7k', '8k', '9k', '10k',];
            break;
          case 3:
            data.multiArray[1] = ['4k', '5k', '6k', '7k', '8k', '9k', '10k', '11k',];
            break;
          case 4:
            data.multiArray[1] = ['5k', '6k', '7k', '8k', '9k', '10k', '11k', '12k',];
            break;
          case 5:
            data.multiArray[1] = ['6k', '7k', '8k', '9k', '10k', '11k', '12k', '13k',];
            break;
          case 6:
            data.multiArray[1] = ['7k', '8k', '9k', '10k', '11k', '12k', '13k', '14k',];
            break;
          case 7:
            data.multiArray[1] = ['8k', '9k', '10k', '11k', '12k', '13k', '14k', '15k',];
            break;
          case 8:
            data.multiArray[1] = ['9k', '10k', '11k', '12k', '13k', '14k', '15k', '16k',];
            break;
          case 9:
            data.multiArray[1] = ['10k', '11k', '12k', '13k', '14k', '15k', '16k', '17k',];
            break;
          case 10:
            data.multiArray[1] = ['11k', '12k', '13k', '14k', '15k', '16k', '17k', '18k',];
            break;
          case 11:
            data.multiArray[1] = ['12k', '13k', '14k', '15k', '16k', '17k', '18k', '19k', '20k', '21k',];
            break;
          case 12:
            data.multiArray[1] = ['13k', '14k', '15k', '16k', '17k', '18k', '19k', '20k', '21k', '22k',];
            break;
          case 13:
            data.multiArray[1] = ['14k', '15k', '16k', '17k', '18k', '19k', '20k', '21k', '22k', '23k',];
            break;
          case 14:
            data.multiArray[1] = ['15k', '16k', '17k', '18k', '19k', '20k', '21k', '22k', '23k', '24k',];
            break;
          case 15:
            data.multiArray[1] = ['16k', '17k', '18k', '19k', '20k', '21k', '22k', '23k', '24k', '25k',];
            break;
          case 16:
            data.multiArray[1] = ['17k', '18k', '19k', '20k', '21k', '22k', '23k', '24k', '25k', '26k',];
            break;
          case 17:
            data.multiArray[1] = ['18k', '19k', '20k', '21k', '22k', '23k', '24k', '25k', '26k', '27k',];
            break;
          case 18:
            data.multiArray[1] = ['19k', '20k', '21k', '22k', '23k', '24k', '25k', '26k', '27k', '28k',];
            break;
          case 19:
            data.multiArray[1] = ['20k', '21k', '22k', '23k', '24k', '25k', '26k', '27k', '28k', '29k',];
            break;
          case 20:
            data.multiArray[1] = ['21k', '22k', '23k', '24k', '25k', '26k', '27k', '28k', '29k', '30k',];
            break;
          case 21:
            data.multiArray[1] = ['22k', '23k', '24k', '25k', '26k', '27k', '28k', '29k', '30k', '31k',];
            break;
          case 22:
            data.multiArray[1] = ['23k', '24k', '25k', '26k', '27k', '28k', '29k', '30k', '31k', '32k',];
            break;
          case 23:
            data.multiArray[1] = ['24k', '25k', '26k', '27k', '28k', '29k', '30k', '31k', '32k', '33k',];
            break;
          case 24:
            data.multiArray[1] = ['25k', '26k', '27k', '28k', '29k', '30k', '31k', '32k', '33k', '34k',];
            break;
          case 25:
            data.multiArray[1] = ['26k', '27k', '28k', '29k', '30k', '31k', '32k', '33k', '34k', '35k',];
            break;
          case 26:
            data.multiArray[1] = ['27k', '28k', '29k', '30k', '31k', '32k', '33k', '34k', '35k', '36k',];
            break;
          case 27:
            data.multiArray[1] = ['28k', '29k', '30k', '31k', '32k', '33k', '34k', '35k', '36k', '37k',];
            break;
          case 28:
            data.multiArray[1] = ['29k', '30k', '31k', '32k', '33k', '34k', '35k', '36k', '37k', '38k',];
            break;
          case 29:
            data.multiArray[1] = ['30k', '31k', '32k', '33k', '34k', '35k', '36k', '37k', '38k', '39k',];
            break;
          case 30:
            data.multiArray[1] = ['31k', '32k', '33k', '34k', '35k', '36k', '37k', '38k', '39k', '40k',];
            break;
          case 31:
            data.multiArray[1] = ['32k', '33k', '34k', '35k', '36k', '37k', '38k', '39k', '40k', '41k',];
            break;
          case 32:
            data.multiArray[1] = ['33k', '34k', '35k', '36k', '37k', '38k', '39k', '40k', '41k', '42k',];
            break;
          case 33:
            data.multiArray[1] = ['34k', '35k', '36k', '37k', '38k', '39k', '40k', '41k', '42k', '43',];
            break;
          case 34:
            data.multiArray[1] = ['35k', '36k', '37k', '38k', '39k', '40k', '41k', '42k', '43', '44k',];
            break;
          case 35:
            data.multiArray[1] = ['36k', '37k', '38k', '39k', '40k', '41k', '42k', '43', '44k', '45k',];
            break;
          case 36:
            data.multiArray[1] = ['37k', '38k', '39k', '40k', '41k', '42k', '43', '44k', '45k', '46k',];
            break;
          case 37:
            data.multiArray[1] = ['38k', '39k', '40k', '41k', '42k', '43', '44k', '45k', '46k', '47k',];
            break;
          case 38:
            data.multiArray[1] = ['39k', '40k', '41k', '42k', '43', '44k', '45k', '46k', '47k', '48k',];
            break;
          case 39:
            data.multiArray[1] = ['40k', '41k', '42k', '43', '44k', '45k', '46k', '47k', '48k', '49k',];
            break;
          case 40:
            data.multiArray[1] = ['41k', '42k', '43', '44k', '45k', '46k', '47k', '48k', '49k', '50k',];
            break;
          case 41:
            data.multiArray[1] = ['42k', '43', '44k', '45k', '46k', '47k', '48k', '49k', '50k', '51k',];
            break;
          case 42:
            data.multiArray[1] = ['43', '44k', '45k', '46k', '47k', '48k', '49k', '50k', '51k', '52k',];
            break;
          case 43:
            data.multiArray[1] = ['44k', '45k', '46k', '47k', '48k', '49k', '50k', '51k', '52k', '53',];
            break;
          case 44:
            data.multiArray[1] = ['45k', '46k', '47k', '48k', '49k', '50k', '51k', '52k', '53', '54k',];
            break;
          case 45:
            data.multiArray[1] = ['46k', '47k', '48k', '49k', '50k', '51k', '52k', '53', '54k', '55k',];
            break;
          case 46:
            data.multiArray[1] = ['47k', '48k', '49k', '50k', '51k', '52k', '53', '54k', '55k', '56k',];
            break;
          case 47:
            data.multiArray[1] = ['48k', '49k', '50k', '51k', '52k', '53', '54k', '55k', '56k', '57k',];
            break;
          case 48:
            data.multiArray[1] = ['49k', '50k', '51k', '52k', '53', '54k', '55k', '56k', '57k', '58k',];
            break;
          case 49:
            data.multiArray[1] = ['50k', '51k', '52k', '53', '54k', '55k', '56k', '57k', '58k', '59k',];
            break;
          case 50:
            data.multiArray[1] = ['51k', '52k', '53', '54k', '55k', '56k', '57k', '58k', '59k', '60k',];
            break;
        }
        data.multiIndex[1] = 0;
        break;
    }
    this.setData(data);
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