(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{788:function(t,e,l){"use strict";l.r(e);var r={data:function(){return{valid:!1,text:null,show1:!1,show2:!1,show3:!1,show4:!1,progress:!1,confirmPassword:"",company:"",username:"",email:"",firstname:"",lastname:"",middlename:"",phonenumber:"",address:"",city:"",country:"",postal:"",about:"",dialog1:!1,dialog3:!1,dialog:!1,rules:{required:function(t){return!!t||"Required."},min:function(t){return t.length>=8||"Min 8 characters"},emailMatch:function(){return"The email and password you entered don't match"}},form_data:{old_password:"",new_password:""}}},created:function(){this.$store.dispatch("getProfile")},computed:{userdata:function(){return this.$store.getters.userInfo},passwordConfirmationRule:function(){var t=this;return function(){return t.form_data.new_password===t.confirmPassword||"Password must match"}}},methods:{updateProfileWithCreadentials:function(){null==this.userdata.picture&&(delete this.userdata.picture,this.dialog=!1,this.$store.dispatch("updateProfile",this.userdata))},jiachie:function(t){400===t&&(this.text="Old password isnot correct",this.dialog3=!0)},updatepassword:function(){this.$store.dispatch("_update_user_password",this.form_data),this.dialog=!1,this.jiachie(this.$store.getters.passwordmessage)}},beforeMount:function(){}},o=l(63),A=l(76),n=l.n(A),d=l(212),c=l(238),v=l(677),m=l(676),f=l(217),x=l(665),h=l(712),w=l(209),y=l(666),k=l(697),_=l(172),C=l(668),S=l(682),V=l(674),R=l(107),U=l(745),K=l(82),j=l(684),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("v-container",{attrs:{"fill-height":"",fluid:"","grid-list-xl":""}},[l("v-layout",{attrs:{"justify-center":"",wrap:""}},[l("v-flex",{attrs:{xs12:"",md8:""}},[l("v-container",{attrs:{"py-0":""}},[l("v-layout",{attrs:{wrap:""}},[l("v-flex",{attrs:{xs12:"",md4:""}},[l("v-text-field",{attrs:{label:t.$t("label.heading.company"),placeholder:"e.g Singo Africa",disabled:""},model:{value:t.company,callback:function(e){t.company=e},expression:"company"}})],1),t._v(" "),l("v-flex",{attrs:{xs12:"",md4:""}},[l("v-text-field",{staticClass:"purple-input",attrs:{label:t.$t("label.heading.username"),placeholder:"e.g johnDoe"},model:{value:t.userdata.username,callback:function(e){t.$set(t.userdata,"username",e)},expression:"userdata.username"}})],1),t._v(" "),l("v-flex",{attrs:{xs12:"",md4:""}},[l("v-text-field",{staticClass:"purple-input",attrs:{label:t.$t("label.heading.emailaddress"),placeholder:"e.g example@email.com"},model:{value:t.userdata.email,callback:function(e){t.$set(t.userdata,"email",e)},expression:"userdata.email"}})],1),t._v(" "),l("v-flex",{attrs:{xs12:"",md4:""}},[l("v-text-field",{staticClass:"purple-input",attrs:{label:t.$t("label.heading.firstname"),placeholder:"John"},model:{value:t.userdata.first_name,callback:function(e){t.$set(t.userdata,"first_name",e)},expression:"userdata.first_name"}})],1),t._v(" "),l("v-flex",{attrs:{xs12:"",md4:""}},[l("v-text-field",{staticClass:"purple-input",attrs:{label:t.$t("label.heading.middlename"),placeholder:"Doe"},model:{value:t.userdata.middle_name,callback:function(e){t.$set(t.userdata,"middle_name",e)},expression:"userdata.middle_name"}})],1),t._v(" "),l("v-flex",{attrs:{xs12:"",md4:""}},[l("v-text-field",{staticClass:"purple-input",attrs:{label:t.$t("label.heading.lastname"),placeholder:"Doe"},model:{value:t.userdata.last_name,callback:function(e){t.$set(t.userdata,"last_name",e)},expression:"userdata.last_name"}})],1),t._v(" "),l("v-flex",{attrs:{xs12:"",md8:""}},[l("v-text-field",{staticClass:"purple-input",attrs:{label:t.$t("label.heading.addressline"),placeholder:"Snow Rock PI"},model:{value:t.address,callback:function(e){t.address=e},expression:"address"}})],1),t._v(" "),l("v-flex",{attrs:{xs12:"",md4:""}},[l("v-text-field",{staticClass:"purple-input",attrs:{label:t.$t("label.heading.phonenumber"),placeholder:"e.g 0716 xxx xxx"},model:{value:t.userdata.phone,callback:function(e){t.$set(t.userdata,"phone",e)},expression:"userdata.phone"}})],1),t._v(" "),l("v-flex",{attrs:{xs12:"",md4:""}},[l("v-text-field",{staticClass:"purple-input",attrs:{label:t.$t("label.heading.city"),placeholder:"Snow Rocky"},model:{value:t.city,callback:function(e){t.city=e},expression:"city"}})],1),t._v(" "),l("v-flex",{attrs:{xs12:"",md4:""}},[l("v-text-field",{staticClass:"purple-input",attrs:{label:t.$t("label.heading.country"),placeholder:"e.g Tanzania"},model:{value:t.country,callback:function(e){t.country=e},expression:"country"}})],1),t._v(" "),l("v-flex",{attrs:{xs12:"",md4:""}},[l("v-text-field",{staticClass:"purple-input",attrs:{label:t.$t("label.heading.postalcode"),placeholder:"0610 Snow Rocky",type:"number"},model:{value:t.postal,callback:function(e){t.postal=e},expression:"postal"}})],1),t._v(" "),l("v-flex",{attrs:{xs12:""}},[l("v-textarea",{staticClass:"purple-input",attrs:{label:t.$t("label.heading.biography"),placeholder:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},model:{value:t.userdata.biography,callback:function(e){t.$set(t.userdata,"biography",e)},expression:"userdata.biography"}})],1),t._v(" "),l("v-flex",{attrs:{xs12:"","text-xs-right":""}},[l("div",[null!=t.userdata.username?l("v-btn",{staticClass:"mx-0 font-weight-light",staticStyle:{"text-transform":"capitalize"},attrs:{color:"info lighten-1"},on:{click:function(e){e.stopPropagation(),t.dialog1=!0}}},[t._v(t._s(t.$t("label.button.btnupdateprofile")))]):t._e(),t._v(" "),l("v-dialog",{attrs:{width:"500"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[l("v-btn",t._g(t._b({staticClass:"button",attrs:{medium:"",elevation:"2"}},"v-btn",o,!1),r),[l("v-icon",{attrs:{small:""}},[t._v("mdi-lock")]),t._v("\n                  Change Password")],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),l("v-card",{attrs:{flat:""}},[l("v-toolbar",{staticClass:"primary",attrs:{dark:"",flat:""}},[l("v-toolbar-title",[l("h3",[t._v("Update password")])])],1),t._v(" "),l("v-card-text",{staticClass:"pa-4"},[l("v-form",{ref:"form",staticClass:"mt-3",attrs:{id:"check-login-form"},on:{submit:function(e){return e.preventDefault(),t.updatepassword.apply(null,arguments)}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[l("v-text-field",{staticClass:"mt-2 ma-5",attrs:{"prepend-inner-icon":"mdi-lock","append-icon":t.show1?"mdi-eye":"mdi-eye-off",type:t.show1?"text":"password","error-count":"8",label:"Old password",placeholder:"********",name:"input-10-1",counter:"",dense:"",outlined:"",required:""},on:{"click:append":function(e){t.show1=!t.show1}},model:{value:t.form_data.old_password,callback:function(e){t.$set(t.form_data,"old_password",e)},expression:"form_data.old_password"}}),t._v(" "),l("v-text-field",{staticClass:"mt-2 ma-5",attrs:{"prepend-inner-icon":"mdi-lock-outline","append-icon":t.show2?"mdi-eye":"mdi-eye-off",type:t.show2?"text":"password",rules:[t.rules.required,t.rules.min],"error-count":"8",label:"New password",placeholder:"********",name:"input-10-1",hint:"At least 8 characters",counter:"",dense:"",outlined:"",required:""},on:{"click:append":function(e){t.show2=!t.show2}},model:{value:t.form_data.new_password,callback:function(e){t.$set(t.form_data,"new_password",e)},expression:"form_data.new_password"}}),t._v(" "),l("v-text-field",{staticClass:"mt-2 ma-5",attrs:{"prepend-inner-icon":"mdi-lock-outline","append-icon":t.show3?"mdi-eye":"mdi-eye-off",type:t.show3?"text":"password",rules:[t.rules.required,t.rules.min,t.passwordConfirmationRule],"error-count":"8",label:"Confirm password",placeholder:"********",name:"input-10-1",counter:"",dense:"",outlined:"",required:""},on:{"click:append":function(e){t.show3=!t.show3}},model:{value:t.confirmPassword,callback:function(e){t.confirmPassword=e},expression:"confirmPassword"}})],1)],1),t._v(" "),l("v-divider"),t._v(" "),l("v-card-actions",[l("v-spacer"),t._v(" "),l("v-btn",{staticClass:"button cancel",attrs:{small:""},on:{click:function(e){t.dialog=!1}}},[t._v("\n                Cancel\n              ")]),t._v(" "),l("v-btn",{staticClass:"button",attrs:{small:"",type:"submit",disabled:!t.valid,form:"check-login-form"}},[t._v("\n                Update\n              ")])],1)],1)],1),t._v(" "),l("v-dialog",{attrs:{"max-width":"290"},model:{value:t.dialog1,callback:function(e){t.dialog1=e},expression:"dialog1"}},[l("v-card",[l("v-card-title",{staticClass:"headline error white--text"},[t._v(t._s(t.$t("label.message.Do you Agree"))+"?")]),t._v(" "),l("v-card-text",{staticClass:"mt-1 pt-1"},[t._v(t._s(t.$t("label.message.profileupdate")))]),t._v(" "),l("v-card-actions",[l("v-spacer"),t._v(" "),l("v-btn",{staticStyle:{"text-transform":"capitalize"},attrs:{color:"green darken-1",outlined:"",small:""},on:{click:function(e){t.dialog=!1}}},[t._v(t._s(t.$t("label.button.btnDisagree")))]),t._v(" "),l("v-btn",{staticStyle:{"text-transform":"capitalize"},attrs:{color:"error darken-1",small:"",outlined:""},on:{click:t.updateProfileWithCreadentials}},[t._v(t._s(t.$t("label.button.btnAgree")))])],1)],1)],1)],1)])],1)],1)],1),t._v(" "),l("v-flex",{attrs:{xs12:"",md4:""}},[l("v-card",{staticClass:"v-card-profile"},[l("v-row",{attrs:{justify:"space-around"}},[l("v-avatar",{staticClass:"mx-auto d-block",attrs:{slot:"offset",size:"130"},slot:"offset"},[l("img",{attrs:{src:"data:image/jpeg;base64,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"}})])],1),t._v(" "),l("v-card-text",{staticClass:"text-xs-center"},[l("h4",{staticClass:"card-title font-weight-light"},[t._v("\n            "+t._s(t.userdata.first_name)+" "+t._s(t.userdata.last_name)+"\n            "),l("strong",{staticStyle:{color:"blue"}},[t._v("{ @"+t._s(t.userdata.username)+" }")])]),t._v(" "),null!=t.userdata.biography?l("p",{staticClass:"card-description font-weight-light"},[t._v(t._s(t.userdata.biography))]):t._e(),t._v(" "),l("v-btn",{staticClass:"font-weight-light",staticStyle:{"text-transform":"capitalize"},attrs:{color:"info lighten-1",small:"",depressed:"",rounded:""}},[t._v(t._s(t.$t("label.button.btnFollow")))])],1),t._v(" "),l("v-divider",{staticClass:"ma-1 mx-4"}),t._v(" "),l("v-card-text",[t.userdata.is_active?l("v-chip",{staticClass:"ma-2 font-weight-light",attrs:{pill:"",light:"",color:"info lighten-1","text-color":"white"}},[l("v-avatar",{attrs:{left:""}},[l("v-icon",[t._v("mdi-checkbox-marked-circle")])],1),t._v("\n            "+t._s(t.$t("label.checkbox.isactive"))+" ?\n          ")],1):t._e(),t._v(" "),t.userdata.is_staff?l("v-chip",{staticClass:"ma-2 font-weight-light",attrs:{color:"warning  lighten-1","text-color":"white"},on:{click:t.lights}},[l("v-avatar",{attrs:{left:""}},[l("v-icon",[t._v("mdi-checkbox-marked-circle")])],1),t._v("Is Staff\n          ")],1):t._e()],1)],1)],1)],1),t._v(" "),l("v-row",{attrs:{justify:"center"}},[l("v-dialog",{attrs:{persistent:"","max-width":"290"},model:{value:t.dialog3,callback:function(e){t.dialog3=e},expression:"dialog3"}},[l("v-card",[l("v-card-title",[t._v("\n     ALert\n      ")]),t._v(" "),l("v-card-text",[t._v(t._s(t.text)+",password not changed")]),t._v(" "),l("v-card-actions",[l("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(e){t.dialog3=!1}}},[t._v("\n          Close\n        ")])],1)],1)],1)],1)],1)}),[],!1,null,"234bc876",null);e.default=component.exports;n()(component,{VAvatar:d.a,VBtn:c.a,VCard:v.a,VCardActions:m.a,VCardText:m.c,VCardTitle:m.d,VChip:f.a,VContainer:x.a,VDialog:h.a,VDivider:w.a,VFlex:y.a,VForm:k.a,VIcon:_.a,VLayout:C.a,VRow:S.a,VSpacer:V.a,VTextField:R.a,VTextarea:U.a,VToolbar:K.a,VToolbarTitle:j.a})}}]);