<template>
	<view>
	<view v-if="!loadModal">
		<view class="thum-mask">
			<image class="cover cover-100 img-mask" mode="aspectFill" :src="thumb"></image>
		</view>
		<view class="data-h fd">
			<view class="title padding-bottom-sm solid-bottom"> {{ title }}</view>
			<view class="margin-top-sm">
				<view class="cu-capsule round">
					<view class='cu-tag bg-gray '> <text class='cuIcon-time'></text></view>
					<view class="cu-tag line-gray"><uni-icons type="flag"></uni-icons>{{time}}</view>
				</view>
				<view class="cu-capsule round">
					<view class='cu-tag bg-blue '><text class='cuIcon-attention'></text></view>
					<view class="cu-tag line-blue"> {{views}}</view>
				</view>
				<view class="cu-capsule round">
					<view class='cu-tag bg-red '><text class='cuIcon-appreciate'></text></view>
					<view class="cu-tag line-red">{{likes}}</view>
				</view>
				<view class="cu-capsule round">
					<view class='cu-tag bg-green'><text class='cuIcon-message'></text></view>
					<view class="cu-tag line-green"> {{commentsNum}}</view>
				</view>
			</view>
		</view>
	
		<view class="padding margin-top bg-white radius-c solids-bottom ">
			<view class="margin-xs" v-if="!isPay">
				{{content}}
				<!-- <u-parse :content="content" @preview="preview($event)" @navigate="navigate"></u-parse> -->
			</view>
		<!-- 	<view class="margin-xs  pay" v-else>
				<button class="text-center padding-xl" @click="getPay">
					<text class='cuIcon-lock margin-right-xs'></text>
					该内容需要观看广告才能查看
				</button>
			</view> -->
			<view class="like-area solid-top bg-white text-center flex-direction padding bottom">
				<button class="cu-btn cuIcon line-red round lg padding" @click="showModal">
					<text class="cuIcon-likefill xl"></text>
				</button>
				<view class="margin-top">愣着干嘛，还TM不点赞！</view>
			</view>
		</view>
	
		<!-- ⬇⬇⬇⬇下面的可以设置成网络数据，我就不设置了 -->
		<view class="cu-card article author">
			<view class="cu-item shadow">
				<view class="title">
					<text class="cuIcon-titles text-green margin-right-sm"></text>
					作者介绍：
				</view>
				<view class="flex">
					<view class="flex-sub">
						<image src="../../static/logo.jpg" mode="widthfix" class="cu-avatar xl margin-left-lg solids round"></image>
					</view>
					<view class="flex-twice">
						<view class="padding-bottom-sm"><text class="cuIcon-title text-red margin-right-sm"></text>名称：{{author}}</view>
						<view class="padding-bottom-sm"><text class="cuIcon-title text-red margin-right-sm"></text>网址：{{website}}</view>
						<view><text class="cuIcon-title text-red margin-right-sm"></text>微信公众号：{{account}}</view>
					</view>
				</view>
			</view>
		</view>
	
		<view class="" v-if="showshare!=0">
			<view class="cu-bar">
				<view class="action">
					<text class="cuIcon-titles text-brown"></text>
					<text class="text-xl text-bold">热门评论</text>
				</view>
			</view>
			<view class="cu-list menu-avatar comment solids-top margin-lr-sm pinglun" v-if="comments!='NULL'">
				<view class="cu-item" v-for="item in comments" :key="item.coid">
					<view class="cu-avatar round" :style="[{ backgroundImage:'url(' + item.authorImg + ')' }]" v-if="item.authorImg != null"></view>
					<view class="cu-avatar round" style="background-image: url('https://www.ycygame.cn/img/touxiang.jpg')" v-else></view>
					<view class="content">
						<view class="text-grey">{{item.author}}</view>
						<view class="text-gray text-content text-df">
							{{item.text}}
						</view>
						<view class="bg-grey padding-sm margin-top-sm  text-sm" v-for="a in item.replays" :key="a.coid">
							<view class="flex">
								<view class="text-red">{{a.author}} : </view>
								<view class="flex-sub">{{a.text}}</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view v-else>
				<button class=" bg-white margin">文章暂无评论</button>
			</view>
	
	
			<view class="margin-bottom">
				<view class="cu-bar margin-top-sm">
					<view class="action">
						<text class="cuIcon-titles text-red"></text>
						<text class="text-xl text-bold">我要哔哔</text>
					</view>
				</view>
				<view class=" bg-white margin-lr-sm padding-sm" v-if="userInfo != null">
					<view class="padding">
						<view class="cu-avatar-group">
							<view class="cu-avatar round sm" v-for="(item,index) in avatar" :key="index" :style="[{ backgroundImage:'url(' + avatar[index] + ')' }]"></view>
						</view>
						<text class="text-grey text-sm">袁先生等10人觉得很赞</text>
					</view>
					<textarea v-model="commentText" placeholder="(已开启评论审核模式,评论审核通过后方能显示)" class="solid padding margin-left-lg" style="width:90%"></textarea>
					<view class="flex justify-between padding">
						<view> <text class="text-bold padding-lr text-red">你的ID：{{userInfo.nickName}}</text></view>
						<view class="" style="width:35%">
							<button style="width:100%" class="cu-btn line-base" @click="comment">发表</button>
						</view>
					</view>
				</view>
				<view class="flex" v-else>
					<!-- #ifndef H5 -->
					<button class="cu-btn bg-gradual-green " style="width: 90%; margin:0 auto;" open-type="getUserInfo" @getuserinfo="getuserinfo"
					 withCredentials="true">评论功能需要授权后才可以使用</button>
					<!-- #endif -->
	
					<!-- #ifdef H5 -->
					<button class="cu-btn bg-gradual-green " style="width: 90%; margin:0 auto;">H5页面暂时不支持评论</button>
					<!-- #endif -->
				</view>
			</view>
		</view>
	
	
		<view class="margin-bottom-xl" v-if="relatedShow">
			<view class="cu-bar margin-top-sm">
				<view class="action">
					<text class="cuIcon-titles text-brown"></text>
					<text class="text-xl text-bold">推荐阅读</text>
				</view>
			</view>
			<view class="cu-card" v-for="item in related" @click="goDetails" :data-cid="item.cid" :key="item.author">
				<view class="cu-item shadow" style="height: 250upx;">
					<view class="thumb margin-right" style="height: 250upx; background-size:cover;" :style="[{backgroundImage:'url('+item.thumb[0].str_value+')'}]"></view>
					<view class="text-cut padding-top text-xl text-bold">{{item.title}}</view>
					<view class="text-content padding-top-xs moretext-cut padding-right-xs">{{item.description[0].str_value}}</view>
					<view class="text-gray text-sm padding-top-sm flex justify-end padding-right-sm">
						<text class="cuIcon-attention margin-lr-xs "></text> {{item.views}}
						<text class="cuIcon-appreciate margin-lr-xs "></text> {{item.likes}}
						<text class="cuIcon-message margin-lr-xs "></text> {{item.commentsNum}}
					</view>
				</view>
			</view>
		</view>
	</view>
	
	<!-- <view class="margin-bottom-xl"></view> -->
	
	<view class="cu-load load-modal" v-if="loadModal">
		<view class="cuIcon-emojifill text-orange"></view>
		<view class="gray-text">加载中...</view>
	</view>
	
	<view class="cu-modal" :class="modalName=='Image'?'show':''">
		<view class="cu-dialog">
			<view class="bg-img" style="background-image: url('https://tuku.ycygame.cn/anhaowu/shoutu.png');height:200upx;">
				<view class="cu-bar justify-end text-white">
					<view class="action" @click="hideModal">
						<text class="cuIcon-close "></text>
					</view>
				</view>
			</view>
			<view class="bg-white padding solids-bottom">非常感谢您的支持，送你小♥ ♥！</view>
			<view class="cu-bar bg-white">
				<view class="action margin-0 flex-sub  solid-left" @click="hideModal">我知道了</view>
			</view>
		</view>
	</view>
	</view>
</template>
<script>
	import marked from 'marked'
	//import uParse from '@/components/gaoyia-parse/parse.vue'
	const API = require('../../utils/api');
	const wxRequst = require('../../utils/wxRequest.js');

	export default {
		mounted() {
			uni.setNavigationBarTitle({
			    title: '文章'
			});
		},
		data() {
			return {
				cid: '54',
				title: '加载文章失败!请刷新试试',
				thumb: '',
				content: '',
				showshare: 0,
				time: '2020-4-27',
				likes: '9999',
				views: '999',
				commentsNum: '999',
				isLike: true,
				isPay: false,
				author: '',
				website: '',
				account: '',
				loadModal: false,
				modalName: null,
				commentText: "",
				isLogin: false,
				replaycoid: "",
				related: [],
				comments: [],
				userInfo: null,
				relatedShow: false,
				avatar: [],
				article:{}
			}
		},
		components: {
		//	uParse
		},
		onLoad(res) {
			console.log(res)
			this.cid = res.cid;
			this.loading();			
			this.getArticle();
			//console.log(this.article);
		},
		//分享
		// onShareAppMessage(res) {
		// 	if (res.from === 'button') {}
		// 	return {
		// 		title: this.title,
		// 		path: '/pages/details/details?cid=' + this.cid
		// 	}
		// },
		methods: {
			getArticle: function() {
				var that = this;
				var cid = this.cid;
				console.log(cid);
				wxRequst.request({
					url: API.GetPostsbyCID(cid),
					success: function(res) {
						var a = res.data.data;
						//that.article = a;
						//console.log(that.article);
					//	that.content=that.article.text;
						that.content = marked(a.text)
						that.title = a.title;
						that.showshare = a.showshare;
						that.thumb = a.thumb[0].str_value;
						that.time = a.time;
						that.likes = a.likes;
						that.views = a.views;
						that.commentsNum = a.commentsNum;
						that.mid = a.mid;
						that.author = a.author;
						that.website = a.website;
						that.account = a.account;
						that.isPay = a.isPay;
						//that.getPostsbyMIDLimit(that.mid);
						//that.getComments(cid);
						that.loadModal=false
					}
				})
			},
			getPostsbyMIDLimit: function(mid) {
				var that = this;
				wxRequst.request({
					url: API.GetPostsbyMIDLimit(mid, 3, that.cid),
					success: function(res) {
						if (res.data.data.length == 0) {

						} else {
							that.relatedShow = true;
							that.related = res.data.data;
						}
					}
				})
			},
			loading: function() {
				this.loadModal = true;
				// setTimeout(() => {
				// 	this.loadModal = false;
				// }, 500)
			},
			appreciates: function() {
				this.isLike = false
			},
			comment: function() {
				var that = this;
				var a = this.userInfo;
				var cmt = this.commentText;
				if (cmt == "") {
					console.log("TM神马也不写，干嘛呀。")
				} else {
					wxRequst.request({
						url: API.Postcomment(that.cid, a.nickName, cmt, that.replaycoid, a.avatarUrl),
						success: function(res) {
							that.getComments(that.cid)
							that.commentText = "";
						}
					})
				}
			},
			goDetails: function(e) {
				uni.navigateTo({
					url: "/pages/details/details?cid=" + e.currentTarget.dataset.cid
				})
			},
			getComments: function(cid) {
				var that = this;
				wxRequst.request({
					url: API.GetPostsCommentbyCID(cid),
					success: function(res) {
						console.log(res.data.data)
						that.comments = res.data.data;
						// console.log(res.data.data)
					}
				})
			},
			getPay: function() {
				var that = this;
				var videoAd = null;
				if (qq.createRewardedVideoAd) {
					// 加载激励视频广告
					videoAd = qq.createRewardedVideoAd({
						adUnitId: 'd2b85d0f7ff8db2af4b65ebdfbc5c564' //你的广告key
					})
					//捕捉错误
					videoAd.onError(err => {
						// 进行适当的提示
					})
					// 监听关闭
					videoAd.onClose((status) => {
						if (status && status.isEnded || status === undefined) {
							// 正常播放结束，下发奖励
							that.isPay = 0;
						} else {
							// 播放中途退出，进行提示
						}
					})
				}
				if (videoAd) {
					videoAd.show().catch(err => {
						// 失败重试
						videoAd.load()
							.then(() => videoAd.show())
					})
				}
			},

			getuserinfo: function() {
				var that = this;
				// wx登录
				wx.login({
					success(res) {
						// console.log(res)
						if (res.code) {
							//发起网络请求
							var code = res.code
							// 获取微信用户信息
							wx.getUserInfo({
								success: function(res) {
									res.userInfo.code = code
									that.userInfo = res.userInfo
									Net.request({
										// #ifdef MP-WEIXIN
										url: API.WXLogin(that.userInfo),
										// #endif
										// #ifdef MP-QQ
										url: API.QQLogin(that.userInfo),
										// #endif
										success: function(res) {
											that.userInfo.openid = res.data.data
											that.isLogin = true
										}
									})
								},
								fail: res => {
									// 获取失败的去引导用户授权 
								}
							})
						} else {

						}
					}
				})
			},
			formatDate(datetime) {
				var datetime = new Date(parseInt(datetime * 1000));
				// 获取年月日时分秒值  slice(-2)过滤掉大于10日期前面的0
				var year = datetime.getFullYear(),
					month = ("0" + (datetime.getMonth() + 1)).slice(-2),
					date = ("0" + datetime.getDate()).slice(-2),
					hour = ("0" + datetime.getHours()).slice(-2),
					minute = ("0" + datetime.getMinutes()).slice(-2);
				//second = ("0" + date.getSeconds()).slice(-2);
				// 拼接
				var result = year + "-" + month + "-" + date;
				// 返回
				return result;
			},
			preview(src, $event) {},
			navigate(href, $event, attr) {
				clipboard.setText(href);
			},
			showModal(e) {
				this.modalName = "Image"
			},
			hideModal(e) {
				this.modalName = null
			},
		}

	}
</script>

<style lang="less">
	.thumb {
		float: left;
		width: 280upx;
	}

	.radius-c {
		border-radius: 35upx 35upx 0upx 0upx;
	}

	.data-lei {
		background-color: #44cc86;
		border-radius: 10upx;
		padding: 0upx 15upx;
		color: #FFFFFF;
		margin-right: 16upx;
		font-size: 34upx;
	}

	.data-h {
		background-color: #FFFFFF;
		border-radius: 20upx;
		margin: 20upx 30upx;
		padding: 20upx 20upx;
		font-size: 34upx;
	}

	.thum-mask {
		position: relative;
		width: 100%;
		height: 400rpx;
	}

	.thum-mask:after {
		content: "";
		display: inline-block;
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		opacity: 0.35;
		background: #191919;
	}

	.img-mask {
		width: 100%;
		height: 400rpx;
	}

	.fd {
		position: relative;
		padding: 40rpx 24rpx;
		box-shadow: 2rpx 4rpx 40rpx #c2c2c2;
		z-index: 999;
		margin-top: -60rpx;
		margin-bottom: 24rpx;
		margin-left: 24rpx;
		margin-right: 24rpx;
		border-radius: 12rpx;
	}

	.author {
		position: relative;
		z-index: 999;
		margin-top: -160upx;
	}

	.shadow {
		box-shadow: 2upx 4upx 15upx #c2c2c2;
	}

	.bottom {
		padding-bottom: 160upx;
	}

	.moretext-cut {
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		text-overflow: ellipsis;
		overflow: hidden;
	}

	.pinglun {
		border-radius: 30rpx;
	}

	.pay {
		button {
			height: 200rpx;
			border-radius: 30rpx;
		}

		button::after {
			border: none;
		}

	}
</style>
