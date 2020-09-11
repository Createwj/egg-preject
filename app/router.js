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
  router.get('/weather', '/api/v1/weather', controller.weather.getApiWeather)
  router.get('/getJoke', '/api/v1/getJoke', controller.joke.getJoke)
};

