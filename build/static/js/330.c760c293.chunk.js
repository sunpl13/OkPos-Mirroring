"use strict";(self.webpackChunkneordinary_template_react_js_admin=self.webpackChunkneordinary_template_react_js_admin||[]).push([[330],{41085:function(e,n,r){var l,a=r(30168),i=r(78983),s=r(59513),t=r.n(s),o=r(91191),c=(r(68639),r(72426)),d=r.n(c),u=(r(99414),r(80184));n.Z=function(e){var n=e.id,r=e.date,l=e.onChange,a=e.label,s=e.readOnly,t=void 0!==s&&s,o=e.isRequired,c=e.isDisabled,b=void 0!==c&&c,m=function(e){l({target:{value:e,id:n}})};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(i.L8,{htmlFor:"".concat(n,"Static"),className:"col-sm-2 col-form-label",children:(0,u.jsx)("span",{className:o?"required":"",children:a||" * "})}),(0,u.jsx)(i.b7,{children:(0,u.jsx)(h,{readOnly:t,dateFormat:"yyyy-MM-dd",selected:d()(r).toDate(),onChange:function(e){return m(e)},disabled:b,id:n})})]})};var h=(0,o.ZP)(t())(l||(l=(0,a.Z)(["\n  display: block;\n  width: 100%;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: var(--cui-input-color, rgba(44, 56, 74, 0.95));\n  background-color: var(--cui-input-bg, #fff);\n  background-clip: padding-box;\n  border: 1px solid var(--cui-input-border-color, #b1b7c1);\n  appearance: none;\n  border-radius: 0.375rem;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n\n  &:disabled {\n    background-color: #d8dbe0;\n  }\n"])))},79528:function(e,n,r){var l,a=r(30168),i=r(78983),s=r(91191),t=r(76030),o=(r(72791),r(80184));n.Z=function(e){var n=e.id,r=e.files,l=e.label,a=e.isRequired;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.L8,{htmlFor:"".concat(n,"Static"),className:"col-sm-2 col-form-label",children:(0,o.jsx)("span",{className:a?"required":"",children:l||" * "})}),(0,o.jsx)(i.b7,{children:(null===r||void 0===r?void 0:r.length)>0?r.map((function(e,n){var r=e.split("/"),l=r[r.length-1];return(0,o.jsx)("div",{className:"col-form-label",children:(0,o.jsxs)(c,{role:"link",href:(0,t.J0)(e),onClick:function(){return function(e,n){e=(0,t.J0)(e),fetch(e,{method:"GET"}).then((function(e){return e.blob()})).then((function(e){var r=window.URL.createObjectURL(e),l=document.createElement("a");l.href=r,l.download=n,document.body.appendChild(l),l.click(),setTimeout((function(e){window.URL.revokeObjectURL(r)}),6e4),l.remove()})).catch((function(e){console.error("err: ",e)}))}(e,l)},children:[n+1,". ",l]},n)},n)})):(0,o.jsx)(i.jO,{type:"text",id:n||"",placeholder:"\ub4f1\ub85d\ub41c \ud30c\uc77c\uc774 \uc5c6\uc2b5\ub2c8\ub2e4.",disabled:!0})})]})};var c=s.ZP.span(l||(l=(0,a.Z)(["\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  padding: 0 8px;\n  line-height: 1.5714285714285714;\n  flex: auto;\n  transition: all 0.3s;\n  color: #1677ff !important;\n  text-decoration: none;\n  background-color: transparent;\n  outline: none;\n  cursor: pointer;\n"])))},3854:function(e,n,r){var l=r(78983),a=(r(72791),r(80184));n.Z=function(e){var n=e.type,r=e.onChange,i=e.id,s=e.placeholder,t=e.value,o=e.label,c=e.readOnly,d=e.disabled,u=e.isRequired,h=e.xs;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l.L8,{htmlFor:"".concat(i,"Static"),className:"col-sm-2 col-form-label",children:(0,a.jsx)("span",{className:u?"required":"",children:o||" * "})}),(0,a.jsx)(l.b7,{className:"align-items-center",xs:h,style:{display:"flex"},children:(0,a.jsx)(l.jO,{type:n||"text",id:i,placeholder:s||"",value:"file"===n?void 0:t||"",onChange:r,readOnly:c,disabled:d})})]})}},55740:function(e,n,r){var l=r(78983),a=r(80184);n.Z=function(e){var n=e.onChange,r=e.size,i=e.placeholder,s=e.label,t=e.value,o=e.readOnly,c=e.id,d=e.xs,u=e.disabled,h=void 0!==u&&u,b=e.isRequired,m=e.options.map((function(e){return(0,a.jsx)("option",{value:e.key,children:e.value},e.key)}));return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l.L8,{htmlFor:"staticEmail",className:"col-sm-2 col-form-label",children:(0,a.jsx)("span",{className:b?"required":"",children:s||" * "})}),(0,a.jsx)(l.b7,{xs:d,children:(0,a.jsxs)(l.LX,{value:t,disabled:h,id:c,size:r,onChange:n,readOnly:o,children:[(0,a.jsx)("option",{value:"",children:i}),m]})})]})}},84336:function(e,n,r){var l=r(78983),a=(r(72791),r(80184));n.Z=function(e){var n=e.id,r=e.value,i=e.rows,s=e.label,t=e.onChange,o=e.text,c=e.readOnly,d=e.disabled;return(0,a.jsx)(l.b7,{children:(0,a.jsx)(l.PB,{id:n||"",label:s||"",rows:i||10,value:r||"",onChange:t,text:o||"",readOnly:c,disabled:d})})}},40330:function(e,n,r){r.r(n),r.d(n,{default:function(){return O}});var l=r(4942),a=r(1413),i=r(74165),s=r(15861),t=r(29439),o=r(72791),c=r(20961),d=r(78983),u=[{key:"number",label:"No",_props:{color:"primary",className:"number"},filter:!1},{key:"name",label:"\uc774\ub984",_props:{color:"primary",className:"name"}},{key:"phoneNumber",label:"\ud734\ub300\uc804\ud654\ubc88\ud638",_props:{color:"primary",className:"phoneNumber"},sorter:!1,filter:!1},{key:"email",label:"\uc774\uba54\uc77c",_props:{color:"primary",className:"email"},sorter:!1},{key:"positionKorean",label:"\uc9c0\uc6d0 \ud3ec\uc9c0\uc158",_props:{color:"primary",className:"position"}}],h=r(55740),b=r(3854),m=r(80184),p=function(e){var n=e.onClick,r=e.visible,l=e.setVisible;return(0,m.jsx)(d.Tk,{visible:r,alignment:"center",children:(0,m.jsxs)(d.PO,{children:[(0,m.jsx)(d.fl,{children:"\uc815\ub9d0 \ud398\uc774\uc9c0\uc5d0\uc11c \ub098\uac00\uc2dc\uaca0\uc2b5\ub2c8\uae4c?"}),(0,m.jsx)(d.sD,{children:"\uc9c0\uae08 \ud398\uc774\uc9c0\ub97c \ub098\uac00\uc2dc\uba74 \ubcc0\uacbd\uc0ac\ud56d\uc774 \uc800\uc7a5\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."}),(0,m.jsxs)(d.Ym,{children:[(0,m.jsx)(d.u5,{color:"danger",onClick:n,children:"\ub098\uac00\uae30"}),(0,m.jsx)(d.u5,{color:"primary",onClick:function(){return l(!1)},children:"Cancel"})]})]})})},x=function(e){var n=e.visible,r=e.title,l=void 0===r?"\uc0ad\uc81c \ud655\uc778":r,a=e.children,i=e.onDelete,s=e.setVisible;return(0,m.jsxs)(d.Tk,{visible:n,alignment:"center",children:[(0,m.jsx)(d.p0,{children:(0,m.jsx)(d.fl,{children:l})}),(0,m.jsx)(d.sD,{children:a||"\uc815\ub9d0 \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?"}),(0,m.jsxs)(d.Ym,{children:[(0,m.jsx)(d.u5,{onClick:i,color:"primary",children:"\ud655\uc778"}),(0,m.jsx)(d.u5,{color:"secondary",onClick:function(){return s(!1)},children:"\ucde8\uc18c"})]})]})},v=r(41085),f=r(79528),j=r(84336),y=[{key:"DEVELOPMENT",value:"\uac1c\ubc1c"},{key:"MARKETING",value:"\ub9c8\ucf13\ud305"},{key:"DESIGN",value:"\ub514\uc790\uc778"},{key:"BUSINESS_PLANNING",value:"\uc0ac\uc5c5 \uae30\ud68d"},{key:"BUSINESS_SUPPORT",value:"\uacbd\uc601 \uc9c0\uc6d0"},{key:"CUSTOMER_SUPPORT",value:"\uace0\uac1d \uc9c0\uc6d0"},{key:"SERVICE_PLANNING",value:"\uc11c\ube44\uc2a4 \uae30\ud68d"},{key:"OPERATION_PLANNING",value:"\uc6b4\uc601 \uae30\ud68d"}],k=function(e){var n,r=e.value,l=e.visible,a=e.setVisible,i=e.onChange,s=e.isReadOnly,c=e.setIsReadOnly,u=(0,o.useState)(!1),k=(0,t.Z)(u,2),g=k[0],N=k[1],Z=(0,o.useState)(!1),O=(0,t.Z)(Z,2),C=O[0],w=O[1];return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(d.Tk,{alignment:"center",size:"xl",visible:l,children:[(0,m.jsx)(d.p0,{children:(0,m.jsx)(d.fl,{children:"\uc778\uc7ac\ud480 \uc0c1\uc138"})}),(0,m.jsxs)(d.sD,{children:[(0,m.jsxs)(d.rb,{className:"mb-3",children:[(0,m.jsx)(b.Z,{onChange:i,id:"talentPoolId",placeholder:"talentPoolId",label:"ID",readOnly:!0,disabled:!0,value:-1===r.talentPoolId?"":r.talentPoolId}),(0,m.jsx)(b.Z,{onChange:i,id:"name",placeholder:"\uc774\ub984\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694",label:"\uc774\ub984",value:r.name,readOnly:s,disabled:s})]}),(0,m.jsxs)(d.rb,{className:"mb-3",children:[(0,m.jsx)(b.Z,{onChange:i,id:"number",placeholder:"",label:"\uc804\ud654\ubc88\ud638",value:r.number,readOnly:s,disabled:s}),(0,m.jsx)(b.Z,{onChange:i,id:"phoneNumber",placeholder:"phone number",label:"\ud734\ub300 \uc804\ud654\ubc88\ud638",value:r.phoneNumber,readOnly:s,disabled:s})]}),(0,m.jsxs)(d.rb,{className:"mb-3",children:[(0,m.jsx)(h.Z,{readOnly:s,disabled:s,onChange:i,size:"sm",id:"positionEnglish",options:y,value:null!==(n=r.position)&&void 0!==n?n:r.positionEnglish,placeholder:"\uc120\ud0dd\ud574\uc8fc\uc138\uc694",label:"\uc9c0\uc6d0 \ud3ec\uc9c0\uc158"}),(0,m.jsx)(v.Z,{readOnly:!1,label:"\ub4f1\ub85d\uc77c",id:"registeredAt",date:r.registeredAt,isDisabled:!0})]}),(0,m.jsx)(d.rb,{className:"mb-3",children:(0,m.jsx)(f.Z,{files:r.resume,id:"resume",label:"\uc774\ub825\uc11c"})}),(0,m.jsx)(d.rb,{className:"mb-3",children:(0,m.jsx)(f.Z,{files:r.portfolio,id:"portfolio",label:"\ud3ec\ud2b8\ud3f4\ub9ac\uc624"})}),(0,m.jsx)(d.rb,{className:"mb-3",children:(0,m.jsx)(f.Z,{files:r.otherDocument,id:"otherDocument",label:"\uae30\ud0c0 \ucd94\uac00\uc790\ub8cc"})}),(0,m.jsx)(j.Z,{id:"otherLink",label:"\ucd94\uac00 \ub9c1\ud06c \uc790\ub8cc",value:r.otherLink,readOnly:s,disabled:s})]}),(0,m.jsx)(d.Ym,{children:(0,m.jsx)(d.u5,{color:"secondary",onClick:function(){s||-1===r.No?(a(!1),c(!0)):w(!0)},children:"\ucde8\uc18c"})})]}),(0,m.jsx)(x,{onDelete:function(){return N(!1)},visible:g,setVisible:N}),(0,m.jsx)(p,{onClick:function(){w(!1),a(!1),c(!0)},visible:C,setVisible:w})]})},g=r(96672),N=r(19311),Z=r(70844),O=function(){var e=(0,o.useState)([]),n=(0,t.Z)(e,2),r=n[0],h=n[1],b=(0,o.useState)(!1),p=(0,t.Z)(b,2),x=p[0],v=p[1],f=(0,o.useState)(!0),j=(0,t.Z)(f,2),y=j[0],O=j[1],C=(0,o.useState)(""),w=(0,t.Z)(C,2),P=w[0],S=w[1],E=(0,o.useState)({talentPoolId:-1,number:"",name:"",email:"",phoneNumber:"",position:"",registeredAt:new Date,portfolio:[],otherDocument:[],otherLink:"",resume:[]}),L=(0,t.Z)(E,2),I=L[0],R=L[1],_=function(){var e=(0,s.Z)((0,i.Z)().mark((function e(){var n;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.Z.request({data:{},query:{},path:{},method:g.w.GET,url:N.l.TALENTPOOL});case 3:n=e.sent,h(null===n||void 0===n?void 0:n.data.result.responses),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),alert(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),T=function(){var e=(0,s.Z)((0,i.Z)().mark((function e(n){var r,l;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.Z.request({data:{},query:{},path:{id:n},method:g.w.GET,url:"".concat(N.l.TALENTPOOL,"/:id")});case 3:if(r=e.sent,(l=r.data).isSuccess){e.next=7;break}return e.abrupt("return",alert(l.message));case 7:R(l.result),v(!x),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),alert(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(n){return e.apply(this,arguments)}}();(0,o.useEffect)((function(){_()}),[]);var D=function(){var e=(0,s.Z)((0,i.Z)().mark((function e(n){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:T(n.talentPoolId);case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,m.jsxs)("main",{children:[(0,m.jsx)(c.Z,{title:"\uc778\uc7ac\ud480 \uad00\ub9ac"}),(0,m.jsx)(d.rb,{children:(0,m.jsx)(d.b7,{xs:12,children:(0,m.jsx)(d.xH,{className:"mb-4",children:(0,m.jsx)(d.sl,{children:(0,m.jsx)(Z.Z,{items:r,onClick:D,columns:u,className:"talentPoolList",datePickerHidden:!1})})})})}),(0,m.jsx)(k,{onChange:function(e){var n=e.target,r=n.id,i=n.value;R((0,a.Z)((0,a.Z)({},I),{},(0,l.Z)({},r,i)))},visible:x,value:I,setVisible:v,isReadOnly:y,setIsReadOnly:O,select:P,setSelect:S})]})}}}]);
//# sourceMappingURL=330.c760c293.chunk.js.map