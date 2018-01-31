webpackJsonp([2],{324:function(t,e,r){"use strict";function n(t){this.$style=r(336)}Object.defineProperty(e,"__esModule",{value:!0});var s=r(26),a=r(47),i=r.n(a),o=r(21),l=r(12),c=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),u=this&&this.__assign||Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++){e=arguments[r];for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s])}return t},_=this&&this.__decorate||function(t,e,r,n){var s,a=arguments.length,i=a<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,r,n);else for(var o=t.length-1;o>=0;o--)(s=t[o])&&(i=(a<3?s(i):a>3?s(e,r,i):s(e,r))||i);return a>3&&i&&Object.defineProperty(e,r,i),i},f={query:i()("query pinnedRepositories($login: String!) {\n  "+l.e+"(login: $login) {\n    avatarUrl\n    "+(l.b?"bio company":"description")+"\n    email\n    id\n    location\n    name\n    resourcePath\n    url\n    websiteUrl\n    pinnedRepositories(first: 6) {\n      nodes {\n        description\n        id\n        nameWithOwner\n        url\n        stargazers {\n          totalCount\n        }\n      }\n    }\n  }\n}"),variables:l.d},p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.login=l.d.login,e}return c(e,t),Object.defineProperty(e.prototype,"owner",{get:function(){return this.$apollo.readQuery(f)[l.e]},enumerable:!0,configurable:!0}),e=_([Object(o.Component)({asyncData:function(t){return t.apollo.query(u({},f))},title:function(t){return t.$t("about")},translator:{en:{about:"About"},zh:{about:"关于"}}})],e)}(o.Vue),d=p,w=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",[r("blockquote",{staticClass:"d-flex align-items-center justify-content-center text-secondary quote",class:t.$style.profile},[r("a",{attrs:{href:t.owner.url}},[r("img",{staticClass:"mr-2",class:t.$style.avatar,attrs:{src:t.owner.avatarUrl+"&s=40",srcset:t.owner.avatarUrl+"&s=80 2x"}})]),r("div",{staticClass:"text-left"},[r("a",{attrs:{href:t.owner.url}},[t._v(t._s(t.owner.name))]),t.owner.email?[t._v("("+t._s(t.owner.email)+")")]:t._e(),t.owner.bio||t.owner.description?[t._v(":"),r("br"),t._v(t._s(t.owner.bio||t.owner.description))]:t._e()],2)]),r("div",{staticClass:"d-flex mb-2"},[r("div",{staticClass:"flex-1"},[r("i",{staticClass:"fa fa-location-arrow mr-2"}),t._v(t._s(t.owner.location))]),r("div",{staticClass:"flex-1 text-right"},[r("i",{staticClass:"fa fa-link mr-2"}),r("a",{attrs:{href:t.owner.websiteUrl||t.owner.url}},[t._v(t._s(t.owner.websiteUrl||t.owner.url))])])]),r("ul",{staticClass:"list-unstyled",class:t.$style.repositories},t._l(t.owner.pinnedRepositories.nodes,function(e){var n=e.description,s=e.id,a=e.nameWithOwner,i=e.stargazers,o=e.url;return r("li",{key:s,staticClass:"mt-3 mt-md-4"},[r("div",{staticClass:"card flex-1"},[r("div",{staticClass:"card-body"},[r("h5",{staticClass:"card-title"},[r("a",{attrs:{href:o}},[r("span",{staticClass:"mr-2"},[t._v(t._s(a.replace(t.login+"/","")))]),r("small",[r("i",{staticClass:"fa fa-star mr-1"}),t._v(t._s(i.totalCount))])])]),r("div",{staticClass:"card-text"},[r("span",{staticClass:"text-secondary"},[t._v(t._s(n))])])])])])}))])},y=[],m={render:w,staticRenderFns:y},h=m,v=n,g=Object(s.a)(d,h,!1,v,null,null);e.default=g.exports},336:function(t,e,r){var n=r(337);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var s=r(320).default;s("65605d44",n,!0,{})},337:function(t,e,r){e=t.exports=r(319)(!1),e.push([t.i,".FwEFS1a8B_vMQ5Iv_EVEh_0{width:2.85714rem;height:2.85714rem}._3yq_gum-48M0swnGIlF9_5_0{display:-webkit-box;display:flex;flex-wrap:wrap;margin-right:-1.42857rem;margin-bottom:0}._3yq_gum-48M0swnGIlF9_5_0>li{display:-webkit-box;display:flex;width:50%}._3yq_gum-48M0swnGIlF9_5_0>li .card{margin-right:1.42857rem}@media (max-width:768px){._3yq_gum-48M0swnGIlF9_5_0{margin-right:0}._3yq_gum-48M0swnGIlF9_5_0>li{width:100%}._3yq_gum-48M0swnGIlF9_5_0>li .card{margin-right:0}}",""]),e.locals={avatar:"FwEFS1a8B_vMQ5Iv_EVEh_0",repositories:"_3yq_gum-48M0swnGIlF9_5_0"}}});