webpackJsonp([6],{12:function(t,e,n){"use strict";var r,o=n(47),a=n.n(o),i="bug,feature,greenkeeper,roadmap".split(",");!function(t){t.user="user",t.organization="organization"}(r||(r={}));var s,c="user"===r.user,l={name:"blog",owner:"JounQin"},u={login:"JounQin"};!function(t){t.EN="en",t.ZH="zh"}(s||(s={}));var f,p,h,d=s.EN,g=s.ZH,v=(f={},f[d]=g,f[g]=d,f),m=s.EN,_=[s.EN,s.ZH],b=this&&this.__makeTemplateObject||function(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t},y=this&&this.__assign||Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t},w={query:a()(p||(p=b(["\n    query($name: String!, $owner: String!) {\n      repository(name: $name, owner: $owner) {\n        labels(first: 100) {\n          nodes {\n            color\n            id\n            name\n          }\n        }\n      }\n    }\n  "],["\n    query($name: String!, $owner: String!) {\n      repository(name: $name, owner: $owner) {\n        labels(first: 100) {\n          nodes {\n            color\n            id\n            name\n          }\n        }\n      }\n    }\n  "]))),variables:l},O=function(t){return t.readQuery(y({},w)).repository.labels.nodes.filter(function(t){return!i.includes(t.name)})},T=n(79),C=n.n(T),x=C.a,E=function(t){return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*"+encodeURIComponent(t).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1"))||null},R=function(t,e,n,r,o,a){if(!t||/^(?:expires|max\-age|path|domain|secure)$/i.test(t))return!1;var i="";if(n)switch(n.constructor){case Number:i=n===1/0?"; expires=Fri, 31 Dec 9999 23:59:59 GMT":"; max-age="+n;break;case String:i="; expires="+n;break;case Date:i="; expires="+n.toUTCString()}return document.cookie=encodeURIComponent(t)+"="+encodeURIComponent(null==e?"":e)+i+(o?"; domain="+o:"")+(r?"; path="+r:"")+(a?"; secure":""),!0},S=function(t){return Array.isArray(t)||(t=[t]),t.reduce(function(t,e){if(!e)return t;var n=e.split(/; */),r=n[0],o=n.slice(1),a=r.split("="),i={name:a[0],value:a[1]};return o.forEach(function(t){var e=t.split("="),n=e[0],r=e[1];i[n]=null==r||r}),t.push(i),t},[])},$=n(80),j=n(81),k=function(t,e){return void 0===e&&(e="YYYY-MM-DD"),Object($.a)(t,e)},P=(h={},h[s.EN]=j.enUS,h[s.ZH]=j.zhCN,h),U=function(t,e){return void 0===e&&(e=s.EN),Object($.b)(t,Date.now(),{locale:P[e]})};n.d(e,"j",function(){return w}),n.d(e,"m",function(){return O}),n.d(e,"n",function(){return x}),n.d(e,"l",function(){return E}),n.d(e,"o",function(){return R}),n.d(e,!1,function(){return S}),n.d(e,!1,function(){return"blog"}),n.d(e,!1,function(){return"JounQin"}),n.d(e,!1,function(){return i}),n.d(e,!1,function(){return r}),n.d(e,"f",function(){return"user"}),n.d(e,"b",function(){return c}),n.d(e,"g",function(){return l}),n.d(e,"e",function(){return u}),n.d(e,!1,function(){return"Fri, 31 Dec 9999 23:59:59 GMT"}),n.d(e,"d",function(){return"LOCALE_COOKIE"}),n.d(e,"h",function(){return"1stG Blog"}),n.d(e,!1,function(){return s}),n.d(e,"i",function(){return v}),n.d(e,"a",function(){return m}),n.d(e,"c",function(){return _}),n.d(e,"k",function(){return k}),n.d(e,"p",function(){return U})},310:function(t,e){},311:function(t,e){t.exports={"brand-name":"_2NoV7_1",brandName:"_2NoV7_1","slide-left":"_2tO6W_1",slideLeft:"_2tO6W_1","slide-right":"_1l2Jl_1",slideRight:"_1l2Jl_1","slide-top":"_c-osW_1",slideTop:"_c-osW_1",main:"_3sNoB_1",collapse:"_3x05I_1"}},313:function(t,e){t.exports={progress:"_2zzCQ_0"}},314:function(t,e,n){"use strict";var r=n(315);n.n(r);n.o(r,"User")&&n.d(e,"User",function(){return r.User});var o=n(316);n.n(o);n.o(o,"User")&&n.d(e,"User",function(){return o.User});var a=n(317);n.n(a);n.o(a,"User")&&n.d(e,"User",function(){return a.User});var i=n(318);n.n(i);n.o(i,"User")&&n.d(e,"User",function(){return i.User})},315:function(t,e){},316:function(t,e){},317:function(t,e){},318:function(t,e){},48:function(t,e,n){t.exports=n(49)},49:function(t,e,n){"use strict";function r(t){var e=t.$options.title;if(e)return"function"==typeof e?e.call(t,t):e}function o(t){this.$style=n(313)}function a(t){n(310),this.$style=n(311)}Object.defineProperty(e,"__esModule",{value:!0});var i=n(22),s=n.n(i),c=n(8),l=n(12);c.default.filter("dateFormat",l.k),c.default.filter("timeAgo",l.p),s.a.defaults.baseURL="/"+"/api".replace(/^\/+/,""),Object.defineProperty(c.default.prototype,"$http",{value:s.a,writable:!1}),c.default.mixin({watch:{"$t.locale":function(){this._changeTitle()},"$tt.loading":function(){this._changeTitle()}},mounted:function(){this._changeTitle()},methods:{_changeTitle:function(){var t=r(this);t&&(document.title=l.h+" | "+t)}}});var u=n(46),f=n(298);c.default.use(f.a,{defaultLocale:l.a,locale:Object(l.l)(l.d)||void 0,merge:u.a,translations:{en:{translating:"Translating"},zh:{translating:"翻译中"}}});var p=c.default.translator;p.toggleLocale=function(){p.locale=l.i[p.locale]};var h,d=n(299),g=n(301),v=n(307),m=function(){var t=new d.a;window.__APOLLO_STATE__&&t.restore(window.__APOLLO_STATE__);var e=new g.a({link:Object(v.a)({uri:"/graphql"}),cache:t,ssrMode:!1});return Object.defineProperty(c.default.prototype,"$apollo",{value:e,writable:!1}),e};!function(t){t.TITLE="title",t.CONTENT="content"}(h||(h={}));var _=function(t){return{locale:t,value:"["+t+"]"}},b=function(t){return{locale:t,value:"<p>["+t+"]</p>"}},y=(T={},T[h.TITLE]=l.c.map(_),T[h.CONTENT]=l.c.map(b),T),w=(C={},C[h.TITLE]=_("_end_").value,C[h.CONTENT]=b("<em>end</em>").value,C),O=function(){var t=function(t,n,r){void 0===r&&(r=!0);var o,a=r?h.TITLE:h.CONTENT,i=y[a];if(i.some(function(e){var n=e.value;return-1!==(o=t.indexOf(n))}),-1===o)return t;var c=t.substring(0,o),u=t.indexOf(w[a]),f=-1!==u,p=f?t.substr(u+w[a].length):"",d=f?t.substring(o,u):t.substr(o),g=[];i.forEach(function(t){var e=d.indexOf(t.value);-1!==e&&g.push({locale:t.locale,placehodler:t.value,index:e})}),g.sort(function(t,e){return t.index-e.index});var v,m,_={};g.forEach(function(t,e){var n=t.index+t.placehodler.length,r=e===g.length-1?d.substr(n):d.substring(n,g[e+1].index);e||(v=t.locale,m=r),_[t.locale]=r});var b=n.locale,T=_[b]||_[l.a];if(null==T&&!(T=e.data[d])){T=e.data[d]=" "+n("translating")+"... ",O.loading=!0;var C=s.a.get("/translate",{params:{source:v,sourceText:m}}).then(function(t){var n=t.data,r=n.targetText,o=n.text;e.data[d]=r||o});e.storages.push(C)}return c+(T||m)+p},e={data:window.__TRANSLATE_CACHE__||{},extract:function(){return this.data},storages:[],prefetch:function(){var e=this;return Promise.all(this.storages).then(function(){e.storages.length=0,t.loading=!1})}};return t.cache=e,c.default.util.defineReactive(t,"loading",!1),t}();Object.defineProperty(c.default.prototype,"$tt",{value:O,writable:!1});var T,C,x=n(21),E=n(309);c.default.use(E.a),x.Component.registerHooks(["beforeRouteEnter","beforeRouteLeave","beforeRouteUpdate"]);var R=function(){return new E.a({mode:"history",fallback:!1,scrollBehavior:function(){return{x:0,y:0}},routes:[{path:"/",component:function(){return n.e(1).then(n.bind(null,321))}},{path:"/article/:number",component:function(){return n.e(3).then(n.bind(null,322))}},{path:"/categories",component:function(){return n.e(4).then(n.bind(null,323))}},{path:"/about",component:function(){return n.e(2).then(n.bind(null,324))}},{path:"/archives",component:function(){return n.e(0).then(n.bind(null,325))}}]})},S=n(45),$=this&&this.__assign||Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t},j=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))(function(o,a){function i(t){try{c(r.next(t))}catch(t){a(t)}}function s(t){try{c(r.throw(t))}catch(t){a(t)}}function c(t){t.done?o(t.value):new n(function(e){e(t.value)}).then(i,s)}c((r=r.apply(t,e||[])).next())})},k=this&&this.__generator||function(t,e){function n(t){return function(e){return r([t,e])}}function r(n){if(o)throw new TypeError("Generator is already executing.");for(;c;)try{if(o=1,a&&(i=a[2&n[0]?"return":n[0]?"throw":"next"])&&!(i=i.call(a,n[1])).done)return i;switch(a=0,i&&(n=[0,i.value]),n[0]){case 0:case 1:i=n;break;case 4:return c.label++,{value:n[1],done:!1};case 5:c.label++,a=n[1],n=[0];continue;case 7:n=c.ops.pop(),c.trys.pop();continue;default:if(i=c.trys,!(i=i.length>0&&i[i.length-1])&&(6===n[0]||2===n[0])){c=0;continue}if(3===n[0]&&(!i||n[1]>i[0]&&n[1]<i[3])){c.label=n[1];break}if(6===n[0]&&c.label<i[1]){c.label=i[1],i=n;break}if(i&&c.label<i[2]){c.label=i[2],c.ops.push(n);break}i[2]&&c.ops.pop(),c.trys.pop();continue}n=e.call(t,c)}catch(t){n=[6,t],a=0}finally{o=i=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var o,a,i,s,c={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return s={next:n(0),throw:n(1),return:n(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s};c.default.use(S.a);var P={fetchInfo:function(t,e){var n=t.commit,r=e.apollo,o=e.axios;return j(this,void 0,void 0,function(){var t;return k(this,function(e){switch(e.label){case 0:return[4,Promise.all([o.get("/user"),r.query($({},l.j))])];case 1:return t=e.sent()[0].data,n("SET_USER",t),[2]}})})}},U={SET_PROGRESS:function(t,e){t.progress=e},SET_USER:function(t,e){t.user=e}},I=function(){return new S.a.Store({state:{progress:0,user:null},actions:P,mutations:U})},N=n(27),A=n(312),L=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),H=this&&this.__decorate||function(t,e,n,r){var o,a=arguments.length,i=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(i=(a<3?o(i):a>3?o(e,n,i):o(e,n))||i);return a>3&&i&&Object.defineProperty(e,n,i),i},G=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},D=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return L(e,t),H([Object(x.Prop)({required:!0}),G("design:type",Number)],e.prototype,"progress",void 0),e=H([x.Component],e)}(x.Vue),z=D,B=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:t.$style.progress,style:{width:t.progress+"%"}})},Y=[],J={render:B,staticRenderFns:Y},M=J,q=o,Q=Object(N.a)(z,M,!1,q,null,null),W=Q.exports,F=n(314),V=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),Z=this&&this.__decorate||function(t,e,n,r){var o,a=arguments.length,i=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(i=(a<3?o(i):a>3?o(e,n,i):o(e,n))||i);return a>3&&i&&Object.defineProperty(e,n,i),i},K=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},X=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.routes=[{icon:"home",link:""},{icon:"th",link:"categories"},{icon:"user",link:"about"},{icon:"archive",link:"archives"}],e.REPOSITORY=l.g,e.GITHUB_CLIENT_ID="278664f5464b4177e905",e.GITHUB_OAUTH_CALLBACK="https://blog.1stg.me/api/oauth",e.search=null,e.show=!1,e.toShow=!1,e.collapsing=!1,e.collapseHeight=null,e.timeoutId=null,e}return V(e,t),e.prototype.created=function(){this.search=this.$route.query.search},e.prototype.toggleShow=function(){var t=this;if(!(document.documentElement.clientWidth>=768)){clearTimeout(this.timeoutId);var e=!this.show;this.toShow=e,this.collapsing=!1,e?(this.show=e,this.collapsing=!0,this.timeoutId=setTimeout(function(){t.collapseHeight="187.5px"})):(this.collapseHeight="187.5px",this.timeoutId=setTimeout(function(){t.collapsing=!0,t.collapseHeight=null}))}},e.prototype.transitionEnd=function(){this.collapsing=!1,this.collapseHeight=null,this.show=this.toShow},e.prototype.submit=function(){this.search&&(this.toggleShow(),this.$router.push("/?search="+this.search))},Z([Object(A.a)("progress"),K("design:type",Number)],e.prototype,"progress",void 0),Z([Object(A.a)("user"),K("design:type","function"==typeof(n=void 0!==F.User&&F.User)&&n||Object)],e.prototype,"user",void 0),e=Z([Object(x.Component)({translator:{en:{home:"Home",categories:"Categories",about:"About",archives:"Archives",search_all_articles:"Search All Articles",search:"Search",login:"Login",toggle_navigation:"Toggle Navigation",toggle_locale:"切换至中文"},zh:{home:"首页",categories:"分类",about:"关于",archives:"归档",search_all_articles:"搜索全部文章",search:"搜索",login:"登录",toggle_navigation:"切换导航",toggle_locale:"Switch to English"}},components:{HiProgress:W}})],e);var n}(x.Vue),tt=X,et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-fluid",attrs:{id:"app"}},[n("hi-progress",{attrs:{progress:t.progress}}),n("nav",{staticClass:"fixed-top navbar navbar-expand-md navbar-light bg-light"},[n("div",{staticClass:"container"},[n("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[n("img",{staticClass:"brand-img",attrs:{src:"/logo-30.png",srcset:"/logo-60.png 2x",alt:"1stG"}}),n("span",{class:t.$style.brandName},[n("span",[t._v("1stg")])])]),n("button",{staticClass:"navbar-toggler",attrs:{"aria-label":t.$t("toggle_navigation"),type:"button"},on:{click:t.toggleShow}},[n("span",{staticClass:"navbar-toggler-icon"})]),n("div",{staticClass:"navbar-collapse",class:[t.$style.collapse,{show:t.show},"collaps"+(t.collapsing?"ing":"e")],style:{height:t.collapseHeight},on:{transitionend:t.transitionEnd}},[n("ul",{staticClass:"navbar-nav justify-content-end flex-1 pr-md-4"},t._l(t.routes,function(e){var r=e.icon,o=e.link;e.text;return n("router-link",{key:o,staticClass:"nav-item d-block d-lg-block",class:{active:t.$route.fullPath.split("?")[0]==="/"+o,"d-md-none":!o&&"en"===t.$t.locale},attrs:{to:"/"+o,tag:"li"},nativeOn:{click:function(e){t.toggleShow(e)}}},[n("a",{staticClass:"nav-link"},[n("i",{staticClass:"fa mr-2",class:"fa-"+r}),t._v(t._s(t.$t(o||"home")))])])})),n("form",{staticClass:"form-inline my-2 my-md-0",on:{submit:function(e){e.preventDefault(),t.submit(e)}}},[n("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.search,expression:"search",modifiers:{trim:!0}}],staticClass:"form-control mr-2 flex-1",attrs:{type:"search",placeholder:t.$t("search_all_articles")},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value.trim())},blur:function(e){t.$forceUpdate()}}}),n("button",{staticClass:"btn btn-outline-success",attrs:{type:"submit"}},[t._v(t._s(t.$t("search")))]),t.user?n("a",{staticClass:"ml-2",attrs:{href:t.user.uuid?"https://github.com/login/oauth/authorize?client_id="+t.GITHUB_CLIENT_ID+"&state="+t.user.uuid+"&redirect_uri="+t.GITHUB_OAUTH_CALLBACK+"?path="+t.$route.fullPath:t.user.websiteUrl||t.user.url,target:t.user.uuid?"_self":"_blank",rel:"noopener"}},[t.user.uuid?[t._v(t._s(t.$t("login")))]:n("img",{staticClass:"user-avatar",attrs:{src:t.user.avatarUrl+"&s=30",srcset:t.user.avatarUrl+"&s=60 2x"}})],2):t._e()])])],1)]),n("div",{class:t.$style.main},[n("router-view",{staticClass:"container py-4"})],1),n("footer",{staticClass:"row py-4 bg-light"},[n("div",{staticClass:"container d-flex"},[n("div",{staticClass:"flex-1"},[n("a",{staticClass:"ml-2",attrs:{href:"https://www.1stg.me"}},[t._v("© 1stg.me")]),n("a",{staticClass:"text-secondary ml-2",attrs:{href:"https://GitHub.com/"+t.REPOSITORY.owner+"/"+t.REPOSITORY.name}},[n("div",{staticClass:"sr-only"},[t._v(t._s(t.REPOSITORY.owner+"/"+t.REPOSITORY.name))]),n("i",{staticClass:"fa fa-github",attrs:{"aria-hidden":"true"}})]),n("a",{staticClass:"text-secondary ml-2",attrs:{href:"javascript:;",title:t.$t("toggle_locale")}},[n("div",{staticClass:"sr-only"},[t._v(t._s(t.$t("toggle_locale")))]),n("i",{staticClass:"fa fa-globe",attrs:{"aria-hidden":"true"},on:{click:t.$t.toggleLocale}})])]),t._m(0)])])],1)},nt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("i",{staticClass:"fa fa-code mr-2"}),t._v("by"),n("a",{staticClass:"mx-2",attrs:{href:"https://GitHub.com/JounQin"}},[t._v("JounQin")]),t._v("with"),n("i",{staticClass:"fa fa-heart ml-2"})])}],rt={render:et,staticRenderFns:nt},ot=rt,at=a,it=Object(N.a)(tt,ot,!1,at,null,null),st=it.exports;Object.defineProperty(c.default.prototype,"$utils",{value:{invertColor:l.n},writable:!1});var ct=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))(function(o,a){function i(t){try{c(r.next(t))}catch(t){a(t)}}function s(t){try{c(r.throw(t))}catch(t){a(t)}}function c(t){t.done?o(t.value):new n(function(e){e(t.value)}).then(i,s)}c((r=r.apply(t,e||[])).next())})},lt=this&&this.__generator||function(t,e){function n(t){return function(e){return r([t,e])}}function r(n){if(o)throw new TypeError("Generator is already executing.");for(;c;)try{if(o=1,a&&(i=a[2&n[0]?"return":n[0]?"throw":"next"])&&!(i=i.call(a,n[1])).done)return i;switch(a=0,i&&(n=[0,i.value]),n[0]){case 0:case 1:i=n;break;case 4:return c.label++,{value:n[1],done:!1};case 5:c.label++,a=n[1],n=[0];continue;case 7:n=c.ops.pop(),c.trys.pop();continue;default:if(i=c.trys,!(i=i.length>0&&i[i.length-1])&&(6===n[0]||2===n[0])){c=0;continue}if(3===n[0]&&(!i||n[1]>i[0]&&n[1]<i[3])){c.label=n[1];break}if(6===n[0]&&c.label<i[1]){c.label=i[1],i=n;break}if(i&&c.label<i[2]){c.label=i[2],c.ops.push(n);break}i[2]&&c.ops.pop(),c.trys.pop();continue}n=e.call(t,c)}catch(t){n=[6,t],a=0}finally{o=i=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var o,a,i,s,c={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return s={next:n(0),throw:n(1),return:n(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s},ut=this,ft=function(){var t=R(),e=I();return{app:new c.default({router:t,store:e,render:function(t){return t(st)}}),createApollo:m,router:t,store:e}}(),pt=ft.app,ht=ft.createApollo,dt=ft.router,gt=ft.store,vt=ht();pt.$watch("$t.locale",function(t){Object(l.o)(l.d,t,1/0,"/")}),pt.$watch("$tt.loading",function(t){t&&c.default.nextTick(function(){O.cache.prefetch()})}),gt.replaceState(window.__INITIAL_STATE__);dt.onReady(function(){dt.beforeResolve(function(t,e,n){return ct(ut,void 0,void 0,function(){var r,o,a,i;return lt(this,function(l){switch(l.label){case 0:return r=dt.getMatchedComponents(t),(o=dt.getMatchedComponents(e))?(a=!1,i=r.filter(function(t,e){return a||(a=o[e]!==t)}),gt.commit("SET_PROGRESS",70),i.length?[4,Promise.all(i.map(function(e){var n=e.options,r=e.asyncData,o=void 0===r?n&&n.asyncData:r;return o&&o({apollo:vt,axios:s.a,route:t,store:gt,translate:O,translator:c.default.translator})}))]:[3,3]):[2,n()];case 1:return l.sent(),[4,O.cache.prefetch()];case 2:l.sent(),l.label=3;case 3:return n(),gt.commit("SET_PROGRESS",100),setTimeout(function(){gt.commit("SET_PROGRESS",0)},500),[2]}})})}),pt.$mount("#app")}),("https:"===location.protocol||["127.0.0.1","localhost"].includes(location.hostname))&&navigator.serviceWorker&&navigator.serviceWorker.register("/service-worker.js")}},[48]);