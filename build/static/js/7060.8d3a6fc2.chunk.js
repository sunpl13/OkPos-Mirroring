"use strict";(self.webpackChunkneordinary_template_react_js_admin=self.webpackChunkneordinary_template_react_js_admin||[]).push([[7060],{90399:function(e,r,t){t(72791);var n=t(78983),a=t(80184);r.Z=function(e){var r=e.visible,t=e.title,s=e.children,l=e.setVisible,c=e.upDate,i=e.onDelete,u=e.btnText,o=e.notEditBtn;return(0,a.jsxs)(n.Tk,{size:"lg",visible:r,onClose:function(){return l(!1)},children:[(0,a.jsx)(n.p0,{children:(0,a.jsx)(n.fl,{children:t||"Not Title"})}),(0,a.jsx)(n.sD,{children:s||(0,a.jsx)("h1",{children:"Not Children"})}),(0,a.jsxs)(n.Ym,{children:[!o&&(0,a.jsx)(n.u5,{onClick:function(){return c()},color:"primary",children:u||"Not Btn Title"}),i&&(0,a.jsx)(n.u5,{onClick:function(){return i()},color:"danger",children:"\uc0ad\uc81c"}),(0,a.jsx)(n.u5,{color:"secondary",onClick:function(){return l(!1)},children:"\ub2eb\uae30"})]})]})}},7060:function(e,r,t){t.r(r),t.d(r,{default:function(){return k}});var n=t(74165),a=t(15861),s=t(29439),l=t(72791),c=t(78983),i=t(38654),u=t(3854),o=(t(32967),t(90399)),d=t(88688),x=t(98708),b=t(80184),p=t(84336),f=function(e){var r=e.upDate,t=e.setValue,n=e.value,a=e.visible,s=e.setVisible,l=e.onDelete,i=e.editor,f=n.id,h=n.userName,v=n.userPhoneNum,m=n.content,j=n.inquiryCategory,Z=n.inquiryFiles,k=n.inquiryReplies;return(0,b.jsxs)(o.Z,{visible:a,title:"\ubb38\uc758 \uc0c1\uc138 \ubcf4\uae30",setVisible:s,upDate:r,btnText:0!==(null===k||void 0===k?void 0:k.length)?"\uc218\uc815":"\ub2f5\ubcc0\ub4f1\ub85d",onDelete:l,children:[(0,b.jsxs)(c.rb,{className:"p-2",children:[(0,b.jsx)(u.Z,{id:"id",placeholder:"\ubb38\uc758 \ubc88\ud638",label:"\ubb38\uc758 \ubc88\ud638",value:f,readOnly:!0,disabled:!0}),(0,b.jsx)(u.Z,{id:"userName",placeholder:"\ud68c\uc6d0 \uc774\ub984",label:"\ud68c\uc6d0 \uc774\ub984",value:h,readOnly:!0,disabled:!0})]}),(0,b.jsxs)(c.rb,{className:"p-2",children:[(0,b.jsx)(u.Z,{id:"inquiryCategory",placeholder:"\ubb38\uc758 \uc720\ud615",label:"\ubb38\uc758 \uc720\ud615",value:j,readOnly:!0,disabled:!0}),(0,b.jsx)(u.Z,{id:"phoneNumber",placeholder:"\ud734\ub300\uc804\ud654\ubc88\ud638",label:"\ud734\ub300\uc804\ud654\ubc88\ud638",value:v,readOnly:!0,disabled:!0})]}),(0,b.jsx)(c.rb,{className:"p-2",children:(0,b.jsx)(p.Z,{id:"userInquiry",value:m,readOnly:!0,disabled:!0,rows:9,label:"\ubb38\uc758 \ub0b4\uc6a9"})}),(0,b.jsxs)(c.rb,{className:"p-2",children:[(0,b.jsx)(c.L8,{children:"\ucca8\ubd80\ud30c\uc77c"}),(0,b.jsx)(x.Z,{fileItem:Z})]}),(0,b.jsx)("br",{}),(0,b.jsx)(c.rb,{className:"p-2",children:(0,b.jsx)(d.Z,{id:"content",label:"\ubb38\uc758 \ub2f5\ubcc0",value:i,setValue:t})}),(0,b.jsx)("br",{}),(0,b.jsx)("br",{})]})},h=t(20961),v=t(26670),m=t(96672),j=t(19311),Z=t(46327),k=function(){var e=(0,l.useState)([]),r=(0,s.Z)(e,2),t=r[0],u=r[1],o=(0,l.useState)({}),d=(0,s.Z)(o,2),x=d[0],p=d[1],k=(0,l.useState)([]),y=(0,s.Z)(k,2),w=y[0],N=y[1],T=(0,l.useState)(!1),E=(0,s.Z)(T,2),R=E[0],g=E[1],_=(0,l.useState)(""),I=(0,s.Z)(_,2),S=I[0],q=I[1],C=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){var r,t,a,s,l,c;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.Z.request({method:m.w.GET,url:j.l.GET_PARTNER_INQUIRIES});case 3:if(r=e.sent,t=r.data,a=t.result,s=t.isSuccess,l=t.code,c=t.message,s&&!(0,Z.xb)(a)){e.next=11;break}return e.abrupt("return",alert(c));case 11:1e3===l?u(a.inquiryPartnerDTOs):alert(c),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(){return e.apply(this,arguments)}}();(0,l.useEffect)((function(){C()}),[]);var D=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(r){var t,a,s,l,c,i,u;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.id,g(!R),e.prev=2,e.next=5,m.Z.request({method:m.w.GET,url:"".concat(j.l.GET_PARTNER_INQUIRIES,"/").concat(t)});case 5:if(a=e.sent,s=a.data,l=s.result,c=s.isSuccess,i=s.code,u=s.message,c&&!(0,Z.xb)(l)){e.next=13;break}return e.abrupt("return",alert(u));case 13:1e3===i?(p(l),N(l.inquiryReplies),0!==l.inquiryReplies.length&&q(l.inquiryReplies[l.inquiryReplies.length-1].content)):alert(u),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(2),console.log(e.t0);case 19:case"end":return e.stop()}}),e,null,[[2,16]])})));return function(r){return e.apply(this,arguments)}}(),P=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){var r,t,a,s,l,c,i;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=x.id,!window.confirm("\uc815\ub9d0 \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")){e.next=19;break}return e.prev=2,e.next=5,m.Z.request({method:m.w.PATCH,url:"".concat(j.l.GET_PARTNER_INQUIRIES,"/reply/").concat(r)});case 5:if(t=e.sent,a=t.data,s=a.result,l=a.isSuccess,c=a.code,i=a.message,l&&!(0,Z.xb)(s)){e.next=13;break}return e.abrupt("return",alert(i));case 13:1e3===c?(alert(i),window.location.reload()):alert(i),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(2),console.log(e.t0);case 19:case"end":return e.stop()}}),e,null,[[2,16]])})));return function(){return e.apply(this,arguments)}}(),G=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){var r,t,a,s,l,c,i,u,o,d,b,p,f;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=x.id,0===w.length){e.next=29;break}if(!window.confirm("\ub2f5\ubcc0\uc744 \uc218\uc815\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")){e.next=27;break}if(S){e.next=5;break}return e.abrupt("return",alert("\ub2f5\ubcc0\uc744 \uc791\uc131\ud574 \uc8fc\uc138\uc694."));case 5:return e.prev=5,e.next=8,m.Z.request({method:m.w.PUT,url:"".concat(j.l.GET_PARTNER_INQUIRIES,"/reply/").concat(r),data:{content:S}});case 8:if(t=e.sent,a=t.data,s=a.result,l=a.isSuccess,c=a.code,i=a.message,l&&!(0,Z.xb)(s)){e.next=16;break}return e.abrupt("return",alert(i));case 16:if(1e3!==c){e.next=21;break}return g(!1),e.abrupt("return",alert(i));case 21:alert(i);case 22:e.next=27;break;case 24:e.prev=24,e.t0=e.catch(5),console.log(e.t0);case 27:e.next=54;break;case 29:if(!window.confirm("\ub2f5\ubcc0\uc744 \ub4f1\ub85d\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")){e.next=54;break}if(S){e.next=32;break}return e.abrupt("return",alert("\ub2f5\ubcc0\uc744 \uc791\uc131\ud574 \uc8fc\uc138\uc694."));case 32:return e.prev=32,e.next=35,m.Z.request({method:m.w.POST,url:"".concat(j.l.GET_PARTNER_INQUIRIES,"/").concat(r,"/reply"),data:{content:S}});case 35:if(u=e.sent,o=u.data,d=o.result,b=o.isSuccess,p=o.code,f=o.message,b&&!(0,Z.xb)(d)){e.next=43;break}return e.abrupt("return",alert(f));case 43:if(1e3!==p){e.next=48;break}return g(!1),e.abrupt("return",alert(f));case 48:alert(f);case 49:e.next=54;break;case 51:e.prev=51,e.t1=e.catch(32),console.log(e.t1);case 54:case"end":return e.stop()}}),e,null,[[5,24],[32,51]])})));return function(){return e.apply(this,arguments)}}();return(0,l.useEffect)((function(){R||q("")}),[R]),(0,b.jsxs)(c.rb,{children:[(0,b.jsx)(h.Z,{title:"1 : 1 \ubb38\uc758 \ub9ac\uc2a4\ud2b8"}),(0,b.jsx)(c.b7,{xs:12,children:(0,b.jsx)(c.xH,{className:"mb-4",children:(0,b.jsx)(c.sl,{children:(0,b.jsx)(i.Z,{items:t,onClick:D,columns:v.uF,className:"userList"})})})}),(0,b.jsx)(f,{visible:R,setVisible:g,value:x,onChange:function(e){q(e)},upDate:G,onDelete:P,editor:S,setValue:q})]})}}}]);
//# sourceMappingURL=7060.8d3a6fc2.chunk.js.map