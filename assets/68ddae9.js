(window.webpackJsonp=window.webpackJsonp||[]).push([[31,7,8],{656:function(t,e,r){"use strict";r.d(e,"a",(function(){return l})),r.d(e,"b",(function(){return c})),r.d(e,"c",(function(){return d})),r.d(e,"d",(function(){return v}));var n=r(657),o=r(0),l=Object(o.i)("v-card__actions"),c=Object(o.i)("v-card__subtitle"),d=Object(o.i)("v-card__text"),v=Object(o.i)("v-card__title");n.a},657:function(t,e,r){"use strict";r(11),r(8),r(9),r(14),r(10),r(15);var n=r(3),o=(r(22),r(175),r(658),r(223)),l=r(222),c=r(68),d=r(5);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(d.a)(l.a,c.a,o.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return h(h({"v-card":!0},c.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},o.a.options.computed.classes.call(this))},styles:function(){var style=h({},o.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var t=l.a.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),r=e.tag,data=e.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),t(r,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},658:function(t,e,r){var content=r(659);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(17).default)("e23b7040",content,!0,{sourceMap:!1})},659:function(t,e,r){var n=r(16)(!1);n.push([t.i,'.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card>.v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card>.v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.v-sheet.v-card{border-radius:4px}.v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-sheet.v-card.v-sheet--shaped{border-radius:24px 4px}.v-card{border-width:thin;display:block;max-width:100%;outline:none;text-decoration:none;transition-property:box-shadow,opacity;word-wrap:break-word;position:relative;white-space:normal}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip):not(.v-avatar),.v-card>:first-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.0071428571em}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-sheet.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-sheet.v-card--hover:focus,.v-sheet.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}',""]),t.exports=n},661:function(t,e,r){"use strict";r(8),r(9),r(14),r(15);var n=r(3),o=(r(22),r(11),r(34),r(76),r(439),r(23),r(35),r(440),r(441),r(442),r(443),r(444),r(445),r(446),r(447),r(448),r(449),r(450),r(451),r(452),r(40),r(39),r(10),r(77),r(438),r(2)),l=r(47),c=r(0);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h=["sm","md","lg","xl"],f=h.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),m=h.reduce((function(t,e){return t["offset"+Object(c.F)(e)]={type:[String,Number],default:null},t}),{}),_=h.reduce((function(t,e){return t["order"+Object(c.F)(e)]={type:[String,Number],default:null},t}),{}),x={col:Object.keys(f),offset:Object.keys(m),order:Object.keys(_)};function y(t,e,r){var n=t;if(null!=r&&!1!==r){if(e){var o=e.replace(t,"");n+="-".concat(o)}return"col"!==t||""!==r&&!0!==r?(n+="-".concat(r)).toLowerCase():n.toLowerCase()}}var w=new Map;e.a=o.a.extend({name:"v-col",functional:!0,props:v(v(v(v({cols:{type:[Boolean,String,Number],default:!1}},f),{},{offset:{type:[String,Number],default:null}},m),{},{order:{type:[String,Number],default:null}},_),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var r=e.props,data=e.data,o=e.children,c=(e.parent,"");for(var d in r)c+=String(r[d]);var v=w.get(c);return v||function(){var t,e;for(e in v=[],x)x[e].forEach((function(t){var n=r[t],o=y(e,t,n);o&&v.push(o)}));var o=v.some((function(t){return t.startsWith("col-")}));v.push((t={col:!o||!r.cols},Object(n.a)(t,"col-".concat(r.cols),r.cols),Object(n.a)(t,"offset-".concat(r.offset),r.offset),Object(n.a)(t,"order-".concat(r.order),r.order),Object(n.a)(t,"align-self-".concat(r.alignSelf),r.alignSelf),t)),w.set(c,v)}(),t(r.tag,Object(l.a)(data,{class:v}),o)}})},676:function(t,e,r){"use strict";r.r(e);var n={props:["headers","repayments","loading","search","dense","dark","amount","ttInterest","ttBalance"]},o=r(75),l=r(86),c=r.n(l),d=r(759),v=r(662),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-data-table",{staticClass:"elevation-0",attrs:{headers:t.headers,items:t.repayments,"items-per-page":15,search:t.search,dense:t.dense,dark:t.dark,"multi-sort":"",loading:t.loading,"loading-text":"Loading... Please wait"},scopedSlots:t._u([{key:"top",fn:function(){return[r("v-row",{attrs:{"no-gutters":""}},[r("h3",{staticClass:"font-weight-black"},[t._v("Repayment schedule")])])]},proxy:!0},t.$vuetify.breakpoint.smAndUp?{key:"body.append",fn:function(){return[r("tr",{staticClass:"table_footer"},[r("td",[t._v("Total#")]),t._v(" "),r("td"),t._v(" "),r("td",[r("p",{staticClass:"font-weight-black"},[t._v(t._s(t.amount))])]),t._v(" "),r("td"),t._v(" "),r("td",[r("p",{staticClass:"font-weight-black"},[t._v(t._s(t.ttInterest))])]),t._v(" "),r("td"),t._v(" "),r("td",[r("p",{staticClass:"font-weight-black"},[t._v(t._s(t.ttBalance))])])])]},proxy:!0}:null],null,!0)})}),[],!1,null,null,null);e.default=component.exports;c()(component,{VDataTable:d.a,VRow:v.a})},703:function(t,e,r){"use strict";r.r(e);var n={props:{title:String,subtitle:String},data:function(){return{}}},o=r(75),l=r(86),c=r.n(l),d=r(661),v=r(170),h=r(206),f=r(138),m=r(62),_=r(124),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-col",{attrs:{cols:"12",sm:"4"}},[r("v-list",{attrs:{dense:""}},[r("v-list-item",{staticClass:"ma-0"},[r("v-list-item-icon",[r("v-icon",[t._v("mdi-square-medium")])],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",[t._v(t._s(t.title))]),t._v(" "),r("v-list-item-subtitle",{staticClass:"font-weight-light"},[t._v(t._s(t.subtitle))])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VCol:d.a,VIcon:v.a,VList:h.a,VListItem:f.a,VListItemContent:m.a,VListItemIcon:_.a,VListItemSubtitle:m.b,VListItemTitle:m.c})},778:function(t,e,r){"use strict";r.r(e);r(34),r(70);var n=r(703),o=r(676),l={components:{ListItem:n.default,DatatableComponent:o.default},data:function(){return{data:!0,table:!1,repayments:[],loading:!1,search:"",valid:!0,title:"Home",dense:!0,dark:!1,advanced:!1,method:{},ttInterest:"",ttBalance:"",amount:null,datarequired:!0,headers:[{text:"Day",align:"left",sortable:!1,value:"days"},{text:"Paid Date",value:"paiddate"},{text:"Principal",value:"loanamount"},{text:"Principal due",value:"principaldue"},{text:"Interest",value:"interest",filterable:!1},{text:"Interrest",value:"interrest",filterable:!1},{text:"Loan Balance",value:"loanbalance"},{text:"Total",value:"total",filterable:!1}]}},created:function(){},methods:{calculateRepaymentSchedule:function(){var t=this;this.data=!1,this.table=!0;var data=this.schedule;this.datarequired=!1,this.amount=data.amount,this.loading=!0,this.$nextTick((function(){var e=[],r=(t.getMethodById(data.interest_method),data.interest_rate/100),n=parseInt(data.amount)*r*parseInt(data.loan_term);t.ttInterest=n,t.ttBalance=parseInt(data.amount)+parseInt(n);for(var o=parseInt(data.amount)+parseInt(n),i=0;i<data.number_of_repayments;i++){var l=new Object;l.days=1+i,l.paiddate=t.getNextWeekDay((i+1)*parseInt(t.getTermsValue(data.repaid_every_unit))*parseInt(data.repaid_every)).toLocaleString().split(" ")[0],l.principaldue=data.amount/data.number_of_repayments,l.loanamount=data.amount,l.interest=n/data.number_of_repayments,l.total=l.principaldue+l.interest,o-=l.principaldue+l.interest,l.loanbalance=o,e.push(l)}t.repayments=e})),this.loading=!1},getNextWeekDay:function(i){var t=new Date(Date.now());return new Date(t.getTime()+1*parseInt(i)*24*60*60*1e3)},getTermsValue:function(t){switch(t){case"D":return 1;case"W":return 7;case"M":return 30;case"Y":return 366}},getMethodById:function(t){switch(t){case"FLAT":return 1;case"STRAIGHT":return 2;case"REDUCING_BALANCE":return 3}}},computed:{schedule:function(){return this.$store.getters.getterschedule(parseInt(this.$nuxt._route.params.id))[0]}}},c=r(75),d=r(86),v=r.n(d),h=r(644),f=r(226),m=r(657),_=r(656),x=r(645),y=r(170),w=r(662),O=r(654),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{staticClass:"app"},[r("v-container",{attrs:{fluid:""}},[r("v-card",{attrs:{flat:"",outlined:""}},[r("v-card-title",[r("span",[t._v(t._s(t.schedule.name))]),t._v(" "),r("v-spacer"),t._v(" "),t.data?r("v-icon",{attrs:{color:"info lighten-1"},on:{click:function(e){t.data=!t.data}}},[t._v("mdi-chevron-up-box")]):t._e(),t._v(" "),t.data?t._e():r("v-icon",{attrs:{color:"info lighten-1"},on:{click:function(e){t.data=!t.data}}},[t._v("mdi-chevron-down-box")])],1),t._v(" "),r("v-card-subtitle",{staticClass:"title font-weight-light"},[t._v("Selected Repayment Schedule "+t._s(t.schedule.name))]),t._v(" "),t.data?r("v-row",[r("list-item",{attrs:{title:"Name",subtitle:t.schedule.name+" { ID:"+[t.schedule.id]+" }"}}),t._v(" "),r("list-item",{attrs:{title:"Amount",subtitle:t.schedule.amount}}),t._v(" "),r("list-item",{attrs:{title:"Interest Rate",subtitle:t.schedule.interest_rate}}),t._v(" "),r("list-item",{attrs:{title:"Interest Method",subtitle:t.schedule.interest_method}}),t._v(" "),r("list-item",{attrs:{title:"Loan term",subtitle:t.schedule.loan_term+t.schedule.loan_term_unit}}),t._v(" "),r("list-item",{attrs:{title:"Repaid Every",subtitle:t.schedule.repaid_every+t.schedule.repaid_every_unit}}),t._v(" "),r("list-item",{attrs:{title:"Number of Repayments",subtitle:t.schedule.number_of_repayments}}),t._v(" "),r("list-item",{attrs:{title:"Amortization",subtitle:t.schedule.amortization}}),t._v(" "),r("list-item",{attrs:{title:"Interest Moratorium",subtitle:t.schedule.interest_moratorium}}),t._v(" "),r("list-item",{attrs:{title:"Principal Moratorium",subtitle:t.schedule.principal_moratorium}}),t._v(" "),r("list-item",{attrs:{title:"Interest Free period",subtitle:t.schedule.interest_free_period}})],1):t._e(),t._v(" "),t.table?r("v-container",{attrs:{fluid:""}},[r("datatable-component",{staticClass:"elevation-0 font-weight-light",attrs:{headers:t.headers,repayments:t.repayments,"items-per-page":5,search:t.search,dense:t.dense,dark:t.dark,ttInterest:t.ttInterest,ttBalance:t.ttBalance,amount:t.amount,"multi-sort":"",loading:t.loading,"loading-text":"Loading... Please wait"}})],1):t._e(),t._v(" "),r("v-card-actions",[t.table?t._e():r("v-btn",{staticClass:"info lighten-1 font-weight-light",staticStyle:{"text-transform":"capitalize"},attrs:{depressed:""},on:{click:t.calculateRepaymentSchedule}},[t._v("Calculate")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{VApp:h.a,VBtn:f.a,VCard:m.a,VCardActions:_.a,VCardSubtitle:_.b,VCardTitle:_.d,VContainer:x.a,VIcon:y.a,VRow:w.a,VSpacer:O.a})}}]);