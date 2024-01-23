"use strict";(self.webpackChunkneordinary_template_react_js_admin=self.webpackChunkneordinary_template_react_js_admin||[]).push([[2245],{2245:(e,l,a)=>{a.r(l),a.d(l,{default:()=>p});var s=a(72791),r=a(57689),d=a(78983),n=a(20961),i=a(46819),c=a(96672),o=a(19311),t=a(46327),u=a(59159),h=a(3854),b=a(80184);const m=e=>{let{value:l,visible:a,setVisible:n,cancelList:i,setCanelList:u,onLoadMallCancelList:m}=e;const p=(0,r.s0)(),[v,x]=(0,s.useState)({orderId:0,orderNumber:"",name:"",paymentMethod:"",totalPrice:0,cancelPrice:0,orderDate:"",payDate:"",cancelDate:"",receiver:"",address:"",normalNumber:"",phoneNumber:"",totalCount:"",subInfos:[]}),[j,y]=(0,s.useState)("");(0,s.useEffect)((()=>{a&&x(l)}),[a]);const N=()=>{y(""),n(!1)};return(0,b.jsxs)(d.Tk,{size:"lg",visible:a,onClose:N,children:[(0,b.jsx)(d.p0,{children:(0,b.jsx)(d.fl,{children:"\ucde8\uc18c \uc0c1\uc138\uc815\ubcf4"})}),(0,b.jsxs)(d.sD,{children:[(0,b.jsxs)(d.rb,{className:"p-2",children:[(0,b.jsx)(h.Z,{id:"orderCancelId",placeholder:"orderCancelId",label:"No",value:v.no,readOnly:!0,disabled:!0}),(0,b.jsx)(h.Z,{id:"orderNumber",placeholder:"",label:"\uc8fc\ubb38\ubc88\ud638",value:v.orderNumber,readOnly:!0,disabled:!0})]}),(0,b.jsx)(d.rb,{className:"p-2",children:(0,b.jsx)(h.Z,{id:"itemName",placeholder:"\uc81c\ud488\uba85",label:"\uc81c\ud488\uba85",value:v.itemName,readOnly:!0,disabled:!0})}),(0,b.jsxs)(d.rb,{className:"p-2",children:[(0,b.jsx)(h.Z,{id:"sender",placeholder:"",label:"\ubcf4\ub0b4\ub294\uc774",value:v.sender,readOnly:!0,disabled:!0}),(0,b.jsx)(h.Z,{id:"receiver",placeholder:"",label:"\uc218\ucde8\uc778",value:v.receiver,readOnly:!0,disabled:!0})]}),(0,b.jsxs)(d.rb,{className:"p-2",children:[(0,b.jsx)(h.Z,{id:"orderItemCount",placeholder:"",label:"\uc8fc\ubb38\uc81c\ud488\uc218\ub7c9",value:v.orderItemCount,readOnly:!0,disabled:!0}),(0,b.jsx)(h.Z,{id:"orderDate",placeholder:"",label:"\uc8fc\ubb38\uc77c",value:v.orderDate,readOnly:!0,disabled:!0})]}),(0,b.jsxs)(d.rb,{className:"p-2",children:[(0,b.jsx)(h.Z,{id:"paymentMethod",placeholder:"",label:"\uacb0\uc81c\uc218\ub2e8",value:v.paymentMethod,readOnly:!0,disabled:!0}),(0,b.jsx)(h.Z,{id:"payDate",placeholder:"",label:"\uacb0\uc81c\uc77c",value:v.payDate,readOnly:!0,disabled:!0})]}),(0,b.jsxs)(d.rb,{className:"p-2",children:[(0,b.jsx)(h.Z,{id:"orderStatus",placeholder:"",label:"\uc8fc\ubb38\uc0c1\ud0dc",value:v.orderStatus,readOnly:!0,disabled:!0}),(0,b.jsx)(h.Z,{id:"cancelDate",placeholder:"",label:"\ucde8\uc18c \uc694\uccad\uc77c",value:v.cancelDate,readOnly:!0,disabled:!0})]}),(0,b.jsxs)(d.rb,{className:"p-2",children:[(0,b.jsx)(h.Z,{id:"cancelPrice",placeholder:"",label:"\ucde8\uc18c\uae08\uc561",value:(0,t.ks)(v.cancelPrice),readOnly:!0,disabled:!0}),(0,b.jsx)(h.Z,{id:"totalPrice",placeholder:"",label:"\ucd1d \uacb0\uc81c\uae08\uc561",value:(0,t.ks)(v.totalPrice),readOnly:!0,disabled:!0})]}),(0,b.jsxs)(d.rb,{className:"p-2",children:[(0,b.jsx)(h.Z,{id:"invoiceNumber",placeholder:"\uc1a1\uc7a5\ubc88\ud638",label:"\uc1a1\uc7a5\ubc88\ud638",value:v.invoiceNumber,readOnly:!0,disabled:!0}),(0,b.jsx)(d.u5,{className:"me-md-3 invoiceSearchBtn",color:"warning",size:"sm",onClick:()=>{if(null!==v&&void 0!==v&&v.invoiceNumber){const{invoiceNumber:e}=v;window.open("https://www.ilogen.com/web/personal/trace/"+e)}else window.open("https://www.ilogen.com/web/personal/tkSearch")},children:"\uc1a1\uc7a5\uc870\ud68c"})]}),(0,b.jsx)(d.rb,{className:"p-2",children:(0,b.jsx)(d.PB,{id:"cancelReason",placeholder:"\ucde8\uc18c \uc0ac\uc720",label:"\ucde8\uc18c\uc0ac\uc720",rows:"3",value:v.cancelReason,readOnly:!0,disabled:!0})}),(0,b.jsxs)("div",{className:"pb-2 d-md-flex justify-content-md-end",children:[(0,b.jsxs)(d.LX,{value:j,className:"me-md-2 orderStatusForm",size:"sm",onChange:e=>{const{value:l}=e.target;y(l)},children:[(0,b.jsx)("option",{children:"\uc8fc\ubb38\uc0c1\ud0dc \uc120\ud0dd"}),(0,b.jsx)("option",{value:"\uacb0\uc81c \ub300\uae30",children:"\uacb0\uc81c \ub300\uae30"}),(0,b.jsx)("option",{value:"\uacb0\uc81c \uc644\ub8cc",children:"\uacb0\uc81c \uc644\ub8cc"}),(0,b.jsx)("option",{value:"\ubc30\uc1a1 \uc900\ube44\uc911",children:"\ubc30\uc1a1 \uc900\ube44\uc911"}),(0,b.jsx)("option",{value:"\ubc30\uc1a1\uc911",children:"\ubc30\uc1a1\uc911"}),(0,b.jsx)("option",{value:"\ubc30\uc1a1 \uc644\ub8cc",children:"\ubc30\uc1a1 \uc644\ub8cc"}),(0,b.jsx)("option",{value:"\ucde8\uc18c \ucc98\ub9ac\uc911",children:"\ucde8\uc18c \ucc98\ub9ac\uc911"}),(0,b.jsx)("option",{value:"\ucde8\uc18c \uc644\ub8cc",children:"\ucde8\uc18c \uc644\ub8cc"})]}),(0,b.jsx)(d.u5,{className:"me-md-2",color:"success",size:"sm",onClick:()=>{if(!j)return alert("\uc8fc\ubb38\uc0c1\ud0dc\ub97c \uc120\ud0dd\ud574\uc8fc\uc138\uc694.");(async(e,l)=>{try{const{data:a}=await c.Z.request({method:c.w.PATCH,url:o.l.PATCH_MALL_CANCEL_ORDERS_STATUS,path:{orderCancelId:e},query:{orderStatus:l}});if(null===a||void 0===a||!a.isSuccess)return void(2014===(null===a||void 0===a?void 0:a.code)?p("/login"):alert(null===a||void 0===a?void 0:a.message));x((e=>({...e,orderStatus:l})));const s=i.findIndex((l=>l.orderCancelId===e));i[s].orderStatus=l,u((e=>[...e])),await m(),alert(null===a||void 0===a?void 0:a.message)}catch(a){alert("\ub124\ud2b8\uc6cc\ud06c \ud1b5\uc2e0 \uc2e4\ud328. \uc7a0\uc2dc\ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4\ud574\uc8fc\uc138\uc694.")}})(v.orderCancelId,j),y("")},children:"\uc8fc\ubb38\uc0c1\ud0dc \ubcc0\uacbd"})]})]}),(0,b.jsx)(d.Ym,{children:(0,b.jsx)(d.u5,{color:"secondary",onClick:N,children:"\ucde8\uc18c"})})]})},p=()=>{const e=(0,r.s0)(),[l,a]=(0,s.useState)([]),[h,p]=(0,s.useState)({}),[v,x]=(0,s.useState)(!1),j=async()=>{try{const{data:l}=await c.Z.request({method:c.w.GET,url:o.l.GET_MALL_CANCEL_ORDERS});if(null===l||void 0===l||!l.isSuccess||(0,t.xb)(null===l||void 0===l?void 0:l.result))return console.log("loadMallCancelList error"),void(2014===(null===l||void 0===l?void 0:l.code)?e("/login"):alert(null===l||void 0===l?void 0:l.message));a(l.result.responses.map(((e,a)=>({...e,no:l.result.responses.length-a}))))}catch(l){console.log(l),alert("\ub124\ud2b8\uc6cc\ud06c \ud1b5\uc2e0 \uc2e4\ud328. \uc7a0\uc2dc\ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4\ud574\uc8fc\uc138\uc694.")}};(0,s.useEffect)((()=>{j()}),[]);return(0,b.jsxs)(d.rb,{children:[(0,b.jsx)(n.Z,{title:"\ucde8\uc18c \uc694\uccad \uad00\ub9ac"}),(0,b.jsx)(d.b7,{xs:12,children:(0,b.jsx)(d.xH,{className:"mb-4",children:(0,b.jsx)(d.sl,{children:(0,b.jsx)(u.Z,{items:l,onClick:e=>{p(e),x(!v)},columns:i.t5,className:"cancelList",datePicker:!0})})})}),(0,b.jsx)(m,{value:h,visible:v,setVisible:x,cancelList:l,setCanelList:a,onLoadMallCancelList:j,readOnly:!0})]})}}}]);
//# sourceMappingURL=2245.84962f5f.chunk.js.map