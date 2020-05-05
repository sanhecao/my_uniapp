<template>
	<view>
		<scroll-view scroll-x class="bg-white nav" scroll-with-animation :scroll-left="scrollLeft">
			<view class="cu-item" :class="index==TabCur?'text-purple cur':''" v-for="(item,index) in TabList" :key="index" @tap="tabSelect"
			 :data-id="index" @click="categoryChange(item.id)">
				{{item.name}}
			</view>
		</scroll-view>
		<view class="cu-card article no-card">
			<view class="cu-item shadow-lg solid-bottom " 
			  v-for="(item) in articleList" :key="item.id"
			   @click="articleChick(item.id)"
			  >
				<view class="title">
					<view class="text-cut">{{item.title}}</view>
				</view>
				<view class="content">
					<image :src="item.thumbnail" mode="aspectFill"></image>
					<view class="desc">
						<view class="text-content">{{item.content}}</view>
						<view>
							<view class="cu-tag bg-red light sm round" 
							  v-for="(tag) in item.tags" :key="item.tag">
							  {{tag.name}}
							</view>
						</view>
					</view>
				</view>
			</view>
		<!-- <view class="line-brown"></view> -->
		</view>
	</view>
</template>

<script>
	// const API = require('../../utils/api');
	// const wxRequst = require('../../utils/wxRequest.js');
	export default {
		data() {
			return {
				TabList: [],
				TabCur: 0,
				scrollLeft: 0,
				articleList: []
			};
		},
		onLoad() {
			this.getCategory();
			this.getArticlesByCategory(0);
		},
		methods: {
			getCategory() {
				var that = this;
				this.$wxRequest.request({
					url: that.$api.GetCategoryByType(1),
					success: function(res) {
						//var a = res.data.data;
						//console.log(res.data.data)
						that.TabList = res.data.data
					}
				})
			},
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
			},
			categoryChange(id) {
				//console.log('选择类别',id)
				this.getArticlesByCategory(id)
			},
			getArticlesByCategory(categoryID) {
				var that = this;
				//console.log(111)
				this.$wxRequest.request({
					url: that.$api.GetArticlesByCategory(categoryID),
					success: function(res) {
						//var a = res.data.data;
						//console.log(res.data.data)
						that.articleList = res.data.data
					}
				})
			},
			articleChick(id){
				console.log(id);
				uni.navigateTo({
				    url: '/pages/article/article_detial?id=' +id,
					animationType: 'pop-in',
					animationDuration: 200
				});
			},
		}
	}
</script>

<style>

</style>
