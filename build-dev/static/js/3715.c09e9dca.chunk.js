"use strict";(self.webpackChunkneordinary_template_react_js_admin=self.webpackChunkneordinary_template_react_js_admin||[]).push([[3715],{33715:(e,l,a)=>{a.r(l),a.d(l,{default:()=>m});var s=a(72791),r=a(57689),d=a(78983),n=a(20961),i=a(46819),o=a(96672),c=a(19311),t=a(46327),u=a(59159),h=a(3854),x=a(80184);const b=e=>{let{value:l,visible:a,setVisible:n,exchangeList:i,setExchangeList:u,onLoadMallexchangeList:b}=e;const m=(0,r.s0)(),[v,p]=(0,s.useState)({orderId:0,orderNumber:"",name:"",paymentMethod:"",totalPrice:0,exchangePrice:0,orderDate:"",payDate:"",exchangeDate:"",receiver:"",address:"",normalNumber:"",phoneNumber:"",totalCount:""}),[j,g]=(0,s.useState)("");(0,s.useEffect)((()=>{a&&p(l)}),[a]);const y=()=>{g(""),n(!1)};return(0,x.jsxs)(d.Tk,{size:"lg",visible:a,onClose:y,children:[(0,x.jsx)(d.p0,{children:(0,x.jsx)(d.fl,{children:"\uad50\ud658 \uc0c1\uc138\uc815\ubcf4"})}),(0,x.jsxs)(d.sD,{children:[(0,x.jsxs)(d.rb,{className:"p-2",children:[(0,x.jsx)(h.Z,{id:"orderExchangeId",placeholder:"orderExchangeId",label:"No",value:v.no,readOnly:!0,disabled:!0}),(0,x.jsx)(h.Z,{id:"orderNumber",placeholder:"",label:"\uc8fc\ubb38\ubc88\ud638",value:v.orderNumber,readOnly:!0,disabled:!0})]}),(0,x.jsx)(d.rb,{className:"p-2",children:(0,x.jsx)(h.Z,{id:"itemName",placeholder:"\uc81c\ud488\uba85",label:"\uc81c\ud488\uba85",value:v.itemName,readOnly:!0,disabled:!0})}),(0,x.jsxs)(d.rb,{className:"p-2",children:[(0,x.jsx)(h.Z,{id:"sender",placeholder:"",label:"\ubcf4\ub0b4\ub294\uc774",value:v.sender,readOnly:!0,disabled:!0}),(0,x.jsx)(h.Z,{id:"receiver",placeholder:"",label:"\uc218\ucde8\uc778",value:v.receiver,readOnly:!0,disabled:!0})]}),(0,x.jsxs)(d.rb,{className:"p-2",children:[(0,x.jsx)(h.Z,{id:"orderItemCount",placeholder:"",label:"\uc8fc\ubb38\uc81c\ud488\uc218\ub7c9",value:v.orderItemCount,readOnly:!0,disabled:!0}),(0,x.jsx)(h.Z,{id:"orderDate",placeholder:"",label:"\uc8fc\ubb38\uc77c",value:v.orderDate,readOnly:!0,disabled:!0})]}),(0,x.jsxs)(d.rb,{className:"p-2",children:[(0,x.jsx)(h.Z,{id:"paymentMethod",placeholder:"",label:"\uacb0\uc81c\uc218\ub2e8",value:v.paymentMethod,readOnly:!0,disabled:!0}),(0,x.jsx)(h.Z,{id:"payDate",placeholder:"",label:"\uacb0\uc81c\uc77c",value:v.payDate,readOnly:!0,disabled:!0})]}),(0,x.jsxs)(d.rb,{className:"p-2",children:[(0,x.jsx)(h.Z,{id:"orderStatus",placeholder:"",label:"\uc8fc\ubb38\uc0c1\ud0dc",value:v.orderStatus,readOnly:!0,disabled:!0}),(0,x.jsx)(h.Z,{id:"exchangeDate",placeholder:"",label:"\uad50\ud658 \uc694\uccad\uc77c",value:v.exchangeDate,readOnly:!0,disabled:!0})]}),(0,x.jsxs)(d.rb,{className:"p-2",children:[(0,x.jsx)(h.Z,{id:"exchangePrice",placeholder:"",label:"\uad50\ud658\uae08\uc561",value:(0,t.ks)(v.exchangePrice),readOnly:!0,disabled:!0}),(0,x.jsx)(h.Z,{id:"totalPrice",placeholder:"",label:"\ucd1d \uacb0\uc81c\uae08\uc561",value:(0,t.ks)(v.totalPrice),readOnly:!0,disabled:!0})]}),(0,x.jsxs)(d.rb,{className:"p-2",children:[(0,x.jsx)(h.Z,{id:"invoiceNumber",placeholder:"\uc1a1\uc7a5\ubc88\ud638",label:"\uc1a1\uc7a5\ubc88\ud638",value:v.invoiceNumber,readOnly:!0,disabled:!0}),(0,x.jsx)(d.u5,{className:"me-md-3 invoiceSearchBtn",color:"warning",size:"sm",onClick:()=>{if(null!==v&&void 0!==v&&v.invoiceNumber){const{invoiceNumber:e}=v;window.open("https://www.ilogen.com/web/personal/trace/"+e)}else window.open("https://www.ilogen.com/web/personal/tkSearch")},children:"\uc1a1\uc7a5\uc870\ud68c"})]}),(0,x.jsx)(d.rb,{className:"p-2",children:(0,x.jsx)(d.PB,{id:"exchangeReason",placeholder:"\uad50\ud658\uc0ac\uc720",label:"\uad50\ud658\uc0ac\uc720",rows:"3",value:v.exchangeReason,readOnly:!0,disabled:!0})}),(0,x.jsxs)("div",{className:"pb-2 d-md-flex justify-content-md-end",children:[(0,x.jsxs)(d.LX,{value:j,className:"me-md-2 orderStatusForm",size:"sm",onChange:e=>{const{value:l}=e.target;g(l)},children:[(0,x.jsx)("option",{children:"\uc8fc\ubb38\uc0c1\ud0dc \uc120\ud0dd"}),(0,x.jsx)("option",{value:"\uacb0\uc81c \ub300\uae30",children:"\uacb0\uc81c \ub300\uae30"}),(0,x.jsx)("option",{value:"\uacb0\uc81c \uc644\ub8cc",children:"\uacb0\uc81c \uc644\ub8cc"}),(0,x.jsx)("option",{value:"\ubc30\uc1a1 \uc900\ube44\uc911",children:"\ubc30\uc1a1 \uc900\ube44\uc911"}),(0,x.jsx)("option",{value:"\ubc30\uc1a1\uc911",children:"\ubc30\uc1a1\uc911"}),(0,x.jsx)("option",{value:"\ubc30\uc1a1 \uc644\ub8cc",children:"\ubc30\uc1a1 \uc644\ub8cc"}),(0,x.jsx)("option",{value:"\uad50\ud658 \ucc98\ub9ac\uc911",children:"\uad50\ud658 \ucc98\ub9ac\uc911"}),(0,x.jsx)("option",{value:"\uad50\ud658 \uc644\ub8cc",children:"\uad50\ud658 \uc644\ub8cc"})]}),(0,x.jsx)(d.u5,{className:"me-md-2",color:"success",size:"sm",onClick:()=>{if(!j)return alert("\uc8fc\ubb38\uc0c1\ud0dc\ub97c \uc120\ud0dd\ud574\uc8fc\uc138\uc694.");(async(e,l)=>{try{const{data:a}=await o.Z.request({method:o.w.PATCH,url:c.l.PATCH_MALL_EXCHANGE_ORDERS_STATUS,path:{orderExchangeId:e},query:{orderStatus:l}});if(null===a||void 0===a||!a.isSuccess)return void(2014===(null===a||void 0===a?void 0:a.code)?m("/login"):alert(null===a||void 0===a?void 0:a.message));p((e=>({...e,orderStatus:l})));const s=i.findIndex((l=>l.orderExchangeId===e));i[s].orderStatus=l,u((e=>[...e])),await b(),alert(null===a||void 0===a?void 0:a.message)}catch(a){alert("\ub124\ud2b8\uc6cc\ud06c \ud1b5\uc2e0 \uc2e4\ud328. \uc7a0\uc2dc\ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4\ud574\uc8fc\uc138\uc694.")}})(v.orderExchangeId,j),g("")},children:"\uc8fc\ubb38\uc0c1\ud0dc \ubcc0\uacbd"})]})]}),(0,x.jsx)(d.Ym,{children:(0,x.jsx)(d.u5,{color:"secondary",onClick:y,children:"\ucde8\uc18c"})})]})},m=()=>{const e=(0,r.s0)(),[l,a]=(0,s.useState)([]),[h,m]=(0,s.useState)({}),[v,p]=(0,s.useState)(!1),j=async()=>{try{const{data:l}=await o.Z.request({method:o.w.GET,url:c.l.GET_MALL_EXCHANGE_ORDERS});if(null===l||void 0===l||!l.isSuccess||(0,t.xb)(null===l||void 0===l?void 0:l.result))return console.log("loadMallExchangeList error"),void(2014===(null===l||void 0===l?void 0:l.code)?e("/login"):alert(null===l||void 0===l?void 0:l.message));a(l.result.responses.map(((e,a)=>({...e,no:l.result.responses.length-a}))))}catch(l){console.log(l),alert("\ub124\ud2b8\uc6cc\ud06c \ud1b5\uc2e0 \uc2e4\ud328. \uc7a0\uc2dc\ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4\ud574\uc8fc\uc138\uc694.")}};(0,s.useEffect)((()=>{j()}),[]);return(0,x.jsxs)(d.rb,{children:[(0,x.jsx)(n.Z,{title:"\uad50\ud658 \uc694\uccad \uad00\ub9ac"}),(0,x.jsx)(d.b7,{xs:12,children:(0,x.jsx)(d.xH,{className:"mb-4",children:(0,x.jsx)(d.sl,{children:(0,x.jsx)(u.Z,{items:l,onClick:e=>{m(e),p(!v)},columns:i.vb,className:"exchangeList",datePicker:!0})})})}),(0,x.jsx)(b,{value:h,visible:v,setVisible:p,exchangeList:l,setExchangeList:a,onLoadMallexchangeList:j,readOnly:!0})]})}}}]);
//# sourceMappingURL=3715.c09e9dca.chunk.js.map