const Mock = require('mockjs')
export default {
  getList(map = {}) {
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

  getInfo(id, map = {}) {
    return new Promise((resolve, reject) => {
      let mockOption = {
        errno: 0,
        errmsg: '获取信息成功',
        'data': {
          'id': '@increment()',
          "title": "少儿编程能力培训项目", //项目名称
          "cover_image": "@image('750x350','#FF6600','SYB Project')",
          "abstract": "@cparagraph(5,10)", //项目简介
          "description": "@cparagraph(10, 20)", //项目描述
          "highlights": "@cparagraph(3, 5)", //项目亮点
          "market_analysis": "@cparagraph(4, 20)", //市场分析
          "financing_plan": "@cparagraph(3, 5)", //融资计划
          "financing_demand": "@cparagraph(3, 5)", //融资需求
          "team_characteristics": "@cparagraph(3, 5)", //团队特色
          "talent_demand": "@cparagraph(3, 5)", //人才需求
          "business_data_highlights": "@cparagraph(3, 5)", //运营数据亮点
          "images|1-3": [
            "@image('750x350','#FF6600','SYB')",
            "@image('750x350','#4A7BF7','SYB')",
          ]
        }
      }
      resolve(Mock.mock(mockOption))
    })
  },
}