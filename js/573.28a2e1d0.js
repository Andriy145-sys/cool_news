"use strict";(self["webpackChunkcool_news"]=self["webpackChunkcool_news"]||[]).push([[573],{2573:function(s,e,r){r.r(e),r.d(e,{default:function(){return g}});var t=function(){var s=this,e=s.$createElement,r=s._self._c||e;return r("div",{staticClass:"justify-center align-center mx-auto col-12 col-sm-7 col-md-4 my-15"},[r("v-card",{staticClass:"mb-5",attrs:{elevation:"10"}},[r("v-row",{attrs:{justify:"center"}},[r("v-col",{attrs:{"align-self":"center",cols:"10",lg:"10"}},[r("h3",{staticClass:"mb-5"},[s._v("Login")]),r("v-text-field",{attrs:{color:"green",dense:"",outlined:"",placeholder:"Type here...",label:"Email",autocomplete:"email","error-messages":0===s.emailError.length?s.emailErrorMsg[0]:s.emailError},on:{blur:function(e){return s.$v.user.email.$touch()},input:function(e){s.emailErrorMsg=[]}},model:{value:s.user.email,callback:function(e){s.$set(s.user,"email",e)},expression:"user.email"}}),r("v-text-field",{attrs:{color:"green",dense:"",outlined:"",placeholder:"Type here...",label:"New password",type:s.passwordVisible?"text":"password","append-icon":s.passwordVisible?"mdi-eye":"mdi-eye-off","error-messages":0===s.passwordError.length?s.passwordErrorMsg:s.passwordError},on:{"click:append":function(e){s.passwordVisible=!s.passwordVisible},blur:function(e){return s.$v.user.password.$touch()},input:function(e){s.passwordErrorMsg=[]}},model:{value:s.user.password,callback:function(e){s.$set(s.user,"password",e)},expression:"user.password"}}),r("v-btn",{staticClass:"mb-5",attrs:{dark:"",color:"green"},on:{click:s.login}},[s._v("Login")]),r("br"),r("span",[s._v("Are you new?"),r("router-link",{attrs:{to:"/sign_up"}},[s._v(" Sign up")])],1)],1)],1)],1)],1)},a=[],o=r(8620),i=r(379),n=r(467),l=r(5397),u=r(629),d={name:"loginComponent",mixins:[o.oE],data:()=>({user:{},passwordVisible:!1,emailErrorMsg:[],passwordErrorMsg:[]}),validations:{user:{email:{required:i.C1,email:i.Do},password:{required:i.C1}}},methods:{...(0,u.nv)(["updateInfo"]),async login(){if(this.$v.$touch(),!this.$v.user.$invalid){const s=[];s.email=this.user.email,s.password=this.user.password;const e=await n.Z.login({...s});if(console.log(e),400==e.status&&"invalid email"===e.error.type&&this.emailErrorMsg.push("Invalid email"),400==e.status&&"invalid password"===e.error.type&&this.passwordErrorMsg.push("Invalid password"),200==e.status){console.log(e.result._id);const s=await l.Z.getUserById(e.result._id);console.log(s),this.updateInfo({userId:s.result._id,username:s.result.username}),console.log(this.loggedUser),this.$router.push("/")}}}},computed:{...(0,u.Se)(["loggedUser"]),emailError(){const s=[];return this.$v.user.email.$dirty?(!this.$v.user.email.required&&s.push("Email is required"),this.$v.user.email.email||s.push("Email is incorrect"),s):s},passwordError(){const s=[];return this.$v.user.password.$dirty?(this.$v.user.password.required||s.push("Password is required"),s):s}}},c=d,p=r(1001),m=(0,p.Z)(c,t,a,!1,null,null,null),g=m.exports},467:function(s,e,r){var t=r(4639);const a="/auth";e["Z"]={async sign_up(s){console.log(s);const e=await t.Z.post(`${a}/sign_up`,s);return e?.data},async login(s){const e=await t.Z.post(`${a}/sign_in`,s);return e?.data}}},5397:function(s,e,r){var t=r(4639);e["Z"]={async updateUserData(s,e){const r=await t.Z.post(`/user/update/${s}`,e);return r?.data},async changePassword(s,e){const r=await t.Z.post(`/user/change_password/${s}`,e);return r?.data},async getUserById(s){const e=await t.Z.get(`/user/${s}`);return e?.data}}}}]);
//# sourceMappingURL=573.28a2e1d0.js.map