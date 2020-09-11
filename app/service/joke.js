'use strict'

const Service = require('egg').Service

class jokeServe extends Service {
  async getJoke(page, count, type) {
    const { app } = this
    const data = await app.curl(`https://api.apiopen.top/getJoke?page=${page}&count=${count}&type=${type}`, {
      data: {
        output: 'json',
      },
      dataType: 'json'
    });
    if(data.data.code === 200) {
      return data.data.result && data.data.result[0]
    } else {
      return {
        code: -1,
        msg: '请输入正确参数名称'
      }
    }
  }
}

module.exports = jokeServe
