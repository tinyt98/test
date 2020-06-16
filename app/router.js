'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/news', controller.news.index);
  router.get('/getdb', controller.news.getdb);
  router.get('/detail', controller.detail.index);
  router.post('/add', controller.news.add);
};
