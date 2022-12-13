"use strict";(self.webpackChunkneordinary_template_react_js_admin=self.webpackChunkneordinary_template_react_js_admin||[]).push([[4461],{21260:function(e,l,a){var r=a(78983),s=(a(72791),a(80184));l.Z=function(e){var l=e.id,a=e.value,t=e.label;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.L8,{htmlFor:"".concat(l,"Static"),className:"col-sm-2 col-form-label",children:t||" * "}),(0,s.jsx)(r.b7,{className:"align-items-center",style:{display:"flex"},children:(0,s.jsx)(r.C_,{color:function(e){switch(e){case"ACTIVE":return"success";case"INACTIVE":return"danger";default:return"primary"}}(a),children:function(e){switch(e){case"ACTIVE":return"\ud65c\uc131\ud654";case"INACTIVE":return"\ube44\ud65c\uc131\ud654";default:return"\uae30\ud0c0"}}(a)})})]})}},3854:function(e,l,a){var r=a(78983),s=(a(72791),a(80184));l.Z=function(e){var l=e.type,a=e.onChange,t=e.id,o=e.placeholder,n=e.value,c=e.label,i=e.readOnly,d=e.disabled,p=e.isRequired,u=e.xs;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.L8,{htmlFor:"".concat(t,"Static"),className:"col-sm-2 col-form-label",children:(0,s.jsx)("span",{className:p?"required":"",children:c||" * "})}),(0,s.jsx)(r.b7,{className:"align-items-center",xs:u,style:{display:"flex"},children:(0,s.jsx)(r.jO,{type:l||"text",id:t,placeholder:o||"",value:"file"===l?void 0:n||"",onChange:a,readOnly:i,disabled:d})})]})}},84461:function(e,l,a){a.r(l),a.d(l,{default:function(){return x}});var r=a(74165),s=a(15861),t=a(29439),o=a(72791),n=a(57689),c=a(78983),i=a(19977),d=a(3854),p=a(21260),u=a(46327),m=a(46819),b=a(80184),N=function(e){var l=e.value,a=e.visible,r=e.setVisible,s=(e.onChange,(0,n.s0)(),(0,o.useState)({orderId:0,orderNumber:"",name:"",paymentMethod:"",totalPrice:0,payDate:"",receiver:"",address:"",normalNumber:"",phoneNumber:"",totalCount:"",subInfos:[]})),N=(0,t.Z)(s,2),y=N[0],h=N[1];(0,o.useEffect)((function(){a&&h(l)}),[a]);var f=function(){r(!1)};return(0,b.jsxs)(c.Tk,{size:"lg",visible:a,onClose:f,children:[(0,b.jsx)(c.p0,{children:(0,b.jsx)(c.fl,{children:"\uc8fc\ubb38 \uc0c1\uc138\uc815\ubcf4"})}),(0,b.jsxs)(c.sD,{children:[(0,b.jsxs)(c.rb,{className:"p-2",children:[(0,b.jsx)(d.Z,{id:"orderId",placeholder:"User Id",label:"No",value:y.orderId,readOnly:!0,disabled:!0}),(0,b.jsx)(d.Z,{id:"orderNumber",placeholder:"",label:"\uc8fc\ubb38\ubc88\ud638",value:y.orderNumber,readOnly:!0,disabled:!0})]}),(0,b.jsxs)(c.rb,{className:"p-2",children:[(0,b.jsx)(d.Z,{id:"name",placeholder:"",label:"\uc8fc\ubb38\uc790",value:y.name,readOnly:!0,disabled:!0}),(0,b.jsx)(d.Z,{id:"receiver",placeholder:"",label:"\uc218\ucde8\uc778",value:y.receiver,readOnly:!0,disabled:!0})]}),(0,b.jsxs)(c.rb,{className:"p-2",children:[(0,b.jsx)(d.Z,{id:"normalNumber",placeholder:"",label:"\uc77c\ubc18\ubc88\ud638",value:y.normalNumber,readOnly:!0,disabled:!0}),(0,b.jsx)(d.Z,{id:"phoneNumber",placeholder:"",label:"\ud734\ub300\uc804\ud654\ubc88\ud638",value:y.phoneNumber,readOnly:!0,disabled:!0})]}),(0,b.jsxs)(c.rb,{className:"p-2",children:[(0,b.jsx)(d.Z,{id:"paymentMethod",placeholder:"",label:"\uacb0\uc81c\uc218\ub2e8",value:y.paymentMethod,readOnly:!0,disabled:!0}),(0,b.jsx)(d.Z,{id:"totalPrice",placeholder:"",label:"\ucd1d \uacb0\uc81c\uae08\uc561",value:(0,u.ks)(y.totalPrice),readOnly:!0,disabled:!0})]}),(0,b.jsxs)(c.rb,{className:"p-2",children:[(0,b.jsx)(d.Z,{id:"createdAt",placeholder:"",label:"\uc8fc\ubb38\uc77c",value:y.createdAt,readOnly:!0,disabled:!0}),(0,b.jsx)(d.Z,{id:"payDate",placeholder:"",label:"\uacb0\uc81c\uc77c",value:y.payDate,readOnly:!0,disabled:!0})]})," ",(0,b.jsx)(c.rb,{className:"p-2",children:(0,b.jsx)(d.Z,{id:"address",placeholder:"",label:"\uc8fc\uc18c",value:y.address,readOnly:!0,disabled:!0})}),(0,b.jsx)(c.rb,{className:"p-2",children:(0,b.jsx)(d.Z,{id:"invoiceNumber",placeholder:"",label:"\uc1a1\uc7a5\ubc88\ud638",value:y.invoiceNumber,readOnly:!0,disabled:!0})}),(0,b.jsx)(c.rb,{className:"p-2",children:(0,b.jsx)(p.Z,{id:"userStatus",placeholder:"",label:"\uc8fc\ubb38\uc0c1\ud0dc",value:y.status})}),(0,b.jsx)(c.rb,{className:"p-2",children:(0,b.jsx)(d.Z,{id:"totalCount",placeholder:"",label:"\uc8fc\ubb38\uc81c\ud488 \uc218",value:y.totalCount,readOnly:!0,disabled:!0})}),(0,b.jsx)(c.rb,{className:"p-2",children:(0,b.jsx)(i.Z,{items:y.subInfos,columns:m.xL,searchInputHidden:!1,datePickerHidden:!1,className:"subInfos"})})]}),(0,b.jsx)(c.Ym,{children:(0,b.jsx)(c.u5,{color:"secondary",onClick:f,children:"\ucde8\uc18c"})})]})},y=a(20961),h=a(96672),f=a(19311),x=function(){var e=(0,n.s0)(),l=(0,o.useState)([]),a=(0,t.Z)(l,2),d=a[0],p=a[1],x=(0,o.useState)({}),v=(0,t.Z)(x,2),_=v[0],k=v[1],j=(0,o.useState)(!1),g=(0,t.Z)(j,2),Z=g[0],I=g[1],O=function(){var l=(0,s.Z)((0,r.Z)().mark((function l(){var a,s;return(0,r.Z)().wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return l.prev=0,l.next=3,h.Z.request({method:h.w.GET,url:f.l.GET_MALL_ORDERS});case 3:if(a=l.sent,null!==(s=a.data)&&void 0!==s&&s.isSuccess&&!(0,u.xb)(null===s||void 0===s?void 0:s.result)){l.next=9;break}return console.log("loadMallorderList error"),2014===(null===s||void 0===s?void 0:s.code)?e("/login"):alert(null===s||void 0===s?void 0:s.message),l.abrupt("return");case 9:p(s.result.responses),l.next=16;break;case 12:l.prev=12,l.t0=l.catch(0),console.log(l.t0),alert("\ub124\ud2b8\uc6cc\ud06c \ud1b5\uc2e0 \uc2e4\ud328. \uc7a0\uc2dc\ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4\ud574\uc8fc\uc138\uc694.");case 16:case"end":return l.stop()}}),l,null,[[0,12]])})));return function(){return l.apply(this,arguments)}}();(0,o.useEffect)((function(){O()}),[]);return(0,b.jsxs)(c.rb,{children:[(0,b.jsx)(y.Z,{title:"\uc8fc\ubb38 \uad00\ub9ac"}),(0,b.jsx)(c.b7,{xs:12,children:(0,b.jsx)(c.xH,{className:"mb-4",children:(0,b.jsx)(c.sl,{children:(0,b.jsx)(i.Z,{items:d,onClick:function(e){k(e),I(!Z)},columns:m.W_,className:"orderList"})})})}),(0,b.jsx)(N,{value:_,visible:Z,setVisible:I,readOnly:!0})]})}},46819:function(e,l,a){a.d(l,{Po:function(){return n},Tv:function(){return t},W_:function(){return c},_y:function(){return d},g1:function(){return r},kg:function(){return s},lJ:function(){return o},xL:function(){return i}});var r=[{key:"userId",label:"No",sorter:!1,filter:!1,_props:{className:"no"}},{key:"name",label:"\uc774\ub984",_props:{className:"name"}},{key:"email",label:"\uc774\uba54\uc77c",_props:{className:"email"}},{key:"phoneNumber",label:"\ud734\ub300\uc804\ud654\ubc88\ud638",_props:{className:"phoneNumber"}},{key:"createdAt",label:"\ucd5c\ucd08\ub4f1\ub85d\uc77c",sorter:!1,filter:!1,_props:{className:"createdAt"}},{key:"status",label:"\uc0c1\ud0dc",sorter:!1,filter:!1,_props:{className:"status"}}],s=[{key:"userId",label:"No",sorter:!1,filter:!1,_props:{className:"no"}},{key:"name",label:"\uc774\ub984",_props:{className:"name"}},{key:"email",label:"\uc774\uba54\uc77c",_props:{className:"email"}},{key:"phoneNumber",label:"\ud734\ub300\uc804\ud654\ubc88\ud638",_props:{className:"phoneNumber"}},{key:"resignReason",label:"\ud0c8\ud1f4\uc0ac\uc720",_props:{className:"resignReason"}},{key:"createdAt",label:"\ucd5c\ucd08\ub4f1\ub85d\uc77c",sorter:!1,filter:!1,_props:{className:"createdAt"}},{key:"updatedAt",label:"\uacc4\uc815\ud0c8\ud1f4\uc77c",sorter:!1,filter:!1,_props:{className:"updatedAt"}},{key:"status",label:"\uc0c1\ud0dc",sorter:!1,filter:!1,_props:{className:"status"}}],t=[{key:"inquiryId",label:"No",sorter:!1,filter:!1,_props:{className:"no"}},{key:"category",label:"\ubb38\uc758 \uc720\ud615",_props:{className:"category"}},{key:"name",label:"\uc774\ub984",_props:{className:"name"}},{key:"phoneNumber",label:"\ud734\ub300\uc804\ud654\ubc88\ud638",_props:{className:"phoneNumber"}},{key:"reply",label:"\ub2f5\ubcc0",sorter:!1,filter:!1,_props:{className:"reply"}}],o=[{key:"faqId",label:"No",sorter:!1,filter:!1,_props:{className:"no"}},{key:"category",label:"\uce74\ud14c\uace0\ub9ac",_props:{className:"category"}},{key:"title",label:"\uc81c\ubaa9",_props:{className:"title"}}],n=[{key:"dataRoomId",label:"No",sorter:!1,filter:!1,_props:{className:"no"}},{key:"category",label:"\uce74\ud14c\uace0\ub9ac",_props:{className:"category"}},{key:"title",label:"\uc81c\ubaa9",_props:{className:"title"}},{key:"createdAt",label:"\uc791\uc131\uc77c",sorter:!1,filter:!1,_props:{className:"createdAt"}}],c=[{key:"orderId",label:"No",sorter:!1,filter:!1,_props:{className:"no"}},{key:"orderNumber",label:"\uc8fc\ubb38\ubc88\ud638",sorter:!1,_props:{className:"orderNumber"}},{key:"receiver",label:"\uc218\ucde8\uc778",_props:{className:"receiver"}},{key:"phoneNumber",label:"\ud734\ub300\uc804\ud654\ubc88\ud638",_props:{className:"phoneNumber"}},{key:"category",label:"\uc8fc\ubb38\uc0c1\ud0dc",_props:{className:"category"}},{key:"totalPrice",label:"\uc8fc\ubb38\ucd1d\uc561",_props:{className:"totalPrice"}},{key:"createdAt",label:"\uc8fc\ubb38\uc77c",sorter:!1,filter:!1,_props:{className:"createdAt"}}],i=[{key:"itemName",label:"\uc81c\ud488\uba85",sorter:!1,filter:!1,_props:{className:"itemName"}},{key:"orderItemPrice",sorter:!1,filter:!1,label:"\uc81c\ud488\uac00\uaca9",_props:{className:"orderItemPrice"}},{key:"orderStatus",label:"\uc81c\ud488\uc0c1\ud0dc",sorter:!1,filter:!1,_props:{className:"orderStatus"}},{key:"invoiceNumber",sorter:!1,filter:!1,label:"\uc1a1\uc7a5\ubc88\ud638",_props:{className:"invoiceNumber"}}],d=[{key:"bannerId",label:"No",sorter:!1,filter:!1,_props:{className:"no"}},{key:"image",label:"\uc774\ubbf8\uc9c0",_props:{className:"image"}},{key:"title",label:"\ubc30\ub108 \ud0c0\uc774\ud2c0",_props:{className:"title"}}]}}]);
//# sourceMappingURL=4461.9f4b3713.chunk.js.map