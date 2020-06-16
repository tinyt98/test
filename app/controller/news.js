'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {
  async index() {
    var msg = await this.service.news.getNewsList();
    
     await this.ctx.render('index',{
       msg
     })
  };
  async add() {
     console.log(this.ctx.request.body);
     
  };
  async getdb(){
    var result = await this.service.db.find();
    console.log(result);
    
  }
}

module.exports = NewsController;
