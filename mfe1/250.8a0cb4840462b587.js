/*! For license information please see 250.8a0cb4840462b587.js.LICENSE.txt */
"use strict";(self.webpackChunkmfe1=self.webpackChunkmfe1||[]).push([[250],{250:(e,r,t)=>{t.r(r);var n=t(901),s=t(541),o=t(264),l=t(159);function i(){const e=(0,o.use)(o.Event);return(0,l.jsxs)("form",{onSubmit:(0,o.onSubmit)((r=>{e.emit("message",r)})),children:[(0,l.jsxs)("section",{children:[(0,l.jsx)("label",{htmlFor:"from",children:"From"}),(0,l.jsx)("input",{type:"text",name:"from",id:"from",value:"mfe1",readOnly:!0})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("label",{htmlFor:"to",children:"To"}),(0,l.jsxs)("select",{name:"to",id:"to",children:[(0,l.jsx)("option",{value:"mfe2",children:"MFE 2"}),(0,l.jsx)("option",{value:"shell",children:"Shell"})]})]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("label",{htmlFor:"data",children:"Data"}),(0,l.jsx)("textarea",{name:"data",id:"data"})]}),(0,l.jsx)("button",{children:"Send"})]})}function a(){const[e,r]=(0,n.useState)(),t=(0,o.use)(o.Event);return(0,n.useEffect)((()=>{t.on("message",(e=>{"mfe1"===e.to&&r(e)}))})),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("em",{children:[(0,l.jsx)("strong",{children:"From:"})," ",null==e?void 0:e.from]}),(0,l.jsxs)("p",{children:[(0,l.jsx)("strong",{children:"Data:"})," ",null==e?void 0:e.data]})]})}const c=function(){return(0,l.jsxs)("div",{style:{flex:1},children:[(0,l.jsx)("h2",{children:"MFE 1"}),(0,l.jsx)("hr",{}),(0,l.jsx)(a,{}),(0,l.jsx)(i,{})]})};s.H(document.getElementById("root")).render((0,l.jsx)(n.StrictMode,{children:(0,l.jsx)(c,{})}))},541:(e,r,t)=>{var n=t(11);r.H=n.createRoot,n.hydrateRoot},245:(e,r,t)=>{var n=t(901),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,r,t){var n,o={},c=null,d=null;for(n in void 0!==t&&(c=""+t),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(d=r.ref),r)l.call(r,n)&&!a.hasOwnProperty(n)&&(o[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===o[n]&&(o[n]=r[n]);return{$$typeof:s,type:e,key:c,ref:d,props:o,_owner:i.current}}r.Fragment=o,r.jsx=c,r.jsxs=c},159:(e,r,t)=>{e.exports=t(245)}}]);