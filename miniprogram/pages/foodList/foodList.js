// pages/foodList/foodList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     proList:[],
     start:0,
     count:10,
     page:1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      
      wx.request({
        url: 'https://api.douban.com/v2/movie/top250',
        data:{
          apikey:'0df993c66c0c636e29ecbb5344252a4a',
          start:this.data.start,
          count:this.data.count
        },
        header:{
          "Content-Type":"json"
      },
      success:(res)=>{
          console.log(res.data.subjects);
          this.setData({
            proList:res.data.subjects
          })

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
    console.log('下拉刷新');
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log('上拉触底');
    var start=(this.data.page*this.data.count)+1;
    var page=this.data.page+1;
    this.setData({
      page:page,
      start:start
    },()=>{
      wx.request({
        url: 'https://api.douban.com/v2/movie/top250',
        data:{
          apikey:'0df993c66c0c636e29ecbb5344252a4a',
          start:this.data.start,
          count:this.data.count
        },
        header:{
          "Content-Type":"json"
      },
      success:(res)=>{
          console.log(res.data.subjects);
          var proList=this.data.proList;
          proList=proList.concat(res.data.subjects);
          this.setData({
            proList:proList
          })
  
      }
      })
    })
    

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})