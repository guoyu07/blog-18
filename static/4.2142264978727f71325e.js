(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{2:function(e,n){var i={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"allArchives"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"issues"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"createdAt"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"number"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]}]}}]}},{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"archives"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"name"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"owner"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"after"}},type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"labels"}},type:{kind:"ListType",type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"repository"},arguments:[{kind:"Argument",name:{kind:"Name",value:"name"},value:{kind:"Variable",name:{kind:"Name",value:"name"}}},{kind:"Argument",name:{kind:"Name",value:"owner"},value:{kind:"Variable",name:{kind:"Name",value:"owner"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"issues"},arguments:[{kind:"Argument",name:{kind:"Name",value:"after"},value:{kind:"Variable",name:{kind:"Name",value:"after"}}},{kind:"Argument",name:{kind:"Name",value:"first"},value:{kind:"IntValue",value:"100"}},{kind:"Argument",name:{kind:"Name",value:"orderBy"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"direction"},value:{kind:"EnumValue",value:"DESC"}},{kind:"ObjectField",name:{kind:"Name",value:"field"},value:{kind:"EnumValue",value:"CREATED_AT"}}]}},{kind:"Argument",name:{kind:"Name",value:"states"},value:{kind:"EnumValue",value:"OPEN"}},{kind:"Argument",name:{kind:"Name",value:"labels"},value:{kind:"Variable",name:{kind:"Name",value:"labels"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"nodes"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"createdAt"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"number"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"pageInfo"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"endCursor"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"hasNextPage"},arguments:[],directives:[]}]}}]}}]}}]}},{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"issue"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"name"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"owner"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"number"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Int"}}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"repository"},arguments:[{kind:"Argument",name:{kind:"Name",value:"name"},value:{kind:"Variable",name:{kind:"Name",value:"name"}}},{kind:"Argument",name:{kind:"Name",value:"owner"},value:{kind:"Variable",name:{kind:"Name",value:"owner"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"issue"},arguments:[{kind:"Argument",name:{kind:"Name",value:"number"},value:{kind:"Variable",name:{kind:"Name",value:"number"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"bodyHTML"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"createdAt"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"labels"},arguments:[{kind:"Argument",name:{kind:"Name",value:"first"},value:{kind:"IntValue",value:"5"}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"nodes"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"color"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]}]}}]}},{kind:"Field",name:{kind:"Name",value:"comments"},arguments:[{kind:"Argument",name:{kind:"Name",value:"first"},value:{kind:"IntValue",value:"25"}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"nodes"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"author"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"avatarUrl"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"login"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"createdAt"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"bodyHTML"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]}]}}]}}]}}]}}]}},{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"issues"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"name"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"owner"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"first"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"last"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"before"}},type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"after"}},type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"labels"}},type:{kind:"ListType",type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"repository"},arguments:[{kind:"Argument",name:{kind:"Name",value:"name"},value:{kind:"Variable",name:{kind:"Name",value:"name"}}},{kind:"Argument",name:{kind:"Name",value:"owner"},value:{kind:"Variable",name:{kind:"Name",value:"owner"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"issues"},arguments:[{kind:"Argument",name:{kind:"Name",value:"first"},value:{kind:"Variable",name:{kind:"Name",value:"first"}}},{kind:"Argument",name:{kind:"Name",value:"last"},value:{kind:"Variable",name:{kind:"Name",value:"last"}}},{kind:"Argument",name:{kind:"Name",value:"before"},value:{kind:"Variable",name:{kind:"Name",value:"before"}}},{kind:"Argument",name:{kind:"Name",value:"after"},value:{kind:"Variable",name:{kind:"Name",value:"after"}}},{kind:"Argument",name:{kind:"Name",value:"orderBy"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"direction"},value:{kind:"EnumValue",value:"DESC"}},{kind:"ObjectField",name:{kind:"Name",value:"field"},value:{kind:"EnumValue",value:"CREATED_AT"}}]}},{kind:"Argument",name:{kind:"Name",value:"states"},value:{kind:"EnumValue",value:"OPEN"}},{kind:"Argument",name:{kind:"Name",value:"labels"},value:{kind:"Variable",name:{kind:"Name",value:"labels"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"nodes"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"createdAt"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"number"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"labels"},arguments:[{kind:"Argument",name:{kind:"Name",value:"first"},value:{kind:"IntValue",value:"5"}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"nodes"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"color"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]}]}}]}}]}},{kind:"Field",name:{kind:"Name",value:"pageInfo"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"endCursor"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"hasNextPage"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"hasPreviousPage"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"startCursor"},arguments:[],directives:[]}]}}]}}]}}]}},{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"search"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"first"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"last"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"before"}},type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"after"}},type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"search"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"search"},arguments:[{kind:"Argument",name:{kind:"Name",value:"first"},value:{kind:"Variable",name:{kind:"Name",value:"first"}}},{kind:"Argument",name:{kind:"Name",value:"last"},value:{kind:"Variable",name:{kind:"Name",value:"last"}}},{kind:"Argument",name:{kind:"Name",value:"before"},value:{kind:"Variable",name:{kind:"Name",value:"before"}}},{kind:"Argument",name:{kind:"Name",value:"after"},value:{kind:"Variable",name:{kind:"Name",value:"after"}}},{kind:"Argument",name:{kind:"Name",value:"query"},value:{kind:"Variable",name:{kind:"Name",value:"search"}}},{kind:"Argument",name:{kind:"Name",value:"type"},value:{kind:"EnumValue",value:"ISSUE"}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"nodes"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Issue"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"createdAt"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"number"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"labels"},arguments:[{kind:"Argument",name:{kind:"Name",value:"first"},value:{kind:"IntValue",value:"5"}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"nodes"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"color"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]}]}}]}}]}}]}},{kind:"Field",name:{kind:"Name",value:"pageInfo"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"endCursor"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"hasNextPage"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"hasPreviousPage"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"startCursor"},arguments:[],directives:[]}]}}]}}]}},{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"pullRequests"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"login"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"after"}},type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"user"},arguments:[{kind:"Argument",name:{kind:"Name",value:"login"},value:{kind:"Variable",name:{kind:"Name",value:"login"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"pullRequests"},arguments:[{kind:"Argument",name:{kind:"Name",value:"after"},value:{kind:"Variable",name:{kind:"Name",value:"after"}}},{kind:"Argument",name:{kind:"Name",value:"first"},value:{kind:"IntValue",value:"100"}},{kind:"Argument",name:{kind:"Name",value:"states"},value:{kind:"ListValue",values:[{kind:"EnumValue",value:"MERGED"},{kind:"EnumValue",value:"OPEN"}]}},{kind:"Argument",name:{kind:"Name",value:"orderBy"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"direction"},value:{kind:"EnumValue",value:"DESC"}},{kind:"ObjectField",name:{kind:"Name",value:"field"},value:{kind:"EnumValue",value:"CREATED_AT"}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"nodes"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"PullRequest"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"createdAt"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"mergedAt"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"state"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"repository"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"owner"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"login"},arguments:[],directives:[]}]}}]}}]}}]}},{kind:"Field",name:{kind:"Name",value:"pageInfo"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"endCursor"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"hasNextPage"},arguments:[],directives:[]}]}}]}}]}}]}}],loc:{start:0,end:2853}};i.loc.source={body:"query allArchives {\n  issues {\n    createdAt\n    id\n    number\n    title\n  }\n}\n\nquery archives(\n  $name: String!\n  $owner: String!\n  $after: String\n  $labels: [String!]\n) {\n  repository(name: $name, owner: $owner) {\n    issues(\n      after: $after\n      first: 100\n      orderBy: { direction: DESC, field: CREATED_AT }\n      states: OPEN\n      labels: $labels\n    ) {\n      nodes {\n        createdAt\n        id\n        number\n        title\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n      }\n    }\n  }\n}\n\nquery issue($name: String!, $owner: String!, $number: Int!) {\n  repository(name: $name, owner: $owner) {\n    issue(number: $number) {\n      bodyHTML\n      createdAt\n      title\n      url\n      labels(first: 5) {\n        nodes {\n          color\n          id\n          name\n        }\n      }\n      comments(first: 25) {\n        nodes {\n          author {\n            avatarUrl\n            login\n            url\n          }\n          createdAt\n          bodyHTML\n          url\n        }\n      }\n    }\n  }\n}\n\nquery issues(\n  $name: String!\n  $owner: String!\n  $first: Int\n  $last: Int\n  $before: String\n  $after: String\n  $labels: [String!]\n) {\n  repository(name: $name, owner: $owner) {\n    issues(\n      first: $first\n      last: $last\n      before: $before\n      after: $after\n      orderBy: { direction: DESC, field: CREATED_AT }\n      states: OPEN\n      labels: $labels\n    ) {\n      nodes {\n        createdAt\n        id\n        number\n        title\n        labels(first: 5) {\n          nodes {\n            color\n            id\n            name\n          }\n        }\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n        hasPreviousPage\n        startCursor\n      }\n    }\n  }\n}\n\nquery search(\n  $first: Int\n  $last: Int\n  $before: String\n  $after: String\n  $search: String!\n) {\n  search(\n    first: $first\n    last: $last\n    before: $before\n    after: $after\n    query: $search\n    type: ISSUE\n  ) {\n    nodes {\n      ... on Issue {\n        createdAt\n        id\n        number\n        title\n        labels(first: 5) {\n          nodes {\n            color\n            id\n            name\n          }\n        }\n      }\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n      hasPreviousPage\n      startCursor\n    }\n  }\n}\n\nquery pullRequests($login: String!, $after: String) {\n  user(login: $login) {\n    id\n    pullRequests(\n      after: $after\n      first: 100\n      states: [MERGED, OPEN]\n      orderBy: { direction: DESC, field: CREATED_AT }\n    ) {\n      nodes {\n        ... on PullRequest {\n          createdAt\n          id\n          mergedAt\n          state\n          title\n          url\n          repository {\n            name\n            url\n            owner {\n              login\n            }\n          }\n        }\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n      }\n    }\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};var a={};function t(e,n){return e.definitions.find(function(e){return!!e.name&&e.name.value==n})}function l(e,n){var i=Object.assign({},e),l=t(e,n);i.definitions=[l];for(var d=a[n]||new Set,r=new Set,s=new Set(d);s.size>0;){var m=s;s=new Set,m.forEach(function(e){r.has(e)||(r.add(e),(a[e]||new Set).forEach(function(e){s.add(e)}))})}return r.forEach(function(n){var a=t(e,n);a&&i.definitions.push(a)}),i}i.definitions.forEach(function(e){if(e.name){var n=new Set;!function e(n,i){if("FragmentSpread"===n.kind)i.add(n.name.value);else if("VariableDefinition"===n.kind){var a=n.type;"NamedType"===a.kind&&i.add(a.name.value)}n.selectionSet&&n.selectionSet.selections.forEach(function(n){e(n,i)}),n.variableDefinitions&&n.variableDefinitions.forEach(function(n){e(n,i)}),n.definitions&&n.definitions.forEach(function(n){e(n,i)})}(e,n),a[e.name.value]=n}}),e.exports=i,e.exports.allArchives=l(i,"allArchives"),e.exports.archives=l(i,"archives"),e.exports.issue=l(i,"issue"),e.exports.issues=l(i,"issues"),e.exports.search=l(i,"search"),e.exports.pullRequests=l(i,"pullRequests")},31:function(e,n,i){"use strict";i.r(n);var a,t=i(1),l=i(2),d=i.n(l),r=(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var i in n)n.hasOwnProperty(i)&&(e[i]=n[i])},function(e,n){function i(){this.constructor=e}a(e,n),e.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}),s=Object.assign||function(e){for(var n,i=1,a=arguments.length;i<a;i++)for(var t in n=arguments[i])Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t]);return e},m=function(e,n,i,a){var t,l=arguments.length,d=l<3?n:null===a?a=Object.getOwnPropertyDescriptor(n,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)d=Reflect.decorate(e,n,i,a);else for(var r=e.length-1;r>=0;r--)(t=e[r])&&(d=(l<3?t(d):l>3?t(n,i,d):t(n,i))||d);return l>3&&d&&Object.defineProperty(n,i,d),d},u=function(e,n,i,a){return new(i||(i=Promise))(function(t,l){function d(e){try{s(a.next(e))}catch(e){l(e)}}function r(e){try{s(a.throw(e))}catch(e){l(e)}}function s(e){e.done?t(e.value):new i(function(n){n(e.value)}).then(d,r)}s((a=a.apply(e,n||[])).next())})},o=function(e,n){var i,a,t,l,d={label:0,sent:function(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]};return l={next:r(0),throw:r(1),return:r(2)},"function"==typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l;function r(l){return function(r){return function(l){if(i)throw new TypeError("Generator is already executing.");for(;d;)try{if(i=1,a&&(t=a[2&l[0]?"return":l[0]?"throw":"next"])&&!(t=t.call(a,l[1])).done)return t;switch(a=0,t&&(l=[0,t.value]),l[0]){case 0:case 1:t=l;break;case 4:return d.label++,{value:l[1],done:!1};case 5:d.label++,a=l[1],l=[0];continue;case 7:l=d.ops.pop(),d.trys.pop();continue;default:if(!(t=(t=d.trys).length>0&&t[t.length-1])&&(6===l[0]||2===l[0])){d=0;continue}if(3===l[0]&&(!t||l[1]>t[0]&&l[1]<t[3])){d.label=l[1];break}if(6===l[0]&&d.label<t[1]){d.label=t[1],t=l;break}if(t&&d.label<t[2]){d.label=t[2],d.ops.push(l);break}t[2]&&d.ops.pop(),d.trys.pop();continue}l=n.call(e,d)}catch(e){l=[6,e],a=0}finally{i=t=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,r])}}},k=function(e,n){return{query:d.a.issue,variables:s({},e.getters.REPOSITORY,{number:+n})}},v=function(e){function n(){return null!==e&&e.apply(this,arguments)||this}return r(n,e),Object.defineProperty(n.prototype,"issue",{get:function(){return this.$apollo.readQuery(k(this.$store,this.$route.params.number)).repository.issue},enumerable:!0,configurable:!0}),n=m([Object(t.Component)({asyncData:function(e){var n=e.apollo,i=e.route,a=e.store,t=e.translate;return u(this,void 0,void 0,function(){var e;return o(this,function(l){switch(l.label){case 0:return[4,n.query(k(a,i.params.number))];case 1:return e=l.sent().data.repository.issue,t(e.title),t(e.bodyHTML,!1),[2]}})})},title:function(e){return e.$tt(e.issue.title)},translator:{en:{add_comment:"Add Comment"},zh:{add_comment:"添加评论"}}})],n)}(t.Vue),c=i(3),N=Object(c.a)(v,function(){var e=this,n=e.$createElement,i=e._self._c||n;return e.issue?i("main",[i("h4",[i("a",{staticClass:"heading-link",attrs:{href:e.issue.url}},[e._v(e._s(e.$tt(e.issue.title)))])]),i("small",{staticClass:"text-secondary"},[e._v(e._s(e._f("timeAgo")(e.issue.createdAt,e.$t.locale)))]),i("ul",{staticClass:"list-unstyled d-inline-flex mb-0"},e._l(e.issue.labels.nodes,function(n){var a=n.id,t=n.color,l=n.name;return i("router-link",{key:a,staticClass:"d-inline-flex ml-2 px-2",style:{backgroundColor:"#"+t},attrs:{tag:"li",to:{path:"/",query:{labels:l}}}},[i("a",{staticClass:"small",style:{color:e.$utils.invertColor("#"+t)}},[e._v(e._s(l))])])})),i("small",{staticClass:"pull-right text-primary clickable",on:{click:e.$t.toggleLocale}},[e._v(e._s(e.$t("toggle_locale")))]),i("div",{staticClass:"markdown-body comment-body my-3 my-md-5",domProps:{innerHTML:e._s(e.$tt(e.issue.bodyHTML,!1))}}),i("ul",{staticClass:"list-unstyled"},e._l(e.issue.comments.nodes,function(n,a){var t=n.author,l=n.createdAt,d=n.bodyHTML,r=n.url;return i("li",{staticClass:"media my-4"},[i("a",{staticClass:"d-none d-md-block",attrs:{href:t.url}},[i("img",{staticClass:"rounded mr-3 avatar-img",attrs:{src:t.avatarUrl+"&s=50",srcset:t.avatarUrl+"&s=100 2x"}})]),i("div",{staticClass:"media-body"},[i("div",{staticClass:"card"},[i("div",{staticClass:"card-header d-flex align-items-center"},[i("a",{staticClass:"d-md-none",attrs:{href:t.url}},[i("img",{staticClass:"rounded mr-3 avatar-img",attrs:{src:t.avatarUrl+"&s=32",srcset:t.avatarUrl+"&s=64 2x"}})]),i("div",{staticClass:"d-inline-block"},[i("a",{staticClass:"text-dark",attrs:{href:t.url}},[e._v(e._s(t.login))]),i("a",{staticClass:"small text-secondary d-block d-md-inline-block ml-0 ml-md-2",attrs:{href:r}},[e._v(e._s(e._f("timeAgo")(l,e.$t.locale)))])])]),i("div",{staticClass:"card-body markdown-body comment-body",domProps:{innerHTML:e._s(d)}})])])])})),i("div",{staticClass:"d-flex justify-content-center"},[i("a",{attrs:{href:e.issue.url+"#new_comment_field"}},[e._v(e._s(e.$t("add_comment")))])])]):e._e()},[],!1,null,null,null);n.default=N.exports}}]);