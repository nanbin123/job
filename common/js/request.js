var url = require("../../utils/request.js")

module.exports = {
  serveRequest: function (e) {
    return new Promise(function (resolve, reject) {
      wx.request({
        url: url.default + e.url,
        header: {
          "content-type": "application/x-www-form-urlencoded",
          'token': wx.getStorageSync('token')
        },
        data:  e.data,
        method: e.method || "GET",
        dataType: "json",
        success: function (response) {        
            var data = response.data || {};
            if (0 == data.code) resolve(data); 
        },
        fail: function (e) {
            wx.showToast({
            title: "服务器开小差了,再试试看",
            icon: "none"
          });
        }
      });
    });
  }
};