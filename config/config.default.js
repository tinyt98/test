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
  const config = exports = {
      //配置mysql连接
  mysql: {
    // 单数据库信息配置
    client: {
      // host
      host: '127.0.0.1',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: 'rootROOT_123',
      // 数据库名
      database: 'test',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  }
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1591873840692_8524';

  // add your middleware config here
  config.middleware = ['printDate','auth'];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  //配置ejs模版后缀名
  config.view = {
    mapping: {
      '.html': 'ejs',
    },
  };

  //配置api接口
  config.api='http://www.phonegap100.com/';
  return {
    ...config,
    ...userConfig,
  };
};
