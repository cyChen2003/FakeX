(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/API/upload-file/upload-file"],{"072a":function(e,n,t){"use strict";(function(e,n){var a=t("4ea4");t("e19b"),t("4a2a"),t("5c17");a(t("66fd"));var o=a(t("a24f"));e.__webpack_require_UNI_MP_PLUGIN__=t,n(o.default)}).call(this,t("bc2e")["default"],t("543d")["createPage"])},"4f75":function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t={data:function(){return{title:"uploadFile",imageSrc:""}},onUnload:function(){this.imageSrc=""},methods:{chooseImage:function(){var n=this;e.chooseImage({count:1,sizeType:["compressed"],sourceType:["album"],success:function(t){console.log("chooseImage success, temp path is",t.tempFilePaths[0]);var a=t.tempFilePaths[0];e.uploadFile({url:"https://unidemo.dcloud.net.cn/upload",filePath:a,fileType:"image",name:"data",success:function(t){console.log("uploadImage success, res is:",t),e.showToast({title:"上传成功",icon:"success",duration:1e3}),n.imageSrc=a},fail:function(n){console.log("uploadImage fail",n),e.showModal({content:n.errMsg,showCancel:!1})}})},fail:function(n){console.log("chooseImage fail",n),e.getSetting({success:function(n){var t=n.authSetting["scope.album"];t||e.showModal({title:"授权失败",content:"Hello uni-app需要从您的相册获取图片，请在设置界面打开相关权限",success:function(n){n.confirm&&e.openSetting()}})}})}})}}};n.default=t}).call(this,t("543d")["default"])},a24f:function(e,n,t){"use strict";t.r(n);var a=t("c673"),o=t("a4bb");for(var c in o)["default"].indexOf(c)<0&&function(e){t.d(n,e,(function(){return o[e]}))}(c);t("f141");var u=t("f0c5"),i=Object(u["a"])(o["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],void 0);n["default"]=i.exports},a4bb:function(e,n,t){"use strict";t.r(n);var a=t("4f75"),o=t.n(a);for(var c in a)["default"].indexOf(c)<0&&function(e){t.d(n,e,(function(){return a[e]}))}(c);n["default"]=o.a},c673:function(e,n,t){"use strict";t.d(n,"b",(function(){return o})),t.d(n,"c",(function(){return c})),t.d(n,"a",(function(){return a}));var a={pageHead:function(){return t.e("components/page-head/page-head").then(t.bind(null,"7df6"))}},o=function(){var e=this.$createElement;this._self._c},c=[]},f141:function(e,n,t){"use strict";var a=t("fd15"),o=t.n(a);o.a},fd15:function(e,n,t){}},[["072a","common/runtime","common/vendor"]]]);