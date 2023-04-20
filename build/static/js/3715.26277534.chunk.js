"use strict";(self.webpackChunkneordinary_template_react_js_admin=self.webpackChunkneordinary_template_react_js_admin||[]).push([[3715],{33715:function(e,a,r){r.r(a),r.d(a,{default:function(){return g}});var l=r(74165),n=r(1413),s=r(15861),d=r(29439),t=r(72791),i=r(57689),c=r(78983),o=r(20961),u=r(46819),h=r(96672),x=r(19311),p=r(46327),v=r(59159),b=r(93433),m=r(3854),j=r(80184),f=function(e){var a=e.value,r=e.visible,o=e.setVisible,u=e.exchangeList,v=e.setExchangeList,f=e.onLoadMallexchangeList,g=(0,i.s0)(),Z=(0,t.useState)({orderId:0,orderNumber:"",name:"",paymentMethod:"",totalPrice:0,exchangePrice:0,orderDate:"",payDate:"",exchangeDate:"",receiver:"",address:"",normalNumber:"",phoneNumber:"",totalCount:""}),y=(0,d.Z)(Z,2),N=y[0],w=y[1],k=(0,t.useState)(""),S=(0,d.Z)(k,2),E=S[0],O=S[1];(0,t.useEffect)((function(){r&&w(a)}),[r]);var C=function(){O(""),o(!1)},L=function(){var e=(0,s.Z)((0,l.Z)().mark((function e(a,r){var s,d,t;return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.Z.request({method:h.w.PATCH,url:x.l.PATCH_MALL_EXCHANGE_ORDERS_STATUS,path:{orderExchangeId:a},query:{orderStatus:r}});case 3:if(s=e.sent,null!==(d=s.data)&&void 0!==d&&d.isSuccess){e.next=8;break}return 2014===(null===d||void 0===d?void 0:d.code)?g("/login"):alert(null===d||void 0===d?void 0:d.message),e.abrupt("return");case 8:return w((function(e){return(0,n.Z)((0,n.Z)({},e),{},{orderStatus:r})})),t=u.findIndex((function(e){return e.orderExchangeId===a})),u[t].orderStatus=r,v((function(e){return(0,b.Z)(e)})),e.next=14,f();case 14:alert(null===d||void 0===d?void 0:d.message),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(0),alert("\ub124\ud2b8\uc6cc\ud06c \ud1b5\uc2e0 \uc2e4\ud328. \uc7a0\uc2dc\ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4\ud574\uc8fc\uc138\uc694.");case 20:case"end":return e.stop()}}),e,null,[[0,17]])})));return function(a,r){return e.apply(this,arguments)}}();return(0,j.jsxs)(c.Tk,{size:"lg",visible:r,onClose:C,children:[(0,j.jsx)(c.p0,{children:(0,j.jsx)(c.fl,{children:"\uad50\ud658 \uc0c1\uc138\uc815\ubcf4"})}),(0,j.jsxs)(c.sD,{children:[(0,j.jsxs)(c.rb,{className:"p-2",children:[(0,j.jsx)(m.Z,{id:"orderExchangeId",placeholder:"orderExchangeId",label:"No",value:N.no,readOnly:!0,disabled:!0}),(0,j.jsx)(m.Z,{id:"orderNumber",placeholder:"",label:"\uc8fc\ubb38\ubc88\ud638",value:N.orderNumber,readOnly:!0,disabled:!0})]}),(0,j.jsx)(c.rb,{className:"p-2",children:(0,j.jsx)(m.Z,{id:"itemName",placeholder:"\uc81c\ud488\uba85",label:"\uc81c\ud488\uba85",value:N.itemName,readOnly:!0,disabled:!0})}),(0,j.jsxs)(c.rb,{className:"p-2",children:[(0,j.jsx)(m.Z,{id:"sender",placeholder:"",label:"\ubcf4\ub0b4\ub294\uc774",value:N.sender,readOnly:!0,disabled:!0}),(0,j.jsx)(m.Z,{id:"receiver",placeholder:"",label:"\uc218\ucde8\uc778",value:N.receiver,readOnly:!0,disabled:!0})]}),(0,j.jsxs)(c.rb,{className:"p-2",children:[(0,j.jsx)(m.Z,{id:"orderItemCount",placeholder:"",label:"\uc8fc\ubb38\uc81c\ud488\uc218\ub7c9",value:N.orderItemCount,readOnly:!0,disabled:!0}),(0,j.jsx)(m.Z,{id:"orderDate",placeholder:"",label:"\uc8fc\ubb38\uc77c",value:N.orderDate,readOnly:!0,disabled:!0})]}),(0,j.jsxs)(c.rb,{className:"p-2",children:[(0,j.jsx)(m.Z,{id:"paymentMethod",placeholder:"",label:"\uacb0\uc81c\uc218\ub2e8",value:N.paymentMethod,readOnly:!0,disabled:!0}),(0,j.jsx)(m.Z,{id:"payDate",placeholder:"",label:"\uacb0\uc81c\uc77c",value:N.payDate,readOnly:!0,disabled:!0})]}),(0,j.jsxs)(c.rb,{className:"p-2",children:[(0,j.jsx)(m.Z,{id:"orderStatus",placeholder:"",label:"\uc8fc\ubb38\uc0c1\ud0dc",value:N.orderStatus,readOnly:!0,disabled:!0}),(0,j.jsx)(m.Z,{id:"exchangeDate",placeholder:"",label:"\uad50\ud658 \uc694\uccad\uc77c",value:N.exchangeDate,readOnly:!0,disabled:!0})]}),(0,j.jsxs)(c.rb,{className:"p-2",children:[(0,j.jsx)(m.Z,{id:"exchangePrice",placeholder:"",label:"\uad50\ud658\uae08\uc561",value:(0,p.ks)(N.exchangePrice),readOnly:!0,disabled:!0}),(0,j.jsx)(m.Z,{id:"totalPrice",placeholder:"",label:"\ucd1d \uacb0\uc81c\uae08\uc561",value:(0,p.ks)(N.totalPrice),readOnly:!0,disabled:!0})]}),(0,j.jsxs)(c.rb,{className:"p-2",children:[(0,j.jsx)(m.Z,{id:"invoiceNumber",placeholder:"\uc1a1\uc7a5\ubc88\ud638",label:"\uc1a1\uc7a5\ubc88\ud638",value:N.invoiceNumber,readOnly:!0,disabled:!0}),(0,j.jsx)(c.u5,{className:"me-md-3 invoiceSearchBtn",color:"warning",size:"sm",onClick:function(){if(null!==N&&void 0!==N&&N.invoiceNumber){var e=N.invoiceNumber;window.open("https://www.ilogen.com/web/personal/trace/"+e)}else window.open("https://www.ilogen.com/web/personal/tkSearch")},children:"\uc1a1\uc7a5\uc870\ud68c"})]}),(0,j.jsx)(c.rb,{className:"p-2",children:(0,j.jsx)(c.PB,{id:"exchangeReason",placeholder:"\uad50\ud658\uc0ac\uc720",label:"\uad50\ud658\uc0ac\uc720",rows:"3",value:N.exchangeReason,readOnly:!0,disabled:!0})}),(0,j.jsxs)("div",{className:"pb-2 d-md-flex justify-content-md-end",children:[(0,j.jsxs)(c.LX,{value:E,className:"me-md-2 orderStatusForm",size:"sm",onChange:function(e){var a=e.target.value;O(a)},children:[(0,j.jsx)("option",{children:"\uc8fc\ubb38\uc0c1\ud0dc \uc120\ud0dd"}),(0,j.jsx)("option",{value:"\uacb0\uc81c \ub300\uae30",children:"\uacb0\uc81c \ub300\uae30"}),(0,j.jsx)("option",{value:"\uacb0\uc81c \uc644\ub8cc",children:"\uacb0\uc81c \uc644\ub8cc"}),(0,j.jsx)("option",{value:"\ubc30\uc1a1 \uc900\ube44\uc911",children:"\ubc30\uc1a1 \uc900\ube44\uc911"}),(0,j.jsx)("option",{value:"\ubc30\uc1a1\uc911",children:"\ubc30\uc1a1\uc911"}),(0,j.jsx)("option",{value:"\ubc30\uc1a1 \uc644\ub8cc",children:"\ubc30\uc1a1 \uc644\ub8cc"}),(0,j.jsx)("option",{value:"\uad50\ud658 \ucc98\ub9ac\uc911",children:"\uad50\ud658 \ucc98\ub9ac\uc911"}),(0,j.jsx)("option",{value:"\uad50\ud658 \uc644\ub8cc",children:"\uad50\ud658 \uc644\ub8cc"})]}),(0,j.jsx)(c.u5,{className:"me-md-2",color:"success",size:"sm",onClick:function(){if(!E)return alert("\uc8fc\ubb38\uc0c1\ud0dc\ub97c \uc120\ud0dd\ud574\uc8fc\uc138\uc694.");L(N.orderExchangeId,E),O("")},children:"\uc8fc\ubb38\uc0c1\ud0dc \ubcc0\uacbd"})]})]}),(0,j.jsx)(c.Ym,{children:(0,j.jsx)(c.u5,{color:"secondary",onClick:C,children:"\ucde8\uc18c"})})]})},g=function(){var e=(0,i.s0)(),a=(0,t.useState)([]),r=(0,d.Z)(a,2),b=r[0],m=r[1],g=(0,t.useState)({}),Z=(0,d.Z)(g,2),y=Z[0],N=Z[1],w=(0,t.useState)(!1),k=(0,d.Z)(w,2),S=k[0],E=k[1],O=function(){var a=(0,s.Z)((0,l.Z)().mark((function a(){var r,s;return(0,l.Z)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,h.Z.request({method:h.w.GET,url:x.l.GET_MALL_EXCHANGE_ORDERS});case 3:if(r=a.sent,null!==(s=r.data)&&void 0!==s&&s.isSuccess&&!(0,p.xb)(null===s||void 0===s?void 0:s.result)){a.next=9;break}return console.log("loadMallExchangeList error"),2014===(null===s||void 0===s?void 0:s.code)?e("/login"):alert(null===s||void 0===s?void 0:s.message),a.abrupt("return");case 9:m(s.result.responses.map((function(e,a){return(0,n.Z)((0,n.Z)({},e),{},{no:s.result.responses.length-a})}))),a.next=16;break;case 12:a.prev=12,a.t0=a.catch(0),console.log(a.t0),alert("\ub124\ud2b8\uc6cc\ud06c \ud1b5\uc2e0 \uc2e4\ud328. \uc7a0\uc2dc\ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4\ud574\uc8fc\uc138\uc694.");case 16:case"end":return a.stop()}}),a,null,[[0,12]])})));return function(){return a.apply(this,arguments)}}();(0,t.useEffect)((function(){O()}),[]);return(0,j.jsxs)(c.rb,{children:[(0,j.jsx)(o.Z,{title:"\uad50\ud658 \uc694\uccad \uad00\ub9ac"}),(0,j.jsx)(c.b7,{xs:12,children:(0,j.jsx)(c.xH,{className:"mb-4",children:(0,j.jsx)(c.sl,{children:(0,j.jsx)(v.Z,{items:b,onClick:function(e){N(e),E(!S)},columns:u.vb,className:"exchangeList",datePicker:!0})})})}),(0,j.jsx)(f,{value:y,visible:S,setVisible:E,exchangeList:b,setExchangeList:m,onLoadMallexchangeList:O,readOnly:!0})]})}}}]);
//# sourceMappingURL=3715.26277534.chunk.js.map