// pages/detailPage/detailPage.js
var url = require("../../utils/request.js"),
  request = require("../../common/js/request"),
  config=require("../../config.js")


Page({
  /**
     * 组件的属性列表
     */
  properties: {
    moduleData: {
      type: Object
    },
  },
  /**
   * 页面的初始数据
   */
  data: {
    showAllWares: false,//初始为隐藏
    listBoxHeight: '',//列表初始宽度
    isShow: false, //查看更多初始为显
    listData:[],
    id:0,
    btnIsShow:false
  },
  ready: function () {
    this.toggleShow()
  },


    toggleShow:function() {
      this.setData({
        showAllWares: !this.data.showAllWares,
        isShow: !this.data.isShow
      
      });
   
    },

  
 tochatRoom(){
  var that = this
  //投递简历之前判断用户状态
   request.serveRequest({
     url: "/user/checkStatus",
     method: "POST"
   }).then(function (res) {   
     switch (res.data.status){
       case config.jobAdvantage:{//个人优势      
         wx.showToast({
           title: "请先完善个人优势信息",
           icon: 'none',
           duration: 1000,
           success(data){
            setTimeout(function () {
              wx.navigateTo({
                  url: "/my/personalStrength/personalStrength"
              });
             }, 800) 
           }
         })
         break;
       }case config.jobExpect:{//求职期望
          wx.showToast({
            title: "请先完善求职期望信息",
            icon: 'none',
            duration: 1000,
            success(data) {
              setTimeout(function () {
                wx.navigateTo({
                  url: "/my/filledJobExpectations/filledJobExpectations"
                });
              }, 800)
            }
          })
          break
       } case config.jobExperience: {//工作经历
         wx.showToast({
           title: "请先完善工作经历信息",
           icon: 'none',
           duration: 1000,
           success(data) {
             setTimeout(function () {
               wx.navigateTo({
                 url: "/my/workExperienceTitle/workExperienceTitle"
               });
             }, 800)
           }
         })
         break
       } case config.jobEducation: {//教育经历
         wx.showToast({
           title: "请先完善教育经历信息",
           icon: 'none',
           duration: 1000,
           success(data) {
             setTimeout(function () {
               wx.navigateTo({
                 url: "/my/educationExperienceTitle/educationExperienceTitle"
               });
             }, 800)
           }
         })
         break
       }
       default:{
         //投递简历
         wx.showModal({
           title: '提示',
           content: '您确定要投简历吗？',
           success(res) {
             if (res.confirm) {
               wx.request({
                 url: url.default + "position/insertSubmitResume",
                 method: "POST",
                 data: {
                   positionId: that.data.id
                 },
                 header: {
                   "Content-Type": "application/x-www-form-urlencoded",
                   'token': wx.getStorageSync('token')
                 },
                 success: function (res) {
                   if (res.statusCode == 200) {
                     wx.showToast({
                       title: '投递成功',
                     })
                     that.setData({
                       btnIsShow: true
                     })
                   }
                 },
                 fail(err) {
                   console.log(err);
                 }
               });
             } else if (res.cancel) {
               console.log("🍓🍓🍓🍓🍓🍓🍓" + '用户点击取消')
             }
           }
         })
       }
     }
   });
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
        url: url.default + 'position/selectPositionById',
      method: 'POST',
      data: {
        id: options.id
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded",
        'token': wx.getStorageSync('token'),

      },
      success:(res) =>{
        if(res.data.data.positionDescribe){
          var str =res.data.data.positionDescribe.split('hc').join('\n');
      
          this.setData({
            positionDescribe:str,
           })

        }
       this.setData({
        listData:res.data.data,
        btnIsShow:res.data.data.showSubmitResume,
        id:res.data.data.id
       })

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
    wx.clearStorageSync('salaryStr')
    wx.clearStorageSync('salaryEnd')
    wx.clearStorageSync('educaAtion')
    wx.clearStorageSync('experience')
    wx.clearStorageSync('num')
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