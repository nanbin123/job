// pages/screenPage/screenPage.js
var flag = ['','','']
Page({

  /**
   * 页面的初始数据
   */
  data: {
    experience: ['不限', '1年以内', '1-3年', '3-5年', '5-10年', '10年以上'],
    education: ['不限','博士', '硕士', '本科', '大专', '高中', '中专/中技', '初中及以下'],
    pay: ['不限', '3K以下', '3-5K', '5-10K', '10-20K', '20-50K'],
    active:'',
    active1:'',
    active2:'',
    num:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
 
    flag[0]=wx.getStorageSync('index1')
    flag[1]=wx.getStorageSync('index2')
    flag[2]=wx.getStorageSync('index3')

 this.setData({ 
  active:wx.getStorageSync('index1'),
  active1: wx.getStorageSync('index2'),
  active2: wx.getStorageSync('index3')
 })

  },
  toexperience(e){
    var index = e.currentTarget.dataset.experience;
    wx.setStorageSync('index1',index)

    var experiencedata = e.currentTarget.dataset.experiencedata;
    var arr=experiencedata.split("年");
    if(arr[0]=='不限'){
      wx.setStorageSync('experience', '')

    }else{
      wx.setStorageSync('experience', arr[0])
    }
     

         this.setData({
          active:index
         })
        flag[0] = index
        console.log(flag[0])
        console.log(flag)


  },
  toeducation(e){
    var index = e.currentTarget.dataset.education;
    wx.setStorageSync('index2',index)

    var educationdata = e.currentTarget.dataset.educationdata;
    if(educationdata=='不限'){
      wx.setStorageSync('educaAtion', '')

    }else{
      wx.setStorageSync('educaAtion', educationdata)

    }
         this.setData({
          active1:index
         })
         flag[1] = index
         console.log(flag[1])
         console.log(flag)
  },
  topay(e){
    var index = e.currentTarget.dataset.pay;
    wx.setStorageSync('index3',index)
    var paydata = e.currentTarget.dataset.paydata;
    var arr2=paydata.split("K");
    var arr1 = arr2[0].split("-")
    if(arr1[0]=="不限"){
      wx.setStorageSync('salaryStr ', '')
      wx.setStorageSync('salaryEnd ', '')
    }else if(arr1[0]==3&&arr1[1]==undefined){
      wx.setStorageSync('salaryStr ', 0)
wx.setStorageSync('salaryEnd ', 3)
    }else{
      wx.setStorageSync('salaryStr ', arr1[0])
      wx.setStorageSync('salaryEnd ', arr1[1])
    }
    console.log(arr1[0])
    console.log(arr1[1])

         this.setData({
          active2:index
         })
         flag[2] = index
         console.log(flag[2])
         console.log(flag)
  },
  formSubmit(e) {
  
  },

  formReset(e) {
    console.log('form发生了reset事件，携带数据为：', e.detail.value)
    wx.removeStorageSync('experience')
    wx.removeStorageSync('salaryEnd ')
    wx.removeStorageSync('salaryStr ')
    wx.removeStorageSync('educaAtion')
    wx.removeStorageSync('index1')
    wx.removeStorageSync('index2')
    wx.removeStorageSync('index3')
    this.setData({
      active:'',
      active1:'',
      active2:'',
    })
    flag=[]
  },
  toback(){
    var num = 0
    for(var i=0;i<flag.length;i++){  
      if(flag[i]){
         num++ 
      }
      }
      wx.setStorageSync('num', num)

    wx.navigateBack({
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