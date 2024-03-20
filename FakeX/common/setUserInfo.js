import { created } from "../uni_modules/uview-ui/libs/mixin/mixin";

export default () => {
	return new Promise((resolve, reject) => {
		uni.getSetting({
			success(res) {
				// console.log("授权：", res);
				uni.showModal({
					title: "授权提醒",
					content: "请授权头像等信息，以便为您提供更好的服务",
					cancelText: "随便逛逛",
					confirmText: "确认授权",
					success: function(showres) {
						if (showres.confirm) {
							// console.log('用户点击确定');
							uni.login({
									desc: "用于完善个人资料", // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
								})
								.then((response) => {
									console.log("授权成功", response.code);
									if (response.errMsg === "login:ok") {
										uni.request({
												url: "https://api.weixin.qq.com/sns/jscode2session",
												              data:{
												                appid: "wx67228a6e0242bd8d",
												                secret: "bfb77f34225eec17352e8cb3b78ae563",
												                js_code:response.code,
												                grant_type:"authorization_code",
												              },
											})
											.then((res) => {
												console.log("获取openid", res);
												uni.setStorageSync("openid", res
													.data.openid); // 存储用户信息
												resolve(res); // 返回的信息
											})
											.catch((reject) => {
												console.log("获取openid失败", reject);
											});

									} else {
										uni.showToast({
											title: "授权失败",
											icon: "error",
										});
									}
								})
								.catch((reject) => {
									console.log("拒绝授权", reject);
								});
						} else if (showres.cancel) {
							console.log("用户点击取消");
						}
					},
				});
			},
		});
	});
};