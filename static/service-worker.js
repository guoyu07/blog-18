"use strict";var precacheConfig=[["/0.76060dbc7f3728b78e75.js","a849818470d42e722b6d7f56d34ed144"],["/06eb177ee6c1960bcd79f1cf8c812000.woff","06eb177ee6c1960bcd79f1cf8c812000"],["/0a06ba1bdf385495f2679324cfbedd13.woff","0a06ba1bdf385495f2679324cfbedd13"],["/1.62eb8b1663f67ce5365c.js","41a2b488155e1ccc3450689ea020ce10"],["/2.7997efcdfaad418e6f84.js","6e2c9b26613812ed5c6afbf7a69083e8"],["/3.2af4f15703c6a5c894f9.js","15f6e968539e5a14462012971426c498"],["/4.9dcfb17d465022fbfe2a.js","f14ef05082673c82711bda462cfca166"],["/5.7a1e429264f19d4eb7b0.js","fd8e88e18a6c2ef20b1757fd470d82a1"],["/62fb51e9e645f63599238881b9de15dd.woff","62fb51e9e645f63599238881b9de15dd"],["/674f50d287a8c48dc19ba404d20fe713.eot","674f50d287a8c48dc19ba404d20fe713"],["/6ea8380326f67e10380953b188d96a2b.woff","6ea8380326f67e10380953b188d96a2b"],["/752c20224144760a496fb9e19a62f616.woff","752c20224144760a496fb9e19a62f616"],["/760bd83ee04dff470e0277f3eb7deebe.svg","760bd83ee04dff470e0277f3eb7deebe"],["/7d718d7299ab7f9fab17d7d4f13ded57.woff2","7d718d7299ab7f9fab17d7d4f13ded57"],["/7fbbfd1610770d594aef639cfefdd0b0.woff2","7fbbfd1610770d594aef639cfefdd0b0"],["/96759e32fdc800c78b527a3e53fe2be6.woff","96759e32fdc800c78b527a3e53fe2be6"],["/__non_ssr_page__.html","22e8930a9da886407b14e90cbb4f71f9"],["/af7ae505a9eed503f8b8e6982036873e.woff2","af7ae505a9eed503f8b8e6982036873e"],["/app.b4c22356aed0d38bcaeb4f7f5ab4db2f.css","dd2720916bce0dc48465db43feaa9d3c"],["/app.d0c6bd7fc703cb95af7d.js","5bcbd4b41ead208a6f1c0f2521ae1fcd"],["/app.fd3ec2c492deb7052bc6ad57ac9a9c25.css","fd3ec2c492deb7052bc6ad57ac9a9c25"],["/b06871f281fee6b241d60582ae9369b9.ttf","b06871f281fee6b241d60582ae9369b9"],["/b45e52f342dc29c8553f51a99f924871.woff2","b45e52f342dc29c8553f51a99f924871"],["/ba2452bdc790a4fee05202eac3c092b3.woff","ba2452bdc790a4fee05202eac3c092b3"],["/bbbd26aeee9c5b967e35933bce02d358.woff2","bbbd26aeee9c5b967e35933bce02d358"],["/c4082958a18f04bd32a3d3e1f5e390a5.woff","c4082958a18f04bd32a3d3e1f5e390a5"],["/c66215e09d2420885ad1a1f3eb2bac37.woff2","c66215e09d2420885ad1a1f3eb2bac37"],["/d79dd0661ba130ec7a7e7c060fcb7e09.woff","d79dd0661ba130ec7a7e7c060fcb7e09"],["/e792d6c62329e025ca1cbea793ba8de5.woff","e792d6c62329e025ca1cbea793ba8de5"],["/ef884f11c6adb5df51c446911612e7af.woff2","ef884f11c6adb5df51c446911612e7af"],["/f1a4a058fbba1e35a406188ae7eddaf8.woff2","f1a4a058fbba1e35a406188ae7eddaf8"],["/f2de2c6ec69b0c11f1bc44c5348c2f35.woff2","f2de2c6ec69b0c11f1bc44c5348c2f35"],["/f8028e61362a54aa64dcb26e8063d0d7.woff2","f8028e61362a54aa64dcb26e8063d0d7"],["/fd67cf72cde7716bdadf8a3992b37fa2.woff2","fd67cf72cde7716bdadf8a3992b37fa2"],["/fee66e712a8a08eef5805a46892932ad.woff","fee66e712a8a08eef5805a46892932ad"],["/manifest.ff39d7251e49c6d9ed73.js","ca6d0539cdd0d082667408c33d57b2e4"],["/vendors.565f882760c8243ec482.js","7de5b510050e1543c7b42aeff6ecee26"]],cacheName="sw-precache-v3-blog-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,n,r){var o=new URL(e);return r&&o.pathname.match(r)||(o.search+=(o.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),o.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],r=new URL(t,self.location),o=createCacheKey(r,hashParamName,n,/./);return[r.toString(),o]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var r=new Request(n,{credentials:"same-origin"});return fetch(r).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,"index.html"),t=urlsToCacheKeys.has(n));0,t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}}),function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).toolbox=e()}}(function(){return function e(t,n,r){function o(c,i){if(!n[c]){if(!t[c]){var s="function"==typeof require&&require;if(!i&&s)return s(c,!0);if(a)return a(c,!0);var f=new Error("Cannot find module '"+c+"'");throw f.code="MODULE_NOT_FOUND",f}var u=n[c]={exports:{}};t[c][0].call(u.exports,function(e){var n=t[c][1][e];return o(n||e)},u,u.exports,e,t,n,r)}return n[c].exports}for(var a="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){function r(e,t){((t=t||{}).debug||s.debug)&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||s.cache.name,caches.open(t)}function a(e,t,n){var o=e.url,a=n.maxAgeSeconds,c=n.maxEntries,i=n.name,s=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+a),f.getDb(i).then(function(e){return f.setTimestampForUrl(e,o,s)}).then(function(e){return f.expireEntries(e,c,a,s)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function c(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}var i,s=e("./options"),f=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:function(e,t){var n=(t=t||{}).successResponses||s.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||s.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&function(e,t,n){var r=a.bind(null,e,t,n);i=i?i.then(r):r()}(e,n,r)})}),r.clone()})},openCache:o,renameCache:function(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})},cache:function(e,t){return o(t).then(function(t){return t.add(e)})},uncache:function(e,t){return o(t).then(function(t){return t.delete(e)})},precache:function(e){e instanceof Promise||c(e),s.preCacheItems=s.preCacheItems.concat(e)},validatePrecacheInput:c,isResponseFresh:function(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r&&new Date(r).getTime()+1e3*t<n)return!1}return!0}}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){var r="sw-toolbox-",o=1,a="store",c="url",i="timestamp",s={};t.exports={getDb:function(e){return e in s||(s[e]=function(e){return new Promise(function(t,n){var s=indexedDB.open(r+e,o);s.onupgradeneeded=function(){s.result.createObjectStore(a,{keyPath:c}).createIndex(i,i,{unique:!1})},s.onsuccess=function(){t(s.result)},s.onerror=function(){n(s.error)}})}(e)),s[e]},setTimestampForUrl:function(e,t,n){return new Promise(function(r,o){var c=e.transaction(a,"readwrite");c.objectStore(a).put({url:t,timestamp:n}),c.oncomplete=function(){r(e)},c.onabort=function(){o(c.error)}})},expireEntries:function(e,t,n,r){return function(e,t,n){return t?new Promise(function(r,o){var s=1e3*t,f=[],u=e.transaction(a,"readwrite"),h=u.objectStore(a);h.index(i).openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-s>t.value[i]){var r=t.value[c];f.push(r),h.delete(r),t.continue()}},u.oncomplete=function(){r(f)},u.onabort=o}):Promise.resolve([])}(e,n,r).then(function(n){return function(e,t){return t?new Promise(function(n,r){var o=[],s=e.transaction(a,"readwrite"),f=s.objectStore(a),u=f.index(i),h=u.count();u.count().onsuccess=function(){var e=h.result;e>t&&(u.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var a=r.value[c];o.push(a),f.delete(a),e-o.length>t&&r.continue()}})},s.oncomplete=function(){n(o)},s.onabort=r}):Promise.resolve([])}(e,t).then(function(e){return n.concat(e)})})}}},{}],3:[function(e,t,n){function r(e){return e.reduce(function(e,t){return e.concat(t)},[])}e("serviceworker-cache-polyfill");var o=e("./helpers"),a=e("./router"),c=e("./options");t.exports={fetchListener:function(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))},activateListener:function(e){o.debug("activate event fired");var t=c.cache.name+"$$$inactive$$$";e.waitUntil(o.renameCache(t,c.cache.name))},installListener:function(e){var t=c.cache.name+"$$$inactive$$$";o.debug("install event fired"),o.debug("creating cache ["+t+"]"),e.waitUntil(o.openCache({cache:{name:t}}).then(function(e){return Promise.all(c.preCacheItems).then(r).then(o.validatePrecacheInput).then(function(t){return o.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){var r=new URL("./",self.location).pathname,o=e("path-to-regexp"),a=function(e,t,n,a){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=r+t),this.keys=[],this.regexp=o(t,this.keys)),this.method=e,this.options=a,this.handler=n};a.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=a},{"path-to-regexp":15}],6:[function(e,t,n){var r=e("./route"),o=e("./helpers"),a=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){new RegExp(r.value[0]).test(t)&&o.push(r.value[1]),r=n.next()}return o},c=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){c.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),c.prototype.add=function(e,t,n,a){var c;a=a||{},t instanceof RegExp?c=RegExp:c=(c=a.origin||self.location.origin)instanceof RegExp?c.source:function(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}(c),e=e.toLowerCase();var i=new r(e,t,n,a);this.routes.has(c)||this.routes.set(c,new Map);var s=this.routes.get(c);s.has(e)||s.set(e,new Map);var f=s.get(e),u=i.regexp||i.fullUrlRegExp;f.has(u.source)&&o.debug('"'+t+'" resolves to same regex as existing route.'),f.set(u.source,i)},c.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,a(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},c.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],c=o&&o.get(e.toLowerCase());if(c){var i=a(c,n);if(i.length>0)return i[0].makeHandler(n)}}return null},c.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new c},{"./helpers":1,"./route":5}],7:[function(e,t,n){var r=e("../options"),o=e("../helpers");t.exports=function(e,t,n){return n=n||{},o.debug("Strategy: cache first ["+e.url+"]",n),o.openCache(n).then(function(t){return t.match(e).then(function(t){var a=n.cache||r.cache,c=Date.now();return o.isResponseFresh(t,a.maxAgeSeconds,c)?t:o.fetchAndCache(e,n)})})}},{"../helpers":1,"../options":4}],8:[function(e,t,n){var r=e("../options"),o=e("../helpers");t.exports=function(e,t,n){return n=n||{},o.debug("Strategy: cache only ["+e.url+"]",n),o.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||r.cache,a=Date.now();if(o.isResponseFresh(e,t.maxAgeSeconds,a))return e})})}},{"../helpers":1,"../options":4}],9:[function(e,t,n){var r=e("../helpers"),o=e("./cacheOnly");t.exports=function(e,t,n){return r.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(a,c){var i=!1,s=[],f=function(e){s.push(e.toString()),i?c(new Error('Both cache and network failed: "'+s.join('", "')+'"')):i=!0},u=function(e){e instanceof Response?a(e):f("No result returned")};r.fetchAndCache(e.clone(),n).then(u,f),o(e,t,n).then(u,f)})}},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){var r=e("../options"),o=e("../helpers");t.exports=function(e,t,n){var a=(n=n||{}).successResponses||r.successResponses,c=n.networkTimeoutSeconds||r.networkTimeoutSeconds;return o.debug("Strategy: network first ["+e.url+"]",n),o.openCache(n).then(function(t){var i,s,f=[];if(c){var u=new Promise(function(a){i=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||r.cache,c=Date.now(),i=t.maxAgeSeconds;o.isResponseFresh(e,i,c)&&a(e)})},1e3*c)});f.push(u)}var h=o.fetchAndCache(e,n).then(function(e){if(i&&clearTimeout(i),a.test(e.status))return e;throw o.debug("Response was an HTTP error: "+e.statusText,n),s=e,new Error("Bad response")}).catch(function(r){return o.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(s)return s;throw r})});return f.push(h),Promise.race(f)})}},{"../helpers":1,"../options":4}],12:[function(e,t,n){var r=e("../helpers");t.exports=function(e,t,n){return r.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}},{"../helpers":1}],13:[function(e,t,n){var r=e("./options"),o=e("./router"),a=e("./helpers"),c=e("./strategies"),i=e("./listeners");a.debug("Service Worker Toolbox is loading"),self.addEventListener("install",i.installListener),self.addEventListener("activate",i.activateListener),self.addEventListener("fetch",i.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:a.cache,uncache:a.uncache,precache:a.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,a=0,c="",f=t&&t.delimiter||"/";null!=(n=p.exec(e));){var u=n[0],h=n[1],d=n.index;if(c+=e.slice(a,d),a=d+u.length,h)c+=h[1];else{var l=e[a],b=n[2],m=n[3],g=n[4],v=n[5],w=n[6],x=n[7];c&&(r.push(c),c="");var y=null!=b&&null!=l&&l!==b,E="+"===w||"*"===w,R="?"===w||"*"===w,C=n[2]||f,k=g||v;r.push({name:m||o++,prefix:b||"",delimiter:C,optional:R,repeat:E,partial:y,asterisk:!!x,pattern:k?s(k):x?".*":"[^"+i(C)+"]+?"})}}return a<e.length&&(c+=e.substr(a)),c&&r.push(c),r}function o(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function a(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var c="",i=n||{},s=(r||{}).pretty?o:encodeURIComponent,f=0;f<e.length;f++){var u=e[f];if("string"!=typeof u){var h,d=i[u.name];if(null==d){if(u.optional){u.partial&&(c+=u.prefix);continue}throw new TypeError('Expected "'+u.name+'" to be defined')}if(l(d)){if(!u.repeat)throw new TypeError('Expected "'+u.name+'" to not repeat, but received `'+JSON.stringify(d)+"`");if(0===d.length){if(u.optional)continue;throw new TypeError('Expected "'+u.name+'" to not be empty')}for(var p=0;p<d.length;p++){if(h=s(d[p]),!t[f].test(h))throw new TypeError('Expected all "'+u.name+'" to match "'+u.pattern+'", but received `'+JSON.stringify(h)+"`");c+=(0===p?u.prefix:u.delimiter)+h}}else{if(h=u.asterisk?a(d):s(d),!t[f].test(h))throw new TypeError('Expected "'+u.name+'" to match "'+u.pattern+'", but received "'+h+'"');c+=u.prefix+h}}else c+=u}return c}}function i(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function s(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function u(e){return e.sensitive?"":"i"}function h(e,t,n){l(t)||(n=t||n,t=[]);for(var r=(n=n||{}).strict,o=!1!==n.end,a="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)a+=i(s);else{var h=i(s.prefix),d="(?:"+s.pattern+")";t.push(s),s.repeat&&(d+="(?:"+h+d+")*"),a+=d=s.optional?s.partial?h+"("+d+")?":"(?:"+h+"("+d+"))?":h+"("+d+")"}}var p=i(n.delimiter||"/"),b=a.slice(-p.length)===p;return r||(a=(b?a.slice(0,-p.length):a)+"(?:"+p+"(?=$))?"),a+=o?"$":r&&b?"":"(?="+p+"|$)",f(new RegExp("^"+a,u(n)),t)}function d(e,t,n){return l(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?function(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}(e,t):l(e)?function(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(d(e[o],t,n).source);return f(new RegExp("(?:"+r.join("|")+")",u(n)),t)}(e,t,n):function(e,t,n){return h(r(e,n),t,n)}(e,t,n)}var l=e("isarray");t.exports=d,t.exports.parse=r,t.exports.compile=function(e,t){return c(r(e,t))},t.exports.tokensToFunction=c,t.exports.tokensToRegExp=h;var p=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)}),toolbox.router.get(/\//,toolbox.networkFirst,{});