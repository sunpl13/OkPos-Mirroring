"use strict";(self.webpackChunkneordinary_template_react_js_admin=self.webpackChunkneordinary_template_react_js_admin||[]).push([[4783],{20961:function(n,t,e){var a,r=e(30168),c=e(91191),i=e(80184);t.Z=function(n){var t=n.title;return(0,i.jsx)(o,{children:(0,i.jsx)("h1",{children:t})})};var o=c.ZP.div(a||(a=(0,r.Z)(["\n  border-bottom: 1px solid #ccc;\n  margin-bottom: 40px;\n  margin-top: 20px;\n"])))},19977:function(n,t,e){e.d(t,{Z:function(){return S}});var a,r=e(93433),c=(e(74165),e(15861),e(1413)),i=e(29439),o=e(72791),s=e(1966),d=e(78983),u=e(76030),l=e(80184),_=function(n){var t=n.visible,e=n.setVisible,a=n.url,r=(0,o.useState)(""),c=(0,i.Z)(r,2);c[0],c[1];return(0,l.jsxs)(d.Tk,{alignment:"center",size:"xl",visible:t,onClose:function(){return e(!1)},children:[(0,l.jsx)(d.sD,{className:"clearfix",children:(0,l.jsx)(d.DW,{align:"center",fluid:!0,src:(0,u.J0)(a),alt:"\uc548\ub155\ud558\uc138\uc694",width:600})}),(0,l.jsx)(d.Ym,{children:(0,l.jsx)(d.u5,{color:"primary",onClick:function(){return e(!1)},children:"Cancel"})})]})},E=e(30168),A=e(71666),T=e(91e3),m=e(72312),L=e(6793),R=(e(65713),e(72426)),h=e.n(R),f=(e(88015),e(91191)),M=function(n){var t=n.setStartDate,e=n.setEndDate,a=A.Z.RangePicker;h().locale("ko");return(0,l.jsx)(N,{children:(0,l.jsx)(T.ZP,{locale:L.Z,children:(0,l.jsx)(m.Z,{direction:"vertical",children:(0,l.jsx)(a,{allowClear:!0,onChange:function(n){n?(t(h()(n[0]._d).format("YYYY-MM-DD")),e(h()(n[1]._d).format("YYYY-MM-DD"))):(t(""),e(""))}})})})})},N=(0,f.ZP)(d.b7)(a||(a=(0,E.Z)(["\n  display: flex;\n  flex-direction: row;\n  align-content: end;\n  justify-content: end;\n  height: 100%;\n  width: 100%;\n  & div {\n    height: 100%;\n  }\n  & .ant-space-item {\n    width: 100%;\n  }\n  & .ant-picker {\n    border-radius: 0.375rem;\n    border: solid 1px #9da5b1;\n  }\n  & .ant-space-item {\n    width: 100%;\n    & > div {\n      width: 100%;\n    }\n  }\n  & .ant-space.ant-space-vertical {\n    width: 100%;\n  }\n"]))),P=e(46327),S=function(n){var t=n.items,e=n.onClick,a=n.columns,E=n.className,A=n.onDelete,T=n.selectedOptions,m=n.datePickerHidden,L=void 0===m||m,R=(n.itemPerPageHidden,n.searchInputHidden,n.checkBoxInputHidden),f=void 0!==R&&R,N=n.func,S=(0,o.useState)([]),p=(0,i.Z)(S,2),I=p[0],D=p[1],Y=(0,o.useState)(),G=(0,i.Z)(Y,2),Z=G[0],x=G[1],C=(0,o.useState)(!1),j=(0,i.Z)(C,2),O=j[0],g=j[1],v=(0,o.useState)(""),H=(0,i.Z)(v,2),U=H[0],b=H[1],k=(0,o.useState)(""),y=(0,i.Z)(k,2),w=y[0],Q=y[1],q=(0,o.useState)(""),B=(0,i.Z)(q,2),F=B[0],V=B[1],W=(0,o.useState)({category:"",value:""}),z=(0,i.Z)(W,2),J=(z[0],z[1],(0,o.useState)(!1)),X=(0,i.Z)(J,2),K=X[0],$=X[1],nn={key:"checkBox",label:(0,l.jsx)(d.EC,{id:"allSelected",type:"checkbox",onChange:function(n){return $(!K),void D(I.map((function(n){return(0,c.Z)((0,c.Z)({},n),{},{checked:!K})})))},checked:K}),_props:{className:"checkBox"},sorter:!1,filter:!1},tn=function(n){switch(n){case"ACTIVE":return"success";case"INACTIVE":return"danger";case!0:return"success";case!1:return"danger";default:return"primary"}},en=function(n){switch(n){case"ACTIVE":return"\ud65c\uc131\ud654";case"INACTIVE":return"\ube44\ud65c\uc131\ud654";case!0:return"\uc644\ub8cc";case!1:return"\ubbf8\uc644\ub8cc";default:return"\uae30\ud0c0"}},an=function(n,t){n.stopPropagation(),g(!O),b(t)};return(0,o.useEffect)((function(){D(t)}),[t]),(0,o.useEffect)((function(){x(F?I.filter((function(n){return h()(n.createdAt,"YYYYMMDDHHmmss").format("YYYY-MM-DD")>=w&&h()(n.createdAt,"YYYYMMDDHHmmss").format("YYYY-MM-DD")<=F})):"")}),[F]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(d.rb,{className:"justify-content-end",children:L&&(0,l.jsx)(d.b7,{xs:4,children:(0,l.jsx)(M,{setStartDate:Q,setEndDate:V})})}),(0,l.jsx)("br",{}),(0,l.jsx)(s.u,{items:Z||I,columns:f?[nn].concat((0,r.Z)(a)):a||null,columnSorter:!0,pagination:!0,clickableRows:!0,columnFilter:!0,tableHeadProps:{color:"primary"},onRowClick:e,tableProps:{hover:!0,responsive:!0,striped:!0,align:"middle",className:E},scopedColumns:{checkBox:function(n){return(0,l.jsx)("td",{onClick:function(n){return n.stopPropagation()},children:(0,l.jsx)(d.EC,{onChange:function(){return function(n){D(I.map((function(t){return t._id===n._id?(0,c.Z)((0,c.Z)({},t),{},{checked:!n.checked}):t}))),n.checked?n.checked=!1:n.checked=!0,console.log(n)}(n)},checked:n.checked||!1})})},isAuthorized:function(n){return(0,l.jsx)("td",{onClick:function(n){return n.stopPropagation()},children:(0,l.jsx)(d.EC,{onChange:function(){return N(n)},checked:n.isAuthorized||!1})})},status:function(n){var t=n.status;return(0,l.jsx)("td",{children:(0,l.jsx)(d.C_,{color:tn(t),children:en(t)})})},reply:function(n){var t=n.reply;return(0,l.jsx)("td",{children:(0,l.jsx)(d.C_,{color:tn(t),children:en(t)})})},image:function(n){var t=n.image;return(0,l.jsx)("td",{children:(0,l.jsx)(d.DW,{rounded:!0,thumbnail:!0,src:t,alt:""})})},images:function(n){var t=n.images;return(0,l.jsx)("td",{onClick:function(n){return 0!==t.length?an(n,t):e},children:(0,l.jsx)(d.DW,{rounded:!0,src:0===t.length?"":t[0],alt:"",width:100,height:60})})},deleteBtn:function(n){return(0,l.jsx)("td",{onClick:function(t){return function(n,t){n.stopPropagation(),A(t)}(t,n)},children:(0,l.jsx)(d.C_,{color:"danger",children:"\uc0ad\uc81c"})})},jobType:function(n){var t=n.jobType;return(0,l.jsx)("td",{children:T?T[t]:""})},education:function(n){var t=n.education;return(0,l.jsx)("td",{children:T?T[t]:""})},inquiryType:function(n){var t=n.inquiryType;return(0,l.jsx)("td",{children:T?T[t]:""})},career:function(n){var t=n.career;return(0,l.jsx)("td",{children:T?T[t]:""})},proceed:function(n){var t=n.proceed;return(0,l.jsx)("td",{children:t?"\ucc44\uc6a9\uc911":"\ucc44\uc6a9 \ub9c8\uac10"})},deliveryStatus:function(n){var t=n.deliveryStatus;return(0,l.jsx)("td",{children:(0,l.jsxs)(d.C_,{color:"primary",children:[T?T[t]:"Not Data"," "]})})},productImg:function(n){var t=n.productImg;return(0,l.jsx)("td",{children:(0,l.jsx)(d.DW,{rounded:!0,src:t||"",alt:"",width:100,height:60})})},totalPrice:function(n){var t=n.totalPrice;return(0,l.jsx)("td",{className:"totalPrice",children:(0,P.ks)(t)})},startedAt:function(n){var t=n.startedAt;return(0,l.jsx)("td",{children:h()(t,"YYYYMMDDHHmmss").format("YYYY. MM. DD")})},closedAt:function(n){var t=n.closedAt;return(0,l.jsx)("td",{children:h()(t,"YYYYMMDDHHmmss").format("YYYY. MM. DD")})},createdAt:function(n){var t=n.createdAt;return(0,l.jsx)("td",{children:h()(t,"YYYYMMDDHHmmss").format("YYYY. MM. DD")})},deletedAt:function(n){var t=n.deletedAt;return(0,l.jsx)("td",{children:h()(t,"YYYYMMDDHHmmss").format("YYYY. MM. DD")})},updatedAt:function(n){var t=n.updatedAt;return(0,l.jsx)("td",{children:h()(t,"YYYYMMDDHHmmss").format("YYYY. MM. DD")})},noticeFiles:function(n){var t=n.noticeFiles;return(0,l.jsxs)("td",{children:[null===t||void 0===t?void 0:t.length," \uac1c"]})},imageUrls:function(n){var t=n.imageUrls;return(0,l.jsx)("td",{onClick:function(n){return 0!==t.length&&"."!==t[0]?an(n,t[0]):e},children:0===t.length||"."===t[0]?"":(0,l.jsx)(d.DW,{rounded:!0,src:(0,u.J0)(t[0]),alt:(0,u.J0)(t[0]),width:100,height:60})})}},noItemsLabel:"\ub370\uc774\ud130\uac00 \uc5c6\uc2b5\ub2c8\ub2e4.",itemsPerPage:20}),O?(0,l.jsx)(_,{visible:O,setVisible:g,onClick:function(){g(!O)},url:U}):""]})}},96672:function(n,t,e){e.d(t,{Z:function(){return d},w:function(){return s}});var a=e(29439),r=e(15671),c=e(43144),i=e(61044),o=e(46327),s={GET:"get",POST:"post",PUT:"put",PATCH:"patch"},d=function(){function n(){(0,r.Z)(this,n)}return(0,c.Z)(n,null,[{key:"request",value:function(n){var t=n.data,e=n.query,r=n.path,c=n.method,d=n.url;try{if((0,o.xb)(c)||(0,o.xb)(d))return void alert("HTTP Method \uc640 URL \uc744 \ud655\uc778\ud574\uc8fc\uc138\uc694.");if(r)for(var u=0,l=Object.entries(r);u<l.length;u++){var _=(0,a.Z)(l[u],2),E=_[0],A=_[1];d=d.replace(":".concat(E),A)}(0,o.xb)(e)||(d+="?"+Object.keys(e).map((function(n){return n+"="+e[n]})).join("&"));var T={accept:"application/json","Content-Type":"application/json","X-Access-Token":window.sessionStorage.getItem("jwt")};switch(c){case s.GET:return i.ZP.get(d,{headers:T});case s.POST:return i.ZP.post(d,t,{headers:T});case s.PATCH:return i.ZP.patch(d,t,{headers:T});case s.PUT:return i.ZP.put(d,t,{headers:T})}}catch(m){alert(m.message)}}}]),n}()},19311:function(n,t,e){e.d(t,{l:function(){return s}});var a,r,c,i=e(4942),o="http://13.209.93.181",s={GET_V1_TEST_AUTO_LOGIN:"".concat(o,"/test/v1/jwt/check/:isManual"),POST_LOGIN:"".concat(o,"/admin/login"),POST_TEST_V1_REGISTER:"".concat(o,"/test/v1/register"),RECRUITMENT:"".concat(o,"/admin/recruitment"),TALENTPOOL:"".concat(o,"/admin/talent-pool"),EDITOR:"".concat(o,"/admin/editor"),HOME_INQUIRY:"".concat(o,"/admin/inquiry"),ENGLISH_HOME_INQUIRY:"".concat(o,"/admin/english/inquiry"),NOTICE:"".concat(o,"/admin/notice"),DATA_ROOM:"".concat(o,"/admin/english/data-room"),HOME_BANNER:"".concat(o,"/admin/banner"),ENGLISH_BANNER:"".concat(o,"/admin/english/banner"),GET_PARTNER_USERS:"".concat(o,"/admin/partner/users"),GET_PARTNER_INACTIVE_USERS:"".concat(o,"/admin/partner/users/inactive"),GET_PARTNER_INQUIRIES:"".concat(o,"/admin/partner/inquiries"),GET_PARTNER_NOTICES:"".concat(o,"/admin/partner/notices"),GET_PARTNER_AGENCYAPPLICANT:"".concat(o,"/admin/partner/notices/agencyApplicant"),GET_PARTNER_DATAROOMS:"".concat(o,"/admin/partner/dataRooms"),GET_PARTNER_ORDERS:"".concat(o,"/admin/partner/orders"),GET_PARTNER_MAINTENANCES:"".concat(o,"/admin/partner/maintenances"),GET_PARTNER_SCHEDULES:"".concat(o,"/admin/partner/educations/schedules"),GET_PARTNER_REGISTRAUINS:"".concat(o,"/admin/partner/educations/registrations"),GET_MALL_USERS:"".concat(o,"/admin/mall/users"),GET_MALL_USER:"".concat(o,"/admin/mall/users/:userId"),GET_MALL_RESIGNUSERS:"".concat(o,"/admin/mall/users/resign"),GET_MALL_RESIGNUSER:"".concat(o,"/admin/mall/users/resign/:userId"),GET_MALL_INQUIRIES:"".concat(o,"/admin/mall/inquiries"),GET_MALL_INQUIRY:"".concat(o,"/admin/mall/inquiries/:inquiryId"),POST_MALL_INQUIRY_REPLY:"".concat(o,"/admin/mall/inquiryReplies"),PATCH_MALL_UPDATE_INQUIRY_REPLY:"".concat(o,"/admin/mall/inquiryReplies/:inquiryReplyId"),PATCH_MALL_DELETE_INQUIRY:"".concat(o,"/admin/mall/inquiries/:inquiryId/status"),GET_MALL_FAQS:"".concat(o,"/admin/mall/faqs"),GET_MALL_FAQ:"".concat(o,"/admin/mall/faqs/:faqId"),POST_MALL_FAQ:"".concat(o,"/admin/mall/faqs"),PATCH_MALL_UPDATE_FAQ:"".concat(o,"/admin/mall/faqs/:faqId"),PATCH_MALL_DELETE_FAQ:"".concat(o,"/admin/mall/faqs/:faqId/status"),GET_MALL_DATAROOMS:"".concat(o,"/admin/mall/datarooms"),GET_MALL_DATAROOM:"".concat(o,"/admin/mall/datarooms/:dataRoomId"),POST_MALL_DATAROOM:"".concat(o,"/admin/mall/datarooms"),PATCH_MALL_UPDATE_DATAROOM:"".concat(o,"/admin/mall/datarooms/:dataRoomId"),PATCH_MALL_DELETE_DATAROOM:"".concat(o,"/admin/mall/datarooms/:dataRoomId/status"),GET_MALL_BANNERS:"".concat(o,"/admin/mall/banners"),GET_MALL_BANNER:"".concat(o,"/admin/mall/banners/:bannerId"),POST_MALL_BANNER:"".concat(o,"/admin/mall/banners"),PATCH_MALL_UPDATE_BANNER:"".concat(o,"/admin/mall/banners"),PATCH_MALL_DELETE_BANNER:"".concat(o,"/admin/mall/banners/:bannerId"),GET_MALL_ORDERS:"".concat(o,"/admin/mall/orders"),GET_MALL_CANCEL_ORDERS:"".concat(o,"/admin/mall/orders/cancel"),GET_MALL_EXCHANGE_ORDERS:"".concat(o,"/admin/mall/orders/exchange"),POST_REGISTER:"".concat(o,"/admin/join")};a={},(0,i.Z)(a,s.GET_V1_TEST_AUTO_LOGIN,{}),(0,i.Z)(a,s.GET_MALL_USERS,{}),(0,i.Z)(a,s.GET_MALL_USER,{}),(0,i.Z)(a,s.GET_MALL_RESIGNUSERS,{}),(0,i.Z)(a,s.GET_MALL_RESIGNUSER,{}),(0,i.Z)(a,s.GET_MALL_INQUIRIES,{}),(0,i.Z)(a,s.GET_MALL_INQUIRY,{}),(0,i.Z)(a,s.GET_MALL_FAQS,{}),(0,i.Z)(a,s.GET_MALL_FAQ,{}),(0,i.Z)(a,s.GET_MALL_DATAROOMS,{}),(0,i.Z)(a,s.GET_MALL_DATAROOM,{}),(0,i.Z)(a,s.GET_MALL_BANNERS,{}),(0,i.Z)(a,s.GET_MALL_BANNER,{}),(0,i.Z)(a,s.GET_MALL_ORDERS,{}),(0,i.Z)(a,s.GET_MALL_CANCEL_ORDERS,{}),(0,i.Z)(a,s.GET_MALL_EXCHANGE_ORDERS,{}),(0,i.Z)(a,s.GET_PARTNER_USERS,{}),(0,i.Z)(a,s.GET_PARTNER_INACTIVE_USERS,{}),(0,i.Z)(a,s.GET_PARTNER_INQUIRIES,{}),(0,i.Z)(a,s.GET_PARTNER_NOTICES,{}),(0,i.Z)(a,s.GET_PARTNER_AGENCYAPPLICANT,{}),(0,i.Z)(a,s.GET_PARTNER_ORDERS,{}),(0,i.Z)(a,s.GET_PARTNER_MAINTENANCES,{}),(0,i.Z)(a,s.GET_PARTNER_SCHEDULES,{}),(0,i.Z)(a,s.GET_PARTNER_REGISTRAUINS,{}),r={},(0,i.Z)(r,s.POST_LOGIN,{}),(0,i.Z)(r,s.POST_REGISTER,{}),(0,i.Z)(r,s.POST_MALL_INQUIRY_REPLY,{}),(0,i.Z)(r,s.POST_MALL_FAQ,{}),(0,i.Z)(r,s.POST_MALL_DATAROOM,{}),(0,i.Z)(r,s.POST_MALL_BANNER,{}),c={},(0,i.Z)(c,s.PATCH_MALL_UPDATE_INQUIRY_REPLY,{}),(0,i.Z)(c,s.PATCH_MALL_DELETE_INQUIRY,{}),(0,i.Z)(c,s.PATCH_MALL_UPDATE_FAQ,{}),(0,i.Z)(c,s.PATCH_MALL_DELETE_FAQ,{}),(0,i.Z)(c,s.PATCH_MALL_UPDATE_DATAROOM,{}),(0,i.Z)(c,s.PATCH_MALL_DELETE_DATAROOM,{}),(0,i.Z)(c,s.PATCH_MALL_UPDATE_BANNER,{}),(0,i.Z)(c,s.PATCH_MALL_DELETE_BANNER,{})},76030:function(n,t,e){e.d(t,{AA:function(){return r},DK:function(){return i},HU:function(){return a},J0:function(){return c}});var a=function(n){return n.map((function(n){return n.url.split(".com/")[1]}))},r=function(n){return"".concat("homepage-test-resource","/admin/images/").concat(n)},c=function(n){return"https://".concat("homepage-test-resource",".s3.").concat("ap-northeast-2",".amazonaws.com/").concat(n)},i=function(n){return"".concat("homepage-test-resource","/admin/files/").concat(n)}}}]);
//# sourceMappingURL=4783.bf9e56da.chunk.js.map