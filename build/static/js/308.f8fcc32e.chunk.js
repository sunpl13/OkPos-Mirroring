(self.webpackChunkneordinary_template_react_js_admin=self.webpackChunkneordinary_template_react_js_admin||[]).push([[308],{20961:function(e,n,a){"use strict";var t,r=a(30168),o=a(91191),l=a(80184);n.Z=function(e){var n=e.title;return(0,l.jsx)(i,{children:(0,l.jsx)("h1",{children:n})})};var i=o.ZP.div(t||(t=(0,r.Z)(["\n  border-bottom: 1px solid #ccc;\n  margin-bottom: 40px;\n  margin-top: 20px;\n"])))},79528:function(e,n,a){"use strict";var t,r=a(30168),o=a(78983),l=a(91191),i=a(76030),s=a(80184);n.Z=function(e){var n=e.id,a=e.files,t=e.label,r=e.isRequired;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.L8,{htmlFor:"".concat(n,"Static"),className:"col-sm-2 col-form-label",children:(0,s.jsx)("span",{className:r?"required":"",children:t||" * "})}),(0,s.jsx)(o.b7,{children:(null===a||void 0===a?void 0:a.length)>0?a.map((function(e,n){var a=e.split("/"),t=a[a.length-1];return(0,s.jsx)("div",{className:"col-form-label",children:(0,s.jsxs)(c,{role:"link",href:(0,i.J0)(e),onClick:function(){return function(e,n){e=(0,i.J0)(e),fetch(e,{method:"GET"}).then((function(e){return e.blob()})).then((function(e){var a=window.URL.createObjectURL(e),t=document.createElement("a");t.href=a,t.download=n,document.body.appendChild(t),t.click(),setTimeout((function(e){window.URL.revokeObjectURL(a)}),6e4),t.remove()})).catch((function(e){console.error("err: ",e)}))}(e,t)},children:[n+1,". ",t]},n)},n)})):(0,s.jsx)("div",{className:"col-form-label",children:"\ub4f1\ub85d\ub41c \ud30c\uc77c\uc774 \uc5c6\uc2b5\ub2c8\ub2e4."})})]})};var c=l.ZP.span(t||(t=(0,r.Z)(["\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  padding: 0 8px;\n  line-height: 1.5714285714285714;\n  flex: auto;\n  transition: all 0.3s;\n  color: #1677ff !important;\n  text-decoration: none;\n  background-color: transparent;\n  outline: none;\n  cursor: pointer;\n"])))},84336:function(e,n,a){"use strict";var t=a(78983),r=(a(72791),a(80184));n.Z=function(e){var n=e.id,a=e.value,o=e.rows,l=e.label,i=e.onChange,s=e.text,c=e.readOnly,u=e.disabled;return(0,r.jsx)(t.b7,{children:(0,r.jsx)(t.PB,{id:n||"",label:l||"",rows:o||10,value:a||"",onChange:i,text:s||"",readOnly:c,disabled:u})})}},96672:function(e,n,a){"use strict";a.d(n,{Z:function(){return c},w:function(){return s}});var t=a(29439),r=a(15671),o=a(43144),l=a(61044),i=a(46327),s={GET:"get",POST:"post",PUT:"put",PATCH:"patch"},c=function(){function e(){(0,r.Z)(this,e)}return(0,o.Z)(e,null,[{key:"request",value:function(e){var n=e.data,a=e.query,r=e.path,o=e.method,c=e.url;try{if((0,i.xb)(o)||(0,i.xb)(c))return void alert("HTTP Method \uc640 URL \uc744 \ud655\uc778\ud574\uc8fc\uc138\uc694.");if(r)for(var u=0,m=Object.entries(r);u<m.length;u++){var d=(0,t.Z)(m[u],2),E=d[0],_=d[1];c=c.replace(":".concat(E),_)}(0,i.xb)(a)||(c+="?"+Object.keys(a).map((function(e){return e+"="+a[e]})).join("&"));var T={accept:"application/json","Content-Type":"application/json","X-Access-Token":window.sessionStorage.getItem("jwt")};switch(o){case s.GET:return l.ZP.get(c,{headers:T});case s.POST:return l.ZP.post(c,n,{headers:T});case s.PATCH:return l.ZP.patch(c,n,{headers:T});case s.PUT:return l.ZP.put(c,n,{headers:T})}}catch(A){alert(A.message)}}}]),e}()},19311:function(e,n,a){"use strict";a.d(n,{l:function(){return s}});var t,r,o,l=a(4942),i="http://13.209.93.181",s={GET_V1_TEST_AUTO_LOGIN:"".concat(i,"/test/v1/jwt/check/:isManual"),POST_LOGIN:"".concat(i,"/admin/login"),POST_TEST_V1_REGISTER:"".concat(i,"/test/v1/register"),RECRUITMENT:"".concat(i,"/admin/recruitment"),TALENTPOOL:"".concat(i,"/admin/talent-pool"),EDITOR:"".concat(i,"/admin/editor"),HOME_INQUIRY:"".concat(i,"/admin/inquiry"),ENGLISH_HOME_INQUIRY:"".concat(i,"/admin/english/inquiry"),NOTICE:"".concat(i,"/admin/notice"),DATA_ROOM:"".concat(i,"/admin/english/data-room"),HOME_BANNER:"".concat(i,"/admin/banner"),ENGLISH_BANNER:"".concat(i,"/admin/english/banner"),GET_PARTNER_USERS:"".concat(i,"/admin/partner/users"),GET_PARTNER_INACTIVE_USERS:"".concat(i,"/admin/partner/users/inactive"),GET_PARTNER_INQUIRIES:"".concat(i,"/admin/partner/inquiries"),GET_PARTNER_NOTICES:"".concat(i,"/admin/partner/notices"),GET_PARTNER_AGENCYAPPLICANT:"".concat(i,"/admin/partner/notices/agencyApplicant"),GET_PARTNER_DATAROOMS:"".concat(i,"/admin/partner/dataRooms"),GET_PARTNER_ORDERS:"".concat(i,"/admin/partner/orders"),GET_PARTNER_MAINTENANCES:"".concat(i,"/admin/partner/maintenances"),GET_PARTNER_SCHEDULES:"".concat(i,"/admin/partner/educations/schedules"),GET_PARTNER_REGISTRAUINS:"".concat(i,"/admin/partner/educations/registrations"),GET_MALL_USERS:"".concat(i,"/admin/mall/users"),GET_MALL_USER:"".concat(i,"/admin/mall/users/:userId"),GET_MALL_RESIGNUSERS:"".concat(i,"/admin/mall/users/resign"),GET_MALL_RESIGNUSER:"".concat(i,"/admin/mall/users/resign/:userId"),GET_MALL_INQUIRIES:"".concat(i,"/admin/mall/inquiries"),GET_MALL_INQUIRY:"".concat(i,"/admin/mall/inquiries/:inquiryId"),POST_MALL_INQUIRY_REPLY:"".concat(i,"/admin/mall/inquiryReplies"),PATCH_MALL_UPDATE_INQUIRY_REPLY:"".concat(i,"/admin/mall/inquiryReplies/:inquiryReplyId"),PATCH_MALL_DELETE_INQUIRY:"".concat(i,"/admin/mall/inquiries/:inquiryId/status"),GET_MALL_FAQS:"".concat(i,"/admin/mall/faqs"),GET_MALL_FAQ:"".concat(i,"/admin/mall/faqs/:faqId"),POST_MALL_FAQ:"".concat(i,"/admin/mall/faqs"),PATCH_MALL_UPDATE_FAQ:"".concat(i,"/admin/mall/faqs/:faqId"),PATCH_MALL_DELETE_FAQ:"".concat(i,"/admin/mall/faqs/:faqId/status"),GET_MALL_DATAROOMS:"".concat(i,"/admin/mall/datarooms"),GET_MALL_DATAROOM:"".concat(i,"/admin/mall/datarooms/:dataRoomId"),POST_MALL_DATAROOM:"".concat(i,"/admin/mall/datarooms"),PATCH_MALL_UPDATE_DATAROOM:"".concat(i,"/admin/mall/datarooms/:dataRoomId"),PATCH_MALL_DELETE_DATAROOM:"".concat(i,"/admin/mall/datarooms/:dataRoomId/status"),GET_MALL_BANNERS:"".concat(i,"/admin/mall/banners"),GET_MALL_BANNER:"".concat(i,"/admin/mall/banners/:bannerId"),POST_MALL_BANNER:"".concat(i,"/admin/mall/banners"),PATCH_MALL_UPDATE_BANNER:"".concat(i,"/admin/mall/banners"),PATCH_MALL_DELETE_BANNER:"".concat(i,"/admin/mall/banners/:bannerId"),GET_MALL_ORDERS:"".concat(i,"/admin/mall/orders"),GET_MALL_CANCEL_ORDERS:"".concat(i,"/admin/mall/orders/cancel"),GET_MALL_EXCHANGE_ORDERS:"".concat(i,"/admin/mall/orders/exchange"),PATCH_MALL_ORDERS_STATUS:"".concat(i,"/admin/mall/orders/:orderItemId"),POST_REGISTER:"".concat(i,"/admin/join")};t={},(0,l.Z)(t,s.GET_V1_TEST_AUTO_LOGIN,{}),(0,l.Z)(t,s.GET_MALL_USERS,{}),(0,l.Z)(t,s.GET_MALL_USER,{}),(0,l.Z)(t,s.GET_MALL_RESIGNUSERS,{}),(0,l.Z)(t,s.GET_MALL_RESIGNUSER,{}),(0,l.Z)(t,s.GET_MALL_INQUIRIES,{}),(0,l.Z)(t,s.GET_MALL_INQUIRY,{}),(0,l.Z)(t,s.GET_MALL_FAQS,{}),(0,l.Z)(t,s.GET_MALL_FAQ,{}),(0,l.Z)(t,s.GET_MALL_DATAROOMS,{}),(0,l.Z)(t,s.GET_MALL_DATAROOM,{}),(0,l.Z)(t,s.GET_MALL_BANNERS,{}),(0,l.Z)(t,s.GET_MALL_BANNER,{}),(0,l.Z)(t,s.GET_MALL_ORDERS,{}),(0,l.Z)(t,s.GET_MALL_CANCEL_ORDERS,{}),(0,l.Z)(t,s.GET_MALL_EXCHANGE_ORDERS,{}),(0,l.Z)(t,s.GET_PARTNER_USERS,{}),(0,l.Z)(t,s.GET_PARTNER_INACTIVE_USERS,{}),(0,l.Z)(t,s.GET_PARTNER_INQUIRIES,{}),(0,l.Z)(t,s.GET_PARTNER_NOTICES,{}),(0,l.Z)(t,s.GET_PARTNER_AGENCYAPPLICANT,{}),(0,l.Z)(t,s.GET_PARTNER_ORDERS,{}),(0,l.Z)(t,s.GET_PARTNER_MAINTENANCES,{}),(0,l.Z)(t,s.GET_PARTNER_SCHEDULES,{}),(0,l.Z)(t,s.GET_PARTNER_REGISTRAUINS,{}),r={},(0,l.Z)(r,s.POST_LOGIN,{}),(0,l.Z)(r,s.POST_REGISTER,{}),(0,l.Z)(r,s.POST_MALL_INQUIRY_REPLY,{}),(0,l.Z)(r,s.POST_MALL_FAQ,{}),(0,l.Z)(r,s.POST_MALL_DATAROOM,{}),(0,l.Z)(r,s.POST_MALL_BANNER,{}),o={},(0,l.Z)(o,s.PATCH_MALL_UPDATE_INQUIRY_REPLY,{}),(0,l.Z)(o,s.PATCH_MALL_DELETE_INQUIRY,{}),(0,l.Z)(o,s.PATCH_MALL_UPDATE_FAQ,{}),(0,l.Z)(o,s.PATCH_MALL_DELETE_FAQ,{}),(0,l.Z)(o,s.PATCH_MALL_UPDATE_DATAROOM,{}),(0,l.Z)(o,s.PATCH_MALL_DELETE_DATAROOM,{}),(0,l.Z)(o,s.PATCH_MALL_UPDATE_BANNER,{}),(0,l.Z)(o,s.PATCH_MALL_DELETE_BANNER,{}),(0,l.Z)(o,s.PATCH_MALL_ORDERS_STATUS,{})},20308:function(e,n,a){"use strict";a.r(n),a.d(n,{default:function(){return x}});var t=a(4942),r=a(1413),o=a(74165),l=a(15861),i=a(29439),s=a(72791),c=a(20961),u=(a(26273),a(78983)),m=[{key:"number",label:"No",_props:{color:"primary",className:"number"}},{key:"name",label:"\uc774\ub984",_props:{color:"primary",className:"name"}},{key:"phoneNumber",label:"\ud734\ub300\uc804\ud654\ubc88\ud638",_props:{color:"primary",className:"phoneNumber"}},{key:"email",label:"\uc774\uba54\uc77c",_props:{color:"primary",className:"email"}},{key:"positionKorean",label:"\uc9c0\uc6d0 \ud3ec\uc9c0\uc158",_props:{color:"primary",className:"position"}}],d=a(55740),E=a(3854),_=a(93230),T=a(3460),A=a(99921),N=a(41085),p=a(79528),L=a(84336),R=a(80184),h=function(e){var n=e.value,a=e.visible,t=e.setVisible,r=e.onChange,o=e.isReadOnly,l=e.setIsReadOnly,c=(0,s.useState)(!1),m=(0,i.Z)(c,2),h=m[0],S=m[1],b=(0,s.useState)(!1),P=(0,i.Z)(b,2),v=P[0],O=P[1];return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsxs)(u.Tk,{alignment:"center",size:"xl",visible:a,children:[(0,R.jsx)(u.p0,{children:(0,R.jsx)(u.fl,{children:"\uc778\uc7ac\ud480 \uc0c1\uc138"})}),(0,R.jsxs)(u.sD,{children:[(0,R.jsxs)(u.rb,{className:"mb-3",children:[(0,R.jsx)(E.Z,{onChange:r,id:"talentPoolId",placeholder:"talentPoolId",label:"ID",readOnly:!0,disabled:!0,value:-1===n.talentPoolId?"":n.talentPoolId}),(0,R.jsx)(E.Z,{onChange:r,id:"name",placeholder:"\uc774\ub984\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694",label:"\uc774\ub984",value:n.name,readOnly:o,disabled:o})]}),(0,R.jsxs)(u.rb,{className:"mb-3",children:[(0,R.jsx)(E.Z,{onChange:r,id:"number",placeholder:"phone number",label:"\uc804\ud654\ubc88\ud638",value:n.number,readOnly:o,disabled:o}),(0,R.jsx)(E.Z,{onChange:r,id:"phoneNumber",placeholder:"phone number",label:"\ud734\ub300 \uc804\ud654\ubc88\ud638",value:n.phoneNumber,readOnly:o,disabled:o})]}),(0,R.jsxs)(u.rb,{className:"mb-3",children:[(0,R.jsx)(d.Z,{readOnly:o,disabled:o,onChange:r,size:"sm",id:"positionEnglish",options:_.W,value:n.positionEnglish,placeholder:"\uc120\ud0dd\ud574\uc8fc\uc138\uc694",label:"\uc9c0\uc6d0 \ud3ec\uc9c0\uc158"}),(0,R.jsx)(N.Z,{readOnly:!1,label:"\ub4f1\ub85d\uc77c",id:"registeredAt",date:n.registeredAt,isDisabled:!0})]}),(0,R.jsx)(u.rb,{className:"mb-3",children:(0,R.jsx)(p.Z,{files:n.resume,id:"resume",label:"\uc774\ub825\uc11c"})}),(0,R.jsx)(u.rb,{className:"mb-3",children:(0,R.jsx)(p.Z,{files:n.portfolio,id:"portfolio",label:"\ud3ec\ud2b8\ud3f4\ub9ac\uc624"})}),(0,R.jsx)(u.rb,{className:"mb-3",children:(0,R.jsx)(p.Z,{files:n.otherDocument,id:"otherDocument",label:"\uae30\ud0c0 \ucd94\uac00\uc790\ub8cc"})}),(0,R.jsx)(L.Z,{id:"otherLink",label:"\ucd94\uac00 \ub9c1\ud06c \uc790\ub8cc",value:n.otherLink,readOnly:o,disabled:o})]}),(0,R.jsx)(u.Ym,{children:(0,R.jsx)(u.u5,{color:"primary",onClick:function(){o||-1===n.No?(t(!1),l(!0)):O(!0)},children:"Cancel"})})]}),(0,R.jsx)(A.Z,{onDelete:function(){return S(!1)},visible:h,setVisible:S}),(0,R.jsx)(T.Z,{onClick:function(){O(!1),t(!1),l(!0)},visible:v,setVisible:O})]})},S=a(73210),b=a(96672),P=a(19311),v=a(93433),O=a(1966),f=[{key:"SERVICE_PLANNING",value:"\uc11c\ube44\uc2a4 \uae30\ud68d"},{key:"SERVICE_DEVELOPMENT",value:"\uc11c\ube44\uc2a4 \uac1c\ubc1c"},{key:"DESIGN",value:"\ub514\uc790\uc778"},{key:"BUSINESS_DEVELOPMENT",value:"\uc0ac\uc5c5 \uac1c\ubc1c"},{key:"B2B_DEVELOPMENT",value:"B2B \uac1c\ubc1c"},{key:"B2B_OPERATION",value:"B2B \uc6b4\uc601 "},{key:"CORPORATE_SALES",value:"\ubc95\uc778 \uc601\uc5c5"},{key:"CHANNEL_SALES",value:"\ucc44\ub110 \uc601\uc5c5"},{key:"DEVICE_SALES",value:"\ub514\ubc14\uc774\uc2a4 \uc601\uc5c5"},{key:"DEVICE_DEVELOPMENT",value:"\ub514\ubc14\uc774\uc2a4 \uac1c\ubc1c"},{key:"OEM_MANAGEMENT",value:"OEM \uad00\ub9ac"},{key:"AS_CENTER",value:"A/S \uc13c\ud130"},{key:"BUSINESS_MANAGEMENT",value:"\uacbd\uc601 \uad00\ub9ac"},{key:"SETTLEMENT",value:"\uc815\uc0b0"},{key:"OPERATION_PLANNING",value:"\uc6b4\uc601 \uae30\ud68d"},{key:"CUSTOMER_SUPPORT",value:"\uace0\uac1d \uc9c0\uc6d0"},{key:"INTEGRATED_CS",value:"\ud1b5\ud569 CS "},{key:"ONSITE_SUPPORT_TECHNICAL_SUPPORT",value:"\ud604\uc7a5 \uc9c0\uc6d0-\uae30\uc220 \uc9c0\uc6d0"},{key:"ONSITE_SUPPORT_LOGISTICS",value:"\ud604\uc7a5 \uc9c0\uc6d0 - \ubb3c\ub958"},{key:"OPERATIONAL_INNOVATION_TF",value:"\uc6b4\uc601 \ud601\uc2e0 TF"}],I=function(e){var n=e.items,a=e.onClick,t=e.columns,o=e.className,l=e.checkBoxInputHidden,c=void 0!==l&&l,m=e.select,d=e.setSelect,E=(0,s.useState)([]),_=(0,i.Z)(E,2),T=_[0],A=_[1],N=(0,s.useState)(""),p=(0,i.Z)(N,2),L=p[0],h=p[1],S=(0,s.useState)(!1),b=(0,i.Z)(S,2),P=b[0],I=b[1],x={key:"checkBox",label:(0,R.jsx)(u.EC,{id:"allSelected",type:"checkbox",onChange:function(e){return I(!P),void A(T.map((function(e){return(0,r.Z)((0,r.Z)({},e),{},{checked:!P})})))},checked:P}),_props:{className:"checkBox"},sorter:!1,filter:!1},Z=f.map((function(e){return(0,R.jsx)("option",{value:e.key,children:e.value},e.key)}));(0,s.useEffect)((function(){A(n),t&&h("\uc774\ub984")}),[n]);return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsxs)(u.rb,{className:"justify-content-end",children:[(0,R.jsx)(u.b7,{xs:3,children:(0,R.jsxs)(u.LX,{value:m,onChange:function(e){return d(e.target.value)},children:[(0,R.jsx)("option",{children:"\uc120\ud0dd\ud574\uc8fc\uc138\uc694"}),Z]})}),(0,R.jsx)(u.b7,{xs:4,children:(0,R.jsxs)(u.YR,{children:[(0,R.jsxs)(u.w5,{alignment:"end",variant:"input-group",children:[(0,R.jsx)(u.SQ,{color:"secondary",variant:"outline",split:!0,children:L}),(0,R.jsx)(u.jO,{"aria-label":"Text input with segmented dropdown button"}),(0,R.jsx)(u.$H,{children:["\uc774\ub984","\uc774\uba54\uc77c"].map((function(e){return(0,R.jsx)(u.$f,{onClick:function(){return function(e){h(e)}(e)},children:e},e)}))})]}),(0,R.jsx)(u.u5,{type:"button",color:"secondary",variant:"outline",onClick:function(){console.log("test")},children:"\uac80\uc0c9"})]})})]}),(0,R.jsx)("br",{}),(0,R.jsx)(O.u,{items:T,columns:c?[x].concat((0,v.Z)(t)):t||null,activePage:1,columnSorter:!0,pagination:!0,clickableRows:!0,tableHeadProps:{color:"primary"},onRowClick:a,tableProps:{hover:!0,responsive:!0,striped:!0,align:"middle",className:o},noItemsLabel:"\ub370\uc774\ud130\uac00 \uc5c6\uc2b5\ub2c8\ub2e4.",itemsPerPage:20})]})},x=function(){var e=(0,s.useState)([]),n=(0,i.Z)(e,2),a=n[0],d=n[1],E=(0,s.useState)(!1),_=(0,i.Z)(E,2),T=_[0],A=_[1],N=(0,s.useState)(!0),p=(0,i.Z)(N,2),L=p[0],v=p[1],O=(0,s.useState)(""),f=(0,i.Z)(O,2),x=f[0],Z=f[1],C=(0,s.useState)({talentPoolId:-1,number:"",name:"",email:"",phoneNumber:"",position:"",registeredAt:new Date,portfolio:[],otherDocument:[],otherLink:"",resume:[]}),M=(0,i.Z)(C,2),j=M[0],G=M[1],y=function(){var e=(0,l.Z)((0,o.Z)().mark((function e(){var n;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.Z.request({data:{},query:{},path:{},method:b.w.GET,url:P.l.TALENTPOOL});case 3:n=e.sent,d(null===n||void 0===n?void 0:n.data.result.responses),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),alert(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=(0,l.Z)((0,o.Z)().mark((function e(n){var a,t;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.Z.request({data:{},query:{},path:{id:n},method:b.w.GET,url:"".concat(P.l.TALENTPOOL,"/:id")});case 3:a=e.sent,t=a.data,G(t.result),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),alert(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}();(0,s.useEffect)((function(){y()}),[]);var g=function(){var e=(0,l.Z)((0,o.Z)().mark((function e(n){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:k(n.talentPoolId),A(!T);case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,R.jsxs)("main",{children:[(0,R.jsx)(c.Z,{title:"\uc778\uc7ac\ud480 \uad00\ub9ac"}),(0,R.jsx)(u.rb,{children:(0,R.jsx)(u.b7,{xs:12,children:(0,R.jsxs)(u.xH,{className:"mb-4",children:[(0,R.jsx)(u.bn,{children:(0,R.jsxs)(u.lx,{className:"row g-3",children:[(0,R.jsx)(u.b7,{xs:1,children:(0,R.jsx)(u.u5,{color:"primary",onClick:y,children:"\uc870\ud68c\ud558\uae30"})}),(0,R.jsx)(u.b7,{xs:1,children:(0,R.jsx)(u.u5,{color:"primary",onClick:function(){v(!1),G({talentPoolId:-1,number:"",name:"",email:"",phoneNumber:"",position:"",registeredAt:new Date,portfolio:[],otherDocument:[],otherLink:"",resume:[]}),A(!T)},children:"\ucd94\uac00"})})]})}),(0,R.jsx)(u.sl,{children:(0,R.jsx)(I,{items:a,onClick:g,columns:m,selectedOptions:S.W,className:"talentPoolList",datePickerHidden:!1})})]})})}),(0,R.jsx)(h,{onChange:function(e){var n=e.target,a=n.id,o=n.value;G((0,r.Z)((0,r.Z)({},j),{},(0,t.Z)({},a,o)))},visible:T,value:j,setVisible:A,isReadOnly:L,setIsReadOnly:v,select:x,setSelect:Z})]})}},26273:function(e,n){n.B6=[{value:"test",label:"\ud14c\uc2a4\ud2b8"},{value:"test1",label:"\ud14c\uc2a4\ud2b81"},{value:"test2",label:"\ud14c\uc2a4\ud2b82"}],n.rm=[{id:1,smallColumn:"1",normalColumn:"1",largeColumn:"1"},{id:2,smallColumn:"2",normalColumn:"2",largeColumn:"2"},{id:3,smallColumn:"3",normalColumn:"3",largeColumn:"3"}],n.F9=[{key:"id",label:"ID",_props:{className:"small"}},{key:"smallColumn",label:"\uc2a4\ubab0 \uc0ac\uc774\uc988",_props:{className:"small"}},{key:"normalColumn",label:"\ub178\ub9d0 \uc0ac\uc774\uc988"},{key:"largeColumn",label:"\ub77c\uc9c0 \uc0ac\uc774\uc988",_props:{className:"large"}}],n.Os=[{No:0,name:"\ud14c\uc2a4\ud1301",email:"test01@naver.com",pNum:"010-1234-0001",position:"a"},{No:1,name:"\ud14c\uc2a4\ud1302",email:"test02@naver.com",pNum:"010-1234-0002",position:"b"},{No:2,name:"\ud14c\uc2a4\ud1303",email:"test03@naver.com",pNum:"010-1234-0003",position:"c"},{No:3,name:"\ud14c\uc2a4\ud1304",email:"test04@naver.com",pNum:"010-1234-0004",position:"d"},{No:4,name:"\ud14c\uc2a4\ud1305",email:"test05@naver.com",pNum:"010-1234-0005",position:"e"},{No:5,name:"\ud14c\uc2a4\ud1306",email:"test06@naver.com",pNum:"010-1234-0006",position:"b"},{No:6,name:"\ud14c\uc2a4\ud1307",email:"test07@naver.com",pNum:"010-1234-0007",position:"f"},{No:7,name:"\ud14c\uc2a4\ud1308",email:"test08@naver.com",pNum:"010-1234-0008",position:"g"},{No:8,name:"\ud14c\uc2a4\ud1309",email:"test09@naver.com",pNum:"010-1234-0009",position:"h"},{No:9,name:"\ud14c\uc2a4\ud13010",email:"test10@naver.com",pNum:"010-1234-0001",position:"i"},{No:10,name:"\ud14c\uc2a4\ud13011",email:"test11@naver.com",pNum:"010-1234-0011",position:"j"},{No:11,name:"\ud14c\uc2a4\ud13012",email:"test12@naver.com",pNum:"010-1234-0012",position:"k"}]},76030:function(e,n,a){"use strict";a.d(n,{AA:function(){return r},DK:function(){return l},HU:function(){return t},J0:function(){return o}});var t=function(e){return e.map((function(e){return e.url.split(".com/")[1]}))},r=function(e){return"".concat("homepage-test-resource","/admin/images/").concat(e)},o=function(e){return"https://".concat("homepage-test-resource",".s3.").concat("ap-northeast-2",".amazonaws.com/").concat(e)},l=function(e){return"".concat("homepage-test-resource","/admin/files/").concat(e)}}}]);
//# sourceMappingURL=308.f8fcc32e.chunk.js.map