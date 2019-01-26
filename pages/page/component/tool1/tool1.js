Page({
  data: {
    pension: ['请选择', '0.1%', '0.2%', '0.3%', '0.4%'],//养老
    medical: ['请选择', '0.1%', '0.2%', '0.3%', '0.4%'],//医疗
    unemployment: ['请选择', '0.1%', '0.2%', '0.3%', '0.4%'],//失业
    injury: ['请选择', '0.1%', '0.2%', '0.3%', '0.4%'],//工伤
    fertility: ['请选择', '0.1%', '0.2%', '0.3%', '0.4%'],//生育
    providentFund: ['请选择', '0.1%', '0.2%', '0.3%', '0.4%'],//公积金
    suppProvidentFund: ['请选择', '0.1%', '0.2%', '0.3%', '0.4%'],//补充公积金
    pensionIndex: 0,
    medicalIndex: 0,
    unemploymentIndex: 0,
    injuryIndex: 0,
    fertilityIndex: 0,
    providentFundIndex: 0,
    suppProvidentFundIndex: 0,
    checkboxStatus: true,
    btnStatue: false,

    queryRequest: {}
  },

  //工资总金额
  bindTotalAmount(e) {
    this.setData({
      ['queryRequest.totalAmount']: e.detail.value
    });
    this.btnCanClick();
  },

  //扣除个税专项附加
  bindSpecialTaxBase(e) {
    this.setData({
      ['queryRequest.specialTax']: e.detail.value
    });
    this.btnCanClick();
  },

  //社保汇缴基数
  bindSocialSecurityBase(e) {
    this.setData({
      ['queryRequest.socialSecurityBase']: e.detail.value
    });
    this.btnCanClick();
  },

  //公积金汇缴基数
  bindProvidentFundBase(e) {
    this.setData({
      ['queryRequest.providentFundBase']: e.detail.value
    });
    this.btnCanClick();
  },

  //养老
  bindPension(e) {
    this.setData({
      pensionIndex: e.detail.value,
      ['queryRequest.pension']: this.data.pension[e.detail.value]
    });
    this.btnCanClick();
  },

  //医疗
  bindMedical(e) {
    this.setData({
      medicalIndex: e.detail.value,
      ['queryRequest.medical']: this.data.medical[e.detail.value]
    });
    this.btnCanClick();
  },

  //失业
  bindUnemployment(e) {
    this.setData({
      unemploymentIndex: e.detail.value,
      ['queryRequest.unemployment']: this.data.unemployment[e.detail.value]
    });
    this.btnCanClick();
  },

  //工伤
  bindInjury(e) {
    this.setData({
      injuryIndex: e.detail.value,
      ['queryRequest.injury']: this.data.injury[e.detail.value]
    });
    this.btnCanClick();
  },

  //生育
  bindFertility(e) {
    this.setData({
      fertilityIndex: e.detail.value,
      ['queryRequest.fertility']: this.data.fertility[e.detail.value]
    });
    this.btnCanClick();
  },

  //公积金
  bindProvidentFund(e) {
    this.setData({
      providentFundIndex: e.detail.value,
      ['queryRequest.providentFund']: this.data.providentFund[e.detail.value]
    });
    this.btnCanClick();
  },

  //补充公积金
  bindCheckbox(e) {
    if (null != e.detail.value && e.detail.value == "true") {
      this.setData({
        checkboxStatus: false
      })
    }else {
      this.setData({
        checkboxStatus: true,
        ['queryRequest.suppProvidentFund']: null
      })
    }
  },
  bindSuppProvidentFund(e) {
    this.setData({
      suppProvidentFundIndex: e.detail.value,
      ['queryRequest.suppProvidentFund']: this.data.suppProvidentFund[e.detail.value]
    });
  },

  btnCanClick: function () {
    if ((this.data.queryRequest.totalAmount != '' && this.data.queryRequest.totalAmount != null) && 
    this.data.pensionIndex > 0 && this.data.medicalIndex > 0 &&
      this.data.unemploymentIndex > 0 && this.data.injuryIndex > 0 &&
      this.data.fertilityIndex > 0 && this.data.providentFundIndex > 0){
      this.setData({
        btnStatue: false
      })
    }else {
      btnStatue: true
    }
  },
  

  queryAmount: function () {
    console.log('queryRequest', this.data.queryRequest);
    wx.request({
      //url: 'http://localhost:8080/api/returnHello',
      url: '/microApi/api/returnHello',
      data: { 'hello': this.data.payAmount},
      header: {},
      method: 'POST',
      dataType: 'json',
      responseType: 'text',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { console.log(res) },
    })
  },

  payAmountFunction(e) {
    this.setData({
      payAmount: e.detail.value
    })
  }
})