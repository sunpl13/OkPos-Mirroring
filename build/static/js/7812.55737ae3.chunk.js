"use strict";(self.webpackChunkneordinary_template_react_js_admin=self.webpackChunkneordinary_template_react_js_admin||[]).push([[7812],{27812:(e,t,s)=>{s.r(t),s.d(t,{default:()=>m});var a=s(72791),n=s(20961),l=s(78983),c=s(70844),r=s(13156),i=s(96672),d=s(19311),o=s(13538),u=s(64509),h=s(80184);const m=()=>{const[e,t]=(0,a.useState)([]),[s,m]=(0,a.useState)(!1),[x,j]=(0,a.useState)(!0),[_,y]=(0,a.useState)(""),[b,p]=(0,a.useState)({noticeId:-1,title:"",createdAt:"",content:"",imageUrls:[],fileUrls:[]}),C=async()=>{try{const e=await i.Z.request({data:{},query:{},path:{},method:i.w.GET,url:d.l.GET_MALL_NOTICES});t(null===e||void 0===e?void 0:e.data.result.responses)}catch(e){alert(e)}};(0,a.useEffect)((()=>{C()}),[]);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(n.Z,{title:"\uacf5\uc9c0\uc0ac\ud56d"}),(0,h.jsx)(l.rb,{children:(0,h.jsx)(l.b7,{xs:12,children:(0,h.jsxs)(l.xH,{className:"mb-4",children:[(0,h.jsx)(l.bn,{children:(0,h.jsx)(l.lx,{className:"row g-3",children:(0,h.jsx)(l.b7,{xs:1,children:(0,h.jsx)(u.Z,{onClick:()=>{j(!1),p({noticeId:-1,title:"",createdAt:"",content:"",imageUrls:[],fileUrls:[]}),y(""),m(!s)},children:"\ucd94\uac00"})})})}),(0,h.jsx)(l.sl,{children:(0,h.jsx)(c.Z,{items:e,onClick:async e=>{(async e=>{try{const{data:t}=await i.Z.request({data:{},query:{},path:{noticeId:e},method:i.w.GET,url:"".concat(d.l.GET_MALL_NOTICE)});p(t.result),y(t.result.content)}catch(t){alert(t)}})(e.noticeId),m(!s)},columns:r.W,className:"userList"})})]})})}),(0,h.jsx)(o.Z,{onChange:e=>{let{target:t}=e;const{id:s,value:a}=t;p({...b,[s]:a})},visible:s,value:b,setVisible:m,isReadOnly:x,setIsReadOnly:j,getList:C,setSelectedItem:p,content:_,setContent:y})]})}}}]);
//# sourceMappingURL=7812.55737ae3.chunk.js.map