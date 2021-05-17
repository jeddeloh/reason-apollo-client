(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{63:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return s}));var r=n(2),a=n(6),o=(n(0),n(74)),l={id:"installation",title:"Installation",sidebar_label:"Installation"},i={unversionedId:"installation",id:"installation",isDocsHomePage:!1,title:"Installation",description:"1. graphql-ppx",source:"@site/docs/installation.md",slug:"/installation",permalink:"/rescript-apollo-client/docs/installation",editUrl:"https://github.com/jeddeloh/rescript-apollo-client/edit/master/documentationWebsite/docs/installation.md",version:"current",sidebar_label:"Installation",sidebar:"docs",previous:{title:"Overview",permalink:"/rescript-apollo-client/docs/"},next:{title:"Create a Client",permalink:"/rescript-apollo-client/docs/client-configuration"}},p=[{value:"1. <code>graphql-ppx</code>",id:"1-graphql-ppx",children:[]},{value:"2. Apollo Client",id:"2-apollo-client",children:[]},{value:"3. Apollo-Specific <code>graphql-ppx</code> Configuration",id:"3-apollo-specific-graphql-ppx-configuration",children:[]}],c={rightToc:p};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"1-graphql-ppx"},"1. ",Object(o.b)("inlineCode",{parentName:"h3"},"graphql-ppx")),Object(o.b)("p",null,"We rely on Graphql-ppx for typesafe GraphQL operations and fragments in ReasonML. ",Object(o.b)("a",{parentName:"p",href:"https://beta.graphql-ppx.com"},"Go to the official documentation")," for installation instructions."),Object(o.b)("p",null,"You should now have a ",Object(o.b)("inlineCode",{parentName:"p"},"graphql_schema.json")," in your project somewhere. Make sure it's always up-to-date!"),Object(o.b)("h3",{id:"2-apollo-client"},"2. Apollo Client"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"npm install rescript-apollo-client @apollo/client\n")),Object(o.b)("h3",{id:"3-apollo-specific-graphql-ppx-configuration"},"3. Apollo-Specific ",Object(o.b)("inlineCode",{parentName:"h3"},"graphql-ppx")," Configuration"),Object(o.b)("p",null,"Add the following under ",Object(o.b)("inlineCode",{parentName:"p"},"bs-dependencies")," and ",Object(o.b)("inlineCode",{parentName:"p"},"graphql"),", in your ",Object(o.b)("inlineCode",{parentName:"p"},"bsconfig.json")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-diff"},'{\n  "graphql": {\n+   "apolloMode": true,\n+   "extendMutation": "ApolloClient.GraphQL_PPX.ExtendMutation",\n+   "extendQuery": "ApolloClient.GraphQL_PPX.ExtendQuery",\n+   "extendSubscription": "ApolloClient.GraphQL_PPX.ExtendSubscription",\n+   "templateTagReturnType": "ApolloClient.GraphQL_PPX.templateTagReturnType",\n+   "templateTagImport": "gql",\n+   "templateTagLocation": "@apollo/client"\n  },\n  "ppx-flags": ["@reasonml-community/graphql-ppx/ppx"],\n  "bs-dependencies: [\n    "@reasonml-community/graphql-ppx"\n+   "rescript-apollo-client"\n  ]\n}\n')),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},'"apolloMode"')," automaticaly sprinkles ",Object(o.b)("inlineCode",{parentName:"li"},"__typename")," throughout our operation and fragment definitions"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},'"templateTag*"')," is how we tell ",Object(o.b)("inlineCode",{parentName:"li"},"graphql-ppx")," to wrap every operation with ",Object(o.b)("inlineCode",{parentName:"li"},"gql")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},'"extend*"')," allows ",Object(o.b)("inlineCode",{parentName:"li"},"rescript-apollo-client")," to automatically decorate the generated modules with Apollo-specific things like the correct hook for that operation!")),Object(o.b)("p",null,"If you use a bundler that does not support ",Object(o.b)("inlineCode",{parentName:"p"},"require")," statements (eg: ",Object(o.b)("inlineCode",{parentName:"p"},"esbuild"),"), you will need to add one more piece of configuration"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-diff"},'{\n  "graphql": {\n+   "templateTagIsFunction": true,\n  ...\n  }\n}\n\nThis is probably temporary, until ReScript supports template tags or has some way to output them.\nSee [this graphql-ppx issue](https://github.com/reasonml-community/rescript-apollo-client/issues/70)\n')))}s.isMDXComponent=!0},74:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),s=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,m=u["".concat(l,".").concat(d)]||u[d]||b[d]||o;return n?a.a.createElement(m,i(i({ref:t},c),{},{components:n})):a.a.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);