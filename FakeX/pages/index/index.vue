<template>
	<view>
		<u-action-sheet :actions="list" :title="title" :show="show"></u-action-sheet>
		<u-button @click="show = true">打开ActionSheet</u-button>
	</view>
</template>

<script>
export default {
	data() {
		return {
			title:'标题',
			list: [
				{
					name:'选项一',
					subname:"选项一描述",
					color:'#ffaa7f',
					fontSize:'20'
				},
				{
					name: '选项二禁用',
					disabled:true
				},
				{
					name: '开启load加载', //开启后文字不显示
					loading:true
				}
			],
			show: false
		};
	}
};
</script>

