"use strict";(self.webpackChunkneordinary_template_react_js_admin=self.webpackChunkneordinary_template_react_js_admin||[]).push([[187],{79286:function(n,e,t){t.d(e,{Z:function(){return s}});var o=t(87462),c=t(72791),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"},a=t(54291),i=function(n,e){return c.createElement(a.Z,(0,o.Z)({},n,{ref:e,icon:r}))};var s=c.forwardRef(i)},21110:function(n,e,t){t.d(e,{ZP:function(){return an}});var o=t(29439),c=t(93433),r=t(72791),a=t(14699),i=t(13318),s=t(37557),l=t(82621),u=t(87462),f={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"}}]},name:"exclamation-circle",theme:"filled"},d=t(54291),p=function(n,e){return r.createElement(d.Z,(0,u.Z)({},n,{ref:e,icon:f}))};var m=r.forwardRef(p),v={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"}}]},name:"info-circle",theme:"filled"},g=function(n,e){return r.createElement(d.Z,(0,u.Z)({},n,{ref:e,icon:v}))};var y=r.forwardRef(g),h=t(77106),C=t(81694),b=t.n(C),x=t(44925),E=t(1413),Z=t(54164),O=t(98568),k=t(4942),w=t(11354),j=r.forwardRef((function(n,e){var t=n.prefixCls,c=n.style,a=n.className,i=n.duration,s=void 0===i?4.5:i,l=n.eventKey,f=n.content,d=n.closable,p=n.closeIcon,m=void 0===p?"x":p,v=n.props,g=n.onClick,y=n.onNoticeClose,h=n.times,C=r.useState(!1),x=(0,o.Z)(C,2),E=x[0],Z=x[1],O=function(){y(l)};r.useEffect((function(){if(!E&&s>0){var n=setTimeout((function(){O()}),1e3*s);return function(){clearTimeout(n)}}}),[s,E,h]);var j="".concat(t,"-notice");return r.createElement("div",(0,u.Z)({},v,{ref:e,className:b()(j,a,(0,k.Z)({},"".concat(j,"-closable"),d)),style:c,onMouseEnter:function(){Z(!0)},onMouseLeave:function(){Z(!1)},onClick:g}),r.createElement("div",{className:"".concat(j,"-content")},f),d&&r.createElement("a",{tabIndex:0,className:"".concat(j,"-close"),onKeyDown:function(n){"Enter"!==n.key&&"Enter"!==n.code&&n.keyCode!==w.Z.ENTER||O()},onClick:function(n){n.preventDefault(),n.stopPropagation(),O()}},m))})),N=j,P=r.forwardRef((function(n,e){var t=n.prefixCls,a=void 0===t?"rc-notification":t,i=n.container,s=n.motion,l=n.maxCount,f=n.className,d=n.style,p=n.onAllRemoved,m=r.useState([]),v=(0,o.Z)(m,2),g=v[0],y=v[1],h=function(n){var e,t=g.find((function(e){return e.key===n}));null===t||void 0===t||null===(e=t.onClose)||void 0===e||e.call(t),y((function(e){return e.filter((function(e){return e.key!==n}))}))};r.useImperativeHandle(e,(function(){return{open:function(n){y((function(e){var t,o=(0,c.Z)(e),r=o.findIndex((function(e){return e.key===n.key})),a=(0,E.Z)({},n);r>=0?(a.times=((null===(t=e[r])||void 0===t?void 0:t.times)||0)+1,o[r]=a):(a.times=0,o.push(a));return l>0&&o.length>l&&(o=o.slice(-l)),o}))},close:function(n){h(n)},destroy:function(){y([])}}}));var C=r.useState({}),x=(0,o.Z)(C,2),k=x[0],w=x[1];r.useEffect((function(){var n={};g.forEach((function(e){var t=e.placement,o=void 0===t?"topRight":t;o&&(n[o]=n[o]||[],n[o].push(e))})),Object.keys(k).forEach((function(e){n[e]=n[e]||[]})),w(n)}),[g]);var j=r.useRef(!1);if(r.useEffect((function(){Object.keys(k).length>0?j.current=!0:j.current&&(null===p||void 0===p||p(),j.current=!1)}),[k]),!i)return null;var P=Object.keys(k);return(0,Z.createPortal)(r.createElement(r.Fragment,null,P.map((function(n){var e=k[n].map((function(n){return{config:n,key:n.key}})),t="function"===typeof s?s(n):s;return r.createElement(O.V4,(0,u.Z)({key:n,className:b()(a,"".concat(a,"-").concat(n),null===f||void 0===f?void 0:f(n)),style:null===d||void 0===d?void 0:d(n),keys:e,motionAppear:!0},t,{onAllRemoved:function(){!function(n){w((function(e){var t=(0,E.Z)({},e);return(t[n]||[]).length||delete t[n],t}))}(n)}}),(function(n,e){var t=n.config,o=n.className,c=n.style,i=t.key,s=t.times,l=t.className,f=t.style;return r.createElement(N,(0,u.Z)({},t,{ref:e,prefixCls:a,className:b()(o,l),style:(0,E.Z)((0,E.Z)({},c),f),times:s,key:i,eventKey:i,onNoticeClose:h}))}))}))),i)}));var S=P,R=["getContainer","motion","prefixCls","maxCount","className","style","onAllRemoved"],I=function(){return document.body},M=0;function z(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=n.getContainer,t=void 0===e?I:e,a=n.motion,i=n.prefixCls,s=n.maxCount,l=n.className,u=n.style,f=n.onAllRemoved,d=(0,x.Z)(n,R),p=r.useState(),m=(0,o.Z)(p,2),v=m[0],g=m[1],y=r.useRef(),h=r.createElement(S,{container:v,ref:y,prefixCls:i,motion:a,maxCount:s,className:l,style:u,onAllRemoved:f}),C=r.useState([]),b=(0,o.Z)(C,2),E=b[0],Z=b[1],O=r.useMemo((function(){return{open:function(n){var e=function(){for(var n={},e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];return t.forEach((function(e){e&&Object.keys(e).forEach((function(t){var o=e[t];void 0!==o&&(n[t]=o)}))})),n}(d,n);null!==e.key&&void 0!==e.key||(e.key="rc-notification-".concat(M),M+=1),Z((function(n){return[].concat((0,c.Z)(n),[{type:"open",config:e}])}))},close:function(n){Z((function(e){return[].concat((0,c.Z)(e),[{type:"close",key:n}])}))},destroy:function(){Z((function(n){return[].concat((0,c.Z)(n),[{type:"destroy"}])}))}}}),[]);return r.useEffect((function(){g(t())})),r.useEffect((function(){y.current&&E.length&&(E.forEach((function(n){switch(n.type){case"open":y.current.open(n.config);break;case"close":y.current.close(n.key);break;case"destroy":y.current.destroy()}})),Z((function(n){return n.filter((function(n){return!E.includes(n)}))})))}),[E]),[O,h]}var A=t(71929),_=t(37283),F=t(67521),q=t(55564),B=t(89922),H=function(n){var e,t,o=n.componentCls,c=n.iconCls,r=n.boxShadow,a=n.colorText,i=n.colorSuccess,s=n.colorError,l=n.colorWarning,u=n.colorInfo,f=n.fontSizeLG,d=n.motionEaseInOutCirc,p=n.motionDurationSlow,m=n.marginXS,v=n.paddingXS,g=n.borderRadiusLG,y=n.zIndexPopup,h=n.contentPadding,C=n.contentBg,b="".concat(o,"-notice"),x=new _.E4("MessageMoveIn",{"0%":{padding:0,transform:"translateY(-100%)",opacity:0},"100%":{padding:v,transform:"translateY(0)",opacity:1}}),E=new _.E4("MessageMoveOut",{"0%":{maxHeight:n.height,padding:v,opacity:1},"100%":{maxHeight:0,padding:0,opacity:0}}),Z=(e={padding:v,textAlign:"center"},(0,k.Z)(e,"".concat(o,"-custom-content > ").concat(c),{verticalAlign:"text-bottom",marginInlineEnd:m,fontSize:f}),(0,k.Z)(e,"".concat(b,"-content"),{display:"inline-block",padding:h,background:C,borderRadius:g,boxShadow:r,pointerEvents:"all"}),(0,k.Z)(e,"".concat(o,"-success > ").concat(c),{color:i}),(0,k.Z)(e,"".concat(o,"-error > ").concat(c),{color:s}),(0,k.Z)(e,"".concat(o,"-warning > ").concat(c),{color:l}),(0,k.Z)(e,"".concat(o,"-info > ").concat(c,",\n      ").concat(o,"-loading > ").concat(c),{color:u}),e);return[(0,k.Z)({},o,Object.assign(Object.assign({},(0,F.Wf)(n)),(t={color:a,position:"fixed",top:m,width:"100%",pointerEvents:"none",zIndex:y},(0,k.Z)(t,"".concat(o,"-move-up"),{animationFillMode:"forwards"}),(0,k.Z)(t,"\n        ".concat(o,"-move-up-appear,\n        ").concat(o,"-move-up-enter\n      "),{animationName:x,animationDuration:p,animationPlayState:"paused",animationTimingFunction:d}),(0,k.Z)(t,"\n        ".concat(o,"-move-up-appear").concat(o,"-move-up-appear-active,\n        ").concat(o,"-move-up-enter").concat(o,"-move-up-enter-active\n      "),{animationPlayState:"running"}),(0,k.Z)(t,"".concat(o,"-move-up-leave"),{animationName:E,animationDuration:p,animationPlayState:"paused",animationTimingFunction:d}),(0,k.Z)(t,"".concat(o,"-move-up-leave").concat(o,"-move-up-leave-active"),{animationPlayState:"running"}),(0,k.Z)(t,"&-rtl",{direction:"rtl",span:{direction:"rtl"}}),t))),(0,k.Z)({},o,(0,k.Z)({},b,Object.assign({},Z))),(0,k.Z)({},"".concat(o,"-notice-pure-panel"),Object.assign(Object.assign({},Z),{padding:0,textAlign:"start"}))]},T=(0,q.Z)("Message",(function(n){var e=(0,B.TS)(n,{height:150});return[H(e)]}),(function(n){return{zIndexPopup:n.zIndexPopupBase+10,contentBg:n.colorBgElevated,contentPadding:"".concat((n.controlHeightLG-n.fontSize*n.lineHeight)/2,"px ").concat(n.paddingSM,"px")}}),{clientOnly:!0}),D=function(n,e){var t={};for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&e.indexOf(o)<0&&(t[o]=n[o]);if(null!=n&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(o=Object.getOwnPropertySymbols(n);c<o.length;c++)e.indexOf(o[c])<0&&Object.prototype.propertyIsEnumerable.call(n,o[c])&&(t[o[c]]=n[o[c]])}return t},K={info:r.createElement(y,null),success:r.createElement(s.Z,null),error:r.createElement(l.Z,null),warning:r.createElement(m,null),loading:r.createElement(h.Z,null)},L=function(n){var e=n.prefixCls,t=n.type,o=n.icon,c=n.children;return r.createElement("div",{className:b()("".concat(e,"-custom-content"),"".concat(e,"-").concat(t))},o||K[t],r.createElement("span",null,c))},V=function(n){var e=n.prefixCls,t=n.className,c=n.type,a=n.icon,i=n.content,s=D(n,["prefixCls","className","type","icon","content"]),l=r.useContext(A.E_).getPrefixCls,u=e||l("message"),f=T(u),d=(0,o.Z)(f,2)[1];return r.createElement(N,Object.assign({},s,{prefixCls:u,className:b()(t,d,"".concat(u,"-notice-pure-panel")),eventKey:"pure",duration:null,content:r.createElement(L,{prefixCls:u,type:c,icon:a},i)}))},G=t(60732);function W(n){var e,t=new Promise((function(t){e=n((function(){t(!0)}))})),o=function(){null===e||void 0===e||e()};return o.then=function(n,e){return t.then(n,e)},o.promise=t,o}var X=function(n,e){var t={};for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&e.indexOf(o)<0&&(t[o]=n[o]);if(null!=n&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(o=Object.getOwnPropertySymbols(n);c<o.length;c++)e.indexOf(o[c])<0&&Object.prototype.propertyIsEnumerable.call(n,o[c])&&(t[o[c]]=n[o[c]])}return t},Y=r.forwardRef((function(n,e){var t=n.top,c=n.prefixCls,a=n.getContainer,i=n.maxCount,s=n.duration,l=void 0===s?3:s,u=n.rtl,f=n.transitionName,d=n.onAllRemoved,p=r.useContext(A.E_),m=p.getPrefixCls,v=p.getPopupContainer,g=p.message,y=c||m("message"),h=T(y),C=(0,o.Z)(h,2)[1],x=r.createElement("span",{className:"".concat(y,"-close-x")},r.createElement(G.Z,{className:"".concat(y,"-close-icon")})),E=z({prefixCls:y,style:function(){return{left:"50%",transform:"translateX(-50%)",top:null!==t&&void 0!==t?t:8}},className:function(){return b()(C,(0,k.Z)({},"".concat(y,"-rtl"),u))},motion:function(){return function(n,e){return{motionName:null!==e&&void 0!==e?e:"".concat(n,"-move-up")}}(y,f)},closable:!1,closeIcon:x,duration:l,getContainer:function(){return(null===a||void 0===a?void 0:a())||(null===v||void 0===v?void 0:v())||document.body},maxCount:i,onAllRemoved:d}),Z=(0,o.Z)(E,2),O=Z[0],w=Z[1];return r.useImperativeHandle(e,(function(){return Object.assign(Object.assign({},O),{prefixCls:y,hashId:C,message:g})})),w})),U=0;function J(n){var e=r.useRef(null),t=r.useMemo((function(){var n=function(n){var t;null===(t=e.current)||void 0===t||t.close(n)},t=function(t){if(!e.current){var o=function(){};return o.then=function(){},o}var c=e.current,a=c.open,i=c.prefixCls,s=c.hashId,l=c.message,u="".concat(i,"-notice"),f=t.content,d=t.icon,p=t.type,m=t.key,v=t.className,g=t.style,y=t.onClose,h=X(t,["content","icon","type","key","className","style","onClose"]),C=m;return void 0!==C&&null!==C||(C="antd-message-".concat(U+=1)),W((function(e){return a(Object.assign(Object.assign({},h),{key:C,content:r.createElement(L,{prefixCls:i,type:p,icon:d},f),placement:"top",className:b()(p&&"".concat(u,"-").concat(p),s,v,null===l||void 0===l?void 0:l.className),style:Object.assign(Object.assign({},null===l||void 0===l?void 0:l.style),g),onClose:function(){null===y||void 0===y||y(),e()}})),function(){n(C)}}))},o={open:t,destroy:function(t){var o;void 0!==t?n(t):null===(o=e.current)||void 0===o||o.destroy()}};return["info","success","warning","error","loading"].forEach((function(n){o[n]=function(e,o,c){var r,a,i;r=e&&"object"===typeof e&&"content"in e?e:{content:e},"function"===typeof o?i=o:(a=o,i=c);var s=Object.assign(Object.assign({onClose:i,duration:a},r),{type:n});return t(s)}})),o}),[]);return[t,r.createElement(Y,Object.assign({key:"message-holder"},n,{ref:e}))]}var Q=null,$=function(n){return n()},nn=[],en={};function tn(){var n=en,e=n.prefixCls,t=n.getContainer,o=n.duration,c=n.rtl,r=n.maxCount,a=n.top,s=null!==e&&void 0!==e?e:(0,i.w6)().getPrefixCls("message"),l=(null===t||void 0===t?void 0:t())||document.body;return{prefixCls:s,getContainer:function(){return l},duration:o,rtl:c,maxCount:r,top:a}}var on=r.forwardRef((function(n,e){var t=r.useState(tn),c=(0,o.Z)(t,2),a=c[0],s=c[1],l=J(a),u=(0,o.Z)(l,2),f=u[0],d=u[1],p=(0,i.w6)(),m=p.getRootPrefixCls(),v=p.getIconPrefixCls(),g=p.getTheme(),y=function(){s(tn)};return r.useEffect(y,[]),r.useImperativeHandle(e,(function(){var n=Object.assign({},f);return Object.keys(n).forEach((function(e){n[e]=function(){return y(),f[e].apply(f,arguments)}})),{instance:n,sync:y}})),r.createElement(i.ZP,{prefixCls:m,iconPrefixCls:v,theme:g},d)}));function cn(){if(!Q){var n=document.createDocumentFragment(),e={fragment:n};return Q=e,void $((function(){(0,a.s)(r.createElement(on,{ref:function(n){var t=n||{},o=t.instance,c=t.sync;Promise.resolve().then((function(){!e.instance&&o&&(e.instance=o,e.sync=c,cn())}))}}),n)}))}Q.instance&&(nn.forEach((function(n){var e=n.type;if(!n.skipped)switch(e){case"open":$((function(){var e=Q.instance.open(Object.assign(Object.assign({},en),n.config));null===e||void 0===e||e.then(n.resolve),n.setCloseFn(e)}));break;case"destroy":$((function(){null===Q||void 0===Q||Q.instance.destroy(n.key)}));break;default:$((function(){var t,o=(t=Q.instance)[e].apply(t,(0,c.Z)(n.args));null===o||void 0===o||o.then(n.resolve),n.setCloseFn(o)}))}})),nn=[])}var rn={open:function(n){var e=W((function(e){var t,o={type:"open",config:n,resolve:e,setCloseFn:function(n){t=n}};return nn.push(o),function(){t?$((function(){t()})):o.skipped=!0}}));return cn(),e},destroy:function(n){nn.push({type:"destroy",key:n}),cn()},config:function(n){en=Object.assign(Object.assign({},en),n),$((function(){var n;null===(n=null===Q||void 0===Q?void 0:Q.sync)||void 0===n||n.call(Q)}))},useMessage:function(n){return J(n)},_InternalPanelDoNotUseOrYouWillBeFired:V};["success","info","warning","error","loading"].forEach((function(n){rn[n]=function(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];return function(n,e){var t=W((function(t){var o,c={type:n,args:e,resolve:t,setCloseFn:function(n){o=n}};return nn.push(c),function(){o?$((function(){o()})):c.skipped=!0}}));return cn(),t}(n,t)}}));var an=rn}}]);
//# sourceMappingURL=187.85804af1.chunk.js.map