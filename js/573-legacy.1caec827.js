"use strict";(self["webpackChunkcool_news"]=self["webpackChunkcool_news"]||[]).push([[573],{2573:function(e,r,t){t.r(r),t.d(r,{default:function(){return w}});var n=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"justify-center align-center mx-auto col-12 col-sm-7 col-md-4 my-15"},[t("v-card",{staticClass:"mb-5",attrs:{elevation:"10"}},[t("v-row",{attrs:{justify:"center"}},[t("v-col",{attrs:{"align-self":"center",cols:"10",lg:"10"}},[t("h3",{staticClass:"mb-5"},[e._v("Login")]),t("v-text-field",{attrs:{color:"green",dense:"",outlined:"",placeholder:"Type here...",label:"Email",autocomplete:"email","error-messages":0===e.emailError.length?e.emailErrorMsg[0]:e.emailError},on:{blur:function(r){return e.$v.user.email.$touch()},input:function(r){e.emailErrorMsg=[]}},model:{value:e.user.email,callback:function(r){e.$set(e.user,"email",r)},expression:"user.email"}}),t("v-text-field",{attrs:{color:"green",dense:"",outlined:"",placeholder:"Type here...",label:"New password",type:e.passwordVisible?"text":"password","append-icon":e.passwordVisible?"mdi-eye":"mdi-eye-off","error-messages":0===e.passwordError.length?e.passwordErrorMsg:e.passwordError},on:{"click:append":function(r){e.passwordVisible=!e.passwordVisible},blur:function(r){return e.$v.user.password.$touch()},input:function(r){e.passwordErrorMsg=[]}},model:{value:e.user.password,callback:function(r){e.$set(e.user,"password",r)},expression:"user.password"}}),t("v-btn",{staticClass:"mb-5",attrs:{dark:"",color:"green"},on:{click:e.login}},[e._v("Login")]),t("br"),t("span",[e._v("Are you new?"),t("router-link",{attrs:{to:"/sign_up"}},[e._v(" Sign up")])],1)],1)],1)],1)],1)},s=[],a=t(6198),o=t(3019),i=(t(5666),t(8620)),u=t(379),l=t(467),c=t(5397),d=t(629),p={name:"loginComponent",mixins:[i.oE],data:function(){return{user:{},passwordVisible:!1,emailErrorMsg:[],passwordErrorMsg:[]}},validations:{user:{email:{required:u.C1,email:u.Do},password:{required:u.C1}}},methods:(0,o.Z)((0,o.Z)({},(0,d.nv)(["updateInfo"])),{},{login:function(){var e=this;return(0,a.Z)(regeneratorRuntime.mark((function r(){var t,n,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(e.$v.$touch(),e.$v.user.$invalid){r.next=20;break}return t=[],t.email=e.user.email,t.password=e.user.password,r.next=7,l.Z.login((0,o.Z)({},t));case 7:if(n=r.sent,console.log(n),400==n.status&&"invalid email"===n.error.type&&e.emailErrorMsg.push("Invalid email"),400==n.status&&"invalid password"===n.error.type&&e.passwordErrorMsg.push("Invalid password"),200!=n.status){r.next=20;break}return console.log(n.result._id),r.next=15,c.Z.getUserById(n.result._id);case 15:s=r.sent,console.log(s),e.updateInfo({userId:s.result._id,username:s.result.username}),console.log(e.loggedUser),e.$router.push("/");case 20:case"end":return r.stop()}}),r)})))()}}),computed:(0,o.Z)((0,o.Z)({},(0,d.Se)(["loggedUser"])),{},{emailError:function(){var e=[];return this.$v.user.email.$dirty?(!this.$v.user.email.required&&e.push("Email is required"),this.$v.user.email.email||e.push("Email is incorrect"),e):e},passwordError:function(){var e=[];return this.$v.user.password.$dirty?(this.$v.user.password.required||e.push("Password is required"),e):e}})},m=p,v=t(1001),g=(0,v.Z)(m,n,s,!1,null,null,null),w=g.exports},467:function(e,r,t){var n=t(6198),s=(t(5666),t(4639)),a="/auth";r["Z"]={sign_up:function(e){return(0,n.Z)(regeneratorRuntime.mark((function r(){var t;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return console.log(e),r.next=3,s.Z.post("".concat(a,"/sign_up"),e);case 3:return t=r.sent,r.abrupt("return",null===t||void 0===t?void 0:t.data);case 5:case"end":return r.stop()}}),r)})))()},login:function(e){return(0,n.Z)(regeneratorRuntime.mark((function r(){var t;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,s.Z.post("".concat(a,"/sign_in"),e);case 2:return t=r.sent,r.abrupt("return",null===t||void 0===t?void 0:t.data);case 4:case"end":return r.stop()}}),r)})))()}}},5397:function(e,r,t){var n=t(6198),s=(t(5666),t(4639));r["Z"]={updateUserData:function(e,r){return(0,n.Z)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,s.Z.post("/user/update/".concat(e),r);case 2:return n=t.sent,t.abrupt("return",null===n||void 0===n?void 0:n.data);case 4:case"end":return t.stop()}}),t)})))()},changePassword:function(e,r){return(0,n.Z)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,s.Z.post("/user/change_password/".concat(e),r);case 2:return n=t.sent,t.abrupt("return",null===n||void 0===n?void 0:n.data);case 4:case"end":return t.stop()}}),t)})))()},getUserById:function(e){return(0,n.Z)(regeneratorRuntime.mark((function r(){var t;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,s.Z.get("/user/".concat(e));case 2:return t=r.sent,r.abrupt("return",null===t||void 0===t?void 0:t.data);case 4:case"end":return r.stop()}}),r)})))()}}}}]);
//# sourceMappingURL=573-legacy.1caec827.js.map