<template>
    <view v-if="ifAuthorize" style="background: rgba(0,0,0,0.3);position: fixed;top: 0;width: 100%;height: 100%;">
        <view style="width: 320px;margin: auto;margin-top: 30px;background: #fff;border-radius: 10px;">
            <view class="header">
                需要您的授权
            </view>
            <view style="text-align: center;">
                <view style="text-align: center;padding-top: 17px;">
                    <view>为了提供更好的服务</view>
                    <view>请允许获取您的用户信息</view>
                    <view>如暂不需要，可点击取消或拒绝</view>
                </view>
                <view style="text-align: center;">
                    <image src="../static/image/shouquan.png" mode="widthFix" style="width: 230px;"></image>
                </view>
                <view style="padding-bottom: 5px;">
                    <button type="default" class="btn" @click="authorize()">授权</button>
                    <button type="default" class="btn" @click="cancel()">取消</button>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
    export default {
        name:"authorize",
        data() {
            return {
                ifAuthorize:true
            };
        },
        methods:{
            cancel() {
                this.ifAuthorize = false
            },
            authorize() {
                this.$setUserInfo().then(res => {
                    this.ifAuthorize = false
                });
            }
        }
    }
</script>

<style lang="scss">
    .header {
        padding: 8px 0;
        line-height: 33px;
        border-bottom: 0.5px solid #eee;
        text-align: center;
    }
    .btn {
        background-color: #04be01 !important;
        color: #fff !important;
        border-radius: 44px;
        width: 275px;
        margin-bottom: 20px;
    }
</style>