(()=>{var e={5067:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>P});var n=r(885),o=r(9526),l=r(2564),a=r(8970),i=r(4333),s=r(8576),u=r(4152),d=r(3277),c=r(7823),f=r(5899),y=r(1133),b=r(3497),x=r(1451),p=r(9233),h=r(5861),m=r(321),v=r(2776),g=r.n(v),j=function(e){var t=e.password,r=void 0===t?"":t,l=e.enabledState,a=void 0!==l&&l,i=e.timestamp,s=void 0===i?0:i,u=(0,o.useState)(a),d=(0,n.default)(u,2),c=d[0],f=d[1];(0,o.useEffect)((function(){f(a)}),[a,s]),console.log("query key is",["wallet",r,s]);var y=["wallet",r,s];return(0,m.useQuery)({queryKey:y,queryFn:function(){return S(r,s)},enabled:c,retry:!1,onSettled:function(){console.log("im settling wallet!",s),f(!1)}})},S=function(){var e=(0,h.default)((function*(e,t){console.log("im fetching wallet!",t);var r={publicKey:"1JPbzbsAx1HyaDQoLMapWGoqf9pD5uha5m",privateKeyEncrypted:"U2FsdGVkX184moMXYzj0KA24KCKWJbrQU5BHg0IiJvLThe4Ko9agGltcLtSndv58zf5AbRClIfDr0GV9jZpH3Xf0CVLcZqpuzuOCcltO7kA=",transactions:{final_balance:0,n_tx:0,total_received:0}},n=function(e,t){var r=g().AES.decrypt(e,t);return r.toString(g().enc.Utf8)}(r.privateKeyEncrypted,e);if(!n)throw new Error("Decryption failed. Check your password and try again.");return r}));return function(t,r){return e.apply(this,arguments)}}();const w=(0,r(6376).create)((function(e){return{password:"",setPassword:function(t){return e({password:t})},timestamp:0,setSubmitTimestamp:function(t){return e({submitTimestamp:t})}}}));var T=r(7557),C=i.default.create({input:{borderWidth:1,borderColor:"#000",padding:10,width:"100%",marginBottom:10},buttonsContainer:{flexDirection:"row",justifyContent:"space-evenly",alignItems:"center",marginHorizontal:20},submitButton:{backgroundColor:"#007BFF",padding:10,alignItems:"center",justifyContent:"center",borderRadius:5,marginHorizontal:1,marginBottom:5},getKeyButtonText:{color:"#fff",fontWeight:"bold"},decryptedKeyText:{color:"green",marginTop:10},errorText:{color:"red",marginTop:10}});const O=function(e){var t=e.lockState,r=e.setLockState,l=w(),a=l.password,i=l.setPassword,s=l.submitTimestamp,u=l.setSubmitTimestamp,d=(0,o.useState)(""),c=(0,n.default)(d,2),f=c[0],h=c[1],m=(0,o.useState)(!1),v=(0,n.default)(m,2),g=v[0],S=v[1],O=j({password:a,enabledState:g,timestamp:s}),k=O.data,B=O.error,K=O.isError;(0,o.useEffect)((function(){k&&!K?(console.log("effect - UNLOCKING WALLET",k),r(!1)):(console.log("effect - LOCKING WALLET",k),r(!0),S(!1)),h("")}),[k,g]);var _=(0,T.jsxs)(y.default,{children:[(0,T.jsx)(b.default,{style:C.input,placeholder:"Password",secureTextEntry:!0,onChangeText:function(e){r(!0),h(e)},value:f}),(0,T.jsx)(x.default,{style:C.submitButton,onPress:function(){i(f),S(!0),u(Date.now())},children:(0,T.jsx)(p.default,{style:C.getKeyButtonText,children:"Unlock Wallet"})}),(0,T.jsx)(p.default,{style:C.errorText,children:!f&&B?B.message:""})]}),P=(0,T.jsxs)(y.default,{style:C.buttonsContainer,children:[(0,T.jsx)(x.default,{style:C.submitButton,children:(0,T.jsx)(p.default,{style:C.getKeyButtonText,children:"Send"})}),(0,T.jsx)(x.default,{style:C.submitButton,children:(0,T.jsx)(p.default,{style:C.getKeyButtonText,children:"Receive"})}),(0,T.jsx)(x.default,{style:C.submitButton,onPress:function(){r(!0),S(!1),u(Date.now())},children:(0,T.jsx)(p.default,{style:C.getKeyButtonText,children:"Lock"})})]});return t?_:P};var k=r(8466),B=i.default.create({table:{borderWidth:1,borderColor:"#000",width:"80%"},subtext:{fontSize:14,fontStyle:"italic",marginBottom:15,color:"#000"}});const K=function(){(0,l.useQueryClient)();var e=w(),t=e.password,r=e.submitTimestamp,n=j({password:t,timestamp:r,enabledState:!!t&&!!r}).data;return n?(0,T.jsxs)(k.default,{style:B.table,children:[(0,T.jsxs)(k.default.Header,{children:[(0,T.jsx)(k.default.Title,{textStyle:B.subtext,children:"Address"}),(0,T.jsx)(k.default.Title,{textStyle:B.subtext,children:"Balance"}),(0,T.jsx)(k.default.Title,{textStyle:B.subtext,children:"Transactions"}),(0,T.jsx)(k.default.Title,{textStyle:B.subtext,children:"Total Received"})]}),(0,T.jsxs)(k.default.Row,{children:[(0,T.jsx)(k.default.Cell,{textStyle:B.subtext,children:n.publicKey}),(0,T.jsx)(k.default.Cell,{textStyle:B.subtext,children:n.transactions.final_balance}),(0,T.jsx)(k.default.Cell,{textStyle:B.subtext,children:n.transactions.n_tx}),(0,T.jsx)(k.default.Cell,{textStyle:B.subtext,children:n.transactions.total_received})]})]}):null};var _=i.default.create({container:{flexGrow:1,alignItems:"center",justifyContent:"center"},header:{fontSize:24,fontWeight:"bold",color:"#000"},subtext:{fontSize:14,fontStyle:"italic",marginBottom:15,color:"#000"},table:{borderWidth:1,borderColor:"#000",width:"80%"}});const P=function(){var e=(0,o.useState)(!0),t=(0,n.default)(e,2),r=t[0],i=t[1];return(0,T.jsx)(l.QueryClientProvider,{client:new a.QueryClient,children:(0,T.jsx)(u.SafeAreaProvider,{children:(0,T.jsx)(d.default,{theme:c.MD3DarkTheme,children:(0,T.jsxs)(s.default,{contentContainerStyle:_.container,children:[(0,T.jsx)(f.default,{style:_.header,children:"Simple Wallet"}),(0,T.jsx)(f.default,{style:_.subtext,children:"Cold Storage Online"}),(0,T.jsx)(O,{lockState:r,setLockState:i}),!r&&(0,T.jsx)(K,{})]})})})})}},2480:()=>{}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var l=t[n]={exports:{}};return e[n].call(l.exports,l,l.exports,r),l.exports}r.m=e,(()=>{var e=[];r.O=(t,n,o,l)=>{if(!n){var a=1/0;for(d=0;d<e.length;d++){for(var[n,o,l]=e[d],i=!0,s=0;s<n.length;s++)(!1&l||a>=l)&&Object.keys(r.O).every((e=>r.O[e](n[s])))?n.splice(s--,1):(i=!1,l<a&&(a=l));if(i){e.splice(d--,1);var u=o();void 0!==u&&(t=u)}}return t}l=l||0;for(var d=e.length;d>0&&e[d-1][2]>l;d--)e[d]=e[d-1];e[d]=[n,o,l]}})(),r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;r.t=function(n,o){if(1&o&&(n=this(n)),8&o)return n;if("object"===typeof n&&n){if(4&o&&n.__esModule)return n;if(16&o&&"function"===typeof n.then)return n}var l=Object.create(null);r.r(l);var a={};e=e||[null,t({}),t([]),t(t)];for(var i=2&o&&n;"object"==typeof i&&!~e.indexOf(i);i=t(i))Object.getOwnPropertyNames(i).forEach((e=>a[e]=()=>n[e]));return a.default=()=>n,r.d(l,a),l}})(),r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="/frontend/",(()=>{var e={179:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var o,l,[a,i,s]=n,u=0;if(a.some((t=>0!==e[t]))){for(o in i)r.o(i,o)&&(r.m[o]=i[o]);if(s)var d=s(r)}for(t&&t(n);u<a.length;u++)l=a[u],r.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return r.O(d)},n=self.webpackChunkweb=self.webpackChunkweb||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var n=r.O(void 0,[381],(()=>r(9484)));n=r.O(n)})();
//# sourceMappingURL=main.72e85286.js.map