'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;

  // weather
  router.get('/weathers', controller.weather.getWeathers)
  router.post('/weather', controller.weather.postWeather)
};

