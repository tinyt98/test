module.exports = app => {
  class detailController extends app.Controller {
        async index() {
            var aid = this.ctx.query.aid;
            var res = await this.service.news.getContent(aid);
            await this.ctx.render('detail',{
                msg:res[0]
            })
            
        }
  }
  return detailController
}
