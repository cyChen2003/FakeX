<style lang="scss">
	/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
	@import "@/uni_modules/uview-ui/index.scss";
</style>
<script>
	export default {
		globalData: {
			appid: "wx67228a6e0242bd8d",
			secret:"bfb77f34225eec17352e8cb3b78ae563",
		},
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show');
			console.log(uni.$u.config.v);
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

