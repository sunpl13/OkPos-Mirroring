"use strict";(self.webpackChunkneordinary_template_react_js_admin=self.webpackChunkneordinary_template_react_js_admin||[]).push([[1589],{3460:function(e,n,r){var s=r(78983),l=r(80184);n.Z=function(e){var n=e.onClick,r=e.visible,a=e.setVisible;return(0,l.jsx)(s.Tk,{visible:r,alignment:"center",children:(0,l.jsxs)(s.PO,{children:[(0,l.jsx)(s.fl,{children:"\uc815\ub9d0 \ud398\uc774\uc9c0\uc5d0\uc11c \ub098\uac00\uc2dc\uaca0\uc2b5\ub2c8\uae4c?"}),(0,l.jsx)(s.sD,{children:"\uc9c0\uae08 \ud398\uc774\uc9c0\ub97c \ub098\uac00\uc2dc\uba74 \ubcc0\uacbd\uc0ac\ud56d\uc774 \uc800\uc7a5\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."}),(0,l.jsxs)(s.Ym,{children:[(0,l.jsx)(s.u5,{color:"danger",onClick:n,children:"\ub098\uac00\uae30"}),(0,l.jsx)(s.u5,{color:"primary",onClick:function(){return a(!1)},children:"Cancel"})]})]})})}},99921:function(e,n,r){var s=r(78983),l=r(80184);n.Z=function(e){var n=e.visible,r=e.title,a=void 0===r?"\uc0ad\uc81c \ud655\uc778":r,i=e.children,t=e.onDelete,c=e.setVisible;return(0,l.jsxs)(s.Tk,{visible:n,alignment:"center",children:[(0,l.jsx)(s.p0,{children:(0,l.jsx)(s.fl,{children:a})}),(0,l.jsx)(s.sD,{children:i||"\uc815\ub9d0 \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?"}),(0,l.jsxs)(s.Ym,{children:[(0,l.jsx)(s.u5,{onClick:t,color:"primary",children:"\ud655\uc778"}),(0,l.jsx)(s.u5,{color:"secondary",onClick:function(){return c(!1)},children:"\ucde8\uc18c"})]})]})}},3854:function(e,n,r){var s=r(78983),l=(r(72791),r(80184));n.Z=function(e){var n=e.type,r=e.onChange,a=e.id,i=e.placeholder,t=e.value,c=e.label,d=e.readOnly,o=e.disabled,u=e.isRequired,h=e.xs;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.L8,{htmlFor:"".concat(a,"Static"),className:"col-sm-2 col-form-label",children:(0,l.jsx)("span",{className:u?"required":"",children:c||" * "})}),(0,l.jsx)(s.b7,{className:"align-items-center",xs:h,style:{display:"flex"},children:(0,l.jsx)(s.jO,{type:n||"text",id:a,placeholder:i||"",value:"file"===n?void 0:t||"",onChange:r,readOnly:d,disabled:o})})]})}},11589:function(e,n,r){r.r(n),r.d(n,{default:function(){return Z}});var s=r(4942),l=r(1413),a=r(74165),i=r(15861),t=r(29439),c=r(72791),d=r(20961),o=r(78983),u=r(19977),h=[{key:"no",label:"No",_props:{color:"primary",className:"no"}},{key:"name",label:"\uc774\ub984",_props:{color:"primary",className:"name"}},{key:"email",label:"\uc774\uba54\uc77c",_props:{color:"primary",className:"email"}}],x=r(3854),m=r(3460),p=r(99921),j=r(96672),b=r(19311),v=r(59434),y=r(80184),f=function(e){var n=e.getList,r=e.value,s=e.visible,l=e.setVisible,d=e.onChange,u=e.isReadOnly,h=e.setIsReadOnly,f=(0,c.useState)(!1),Z=(0,t.Z)(f,2),g=Z[0],k=Z[1],C=(0,c.useState)(!1),N=(0,t.Z)(C,2),I=N[0],O=N[1],_=(0,v.I0)(),E=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(){var s,i;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.Z.request({data:{},query:{},path:{id:r.inquiryEnglishId},method:j.w.PATCH,url:"".concat(b.l.ENGLISH_HOME_INQUIRY,"/:id/d")});case 3:s=e.sent,(i=s.data).isSuccess&&(n(),k(!1),O(!1),h(!0),l(!1),_({type:"SET_TOAST_STATE",visibleState:!0,toastColor:"success",textColor:"white",text:"".concat(i.result)})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),alert(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(o.Tk,{alignment:"center",size:"lg",visible:s,children:[(0,y.jsx)(o.p0,{children:(0,y.jsx)(o.fl,{children:"\ubb38\uc758 \uc0c1\uc138"})}),(0,y.jsxs)(o.sD,{children:[(0,y.jsx)(o.rb,{className:"mb-3",children:(0,y.jsx)(x.Z,{xs:4,onChange:d,id:"inquiryEnglishId",placeholder:"ID",label:"No",readOnly:!0,disabled:!0,value:-1===r.inquiryEnglishId?"":r.inquiryEnglishId})}),(0,y.jsxs)(o.rb,{className:"mb-3",children:[(0,y.jsx)(x.Z,{onChange:d,id:"name",placeholder:"\uc774\ub984",label:"\uc774\ub984",readOnly:u,disabled:u,value:r.name}),(0,y.jsx)(x.Z,{onChange:d,id:"email",placeholder:"\uc774\uba54\uc77c",label:"\uc774\uba54\uc77c",readOnly:u,disabled:u,value:r.email})]}),(0,y.jsxs)(o.rb,{className:"mb-3",children:[(0,y.jsx)(x.Z,{onChange:d,id:"country",placeholder:"\uad6d\uac00",label:"\uad6d\uac00",readOnly:u,disabled:u,value:r.country}),(0,y.jsx)(x.Z,{onChange:d,id:"companyName",placeholder:"\ud68c\uc0ac \uba85",label:"\ud68c\uc0ac \uba85",readOnly:u,disabled:u,value:r.companyName})]}),(0,y.jsx)(o.rb,{className:"mb-3",children:(0,y.jsx)(x.Z,{onChange:d,id:"address",placeholder:"\uc8fc\uc18c",label:"\uc8fc\uc18c",readOnly:u,disabled:u,value:r.address})}),(0,y.jsxs)(o.rb,{children:[(0,y.jsx)(o.L8,{children:"\ubb38\uc758 \ub0b4\uc6a9"}),(0,y.jsx)(o.PB,{placeholder:"\ubb38\uc758 \ub0b4\uc6a9",readOnly:u,disabled:u,onChange:d,value:r.content,rows:15,id:"content"})]})]}),(0,y.jsxs)(o.Ym,{children:[(0,y.jsx)(o.u5,{color:"danger",onClick:function(){return k(!0)},children:"\uc0ad\uc81c"}),(0,y.jsx)(o.u5,{color:"primary",onClick:function(){u||-1===r.No?(l(!1),h(!0)):O(!0)},children:"Cancel"})]})]}),(0,y.jsx)(p.Z,{onDelete:E,visible:g,setVisible:k}),(0,y.jsx)(m.Z,{onClick:function(){O(!1),l(!1),h(!0)},visible:I,setVisible:O})]})},Z=function(){var e=(0,c.useState)([]),n=(0,t.Z)(e,2),r=n[0],x=n[1],m=(0,c.useState)(!1),p=(0,t.Z)(m,2),v=p[0],Z=p[1],g=(0,c.useState)(!0),k=(0,t.Z)(g,2),C=k[0],N=k[1],I=(0,c.useState)({inquiryEnglishId:-1,email:"",name:"",content:"",country:"",companyName:"",address:""}),O=(0,t.Z)(I,2),_=O[0],E=O[1],w=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(){var n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.Z.request({data:{},query:{},path:{},method:j.w.GET,url:b.l.ENGLISH_HOME_INQUIRY});case 3:n=e.sent,x(null===n||void 0===n?void 0:n.data.result.responses),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),alert(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),q=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(n){var r,s;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.Z.request({data:{},query:{},path:{id:n},method:j.w.GET,url:"".concat(b.l.ENGLISH_HOME_INQUIRY,"/:id")});case 3:r=e.sent,s=r.data,E(s.result),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),alert(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}();(0,c.useEffect)((function(){w()}),[]);var S=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(n){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:q(n.inquiryEnglishId),Z(!v);case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,y.jsxs)("main",{children:[(0,y.jsx)(d.Z,{title:"1:1 \ubb38\uc758"}),(0,y.jsx)(o.rb,{children:(0,y.jsx)(o.b7,{xs:12,children:(0,y.jsxs)(o.xH,{className:"mb-4",children:[(0,y.jsx)(o.bn,{children:(0,y.jsx)(o.lx,{className:"row g-3",children:(0,y.jsx)(o.b7,{xs:1,children:(0,y.jsx)(o.u5,{color:"primary",onClick:w,children:"\uc870\ud68c\ud558\uae30"})})})}),(0,y.jsx)(o.sl,{children:(0,y.jsx)(u.Z,{items:r,onClick:S,columns:h,className:"inquiryList",datePickerHidden:!1})})]})})}),(0,y.jsx)(f,{onChange:function(e){var n=e.target,r=n.id,a=n.value;E((0,l.Z)((0,l.Z)({},_),{},(0,s.Z)({},r,a)))},visible:v,value:_,setVisible:Z,isReadOnly:C,setIsReadOnly:N,getList:w})]})}}}]);
//# sourceMappingURL=1589.c772ce81.chunk.js.map