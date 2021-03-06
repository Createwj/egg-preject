/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1599557091955_903';

  config.security = {
    csrf: false
  }

  config.view = { // 指定渲染试图模板
    mapping: {
      '.html': 'ejs',
    },
  };

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
    // 加载 errorHandler 中间件
    middleware: [ 'errorHandler' ],
    // 只对 /api 前缀的 url 路径生效
    errorHandler: {
      match: '/api',
    },
  };
};
