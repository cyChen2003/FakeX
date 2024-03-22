<!-- 蓝色登录页面2 -->
<template>
	<view style="height:100vh;background: #fff;">
		<view class="img-a">
			<view class="t-b">
				您好，
				<br />
				欢迎使用，FakeX小程序
			</view>
		</view>
		<view class="login-view" style="">
			<u-toast ref="uToast"></u-toast>
			<view class="t-login">
				<u--form class="cl" borderBottom="false">
					<u-form-item borderBottom="false">
						<u--text text="手机号" color="#000000" prefixIcon="phone"></u--text>
						<view class='t-input'>
							<u--input name="phone" placeholder="请输入您的手机号" maxlength="11" border="bottom" v-model="phone" />
						</view>
					</u-form-item>
					<u-form-item>
						<view class="t-a">
							<u--text text="密码" color="#000000" prefixIcon="lock"></u--text>
							<u--input type="password" name="code" maxlength="18" placeholder="请输入您的密码"
								border="bottom" v-model="pwd"/>
						</view>
					</u-form-item>
					<view class="t-button-all">
						<view class="t-button">
							<u-button @click="login()" type="primary" shape="circle">登 录</u-button>
						</view>
						<view class="t-button">
							<u-button shape="circle" open-type="getUserInfo" @getuserinfo="wxGetUserInfo">注 册</u-button>
						</view>
					</view>
				</u--form>
				<view class="t-f"><text>—————— 第三方账号登录 ——————</text></view>
				<view class="t-e cl">
					<view class="t-g" @tap="wxLogin()">
						<image src="https://zhoukaiwen.com/img/loginImg/wx.png"></image>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	import authorize from '../../components/authorize.vue'
	import setUserInfo from "../../common/setUserInfo.js"
	export default {
		data() {
			return {
				phone: '', //手机号码
				pwd: '' //密码
			};
		},
		onLoad() {},
		methods: {
			//当前登录按钮操作
			login() {
				var that = this;
				if (!that.phone) {
					uni.showToast({
						title: '请输入您的手机号',
						icon: 'none'
					});
					return;
				}
				if (!/^[1][3,4,5,7,8,9][0-9]{9}$/.test(that.phone)) {
					this.$refs.uToast.show({
						type: 'error',
						message: '请输入正确的手机号',
						position: 'top',
						iconUrl: 'https://cdn.uviewui.com/uview/demo/toast/error.png',
					});
					return;
				}
				if (!that.pwd) {
					this.$refs.uToast.show({
						type: 'error',
						message: '请输入您的密码',
						position: 'top',
						iconUrl: 'https://cdn.uviewui.com/uview/demo/toast/error.png',
					});
					return;
				}
				this.$refs.uToast.show({
					type: 'success',
					message: '登录成功',
					position: 'top',
					iconUrl: 'https://cdn.uviewui.com/uview/demo/toast/success.png',
					// 	url: '/pages/index/index'结束后跳转
				});
			},
			//注册按钮点击
			reg() {

				this.$refs.uToast.show({
					type: 'default',
					message: '跳转注册页面',
					position: 'top',
					// 	url: '/pages/index/index'结束后跳转
				}, );
			},
			//等三方微信登录
			async wxLogin() {
				try {
					const userInfo = await setUserInfo();
					console.log("用户信息：", userInfo);
					//如果userInfo有值，则弹出提示框
					if (userInfo) {
						this.$refs.uToast.show({
							type: "success",
							message: "微信登录成功",
							position: "top",
							iconUrl: "https://cdn.uviewui.com/uview/demo/toast/success.png",
						});
					}
				} catch (error) {
					console.error("获取用户信息失败：", error);
					this.$refs.uToast.show({
						type: "error",
						message: "获取用户信息失败",
						position: "top",
						iconUrl: "https://cdn.uviewui.com/uview/demo/toast/error.png",
					});
				}
			},
			//第三方支付宝登录
			zfbLogin() {
				uni.showToast({
					title: '支付宝登录',
					icon: 'none'
				});
			},
			wxGetUserInfo() {
				setUserInfo()
			},
		},
	}
</script>
<style>
	.txt {
		font-size: 32rpx;
		font-weight: bold;
		color: $u-primary;
	}

	.img-a {
		width: 100%;
		height: 450rpx;
		background-image: url(https://zhoukaiwen.com/img/loginImg/head.png);
		background-size: 100%;
	}

	.reg {
		font-size: 28rpx;
		color: #fff;
		height: 90rpx;
		line-height: 90rpx;
		border-radius: 50rpx;
		font-weight: bold;
		background: #f5f6fa;
		color: #000000;
		text-align: center;
		margin-top: 30rpx;
	}

	.login-view {
		width: 100%;
		position: relative;
		margin-top: -120rpx;
		background-color: #ffffff;
		border-radius: 8% 8% 0% 0;
	}

	.t-login {
		width: 600rpx;
		margin: 0 auto;
		font-size: 28rpx;
		padding-top: 80rpx;
	}

	.t-login button {
		font-size: 28rpx;
		background: #2796f2;
		color: #fff;
		height: 90rpx;
		line-height: 90rpx;
		border-radius: 50rpx;
		font-weight: bold;
	}

	.t-login input {
		height: 90rpx;
		line-height: 90rpx;
/* 		margin-bottom: 50rpx; */
		border-bottom: 1px solid $u-border-color;
		font-size: 28rpx;
	}



	.t-b {
		text-align: left;
		font-size: 42rpx;
		color: #ffffff;
		padding: 130rpx 0 0 70rpx;
		font-weight: bold;
		line-height: 70rpx;
	}

	.t-login .t-c {
		position: absolute;
		right: 22rpx;
		top: 22rpx;
		background: #5677fc;
		color: #fff;
		font-size: 24rpx;
		border-radius: 50rpx;
		height: 50rpx;
		line-height: 50rpx;
		padding: 0 25rpx;
	}

	.t-login .t-d {
		text-align: center;
		color: #999;
		margin: 80rpx 0;
	}

	.t-login .t-e {
		text-align: center;
		width: 250rpx;
		margin: 40rpx auto 0;
	}

	.t-login .t-g {

		float: left;
		width: 100%;
	}

	.t-login .t-e image {
		width: 50rpx;
		height: 50rpx;
	}

	.t-login .t-f {
		text-align: center;
		margin: 50rpx 0 0 0;
		color: #666;
	}

	.t-login .t-f text {
		margin-left: 20rpx;
		color: #aaaaaa;
		font-size: 27rpx;
	}

	.t-login .uni-input-placeholder {
		color: #aeaeae;
	}

	.t-login.t-button-all {
		display: flex;
		justify-content: space-between;
		margin-top: 100rpx;
	}

	.t-login .t-button {
		margin-top: 35rpx;
	}

	/* 	.cl {
		zoom: 1;
	}

	.cl:after {
		clear: both;
		display: block;
		visibility: hidden;
		height: 0;
		content: '\20';
	} */
</style>