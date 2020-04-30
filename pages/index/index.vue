<template>
	 <!-- <page-meta>
		  <navigation-bar ></navigation-bar>
	  </page-meta> -->
	<uni-search-bar  placeholder="查找" @confirm="search"></uni-search-bar>
	<view class="uni-flex uni-column">		
        <view class="flex-item flex-item-V uni-bg-green">		  
		   <uni-card v-for="(item ,inde) in articleList" :key="item.id"
		       :title="item.title"
		       mode="style"
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
</template>

<script>
	// import api from '../../mock/api.js'
	// import mock from '../../mock/mock.js'
	const API = require('../../utils/api');
	const wxRequst = require('../../utils/wxRequest.js');
	export default {
		data() {
			return {
				articleList:[]
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
				//console.log(val)
				let rex=new RegExp(""+val.value+"")
				//console.log(rex.test('valdd'))
				let temp =this.articleList.filter(item=>{
					console.log(rex,item.title);
					return rex.test(item.title)})
				console.log(this.temp)
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
					}				
				})
			}
		},
		components:{
			
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
</style>
