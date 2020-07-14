// pages/onlineResume/onlineResume.js
let listDatas = require('../../datas/betweenJobs.js');
var url = require("../../utils/request.js")
console.log(listDatas,11)
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // text:"这是一个页面"
    showActionsheet: false,
    actionSheetItems: [],
    menu: '',
    jobStatus:0,
    listDatas:'',
    advantage:'',//个人优势
    loginData:''
  },

  
  //打开登录提示
  showRule: function() {
    this.setData({
      isRuleTrue: true
    })
  },



  //关闭登录提示
  hideRule: function() {
    this.setData({
      isRuleTrue: false
    })
  },

  // //用户登陆
  userLogin: function() {
    wx.checkSession({
      success: function(e) {
        console.log(e)
        //存在登陆态
      },
      fail: function() {
        //不存在登陆态
      }
    })
  },

  getPhoneNumber(e) {
    var ency = e.detail.encryptedData;
    var iv = e.detail.iv;
    if (e.detail.errMsg == 'getPhoneNumber:fail user deny') {
      this.setData({
        modalstatus: true,
        isRuleTrue: false
      });
    }
     else {//同意授权
      wx.request({
        method: "POST",
        url: url.default + 'user/deciphering',
        data: {
          encrypdata: ency,
          ivdata: iv,
        },

        header: {
          "token": wx.getStorageSync('token'),
          "Content-Type": "application/x-www-form-urlencoded",
        },

        success: (res) => {

          console.log("解密成功~~~~~~~将解密的号码保存到本地~~~~~~~~");
          var str = res.data

          var obj = JSON.parse(str);
          // 输出该对象
          console.log(obj), 11;
          console.log(res);
          wx.setStorage({
            key: "phone",
            data: obj.phoneNumber
          })
          wx.navigateTo({
            url: '/pages/newUser/newUser',
          })

          // console.log(phone);

        }, fail: function (res) {

          console.log("解密失败~~~~~~~~~~~~~");

          console.log(res);

        }

      });

    }

    
    this.setData({
      isRuleTrue: false
    })
    
    wx.checkSession({
      success: function (res) {
        console.log(res, '登录未过期')
        // wx.showToast({
        //   title: '登录未过期啊',
        // })
       
      },
      fail: function (res) {
        console.log(res, '登录过期了')
        wx.showModal({
          title: '提示',
          content: '你的登录信息过期了，请重新登录',
        })
        //再次调用wx.login()
        wx.login({
         
          success: (res) => {
            // console.log(res)
            const {
              code
            } = res
            console.log(code)
            var urls = url.default
            if (res.code) {
              //发起网络请求
              wx.request({
                url: urls+'user/login',
                data: {
                  code: res.code
                },
                dataType: 'json',
                method: 'get',
                success: function (res) {
                  console.log(res)
                  const self = this
                  if (res.data) {
                    //获取到用户凭证 存儲 3rd_session 
                    var json = res.data
                    wx.setStorage({
                      key: "token",
                      data: json.token
                    })
                    
                  } else { }
                },
                fail: function (res) {

                }
              })
            }
          },
          fail: function (res) {

          }
        })
      }
    })
    
  },

  fail: function () {

    console.log("session_key 已经失效，需要重新执行登录流程");

    that.wxlogin(); //重新登录

  },



  close() {
    this.setData({
      showActionsheet: !this.data.showActionsheet
    })
  },
  btnClick(e) {
    var flag = e.currentTarget.dataset.flag
    let index = e.detail.index
    if (!flag){
     this.setData({
       menu: this.data.actionSheetItems[index].text,
       jobStatus: this.data.actionSheetItems[index].value
     })
      wx.request({
        url: url.default+"user/updateUserJob",
        method: 'POST',
        data: {
          menu: this.data.actionSheetItems[index].text,
          jobStatus: this.data.actionSheetItems[index].value
        },
        header: {
          "Content-Type": "application/x-www-form-urlencoded",
          'token': wx.getStorageSync('token')
        },
        success(res) {
          console.log(res)
        }
      });
   }
    this.close()
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var loginData = wx.getStorageSync('loginData')
    //更新状态数据
    this.setData({
      actionSheetItems: listDatas.betweenJob_list.data,
      loginData:loginData
    })
    var that = this
    wx.request({
      url: url.default+'user/selectUserJob',
      method: "POST",
      header: {
        "token": wx.getStorageSync('token'),
        "Content-Type": "application/x-www-form-urlencoded",

      },
      data: {
      },
      success(res) {
        if(res.data.data.advantage){
          var str = res.data.data.advantage.split('&hc').join('\n');
         that.setData({
          advantage: str

         })
        }
        console.log(str)
        that.setData({
          listDatas: res.data.data,
          menu: res.data.data.jobStatus,
        })
      },
    })
   
  },


  // 跳转新用户页面
  toUser(){
    console.log(1111)
    var loginData = wx.getStorageSync('loginData')
    if(loginData){
    }else{
      wx.navigateTo({
        url: '/pages/newUser/newUser',
      })
    }
   
  },
   //跳转个人优势
  topersonalStrength(e){
    var advantage = e.currentTarget.dataset.advantage

   var loginData = wx.getStorageSync('loginData')
   if(loginData){
    wx.navigateTo({
      url: '/pages/personalStrength/personalStrength?advantage='+ advantage,
     })
   }else{
    wx.showToast({
      title: '请先登录注册',
      icon: 'none',

      duration: 2000
    })
   }
  },
  //  求职期望
  tojobExpectations(){
    var loginData = wx.getStorageSync('loginData')

    if(loginData){
      wx.navigateTo({
        url: '/pages/filledJobExpectations/filledJobExpectations',
      })
     }else{
      wx.showToast({
        title: '请先登录注册',
        icon: 'none',


        duration: 2000
      })
     }
   
  },
  tofilledJobExpectations(e){
    console.log(e.currentTarget.dataset.id)
    var id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '/pages/jobExpectations/jobExpectations?id='+id,
    })
  },

  toworkExperienceTitle(){
    var loginData = wx.getStorageSync('loginData')

    if(loginData){
      wx.navigateTo({
        url: '/pages/workExperienceTitle/workExperienceTitle',
      })
     }else{
      wx.showToast({
        title: '请先登录注册',
        icon: 'none',


        duration: 2000
      })
     }
   
  },

  toworkExperienceContent(e) {
    var id = e.currentTarget.dataset.id1
    wx.navigateTo({
      url: '/pages/workExperienceContent/workExperienceContent?id='+id,
    })
  },
  toprojectExperienceTitle(){
    var loginData = wx.getStorageSync('loginData')

    if(loginData){
      wx.navigateTo({
        url: '/pages/projectExperienceTitle/projectExperienceTitle',
      })
     }else{
      wx.showToast({
        title: '请先登录注册',
        icon: 'none',

        duration: 2000
      })
     }
    
  },
    toprojectExperienceContent() {
    wx.navigateTo({
      url: '/pages/projectExperienceContent/projectExperienceContent',
    })
  },
  toeducationExperienceTitle(){
    var loginData = wx.getStorageSync('loginData')

    if(loginData){
      wx.navigateTo({
        url: '/pages/educationExperienceTitle/educationExperienceTitle',
      })
     }else{
      wx.showToast({
        title: '请先登录注册',
        icon: 'none',

        duration: 2000
      })
     }
   
  },
  toeducationExperienceContent(e) {
    var id = e.currentTarget.dataset.id2
    wx.navigateTo({
      url: '/pages/educationExperienceContent/educationExperienceContent?id='+id,
    })
  },
  tosocialContactTitle() {
    var loginData = wx.getStorageSync('loginData')

    if(loginData){
      wx.navigateTo({
        url: '/pages/socialContactTitle/socialContactTitle',
      })
     }else{
      wx.showToast({
        title: '请先登录注册',
        icon: 'none',

        duration: 2000
      }) 
     }
    
  },
  newUser(){
  wx.navigateTo({
    url: '/pages/filednewUser/filednewUser',
  })
  },
  toPersonalCenter(e){
    var id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '/pages/personalCenter/personalCenter?id='+id,
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
    wx.removeStorageSync('city')
    wx.removeStorageSync('name')
    var loginData = wx.getStorageSync('loginData')
    this.setData({
      loginData:loginData
    })
    var token = wx.getStorageSync('token')
    var that = this
    var urls = url.default
    console.log(token, 88888888888)
    wx.request({
      url: urls+'user/selectUserJob',
      method: "POST",
      header: {
        "token": token,
        "Content-Type": "application/x-www-form-urlencoded",

      },
      data: {
      },
      success(res) {
      if(res.data.data.advantage){
       var str = res.data.data.advantage.split('&hc').join('\n');
       that.setData({
        advantage: str
      })
   }
        that.setData({
          listDatas: res.data.data,
          menu: res.data.data.jobStatus,
        })
        console.log(res.data.data, '数据更新')
      }
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