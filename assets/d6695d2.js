(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{649:function(t,e,n){"use strict";n(10),n(11),n(16),n(17);var r=n(3),o=(n(22),n(13),n(82),n(37),n(435),n(436),n(437),n(438),n(439),n(440),n(441),n(442),n(443),n(444),n(445),n(446),n(447),n(448),n(24),n(36),n(41),n(40),n(12),n(76),n(434),n(2)),c=n(48),l=n(1);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=["sm","md","lg","xl"],y=v.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),O=v.reduce((function(t,e){return t["offset"+Object(l.F)(e)]={type:[String,Number],default:null},t}),{}),h=v.reduce((function(t,e){return t["order"+Object(l.F)(e)]={type:[String,Number],default:null},t}),{}),j={col:Object.keys(y),offset:Object.keys(O),order:Object.keys(h)};function m(t,e,n){var r=t;if(null!=n&&!1!==n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return"col"!==t||""!==n&&!0!==n?(r+="-".concat(n)).toLowerCase():r.toLowerCase()}}var w=new Map;e.a=o.e.extend({name:"v-col",functional:!0,props:d(d(d(d({cols:{type:[Boolean,String,Number],default:!1}},y),{},{offset:{type:[String,Number],default:null}},O),{},{order:{type:[String,Number],default:null}},h),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,data=e.data,o=e.children,l=(e.parent,"");for(var f in n)l+=String(n[f]);var d=w.get(l);return d||function(){var t,e;for(e in d=[],j)j[e].forEach((function(t){var r=n[t],o=m(e,t,r);o&&d.push(o)}));var o=d.some((function(t){return t.startsWith("col-")}));d.push((t={col:!o||!n.cols},Object(r.a)(t,"col-".concat(n.cols),n.cols),Object(r.a)(t,"offset-".concat(n.offset),n.offset),Object(r.a)(t,"order-".concat(n.order),n.order),Object(r.a)(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),w.set(l,d)}(),t(n.tag,Object(c.a)(data,{class:d}),o)}})},650:function(t,e,n){"use strict";n(10),n(11),n(16),n(17);var r=n(3),o=(n(40),n(62),n(29),n(13),n(82),n(37),n(435),n(436),n(437),n(438),n(439),n(440),n(441),n(442),n(443),n(444),n(445),n(446),n(447),n(448),n(24),n(36),n(41),n(12),n(434),n(2)),c=n(48),l=n(1);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=["sm","md","lg","xl"],y=["start","end","center"];function O(t,e){return v.reduce((function(n,r){return n[t+Object(l.F)(r)]=e(),n}),{})}var h=function(t){return[].concat(y,["baseline","stretch"]).includes(t)},j=O("align",(function(){return{type:String,default:null,validator:h}})),m=function(t){return[].concat(y,["space-between","space-around"]).includes(t)},w=O("justify",(function(){return{type:String,default:null,validator:m}})),S=function(t){return[].concat(y,["space-between","space-around","stretch"]).includes(t)},_=O("alignContent",(function(){return{type:String,default:null,validator:S}})),C={align:Object.keys(j),justify:Object.keys(w),alignContent:Object.keys(_)},P={align:"align",justify:"justify",alignContent:"align-content"};function k(t,e,n){var r=P[t];if(null!=n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return(r+="-".concat(n)).toLowerCase()}}var x=new Map;e.a=o.e.extend({name:"v-row",functional:!0,props:d(d(d({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:h}},j),{},{justify:{type:String,default:null,validator:m}},w),{},{alignContent:{type:String,default:null,validator:S}},_),render:function(t,e){var n=e.props,data=e.data,o=e.children,l="";for(var f in n)l+=String(n[f]);var d=x.get(l);return d||function(){var t,e;for(e in d=[],C)C[e].forEach((function(t){var r=n[t],o=k(e,t,r);o&&d.push(o)}));d.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(r.a)(t,"align-".concat(n.align),n.align),Object(r.a)(t,"justify-".concat(n.justify),n.justify),Object(r.a)(t,"align-content-".concat(n.alignContent),n.alignContent),t)),x.set(l,d)}(),t(n.tag,Object(c.a)(data,{staticClass:"row",class:d}),o)}})},684:function(t,e,n){var content=n(733);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("38611d21",content,!0,{sourceMap:!1})},732:function(t,e,n){"use strict";n(684)},733:function(t,e,n){var r=n(18)(!1);r.push([t.i,'.home_tool[data-v-2e46db60],.my-2[data-v-2e46db60]{font-size:1em}.home_tool[data-v-2e46db60],.home_tool_lg[data-v-2e46db60],.my-2[data-v-2e46db60]{font-weight:700;color:#fff;text-align:center;font-family:"Inconsolata",Consolas,monospace}.home_tool_lg[data-v-2e46db60]{font-size:3em}',""]),t.exports=r},769:function(t,e,n){"use strict";n.r(e);var r={meta:{auth:{requiresAuth:!1}},layout:function(t){return"home"},data:function(){return{locale:"",selectedLocale:null,select:{locale:"English",lang:"en"},label:"Sign In",locales:[{locale:"English",lang:"en"},{locale:"Swahili",lang:"sw"},{locale:"French",lang:"fr"},{locale:"Arabic",lang:"ar"}]}},computed:{},methods:{changeLanguage:function(t){this.$i18n.locale=t},changeLabel:function(){this.label="Go Home"},routingAction:function(){null!==localStorage.getItem("qAccessToken")?this.$router.push("/home"):this.$router.push("/signin")}},beforeMount:function(){null!=localStorage.getItem("qAccessToken")&&this.changeLabel()}},o=(n(732),n(75)),c=n(87),l=n.n(c),f=n(222),d=n(649),v=n(633),y=n(650),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[n("v-row",{attrs:{justify:"center",align:"center","align-content":"center"}},[n("v-col",{attrs:{cols:"12"}},[n("div",{staticClass:"typewriter"},[n("div",{staticClass:"home_tool_lg"},[t._v("\n          "+t._s(t.$t("label.tooltip.tooltiphello"))+" \t😉\n          "+t._s(t.$t("label.tooltip.tooltipwelcometo"))+" "+t._s(t.$t("appName"))+" !!!\n        ")])])]),t._v(" "),n("v-col",{staticClass:"my-2 mt-12 pa-1",attrs:{cols:"12",sm:"12"}},[n("v-row",{attrs:{justify:"center",align:"center"}},[n("v-col",{attrs:{cols:"12",md:"4",sm12:""}},[n("v-btn",{staticClass:"font-weight-bold",attrs:{color:"white",large:"",depressed:"",outlined:"",to:"/calculator",router:"",exact:""}},[t._v(t._s(t.$t("label.button.btncalculator")))])],1),t._v(" "),n("v-col",{attrs:{cols:"12",md:"4",sm12:""}}),t._v(" "),n("v-col",{attrs:{cols:"12",md:"4",sm12:""}},[n("v-btn",{staticClass:"font-weight-bold",attrs:{color:"success",large:"",depressed:"",dark:""},on:{click:t.routingAction}},[t._v(t._s(t.label))])],1)],1)],1)],1)],1)}),[],!1,null,"2e46db60",null);e.default=component.exports;l()(component,{VBtn:f.a,VCol:d.a,VContainer:v.a,VRow:y.a})}}]);