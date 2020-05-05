const Mock = require('mockjs')
const Random =Mock.Random
const contentHtml = `<h3>如何实现深度克隆</h3>
<p>如何判断数据类型:</p>
<ul>
<li>typeof返回数据类型:String,Number,Boolean,Undefined,Object,Function</li>
<li>Object.prototype.toString.call(obj);//返回 [Object String]=&gt; [Object 数据类型]
定义检测数据类型的功能函数
<pre><code class="language-javascript">function checkType(target){
return Object.prototype.toString.call(target).slice(8,-1)
}</code></pre>
<p>//实现深度克隆</p>
<pre><code class="language-javascript">function clone(target){
//判断拷贝的数据类型
let result, targetType=checkType(target);
if(targetType === &#039;Object&#039;){
    result={}
}else if(targetType===&#039;Array&#039;){
    return []
}else{
    return target;//字符串直接返回
}
//遍历目标数据
for(let i in target){
    let value=target[i];
    //判断目标结构里的每一项值是否存在对象/数组
    if(checkType(value) === &#039;Object&#039; || checkType(value) === &#039;Arrary&#039; ){
        //继续遍历获取到的value
        result[i] =clone(value)
    }else{//获取到的数据类型是基本数据类型或函数
        result[i]=value;
    }
}
}</code></pre></li>
</ul>`

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
            "title": "@cparagraph(1,1)", //项目名称
            "abstract": "@cparagraph(3,5)",
            "cover_image": "@image('200x150','#FF6600','Project')",
			"thumbnail":"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg",
			 "extra":Random.date(),
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
			"text" :contentHtml,//"@cparagraph(5,50)",//Random.paragraph(2, 5),//生成2至5个句子的文本
			"title" :"@cparagraph(1,1)",
			"showshare" : Random.integer(0,1),
			"time" : Random.date(), // 生成一个随机日期,可加参数定义日期格式
			"thumb" : ["@image('200x150','#f176fc','artical')"],
			"likes" : Random.integer(0,100),
			"views" : Random.integer(0,100),
			"commentsNum" : Random.integer(0,100),
			"mid" : 1,
			"author" : "hqp",
			"website" : Random.url(), // 生成web地址
			"account" :  Random.name(),
			"isPay" : false
		    } 
        }
      }
      resolve(Mock.mock(mockOption))
    });
  },
  GetCategoryByType(typeId, map = {}) {
  	  let that=this;
      return new Promise((resolve, reject) => {
      let mockOption = {
        errno: 0,
        errmsg: '获取信息成功',
        data: {
  			'data|10':[{
  			"id": '@increment()',
  			"name" :"@cname()",//随机中文名
  			"type":1
  		    }]
        }
      }
      resolve(Mock.mock(mockOption))
    });
  },
  GetArticlesByCategory(categoryID,map={}){
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
	        "title": "@cparagraph(1,1)", //项目名称
	        "abstract": "@cparagraph(3,5)",
	        "cover_image": "@image('200x150','#FF6600','Project')",
			"thumbnail":"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg",
			 "tags|2":[{
				 "name":"@cname()"
			 }],
			 "content":"@cparagraph(3,5)"
	      }]
	    }
	  }
	  resolve(Mock.mock(mockOption))
	});  
  }
}