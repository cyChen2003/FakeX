(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/template/component-communication/reciver"],{3232:function(e,t,n){"use strict";var c=n("e9f5"),u=n.n(c);u.a},"7ea3":function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){}));var c=function(){var e=this.$createElement;this._self._c},u=[]},"8bce":function(e,t,n){"use strict";n.r(t);var c=n("e132"),u=n.n(c);for(var i in c)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return c[e]}))}(i);t["default"]=u.a},9563:function(e,t,n){"use strict";n.r(t);var c=n("7ea3"),u=n("8bce");for(var i in u)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return u[e]}))}(i);n("3232");var r=n("f0c5"),f=Object(r["a"])(u["default"],c["b"],c["c"],!1,null,null,null,!1,c["a"],void 0);t["default"]=f.exports},e132:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{msg:""}},created:function(){e.$on("cc",this.recive)},beforeDestroy:function(){e.$off("cc",this.recive)},methods:{recive:function(e){this.msg=e.msg}}};t.default=n}).call(this,n("543d")["default"])},e9f5:function(e,t,n){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/template/component-communication/reciver-create-component',
    {
        'pages/template/component-communication/reciver-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("9563"))
        })
    },
    [['pages/template/component-communication/reciver-create-component']]
]);
