(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{660:function(t,e,n){var content=n(666);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("6e14c612",content,!0,{sourceMap:!1})},663:function(t,e,n){"use strict";var o,r,c=n(12);n(41);e.a={data:function(){return{}},computed:{},methods:{like_this_post:(r=Object(c.a)(regeneratorRuntime.mark((function t(e,n){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.$store.dispatch(e,{id:parseInt(n)});case 1:case"end":return t.stop()}}),t,this)}))),function(t,e){return r.apply(this,arguments)}),unlike_this_post:(o=Object(c.a)(regeneratorRuntime.mark((function t(e,n){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.$store.dispatch(e,{id:parseInt(n)});case 1:case"end":return t.stop()}}),t,this)}))),function(t,e){return o.apply(this,arguments)})}}},665:function(t,e,n){"use strict";n(660)},666:function(t,e,n){var o=n(16)(!1);o.push([t.i,".trancate{white-space:nowrap;width:100%;overflow:hidden;text-overflow:ellipsis}",""]),t.exports=o},667:function(t,e,n){"use strict";n.r(e);var o={mixins:[n(663).a],props:{post:Object,postimage:Array},data:function(){return{view:!1}},created:function(){this.$store.dispatch("getImages")},methods:{likePost:function(t){console.log(t.is_liked_by_me),t.is_liked_by_me?this.unlike_this_post("unlikeBlogPosts",t.id):this.like_this_post("likeBlogPosts",t.id)},text_truncate:function(t,e,n){return null==e&&(e=100),null==n&&(n=""),t.length>e?t.substring(0,e-n.length)+n:t}},beforeMount:function(){},computed:{postsImage:function(){return console.log("hamisa"),console.log(this.$store.getters.postimages),this.$store.getters.postimages}}},r=(n(665),n(75)),c=n(86),l=n.n(c),m=n(208),v=n(226),d=n(657),_=n(656),f=n(170),h=n(172),w=n(206),x=n(138),C=n(207),k=n(62),V=n(662),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"mx-auto",attrs:{flat:"",elevation:"1"}},[null!=t.post.medias[0].src?n("v-img",{staticClass:"white--text align-end",attrs:{height:"200px",src:t.post.medias[0].src}}):t._e(),t._v(" "),n("v-card-subtitle",{staticClass:"ma-0 pa-0"},[n("NuxtLink",{directives:[{name:"show",rawName:"v-show",value:"comment"===t.post.type,expression:"post.type === 'comment'"}],attrs:{to:"/post/"+t.post.id}},[n("v-list",{staticClass:"ma-0 pa-0",attrs:{dense:""}},[n("v-list-item",{staticClass:"ml-1 pa-0",attrs:{dense:""}},[n("v-list-item-content",{staticClass:"ma-0 pa-0"},[n("v-list-item-title",{attrs:{"ma-0":"","pa-0":""}},[n("v-btn",{staticClass:"mb-1 ps-0",attrs:{"x-small":"",rounded:"",depressed:"",color:"primary"}},[n("v-avatar",{attrs:{size:"20px"}},[null!=t.post.medias[0].src?n("img",{attrs:{src:t.post.medias[0].src,alt:"post.owner.username"}}):t._e()]),t._v("\n                 \n                "+t._s(t.post.owner.first_name)+" "+t._s(t.post.owner.last_name)+"\n                replied\n              ")],1),t._v(" \n              "),n("span",{staticClass:"font-weight-light text-caption",attrs:{caption:""}},[t._v("\n                "+t._s(t._f("DateFormat")(t.post.created_at))+"\n              ")])],1)],1)],1)],1)],1)],1),t._v(" "),n("v-card-text",{staticClass:"text--primary ma-0 mt-2 py-0"},[t._v("\n    "+t._s(t.text_truncate(t.post.text_content,null,null))+"\n    "),n("NuxtLink",{attrs:{to:"/post/"+t.post.id}},[n("span",{staticClass:"info--text"},[t._v("...")])])],1),t._v(" "),n("v-card-actions",[n("v-list-item",{attrs:{dense:""}},[n("NuxtLink",{attrs:{to:"/profile/"+t.post.owner.id}},[n("v-list-item-avatar",{directives:[{name:"show",rawName:"v-show",value:"post"===t.post.type,expression:"post.type === 'post'"}],attrs:{color:"grey"}},[n("img",{attrs:{src:t.post.medias[0].src,alt:"post.owner.username"}})])],1),t._v(" "),n("v-list-item-content",{directives:[{name:"show",rawName:"v-show",value:"post"===t.post.type,expression:"post.type === 'post'"}]},[n("v-list-item-title",{staticClass:"subhead text-caption"},[""==t.post.owner.first_name&&""==t.post.owner.last_name?n("span",[t._v("  \n          "+t._s(t.post.owner.username)+" ")]):n("span",[t._v("\n              "+t._s(t.post.owner.first_name)+"\n          "+t._s(t.post.owner.last_name)+"\n          ")])]),t._v(" "),n("v-list-item-subtitle",{staticClass:"font-weight-medium text-caption"},[t._v(t._s(t._f("DateFormat")(t.post.created_at)))])],1),t._v(" "),n("v-row",{attrs:{"no-gutters":""}},[n("v-row",{attrs:{align:"center",justify:"end"}},[n("v-btn",{attrs:{text:"","x-small":""},on:{click:function(e){return e.stopPropagation(),t.likePost(t.post)}}},[t.post.is_liked_by_me?n("v-icon",{staticClass:"mr-0 text-caption",attrs:{color:"success"}},[t._v("mdi-heart")]):n("v-icon",{staticClass:"mr-0 text-caption"},[t._v("mdi-heart-outline")]),t._v(" "),n("span",{staticClass:"font-weight-light text-caption"},[t._v("\n              "+t._s(t.post.likes_count)+"\n            ")])],1),t._v(" "),n("span",{staticClass:"mr-1"},[t._v("·")]),t._v(" "),n("v-btn",{attrs:{text:"","x-small":"",to:"/post/"+t.post.id},on:{click:function(e){return e.stopPropagation(),t.commentPost(t.post.id)}}},[n("v-icon",{staticClass:"text-caption"},[t._v("mdi-comment")]),t._v(" "),n("span",{staticClass:"font-weight-light text-caption"},[t._v("\n              "+t._s(t.post.comments_count)+"\n            ")])],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VAvatar:m.a,VBtn:v.a,VCard:d.a,VCardActions:_.a,VCardSubtitle:_.b,VCardText:_.c,VIcon:f.a,VImg:h.a,VList:w.a,VListItem:x.a,VListItemAvatar:C.a,VListItemContent:k.a,VListItemSubtitle:k.b,VListItemTitle:k.c,VRow:V.a})},698:function(t,e,n){"use strict";n.r(e);var o={components:{"post-card":n(667).default},data:function(){return{view:!1,page:1}},methods:{getThisPage:function(t){var e=this;console.log(t),this.$store.dispatch("getBlogPosts","page="+t).then((function(t){console.log(t),e.$forceUpdate()}))}},beforeMount:function(){},mounted:function(){},computed:{posts:function(){return this.$store.getters.posts}}},r=n(75),c=n(86),l=n.n(c),m=n(226),v=n(661),d=n(102),_=n(646),f=n(170),h=n(648),w=n(755),x=n(662),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-layout",{attrs:{row:"",wrap:"","align-center":""}},[n("v-flex",{attrs:{xs12:"",sm12:"",md12:"","order-md2":"","order-sm2":""}},[n("v-row",[t._l(t.posts.results,(function(e,o){return 0!==t.posts.results.length?n("v-col",{key:o,attrs:{cols:"12",lg:"3",md:"4",sm:"12",wrap:""}},[n("post-card",{attrs:{post:e}})],1):n("div",[t._v("No Data")])})),t._v(" "),n("v-fab-transition",[n("v-btn",{staticClass:"primary darken-3 v-btn--example",attrs:{fab:"",small:"",bottom:"",right:"",fixed:"",to:"/post"}},[n("v-icon",[t._v("mdi-plus")])],1)],1)],2)],1)],1),t._v(" "),n("div",{staticClass:"text-center"},[n("v-pagination",{attrs:{length:t.posts.total_pages,circle:""},on:{input:function(e){return t.getThisPage(t.page)},next:function(e){return t.getThisPage(t.page)}},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:m.a,VCol:v.a,VFabTransition:d.c,VFlex:_.a,VIcon:f.a,VLayout:h.a,VPagination:w.a,VRow:x.a})}}]);