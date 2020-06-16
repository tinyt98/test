'use strict';

const Service = require('egg').Service;

class DbService extends Service {
  async find() {
    const result = await this.app.mysql.get('noob',{id:'1'});
    return result;
    
  }
}

module.exports = DbService;
