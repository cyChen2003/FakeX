(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/template/scheme/scheme"],{"31e7":function(e,n,t){"use strict";(function(e,n){var a=t("4ea4");t("e19b"),t("4a2a"),t("5c17");a(t("66fd"));var i=a(t("6181"));e.__webpack_require_UNI_MP_PLUGIN__=t,n(i.default)}).call(this,t("bc2e")["default"],t("543d")["createPage"])},3480:function(e,n,t){"use strict";t.r(n);var a=t("6fe8"),i=t.n(a);for(var o in a)["default"].indexOf(o)<0&&function(e){t.d(n,e,(function(){return a[e]}))}(o);n["default"]=i.a},6181:function(e,n,t){"use strict";t.r(n);var a=t("f1ad"),i=t("3480");for(var o in i)["default"].indexOf(o)<0&&function(e){t.d(n,e,(function(){return i[e]}))}(o);t("9d44");var u=t("f0c5"),l=Object(u["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],void 0);n["default"]=l.exports},"6fe8":function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t={data:function(){return{}},methods:{openBrowser:function(e){plus.runtime.openURL(e)},openMarket:function(e){var n;n="Android"==plus.os.name?"market://details?id=io.dcloud.hellouniapp":"itms-apps://itunes.apple.com/cn/app/hello-uni-app/id1417078253","undefined"==typeof e?plus.runtime.openURL(n,(function(e){console.log(e)})):"Android"==plus.os.name?plus.runtime.openURL(n,(function(e){plus.nativeUI.alert("本机没有安装应用宝")}),e):plus.nativeUI.alert("仅Android手机才支持应用宝")},openTaobao:function(n){plus.runtime.openURL(n,(function(n){e.showModal({content:"本机未检测到淘宝客户端，是否打开浏览器访问淘宝？",success:function(e){e.confirm&&plus.runtime.openURL("https://s.taobao.com/search?q=uni-app")}})}))},openMap:function(){var e="";if("Android"==plus.os.name){var n=plus.runtime.isApplicationExist({pname:"com.baidu.BaiduMap",action:"baidumap://"}),t=plus.runtime.isApplicationExist({pname:"com.autonavi.minimap",action:"androidamap://"}),a="baidumap://map/marker?location=39.968789,116.347247&title=DCloud&src=Hello%20uni-app",i="androidamap://viewMap?sourceApplication=Hello%20uni-app&poiname=DCloud&lat=39.9631018208&lon=116.3406135236&dev=0";t&&n?plus.nativeUI.actionSheet({title:"选择地图应用",cancel:"取消",buttons:[{title:"百度地图"},{title:"高德地图"}]},(function(e){switch(e.index){case 1:plus.runtime.openURL(a);break;case 2:plus.runtime.openURL(i);break}})):t?plus.runtime.openURL(i):n?plus.runtime.openURL(a):(e="geo:39.96310,116.340698?q=%e6%95%b0%e5%ad%97%e5%a4%a9%e5%a0%82",plus.runtime.openURL(e))}else plus.nativeUI.actionSheet({title:"选择地图应用",cancel:"取消",buttons:[{title:"Apple地图"},{title:"百度地图"},{title:"高德地图"}]},(function(n){switch(console.log("e.index: "+n.index),n.index){case 1:e="http://maps.apple.com/?q=%e6%95%b0%e5%ad%97%e5%a4%a9%e5%a0%82&ll=39.96310,116.340698&spn=0.008766,0.019441";break;case 2:e="baidumap://map/marker?location=39.968789,116.347247&title=DCloud&src=Hello%20uni-app";break;case 3:e="iosamap://viewMap?sourceApplication=Hello%20uni-app&poiname=DCloud&lat=39.9631018208&lon=116.3406135236&dev=0";break;default:break}""!=e&&plus.runtime.openURL(e,(function(e){plus.nativeUI.alert("本机未安装指定的地图应用")}))}))},openQQ:function(e){plus.runtime.openURL("mqqwpa://im/chat?chat_type="+e.detail.value.qqNumType+"&uin="+e.detail.value.qqNum,(function(e){plus.nativeUI.alert("本机没有安装QQ，无法启动")}))}}};n.default=t}).call(this,t("543d")["default"])},"98d4":function(e,n,t){},"9d44":function(e,n,t){"use strict";var a=t("98d4"),i=t.n(a);i.a},f1ad:function(e,n,t){"use strict";t.d(n,"b",(function(){return i})),t.d(n,"c",(function(){return o})),t.d(n,"a",(function(){return a}));var a={pageHead:function(){return t.e("components/page-head/page-head").then(t.bind(null,"7df6"))}},i=function(){var e=this.$createElement;this._self._c},o=[]}},[["31e7","common/runtime","common/vendor"]]]);