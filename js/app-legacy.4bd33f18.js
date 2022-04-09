(function(){"use strict";var e={7815:function(e,t,n){n(6992),n(8674),n(9601),n(7727);var r=n(144),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Header"),n("v-app",[n("v-main",[n("v-container",[n("router-view",{staticStyle:{"margin-top":"60px"}})],1)],1)],1),n("Footer")],1)},i=[],u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app-bar",{staticClass:"app-bar",attrs:{dense:""}},[n("router-link",{attrs:{to:"/"}},[n("v-app-bar-title",[e._v("Cool news")])],1),n("v-spacer"),e.loggedUser?n("v-menu",{attrs:{"offset-y":""},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,o=t.attrs;return[n("v-icon",e._g(e._b({},"v-icon",o,!1),r),[e._v(" mdi-account ")])]}}],null,!1,1607273747)},[n("v-list",{attrs:{dense:""}},[n("v-list-item-group",{attrs:{color:"primary"},model:{value:e.selectedItem,callback:function(t){e.selectedItem=t},expression:"selectedItem"}},e._l(e.profileDropDown,(function(t,r){return n("v-list-item",{key:r,on:{click:function(n){return e.goTo(t.path)}}},[n("v-list-item-icon",[n("v-icon",{domProps:{textContent:e._s(t.icon)}})],1),n("v-list-item-title",{domProps:{textContent:e._s(t.title)}})],1)})),1)],1)],1):n("v-row",[n("v-spacer"),n("div",{staticStyle:{"margin-right":"20px"}},[n("router-link",{attrs:{to:"/sign_up"}},[e._v("Sign up")]),e._v(" | "),n("router-link",{attrs:{to:"/login"}},[e._v("Sign in")])],1)],1)],1)},a=[],l=n(6198),c=n(3019),s=(n(5666),n(629)),f={name:"appHeader",data:function(){return{selectedItem:2,profileDropDown:[{icon:"mdi-account",title:"My profile",path:"profile"},{icon:"mdi-logout-variant",title:"Logout",path:"logout"}]}},methods:(0,c.Z)((0,c.Z)({},(0,s.nv)(["updateInfo"])),{},{goTo:function(e){switch(e){case"profile":this.$router.push("/profile");break;case"logout":this.logout();break}},logout:function(){var e=this;return(0,l.Z)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.$store.commit("clearUserLogged"),e.$router.push("/login");case 2:case"end":return t.stop()}}),t)})))()}}),computed:(0,c.Z)({},(0,s.Se)(["loggedUser"]))},p=f,d=n(1001),g=(0,d.Z)(p,u,a,!1,null,null,null),m=g.exports,v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-footer",{staticClass:"footer"},[n("span",[e._v(" Developed by Holinskiy Andriy ")]),n("v-spacer"),n("v-icon",[e._v("mdi-copyright")]),e._v(" "+e._s((new Date).getFullYear())+" ")],1)},h=[],b={name:"appFooter"},y=b,w=(0,d.Z)(y,v,h,!1,null,null,null),_=w.exports,k={name:"App",components:{Header:m,Footer:_}},C=k,E=(0,d.Z)(C,o,i,!1,null,null,null),x=E.exports,L=(n(1539),n(8783),n(3948),n(8345)),P=n(4702),S={state:{loggedUser:null},mutations:{setLoggedUser:function(e,t){e.loggedUser=t},clearUserLogged:function(e){e.loggedUser=null}},actions:{updateInfo:function(e,t){return(0,l.Z)(regeneratorRuntime.mark((function n(){var r,o,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:r=e.commit,o=e.getters,n.prev=1,i=(0,c.Z)((0,c.Z)({},o.loggedUser),t),r("setLoggedUser",i),n.next=10;break;case 6:throw n.prev=6,n.t0=n["catch"](1),r("setError",n.t0),n.t0;case 10:case"end":return n.stop()}}),n,null,[[1,6]])})))()}},getters:{loggedUser:function(e){return e.loggedUser}}};r["default"].use(s.ZP);var Z=new s.ZP.Store({plugins:[(0,P.Z)()],mutations:{setError:function(e,t){e.error=t},clearError:function(e){e.error=null}},getters:{error:function(e){return e.error}},modules:{user:S}});r["default"].use(L.Z);var O=[{path:"/",name:"main-page",component:function(){return Promise.all([n.e(242),n.e(393),n.e(957)]).then(n.bind(n,4851))},meta:{requiresLogin:!0}},{path:"/profile",name:"profile",component:function(){return Promise.all([n.e(242),n.e(393),n.e(721)]).then(n.bind(n,4182))},meta:{requiresLogin:!0}},{path:"/sign_up",name:"sign_up",component:function(){return Promise.all([n.e(242),n.e(909)]).then(n.bind(n,2909))},meta:{requiresLogout:!0}},{path:"/login",name:"login",component:function(){return Promise.all([n.e(242),n.e(573)]).then(n.bind(n,2573))},meta:{requiresLogout:!0}}],U=new L.Z({mode:"history",base:"/cool_news/",routes:O});U.beforeEach((function(e,t,n){e.matched.some((function(e){return e.meta.requiresLogin}))&&null==Z.getters.loggedUser?n({name:"login"}):e.matched.some((function(e){return e.meta.requiresLogout}))&&null!=Z.getters.loggedUser?n({name:"main-page"}):n()}));var j=U,T=n(5464),A=n.n(T);n(243);r["default"].use(A());var q=new(A())({}),D=n(8620);r["default"].use(D.ZP),r["default"].config.productionTip=!1,new r["default"]({router:j,vuetify:q,store:Z,render:function(e){return e(x)}}).$mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,i){if(!r){var u=1/0;for(s=0;s<e.length;s++){r=e[s][0],o=e[s][1],i=e[s][2];for(var a=!0,l=0;l<r.length;l++)(!1&i||u>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[l])}))?r.splice(l--,1):(a=!1,i<u&&(u=i));if(a){e.splice(s--,1);var c=o();void 0!==c&&(t=c)}}return t}i=i||0;for(var s=e.length;s>0&&e[s-1][2]>i;s--)e[s]=e[s-1];e[s]=[r,o,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"-legacy."+{242:"2b105292",393:"ef407515",573:"1caec827",721:"ac4ce936",909:"4593b116",957:"cd037227"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{721:"9a418a11",957:"9a418a11"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="cool_news:";n.l=function(r,o,i,u){if(e[r])e[r].push(o);else{var a,l;if(void 0!==i)for(var c=document.getElementsByTagName("script"),s=0;s<c.length;s++){var f=c[s];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==t+i){a=f;break}}a||(l=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.setAttribute("data-webpack",t+i),a.src=r),e[r]=[o];var p=function(t,n){a.onerror=a.onload=null,clearTimeout(d);var o=e[r];if(delete e[r],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(e){return e(n)})),t)return t(n)},d=setTimeout(p.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=p.bind(null,a.onerror),a.onload=p.bind(null,a.onload),l&&document.head.appendChild(a)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/cool_news/"}(),function(){var e=function(e,t,n,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var i=function(i){if(o.onerror=o.onload=null,"load"===i.type)n();else{var u=i&&("load"===i.type?"missing":i.type),a=i&&i.target&&i.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=u,l.request=a,o.parentNode.removeChild(o),r(l)}};return o.onerror=o.onload=i,o.href=t,document.head.appendChild(o),o},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===t))return o}var u=document.getElementsByTagName("style");for(r=0;r<u.length;r++){o=u[r],i=o.getAttribute("data-href");if(i===e||i===t)return o}},r=function(r){return new Promise((function(o,i){var u=n.miniCssF(r),a=n.p+u;if(t(u,a))return o();e(r,a,o,i)}))},o={143:0};n.f.miniCss=function(e,t){var n={721:1,957:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=i);var u=n.p+n.u(t),a=new Error,l=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),u=r&&r.target&&r.target.src;a.message="Loading chunk "+t+" failed.\n("+i+": "+u+")",a.name="ChunkLoadError",a.type=i,a.request=u,o[1](a)}};n.l(u,l,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,i,u=r[0],a=r[1],l=r[2],c=0;if(u.some((function(t){return 0!==e[t]}))){for(o in a)n.o(a,o)&&(n.m[o]=a[o]);if(l)var s=l(n)}for(t&&t(r);c<u.length;c++)i=u[c],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(s)},r=self["webpackChunkcool_news"]=self["webpackChunkcool_news"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(7815)}));r=n.O(r)})();
//# sourceMappingURL=app-legacy.4bd33f18.js.map