import mockList from './mockList.js'
import {ENV_TYPE} from './api.js'
const requestHandler ={
	url:'',
	data:{},
	method:'',
	success:function(res){},
	fail:function(){},
	complete:function(){}
	
}
//正常请求
function request(requestHandler){
	var data=requestHandler.data;
	var url=requestHandler.url;
	var method=requestHandler.method;
	uni.request({
		url:url,
		data:data,
		method:method,
		success:function(res){
			requestHandler.success(res)
		},
		fail:function(){
			requestHandler.fail()
		},
		complete:function(){
		//	requestHandler.complete()
		}
	})
}
//mock请求
function requestMock(requestHandler){
	var data=requestHandler.data;
	var url=requestHandler.url;
	var method=requestHandler.method;
	//console.log(url);
	mockList[url]({}).then(res=>{
	//mockList.GetPosts({}).then(res=>{
				console.log(url,res.data.data);
				//this.resData=res.data.data
				requestHandler.success(res);
				//console.log(JSON.stringify(res, null, 4))
			})
	
}
module.exports={
	request:ENV_TYPE ==='MOCK'? requestMock:request
}