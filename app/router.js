'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;

  // view 服务端渲染
  router.get('/weather', controller.weather.getWeather)
  router.post('/weather', controller.weather.postWeather)

  // api 调用
  router.get('/weather', '/api/v2/weather', controller.weather.getApiWeather)
};

