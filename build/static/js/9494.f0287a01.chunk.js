"use strict";(self.webpackChunkneordinary_template_react_js_admin=self.webpackChunkneordinary_template_react_js_admin||[]).push([[9494],{20961:function(n,e,t){var r,a=t(30168),c=t(44801),i=t(80184);e.Z=function(n){var e=n.title;return(0,i.jsx)(o,{children:(0,i.jsx)("h1",{children:e})})};var o=c.ZP.div(r||(r=(0,a.Z)(["\n  border-bottom: 1px solid #ccc;\n  margin-bottom: 40px;\n  margin-top: 20px;\n"])))},3854:function(n,e,t){var r=t(78983),a=(t(72791),t(80184));e.Z=function(n){var e=n.type,t=n.onChange,c=n.id,i=n.placeholder,o=n.value,s=n.label,d=n.readOnly,l=n.disabled,u=n.isRequired,_=n.xs;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.L8,{htmlFor:"".concat(c,"Static"),className:"col-sm-2 col-form-label",children:(0,a.jsx)("span",{className:u?"required":"",children:s||" * "})}),(0,a.jsx)(r.b7,{className:"align-items-center",xs:_,style:{display:"flex"},children:(0,a.jsx)(r.jO,{type:e||"text",id:c,placeholder:i||"",value:"file"===e?void 0:o||"",onChange:t,readOnly:d,disabled:l})})]})}},70844:function(n,e,t){t.d(e,{Z:function(){return x}});var r,a=t(93433),c=t(74165),i=t(15861),o=t(1413),s=t(29439),d=t(72791),l=t(1966),u=t(78983),_=t(76030),A=t(80184),m=function(n){var e=n.visible,t=n.setVisible,r=n.url,a=(0,d.useState)(""),c=(0,s.Z)(a,2);c[0],c[1];return(0,A.jsxs)(u.Tk,{alignment:"center",size:"xl",visible:e,onClose:function(){return t(!1)},children:[(0,A.jsx)(u.sD,{className:"clearfix",children:(0,A.jsx)(u.DW,{align:"center",fluid:!0,src:(0,_.J0)(r),alt:"\uc548\ub155\ud558\uc138\uc694",width:600})}),(0,A.jsx)(u.Ym,{children:(0,A.jsx)(u.u5,{color:"primary",onClick:function(){return t(!1)},children:"Cancel"})})]})},E=t(72426),T=t.n(E),R=t(46327),h=t.p+"static/media/defaultImg.932a0a87e8b47c36eefa.png",L=t(30168),f=t(10815),S=t(28722),M=t(30774),I=t(72721),N=t(44801),p=t(6793),P=f.Z.Option,D=function(n){var e,t=n.options,r=n.datePicker,a=(0,d.useState)({key:"createdAt",value:"",children:""}),c=(0,s.Z)(a,2),i=c[0],o=c[1],l=S.Z.RangePicker;(0,d.useEffect)((function(){t&&o(t[0])}),[]),T().locale("ko");return(0,A.jsx)(Y,{children:(0,A.jsxs)(M.Z,{children:[t&&(null===t||void 0===t?void 0:t.length)>1&&(0,A.jsx)(f.Z,{value:i.value||(null===(e=t[0])||void 0===e?void 0:e.value),onChange:function(n,e){o(e)},children:t.map((function(n){var e=n.value,t=n.key;return(0,A.jsx)(P,{value:e,children:e},t)}))}),(0,A.jsx)(I.ZP,{locale:p.Z,children:(0,A.jsx)(M.Z,{direction:"vertical",children:(0,A.jsx)(l,{allowClear:!0,onChange:function(n){n?r(T()(n[0].$d).format("YYYY-MM-DD"),T()(n[1].$d).format("YYYY-MM-DD"),i):r("","",{})}})})})]})})},Y=(0,N.ZP)(u.b7)(r||(r=(0,L.Z)(["\n  display: flex;\n  flex-direction: row;\n  align-content: end;\n  justify-content: end;\n  height: 100%;\n  width: 100%;\n"]))),x=function(n){var e=n.items,t=n.onClick,r=n.columns,E=n.className,L=n.onDelete,f=n.selectedOptions,S=n.datePickerHidden,M=void 0===S||S,I=(n.itemPerPageHidden,n.searchInputHidden,n.checkBoxInputHidden),N=void 0!==I&&I,p=n.func,P=n.datePickerOptions,Y=n.notFilter,x=(0,d.useState)([]),C=(0,s.Z)(x,2),v=C[0],j=C[1],g=(0,d.useState)(),O=(0,s.Z)(g,2),Z=O[0],H=O[1],G=(0,d.useState)(!1),U=(0,s.Z)(G,2),k=U[0],b=U[1],y=(0,d.useState)(""),q=(0,s.Z)(y,2),Q=q[0],w=q[1],B=(0,d.useState)(""),F=(0,s.Z)(B,2),V=(F[0],F[1],(0,d.useState)("")),z=(0,s.Z)(V,2),W=(z[0],z[1],(0,d.useState)(!1)),X=(0,s.Z)(W,2),J=X[0],$=X[1],K=(0,d.useState)(""),nn=(0,s.Z)(K,2),en=nn[0],tn=nn[1],rn=(0,d.useState)(""),an=(0,s.Z)(rn,2),cn=an[0],on=an[1],sn={key:"checkBox",label:(0,A.jsx)(u.EC,{id:"allSelected",type:"checkbox",onChange:function(n){return $(!J),void j(v.map((function(n){return(0,o.Z)((0,o.Z)({},n),{},{checked:!J})})))},checked:J}),_props:{className:"checkBox"},sorter:!1,filter:!1},dn=function(n){switch(n){case"ACTIVE":return"success";case"INACTIVE":return"danger";case!0:return"success";case!1:return"danger";default:return"primary"}},ln=function(n){switch(n){case"ACTIVE":return"\ud65c\uc131\ud654";case"INACTIVE":return"\ube44\ud65c\uc131\ud654";case!0:return"\uc644\ub8cc";case!1:return"\ubbf8\uc644\ub8cc";default:return"\uae30\ud0c0"}},un=function(n,e){n.stopPropagation(),b(!k),w(e)},_n=function(){var n=(0,i.Z)((0,c.Z)().mark((function n(e){var t,r;return(0,c.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,p(e);case 2:t=n.sent,en?(r=t.filter((function(n){var e=An(n.createdAt,"YYYYMMDDHHmmss");return e>=cn&&e<=en})),H(r)):H("");case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();(0,d.useEffect)((function(){j(e)}),[e]);var An=function(n,e){if(n&&e)return"YYYY-MM-DD"===e||"YYYYMMDDHHmmss"===e?T()(n,e).format("YYYY-MM-DD"):void 0};return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(u.rb,{className:"justify-content-end align-items-end pb-2",children:M&&(0,A.jsx)(D,{datePicker:function(n,e,t){var r=t.key;if(e){var a=v.filter((function(t){var a=An(t[r],"YYYYMMDDHHmmss");return a>=n&&a<=e}));H(a),on(n),tn(e)}else H(""),on(""),tn("")},options:P})}),(0,A.jsx)(l.u,{items:Z||v,columns:N?[sn].concat((0,a.Z)(r)):r||null,columnSorter:!0,pagination:!0,clickableRows:!0,columnFilter:!Y,paginationProps:{limit:10},tableHeadProps:{id:"smTable"},onRowClick:t,tableProps:{hover:!0,responsive:!0,striped:!0,align:"middle",className:E},scopedColumns:{userId:function(n,t){return(0,A.jsx)("td",{children:e.length-t})},bannerId:function(n,t){return(0,A.jsx)("td",{children:e.length-t})},inquiryId:function(n,t){return(0,A.jsx)("td",{children:e.length-t})},faqId:function(n,t){return(0,A.jsx)("td",{children:e.length-t})},dataRoomId:function(n,t){return(0,A.jsx)("td",{children:e.length-t})},orderId:function(n,t){return(0,A.jsx)("td",{children:e.length-t})},orderCancelId:function(n,t){return(0,A.jsx)("td",{children:e.length-t})},orderExchangeId:function(n,t){return(0,A.jsx)("td",{children:e.length-t})},checkBox:function(n){return(0,A.jsx)("td",{onClick:function(n){return n.stopPropagation()},children:(0,A.jsx)(u.EC,{onChange:function(){return function(n){j(v.map((function(e){return e._id===n._id?(0,o.Z)((0,o.Z)({},e),{},{checked:!n.checked}):e}))),n.checked?n.checked=!1:n.checked=!0}(n)},checked:n.checked||!1})})},isAuthorized:function(n){return(0,A.jsx)("td",{onClick:function(n){return n.stopPropagation()},children:(0,A.jsx)(u.EC,{onChange:function(){return _n(n)},checked:n.isAuthorized||!1})})},name:function(n){var e=n.name;return(0,A.jsx)("td",{children:(0,R.Cd)(e,1,"right")})},phoneNumber:function(n){var e=n.phoneNumber;return(0,A.jsx)("td",{children:(0,R.Cd)(e,4,"right")})},email:function(n){var e=n.email;return(0,A.jsx)("td",{children:(0,R.Cd)(e,1,"left")})},status:function(n){var e=n.status;return(0,A.jsx)("td",{children:(0,A.jsx)(u.C_,{size:"sm",color:dn(e),children:ln(e)})})},reply:function(n){var e=n.reply;return(0,A.jsx)("td",{children:(0,A.jsx)(u.C_,{size:"sm",color:dn(e),children:ln(e)})})},hasReply:function(n){var e=n.hasReply;return(0,A.jsx)("td",{children:(0,A.jsx)(u.C_,{size:"sm",color:dn(e),children:ln(e)})})},image:function(n){var e=n.image;return(0,A.jsx)("td",{children:e?(0,A.jsx)(u.DW,{rounded:!0,thumbnail:!0,src:e,alt:""}):(0,A.jsx)(u.DW,{rounded:!0,thumbnail:!0,src:h,alt:""})})},images:function(n){var e=n.images;return(0,A.jsx)("td",{onClick:function(n){return 0!==e.length?un(n,e):t},children:(0,A.jsx)(u.DW,{rounded:!0,src:0===e.length?"":e[0],alt:"",width:100,height:60})})},deleteBtn:function(n){return(0,A.jsx)("td",{onClick:function(e){return function(n,e){n.stopPropagation(),L(e)}(e,n)},children:(0,A.jsx)(u.C_,{color:"danger",children:"\uc0ad\uc81c"})})},jobType:function(n){var e=n.jobType;return(0,A.jsx)("td",{children:f?f[e]:""})},education:function(n){var e=n.education;return(0,A.jsx)("td",{children:f?f[e]:""})},inquiryType:function(n){var e=n.inquiryType;return(0,A.jsx)("td",{children:f?f[e]:""})},career:function(n){var e=n.career;return(0,A.jsx)("td",{children:f?f[e]:""})},deliveryStatus:function(n){var e=n.deliveryStatus;return(0,A.jsx)("td",{children:(0,A.jsxs)(u.C_,{color:"primary",children:[f?f[e]:"Not Data"," "]})})},productImg:function(n){var e=n.productImg;return(0,A.jsx)("td",{children:(0,A.jsx)(u.DW,{rounded:!0,src:e||"",alt:"",width:100,height:60})})},totalPrice:function(n){var e=n.totalPrice;return(0,A.jsx)("td",{className:"totalPrice",children:(0,R.ks)(e)})},orderItemPrice:function(n){var e=n.orderItemPrice;return(0,A.jsx)("td",{className:"orderItemPrice",children:(0,R.ks)(e)})},startedAt:function(n){var e=n.startedAt;return(0,A.jsx)("td",{children:T()(e,"YYYYMMDDHHmmss").format("YYYY. MM. DD")})},closedAt:function(n){var e=n.closedAt;return(0,A.jsx)("td",{children:T()(e,"YYYYMMDDHHmmss").format("YYYY. MM. DD")})},createdAt:function(n){var e=n.createdAt;return(0,A.jsx)("td",{children:T()(e,"YYYYMMDDHHmmss").format("YYYY. MM. DD")})},deletedAt:function(n){var e=n.deletedAt;return(0,A.jsx)("td",{children:T()(e,"YYYYMMDDHHmmss").format("YYYY. MM. DD")})},updatedAt:function(n){var e=n.updatedAt;return(0,A.jsx)("td",{children:T()(e,"YYYYMMDDHHmmss").format("YYYY. MM. DD")})},orderDate:function(n){var e=n.orderDate;return(0,A.jsx)("td",{children:T()(e,"YYYYMMDDHHmmss").format("YYYY. MM. DD")})},payDate:function(n){var e=n.payDate;return(0,A.jsx)("td",{children:T()(e,"YYYYMMDDHHmmss").format("YYYY. MM. DD")})},noticeFiles:function(n){var e=n.noticeFiles;return(0,A.jsxs)("td",{children:[null===e||void 0===e?void 0:e.length," \uac1c"]})},imageUrls:function(n){var e=n.imageUrls;return(0,A.jsx)("td",{onClick:function(n){return 0!==e.length&&"."!==e[0]?un(n,e[0]):t},children:0===e.length||"."===e[0]?"":(0,A.jsx)(u.DW,{rounded:!0,src:(0,_.J0)(e[0]),alt:(0,_.J0)(e[0]),width:100,height:60})})},invoiceNum:function(n){return(0,A.jsx)("td",{onClick:function(e){return p(n,e,"invoiceNum")},children:(null===n||void 0===n?void 0:n.invoiceNum)||"\uc1a1\uc7a5\ubc88\ud638 \uc785\ub825"})},processingStatus:function(n){return(0,A.jsx)("td",{onClick:function(e){return p(n,e,"processingStatus")},children:(null===n||void 0===n?void 0:n.processingStatus)||""})}},noItemsLabel:"\ub370\uc774\ud130\uac00 \uc5c6\uc2b5\ub2c8\ub2e4.",itemsPerPage:20}),k?(0,A.jsx)(m,{visible:k,setVisible:b,onClick:function(){b(!k)},url:Q}):""]})}},96672:function(n,e,t){t.d(e,{Z:function(){return d},w:function(){return s}});var r=t(29439),a=t(15671),c=t(43144),i=t(61044),o=t(46327),s={GET:"get",POST:"post",PUT:"put",PATCH:"patch"},d=function(){function n(){(0,a.Z)(this,n)}return(0,c.Z)(n,null,[{key:"request",value:function(n){var e=n.data,t=n.query,a=n.path,c=n.method,d=n.url;try{if((0,o.xb)(c)||(0,o.xb)(d))return void alert("HTTP Method \uc640 URL \uc744 \ud655\uc778\ud574\uc8fc\uc138\uc694.");if(a)for(var l=0,u=Object.entries(a);l<u.length;l++){var _=(0,r.Z)(u[l],2),A=_[0],m=_[1];d=d.replace(":".concat(A),m)}(0,o.xb)(t)||(d+="?"+Object.keys(t).map((function(n){return n+"="+t[n]})).join("&"));var E={accept:"application/json","Content-Type":"application/json","X-Access-Token":window.sessionStorage.getItem("jwt")};switch(c){case s.GET:return i.ZP.get(d,{headers:E});case s.POST:return i.ZP.post(d,e,{headers:E});case s.PATCH:return i.ZP.patch(d,e,{headers:E});case s.PUT:return i.ZP.put(d,e,{headers:E})}}catch(T){alert(T.message)}}}]),n}()},19311:function(n,e,t){t.d(e,{l:function(){return s}});var r,a,c,i=t(4942),o="http://13.209.93.181",s={GET_V1_TEST_AUTO_LOGIN:"".concat(o,"/test/v1/jwt/check/:isManual"),POST_LOGIN:"".concat(o,"/admin/login"),POST_TEST_V1_REGISTER:"".concat(o,"/test/v1/register"),RECRUITMENT:"".concat(o,"/admin/recruitments"),TALENTPOOL:"".concat(o,"/admin/talents"),EDITOR:"".concat(o,"/admin/editor"),HOME_INQUIRY:"".concat(o,"/admin/inquiries"),ENGLISH_HOME_INQUIRY:"".concat(o,"/admin/english/inquiries"),NOTICE:"".concat(o,"/admin/notices"),DATA_ROOM:"".concat(o,"/admin/english/datarooms"),HOME_BANNER:"".concat(o,"/admin/banners"),ENGLISH_BANNER:"".concat(o,"/admin/english/banners"),PARTNER_USERS:"".concat(o,"/admin/partner/users"),PARTNER_INACTIVE_USERS:"".concat(o,"/admin/partner/users/inactive"),PARTNER_INQUIRIES:"".concat(o,"/admin/partner/inquiries"),PARTNER_NOTICES:"".concat(o,"/admin/partner/notices"),PARTNER_AGENCYAPPLICANT:"".concat(o,"/admin/partner/notices/agencyApplicant"),PARTNER_DATAROOMS:"".concat(o,"/admin/partner/dataRooms"),PARTNER_ORDERS:"".concat(o,"/admin/partner/orders"),PARTNER_MAINTENANCES:"".concat(o,"/admin/partner/maintenances"),PARTNER_SCHEDULES:"".concat(o,"/admin/partner/educations/schedules"),PARTNER_REGISTRAUINS:"".concat(o,"/admin/partner/educations/registrations"),PARTNER_REGISTRAUINS_NOTICES:"".concat(o,"/admin/partner/educations/registrations/notices"),GET_MALL_USERS:"".concat(o,"/admin/mall/users"),GET_MALL_USER:"".concat(o,"/admin/mall/users/:userId"),GET_MALL_RESIGNUSERS:"".concat(o,"/admin/mall/users/resign"),GET_MALL_RESIGNUSER:"".concat(o,"/admin/mall/users/resign/:userId"),GET_MALL_INQUIRIES:"".concat(o,"/admin/mall/inquiries"),GET_MALL_INQUIRY:"".concat(o,"/admin/mall/inquiries/:inquiryId"),POST_MALL_INQUIRY_REPLY:"".concat(o,"/admin/mall/inquiries/:inquiryId/reply"),PATCH_MALL_UPDATE_INQUIRY_REPLY:"".concat(o,"/admin/mall/inquiries/:inquiryReplyId/reply"),PATCH_MALL_DELETE_INQUIRY:"".concat(o,"/admin/mall/inquiries/:inquiryId/status"),GET_MALL_FAQS:"".concat(o,"/admin/mall/faqs"),GET_MALL_FAQ:"".concat(o,"/admin/mall/faqs/:faqId"),POST_MALL_FAQ:"".concat(o,"/admin/mall/faqs"),PATCH_MALL_UPDATE_FAQ:"".concat(o,"/admin/mall/faqs/:faqId"),PATCH_MALL_DELETE_FAQ:"".concat(o,"/admin/mall/faqs/:faqId/status"),GET_MALL_DATAROOMS:"".concat(o,"/admin/mall/datarooms"),GET_MALL_DATAROOM:"".concat(o,"/admin/mall/datarooms/:dataRoomId"),POST_MALL_DATAROOM:"".concat(o,"/admin/mall/datarooms"),PATCH_MALL_UPDATE_DATAROOM:"".concat(o,"/admin/mall/datarooms/:dataRoomId"),PATCH_MALL_DELETE_DATAROOM:"".concat(o,"/admin/mall/datarooms/:dataRoomId/status"),GET_MALL_BANNERS:"".concat(o,"/admin/mall/banners"),GET_MALL_BANNER:"".concat(o,"/admin/mall/banners/:bannerId"),POST_MALL_BANNER:"".concat(o,"/admin/mall/banners"),PATCH_MALL_UPDATE_BANNER:"".concat(o,"/admin/mall/banners/:bannerId"),PATCH_MALL_DELETE_BANNER:"".concat(o,"/admin/mall/banners/:bannerId/status"),GET_MALL_ORDERS:"".concat(o,"/admin/mall/orders"),GET_MALL_CANCEL_ORDERS:"".concat(o,"/admin/mall/orders/cancel"),GET_MALL_EXCHANGE_ORDERS:"".concat(o,"/admin/mall/orders/exchange"),PATCH_MALL_ORDERS_STATUS:"".concat(o,"/admin/mall/orders/:orderItemId"),POST_MALL_ORDERS_STATUS:"".concat(o,"/admin/mall/orders/:orderItemId"),PATCH_MALL_ORDERS_INVOICE:"".concat(o,"/admin/mall/orders/:orderItemId/invoice"),PATCH_MALL_CANCEL_ORDERS_STATUS:"".concat(o,"/admin/mall/orders/:orderCancelId/cancel"),PATCH_MALL_EXCHANGE_ORDERS_STATUS:"".concat(o,"/admin/mall/orders/:orderExchangeId/exchange"),POST_REGISTER:"".concat(o,"/admin/join")};r={},(0,i.Z)(r,s.GET_V1_TEST_AUTO_LOGIN,{}),(0,i.Z)(r,s.GET_MALL_USERS,{}),(0,i.Z)(r,s.GET_MALL_USER,{}),(0,i.Z)(r,s.GET_MALL_RESIGNUSERS,{}),(0,i.Z)(r,s.GET_MALL_RESIGNUSER,{}),(0,i.Z)(r,s.GET_MALL_INQUIRIES,{}),(0,i.Z)(r,s.GET_MALL_INQUIRY,{}),(0,i.Z)(r,s.GET_MALL_FAQS,{}),(0,i.Z)(r,s.GET_MALL_FAQ,{}),(0,i.Z)(r,s.GET_MALL_DATAROOMS,{}),(0,i.Z)(r,s.GET_MALL_DATAROOM,{}),(0,i.Z)(r,s.GET_MALL_BANNERS,{}),(0,i.Z)(r,s.GET_MALL_BANNER,{}),(0,i.Z)(r,s.GET_MALL_ORDERS,{}),(0,i.Z)(r,s.GET_MALL_CANCEL_ORDERS,{}),(0,i.Z)(r,s.GET_MALL_EXCHANGE_ORDERS,{}),(0,i.Z)(r,s.PARTNER_USERS,{}),(0,i.Z)(r,s.PARTNER_INACTIVE_USERS,{}),(0,i.Z)(r,s.PARTNER_INQUIRIES,{}),(0,i.Z)(r,s.PARTNER_NOTICES,{}),(0,i.Z)(r,s.PARTNER_AGENCYAPPLICANT,{}),(0,i.Z)(r,s.PARTNER_ORDERS,{}),(0,i.Z)(r,s.PARTNER_MAINTENANCES,{}),(0,i.Z)(r,s.PARTNER_SCHEDULES,{}),(0,i.Z)(r,s.PARTNER_REGISTRAUINS,{}),(0,i.Z)(r,s.PARTNER_REGISTRAUINS_NOTICIES,{}),a={},(0,i.Z)(a,s.POST_LOGIN,{}),(0,i.Z)(a,s.POST_REGISTER,{}),(0,i.Z)(a,s.POST_MALL_INQUIRY_REPLY,{}),(0,i.Z)(a,s.POST_MALL_FAQ,{}),(0,i.Z)(a,s.POST_MALL_DATAROOM,{}),(0,i.Z)(a,s.POST_MALL_BANNER,{}),(0,i.Z)(a,s.POST_MALL_ORDERS_STATUS,{}),c={},(0,i.Z)(c,s.PATCH_MALL_UPDATE_INQUIRY_REPLY,{}),(0,i.Z)(c,s.PATCH_MALL_DELETE_INQUIRY,{}),(0,i.Z)(c,s.PATCH_MALL_UPDATE_FAQ,{}),(0,i.Z)(c,s.PATCH_MALL_DELETE_FAQ,{}),(0,i.Z)(c,s.PATCH_MALL_UPDATE_DATAROOM,{}),(0,i.Z)(c,s.PATCH_MALL_DELETE_DATAROOM,{}),(0,i.Z)(c,s.PATCH_MALL_UPDATE_BANNER,{}),(0,i.Z)(c,s.PATCH_MALL_DELETE_BANNER,{}),(0,i.Z)(c,s.PATCH_MALL_ORDERS_STATUS,{}),(0,i.Z)(c,s.PATCH_MALL_ORDERS_INVOICE,{}),(0,i.Z)(c,s.PATCH_MALL_CANCEL_ORDERS_STATUS,{}),(0,i.Z)(c,s.PATCH_MALL_EXCHANGE_ORDERS_STATUS,{})},76030:function(n,e,t){t.d(e,{AA:function(){return a},DK:function(){return i},HU:function(){return r},J0:function(){return c}});var r=function(n){return n.map((function(n){return n.url.split(".com/")[1]}))},a=function(n){return"".concat("homepage-test-resource","/admin/images/").concat(n)},c=function(n){return"https://".concat("homepage-test-resource",".s3.").concat("ap-northeast-2",".amazonaws.com/").concat(n)},i=function(n){return"".concat("homepage-test-resource","/admin/files/").concat(n)}}}]);
//# sourceMappingURL=9494.f0287a01.chunk.js.map