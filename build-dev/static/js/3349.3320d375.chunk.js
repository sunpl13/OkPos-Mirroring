"use strict";(self.webpackChunkneordinary_template_react_js_admin=self.webpackChunkneordinary_template_react_js_admin||[]).push([[3349],{20961:function(n,e,t){var r,c=t(30168),i=t(91191),a=t(80184);e.Z=function(n){var e=n.title;return(0,a.jsx)(o,{children:(0,a.jsx)("h1",{children:e})})};var o=i.ZP.div(r||(r=(0,c.Z)(["\n  border-bottom: 1px solid #ccc;\n  margin-bottom: 40px;\n  margin-top: 20px;\n"])))},19977:function(n,e,t){t.d(e,{Z:function(){return x}});var r,c=t(93433),i=(t(74165),t(15861),t(1413)),a=t(29439),o=t(72791),s=t(1966),d=t(78983),l=t(80184),u=function(n){var e=n.visible,t=n.setVisible,r=(0,o.useState)(""),c=(0,a.Z)(r,2),i=c[0],s=c[1];return console.log(s),(0,l.jsxs)(d.Tk,{alignment:"center",size:"xl",visible:e,onClose:function(){return t(!1)},children:[(0,l.jsx)(d.sD,{className:"clearfix",children:(0,l.jsx)(d.DW,{align:"center",fluid:!0,src:i,alt:"\uc548\ub155\ud558\uc138\uc694",width:600})}),(0,l.jsxs)(d.Ym,{children:[(0,l.jsx)(d.u5,{color:"danger",onClick:function(){return t(!1)},children:"\uc0ad\uc81c"}),(0,l.jsx)(d.u5,{color:"primary",onClick:function(){return t(!1)},children:"Cancel"})]})]})},_=t(30168),T=t(71666),m=t(66904),E=t(72312),A=t(6793),h=(t(65713),t(72426)),f=t.n(h),p=(t(88015),t(91191)),L=function(n){var e=n.setStartDate,t=n.setEndDate,r=T.Z.RangePicker;f().locale("ko");return(0,l.jsx)(R,{children:(0,l.jsx)(m.ZP,{locale:A.Z,children:(0,l.jsx)(E.Z,{direction:"vertical",children:(0,l.jsx)(r,{allowClear:!0,onChange:function(n){n?(e(f()(n[0]._d).format("YYYY-MM-DD")),t(f()(n[1]._d).format("YYYY-MM-DD"))):(e(""),t(""))}})})})})},R=(0,p.ZP)(d.b7)(r||(r=(0,_.Z)(["\n  display: flex;\n  flex-direction: row;\n  align-content: end;\n  justify-content: end;\n  height: 100%;\n  width: 100%;\n  & div {\n    height: 100%;\n  }\n  & .ant-space-item {\n    width: 100%;\n  }\n  & .ant-picker {\n    border-radius: 0.375rem;\n    border: solid 1px #9da5b1;\n  }\n  & .ant-space-item {\n    width: 100%;\n    & > div {\n      width: 100%;\n    }\n  }\n  & .ant-space.ant-space-vertical {\n    width: 100%;\n  }\n"]))),x=(t(96672),t(19311),function(n){var e=n.items,t=n.onClick,r=n.columns,_=n.className,T=n.onDelete,m=n.selectedOptions,E=n.datePickerHidden,A=void 0===E||E,h=(n.itemPerPageHidden,n.searchInputHidden),p=void 0===h||h,R=n.checkBoxInputHidden,x=void 0!==R&&R,S=n.func,Y=(0,o.useState)([]),M=(0,a.Z)(Y,2),j=M[0],P=M[1],I=(0,o.useState)(),Z=(0,a.Z)(I,2),v=Z[0],D=Z[1],g=(0,o.useState)(!1),C=(0,a.Z)(g,2),N=C[0],G=C[1],k=(0,o.useState)(""),O=(0,a.Z)(k,2),y=O[0],b=O[1],U=(0,o.useState)(""),H=(0,a.Z)(U,2),w=H[0],Q=H[1],q=(0,o.useState)(""),F=(0,a.Z)(q,2),V=F[0],B=F[1],z=(0,o.useState)(""),W=(0,a.Z)(z,2),$=W[0],X=W[1],J=(0,o.useState)(!1),K=(0,a.Z)(J,2),nn=K[0],en=K[1],tn={key:"checkBox",label:(0,l.jsx)(d.EC,{id:"allSelected",type:"checkbox",onChange:function(n){return en(!nn),void P(j.map((function(n){return(0,i.Z)((0,i.Z)({},n),{},{checked:!nn})})))},checked:nn}),_props:{className:"checkBox"},sorter:!1,filter:!1},rn=function(n){switch(n){case"ACTIVE":return"success";case"INACTIVE":return"danger";case!0:return"success";case!1:return"danger";default:return"primary"}},cn=function(n){switch(n){case"ACTIVE":return"\ud65c\uc131\ud654";case"INACTIVE":return"\ube44\ud65c\uc131\ud654";case!0:return"\uc644\ub8cc";case!1:return"\ubbf8\uc644\ub8cc";default:return"\uae30\ud0c0"}};(0,o.useEffect)((function(){P(e),r&&X(r[0].key)}),[e]),(0,o.useEffect)((function(){D(V?j.filter((function(n){return f()(n.createdAt,"YYYYMMDDHHmmss").format("YYYY-MM-DD")>=w&&f()(n.createdAt,"YYYYMMDDHHmmss").format("YYYY-MM-DD")<=V})):"")}),[V]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(d.rb,{className:"justify-content-end",children:[p&&(0,l.jsx)(d.b7,{xs:4,children:(0,l.jsxs)(d.YR,{children:[(0,l.jsxs)(d.w5,{alignment:"end",variant:"input-group",children:[(0,l.jsx)(d.SQ,{color:"secondary",variant:"outline",split:!0,children:$}),(0,l.jsx)(d.jO,{"aria-label":"Text input with segmented dropdown button"}),(0,l.jsx)(d.$H,{children:r.map((function(n){var e=n.key;if("createdAt"!==e)return(0,l.jsx)(d.$f,{onClick:function(){return function(n){X(n)}(e)},children:e},e)}))})]}),(0,l.jsx)(d.u5,{type:"button",color:"secondary",variant:"outline",onClick:function(){console.log("test")},children:"\uac80\uc0c9"})]})}),(0,l.jsx)(d.b7,{xs:4,children:A&&(0,l.jsx)(L,{setStartDate:Q,setEndDate:B})})]}),(0,l.jsx)("br",{}),(0,l.jsx)(s.u,{items:v||j,columns:x?[tn].concat((0,c.Z)(r)):r||null,activePage:1,columnSorter:!0,pagination:!0,clickableRows:!0,tableHeadProps:{color:"primary"},onRowClick:t,tableProps:{hover:!0,responsive:!0,striped:!0,align:"middle",className:_},scopedColumns:{checkBox:function(n){return(0,l.jsx)("td",{onClick:function(n){return n.stopPropagation()},children:(0,l.jsx)(d.EC,{onChange:function(){return function(n){P(j.map((function(e){return e._id===n._id?(0,i.Z)((0,i.Z)({},e),{},{checked:!n.checked}):e}))),n.checked?n.checked=!1:n.checked=!0,console.log(n)}(n)},checked:n.checked||!1})})},isAuthorized:function(n){return(0,l.jsx)("td",{onClick:function(n){return n.stopPropagation()},children:(0,l.jsx)(d.EC,{onChange:function(){return S(n)},checked:n.isAuthorized||!1})})},status:function(n){var e=n.status;return(0,l.jsx)("td",{children:(0,l.jsx)(d.C_,{color:rn(e),children:cn(e)})})},reply:function(n){var e=n.reply;return(0,l.jsx)("td",{children:(0,l.jsx)(d.C_,{color:rn(e),children:cn(e)})})},images:function(n){var e=n.images;return(0,l.jsx)("td",{onClick:function(n){return 0!==e.length?function(n,e){n.stopPropagation(),G(!N),b(e)}(n,e):t},children:(0,l.jsx)(d.DW,{rounded:!0,src:0===e.length?"":e[0],alt:"",width:100,height:60})})},deleteBtn:function(n){return(0,l.jsx)("td",{onClick:function(e){return function(n,e){n.stopPropagation(),T(e)}(e,n)},children:(0,l.jsx)(d.C_,{color:"danger",children:"\uc0ad\uc81c"})})},jobType:function(n){var e=n.jobType;return(0,l.jsx)("td",{children:m?m[e]:""})},education:function(n){var e=n.education;return(0,l.jsx)("td",{children:m?m[e]:""})},inquiryType:function(n){var e=n.inquiryType;return(0,l.jsx)("td",{children:m?m[e]:""})},career:function(n){var e=n.career;return(0,l.jsx)("td",{children:m?m[e]:""})},proceed:function(n){var e=n.proceed;return(0,l.jsx)("td",{children:e?"\ucc44\uc6a9\uc911":"\ucc44\uc6a9 \ub9c8\uac10"})},deliveryStatus:function(n){var e=n.deliveryStatus;return(0,l.jsx)("td",{children:(0,l.jsxs)(d.C_,{color:"primary",children:[m?m[e]:"Not Data"," "]})})},productImg:function(n){var e=n.productImg;return(0,l.jsx)("td",{children:(0,l.jsx)(d.DW,{rounded:!0,src:e||"",alt:"",width:100,height:60})})},startedAt:function(n){var e=n.startedAt;return(0,l.jsx)("td",{children:f()(e,"YYYYMMDDHHmmss").format("YYYY. MM. DD")})},closedAt:function(n){var e=n.closedAt;return(0,l.jsx)("td",{children:f()(e,"YYYYMMDDHHmmss").format("YYYY. MM. DD")})},createdAt:function(n){var e=n.createdAt;return(0,l.jsx)("td",{children:f()(e,"YYYYMMDDHHmmss").format("YYYY. MM. DD")})},updatedAt:function(n){var e=n.updatedAt;return(0,l.jsx)("td",{children:f()(e,"YYYYMMDDHHmmss").format("YYYY. MM. DD")})},noticeFiles:function(n){var e=n.noticeFiles;return(0,l.jsxs)("td",{children:[null===e||void 0===e?void 0:e.length," \uac1c"]})}},noItemsLabel:"\ub370\uc774\ud130\uac00 \uc5c6\uc2b5\ub2c8\ub2e4.",itemsPerPage:20}),N?(0,l.jsx)(u,{visible:N,setVisible:G,onClick:function(){G(!N)},url:y}):""]})})},96672:function(n,e,t){t.d(e,{Z:function(){return d},w:function(){return s}});var r=t(29439),c=t(15671),i=t(43144),a=t(61044),o=t(46327),s={GET:"get",POST:"post",PUT:"put",PATCH:"patch"},d=function(){function n(){(0,c.Z)(this,n)}return(0,i.Z)(n,null,[{key:"request",value:function(n){var e=n.data,t=n.query,c=n.path,i=n.method,d=n.url;try{if((0,o.xb)(i)||(0,o.xb)(d))return void alert("HTTP Method \uc640 URL \uc744 \ud655\uc778\ud574\uc8fc\uc138\uc694.");if(c)for(var l=0,u=Object.entries(c);l<u.length;l++){var _=(0,r.Z)(u[l],2),T=_[0],m=_[1];d=d.replace(":".concat(T),m)}(0,o.xb)(t)||(d+="?"+Object.keys(t).map((function(n){return n+"="+t[n]})).join("&"));var E={accept:"application/json","Content-Type":"application/json","X-Access-Token":window.sessionStorage.getItem("jwt")};switch(i){case s.GET:return a.ZP.get(d,{headers:E});case s.POST:return a.ZP.post(d,e,{headers:E});case s.PATCH:return a.ZP.patch(d,e,{headers:E});case s.PUT:return a.ZP.put(d,e,{headers:E})}}catch(A){alert(A.message)}}}]),n}()},19311:function(n,e,t){t.d(e,{l:function(){return s}});var r,c,i,a=t(4942),o="http://13.209.93.181",s={GET_V1_TEST_AUTO_LOGIN:"".concat(o,"/test/v1/jwt/check/:isManual"),POST_LOGIN:"".concat(o,"/admin/login"),POST_TEST_V1_REGISTER:"".concat(o,"/test/v1/register"),RECRUITMENT:"".concat(o,"/admin/recruitment"),TALENTPOOL:"".concat(o,"/admin/talent-pool"),EDITOR:"".concat(o,"/admin/editor"),GET_PARTNER_USERS:"".concat(o,"/admin/partner/users"),GET_PARTNER_INACTIVE_USERS:"".concat(o,"/admin/partner/users/inactive"),GET_PARTNER_INQUIRIES:"".concat(o,"/admin/partner/inquiries"),GET_PARTNER_NOTICES:"".concat(o,"/admin/partner/notices"),GET_PARTNER_AGENCYAPPLICANT:"".concat(o,"/admin/partner/notices/agencyApplicant"),GET_MALL_USERS:"".concat(o,"/admin/mall/users"),GET_MALL_USER:"".concat(o,"/admin/mall/users/:userId"),GET_MALL_RESIGNUSERS:"".concat(o,"/admin/mall/users/resign"),GET_MALL_RESIGNUSER:"".concat(o,"/admin/mall/users/resign/:userId"),GET_MALL_INQUIRIES:"".concat(o,"/admin/mall/inquiries"),GET_MALL_INQUIRY:"".concat(o,"/admin/mall/inquiries/:inquiryId"),POST_MALL_INQUIRY_REPLY:"".concat(o,"/admin/mall/inquiryReplies"),PATCH_MALL_UPDATE_INQUIRY_REPLY:"".concat(o,"/admin/mall/inquiryReplies"),PATCH_MALL_DELETE_INQUIRY:"".concat(o,"/admin/mall/inquiries/:inquiryId"),GET_MALL_FAQS:"".concat(o,"/admin/mall/faqs"),GET_MALL_FAQ:"".concat(o,"/admin/mall/faqs/:faqId"),POST_MALL_FAQ:"".concat(o,"/admin/mall/faqs"),PATCH_MALL_UPDATE_FAQ:"".concat(o,"/admin/mall/faqs"),PATCH_MALL_DELETE_FAQ:"".concat(o,"/admin/mall/faqs/:faqId"),GET_MALL_DATAROOMS:"".concat(o,"/admin/mall/datarooms"),GET_MALL_DATAROOM:"".concat(o,"/admin/mall/datarooms/:dataRoomId"),POST_MALL_DATAROOMS:"".concat(o,"/admin/mall/datarooms"),POST_REGISTER:"".concat(o,"/admin/join")};r={},(0,a.Z)(r,s.GET_V1_TEST_AUTO_LOGIN,{}),(0,a.Z)(r,s.GET_MALL_USERS,{}),(0,a.Z)(r,s.GET_MALL_USER,{}),(0,a.Z)(r,s.GET_MALL_RESIGNUSERS,{}),(0,a.Z)(r,s.GET_MALL_RESIGNUSER,{}),(0,a.Z)(r,s.GET_MALL_INQUIRIES,{}),(0,a.Z)(r,s.GET_MALL_INQUIRY,{}),(0,a.Z)(r,s.GET_MALL_FAQS,{}),(0,a.Z)(r,s.GET_MALL_FAQ,{}),(0,a.Z)(r,s.GET_MALL_DATAROOMS,{}),(0,a.Z)(r,s.GET_MALL_DATAROOM,{}),(0,a.Z)(r,s.GET_PARTNER_USERS,{}),(0,a.Z)(r,s.GET_PARTNER_INACTIVE_USERS,{}),(0,a.Z)(r,s.GET_PARTNER_INQUIRIES,{}),(0,a.Z)(r,s.GET_PARTNER_NOTICES,{}),(0,a.Z)(r,s.GET_PARTNER_AGENCYAPPLICANT,{}),c={},(0,a.Z)(c,s.POST_LOGIN,{}),(0,a.Z)(c,s.POST_REGISTER,{}),(0,a.Z)(c,s.POST_MALL_INQUIRY_REPLY,{}),(0,a.Z)(c,s.POST_MALL_FAQ,{}),(0,a.Z)(c,s.POST_MALL_DATAROOMS,{}),i={},(0,a.Z)(i,s.PATCH_MALL_UPDATE_INQUIRY_REPLY,{}),(0,a.Z)(i,s.PATCH_MALL_DELETE_INQUIRY,{}),(0,a.Z)(i,s.PATCH_MALL_UPDATE_FAQ,{}),(0,a.Z)(i,s.PATCH_MALL_DELETE_FAQ,{})}}]);
//# sourceMappingURL=3349.3320d375.chunk.js.map