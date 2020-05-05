const domain="www.xxx.cn"
const apikey="hqp"
const name="Blossomhong"
const ENV_TYPE="MOCK"//mock数据,正式数据 修改这里
const API_URL="https://" + domain + "/api/"

module.exports={
	ENV_TYPE,
	GetDomain(){
		return ENV_TYPE === 'MOCK'? 'GetDomain': "https://" + domain + "/";
	},
	GetPosts(){
		return ENV_TYPE === 'MOCK'? 'GetPosts': API_URL + 'posts?'
	},
	GetPostsbyCID: function(cid) {
			return  ENV_TYPE === 'MOCK'? 'GetPostsbyCID' : API_URL + 'posts?cid=' + cid;
		},
	// 获取每种文章的种类:程序类,旅行类,运动类等 下面的子类
	GetCategoryByType:function(typeID){
		return ENV_TYPE === 'MOCK'? 'GetCategoryByType' : API_URL + 'category?typeid=' + typeID;
	},
	//根据类别获取所有文章
	GetArticlesByCategory:function(CategoryID){
		return ENV_TYPE === 'MOCK'? 'GetArticlesByCategory' : API_URL + 'GetArticlesByCategory?CategoryID=' + typeID;
	},
}