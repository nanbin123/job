
var url = require("/utils/request.js")

if (wx.getUpdateManager) {
  var u = wx.getUpdateManager();
  u.onUpdateReady(function () {
    wx.showModal({
      title: "更新提示",
      content: "新版本已经准备好，是否重启应用？",
      success: function (e) {
        e.confirm && u.applyUpdate();
      }
    });
  });
}

App({
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    // //获取用户信息,如果用户没被授权获取信息失败  
},getUserInfo: function (cb) {
  var that = this
  if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
  } else {
      //调用登录接口
      wx.login({
          success: function () {
              wx.getUserInfo({
                  success: function (res) {
                      that.globalData.userInfo = res.userInfo
                      typeof cb == "function" && cb(that.globalData.userInfo)
                  }
              })
          }
      })
  }
  },  // 当小程序启动，或从后台进入前台显示，会触发 onShow
  onShow: function (options) {
    var urls = url.default
    wx.login({
        success: (res) => {
          const {
            code
          } = res
          if (res.code) {           
            wx.request({
              url: urls+'user/login',
              data: {
                code: res.code
              },
              dataType: 'json',
              method: 'get',
              success: function (res) {              
                const self = this
                if (res.data) {
                  //获取到用户凭证 存儲 3rd_session 
                  var json = res.data        
                  wx.setStorageSync("token", json.token)
                  wx.setStorageSync("loginData", json.loginData)
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
  
 
  },
  getOpenID: function () {
    var that = this;
    return new Promise(function (resolve, reject) {
        var urls = url.default

        wx.login({
            success: (res) => {             
              const {
                code
              } = res
              if (res.code) {
                wx.request({
                  url: urls+'user/login',
                  data: {
                    code: res.code
                  },
                  dataType: 'json',
                  method: 'get',
                  success: function (res) {                  
                    const self = this
                    if (res.data) {
                        resolve(res.data.token);
                      //获取到用户凭证 存儲 3rd_session 
                      var json = res.data                    
                      wx.setStorageSync("token", json.token) 
                    }
                  },
                  fail: function (res) {
      
                  }
                })
              }
            },
            fail: function (res) {
      
            }
          })
    })
  },
  //全局配置数据
  globalData: {
    userState: 0
  },
   // 显示网络异常
  showError: function () {
    wx.showToast({
      title: "网络异常",
      icon: 'loading'
    })
  },
  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  }
})

