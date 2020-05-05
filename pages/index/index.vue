<template>
	 <!-- <page-meta>
		  <navigation-bar ></navigation-bar>
	  </page-meta> -->
	<uni-search-bar  placeholder="查找" @confirm="search" ></uni-search-bar>
	<view class="uni-flex uni-column">		
        <view class="flex-item flex-item-V uni-bg-green">		  
		   <uni-card v-for="(item ,inde) in articleList" :key="item.id"
		       :title="item.title"
		       :mode="item.thumbnail!== ''?'style':'basic'"
		       :is-shadow="true"
		       :thumbnail="item.thumbnail"
		       :extra="item.extra"
		       note="true"
			   @click="articleChick(item.id)"
		   >
		      {{item.content}}
			   <template v-slot:footer>
		       <view class="footer-box " @click.stop="">
		           <view class="flex-item footer-item">喜欢</view>
		           <view  class="flex-item footer-item">评论</view>
		           <view  class="flex-item footer-item">分享</view>
		       </view>
		   </template>
		   </uni-card>
		   
	   </view>
	 
	</view>
<!-- 返回顶部浮窗 -->
	<view class="top " :style="{'display':(flag===true? 'block':'none')}">
			<uni-icons class="topc " type="arrowthinup" 
			size="40" color="#6739b6" @click="top"></uni-icons>
	  </view>
	<view v-show="isLoad" class="cu-load bg-grey" :class="!isNoData?'loading':'over'"></view>
   
</template>

<script>
	// import api from '../../mock/api.js'
	// import mock from '../../mock/mock.js'
	const API = require('../../utils/api');
	const wxRequst = require('../../utils/wxRequest.js');
	export default {
		data() {
			return {
				articleList:[],
				searchstr:'',
				isLoad:false,
				isNoData: false,
				flag: false,//是否显示回到顶部	
					
			}
		},
		onLoad() {
			this.getLoad();
			//console.log('onLoad',this.articleList);
		},
		mounted() {
	
		},
		methods: {
			search(val){
				this.searchstr=val
				this.getLoad()
				//console.log(this.articleList)
				// let rex=new RegExp(""+val.value+"")
				// //console.log(rex.test('valdd'))
				// let temp =this.articleList.filter(item=>{
				// 	console.log(rex,item.title);
				// 	return rex.test(item.title)})
				// console.log(this.articleList)
			},
			articleChick(id){
				console.log(id);
				uni.navigateTo({
				    url: '/pages/article/article_detial?id=' +id,
					animationType: 'pop-in',
					animationDuration: 200
				});
			},
			getLoad(){
				var that=this
				wxRequst.request({
					url: API.GetPosts(),
					success: function(res) {
						that.articleList=res.data.data;
					//	that.filterArticleListList=res.data.data
					}				
				})
			},
			top() { //回到顶部
				uni.pageScrollTo({
					scrollTop: 0,
					duration: 300
				});
			},
			onPageScroll(e){ //根据距离顶部距离是否显示回到顶部按钮
				if(e.scrollTop>600){ //当距离大于600时显示回到顶部按钮
					this.flag=true
				}else{ //当距离小于600时显示回到顶部按钮
					this.flag=false
				}
			},
		
		},
		components:{
			
		},
		onPullDownRefresh() {
			this.getLoad();
			uni.stopPullDownRefresh();
		},
		onReachBottom(){
			console.log('页面滚动底部加载')
			this.isLoad=true;
			var that=this
			wxRequst.request({
				url: API.GetPosts(),
				success: function(res) {					
					if(res.data.data !== []){
						that.articleList.push(...res.data.data);
						//console.log('下拉',that.articleList)
						that.isLoad=false;
					}else{
						that.isNoData=true;
					}
				}				
			})
			
		}
	}
</script>

<style>
	.container {
		padding: 20px;
		font-size: 14px;
		line-height: 24px;
	}
	.footer-box{
		padding: 10px;		
		font-size: 14px;
		display: -webkit-flex;
		flex: auto;		
	}
	.footer-item{
		margin-left: 20px;
		flex: 2;
	}
.top {
		position: relative;
		display: none; /* 先将元素隐藏 */
		
	}
 
	.topc {
		position: fixed;
		border-radius: 50%;
		right: 5%;
		background: #c9afff;
		top: 80%;
		/* height: 40px; */
		/* line-height: 40px; */
		font-size: 10upx;
		-moz-box-shadow:0 0 10px #c9afff;
		-webkit-box-shadow:0 0 10px #c9afff;
		box-shadow:0 0 10px #c9afff;		
		
}

</style>
