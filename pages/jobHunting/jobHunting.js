// pages/jobHunting/jobHunting.js
var url = require("../../utils/request.js")
var app = new getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    moment: [],
    page: 1,
    position: [],
    oldList: [],
    isLastPage: false,
    id: '',
    id1: '',
    listId: 0,
    token:'',
    num:'',
    positionName:''//搜索内容
  },

  /**
   * 生命周期函数--监听页面加载
   */
   onLoad: function (options) {
      
  },
  todetailPage(e) {
    var id = e.currentTarget.id
    wx.navigateTo({
      url: '/pages/detailPage/detailPage?id=' + id,
    })
  },
  shaixuan() {
    wx.navigateTo({
      url: '/pages/screenPage/screenPage',
    })
  },
  searchInput(res){
  this.setData({
    positionName:res.detail.value
  })
  },

  
  searchBtn(){
    var that = this;
    var salaryStr = wx.getStorageSync('salaryStr ')
    var salaryEnd = wx.getStorageSync('salaryEnd ')
    var educaAtion = wx.getStorageSync('educaAtion')
    var experience = wx.getStorageSync('experience')
    that.setData({
      page:1
    })
    wx.showLoading({
      title: '玩命加载中',
    })
    wx.request({
      url: url.default + 'position/selectPosition?limit=9&page=' + that.data.page,
      method: "GET",
      data: {
        education: educaAtion,
        salaryStr: salaryStr,
        salaryEnd: salaryEnd,
        experience: experience,
        positionName:this.data.positionName,
      },
      // 请求头部
      header: {
        'content-type': 'application/text',
        'token': wx.getStorageSync('token')
      },
      success: function (res) {
        console.log(res)
        // 回调函数
        console.log(2222)
        /*此时会发现数据被添加到原有数据的后边类似上拉加载更多*/
        that.setData({
          moment: res.data.data,
        });
        // }
        // 隐藏加载框
        wx.hideLoading();
      }
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

    var token = wx.getStorageSync('token')

    this.setData({
      num:wx.getStorageSync('num'),
      page:1,
      isLastPage:false
    })
    // // 最后一页了，取消下拉功能
    var that = this;
    var urls = url.default
    var salaryStr = wx.getStorageSync('salaryStr ')
    var salaryEnd = wx.getStorageSync('salaryEnd ')
    var educaAtion = wx.getStorageSync('educaAtion')
    var experience = wx.getStorageSync('experience')
    wx.showLoading({
      title: '玩命加载中',
    })
    wx.request({
      url: urls + 'position/selectPosition?limit=9&page=' + that.data.page,
      method: "GET",
      data: {
        education: educaAtion,
        salaryStr: salaryStr,
        salaryEnd: salaryEnd,
        experience: experience,
        positionName:this.data.positionName,
      },
      // 请求头部
      header: {
        'content-type': 'application/text',
        'token': token
      },
      success: function (res) {
        console.log(res)
        // 回调函数
        console.log(2222)
        /*此时会发现数据被添加到原有数据的后边类似上拉加载更多*/
        that.setData({
          moment: res.data.data,
        });
        // }
        // 隐藏加载框
        wx.hideLoading();
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

  // 用户滑动触发
  onPageScroll(e) {


  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   
  onPullDownRefresh: function () {
    wx.removeStorageSync('salaryStr')
    wx.removeStorageSync('salaryEnd')
    wx.removeStorageSync('educaAtion')
    wx.removeStorageSync('experience')
    wx.removeStorageSync('num')
    this.onShow()
  },
*/
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    // 最后一页了，取消下拉功能
    if (this.data.isLastPage) {
      return
    }
    var that = this;   
    if(that.data.page == 1){
      that.setData({
        page:2
      })
    }
    // 显示加载图标
    wx.showLoading({
      title: '玩命加载中',
    })
    wx.request({
        url: url.default + 'position/selectPosition?limit=9&page=' + that.data.page,
        method: "GET",
        // 请求头部
        header: {
          'content-type': 'application/text',
          'token': wx.getStorageSync('token')
        },
        data: {
          education: wx.getStorageSync('educaAtion'),
          salaryStr: wx.getStorageSync('salaryStr '),
          salaryEnd: wx.getStorageSync('salaryEnd '),
          experience: wx.getStorageSync('experience'),
          positionName: this.data.positionName,
        },
        success: function (res) {
         var total = res.data.count
         var totalPage = (total + 9 - 1)/9;
          if (that.data.page < totalPage) {
            that.setData({
              page:that.data.page+1
            })
            that.setData({
              moment: that.data.moment.concat(res.data.data)
            });
          } else {
            that.data.isLastPage = true;
            wx.showToast({
              title: '已全部加载完',
            })
          }
          // 隐藏加载框
          wx.hideLoading();
        }
     })

  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})