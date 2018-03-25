module.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n.w={},n(n.s=35)}([function(e,t,n){"use strict";var r=n(18);n.d(t,"Locale",function(){return r.a});n(17),n(16),n(15),n(14),n(13)},function(e,t){e.exports=require("graphql-tag")},function(e,t){e.exports=require("axios")},function(e,t){e.exports=require("koa-session")},function(e,t){e.exports=require("koa-compose")},function(e,t){e.exports=require("koa")},function(e,t){e.exports=require("debug")},function(e,t){e.exports=require("date-fns/locale")},function(e,t){e.exports=require("date-fns")},function(e,t){e.exports=require("path")},function(e,t){e.exports=require("koa-static-cache")},function(e,t){e.exports=require("accept-language")},function(e,t){e.exports=require("fs")},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t,n){"use strict";var r,o;n.d(t,"a",function(){return r}),function(e){e.EN="en",e.ZH="zh"}(r||(r={})),function(e){e.user="user",e.organization="organization"}(o||(o={}))},function(e,t){e.exports=require("invert-color")},function(e,t){e.exports=require("qs")},function(e,t){e.exports=require("google-translate-api")},function(e,t){e.exports=require("crypto")},function(e,t){e.exports=require("uuid")},function(e,t){e.exports=require("node-fetch")},function(e,t){e.exports=require("koa-router")},function(e,t){e.exports=require("koa-bodyparser")},function(e,t){e.exports=require("apollo-link-http")},function(e,t){e.exports=require("apollo-client")},function(e,t){e.exports=require("apollo-cache-inmemory")},function(e,t){e.exports=require("vue-server-renderer")},function(e,t){e.exports=require("lru-cache")},function(e,t){e.exports=require("koa-logger")},function(e,t){e.exports=require("koa-compress")},function(e,t){e.exports=require("koa-better-http-proxy")},function(e,t,n){"use strict";n.r(t);var r,o,a=n(12),i=n.n(a),u=n(11),c=n.n(u),s=n(6),l=n.n(s),p=n(5),f=n.n(p),h=n(34),d=n.n(h),v=n(4),g=n.n(v),b=n(33),x=n.n(b),y=n(32),w=n.n(y),E=n(3),T=n.n(E),m=n(10),O=n.n(m),_=n(31),q=n.n(_),k=n(30),I=n(9),A=n.n(I),L=+process.env.PORT||7e3,S=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return A.a.resolve.apply(A.a,[process.cwd()].concat(e))},N=require,C=n(29),P=n(28),R=n.n(P),G=n(27),j=n(2),H=n.n(j),U=n(1),B=n.n(U),D=n(26),M=n.n(D),z=n(25),K=n.n(z),Y=n(24),F=n.n(Y),Z=n(23),$=n.n(Z),W=n(22),X=n.n(W),J=n(21),Q=n.n(J),V=n(20),ee=n.n(V),te=n(19),ne=(n.n(te).a,n(0)),re=ne.Locale.EN,oe=ne.Locale.ZH,ae=((r={})[re]=oe,r[oe]=re,r),ie=(ne.Locale.EN,[ne.Locale.EN,ne.Locale.ZH]),ue=(n(8),n(7)),ce=((o={})[ne.Locale.EN]=ue.enUS,o[ne.Locale.ZH]=ue.zhCN,Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}),se=function(e,t,n,r){return new(n||(n=Promise))(function(o,a){function i(e){try{c(r.next(e))}catch(e){a(e)}}function u(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(i,u)}c((r=r.apply(e,t||[])).next())})},le=function(e,t){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function u(a){return function(u){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=r[2&a[0]?"return":a[0]?"throw":"next"])&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[0,o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}},pe=function(e,t){return e>t?1:e<t?-1:0},fe={zh:"zh-cn",en:"en"},he=function(e,t){return se(void 0,void 0,void 0,function(){var t,n,r,o,a,i,u,c;return le(this,function(s){switch(s.label){case 0:return t=e.query,n=t.source,(r=t.sourceText)?process.env.GOOGLE_TRANSLATE_ENABLED?[4,Q()(r,{from:fe[n],to:ae[n]})]:[3,2]:[2];case 1:return o=s.sent(),e.body=Object.assign(o,{text:o.text.replace(/<code>([^<>]+)<\/\w+> Code>/g,"<code>$1</code>").replace(/<\/g> -([^<>]+)>/g,"</g-$1>").replace(/<\/ ([^<>]+)>/g,"</$1>")}),[2];case 2:return l={source:n||e.cookies.get("LOCALE_COOKIE"),sourceText:r},a=ce({Action:"TextTranslate",Region:"ap-shanghai",SecretId:process.env.TENCENT_TRANSLATE_API_SECRET_ID,SignatureMethod:"HmacSHA256",Timestamp:Math.ceil(Date.now()/1e3),Nonce:Math.ceil(Math.random()*Number.MAX_SAFE_INTEGER)},l,{target:ae[l.source]}),i=X.a.createHmac("sha256",process.env.TENCENT_TRANSLATE_API_SECRET_KEY).update("GETtmt.api.qcloud.com/v2/index.php?"+ee.a.stringify(a,{encode:!1,sort:pe})).digest("base64"),[4,H.a.get("https://tmt.api.qcloud.com/v2/index.php",{params:Object.assign(a,{Signature:i})})];case 3:return u=s.sent().data,c=u.targetText,e.body=ce({},u,{targetText:c&&c.replace(/\<([^<>]+)\>/g,function(e,t){var n=(t=t.toLowerCase().replace(/ /g,"").replace(/\/+/g,"/")).indexOf("/");return-1!==n&&(t=t.substr(n)),"<"+t+">"})}),[2]}var l})})},de=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},ve=function(e,t,n,r){return new(n||(n=Promise))(function(o,a){function i(e){try{c(r.next(e))}catch(e){a(e)}}function u(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(i,u)}c((r=r.apply(e,t||[])).next())})},ge=function(e,t){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function u(a){return function(u){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=r[2&a[0]?"return":a[0]?"throw":"next"])&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[0,o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}};global.fetch=F.a;var be=l()("1stg:server:router"),xe=new K.a({prefix:"/api"}),ye=["GITHUB_EXCLUDED_LABELS","GITHUB_EXCLUDED_REPOSITORY_OWNERS"],we=["GITHUB_REPOSITORY_OWNER","GITHUB_REPOSITORY_OWNER_TYPE","GITHUB_REPOSITORY_NAME","GITHUB_CLIENT_ID","GITHUB_OAUTH_CALLBACK"].concat(ye);xe.get("/fetchInfo",function(e,t){var n,r=e.session.user;r||(n=$()(),e.session.uuid=n),e.body={user:r||{uuid:n},envs:we.reduce(function(e,t){var n,r=process.env[t];return ye.includes(t)&&(r=r?r.split(","):[]),Object.assign(e,((n={})[t]=process.env[t],n))},{})}}).get("/oauth",function(e,t){return ve(void 0,void 0,void 0,function(){var t,n,r,o,a,i,u;return ge(this,function(c){switch(c.label){case 0:return t=e.query,n=t.code,r=t.path,(o=t.state)&&o===e.session.uuid?[4,H.a.post("https://github.com/login/oauth/access_token",{client_id:process.env.GITHUB_CLIENT_ID,client_secret:process.env.GITHUB_CLIENT_SECRET,code:n,state:o},{headers:{Accept:"application/json"}})]:[2,e.throw("invalid oauth redirect")];case 1:return(a=c.sent().data).error?[2,e.throw(a)]:(i=a.access_token,e.session.token=i,[4,new R.a({link:Object(G.createHttpLink)({uri:"https://api.github.com/graphql",headers:{Authorization:"bearer "+i}}),cache:new C.InMemoryCache}).query({query:B()(Ee||(Ee=de(["\n        query {\n          viewer {\n            avatarUrl\n            id\n            login\n            name\n            url\n            websiteUrl\n          }\n        }\n      "],["\n        query {\n          viewer {\n            avatarUrl\n            id\n            login\n            name\n            url\n            websiteUrl\n          }\n        }\n      "])))})]);case 2:return u=c.sent().data,e.session.user=u.viewer,e.redirect(""+r.replace(/ /g,"%2B")),[2]}})})}).get("/translate",he);var Ee,Te=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},me=function(e,t,n,r){return new(n||(n=Promise))(function(o,a){function i(e){try{c(r.next(e))}catch(e){a(e)}}function u(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(i,u)}c((r=r.apply(e,t||[])).next())})},Oe=function(e,t){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function u(a){return function(u){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=r[2&a[0]?"return":a[0]?"throw":"next"])&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[0,o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}};c.a.languages(ie);var _e,qe=l()("1stg:server"),ke=new f.a;ke.keys=(process.env.APP_KEYS||"").split(",");var Ie=i.a.readFileSync(S("dist/template.html"),"utf-8"),Ae=[w()(),function(e,t){return me(void 0,void 0,void 0,function(){var n,r,o,a,i,u;return Oe(this,function(s){switch(s.label){case 0:return n=e.url,"GET"!==e.method||n.lastIndexOf(".")>n.lastIndexOf("/")||!["*/*","text/html"].find(function(t){return e.get("Accept").includes(t)})||/^\/(api|graphql)($|\/)/.test(e.url)?[2,t()]:[4,void 0];case 1:return s.sent(),r=Date.now(),o=e.cookies.get("LOCALE_COOKIE"),a=o||c.a.get(e.get("Accept-Language")),o||e.cookies.set("LOCALE_COOKIE",a,{httpOnly:!1,path:"/",expires:new Date("Fri, 31 Dec 9999 23:59:59 GMT")}),i={ctx:e,locale:a,title:"1stG Blog"},e.respond=!1,e.status=200,e.set({"Content-Type":"text/html"}),u=e.res,_e.renderToStream(i).on("error",function(t){switch(e.status=t.status||500){case 302:return e.set({Location:t.url}),u.end();case 401:return e.redirect("/login?next="+n),u.end();case 404:return u.end("404 | Page Not Found");default:u.end("500 | Internal Server Error"),qe("error during render : "+n),console.error(t.stack)}}).on("end",function(){qe("whole request: "+(Date.now()-r)+"ms")}).pipe(u),[2]}})})}],Le=O()("public",{maxAge:31536e6}),Se=T()({},ke);i.a,Ne=N(S("dist/vue-ssr-server-bundle.json")),Ce={clientManifest:N(S("dist/vue-ssr-client-manifest.json"))},_e=Object(k.createBundleRenderer)(Ne,Te({},Ce,{template:Ie,inject:!1,cache:q()({max:1e3,maxAge:9e5}),basedir:S("dist/static"),runInNewContext:!1}));var Ne,Ce,Pe={};Ae.splice.apply(Ae,[1,0,x()(),Le,O()("dist/static",{maxAge:31536e6},Pe),Se].concat(function(e){var t=!!e,n=[M()(),xe.routes(),xe.allowedMethods()];if(e||((e=new f.a).keys=e.keys=(process.env.APP_KEYS||"").split(","),n.unshift(T()({},e))),t)return n;e.use(g()(n)),e.listen(L+1,"localhost",function(){be("Router server is now running at %s:%s","localhost",L+1)})}(ke))),Pe["/service-worker.js"].maxAge=0,Ae.push(d()("api.github.com/graphql",{filter:function(e){return"/graphql"===e.url},https:!0,proxyReqOptDecorator:function(e,t){return e.headers.Authorization="bearer "+(t.session.token||process.env.GITHUB_TOKEN),e}})),ke.use(g()(Ae)),ke.listen(L,"localhost",function(){qe("Server is now running at %s:%s","localhost",L)})}]);