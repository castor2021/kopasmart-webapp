(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{756:function(t,e,n){"use strict";n.r(e);var r=n(18),c=(n(47),{components:{"card-info":n(261).default},data:function(){return{userdata:{}}},methods:{viewusedata:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$api.$get("users/".concat(t.$route.params.id,"/")).then((function(e){t.userdata=e})).catch((function(t){console.log(t)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()}},created:function(){this.viewusedata()}}),o=n(24),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("card-info",{attrs:{userdata:t.userdata}})}),[],!1,null,"6720c85b",null);e.default=component.exports}}]);