module.exports = app => {
  class NewsService extends app.Service {
        async getNewsList() {
            var url = this.config.api+'appapi.php?a=getPortalList&catid=20&page=1'
            //curl发送http请求
            var response = await this.ctx.curl(url);
            var res = JSON.parse(response.data)
            
            return res.result;
        };
        async getContent(aid) {
             var url = this.config.api+'appapi.php?a=getPortalArticle&aid='+aid;
             var response = await this.ctx.curl(url);
             var res = JSON.parse(response.data);
            return res.result;
        }
  }
  return NewsService
}
