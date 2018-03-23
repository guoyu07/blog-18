module.exports=function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t.w={},t(t.s=28)}([function(e,n){e.exports=require("graphql-tag")},function(e,n){e.exports=require("axios")},function(e,n){e.exports=require("koa-session")},function(e,n){e.exports=require("koa-compose")},function(e,n){e.exports=require("koa")},function(e,n){e.exports=require("debug")},function(e,n){e.exports=require("date-fns/locale")},function(e,n){e.exports=require("date-fns")},function(e,n){e.exports=require("path")},function(e,n){e.exports=require("koa-static-cache")},function(e,n){e.exports=require("accept-language")},function(e,n){e.exports=require("fs")},function(e,n){e.exports=require("invert-color")},function(e,n){e.exports=require("qs")},function(e,n){e.exports=require("google-translate-api")},function(e,n){e.exports=require("crypto")},function(e,n){e.exports=require("uuid")},function(e,n){e.exports=require("node-fetch")},function(e,n){e.exports=require("koa-router")},function(e,n){e.exports=require("koa-bodyparser")},function(e,n){e.exports=require("apollo-link-http")},function(e,n){e.exports=require("apollo-client")},function(e,n){e.exports=require("apollo-cache-inmemory")},function(e,n){e.exports=require("vue-server-renderer")},function(e,n){e.exports=require("lru-cache")},function(e,n){e.exports=require("koa-logger")},function(e,n){e.exports=require("koa-compress")},function(e,n){e.exports=require("koa-better-http-proxy")},function(e,n,t){"use strict";t.r(n);var r,o=t(11),a=t.n(o),i=t(10),u=t.n(i),c=t(5),s=t.n(c),l=t(4),p=t.n(l),f=t(27),h=t.n(f),d=t(3),b=t.n(d),g=t(26),v=t.n(g),y=t(25),x=t.n(y),w=t(2),m=t.n(w),q=t(9),E=t.n(q),O=t(24),k=t.n(O),T=t(23),_=t(8),S=t.n(_),A=+process.env.PORT||7e3,N=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return S.a.resolve.apply(S.a,[process.cwd()].concat(e))},j=require,P=t(22),C=t(21),I=t.n(C),L=t(20),R=t(1),G=t.n(R),H=t(0),M=t.n(H),D=t(19),$=t.n(D),U=t(18),z=t.n(U),B=t(17),K=t.n(B),F=t(16),Y=t.n(F),Z=t(15),X=t.n(Z),J=t(14),Q=t.n(J),W=t(13),V=t.n(W);"bug,feature,greenkeeper,roadmap".split(","),(process.env.GITHUB_EXCLUDED_REPOSITORY_OWNERS||"").split(",");!function(e){e.user="user",e.organization="organization"}(r||(r={}));r.user;var ee,ne={name:"blog",owner:"JounQin"};!function(e){e.EN="en",e.ZH="zh"}(ee||(ee={}));var te,re,oe,ae=ee.EN,ie=ee.ZH,ue=((te={})[ae]=ie,te[ie]=ae,te),ce=(ee.EN,[ee.EN,ee.ZH]),se=function(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e},le=(Object.assign,M()(re||(re=se(["\n    query($name: String!, $owner: String!) {\n      repository(name: $name, owner: $owner) {\n        labels(first: 100) {\n          nodes {\n            color\n            id\n            name\n          }\n        }\n      }\n    }\n  "],["\n    query($name: String!, $owner: String!) {\n      repository(name: $name, owner: $owner) {\n        labels(first: 100) {\n          nodes {\n            color\n            id\n            name\n          }\n        }\n      }\n    }\n  "]))),t(12)),pe=(t.n(le).a,t(7),t(6)),fe=((oe={})[ee.EN]=pe.enUS,oe[ee.ZH]=pe.zhCN,Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e}),he=function(e,n,t,r){return new(t||(t=Promise))(function(o,a){function i(e){try{c(r.next(e))}catch(e){a(e)}}function u(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){e.done?o(e.value):new t(function(n){n(e.value)}).then(i,u)}c((r=r.apply(e,n||[])).next())})},de=function(e,n){var t,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function u(a){return function(u){return function(a){if(t)throw new TypeError("Generator is already executing.");for(;i;)try{if(t=1,r&&(o=r[2&a[0]?"return":a[0]?"throw":"next"])&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[0,o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=n.call(e,i)}catch(e){a=[6,e],r=0}finally{t=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}},be=process.env,ge=be.GOOGLE_TRANSLATE_ENABLED,ve=be.TENCENT_TRANSLATE_API_SECRET_ID,ye=be.TENCENT_TRANSLATE_API_SECRET_KEY,xe={Action:"TextTranslate",Region:"ap-shanghai",SecretId:ve,SignatureMethod:"HmacSHA256"},we=function(e,n){return e>n?1:e<n?-1:0},me={zh:"zh-cn",en:"en"},qe=function(e,n){return he(void 0,void 0,void 0,function(){var n,t,r,o,a,i,u,c;return de(this,function(s){switch(s.label){case 0:return n=e.query,t=n.source,(r=n.sourceText)?ge?[4,Q()(r,{from:me[t],to:ue[t]})]:[3,2]:[2];case 1:return o=s.sent(),e.body=Object.assign(o,{text:o.text.replace(/<\/ ([^<>]+)>/g,"</$1>")}),[2];case 2:return l={source:t||e.cookies.get("LOCALE_COOKIE"),sourceText:r},a=fe({},xe,{Timestamp:Math.ceil(Date.now()/1e3),Nonce:Math.ceil(Math.random()*Number.MAX_SAFE_INTEGER)},l,{target:ue[l.source]}),i=X.a.createHmac("sha256",ye).update("GETtmt.api.qcloud.com/v2/index.php?"+V.a.stringify(a,{encode:!1,sort:we})).digest("base64"),[4,G.a.get("https://tmt.api.qcloud.com/v2/index.php",{params:Object.assign(a,{Signature:i})})];case 3:return u=s.sent().data,c=u.targetText,e.body=fe({},u,{targetText:c&&c.replace(/\<([^<>]+)\>/g,function(e,n){var t=(n=n.toLowerCase().replace(/ /g,"").replace(/\/+/g,"/")).indexOf("/");return-1!==t&&(n=n.substr(t)),"<"+n+">"})}),[2]}var l})})},Ee=function(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e},Oe=function(e,n,t,r){return new(t||(t=Promise))(function(o,a){function i(e){try{c(r.next(e))}catch(e){a(e)}}function u(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){e.done?o(e.value):new t(function(n){n(e.value)}).then(i,u)}c((r=r.apply(e,n||[])).next())})},ke=function(e,n){var t,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function u(a){return function(u){return function(a){if(t)throw new TypeError("Generator is already executing.");for(;i;)try{if(t=1,r&&(o=r[2&a[0]?"return":a[0]?"throw":"next"])&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[0,o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=n.call(e,i)}catch(e){a=[6,e],r=0}finally{t=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}};global.fetch=K.a;var Te=process.env,_e=Te.APP_KEYS,Se=Te.GITHUB_CLIENT_SECRET,Ae=s()("1stg:server:router"),Ne=new z.a({prefix:"/api"});Ne.get("/user",function(e,n){var t,r=e.session.user;r||(t=Y()(),e.session.uuid=t),e.body=r||{uuid:t}}).get("/oauth",function(e,n){return Oe(void 0,void 0,void 0,function(){var n,t,r,o,a,i,u;return ke(this,function(c){switch(c.label){case 0:return n=e.query,t=n.code,r=n.path,(o=n.state)&&o===e.session.uuid?[4,G.a.post("https://github.com/login/oauth/access_token",{client_id:"278664f5464b4177e905",client_secret:Se,code:t,state:o},{headers:{Accept:"application/json"}})]:[2,e.throw("invalid oauth redirect")];case 1:return(a=c.sent().data).error?[2,e.throw(a)]:(i=a.access_token,e.session.token=i,[4,new I.a({link:Object(L.createHttpLink)({uri:"https://api.github.com/graphql",headers:{Authorization:"bearer "+i}}),cache:new P.InMemoryCache}).query({query:M()(je||(je=Ee(["\n        query {\n          viewer {\n            avatarUrl\n            id\n            login\n            name\n            url\n            websiteUrl\n          }\n        }\n      "],["\n        query {\n          viewer {\n            avatarUrl\n            id\n            login\n            name\n            url\n            websiteUrl\n          }\n        }\n      "])))})]);case 2:return u=c.sent().data,e.session.user=u.viewer,e.redirect(""+r.replace(/ /g,"%2B")),[2]}})})}).get("/translate",qe);var je,Pe=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},Ce=function(e,n,t,r){return new(t||(t=Promise))(function(o,a){function i(e){try{c(r.next(e))}catch(e){a(e)}}function u(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){e.done?o(e.value):new t(function(n){n(e.value)}).then(i,u)}c((r=r.apply(e,n||[])).next())})},Ie=function(e,n){var t,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function u(a){return function(u){return function(a){if(t)throw new TypeError("Generator is already executing.");for(;i;)try{if(t=1,r&&(o=r[2&a[0]?"return":a[0]?"throw":"next"])&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[0,o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=n.call(e,i)}catch(e){a=[6,e],r=0}finally{t=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}};u.a.languages(ce);var Le,Re=process.env,Ge=Re.APP_KEYS,He=Re.GITHUB_TOKEN,Me=s()("1stg:server"),De=new p.a;De.keys=Ge.split(",");var $e=a.a.readFileSync(N("dist/template.html"),"utf-8"),Ue=[x()(),function(e,n){return Ce(void 0,void 0,void 0,function(){var t,r,o,a,i,c;return Ie(this,function(s){switch(s.label){case 0:return t=e.url,"GET"!==e.method||t.lastIndexOf(".")>t.lastIndexOf("/")||!["*/*","text/html"].find(function(n){return e.get("Accept").includes(n)})||/^\/(api|graphql)($|\/)/.test(e.url)?[2,n()]:[4,void 0];case 1:return s.sent(),r=Date.now(),o=e.cookies.get("LOCALE_COOKIE"),a=o||u.a.get(e.get("Accept-Language")),o||e.cookies.set("LOCALE_COOKIE",a,{httpOnly:!1,path:"/",expires:new Date("Fri, 31 Dec 9999 23:59:59 GMT")}),i={ctx:e,locale:a,title:"1stG Blog"},e.respond=!1,e.status=200,e.set({"Content-Type":"text/html"}),c=e.res,Le.renderToStream(i).on("error",function(n){switch(e.status=n.status||500){case 302:return e.set({Location:n.url}),c.end();case 401:return e.redirect("/login?next="+t),c.end();case 404:return c.end("404 | Page Not Found");default:c.end("500 | Internal Server Error"),Me("error during render : "+t),console.error(n.stack)}}).on("end",function(){Me("whole request: "+(Date.now()-r)+"ms")}).pipe(c),[2]}})})}],ze=E()("public",{maxAge:31536e6}),Be=m()({},De);a.a,Ke=j(N("dist/vue-ssr-server-bundle.json")),Fe={clientManifest:j(N("dist/vue-ssr-client-manifest.json"))},Le=Object(T.createBundleRenderer)(Ke,Pe({},Fe,{template:$e,inject:!1,cache:k()({max:1e3,maxAge:9e5}),basedir:N("dist/static"),runInNewContext:!1}));var Ke,Fe,Ye={};Ue.splice.apply(Ue,[1,0,v()(),ze,E()("dist/static",{maxAge:31536e6},Ye),Be].concat(function(e){var n=!!e,t=[$()(),Ne.routes(),Ne.allowedMethods()];if(e||((e=new p.a).keys=e.keys=_e.split(","),t.unshift(m()({},e))),n)return t;e.use(b()(t)),e.listen(A+1,"localhost",function(){Ae("Router server is now running at %s:%s","localhost",A+1)})}(De))),Ye["/service-worker.js"].maxAge=0,Ue.push(h()("api.github.com/graphql",{filter:function(e){return"/graphql"===e.url},https:!0,proxyReqOptDecorator:function(e,n){return e.headers.Authorization="bearer "+(n.session.token||He),e}})),De.use(b()(Ue)),De.listen(A,"localhost",function(){Me("Server is now running at %s:%s","localhost",A)})}]);