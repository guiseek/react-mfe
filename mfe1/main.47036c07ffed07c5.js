(()=>{var e,t,r,n,o,a,i,s,u,f,c,l,p,d,h,v,m,b,g,y={502:(e,t,r)=>{Promise.all([r.e(901),r.e(264),r.e(250)]).then(r.bind(r,250))},979:(e,t,r)=>{"use strict";r.r(t),r.d(t,{Event:()=>b,add:()=>c,onSubmit:()=>w,parse:()=>y,set:()=>l,token:()=>o,use:()=>s});class n{constructor(e,t){this.name=e,this.value=t}}function o(e,t){const r=new n(e,t);return l({key:r,use:t}),r}const a=new Map,i=new Map,s=e=>{const t=a.get(e);if(!t)throw new Error(`Provider ${e.name} not registered`);return t},u={function:e=>"function"==typeof e,class(e){return this.function(e)&&"prototype"in e}},f=async({key:e,use:t})=>{const r=null!=t?t:e,n=i.get(e);return u.function(r)?u.class(r)?new r(...Array.of(n)):await r(...Array.of(n)):r},c=async e=>{"key"in e?(i.set(e.key,(e=>{var t;return(null!=(t=e.deps)?t:[]).map(s)})(e)),a.set(e.key,await f(e))):(i.set(e,[]),a.set(e,await f({key:e})))},l=(...e)=>{e.forEach((e=>c(e)))};function p(e,t){if(!Object.prototype.hasOwnProperty.call(e,t))throw new TypeError("attempted to use private field on non-instance");return e}var d=0;function h(e){return"__private_"+d+++"_"+e}var v=h("map"),m=h("listeners");class b{constructor(){Object.defineProperty(this,m,{value:g}),Object.defineProperty(this,v,{writable:!0,value:new Map})}on(e,t){return p(this,v)[v].set(e,p(this,m)[m](e).add(t)),{off:()=>this.off(e,t)}}off(e,t){const r=p(this,m)[m](e);r.delete(t),p(this,v)[v].set(e,r)}emit(e,t){for(const r of p(this,m)[m](e))r(t)}}function g(e){var t;return null!=(t=p(this,v)[v].get(e))?t:new Set}const y=e=>{const t=new FormData(e);return Object.fromEntries(t.entries())},w=e=>t=>{t.preventDefault(),t.stopPropagation(),e(y(t.currentTarget))}}},w={};function k(e){var t=w[e];if(void 0!==t)return t.exports;var r=w[e]={exports:{}};return y[e](r,r.exports,k),r.exports}k.m=y,k.c=w,k.d=(e,t)=>{for(var r in t)k.o(t,r)&&!k.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},k.f={},k.e=e=>Promise.all(Object.keys(k.f).reduce(((t,r)=>(k.f[r](e,t),t)),[])),k.u=e=>e+"."+{250:"8a0cb4840462b587",264:"7f247513f9cec7ba",388:"7726156ab9b1e625",855:"cab987a726ba35c3",901:"b63e3ba428426d6f"}[e]+".js",k.miniCssF=e=>{},k.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),k.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="mfe1:",k.l=(r,n,o,a)=>{if(e[r])e[r].push(n);else{var i,s;if(void 0!==o)for(var u=document.getElementsByTagName("script"),f=0;f<u.length;f++){var c=u[f];if(c.getAttribute("src")==r||c.getAttribute("data-webpack")==t+o){i=c;break}}i||(s=!0,(i=document.createElement("script")).type="text/javascript",i.charset="utf-8",i.timeout=120,k.nc&&i.setAttribute("nonce",k.nc),i.setAttribute("data-webpack",t+o),i.src=r),e[r]=[n];var l=(t,n)=>{i.onerror=i.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(n))),t)return t(n)},p=setTimeout(l.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=l.bind(null,i.onerror),i.onload=l.bind(null,i.onload),s&&document.head.appendChild(i)}},k.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{k.S={};var e={},t={};k.I=(r,n)=>{n||(n=[]);var o=t[r];if(o||(o=t[r]={}),!(n.indexOf(o)>=0)){if(n.push(o),e[r])return e[r];k.o(k.S,r)||(k.S[r]={});var a=k.S[r],i="mfe1",s=(e,t,r,n)=>{var o=a[e]=a[e]||{},s=o[t];(!s||!s.loaded&&(!n!=!s.eager?n:i>s.from))&&(o[t]={get:r,from:i,eager:!!n})},u=[];return"default"===r&&(s("@react-mfe/common","0.0.1",(()=>()=>k(979)),1),s("react-dom","18.2.0",(()=>Promise.all([k.e(388),k.e(901)]).then((()=>()=>k(388))))),s("react","18.2.0",(()=>k.e(855).then((()=>()=>k(855)))))),e[r]=u.length?Promise.all(u).then((()=>e[r]=1)):1}}})(),(()=>{var e;k.g.importScripts&&(e=k.g.location+"");var t=k.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var n=r.length-1;n>-1&&(!e||!/^http(s?):/.test(e));)e=r[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),k.p=e})(),r=e=>{var t=e=>e.split(".").map((e=>+e==e?+e:e)),r=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=r[1]?t(r[1]):[];return r[2]&&(n.length++,n.push.apply(n,t(r[2]))),r[3]&&(n.push([]),n.push.apply(n,t(r[3]))),n},n=(e,t)=>{e=r(e),t=r(t);for(var n=0;;){if(n>=e.length)return n<t.length&&"u"!=(typeof t[n])[0];var o=e[n],a=(typeof o)[0];if(n>=t.length)return"u"==a;var i=t[n],s=(typeof i)[0];if(a!=s)return"o"==a&&"n"==s||"s"==s||"u"==a;if("o"!=a&&"u"!=a&&o!=i)return o<i;n++}},o=e=>{var t=e[0],r="";if(1===e.length)return"*";if(t+.5){r+=0==t?">=":-1==t?"<":1==t?"^":2==t?"~":t>0?"=":"!=";for(var n=1,a=1;a<e.length;a++)n--,r+="u"==(typeof(s=e[a]))[0]?"-":(n>0?".":"")+(n=2,s);return r}var i=[];for(a=1;a<e.length;a++){var s=e[a];i.push(0===s?"not("+u()+")":1===s?"("+u()+" || "+u()+")":2===s?i.pop()+" "+i.pop():o(s))}return u();function u(){return i.pop().replace(/^\((.+)\)$/,"$1")}},a=(e,t)=>{if(0 in e){t=r(t);var n=e[0],o=n<0;o&&(n=-n-1);for(var i=0,s=1,u=!0;;s++,i++){var f,c,l=s<e.length?(typeof e[s])[0]:"";if(i>=t.length||"o"==(c=(typeof(f=t[i]))[0]))return!u||("u"==l?s>n&&!o:""==l!=o);if("u"==c){if(!u||"u"!=l)return!1}else if(u)if(l==c)if(s<=n){if(f!=e[s])return!1}else{if(o?f>e[s]:f<e[s])return!1;f!=e[s]&&(u=!1)}else if("s"!=l&&"n"!=l){if(o||s<=n)return!1;u=!1,s--}else{if(s<=n||c<l!=o)return!1;u=!1}else"s"!=l&&"n"!=l&&(u=!1,s--)}}var p=[],d=p.pop.bind(p);for(i=1;i<e.length;i++){var h=e[i];p.push(1==h?d()|d():2==h?d()&d():h?a(h,t):!d())}return!!d()},i=(e,t)=>{var r=e[t];return Object.keys(r).reduce(((e,t)=>!e||!r[e].loaded&&n(e,t)?t:e),0)},s=(e,t,r,n)=>"Unsatisfied version "+r+" from "+(r&&e[t][r].from)+" of shared singleton module "+t+" (required "+o(n)+")",u=(e,t,r,n)=>{var o=i(e,r);return a(n,o)||c(s(e,r,o,n)),l(e[r][o])},f=(e,t,r,n)=>{var o=i(e,r);if(!a(n,o))throw new Error(s(e,r,o,n));return l(e[r][o])},c=e=>{"undefined"!=typeof console&&console.warn&&console.warn(e)},l=e=>(e.loaded=1,e.get()),d=(p=e=>function(t,r,n,o){var a=k.I(t);return a&&a.then?a.then(e.bind(e,t,k.S[t],r,n,o)):e(t,k.S[t],r,n,o)})(((e,t,r,n,o)=>t&&k.o(t,r)?u(t,0,r,n):o())),h=p(((e,t,r,n,o)=>t&&k.o(t,r)?f(t,0,r,n):o())),v={},m={901:()=>h("default","react",[4,18,2,0],(()=>k.e(855).then((()=>()=>k(855))))),264:()=>d("default","@react-mfe/common",[4,0,0,1],(()=>()=>k(979))),11:()=>h("default","react-dom",[4,18,2,0],(()=>k.e(388).then((()=>()=>k(388)))))},b={250:[11],264:[264],901:[901]},g={},k.f.consumes=(e,t)=>{k.o(b,e)&&b[e].forEach((e=>{if(k.o(v,e))return t.push(v[e]);if(!g[e]){var r=t=>{v[e]=0,k.m[e]=r=>{delete k.c[e],r.exports=t()}};g[e]=!0;var n=t=>{delete v[e],k.m[e]=r=>{throw delete k.c[e],t}};try{var o=m[e]();o.then?t.push(v[e]=o.then(r).catch(n)):r(o)}catch(e){n(e)}}}))},(()=>{var e={792:0};k.f.j=(t,r)=>{var n=k.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else if(/^(264|901)$/.test(t))e[t]=0;else{var o=new Promise(((r,o)=>n=e[t]=[r,o]));r.push(n[2]=o);var a=k.p+k.u(t),i=new Error;k.l(a,(r=>{if(k.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var o=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",i.name="ChunkLoadError",i.type=o,i.request=a,n[1](i)}}),"chunk-"+t,t)}};var t=(t,r)=>{var n,o,[a,i,s]=r,u=0;if(a.some((t=>0!==e[t]))){for(n in i)k.o(i,n)&&(k.m[n]=i[n]);s&&s(k)}for(t&&t(r);u<a.length;u++)o=a[u],k.o(e,o)&&e[o]&&e[o][0](),e[o]=0},r=self.webpackChunkmfe1=self.webpackChunkmfe1||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),k(502)})();