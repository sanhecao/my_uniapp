<template>
	<view>
		<!-- 九宫格列表 选项 -->
		<view class="cu-list grid col-5 no-border" >
			<view class="cu-item" v-for="(item,index) in cuIconList" :key="index"
			 v-if="index<5*2">
				<view :class="['cuIcon-' + item.cuIcon,'text-' + item.color]">
					<view class="cu-tag badge" v-if="item.badge!=0">
						<block v-if="item.badge!=1">{{item.badge>99?'99+':item.badge}}</block>
					</view>
				</view>
				<text>{{item.name}}</text>
			</view>
		</view>
	    <!-- 轮播 -->
		<swiper class="screen-swiper square-dot " 
		     :indicator-dots="true" :circular="true"
			 :autoplay="true" interval="5000" duration="500">
				<swiper-item v-for="(item,index) in swiperList" :key="index">
					<image :src="item.url" mode="aspectFill" 
					  v-if="item.type=='image'"></image>
					<video :src="item.url" autoplay loop muted :show-play-btn="false" 
					:controls="false" objectFit="cover"
					 v-if="item.type=='video'"></video>
				</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cuIconList:[{
					cuIcon: 'formfill',
					color: 'red',
					badge: 120,
					name: '攻略'
				},{
					cuIcon: 'location',
					color: 'orange',
					badge: 1,
					name: '足迹'
				},{
					cuIcon: 'picfill',
					color: 'yellow',
					badge: 0,
					name: '照片'
				},{
					cuIcon: 'upstagefill',
					color: 'cyan',
					badge: 0,
					name: '排行榜'
				},{
					cuIcon: 'discoverfill',
					color: 'purple',
					badge: 0,
					name: '发现'
				}
				],
				swiperList:[{
					id: 0,
					type: 'image',
					url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588501100334&di=c92aad2b87ca9b31a7cfc83118a890d3&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2018-04-16%2F5ad48c168ccc0.jpg'
				
				},{
					id: 1,
					type: 'image',
					url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588501100333&di=f600ba32b8bbb02c2518465277b23d51&imgtype=0&src=http%3A%2F%2Fimg17.3lian.com%2F201612%2F29%2F15b63846acf322767f77517196a97944.jpg',
				},{
					id:2,
					type:'image',
					url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588501100333&di=31bfd09a157443f6ee19164db8a8b7e3&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fb595f26160a1a9d6d36c57707fb377681eb918603a10a-QxcDEW_fw658'
				}
				]
			}
		},		
		onLoad() {
			console.log(this.cuIconList,this.swiperList)
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
