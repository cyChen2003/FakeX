(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/component/form/form"],{"0cc2":function(e,n,t){"use strict";(function(e){var c=t("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=c(t("b143")),a={data:function(){return{}},methods:{formSubmit:function(n){console.log("form发生了submit事件，携带数据为："+JSON.stringify(n.detail.value));var t=n.detail.value,c=o.default.check(t,[{name:"nickname",checkType:"string",checkRule:"1,3",errorMsg:"姓名应为1-3个字符"},{name:"gender",checkType:"in",checkRule:"男,女",errorMsg:"请选择性别"},{name:"loves",checkType:"notnull",checkRule:"",errorMsg:"请选择爱好"}]);c?e.showToast({title:"验证通过!",icon:"none"}):e.showToast({title:o.default.error,icon:"none"})},formReset:function(e){console.log("清空数据")}}};n.default=a}).call(this,t("543d")["default"])},"0ccd":function(e,n,t){"use strict";t.r(n);var c=t("ba3c"),o=t("d828");for(var a in o)["default"].indexOf(a)<0&&function(e){t.d(n,e,(function(){return o[e]}))}(a);t("1f7f");var r=t("f0c5"),u=Object(r["a"])(o["default"],c["b"],c["c"],!1,null,null,null,!1,c["a"],void 0);n["default"]=u.exports},"1be9":function(e,n,t){"use strict";(function(e,n){var c=t("4ea4");t("e19b"),t("4a2a"),t("5c17");c(t("66fd"));var o=c(t("0ccd"));e.__webpack_require_UNI_MP_PLUGIN__=t,n(o.default)}).call(this,t("bc2e")["default"],t("543d")["createPage"])},"1f7f":function(e,n,t){"use strict";var c=t("b856"),o=t.n(c);o.a},b856:function(e,n,t){},ba3c:function(e,n,t){"use strict";t.d(n,"b",(function(){return o})),t.d(n,"c",(function(){return a})),t.d(n,"a",(function(){return c}));var c={pageHead:function(){return t.e("components/page-head/page-head").then(t.bind(null,"7df6"))}},o=function(){var e=this.$createElement;this._self._c},a=[]},d828:function(e,n,t){"use strict";t.r(n);var c=t("0cc2"),o=t.n(c);for(var a in c)["default"].indexOf(a)<0&&function(e){t.d(n,e,(function(){return c[e]}))}(a);n["default"]=o.a}},[["1be9","common/runtime","common/vendor"]]]);