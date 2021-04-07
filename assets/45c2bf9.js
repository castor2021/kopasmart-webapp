(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{755:function(e,t,r){"use strict";r.r(t);r(143),r(36);var o={meta:{auth:{requiresAuth:!1}},layout:"home",data:function(){return{agreement:!1,dialog:!1,email:void 0,form:!1,isLoading:!1,password:void 0,username:void 0,rePassword:void 0,rules:{email:function(e){return(e||"").match(/@/)||"Please enter a valid email"},length:function(e){return function(t){return(t||"").length>=e||"Invalid character length, required ".concat(e)}},password:function(e){return(e||"").match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/)||"Password must contain an upper case letter, a numeric character, and a special character"},required:function(e){return!!e||"This field is required"}}}},computed:{},methods:{signUpWithCredentials:function(){var data={username:this.username,password:this.password,email:this.email};this.password===this.rePassword&&this.$store.dispatch("register",data)}}},l=r(74),n=r(85),c=r.n(n),d=r(627),v=r(220),m=r(640),f=r(639),h=r(767),w=r(644),_=r(628),x=r(675),k=r(199),C=r(666),V=r(645),P=r(637),y=r(206),S=r(104),T=r(79),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",{staticClass:"app"},[r("v-container",{attrs:{fluid:""}},[r("v-card",{staticClass:"mx-auto",staticStyle:{}},[r("v-toolbar",{attrs:{color:"primary",dark:"",flat:""}},[r("v-subheader",{staticClass:"font-weight-regular"},[e._v(e._s(e.$t("label.button.buttonsignup")))]),e._v(" "),r("v-spacer")],1),e._v(" "),r("v-form",{ref:"form",staticClass:"pa-4 pt-6",model:{value:e.form,callback:function(t){e.form=t},expression:"form"}},[r("v-row",[r("v-col",{attrs:{cols:"12",sm:"6"}},[r("v-text-field",{ref:"username",attrs:{label:"Username",rules:[e.rules.length(5)],placeholder:"Username"},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}),e._v(" "),r("v-text-field",{ref:"email",attrs:{rules:[e.rules.email],label:"Email address",placeholder:"email@example.com",type:"email"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"6"}},[r("v-text-field",{attrs:{rules:[e.rules.password,e.rules.length(8)],color:"deep-purple",counter:"8",label:"Password",placeholder:"********",type:"password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),e._v(" "),r("v-text-field",{attrs:{"auto-grow":"",rules:[e.rules.password,e.rules.length(8)],placeholder:"********",color:"deep-purple",label:"Confirm Password",type:"password"},model:{value:e.rePassword,callback:function(t){e.rePassword=t},expression:"rePassword"}})],1)],1),e._v(" "),r("v-checkbox",{attrs:{rules:[e.rules.required],color:"deep-purple"},scopedSlots:e._u([{key:"label",fn:function(){return[e._v("\n            I agree to the \n            "),r("a",{attrs:{href:"#"},on:{click:function(t){t.stopPropagation(),t.preventDefault(),e.dialog=!0}}},[e._v("Terms of Service")]),e._v("\n             and \n            "),r("a",{attrs:{href:"#"},on:{click:function(t){t.stopPropagation(),t.preventDefault(),e.dialog=!0}}},[e._v("Privacy Policy")]),e._v("*\n          ")]},proxy:!0}]),model:{value:e.agreement,callback:function(t){e.agreement=t},expression:"agreement"}})],1),e._v(" "),r("v-divider"),e._v(" "),r("v-card-actions",[r("v-btn",{attrs:{text:""},on:{click:function(t){return e.$refs.form.reset()}}},[e._v("Clear")]),e._v(" "),r("v-spacer"),e._v(" "),r("v-btn",{staticClass:"white--text",attrs:{disabled:!e.form,loading:e.isLoading,color:"deep-purple accent-4",depressed:""},on:{click:e.signUpWithCredentials}},[e._v("Submit")])],1),e._v(" "),r("v-dialog",{attrs:{absolute:"","max-width":"400",persistent:""},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[r("v-card",[r("v-card-title",{staticClass:"headline grey lighten-3"},[e._v("Legal")]),e._v(" "),r("v-card-text",[e._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")]),e._v(" "),r("v-divider"),e._v(" "),r("v-card-actions",[r("v-btn",{attrs:{text:""},on:{click:function(t){e.agreement=!1,e.dialog=!1}}},[e._v("No")]),e._v(" "),r("v-spacer"),e._v(" "),r("v-btn",{staticClass:"white--text",attrs:{color:"deep-purple accent-4"},on:{click:function(t){e.agreement=!0,e.dialog=!1}}},[e._v("Yes")])],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;c()(component,{VApp:d.a,VBtn:v.a,VCard:m.a,VCardActions:f.a,VCardText:f.c,VCardTitle:f.d,VCheckbox:h.a,VCol:w.a,VContainer:_.a,VDialog:x.a,VDivider:k.a,VForm:C.a,VRow:V.a,VSpacer:P.a,VSubheader:y.a,VTextField:S.a,VToolbar:T.a})}}]);