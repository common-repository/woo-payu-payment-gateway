(()=>{"use strict";var e={20:(e,t,r)=>{var n=r(609),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,r){var n,a={},l=null,d=null;for(n in void 0!==r&&(l=""+r),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)s.call(t,n)&&!c.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===a[n]&&(a[n]=t[n]);return{$$typeof:o,type:e,key:l,ref:d,props:a,_owner:i.current}}t.Fragment=a,t.jsx=l,t.jsxs=l},848:(e,t,r)=>{e.exports=r(20)},609:e=>{e.exports=window.React}},t={};const r=window.wp.htmlEntities,n=window.wc.wcSettings,o=window.wc.wcBlocksRegistry;var a=function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}(848);const s="payuklarna",i=(0,n.getSetting)(`${s}_data`,{}),c=(0,r.decodeEntities)(i.available||!1),l=(0,r.decodeEntities)(i.title||"Klarna"),d=(0,r.decodeEntities)(i.description||""),p=i.icon,m=()=>(0,a.jsx)("div",{children:d}),y=e=>{const{PaymentMethodLabel:t}=e.components;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t,{text:l,className:"payu-block-method"}),(0,a.jsx)("span",{className:"payu-block-method-logo",children:(0,a.jsx)("img",{src:p,alt:"Klarna",name:l})})]})},f={name:s,label:(0,a.jsx)(y,{}),content:(0,a.jsx)(m,{}),edit:(0,a.jsx)(m,{}),canMakePayment:()=>c,ariaLabel:l};(0,o.registerPaymentMethod)(f)})();