(()=>{var e={1610:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>g});var l=r(885),n=r(9526),o=r(1133),a=r(9233),d=r(3497),i=r(4836),s=r(7922),c=r(9997),u=r(4392),f=r(2234),y=r.n(f),h=r(1206),b=r.n(h),p=r(7557);var x="#000",v=i.default.create({container:{flexGrow:1,alignItems:"center",justifyContent:"center",backgroundColor:"#fff"},header:{fontSize:24,fontWeight:"bold"},subtext:{fontSize:14,fontStyle:"italic",marginBottom:15},table:{borderWidth:1,borderColor:x,width:"80%"},row:{flexDirection:"row"},cell:{borderWidth:1,borderColor:x,padding:10,width:"20%"},input:{borderWidth:1,borderColor:x,padding:10,width:"100%",marginBottom:10},submitButton:{backgroundColor:"#007BFF",padding:10,alignItems:"center",borderRadius:5},getKeyButtonText:{color:"#fff",fontWeight:"bold"},decryptedKeyText:{color:"green",marginTop:10},errorText:{color:"red",marginTop:10}});const g=function(){function e(e){if(!O)return A("Wrong Password"),void _("");var t,r,l=(t=e,r=O,y().decrypt(t,r).toString(b()));l?(_(l),A("")):(A("Wrong Password"),_(""))}var t={"1JPbzbsAx1HyaDQoLMapWGoqf9pD5uha5m":{publicKey:"1JPbzbsAx1HyaDQoLMapWGoqf9pD5uha5m",privateKeyEncrypted:"U2FsdGVkX184moMXYzj0KA24KCKWJbrQU5BHg0IiJvLThe4Ko9agGltcLtSndv58zf5AbRClIfDr0GV9jZpH3Xf0CVLcZqpuzuOCcltO7kA=",transactions:{final_balance:0,n_tx:29,total_received:232535925}}},r=t["1JPbzbsAx1HyaDQoLMapWGoqf9pD5uha5m"],i=r.publicKey,f=r.privateKeyEncrypted,h=r.transactions,x=h.final_balance,g=h.n_tx,j=h.total_received,m=(0,n.useState)(t),w=(0,l.default)(m,2),S=(w[0],w[1],(0,n.useState)("")),T=(0,l.default)(S,2),O=T[0],C=T[1],K=(0,n.useState)(""),P=(0,l.default)(K,2),W=P[0],_=P[1],k=(0,n.useState)(""),B=(0,l.default)(k,2),z=B[0],A=B[1];return(0,p.jsx)(u.SafeAreaProvider,{children:(0,p.jsxs)(s.default,{contentContainerStyle:v.container,children:[(0,p.jsx)(a.default,{style:v.header,children:"Simple Wallet"}),(0,p.jsx)(a.default,{style:v.subtext,children:"If Cold Storage was Online"}),(0,p.jsxs)(o.default,{style:v.table,children:[(0,p.jsxs)(o.default,{style:v.row,children:[(0,p.jsx)(a.default,{style:v.cell,children:"Address"}),(0,p.jsx)(a.default,{style:v.cell,children:"Balance"}),(0,p.jsx)(a.default,{style:v.cell,children:"Transactions"}),(0,p.jsx)(a.default,{style:v.cell,children:"Total Received"}),(0,p.jsx)(a.default,{style:v.cell,children:"Private Key"})]}),(0,p.jsxs)(o.default,{style:v.row,children:[(0,p.jsx)(a.default,{style:v.cell,children:i}),(0,p.jsx)(a.default,{style:v.cell,children:x}),(0,p.jsx)(a.default,{style:v.cell,children:g}),(0,p.jsx)(a.default,{style:v.cell,children:j}),(0,p.jsx)(o.default,{style:v.cell,children:(0,p.jsxs)(o.default,{children:[(0,p.jsx)(d.default,{style:v.input,placeholder:"Password",secureTextEntry:!0,onChangeText:C,value:O}),(0,p.jsx)(c.default,{style:v.submitButton,onPress:function(){return e(f)},children:(0,p.jsx)(a.default,{style:v.getKeyButtonText,children:"Get Key"})}),W?(0,p.jsx)(a.default,{style:v.decryptedKeyText,children:W}):(0,p.jsx)(a.default,{style:v.errorText,children:z})]})})]})]})]})})}},2480:()=>{}},t={};function r(l){var n=t[l];if(void 0!==n)return n.exports;var o=t[l]={exports:{}};return e[l].call(o.exports,o,o.exports,r),o.exports}r.m=e,(()=>{var e=[];r.O=(t,l,n,o)=>{if(!l){var a=1/0;for(c=0;c<e.length;c++){for(var[l,n,o]=e[c],d=!0,i=0;i<l.length;i++)(!1&o||a>=o)&&Object.keys(r.O).every((e=>r.O[e](l[i])))?l.splice(i--,1):(d=!1,o<a&&(a=o));if(d){e.splice(c--,1);var s=n();void 0!==s&&(t=s)}}return t}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[l,n,o]}})(),r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var l in t)r.o(t,l)&&!r.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})},r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={179:0};r.O.j=t=>0===e[t];var t=(t,l)=>{var n,o,[a,d,i]=l,s=0;if(a.some((t=>0!==e[t]))){for(n in d)r.o(d,n)&&(r.m[n]=d[n]);if(i)var c=i(r)}for(t&&t(l);s<a.length;s++)o=a[s],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return r.O(c)},l=self.webpackChunkweb=self.webpackChunkweb||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))})();var l=r.O(void 0,[740],(()=>r(9484)));l=r.O(l)})();
//# sourceMappingURL=main.0ed8567b.js.map