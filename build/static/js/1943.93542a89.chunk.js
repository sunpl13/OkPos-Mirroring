"use strict";(self.webpackChunkneordinary_template_react_js_admin=self.webpackChunkneordinary_template_react_js_admin||[]).push([[1943],{71943:function(e,r,n){n.r(r),n.d(r,{default:function(){return N}});var t=n(74165),a=n(1413),s=n(15861),l=n(29439),o=n(72791),d=n(57689),i=n(78983),c=n(3854),u=n(46327),m=n(46819),v=n(1966),p=n(36906),f=n(72426),h=n.n(f),b=n(44219),x=n(80184),j=function(e){var r=e.items,n=(e.onClick,e.columns),t=e.className,a=e.datePickerHidden,s=void 0===a||a,d=e.setSelectedProduct,c=(e.onUpdateInvoice,(0,o.useState)([])),m=(0,l.Z)(c,2),f=m[0],j=m[1],I=(0,o.useState)(),Z=(0,l.Z)(I,2),Y=Z[0],D=Z[1],S=(0,o.useState)(!1),N=(0,l.Z)(S,2),w=(N[0],N[1],(0,o.useState)("")),y=(0,l.Z)(w,2),M=y[0],k=y[1],g=(0,o.useState)(""),P=(0,l.Z)(g,2),C=P[0],O=P[1],H=(0,o.useState)(!1),_=(0,l.Z)(H,2),L=_[0],T=_[1];(0,o.useEffect)((function(){j(r)}),[r]),(0,o.useEffect)((function(){var e;C?null!==(e=f[0])&&void 0!==e&&e.orderDate?D(f.filter((function(e){return h()(e.orderDate,"YYYYMMDDHHmmss").format("YYYY-MM-DD")>=M&&h()(e.orderDate,"YYYYMMDDHHmmss").format("YYYY-MM-DD")<=C}))):D(f.filter((function(e){return h()(e.createdAt,"YYYYMMDDHHmmss").format("YYYY-MM-DD")>=M&&h()(e.createdAt,"YYYYMMDDHHmmss").format("YYYY-MM-DD")<=C}))):D("")}),[C]);return(0,x.jsxs)(x.Fragment,{children:[s&&(0,x.jsxs)(i.rb,{className:"d-md-flex justify-content-md-end pt-2 pb-2",children:[(0,x.jsx)(i.u5,{className:"me-md-2",color:"success",size:"sm",children:"\uc8fc\ubb38\uc0c1\ud0dc \ubcc0\uacbd"}),(0,x.jsx)(i.b7,{xs:4,children:(0,x.jsx)(p.Z,{className:"me-md-2",setStartDate:k,setEndDate:O})})]}),(0,x.jsx)(v.u,{items:Y||f,columns:n||null,columnSorter:!0,pagination:!0,paginationProps:{limit:10},tableHeadProps:{id:"smTable"},clickableRows:!0,onRowClick:function(e){T(e),d(e)},tableProps:{hover:!0,responsive:!0,striped:!0,align:"middle",className:t},scopedColumns:{radioButton:function(e,r){return(0,x.jsx)("td",{children:(0,x.jsx)("input",{id:"".concat(r),name:"select-radio",type:"radio",checked:e.orderItemId===L.orderItemId,readOnly:!0})})},orderStatus:function(e){var r=e.orderStatus;return(0,x.jsx)("td",{children:(0,x.jsx)(i.C_,{size:"sm",color:(0,b.O)(r),children:r})})},invoiceNumber:function(e){return(0,x.jsx)("td",{children:e.invoiceNumber})},orderItemPrice:function(e){var r=e.orderItemPrice;return(0,x.jsx)("td",{className:"orderItemPrice",children:(0,u.ks)(r)})},totalPrice:function(e){var r=e.totalPrice;return(0,x.jsx)("td",{className:"totalPrice",children:(0,u.ks)(r)})},orderDate:function(e){var r=e.orderDate;return(0,x.jsx)("td",{children:h()(r,"YYYYMMDDHHmmss").format("YYYY. MM. DD")})},payDate:function(e){var r=e.payDate;return(0,x.jsx)("td",{children:h()(r,"YYYYMMDDHHmmss").format("YYYY. MM. DD")})}},noItemsLabel:"\ub370\uc774\ud130\uac00 \uc5c6\uc2b5\ub2c8\ub2e4.",itemsPerPage:20})]})},I=n(96672),Z=n(19311),Y=function(e){var r=e.value,n=e.visible,v=e.setVisible,p=(0,d.s0)(),f=(0,o.useState)({orderId:0,orderNumber:"",name:"",paymentMethod:"",totalPrice:0,orderDate:"",payDate:"",receiver:"",address:"",normalNumber:"",phoneNumber:"",totalCount:"",subInfos:[]}),h=(0,l.Z)(f,2),b=h[0],Y=h[1],D=(0,o.useState)(""),S=(0,l.Z)(D,2),N=S[0],w=S[1],y=(0,o.useState)(""),M=(0,l.Z)(y,2),k=M[0],g=M[1],P=(0,o.useState)(""),C=(0,l.Z)(P,2),O=C[0],H=C[1],_=(0,o.useState)(""),L=(0,l.Z)(_,2),T=L[0],A=L[1];(0,o.useEffect)((function(){n&&Y(r)}),[n]);var E=function(){w(""),A(""),v(!1)},R=function(){var e=(0,s.Z)((0,t.Z)().mark((function e(r,n){var s,l,o,d;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.Z.request({method:I.w.PATCH,url:Z.l.PATCH_MALL_ORDERS_STATUS,path:{orderItemId:r},query:{orderStatus:n}});case 3:if(s=e.sent,null!==(l=s.data)&&void 0!==l&&l.isSuccess){e.next=8;break}return 2014===(null===l||void 0===l?void 0:l.code)?p("/login"):alert(null===l||void 0===l?void 0:l.message),e.abrupt("return");case 8:o=b.subInfos.findIndex((function(e){return e.orderItemId===r})),(d=b.subInfos)[o].orderStatus=n,Y((function(e){return(0,a.Z)((0,a.Z)({},e),{},{subInfos:d})})),alert(null===l||void 0===l?void 0:l.message),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),alert("\ub124\ud2b8\uc6cc\ud06c \ud1b5\uc2e0 \uc2e4\ud328. \uc7a0\uc2dc\ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4\ud574\uc8fc\uc138\uc694.");case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(r,n){return e.apply(this,arguments)}}(),z=function(){var e=(0,s.Z)((0,t.Z)().mark((function e(r,n,s){var l,o,d,i;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.Z.request({method:I.w.POST,url:Z.l.POST_MALL_ORDERS_STATUS,path:{orderItemId:r},data:{orderStatus:n,reason:s}});case 3:if(l=e.sent,null!==(o=l.data)&&void 0!==o&&o.isSuccess){e.next=8;break}return 2014===(null===o||void 0===o?void 0:o.code)?p("/login"):alert(null===o||void 0===o?void 0:o.message),e.abrupt("return");case 8:d=b.subInfos.findIndex((function(e){return e.orderItemId===r})),(i=b.subInfos)[d].orderStatus=n,Y((function(e){return(0,a.Z)((0,a.Z)({},e),{},{subInfos:i})})),alert(null===o||void 0===o?void 0:o.message),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),alert("\ub124\ud2b8\uc6cc\ud06c \ud1b5\uc2e0 \uc2e4\ud328. \uc7a0\uc2dc\ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4\ud574\uc8fc\uc138\uc694.");case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(r,n,t){return e.apply(this,arguments)}}(),q=function(){var e=(0,s.Z)((0,t.Z)().mark((function e(r,n){var s,l,o,d;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.Z.request({method:I.w.PATCH,url:Z.l.PATCH_MALL_ORDERS_INVOICE,path:{orderItemId:r},data:{invoiceNumber:n}});case 3:if(s=e.sent,null!==(l=s.data)&&void 0!==l&&l.isSuccess){e.next=8;break}return 2014===(null===l||void 0===l?void 0:l.code)?p("/login"):alert(null===l||void 0===l?void 0:l.message),e.abrupt("return");case 8:o=b.subInfos.findIndex((function(e){return e.orderItemId===r})),(d=b.subInfos)[o].invoiceNumber=n,Y((function(e){return(0,a.Z)((0,a.Z)({},e),{},{subInfos:d})})),A(d[o]),alert(null===l||void 0===l?void 0:l.message),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),alert("\ub124\ud2b8\uc6cc\ud06c \ud1b5\uc2e0 \uc2e4\ud328. \uc7a0\uc2dc\ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4\ud574\uc8fc\uc138\uc694.");case 19:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(r,n){return e.apply(this,arguments)}}(),U=function(e){var r=e.target.value;g(r)};return(0,x.jsxs)(i.Tk,{size:"xl",visible:n,onClose:E,children:[(0,x.jsx)(i.p0,{children:(0,x.jsx)(i.fl,{children:"\uc8fc\ubb38 \uc0c1\uc138\uc815\ubcf4"})}),(0,x.jsxs)(i.sD,{children:[(0,x.jsxs)(i.rb,{className:"p-2",children:[(0,x.jsx)(c.Z,{id:"orderId",placeholder:"User Id",label:"No",value:b.no,readOnly:!0,disabled:!0}),(0,x.jsx)(c.Z,{id:"orderNumber",placeholder:"",label:"\uc8fc\ubb38\ubc88\ud638",value:b.orderNumber,readOnly:!0,disabled:!0})]}),(0,x.jsxs)(i.rb,{className:"p-2",children:[(0,x.jsx)(c.Z,{id:"name",placeholder:"",label:"\uc8fc\ubb38\uc790",value:b.name,readOnly:!0,disabled:!0}),(0,x.jsx)(c.Z,{id:"receiver",placeholder:"",label:"\uc218\ucde8\uc778",value:b.receiver,readOnly:!0,disabled:!0})]}),(0,x.jsxs)(i.rb,{className:"p-2",children:[(0,x.jsx)(c.Z,{id:"normalNumber",placeholder:"",label:"\uc77c\ubc18\uc804\ud654\ubc88\ud638",value:b.normalNumber,readOnly:!0,disabled:!0}),(0,x.jsx)(c.Z,{id:"phoneNumber",placeholder:"",label:"\ud734\ub300\uc804\ud654\ubc88\ud638",value:b.phoneNumber,readOnly:!0,disabled:!0})]}),(0,x.jsxs)(i.rb,{className:"p-2",children:[(0,x.jsx)(c.Z,{id:"totalCount",placeholder:"",label:"\uc8fc\ubb38 \ucd1d\uc218\ub7c9",value:b.totalCount,readOnly:!0,disabled:!0}),(0,x.jsx)(c.Z,{id:"orderDate",placeholder:"",label:"\uc8fc\ubb38\uc77c",value:b.orderDate,readOnly:!0,disabled:!0})]}),(0,x.jsxs)(i.rb,{className:"p-2",children:[(0,x.jsx)(c.Z,{id:"paymentMethod",placeholder:"",label:"\uacb0\uc81c\uc218\ub2e8",value:b.paymentMethod,readOnly:!0,disabled:!0}),(0,x.jsx)(c.Z,{id:"payDate",placeholder:"",label:"\uacb0\uc81c\uc77c",value:b.payDate,readOnly:!0,disabled:!0})]}),(0,x.jsx)(i.rb,{className:"p-2",children:(0,x.jsx)(c.Z,{id:"totalPrice",placeholder:"",label:"\ucd1d \uacb0\uc81c\uae08\uc561",value:(0,u.ks)(b.totalPrice),readOnly:!0,disabled:!0})}),(0,x.jsx)(i.rb,{className:"p-2",children:(0,x.jsx)(c.Z,{id:"address",placeholder:"",label:"\uc8fc\uc18c",value:b.address,readOnly:!0,disabled:!0})}),(0,x.jsx)("br",{}),(0,x.jsx)(j,{items:b.subInfos,columns:m.xL,searchInputHidden:!1,datePickerHidden:!1,setSelectedProduct:function(e){A(e)},onUpdateInvoice:q,className:"subInfos"}),(0,x.jsxs)("div",{className:"pb-2 d-md-flex justify-content-md-end",children:[(0,x.jsxs)(i.LX,{value:N,className:"me-md-2 orderStatusForm",size:"sm",onChange:function(e){var r=e.target.value;w(r)},children:[(0,x.jsx)("option",{children:"\uc8fc\ubb38\uc0c1\ud0dc \uc120\ud0dd"}),(0,x.jsx)("option",{value:"\uacb0\uc81c \ub300\uae30",children:"\uacb0\uc81c \ub300\uae30"}),(0,x.jsx)("option",{value:"\uacb0\uc81c \uc644\ub8cc",children:"\uacb0\uc81c \uc644\ub8cc"}),(0,x.jsx)("option",{value:"\ubc30\uc1a1 \uc900\ube44\uc911",children:"\ubc30\uc1a1 \uc900\ube44\uc911"}),(0,x.jsx)("option",{value:"\ubc30\uc1a1\uc911",children:"\ubc30\uc1a1\uc911"}),(0,x.jsx)("option",{value:"\ubc30\uc1a1 \uc644\ub8cc",children:"\ubc30\uc1a1 \uc644\ub8cc"}),(0,x.jsx)("option",{value:"\ucde8\uc18c \uc694\uccad",children:"\ucde8\uc18c \uc694\uccad"}),(0,x.jsx)("option",{value:"\uad50\ud658 \uc694\uccad",children:"\uad50\ud658 \uc694\uccad"})]}),(0,x.jsx)(i.u5,{className:"me-md-2",color:"success",size:"sm",onClick:function(){return N?T.orderItemId?(window.confirm("\uc8fc\ubb38 \uc0c1\ud0dc\ub97c \ubcc0\uacbd \ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")&&("\ucde8\uc18c \uc694\uccad"===N||"\uad50\ud658 \uc694\uccad"===N?z(T.orderItemId,N,k):R(T.orderItemId,N)),w(""),void g("")):alert("\uc8fc\ubb38\uc0c1\ud488\uc744 \uc120\ud0dd\ud574\uc8fc\uc138\uc694."):alert("\uc8fc\ubb38\uc0c1\ud0dc\ub97c \uc120\ud0dd\ud574\uc8fc\uc138\uc694.")},children:"\uc8fc\ubb38\uc0c1\ud0dc \ubcc0\uacbd"}),(0,x.jsx)(i.jO,{className:"me-md-2 orderInvoiceForm",placeholder:"\uc1a1\uc7a5\ubc88\ud638 \uc785\ub825",size:"sm",onChange:function(e){var r=e.target.value;H(r)}}),(0,x.jsx)(i.u5,{className:"me-md-2",color:"warning",size:"sm",onClick:function(){return O?11!==O.length?alert("\uc1a1\uc7a5\ubc88\ud638\ub97c \ud655\uc778\ud574\uc8fc\uc138\uc694.(11\uc790\ub9ac)"):T.orderItemId?void q(T.orderItemId,O):alert("\uc8fc\ubb38\uc0c1\ud488\uc744 \uc120\ud0dd\ud574\uc8fc\uc138\uc694."):alert("\uc1a1\uc7a5\ubc88\ud638\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694.")},children:"\uc1a1\uc7a5\ub4f1\ub85d"}),(0,x.jsx)(i.u5,{color:"warning",size:"sm",onClick:function(){if(null!==T&&void 0!==T&&T.invoiceNumber){var e=T.invoiceNumber;window.open("https://www.ilogen.com/web/personal/trace/"+e)}else window.open("https://www.ilogen.com/web/personal/tkSearch")},children:"\uc1a1\uc7a5\uc870\ud68c"})]}),"\ucde8\uc18c \uc694\uccad"===N&&(0,x.jsx)(i.PB,{id:"reason",placeholder:"\ucde8\uc18c \uc0ac\uc720\ub97c \uc785\ub825\ud574 \uc8fc\uc138\uc694",rows:"3",value:k,onChange:U}),"\uad50\ud658 \uc694\uccad"===N&&(0,x.jsx)(i.PB,{id:"reason",placeholder:"\uad50\ud658 \uc0ac\uc720\ub97c \uc785\ub825\ud574 \uc8fc\uc138\uc694",rows:"3",value:k,onChange:U})]}),(0,x.jsx)(i.Ym,{children:(0,x.jsx)(i.u5,{color:"secondary",onClick:E,children:"\ucde8\uc18c"})})]})},D=n(20961),S=n(59159),N=function(){var e=(0,d.s0)(),r=(0,o.useState)([]),n=(0,l.Z)(r,2),c=n[0],v=n[1],p=(0,o.useState)({}),f=(0,l.Z)(p,2),h=f[0],b=f[1],j=(0,o.useState)(!1),N=(0,l.Z)(j,2),w=N[0],y=N[1],M=function(){var r=(0,s.Z)((0,t.Z)().mark((function r(n){var s,l;return(0,t.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,I.Z.request({method:I.w.GET,url:Z.l.GET_MALL_ORDERS,query:{orderStatus:n||""}});case 3:if(s=r.sent,null!==(l=s.data)&&void 0!==l&&l.isSuccess&&!(0,u.xb)(null===l||void 0===l?void 0:l.result)){r.next=9;break}return console.log("loadMallorderList error"),2014===(null===l||void 0===l?void 0:l.code)?e("/login"):alert(null===l||void 0===l?void 0:l.message),r.abrupt("return");case 9:v(l.result.responses.map((function(e,r){return(0,a.Z)((0,a.Z)({},e),{},{no:l.result.responses.length-r})}))),r.next=16;break;case 12:r.prev=12,r.t0=r.catch(0),console.log(r.t0),alert("\ub124\ud2b8\uc6cc\ud06c \ud1b5\uc2e0 \uc2e4\ud328. \uc7a0\uc2dc\ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4\ud574\uc8fc\uc138\uc694.");case 16:case"end":return r.stop()}}),r,null,[[0,12]])})));return function(e){return r.apply(this,arguments)}}();(0,o.useEffect)((function(){M()}),[]);return(0,x.jsxs)(i.rb,{children:[(0,x.jsx)(D.Z,{title:"\uc8fc\ubb38 \uad00\ub9ac"}),(0,x.jsx)(i.b7,{xs:12,children:(0,x.jsx)(i.xH,{className:"mb-4",children:(0,x.jsx)(i.sl,{children:(0,x.jsx)(S.Z,{items:c,onClick:function(e){b(e),y(!w)},columns:m.W_,onLoadMallorderList:M,datePicker:!0,dataSearch:!0})})})}),(0,x.jsx)(Y,{value:h,visible:w,setVisible:y,onLoadMallorderList:M,readOnly:!0})]})}}}]);
//# sourceMappingURL=1943.93542a89.chunk.js.map