"use strict";(self.webpackChunkneordinary_template_react_js_admin=self.webpackChunkneordinary_template_react_js_admin||[]).push([[1981],{91149:function(e,r,a){var l=a(29439),t=a(78983),n=a(72791),s=a(80184);r.Z=function(e){var r=e.id,a=e.value,o=e.label,i=e.isRequired,c=(0,n.useState)(""),u=(0,l.Z)(c,2),d=u[0],p=u[1];return(0,n.useEffect)((function(){if(a){var e=a.split("/"),r=e[e.length-1];p(r)}}),[a]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.L8,{htmlFor:"".concat(r,"Static"),className:"col-sm-2 col-form-label",children:(0,s.jsx)("span",{className:i?"required":"",children:o||" * "})}),(0,s.jsx)(t.b7,{className:"align-items-center",style:{display:"flex"},children:a?(0,s.jsx)("div",{className:"col-form-label",children:(0,s.jsx)("a",{href:a,download:!0,target:"_blank",rel:"noreferrer",children:d})}):(0,s.jsx)("div",{className:"col-form-label",children:"\ub4f1\ub85d\ub41c \ud30c\uc77c\uc774 \uc5c6\uc2b5\ub2c8\ub2e4."})})]})}},3854:function(e,r,a){var l=a(78983),t=(a(72791),a(80184));r.Z=function(e){var r=e.type,a=e.onChange,n=e.id,s=e.placeholder,o=e.value,i=e.label,c=e.readOnly,u=e.disabled,d=e.isRequired,p=e.xs;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.L8,{htmlFor:"".concat(n,"Static"),className:"col-sm-2 col-form-label",children:(0,t.jsx)("span",{className:d?"required":"",children:i||" * "})}),(0,t.jsx)(l.b7,{className:"align-items-center",xs:p,style:{display:"flex"},children:(0,t.jsx)(l.jO,{type:r||"text",id:n,placeholder:s||"",value:"file"===r?void 0:o||"",onChange:a,readOnly:c,disabled:u})})]})}},91056:function(e,r,a){var l,t,n=a(30168),s=a(29439),o=a(72791),i=a(66770),c=a.n(i),u=(a(86009),a(78983)),d=a(91191),p=a(80184);r.Z=function(e){var r=e.id,a=e.value,l=e.label,t=e.isRequired,n=e.readOnly,i=void 0!==n&&n,c=e.setValue,d=e.maxLength,y=e.editorHeight,f=void 0===y?300:y,h=(0,o.useRef)(),v=(0,o.useState)(!1),x=(0,s.Z)(v,2),N=x[0],k=x[1],_=(0,o.useState)(null===a||void 0===a?void 0:a.replace(/<[^>]*>?|/g,"").length),g=(0,s.Z)(_,2),j=g[0],Z=g[1],I=(0,o.useMemo)((function(){return{toolbar:{container:[["bold","italic","underline","strike","blockquote"],[{size:["small",!1,"large","huge"]},{color:[]}],[{list:"ordered"},{list:"bullet"},{indent:"-1"},{indent:"+1"},{align:[]}]]}}}),[]),q=function(e){if(d){var r=e.replace(/<[^>]*>?|/g,"").length;Z(r),d>=r?(c(e),k(!1)):k(!0)}else d||c(e)};return(0,p.jsxs)(u.b7,{style:{height:"".concat(f,"px"),marginBottom:"20px"},className:"pb-5",children:[(0,p.jsxs)(u.L8,{htmlFor:"".concat(r,"Static"),className:"col-form-label",children:[(0,p.jsx)("span",{className:t&&"required",children:l||" * "}),(0,p.jsx)(b,{className:"px-lg-2",textLengthCheck:N,children:!i&&d&&"".concat(j,"/").concat(d,"\uc790 \uae4c\uc9c0 \uc785\ub825 \uac00\ub2a5\ud569\ub2c8\ub2e4.")})]}),(0,p.jsx)(m,{id:r||"",ref:function(e){null!==e&&(h.current=e)},value:a,onChange:function(e){return q(N?a:e)},modules:I,readOnly:i,theme:"snow",placeholder:"\ub0b4\uc6a9\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694.",style:{height:"100%"}})]})};var m=(0,d.ZP)(c())(l||(l=(0,n.Z)(["\n  background-color: ",";\n  border-radius: 0.375rem;\n  border: none;\n  .ql-container {\n    border-radius: ",";\n    border-bottom-left-radius: 0.375rem;\n    border-bottom-right-radius: 0.375rem;\n  }\n  .ql-editor {\n    border-radius: ",";\n  }\n  .ql-toolbar {\n    border-top-left-radius: 0.375rem;\n    border-top-right-radius: 0.375rem;\n    display: ",";\n  }\n"])),(function(e){return e.readOnly?"#d8dbe0":"transparent"}),(function(e){return e.readOnly?"0.375rem":"0"}),(function(e){return e.readOnly?"0.375rem":"0"}),(function(e){return e.readOnly?"none":"block"})),b=d.ZP.span(t||(t=(0,n.Z)(["\n  font-size: 12px;\n  padding-left: 10px;\n  //color: ",";\n"])),(function(e){return e.textLengthCheck&&"red"}))},11981:function(e,r,a){a.r(r),a.d(r,{default:function(){return _}});var l=a(4942),t=a(1413),n=a(74165),s=a(15861),o=a(29439),i=a(72791),c=a(57689),u=a(78983),d=a(70844),p=a(3854),m=a(91149),b=a(91056),y=a(80184),f=function(e){var r=e.onCreate,a=e.onChange,l=e.onDelete,t=e.inquiryReplyContent,n=e.setInquiryReplyContent,s=e.value,o=e.isReadOnly,i=e.setIsReadOnly,c=e.isUpdate,d=e.setIsUpdate,f=e.visible,h=e.setVisible,v="1:1 \ubb38\uc758 \uc0c1\uc138 \ub0b4\uc6a9";c&&(v="1:1 \ubb38\uc758 \ub2f5\ubcc0 \uc218\uc815"),o&&(v="1:1 \ubb38\uc758 \uc0c1\uc138 \ub0b4\uc6a9");return(0,y.jsxs)(u.Tk,{size:"lg",visible:f,onClose:function(){return h(!1)},children:[(0,y.jsx)(u.p0,{children:(0,y.jsx)(u.fl,{children:v})}),(0,y.jsxs)(u.sD,{children:[(0,y.jsxs)(u.rb,{className:"p-2",children:[(0,y.jsx)(p.Z,{id:"id",placeholder:"inquiryId",label:"No",value:s.inquiryId,readOnly:!0,disabled:!0})," ",(0,y.jsx)(p.Z,{id:"category",placeholder:"\ubb38\uc758 \uc720\ud615",label:"\ubb38\uc758 \uc720\ud615",value:s.category,readOnly:!0,disabled:!0})]}),(0,y.jsxs)(u.rb,{className:"p-2",children:[(0,y.jsx)(p.Z,{id:"name",placeholder:"\uc774\ub984",label:"\uc774\ub984",value:s.name,readOnly:!0,disabled:!0}),(0,y.jsx)(p.Z,{id:"phoneNumber",placeholder:"\ud734\ub300\uc804\ud654\ubc88\ud638",label:"\ud734\ub300\uc804\ud654\ubc88\ud638",value:s.phoneNumber,onChange:a,readOnly:!0,disabled:!0})]}),(0,y.jsx)(u.rb,{className:"p-2",children:(0,y.jsx)(p.Z,{id:"title",placeholder:"\uc81c\ubaa9",label:"\uc81c\ubaa9",value:s.title,readOnly:!0,disabled:!0})}),(0,y.jsx)(u.rb,{className:"p-2",children:(0,y.jsx)(m.Z,{id:"files",placeholder:"\ucca8\ubd80\ud30c\uc77c",label:"\ucca8\ubd80\ud30c\uc77c",value:s.file||"",readOnly:!0,disabled:!0})}),(0,y.jsx)(u.rb,{className:"p-2",children:(0,y.jsx)(u.PB,{id:"content",label:"\ubb38\uc758\ub0b4\uc6a9",value:s.content,readOnly:!0,disabled:!0,rows:9})}),(0,y.jsx)(u.rb,{className:"p-2",children:(0,y.jsx)(b.Z,{id:"inquiryReplyContent",value:t||"",isRequired:!0,readOnly:o,disabled:o,setValue:n,label:"\ub2f5\ubcc0",maxLength:450})}),(0,y.jsx)("br",{})]}),(0,y.jsxs)(u.Ym,{children:[o?(0,y.jsx)(y.Fragment,{children:(0,y.jsx)(u.u5,{color:"success",onClick:function(){i(!1),d(!0)},children:"\uc218\uc815"})}):(0,y.jsx)(u.u5,{onClick:function(){return r(s)},color:"primary",children:"\uc800\uc7a5"}),(0,y.jsx)(u.u5,{color:"danger",onClick:function(){return l(s)},children:"\uc0ad\uc81c"}),(0,y.jsx)(u.u5,{color:"secondary",onClick:function(){return h(!1)},children:"\ucde8\uc18c"})]})]})},h=a(20961),v=a(46819),x=a(96672),N=a(19311),k=a(46327),_=function(){var e=(0,c.s0)(),r=(0,i.useState)([]),a=(0,o.Z)(r,2),p=a[0],m=a[1],b=(0,i.useState)({inquiryId:0,name:"",email:"",category:"",phoneNumber:"",content:"",file:[],inquiryReplyId:null,inquiryReplyContent:""}),_=(0,o.Z)(b,2),g=_[0],j=_[1],Z=(0,i.useState)(""),I=(0,o.Z)(Z,2),q=I[0],C=I[1],R=(0,i.useState)(!1),w=(0,o.Z)(R,2),S=w[0],L=w[1],O=(0,i.useState)(!1),P=(0,o.Z)(O,2),A=P[0],T=P[1],E=(0,i.useState)(!1),D=(0,o.Z)(E,2),U=D[0],M=D[1],H=function(){var r=(0,s.Z)((0,n.Z)().mark((function r(){var a,l;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,x.Z.request({method:x.w.GET,url:N.l.GET_MALL_INQUIRIES});case 3:if(a=r.sent,null!==(l=a.data)&&void 0!==l&&l.isSuccess&&!(0,k.xb)(null===l||void 0===l?void 0:l.result)){r.next=9;break}return console.log("onLoadMallInquiryList error"),2014===(null===l||void 0===l?void 0:l.code)?e("/login"):alert(null===l||void 0===l?void 0:l.message),r.abrupt("return");case 9:m(l.result.inquiryInfos),r.next=16;break;case 12:r.prev=12,r.t0=r.catch(0),console.log(r.t0),alert("\ub124\ud2b8\uc6cc\ud06c \ud1b5\uc2e0 \uc2e4\ud328. \uc7a0\uc2dc\ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4\ud574\uc8fc\uc138\uc694.");case 16:case"end":return r.stop()}}),r,null,[[0,12]])})));return function(){return r.apply(this,arguments)}}(),Y=function(){var r=(0,s.Z)((0,n.Z)().mark((function r(a){var l,t;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,x.Z.request({data:{},query:{},path:{inquiryId:a},method:x.w.GET,url:N.l.GET_MALL_INQUIRY});case 3:if(l=r.sent,null!==(t=l.data)&&void 0!==t&&t.isSuccess&&!(0,k.xb)(null===t||void 0===t?void 0:t.result)){r.next=9;break}return console.log("onloadMallInquiry error"),2014===(null===t||void 0===t?void 0:t.code)?e("/login"):alert(null===t||void 0===t?void 0:t.message),r.abrupt("return");case 9:return r.next=11,j(t.result);case 11:return r.next=13,C(t.result.inquiryReplyContent);case 13:t.result.inquiryReplyId?T(!0):T(!1),r.next=20;break;case 16:r.prev=16,r.t0=r.catch(0),console.log(r.t0),alert("\ub124\ud2b8\uc6cc\ud06c \ud1b5\uc2e0 \uc2e4\ud328. \uc7a0\uc2dc\ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4\ud574\uc8fc\uc138\uc694.");case 20:case"end":return r.stop()}}),r,null,[[0,16]])})));return function(e){return r.apply(this,arguments)}}(),F=function(){var r=(0,s.Z)((0,n.Z)().mark((function r(a,l){var t,s;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,x.Z.request({method:x.w.POST,url:N.l.POST_MALL_INQUIRY_REPLY,data:{inquiryId:a,inquiryReplyContent:l}});case 3:return t=r.sent,null!==(s=t.data)&&void 0!==s&&s.isSuccess||2014===(null===s||void 0===s?void 0:s.code)&&e("/login"),alert(null===s||void 0===s?void 0:s.message),r.next=9,Y(a);case 9:r.next=14;break;case 11:r.prev=11,r.t0=r.catch(0),alert("\ub124\ud2b8\uc6cc\ud06c \ud1b5\uc2e0 \uc2e4\ud328. \uc7a0\uc2dc\ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4\ud574\uc8fc\uc138\uc694.");case 14:case"end":return r.stop()}}),r,null,[[0,11]])})));return function(e,a){return r.apply(this,arguments)}}(),Q=function(){var r=(0,s.Z)((0,n.Z)().mark((function r(a,l){var t,s;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,x.Z.request({method:x.w.PATCH,url:N.l.PATCH_MALL_UPDATE_INQUIRY_REPLY,path:{inquiryReplyId:a},data:{inquiryReplyContent:l}});case 3:if(t=r.sent,null!==(s=t.data)&&void 0!==s&&s.isSuccess){r.next=8;break}return 2014===(null===s||void 0===s?void 0:s.code)?e("/login"):alert(null===s||void 0===s?void 0:s.message),r.abrupt("return");case 8:alert(null===s||void 0===s?void 0:s.message),r.next=14;break;case 11:r.prev=11,r.t0=r.catch(0),alert("\ub124\ud2b8\uc6cc\ud06c \ud1b5\uc2e0 \uc2e4\ud328. \uc7a0\uc2dc\ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4\ud574\uc8fc\uc138\uc694.");case 14:case"end":return r.stop()}}),r,null,[[0,11]])})));return function(e,a){return r.apply(this,arguments)}}(),z=function(){var r=(0,s.Z)((0,n.Z)().mark((function r(a){var l,t,s;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!window.confirm("\uc815\ub9d0 \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")){r.next=17;break}return l=a.inquiryId,r.prev=2,r.next=5,x.Z.request({method:x.w.PATCH,url:N.l.PATCH_MALL_DELETE_INQUIRY,path:{inquiryId:l}});case 5:return t=r.sent,null!==(s=t.data)&&void 0!==s&&s.isSuccess||(2014===(null===s||void 0===s?void 0:s.code)?e("/login"):alert(null===s||void 0===s?void 0:s.message)),alert(null===s||void 0===s?void 0:s.message),L(!S),r.next=12,H();case 12:r.next=17;break;case 14:r.prev=14,r.t0=r.catch(2),alert("\ub124\ud2b8\uc6cc\ud06c \ud1b5\uc2e0 \uc2e4\ud328. \uc7a0\uc2dc\ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4\ud574\uc8fc\uc138\uc694.");case 17:case"end":return r.stop()}}),r,null,[[2,14]])})));return function(e){return r.apply(this,arguments)}}();(0,i.useEffect)((function(){H()}),[]);var B=function(){var e=(0,s.Z)((0,n.Z)().mark((function e(r){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y(r.inquiryId);case 2:return e.next=4,L(!S);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),G=function(){var e=(0,s.Z)((0,n.Z)().mark((function e(){var r,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=g.inquiryId,a=g.inquiryReplyId,r){e.next=3;break}return e.abrupt("return",alert("\ubc88\ud638\ub97c \ucc3e\uc744 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4."));case 3:if(q){e.next=5;break}return e.abrupt("return",alert("\ub2f5\ubcc0\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694."));case 5:if(!(q.replace(/<[^>]*>?|/g,"").length>450)){e.next=7;break}return e.abrupt("return",alert("\ub2f5\ubcc0 \uae00\uc790 \uc218\ub97c \ucd08\uacfc\ud588\uc2b5\ub2c8\ub2e4."));case 7:if(!window.confirm("\uc800\uc7a5 \ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")){e.next=19;break}if(!a){e.next=13;break}return e.next=11,Q(a,q);case 11:e.next=15;break;case 13:return e.next=15,F(r,q);case 15:return e.next=17,H();case 17:T(!0),M(!1);case 19:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,y.jsxs)(u.rb,{children:[(0,y.jsx)(h.Z,{title:"1 : 1 \ubb38\uc758 \uad00\ub9ac"}),(0,y.jsx)(u.b7,{xs:12,children:(0,y.jsx)(u.xH,{className:"mb-4",children:(0,y.jsx)(u.sl,{children:(0,y.jsx)(d.Z,{items:p,onClick:B,columns:v.Tv,className:"userList",datePickerHidden:!1})})})}),(0,y.jsx)(f,{visible:S,setVisible:L,value:g,onCreate:G,onChange:function(e){var r=e.target,a=r.id,n=r.value;j((0,t.Z)((0,t.Z)({},g),{},(0,l.Z)({},a,n)))},onDelete:z,inquiryReplyContent:q,setInquiryReplyContent:C,isReadOnly:A,setIsReadOnly:T,isUpdate:U,setIsUpdate:M})]})}},46819:function(e,r,a){a.d(r,{Po:function(){return c},Tv:function(){return o},W_:function(){return u},_y:function(){return b},g1:function(){return n},kg:function(){return s},lJ:function(){return i},t5:function(){return p},vb:function(){return m},xL:function(){return d}});var l=a(78983),t=a(80184),n=[{key:"userId",label:"No",sorter:!1,filter:!1,_props:{className:"no"}},{key:"name",label:"\uc774\ub984",_props:{className:"name"}},{key:"email",label:"\uc774\uba54\uc77c",_props:{className:"email"}},{key:"phoneNumber",label:"\ud734\ub300\uc804\ud654\ubc88\ud638",_props:{className:"phoneNumber"}},{key:"createdAt",label:"\ucd5c\ucd08\ub4f1\ub85d\uc77c",sorter:!1,filter:!1,_props:{className:"createdAt"}},{key:"status",label:"\uc0c1\ud0dc",sorter:!1,filter:!1,_props:{className:"status"}}],s=[{key:"userId",label:"No",sorter:!1,filter:!1,_props:{className:"no"}},{key:"name",label:"\uc774\ub984",_props:{className:"name"}},{key:"email",label:"\uc774\uba54\uc77c",_props:{className:"email"}},{key:"phoneNumber",label:"\ud734\ub300\uc804\ud654\ubc88\ud638",_props:{className:"phoneNumber"}},{key:"resignReason",label:"\ud0c8\ud1f4\uc0ac\uc720",_props:{className:"resignReason"}},{key:"createdAt",label:"\ucd5c\ucd08\ub4f1\ub85d\uc77c",sorter:!1,filter:!1,_props:{className:"createdAt"}},{key:"updatedAt",label:"\uacc4\uc815\ud0c8\ud1f4\uc77c",sorter:!1,filter:!1,_props:{className:"updatedAt"}},{key:"status",label:"\uc0c1\ud0dc",sorter:!1,filter:!1,_props:{className:"status"}}],o=[{key:"inquiryId",label:"No",sorter:!1,filter:!1,_props:{className:"no"}},{key:"category",label:"\uce74\ud14c\uace0\ub9ac",_props:{className:"category"}},{key:"title",label:"\uc81c\ubaa9",_props:{className:"title"}},{key:"name",label:"\uc774\ub984",_props:{className:"name"}},{key:"phoneNumber",label:"\ud734\ub300\uc804\ud654\ubc88\ud638",_props:{className:"phoneNumber"}},{key:"reply",label:"\ub2f5\ubcc0",sorter:!1,filter:!1,_props:{className:"reply"}}],i=[{key:"faqId",label:"No",sorter:!1,filter:!1,_props:{className:"no"}},{key:"category",label:"\uce74\ud14c\uace0\ub9ac",_props:{className:"category"}},{key:"title",label:"\uc81c\ubaa9",_props:{className:"title"}}],c=[{key:"dataRoomId",label:"No",sorter:!1,filter:!1,_props:{className:"no"}},{key:"category",label:"\uce74\ud14c\uace0\ub9ac",_props:{className:"category"}},{key:"title",label:"\uc81c\ubaa9",_props:{className:"title"}},{key:"createdAt",label:"\uc791\uc131\uc77c",sorter:!1,filter:!1,_props:{className:"createdAt"}}],u=[{key:"orderId",label:"No",sorter:!1,filter:!1,_props:{className:"no"}},{key:"orderNumber",label:"\uc8fc\ubb38\ubc88\ud638",sorter:!1,_props:{className:"orderNumber"}},{key:"receiver",label:"\uc218\ucde8\uc778",sorter:!1,_props:{className:"receiver"}},{key:"phoneNumber",label:"\ud734\ub300\uc804\ud654\ubc88\ud638",sorter:!1,_props:{className:"phoneNumber"}},{key:"totalPrice",label:"\uc8fc\ubb38\ucd1d\uc561",filter:!1,_props:{className:"totalPrice"}},{key:"orderDate",label:"\uc8fc\ubb38\uc77c",sorter:!1,filter:!1,_props:{className:"orderDate"}}],d=[{key:"radioButton",label:"",sorter:!1,filter:!1,_props:{className:"radioButton"}},{key:"itemName",label:"\uc81c\ud488\uba85",sorter:!1,filter:!1,_props:{className:"itemName"}},{key:"orderItemCount",sorter:!1,filter:!1,label:"\uc81c\ud488\uc218\ub7c9",_props:{className:"orderItemCount"}},{key:"orderItemPrice",sorter:!1,filter:!1,label:"\uc81c\ud488\uac00\uaca9",_props:{className:"orderItemPrice"}},{key:"orderStatus",label:"\uc81c\ud488\uc0c1\ud0dc",sorter:!1,filter:!1,_props:{className:"orderStatus"}},{key:"invoiceNumber",sorter:!1,filter:!1,label:"\uc1a1\uc7a5\ubc88\ud638",_props:{className:"invoiceNumber"}}],p=[{key:"orderCancelId",label:"No",sorter:!1,filter:!1,_props:{className:"no"}},{key:"orderNumber",label:"\uc8fc\ubb38\ubc88\ud638",sorter:!1,_props:{className:"orderNumber"}},{key:"itemName",label:"\uc81c\ud488\uba85",sorter:!1,_props:{className:"itemName"}},{key:"receiver",label:"\uc218\ucde8\uc778",sorter:!1,_props:{className:"receiver"}},{key:"cancelPrice",label:"\ucde8\uc18c\uae08\uc561",filter:!1,_props:{className:"cancelPrice"}},{key:"cancelDate",label:"\ucde8\uc18c \uc694\uccad\uc77c",sorter:!1,filter:!1,_props:{className:"cancelDate"}},{key:"orderStatus",label:"\uc8fc\ubb38\uc0c1\ud0dc",sorter:!1,filter:function(){return(0,t.jsxs)(l.LX,{size:"sm",children:[(0,t.jsx)("option",{children:"\uc8fc\ubb38\uc0c1\ud0dc \uc120\ud0dd"}),(0,t.jsx)("option",{value:"\uacb0\uc81c \ub300\uae30",children:"\uacb0\uc81c \ub300\uae30"}),(0,t.jsx)("option",{value:"\uacb0\uc81c \uc644\ub8cc",children:"\uacb0\uc81c \uc644\ub8cc"}),(0,t.jsx)("option",{value:"\ubc30\uc1a1 \uc900\ube44\uc911",children:"\ubc30\uc1a1 \uc900\ube44\uc911"}),(0,t.jsx)("option",{value:"\ubc30\uc1a1\uc911",children:"\ubc30\uc1a1\uc911"}),(0,t.jsx)("option",{value:"\ubc30\uc1a1 \uc644\ub8cc",children:"\ubc30\uc1a1 \uc644\ub8cc"}),(0,t.jsx)("option",{value:"\ucde8\uc18c \ucc98\ub9ac\uc911",children:"\ucde8\uc18c \ucc98\ub9ac\uc911"}),(0,t.jsx)("option",{value:"\ucde8\uc18c \uc644\ub8cc",children:"\ucde8\uc18c \uc644\ub8cc"})]})},_props:{className:"orderStatus"}}],m=[{key:"orderExchangeId",label:"No",sorter:!1,filter:!1,_props:{className:"no"}},{key:"orderNumber",label:"\uc8fc\ubb38\ubc88\ud638",sorter:!1,_props:{className:"orderNumber"}},{key:"itemName",label:"\uc81c\ud488\uba85",sorter:!1,_props:{className:"itemName"}},{key:"receiver",label:"\uc218\ucde8\uc778",sorter:!1,_props:{className:"receiver"}},{key:"exchangePrice",label:"\uad50\ud658\uae08\uc561",filter:!1,_props:{className:"exchangePrice"}},{key:"exchangeDate",label:"\uad50\ud658 \uc694\uccad\uc77c",sorter:!1,filter:!1,_props:{className:"exchangeDate"}},{key:"orderStatus",label:"\uc8fc\ubb38\uc0c1\ud0dc",sorter:!1,_props:{className:"orderStatus"}}],b=[{key:"bannerId",label:"No",sorter:!1,filter:!1,_props:{className:"no"}},{key:"title",label:"\ubc30\ub108 \ud0c0\uc774\ud2c0",sorter:!1,_props:{className:"title"}},{key:"image",label:"\uc774\ubbf8\uc9c0",sorter:!1,filter:!1,_props:{className:"image"}}]}}]);
//# sourceMappingURL=1981.7b67704f.chunk.js.map