/*! For license information please see 49.7f287b3a19f2cec6.js.LICENSE.txt */
"use strict";(self.webpackChunkmfe2=self.webpackChunkmfe2||[]).push([[49],{49:(e,r,t)=>{t.r(r),t.d(r,{default:()=>i});var n=t(264),s=t(159);function o(){const e=(0,n.use)(n.Event);return(0,s.jsxs)("form",{onSubmit:(0,n.onSubmit)((r=>{e.emit("message",r)})),children:[(0,s.jsxs)("section",{children:[(0,s.jsx)("label",{htmlFor:"from",children:"From"}),(0,s.jsx)("input",{type:"text",name:"from",id:"from",value:"mfe2",readOnly:!0})]}),(0,s.jsxs)("section",{children:[(0,s.jsx)("label",{htmlFor:"to",children:"To"}),(0,s.jsxs)("select",{name:"to",id:"to",children:[(0,s.jsx)("option",{value:"mfe1",children:"MFE 1"}),(0,s.jsx)("option",{value:"shell",children:"Shell"})]})]}),(0,s.jsxs)("section",{children:[(0,s.jsx)("label",{htmlFor:"data",children:"Data"}),(0,s.jsx)("textarea",{name:"data",id:"data"})]}),(0,s.jsx)("button",{children:"Send"})]})}var l=t(901);function a(){const[e,r]=(0,l.useState)(),t=(0,n.use)(n.Event);return(0,l.useEffect)((()=>{t.on("message",(e=>{"mfe2"===e.to&&r(e)}))})),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("em",{children:[(0,s.jsx)("strong",{children:"From:"})," ",null==e?void 0:e.from]}),(0,s.jsxs)("p",{children:[(0,s.jsx)("strong",{children:"Data:"})," ",null==e?void 0:e.data]})]})}const i=function(){return(0,s.jsxs)("div",{style:{flex:1},children:[(0,s.jsx)("h2",{children:"MFE 2"}),(0,s.jsx)("hr",{}),(0,s.jsx)(a,{}),(0,s.jsx)(o,{})]})}},245:(e,r,t)=>{var n=t(901),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,r,t){var n,o={},c=null,d=null;for(n in void 0!==t&&(c=""+t),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(d=r.ref),r)l.call(r,n)&&!i.hasOwnProperty(n)&&(o[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===o[n]&&(o[n]=r[n]);return{$$typeof:s,type:e,key:c,ref:d,props:o,_owner:a.current}}r.Fragment=o,r.jsx=c,r.jsxs=c},159:(e,r,t)=>{e.exports=t(245)}}]);