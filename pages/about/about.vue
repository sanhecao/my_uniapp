<template>
	<view>
		<!-- 顶部背景 个人logo -->
		<view class="bg-img bg-mask flex align-center "
		style="background-image: url('http://m.qpic.cn/psc?/V10wN9NQ3VAKwZ/RnB*8ZLHGEz2Atf9YtgvRK4T1WeizGZPQatC*Fee1jTC29a38XCp1gnCvLnC3mtnNrNJywEQebK1kri*38eMBg!!/b&bo=yAIkAgAAAAADB84!&rf=viewer_4');height: 414upx;"
		>
	<!-- 	<image class="bg-img bg-mask flex align-center"
		src="../../static/background.png"
		style="height: 414upx;"> -->
		
			<view class="padding-xl text-white">
				<view >
				  <!-- style="background-image:url('../../static/logo.png')"> -->
				  <image class="cu-avatar lg round margin-left" src="../../static/logo.png"></image>
				</view>
				<view class="padding-xs text-xxl text-bold">
					BlossomHong
				</view>
				<view class="padding-xs text-xs">
					穿山 渡河 漂洋过海看风景
				</view>
				<view class="padding-xs text-xs">
					运动 读书 云淡风清看回忆
				</view>				
			</view>
		</view>	
		<!-- 波浪-->
		<view class="header">
			<image src="../../static/bg_wave.gif" class="bg_ware"></image>
		</view>
		<!-- 波浪下的 关注信息 -->
		<view class="bg-white padding-sm">
			<view class="grid  text-center col-3 sm-border">
				<view class=" text-xl text-mauve padding-xs ">9.0W</view>
				<view class=" text-xl text-purple padding-xs">1.0W</view>
				<view class=" text-xl text-pink padding-xs ">2.0W</view>
				<view >
					<text class="lg text-gray cuIcon-attention padding-xs"></text>
					<text>View</text>
				</view>
				<view >
					<text class="lg text-gray cuIcon-favor padding-xs"></text>
					<text>Star</text>
				</view>
				<view >
					<text class="lg text-gray cuIcon-fork padding-xs"></text>
					<text>Fork</text>
				</view>
			</view>
		</view>
		<!-- 菜单列表 -->
		<view class="cu-list menu sm-border card-menu margin-top">
			<view class="cu-item arrow">
				<view class="content">
					<text class="cuIcon-github text-grey"></text>
					<text class="text-grey">GitHub</text>
				</view>
				
			</view>
	
			<view class="cu-item  arrow ">
					<navigator class="content" hover-class="none" 
				   url="../article/article_detial" open-type="navigate">
					<text class="cuIcon-selectionfill text-orange"></text>
					<text class="text-grey">关于</text>
				</navigator>
			</view>
			<view class="cu-item arrow">
				<view class="content">
					<text class="cuIcon-appreciatefill text-red"></text>
					<text class="text-grey">赞赏支持</text>
				</view>
				
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		mounted() {
			uni.arrayBufferToBase64()
		}
	}
</script>

<style>
	@import "../../colorui/animation.css";
	
	image[class*="gif-"] {
		border-radius: 6upx;
		display: block;
	}
	.header {
	  position: relative;
	  height:3rpx;
	  background: linear-gradient(to bottom, #c9afff, #2f80ed);
	}
	
	.bg_ware {
	  position: absolute;
	  left: 0;
	  bottom: -2rpx;
	  width: 100%;
	  mix-blend-mode: screen;
	  height: 120rpx;
	}
	
</style>
