'use strict';

const Controller = require('egg').Controller;

class jokeController extends Controller {
  // api
  async getJoke() {
    const { ctx, service } = this;
    const { page, count, type } = ctx.query
    const data = await service.joke.getJoke(page, count, type)
    ctx.set('Content-Type', 'application/json');
    ctx.body = {
      data
    };
    ctx.status = 201;
  }

}

module.exports = jokeController;
