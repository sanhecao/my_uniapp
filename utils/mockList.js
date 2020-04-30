const Mock = require('mockjs')
const Random =Mock.Random
export default {	
  GetPosts(map = {}) {
    return new Promise((resolve, reject) => {
       //返回分页数据
        let mockOption = {
        errno: 0,
        errmsg: '获取信息成功',
        data: {
          count: 28,
          totalPages: 3,
          pageSize: () => {
            return parseInt(map.pageSize || 10);
          },
          currentPage: () => {
            return parseInt(map.page || 1);
          },
          'data|10': [{
            'id': '@increment()',
            "title": "少儿编程能力培训项目", //项目名称
            "abstract": "@cparagraph(3,5)",
            "cover_image": "@image('200x150','#FF6600','Project')",
			"thumbnail":"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg",
			 "extra":"2019-05-20 12:32:19",
			 "content":"@cparagraph(3,5)"
          }]
        }
      }
      resolve(Mock.mock(mockOption))
    });
  },
  GetPostsbyCID(id, map = {}) {
	  let that=this;
      return new Promise((resolve, reject) => {
      let mockOption = {
        errno: 0,
        errmsg: '获取信息成功',
        data: {
			'data':{
			'id': '@increment()',
			"text" : Random.paragraph(2, 5),//生成2至5个句子的文本
			"title" : "少儿编程能力培训项目",
			"showshare" : Random.integer(0,1),
			"time" : Random.date(), // 生成一个随机日期,可加参数定义日期格式
			"thumb" : ["@image('200x150','#FF6600','Project')"],
			"likes" : Random.integer(0,100),
			"views" : Random.integer(0,100),
			"commentsNum" : Random.integer(0,100),
			"mid" : 1,
			"author" : "hqp",
			"website" : Random.url(), // 生成web地址
			"account" :  Random.name(),
			"isPay" : 1
		    } 
        }
      }
      resolve(Mock.mock(mockOption))
    });
  },
}