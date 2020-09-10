'use strict';

const Controller = require('egg').Controller;

class WeatherController extends Controller {

  async postWeather() {
    const { ctx, service } = this;
    const location = ctx.request.body.location
    const data = await service.weather.getWeather(location)
    await ctx.render('weather', { data })
  }

  async getWeather() {
    const { ctx, service } = this;
    console.log(ctx.request)
    const data = await service.weather.getWeather('北京')
    await ctx.render('weather', { data })
  }

  // api
  async getApiWeather() {
    const { ctx, service } = this;
    const { location } = ctx.query
    const data = await service.weather.getWeather(location)
    ctx.set('Content-Type', 'application/json');
    ctx.body = {
      data
    };
    ctx.status = 201;
  }

}

module.exports = WeatherController;
