// pages/jobExpectations/jobExpectations.js
var url = require("../../utils/request.js")

Page({

  /**
   * 页面的初始数据
   */
  data: {
    position: '', //职位类别id
    salaryStr: '', //起始薪资
    salaryEnd: '', //结束薪资
    multiArray: [
      ['面议', '1k', '2k', '3k', '4k', '5k', '6k', '7k', '8k', '9k', '10k', '11k', '12k', '13k', '14k', '15k', '16k', '17k', '18k', '19k', '20k', '21k', '22k', '23k', '24k', '25k', '26k', '27k', '28k', '29k', '30k', '31k', '32k', '33k', '34k', '35k', '36k', '37k', '38k', '39k', '40k', '41k', '42k', '43k', '44k', '45k', '46k', '47k', '48k', '49k', '50k', ],
      ['面议']
    ],
    multiIndex: ['', ''],
    objectMultiArray: [
      [{
          id: 0,
          name: '面议'
        },
        {
          id: 1,
          name: '1K'
        },
        {
          id: 2,
          name: '2K'
        },
        {
          id: 3,
          name: '3K'
        },
        {
          id: 4,
          name: '4K'
        },
        {
          id: 5,
          name: '5K'
        },
        {
          id: 6,
          name: '6K'
        },
        {
          id: 7,
          name: '7K'
        }, {
          id: 8,
          name: '8K'
        }, {
          id: 9,
          name: '9K'
        }, {
          id: 10,
          name: '10K'
        }, {
          id: 11,
          name: '11K'
        }, {
          id: 12,
          name: '12K'
        }, {
          id: 13,
          name: '13K'
        }, {
          id: 14,
          name: '14K'
        }, {
          id: 15,
          name: '15K'
        }, {
          id: 16,
          name: '16K'
        }, {
          id: 17,
          name: '17K'
        }, {
          id: 18,
          name: '18K'
        }, {
          id: 19,
          name: '19K'
        }, {
          id: 20,
          name: '20K'
        }, {
          id: 21,
          name: '21K'
        }, {
          id: 22,
          name: '22K'
        }, {
          id: 23,
          name: '23K'
        }, {
          id: 24,
          name: '24K'
        }, {
          id: 25,
          name: '25K'
        }, {
          id: 26,
          name: '26K'
        }, {
          id: 27,
          name: '27K'
        }, {
          id: 28,
          name: '28K'
        }, {
          id: 29,
          name: '29K'
        }, {
          id: 30,
          name: '30K'
        }, {
          id: 31,
          name: '31K'
        }, {
          id: 32,
          name: '32K'
        }, {
          id: 33,
          name: '33K'
        }, {
          id: 34,
          name: '34K'
        }, {
          id: 35,
          name: '35K'
        }, {
          id: 36,
          name: '36K'
        }, {
          id: 37,
          name: '37K'
        }, {
          id: 38,
          name: '38K'
        }, {
          id: 39,
          name: '39K'
        }, {
          id: 40,
          name: '40K'
        }, {
          id: 41,
          name: '41K'
        }, {
          id: 42,
          name: '42K'
        }, {
          id: 43,
          name: '43K'
        }, {
          id: 44,
          name: '44K'
        }, {
          id: 45,
          name: '45K'
        }, {
          id: 46,
          name: '46K'
        }, {
          id: 47,
          name: '47K'
        }, {
          id: 48,
          name: '48K'
        }, {
          id: 49,
          name: '49K'
        }, {
          id: 50,
          name: '50K'
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
    positionName: '',
    positionId: '',
    id: 0,
    city: '',
    userId: "",
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
    salary: ''
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
  //学历水平
  bindMultiPickerChange: function (e) {
    var v = e.detail.value;

    this.setData({
      salary: this.data.multiArray[0][v[0]] + "-" + this.data.multiArray[1][v[1]]
    })
  },
  bindMultiPickerColumnChange: function(e) {

    // console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
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
            data.multiArray[1] = ['2k', '3k', '4k', '5k', '6k', '7k', '8k', '9k', ];
            break;
          case 2:
            data.multiArray[1] = ['3k', '4k', '5k', '6k', '7k', '8k', '9k', '10k', ];
            break;
          case 3:
            data.multiArray[1] = ['4k', '5k', '6k', '7k', '8k', '9k', '10k', '11k', ];
            break;
          case 4:
            data.multiArray[1] = ['5k', '6k', '7k', '8k', '9k', '10k', '11k', '12k', ];
            break;
          case 5:
            data.multiArray[1] = ['6k', '7k', '8k', '9k', '10k', '11k', '12k', '13k', ];
            break;
          case 6:
            data.multiArray[1] = ['7k', '8k', '9k', '10k', '11k', '12k', '13k', '14k', ];
            break;
          case 7:
            data.multiArray[1] = ['8k', '9k', '10k', '11k', '12k', '13k', '14k', '15k',];
            break;
          case 8:
            data.multiArray[1] = [ '9k', '10k', '11k', '12k', '13k', '14k', '15k','16k',];
            break;
          case 9:
            data.multiArray[1] = ['10k', '11k', '12k', '13k', '14k', '15k', '16k', '17k', ];
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
    // console.log(data.multiIndex);
    this.setData(data);
  },
  formSubmit: function (e) {
    var salary = e.detail.value.salary
    var arr = salary.split("-")
    var arr1 = arr[0].substr(0, arr[0].length - 1);
    var arr2 = arr[1].substr(0, arr[1].length - 1);
    if(arr1=='面' && arr2=='面'){
      this.setData({
        salaryStr: 0,
        salaryEnd: 0,
      })
      console.log(this.data.salaryStr)

    }else{
      this.setData({
        salaryStr: arr1,
        salaryEnd: arr2,
      })
    }
    this.setData({
      position: e.detail.value.position
    })
  },
  formReset: function (e) {
    var urls = url.default
    var token = wx.getStorageSync('token')
    wx.request({
      url: urls + 'user/updateByIdUserjobExpect',
      method: 'POST',
      data: {
        id: this.data.userId,
        delflag: 1
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded",
        'token': token
      },
      success(res) {
        if (res.data.code = 200) {
          wx.navigateBack({})
        }
      }
    });
  },
  toPositionClassification() {
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
    wx.request({
      url: url.default + 'user/updateByIdUserjobExpect',
      method: 'POST',
      data: {
        position: this.data.positionId,
        salaryStr: this.data.salaryStr,
        salaryEnd: this.data.salaryEnd,
        district: this.data.city,
        id: this.data.userId,
        category: this.data.sex
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded",
        'token': wx.getStorageSync('token')
      },
      success(res) {
        console.log(res)
        if (res.data.code = 200) {
          wx.showToast({
            title: '成功',
            icon: 'success',
            duration: 2000
          })
          wx.navigateBack();
        }
      }
    });

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var id = options.id
    this.setData({
      userId: id
    })
    var that = this  
    wx.request({
      url: url.default + 'user/selectByIdUserjobExpect',
      method: 'POST',
      data: {
        id: id
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded",
        'token': wx.getStorageSync('token')
      },
      success(res) {       
        if (res.data.data.category == 1) {
          that.setData({
            items: [{
                name: '0',
                value: '全职',
              },
              {
                name: '1 ',
                value: '兼职',
                checked:true
              },
            ],
          })
        }
        if (res.data.data.category == 0) {
          that.setData({
            items: [{
                name: '0',
                value: '全职',
                checked:true

              },
              {
                name: '1 ',
                value: '兼职'
              },
            ],
          })
        }
        if (res.data.code = 200) {
          if(res.data.data.salaryStr==0 && res.data.data.salaryEnd==0){
            that.setData({
              salary: '面议-面议'
            })
          }else{
            that.setData({
              salary: res.data.data.salaryStr + 'K-' + res.data.data.salaryEnd+'K'
            })
          }
          that.setData({
            positionName: res.data.data.position,
            city: res.data.data.district,
            
          })
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
    var id = wx.getStorageSync('id')
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