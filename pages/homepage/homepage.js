// pages/homepage/homepage.js
var url = require("../../utils/request.js")

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {}, //用户信息
    title: '',
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


  // // //用户登陆
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
    var urls = url.default
    var iv = e.detail.iv;
    var token = wx.getStorageSync('token')
    console.log('=========手機號token=========');

    if (e.detail.errMsg == 'getPhoneNumber:fail user deny') {

      this.setData({

        modalstatus: true,
        isRuleTrue: false
      });

    }
     else {//同意授权

      wx.request({
        method: "POST",
        url: urls + 'user/deciphering',
        data: {
          encrypdata: ency,
          ivdata: iv,
        },

        header: {
          "token": token,
          "Content-Type": "application/x-www-form-urlencoded",
        },

        success: (res) => {

          console.log("解密成功~~~~~~~将解密的号码保存到本地~~~~~~~~");
          var str = res.data

          var obj = JSON.parse(res.data);
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

  // getPhoneNumber(e) {
  //   console.log(e.detail.errMsg)
  //   console.log(e.detail.iv)
  //   console.log(e.detail.encryptedData)
  //   var ency = e.detail.encryptedData;
  //   var urls = url.default

  //   var iv = e.detail.iv;
  //   var token = wx.getStorageSync('token')

  //   // var sessionk = that.data.sessionKey;


  //   if (e.detail.errMsg == 'getPhoneNumber:fail user deny') {

  //     that.setData({

  //       modalstatus: true

  //     });

  //   } else {//同意授权

  //     wx.request({
  //       method: "POST",
  //       url: urls + 'user/deciphering',
  //       data: {
  //         encrypdata: ency,
  //         ivdata: iv,
  //       },

  //       header: {
  //         "token": token,
  //         "Content-Type": "application/x-www-form-urlencoded",
  //       },

  //       success: (res) => {

  //         console.log("解密成功~~~~~~~将解密的号码保存到本地~~~~~~~~");
  //         var str = res.data
  //         console.log(str);

  //         // var obj = JSON.parse(str);
  //         // // 输出该对象
  //         // console.log(obj), 11;
  //         // console.log(res);
  //         // wx.setStorage({
  //         //   key: "phone",
  //         //   data: obj.phoneNumber
  //         // })

  //         // console.log(phone);

  //       }, fail: function (res) {

  //         console.log("解密失败~~~~~~~~~~~~~");

  //         console.log(res);

  //       }

  //     });
  //     // wx.navigateTo({
  //     //   url: '/pages/personalDetails/personalDetails',
  //     // })

  //   }

  //   this.setData({
  //     isRuleTrue: false
  //   })

  // },

  // fail: function () {

  //   console.log("session_key 已经失效，需要重新执行登录流程");

  //   that.wxlogin(); //重新登录

  // },

  close() {
    console.log("close")
    this.setData({
      showActionsheet: !this.data.showActionsheet
    })
   
  },
  toOnlineResume(){
    var loginData = wx.getStorageSync('loginData')
   if(loginData){
    wx.navigateTo({
      url: '/pages/onlineResume/onlineResume',
    })
   }else{
      wx.showToast({
        title: '请您先注册登录',
        icon:'none'
      })
   }

  },
  toJobHunting(){
    var loginData = wx.getStorageSync('loginData')

    if(loginData){
      wx.removeStorageSync('salaryStr')
      wx.removeStorageSync('salaryEnd')
      wx.removeStorageSync('educaAtion')
      wx.removeStorageSync('experience')
      wx.removeStorageSync('index1')
      wx.removeStorageSync('index2')
      wx.removeStorageSync('index3')
      wx.removeStorageSync('num')
      wx.navigateTo({
        url: '/pages/jobHunting/jobHunting',
      })
    }else{
      wx.showToast({
        title: '请您先注册登录',
        icon:'none'
      })
    }
   

  },
  toOther(){
    wx.showToast({
      title: '功能暂未开放，敬请期待',
      icon:'none'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    var loginData = wx.getStorageSync('loginData')
    this.setData({
      loginData: loginData
    })
if (loginData){
  var that = this
  var urls = url.default
  var token = wx.getStorageSync('token')
  wx.request({
    url: urls+"user/selectIndexUser",
    method: "POST",
    header: {
      "token": token,
    },
    success: function (res) {
      if (res.statusCode == 200) {
        that.setData({
          userInfo: res.data.data,
          title: res.data.data.age + '岁·' + res.data.data.workingLife + '年'
        })
      }
         

    },
    fail(err) {     
      token = null;
      wx.removeStorageSync(token);
      setTimeout(() => {
        that.verifyToken(success);
      }, 300);
    }
  });
}
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