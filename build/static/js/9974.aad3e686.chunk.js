(self.webpackChunkneordinary_template_react_js_admin=self.webpackChunkneordinary_template_react_js_admin||[]).push([[9974,9494],{20961:(e,t,a)=>{"use strict";a.d(t,{Z:()=>i});var r,s=a(30168),l=a(44801),n=a(80184);const i=e=>{let{title:t}=e;return(0,n.jsx)(o,{children:(0,n.jsx)("h1",{children:t})})},o=l.ZP.div(r||(r=(0,s.Z)(["\n  border-bottom: 1px solid #ccc;\n  margin-bottom: 40px;\n  margin-top: 20px;\n"])))},86385:(e,t,a)=>{"use strict";a.d(t,{Z:()=>h});var r,s,l=a(30168),n=a(79286),i=a(33809),o=a(72791),c=a(78983),d=a(44801),m=a(74912),u=a.n(m),p=a(76030),_=a(80184);const h=e=>{let{images:t,id:a,label:r,fileList:s,setFileList:l,imgPath:d,isRequired:m,readOnly:h,oneSheet:E=!1,maxFileLength:T=1}=e;const[L,g]=(0,o.useState)(!1),[x,b]=(0,o.useState)(""),[R,S]=(0,o.useState)("");(0,o.useEffect)((()=>{t&&t.length>0&&l(t.map((e=>({uid:e,name:decodeURI(e.split("/")[e.split("/").length-1]),status:"done",url:(0,p.J0)(e)}))))}),[t,l]);const y=(0,_.jsxs)("div",{children:[(0,_.jsx)(n.Z,{}),(0,_.jsx)("div",{style:{marginTop:8},children:"Upload"})]}),j=(0,_.jsx)("div",{children:"Have No Image."});return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(c.L8,{htmlFor:"".concat(a,"Static"),className:"col-form-label",children:(0,_.jsx)("span",{className:m&&"required",children:r||" * "})}),(0,_.jsx)(i.Z,{listType:"picture-card",fileList:s,onPreview:async e=>{e.url||e.preview||(e.preview=await(e=>new Promise(((t,a)=>{const r=new FileReader;r.readAsDataURL(e),r.onload=()=>t(r.result),r.onerror=e=>a(e)})))(e.originFileObj)),b(e.url||e.preview),g(!0),S(e.name||e.url.substring(e.url.lastIndexOf("/")+1))},onSuccess:e=>(e=>{const t=e.request.httpRequest,a=t.body,{protocol:r,host:n}=t.endpoint,i={uid:e.request.params.Key,name:a.name,status:"done",url:"".concat(r,"//").concat(n).concat(t.path)};l([...s,i])})(e),onRemove:e=>{return t=e,void l(s.filter((e=>e.uid!==t.uid)));var t},customRequest:e=>(e=>{let{file:t,onError:a,onProgress:r,onSuccess:l}=e;if(E&&s.length===T)return void alert("\uc774\ubbf8\uc9c0\ub294 \ucd5c\ub300 ".concat(T,"\uac1c\ub9cc \ub4f1\ub85d \uac00\ub2a5\ud569\ub2c8\ub2e4!"));u().config.update({region:"ap-northeast-2",accessKeyId:"AKIAWS5VDTBO5PU3SWMV",secretAccessKey:"F4sf4N/+4p1fKQiybA6P5lIcD2e2S6PjMfTePA/J"});const n=new(u().S3),i=t.name.replaceAll(" ",""),o={Bucket:(0,p.AA)(d),Key:i,Body:t,ContentType:t.type};n.putObject(o).on("httpUploadProgress",(e=>{let{loaded:t,total:a}=e;return r({percent:t/a*100})})).promise().then((function(e){l(e.$response)}),(function(e){a(),console.log(e.code),console.log(e.message)}))})(e),disabled:h,children:(null===s||void 0===s?void 0:s.length)>=8?null:0===(null===s||void 0===s?void 0:s.length)?h?j:y:h?null:y}),x&&(0,_.jsxs)(c.b7,{children:[(0,_.jsx)(c.L8,{className:"col-form-label w-75",children:(0,_.jsx)(N,{children:(0,_.jsx)("span",{children:R||""})})}),(0,_.jsx)(A,{className:"text-center p-2",children:(0,_.jsx)("div",{children:(0,_.jsx)(c.DW,{rounded:!0,alt:"example",onClick:()=>{b("")},src:x})})})]})]})},A=(0,d.ZP)(c.b7)(r||(r=(0,l.Z)(["\n  padding: 0.5rem 0;\n  background: #fafafa;\n  border: 1px dashed #d9d9d9;\n  border-radius: 2px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  div {\n    width: 75%;\n\n    & img {\n      max-width: 100%;\n      height: auto;\n      cursor: pointer;\n      max-height: 600px;\n    }\n  }\n"]))),N=d.ZP.div(s||(s=(0,l.Z)(["\n  width: 100%;\n  padding: 0 5px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n"])))},3854:(e,t,a)=>{"use strict";a.d(t,{Z:()=>l});var r=a(78983),s=(a(72791),a(80184));const l=e=>{let{type:t,onChange:a,id:l,placeholder:n,value:i,label:o,readOnly:c,disabled:d,isRequired:m,xs:u}=e;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.L8,{htmlFor:"".concat(l,"Static"),className:"col-sm-2 col-form-label",children:(0,s.jsx)("span",{className:m?"required":"",children:o||" * "})}),(0,s.jsx)(r.b7,{className:"align-items-center",xs:u,style:{display:"flex"},children:(0,s.jsx)(r.jO,{type:t||"text",id:l,placeholder:n||"",value:"file"===t?void 0:i||"",onChange:a,readOnly:c,disabled:d})})]})}},70844:(e,t,a)=>{"use strict";a.d(t,{Z:()=>R});var r=a(72791),s=a(1966),l=a(78983),n=a(76030),i=a(80184);const o=e=>{let{visible:t,setVisible:a,url:s}=e;const[o,c]=(0,r.useState)("");return(0,i.jsxs)(l.Tk,{alignment:"center",size:"xl",visible:t,onClose:()=>a(!1),children:[(0,i.jsx)(l.sD,{className:"clearfix",children:(0,i.jsx)(l.DW,{align:"center",fluid:!0,src:(0,n.J0)(s),alt:"\uc548\ub155\ud558\uc138\uc694",width:600})}),(0,i.jsx)(l.Ym,{children:(0,i.jsx)(l.u5,{color:"primary",onClick:()=>a(!1),children:"Cancel"})})]})};var c=a(72426),d=a.n(c),m=a(46327);const u=a.p+"static/media/defaultImg.932a0a87e8b47c36eefa.png";var p,_=a(30168),h=a(38357),A=a(72669),N=a(31773),E=a(75358),T=a(44801),L=a(6793);const{Option:g}=h.default,x=e=>{var t;let{options:a,datePicker:s}=e;const[l,n]=(0,r.useState)({key:"createdAt",value:"",children:""}),{RangePicker:o}=A.default;(0,r.useEffect)((()=>{a&&n(a[0])}),[]),d().locale("ko");return(0,i.jsx)(b,{children:(0,i.jsxs)(N.Z,{children:[a&&(null===a||void 0===a?void 0:a.length)>1&&(0,i.jsx)(h.default,{value:l.value||(null===(t=a[0])||void 0===t?void 0:t.value),onChange:(e,t)=>{n(t)},children:a.map((e=>{let{value:t,key:a}=e;return(0,i.jsx)(g,{value:t,children:t},a)}))}),(0,i.jsx)(E.ZP,{locale:L.Z,children:(0,i.jsx)(N.Z,{direction:"vertical",children:(0,i.jsx)(o,{allowClear:!0,onChange:e=>{e?s(d()(e[0].$d).format("YYYY-MM-DD"),d()(e[1].$d).format("YYYY-MM-DD"),l):s("","",{})}})})})]})})},b=(0,T.ZP)(l.b7)(p||(p=(0,_.Z)(["\n  display: flex;\n  flex-direction: row;\n  align-content: end;\n  justify-content: end;\n  height: 100%;\n  width: 100%;\n"]))),R=e=>{let{items:t,onClick:a,columns:c,className:p,onDelete:_,selectedOptions:h,datePickerHidden:A=!0,itemPerPageHidden:N=!0,searchInputHidden:E=!0,checkBoxInputHidden:T=!1,func:L,datePickerOptions:g,notFilter:b}=e;const[R,S]=(0,r.useState)([]),[y,j]=(0,r.useState)(),[I,P]=(0,r.useState)(!1),[f,M]=(0,r.useState)(""),[v,C]=(0,r.useState)(""),[D,k]=(0,r.useState)(""),[O,Y]=(0,r.useState)(!1),[H,U]=(0,r.useState)(""),[w,G]=(0,r.useState)(""),q={key:"checkBox",label:(0,i.jsx)(l.EC,{id:"allSelected",type:"checkbox",onChange:e=>(Y(!O),void S(R.map((e=>({...e,checked:!O}))))),checked:O}),_props:{className:"checkBox"},sorter:!1,filter:!1},Z=e=>{switch(e){case"ACTIVE":return"success";case"INACTIVE":return"danger";case!0:return"success";case!1:return"danger";default:return"primary"}},B=e=>{switch(e){case"ACTIVE":return"\ud65c\uc131\ud654";case"INACTIVE":return"\ube44\ud65c\uc131\ud654";case!0:return"\uc644\ub8cc";case!1:return"\ubbf8\uc644\ub8cc";default:return"\uae30\ud0c0"}},F=(e,t)=>{e.stopPropagation(),P(!I),M(t)};(0,r.useEffect)((()=>{S(t)}),[t]);const Q=(e,t)=>{if(e&&t)return"YYYY-MM-DD"===t||"YYYYMMDDHHmmss"===t?d()(e,t).format("YYYY-MM-DD"):void 0};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l.rb,{className:"justify-content-end align-items-end pb-2",children:A&&(0,i.jsx)(x,{datePicker:(e,t,a)=>{let{key:r}=a;if(t){const a=R.filter((a=>{const s=Q(a[r],"YYYYMMDDHHmmss");return s>=e&&s<=t}));j(a),G(e),U(t)}else j(""),G(""),U("")},options:g})}),(0,i.jsx)(s.u,{items:y||R,columns:T?[q,...c]:c||null,columnSorter:!0,pagination:!0,clickableRows:!0,columnFilter:!b,paginationProps:{limit:10},tableHeadProps:{id:"smTable"},onRowClick:a,tableProps:{hover:!0,responsive:!0,striped:!0,align:"middle",className:p},scopedColumns:{userId:(e,a)=>(0,i.jsx)("td",{children:t.length-a}),bannerId:(e,a)=>(0,i.jsx)("td",{children:t.length-a}),inquiryId:(e,a)=>(0,i.jsx)("td",{children:t.length-a}),faqId:(e,a)=>(0,i.jsx)("td",{children:t.length-a}),dataRoomId:(e,a)=>(0,i.jsx)("td",{children:t.length-a}),orderId:(e,a)=>(0,i.jsx)("td",{children:t.length-a}),orderCancelId:(e,a)=>(0,i.jsx)("td",{children:t.length-a}),orderExchangeId:(e,a)=>(0,i.jsx)("td",{children:t.length-a}),checkBox:e=>(0,i.jsx)("td",{onClick:e=>e.stopPropagation(),children:(0,i.jsx)(l.EC,{onChange:()=>(e=>{S(R.map((t=>t._id===e._id?{...t,checked:!e.checked}:t))),e.checked?e.checked=!1:e.checked=!0})(e),checked:e.checked||!1})}),isAuthorized:e=>(0,i.jsx)("td",{onClick:e=>e.stopPropagation(),children:(0,i.jsx)(l.EC,{onChange:()=>(async e=>{const t=await L(e);if(H){const e=t.filter((e=>{const t=Q(e.createdAt,"YYYYMMDDHHmmss");return t>=w&&t<=H}));j(e)}else j("")})(e),checked:e.isAuthorized||!1})}),name:e=>{let{name:t}=e;return(0,i.jsx)("td",{children:(0,m.Cd)(t,1,"right")})},phoneNumber:e=>{let{phoneNumber:t}=e;return(0,i.jsx)("td",{children:(0,m.Cd)(t,4,"right")})},email:e=>{let{email:t}=e;return(0,i.jsx)("td",{children:(0,m.Cd)(t,1,"left")})},status:e=>{let{status:t}=e;return(0,i.jsx)("td",{children:(0,i.jsx)(l.C_,{size:"sm",color:Z(t),children:B(t)})})},reply:e=>{let{reply:t}=e;return(0,i.jsx)("td",{children:(0,i.jsx)(l.C_,{size:"sm",color:Z(t),children:B(t)})})},hasReply:e=>{let{hasReply:t}=e;return(0,i.jsx)("td",{children:(0,i.jsx)(l.C_,{size:"sm",color:Z(t),children:B(t)})})},image:e=>{let{image:t}=e;return(0,i.jsx)("td",{children:t?(0,i.jsx)(l.DW,{rounded:!0,thumbnail:!0,src:t,alt:""}):(0,i.jsx)(l.DW,{rounded:!0,thumbnail:!0,src:u,alt:""})})},images:e=>{let{images:t}=e;return(0,i.jsx)("td",{onClick:e=>0!==t.length?F(e,t):a,children:(0,i.jsx)(l.DW,{rounded:!0,src:0===t.length?"":t[0],alt:"",width:100,height:60})})},deleteBtn:e=>(0,i.jsx)("td",{onClick:t=>((e,t)=>{e.stopPropagation(),_(t)})(t,e),children:(0,i.jsx)(l.C_,{color:"danger",children:"\uc0ad\uc81c"})}),jobType:e=>{let{jobType:t}=e;return(0,i.jsx)("td",{children:h?h[t]:""})},education:e=>{let{education:t}=e;return(0,i.jsx)("td",{children:h?h[t]:""})},inquiryType:e=>{let{inquiryType:t}=e;return(0,i.jsx)("td",{children:h?h[t]:""})},career:e=>{let{career:t}=e;return(0,i.jsx)("td",{children:h?h[t]:""})},deliveryStatus:e=>{let{deliveryStatus:t}=e;return(0,i.jsx)("td",{children:(0,i.jsxs)(l.C_,{color:"primary",children:[h?h[t]:"Not Data"," "]})})},productImg:e=>{let{productImg:t}=e;return(0,i.jsx)("td",{children:(0,i.jsx)(l.DW,{rounded:!0,src:t||"",alt:"",width:100,height:60})})},totalPrice:e=>{let{totalPrice:t}=e;return(0,i.jsx)("td",{className:"totalPrice",children:(0,m.ks)(t)})},orderItemPrice:e=>{let{orderItemPrice:t}=e;return(0,i.jsx)("td",{className:"orderItemPrice",children:(0,m.ks)(t)})},startedAt:e=>{let{startedAt:t}=e;return(0,i.jsx)("td",{children:d()(t,"YYYYMMDDHHmmss").format("YYYY. MM. DD")})},closedAt:e=>{let{closedAt:t}=e;return(0,i.jsx)("td",{children:d()(t,"YYYYMMDDHHmmss").format("YYYY. MM. DD")})},createdAt:e=>{let{createdAt:t}=e;return(0,i.jsx)("td",{children:d()(t,"YYYYMMDDHHmmss").format("YYYY. MM. DD")})},deletedAt:e=>{let{deletedAt:t}=e;return(0,i.jsx)("td",{children:d()(t,"YYYYMMDDHHmmss").format("YYYY. MM. DD")})},updatedAt:e=>{let{updatedAt:t}=e;return(0,i.jsx)("td",{children:d()(t,"YYYYMMDDHHmmss").format("YYYY. MM. DD")})},orderDate:e=>{let{orderDate:t}=e;return(0,i.jsx)("td",{children:d()(t,"YYYYMMDDHHmmss").format("YYYY. MM. DD")})},payDate:e=>{let{payDate:t}=e;return(0,i.jsx)("td",{children:d()(t,"YYYYMMDDHHmmss").format("YYYY. MM. DD")})},noticeFiles:e=>{let{noticeFiles:t}=e;return(0,i.jsxs)("td",{children:[null===t||void 0===t?void 0:t.length," \uac1c"]})},imageUrls:e=>{let{imageUrls:t}=e;return(0,i.jsx)("td",{onClick:e=>0!==t.length&&"."!==t[0]?F(e,t[0]):a,children:0===t.length||"."===t[0]?"":(0,i.jsx)(l.DW,{rounded:!0,src:(0,n.J0)(t[0]),alt:(0,n.J0)(t[0]),width:100,height:60})})},invoiceNum:e=>(0,i.jsx)("td",{onClick:t=>L(e,t,"invoiceNum"),children:(null===e||void 0===e?void 0:e.invoiceNum)||"\uc1a1\uc7a5\ubc88\ud638 \uc785\ub825"}),processingStatus:e=>(0,i.jsx)("td",{onClick:t=>L(e,t,"processingStatus"),children:(null===e||void 0===e?void 0:e.processingStatus)||""})},noItemsLabel:"\ub370\uc774\ud130\uac00 \uc5c6\uc2b5\ub2c8\ub2e4.",itemsPerPage:20}),I?(0,i.jsx)(o,{visible:I,setVisible:P,onClick:()=>{P(!I)},url:f}):""]})}},96672:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n,w:()=>l});var r=a(61044),s=a(46327);const l={GET:"get",POST:"post",PUT:"put",PATCH:"patch"};class n{static request(e){let{data:t,query:a,path:n,method:i,url:o}=e;try{if((0,s.xb)(i)||(0,s.xb)(o))return void alert("HTTP Method \uc640 URL \uc744 \ud655\uc778\ud574\uc8fc\uc138\uc694.");if(n)for(const[t,a]of Object.entries(n))o=o.replace(":".concat(t),a);(0,s.xb)(a)||(o+="?"+Object.keys(a).map((e=>e+"="+a[e])).join("&"));const e={accept:"application/json","Content-Type":"application/json","X-Access-Token":window.sessionStorage.getItem("jwt")};switch(i){case l.GET:return r.ZP.get(o,{headers:e});case l.POST:return r.ZP.post(o,t,{headers:e});case l.PATCH:return r.ZP.patch(o,t,{headers:e});case l.PUT:return r.ZP.put(o,t,{headers:e})}}catch(c){alert(c.message)}}}},19311:(e,t,a)=>{"use strict";a.d(t,{l:()=>s});const r="https://api.okpos.co.kr",s={GET_V1_TEST_AUTO_LOGIN:"".concat(r,"/test/v1/jwt/check/:isManual"),POST_LOGIN:"".concat(r,"/admin/login"),POST_TEST_V1_REGISTER:"".concat(r,"/test/v1/register"),RECRUITMENT:"".concat(r,"/admin/recruitments"),TALENTPOOL:"".concat(r,"/admin/talents"),EDITOR:"".concat(r,"/admin/editor"),HOME_INQUIRY:"".concat(r,"/admin/inquiries"),ENGLISH_HOME_INQUIRY:"".concat(r,"/admin/english/inquiries"),NOTICE:"".concat(r,"/admin/notices"),DATA_ROOM:"".concat(r,"/admin/english/datarooms"),HOME_BANNER:"".concat(r,"/admin/banners"),ENGLISH_BANNER:"".concat(r,"/admin/english/banners"),PARTNER_USERS:"".concat(r,"/admin/partner/users"),PARTNER_INACTIVE_USERS:"".concat(r,"/admin/partner/users/inactive"),PARTNER_INQUIRIES:"".concat(r,"/admin/partner/inquiries"),PARTNER_NOTICES:"".concat(r,"/admin/partner/notices"),PARTNER_AGENCYAPPLICANT:"".concat(r,"/admin/partner/notices/agencyApplicant"),PARTNER_DATAROOMS:"".concat(r,"/admin/partner/dataRooms"),PARTNER_ORDERS:"".concat(r,"/admin/partner/orders"),PARTNER_MAINTENANCES:"".concat(r,"/admin/partner/maintenances"),PARTNER_SCHEDULES:"".concat(r,"/admin/partner/educations/schedules"),PARTNER_REGISTRAUINS:"".concat(r,"/admin/partner/educations/registrations"),PARTNER_REGISTRAUINS_NOTICES:"".concat(r,"/admin/partner/educations/registrations/notices"),GET_MALL_USERS:"".concat(r,"/admin/mall/users"),GET_MALL_USER:"".concat(r,"/admin/mall/users/:userId"),GET_MALL_RESIGNUSERS:"".concat(r,"/admin/mall/users/resign"),GET_MALL_RESIGNUSER:"".concat(r,"/admin/mall/users/resign/:userId"),GET_MALL_INQUIRIES:"".concat(r,"/admin/mall/inquiries"),GET_MALL_INQUIRY:"".concat(r,"/admin/mall/inquiries/:inquiryId"),POST_MALL_INQUIRY_REPLY:"".concat(r,"/admin/mall/inquiries/:inquiryId/reply"),PATCH_MALL_UPDATE_INQUIRY_REPLY:"".concat(r,"/admin/mall/inquiries/:inquiryReplyId/reply"),PATCH_MALL_DELETE_INQUIRY:"".concat(r,"/admin/mall/inquiries/:inquiryId/status"),GET_MALL_FAQS:"".concat(r,"/admin/mall/faqs"),GET_MALL_FAQ:"".concat(r,"/admin/mall/faqs/:faqId"),POST_MALL_FAQ:"".concat(r,"/admin/mall/faqs"),PATCH_MALL_UPDATE_FAQ:"".concat(r,"/admin/mall/faqs/:faqId"),PATCH_MALL_DELETE_FAQ:"".concat(r,"/admin/mall/faqs/:faqId/status"),GET_MALL_DATAROOMS:"".concat(r,"/admin/mall/datarooms"),GET_MALL_DATAROOM:"".concat(r,"/admin/mall/datarooms/:dataRoomId"),POST_MALL_DATAROOM:"".concat(r,"/admin/mall/datarooms"),PATCH_MALL_UPDATE_DATAROOM:"".concat(r,"/admin/mall/datarooms/:dataRoomId"),PATCH_MALL_DELETE_DATAROOM:"".concat(r,"/admin/mall/datarooms/:dataRoomId/status"),GET_MALL_BANNERS:"".concat(r,"/admin/mall/banners"),GET_MALL_BANNER:"".concat(r,"/admin/mall/banners/:bannerId"),POST_MALL_BANNER:"".concat(r,"/admin/mall/banners"),PATCH_MALL_UPDATE_BANNER:"".concat(r,"/admin/mall/banners/:bannerId"),PATCH_MALL_DELETE_BANNER:"".concat(r,"/admin/mall/banners/:bannerId/status"),GET_MALL_ORDERS:"".concat(r,"/admin/mall/orders"),GET_MALL_CANCEL_ORDERS:"".concat(r,"/admin/mall/orders/cancel"),GET_MALL_EXCHANGE_ORDERS:"".concat(r,"/admin/mall/orders/exchange"),PATCH_MALL_ORDERS_STATUS:"".concat(r,"/admin/mall/orders/:orderItemId"),POST_MALL_ORDERS_STATUS:"".concat(r,"/admin/mall/orders/:orderItemId"),PATCH_MALL_ORDERS_INVOICE:"".concat(r,"/admin/mall/orders/:orderItemId/invoice"),PATCH_MALL_CANCEL_ORDERS_STATUS:"".concat(r,"/admin/mall/orders/:orderCancelId/cancel"),PATCH_MALL_EXCHANGE_ORDERS_STATUS:"".concat(r,"/admin/mall/orders/:orderExchangeId/exchange"),GET_MALL_NOTICES:"".concat(r,"/admin/mall/notices"),GET_MALL_NOTICE:"".concat(r,"/admin/mall/notices/:noticeId"),POST_MALL_NOTICE:"".concat(r,"/admin/mall/notices"),PATCH_MALL_NOTICE:"".concat(r,"/admin/mall/notices/:noticeId"),DELETE_MALL_NOTICE:"".concat(r,"/admin/mall/notices/:noticeId/d"),POST_REGISTER:"".concat(r,"/admin/join")};s.GET_V1_TEST_AUTO_LOGIN,s.GET_MALL_USERS,s.GET_MALL_USER,s.GET_MALL_RESIGNUSERS,s.GET_MALL_RESIGNUSER,s.GET_MALL_INQUIRIES,s.GET_MALL_INQUIRY,s.GET_MALL_FAQS,s.GET_MALL_FAQ,s.GET_MALL_DATAROOMS,s.GET_MALL_DATAROOM,s.GET_MALL_BANNERS,s.GET_MALL_BANNER,s.GET_MALL_ORDERS,s.GET_MALL_CANCEL_ORDERS,s.GET_MALL_EXCHANGE_ORDERS,s.GET_MALL_NOTICES,s.GET_MALL_NOTICE,s.PARTNER_USERS,s.PARTNER_INACTIVE_USERS,s.PARTNER_INQUIRIES,s.PARTNER_NOTICES,s.PARTNER_AGENCYAPPLICANT,s.PARTNER_ORDERS,s.PARTNER_MAINTENANCES,s.PARTNER_SCHEDULES,s.PARTNER_REGISTRAUINS,s.PARTNER_REGISTRAUINS_NOTICIES,s.POST_LOGIN,s.POST_REGISTER,s.POST_MALL_INQUIRY_REPLY,s.POST_MALL_FAQ,s.POST_MALL_DATAROOM,s.POST_MALL_BANNER,s.POST_MALL_ORDERS_STATUS,s.POST_MALL_NOTICE,s.PATCH_MALL_UPDATE_INQUIRY_REPLY,s.PATCH_MALL_DELETE_INQUIRY,s.PATCH_MALL_UPDATE_FAQ,s.PATCH_MALL_DELETE_FAQ,s.PATCH_MALL_UPDATE_DATAROOM,s.PATCH_MALL_DELETE_DATAROOM,s.PATCH_MALL_UPDATE_BANNER,s.PATCH_MALL_DELETE_BANNER,s.PATCH_MALL_ORDERS_STATUS,s.PATCH_MALL_ORDERS_INVOICE,s.PATCH_MALL_CANCEL_ORDERS_STATUS,s.PATCH_MALL_EXCHANGE_ORDERS_STATUS,s.PATCH_MALL_NOTICE,s.DELETE_MALL_NOTICE},97405:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>y});var r,s,l=a(72791),n=a(78983),i=a(70844),o=a(20961),c=a(46819),d=a(96672),m=a(19311),u=a(46327),p=a(57689),_=(a(763),a(30168)),h=a(68005),A=a(33809),N=a(74912),E=a.n(N),T=a(79286),L=a(76030),g=a(44801),x=a(80184);const b=e=>{let{image:t,onChangeImage:a,label:r,id:s,disabled:l,filePath:i,isRequired:o}=e;const c=(0,x.jsxs)("div",{children:[(0,x.jsx)(T.Z,{}),(0,x.jsx)("div",{style:{marginTop:8},children:"Upload"})]}),d={name:"avatar",listType:"picture-card",className:"avatar-uploader",showUploadList:!1,disabled:l,image:t,beforeUpload:e=>{const t="image/jpeg"===e.type||"image/png"===e.type;t||window.alert("\uc62c\ubc14\ub978 \ud655\uc7a5\uc790\uac00 \uc544\ub2d9\ub2c8\ub2e4 (JPG/PNG)");const a=e.size/1024/1024<10;return a||h.ZP.error("\uc0ac\uc774\uc988 \uc6a9\ub7c9 \ucd08\uacfc (10MB)"),t&&a},customRequest(e){(e=>{let{file:t,onError:a,onProgress:r,onSuccess:s}=e;E().config.update({region:"ap-northeast-2",accessKeyId:"AKIAWS5VDTBO5PU3SWMV",secretAccessKey:"F4sf4N/+4p1fKQiybA6P5lIcD2e2S6PjMfTePA/J"});const l=new(E().S3),n=t.name.replaceAll(" ",""),o={Bucket:(0,L.DK)(i),Key:n,Body:t,ContentType:t.type};l.putObject(o).on("httpUploadProgress",(e=>{let{loaded:t,total:a}=e;return r({percent:t/a*100})})).promise().then((function(e){s(e.$response)}),(function(e){a(),console.log(e.code),console.log(e.message)}))})(e)},onSuccess(e){(e=>{const t=e.request.httpRequest,r=t.body,{protocol:s,host:l}=t.endpoint,n={uid:e.request.params.Key,name:r.name,status:"done",url:"".concat(s,"//").concat(l).concat(t.path)};a(n.url)})(e)},onRemove(e){a("")}};return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(n.L8,{htmlFor:"".concat(s,"Static"),className:"col-sm-2 col-form-label",children:(0,x.jsx)("span",{className:o?"required":"",children:r||" * "})}),(0,x.jsx)(n.b7,{className:"align-items-center col-sm-10",style:{display:"flex"},children:(0,x.jsx)(A.Z,{...d,children:t?(0,x.jsx)("img",{src:t,alt:"avatar",style:{width:"100%"}}):c})}),t&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(n.L8,{className:"col-sm-2 col-form-label",children:(0,x.jsx)("span",{children:"\uc774\ubbf8\uc9c0 \ubcf4\uae30"})}),(0,x.jsx)(n.b7,{className:"align-items-center col-sm-10",children:(0,x.jsx)(n.DW,{rounded:!0,fluid:!0,src:t})})]})]})};(0,g.ZP)(n.b7)(r||(r=(0,_.Z)(["\n  padding: 0.5rem 0;\n  background: #fafafa;\n  border: 1px dashed #d9d9d9;\n  border-radius: 2px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  div {\n    width: 75%;\n\n    & img {\n      max-width: 100%;\n      height: auto;\n      cursor: pointer;\n      max-height: 600px;\n    }\n  }\n"]))),g.ZP.div(s||(s=(0,_.Z)(["\n  width: 100%;\n  padding: 0 5px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n"])));var R=a(3854);a(86385);const S=e=>{let{item:t,onChange:a,onChangeImage:r,onUpdate:s,onDelete:i,visible:o,setVisible:c,isReadOnly:d,setIsReadOnly:m,isUpdate:u,setIsUpdate:p}=e;let _="\ubc30\ub108 \ucd94\uac00";u&&(_="\ubc30\ub108 \uc218\uc815"),d&&(_="\ubc30\ub108 \uc0c1\uc138 \ub0b4\uc6a9");const[h,A]=(0,l.useState)("");return(0,l.useEffect)((()=>{var e;null!==t&&void 0!==t&&t.image&&A(null===t||void 0===t||null===(e=t.image)||void 0===e?void 0:e.split(".com/")[1])}),[t]),(0,x.jsxs)(n.Tk,{size:"lg",visible:o,onClose:()=>c(!1),children:[(0,x.jsx)(n.p0,{children:(0,x.jsx)(n.fl,{children:_})}),(0,x.jsx)(n.sD,{children:(0,x.jsxs)(n.lx,{children:[(0,x.jsx)(n.rb,{className:"p-2",children:(d||u)&&(0,x.jsx)(R.Z,{id:"bannerId",placeholder:"",label:"No",value:t.no||"",readOnly:!0,disabled:!0})}),(0,x.jsx)(n.rb,{className:"p-2",children:(0,x.jsx)(R.Z,{id:"title",placeholder:"\ubc30\ub108 \ud0c0\uc774\ud2c0",label:"\ubc30\ub108 \ud0c0\uc774\ud2c0",value:t.title||"",onChange:a,readOnly:d,disabled:d,isRequired:!0})}),(0,x.jsx)(n.rb,{className:"p-2",children:(0,x.jsx)(R.Z,{id:"subTitle",placeholder:"\uc11c\ube0c \ud0c0\uc774\ud2c0",label:"\uc11c\ube0c \ud0c0\uc774\ud2c0",value:t.subTitle||"",onChange:a,readOnly:d,disabled:d,isRequired:!0})}),(0,x.jsx)(n.rb,{className:"p-2",children:(0,x.jsx)(b,{id:"image",placeholder:"\uc774\ubbf8\uc9c0",label:"\uc774\ubbf8\uc9c0",image:t.image||"",onChangeImage:r,readOnly:d,disabled:d,imgPath:"mall/banner_images",isRequired:!0})})]})}),(0,x.jsxs)(n.Ym,{children:[!d&&!u&&(0,x.jsx)(n.u5,{onClick:s,color:"primary",children:"\ucd94\uac00"}),u&&(0,x.jsx)(n.u5,{onClick:s,color:"primary",children:"\uc800\uc7a5"}),d&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(n.u5,{color:d?"primary":"success",onClick:()=>{m(!1),p(!0)},children:"\uc218\uc815"}),(0,x.jsx)(n.u5,{onClick:i,color:"danger",children:"\uc0ad\uc81c"})]}),(0,x.jsx)(n.u5,{color:"secondary",onClick:()=>c(!1),children:"\ucde8\uc18c"})]})]})},y=()=>{const e=(0,p.s0)(),[t,a]=(0,l.useState)([]),[r,s]=(0,l.useState)({title:"",subTitle:"",image:""}),[_,h]=(0,l.useState)(!1),[A,N]=(0,l.useState)(!1),[E,T]=(0,l.useState)(!1),L=async()=>{try{const{data:t}=await d.Z.request({method:d.w.GET,url:m.l.GET_MALL_BANNERS});null!==t&&void 0!==t&&t.isSuccess&&!(0,u.xb)(null===t||void 0===t?void 0:t.result)||(2014===(null===t||void 0===t?void 0:t.code)?e("/login"):alert(null===t||void 0===t?void 0:t.message)),a(t.result.bannerInfos.map(((e,a)=>({...e,no:t.result.bannerInfos.length-a}))))}catch(t){alert("\ub124\ud2b8\uc6cc\ud06c \ud1b5\uc2e0 \uc2e4\ud328. \uc7a0\uc2dc\ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4\ud574\uc8fc\uc138\uc694.")}};(0,l.useEffect)((()=>{L()}),[]);const g=()=>({title:"",subTitle:"",image:""});return(0,x.jsxs)(n.rb,{children:[(0,x.jsx)(o.Z,{title:"\ubc30\ub108 \uad00\ub9ac"}),(0,x.jsx)(n.b7,{xs:12,children:(0,x.jsxs)(n.xH,{className:"mb-4",children:[(0,x.jsx)(n.bn,{children:(0,x.jsx)(n.lx,{className:"row g-3",children:(0,x.jsx)(n.b7,{xs:1,children:(0,x.jsxs)(n.u5,{color:"primary",onClick:()=>{if(t.length>=5)return alert("\ubc30\ub108\ub294 \ucd5c\ub300 5\uac1c\uae4c\uc9c0 \ub9cc\ub4e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4.");s(g),h(!1),N(!1),T(!E)},children:["\ucd94\uac00 ",t.length," / 5"]})})})}),(0,x.jsx)(n.sl,{children:(0,x.jsx)(i.Z,{items:t,onClick:t=>{(async(t,a)=>{try{const{data:r}=await d.Z.request({method:d.w.GET,url:m.l.GET_MALL_BANNER,path:{bannerId:t}});if(null===r||void 0===r||!r.isSuccess||(0,u.xb)(null===r||void 0===r?void 0:r.result))return void(2014===(null===r||void 0===r?void 0:r.code)?e("/login"):alert(null===r||void 0===r?void 0:r.message));r.result.bannerId=t,s({...r.result,no:a})}catch(r){alert("\ub124\ud2b8\uc6cc\ud06c \ud1b5\uc2e0 \uc2e4\ud328. \uc7a0\uc2dc\ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4\ud574\uc8fc\uc138\uc694.")}})(t.bannerId,t.no),h(!0),N(!1),T(!E)},columns:c._y,className:"bannerList",datePickerHidden:!1,searchInputHidden:!1})})]})}),(0,x.jsx)(S,{item:r,onUpdate:async()=>{const{bannerId:a,title:l,subTitle:n,image:i}=r;if(!l)return alert("\ubc30\ub108 \ud0c0\uc774\ud2c0\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694.");if(l.length>30)return alert("\ubc30\ub108 \ud0c0\uc774\ud2c0 \uae00\uc790\uc218 \ucd08\uacfc\uc785\ub2c8\ub2e4.(30\uc790)");if(!n)return alert("\uc11c\ube0c \ud0c0\uc774\ud2c0\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694.");if(n>15)return alert("\uc11c\ube0c \ud0c0\uc774\ud2c0 \uae00\uc790\uc218 \ucd08\uacfc\uc785\ub2c8\ub2e4.(15\uc790)");if(!i)return alert("\uc774\ubbf8\uc9c0\ub97c \ub4f1\ub85d\ud574\uc8fc\uc138\uc694.");if(window.confirm("\uc800\uc7a5 \ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")){if(a)await(async t=>{try{const{data:a}=await d.Z.request({method:d.w.PATCH,url:m.l.PATCH_MALL_UPDATE_BANNER,path:{bannerId:t.bannerId},data:{title:t.title,subTitle:t.subTitle,image:t.image}});if(null===a||void 0===a||!a.isSuccess)return void(2014===(null===a||void 0===a?void 0:a.code)?e("/login"):alert(null===a||void 0===a?void 0:a.message));alert(null===a||void 0===a?void 0:a.message),s(t),h(!0),N(!1)}catch(a){alert("\ub124\ud2b8\uc6cc\ud06c \ud1b5\uc2e0 \uc2e4\ud328. \uc7a0\uc2dc\ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4\ud574\uc8fc\uc138\uc694.")}})(r);else{if(t.length>=5)return alert("\ubc30\ub108\ub294 \ucd5c\ub300 5\uac1c\uae4c\uc9c0 \ub9cc\ub4e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4.");await(async t=>{try{const{data:a}=await d.Z.request({method:d.w.POST,url:m.l.POST_MALL_BANNER,data:{title:t.title,subTitle:t.subTitle,image:t.image}});if(null===a||void 0===a||!a.isSuccess)return void(2014===(null===a||void 0===a?void 0:a.code)?e("/login"):alert(null===a||void 0===a?void 0:a.message));alert("\ubc30\ub108\uac00 \ucd94\uac00\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),T(!1),s(g)}catch(a){alert("\ub124\ud2b8\uc6cc\ud06c \ud1b5\uc2e0 \uc2e4\ud328. \uc7a0\uc2dc\ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4\ud574\uc8fc\uc138\uc694.")}})(r)}await L()}},onDelete:()=>{window.confirm("\uc815\ub9d0 \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")&&(async t=>{try{const{data:a}=await d.Z.request({method:d.w.PATCH,url:m.l.PATCH_MALL_DELETE_BANNER,path:{bannerId:t}});null!==a&&void 0!==a&&a.isSuccess||(2014===(null===a||void 0===a?void 0:a.code)?e("/login"):alert(null===a||void 0===a?void 0:a.message)),alert(null===a||void 0===a?void 0:a.message)}catch(a){alert("\ub124\ud2b8\uc6cc\ud06c \ud1b5\uc2e0 \uc2e4\ud328. \uc7a0\uc2dc\ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4\ud574\uc8fc\uc138\uc694.")}})(r.bannerId).then(L,T(!1))},onChange:e=>{const{id:t,value:a}=e.target;s({...r,[t]:a})},onChangeImage:e=>{s({...r,image:e})},visible:E,setVisible:T,isReadOnly:_,setIsReadOnly:h,isUpdate:A,setIsUpdate:N})]})}},76030:(e,t,a)=>{"use strict";a.d(t,{AA:()=>s,DK:()=>n,HU:()=>r,J0:()=>l});const r=e=>e.map((e=>e.url.split(".com/")[1])),s=e=>"".concat("homepage-prod-resource","/admin/images/").concat(e),l=e=>e.includes("https://")?e:"https://".concat("homepage-prod-resource",".s3.").concat("ap-northeast-2",".amazonaws.com/").concat(e),n=e=>"".concat("homepage-prod-resource","/admin/files/").concat(e)},46819:(e,t,a)=>{"use strict";a.d(t,{Po:()=>c,Tv:()=>i,W_:()=>d,_y:()=>_,g1:()=>l,kg:()=>n,lJ:()=>o,t5:()=>u,vb:()=>p,xL:()=>m});var r=a(78983),s=a(80184);const l=[{key:"no",label:"No",sorter:!1,filter:!1,_props:{className:"no"}},{key:"name",label:"\uc774\ub984",_props:{className:"name"}},{key:"email",label:"\uc774\uba54\uc77c",_props:{className:"email"}},{key:"phoneNumber",label:"\ud734\ub300\uc804\ud654\ubc88\ud638",_props:{className:"phoneNumber"}},{key:"createdAt",label:"\ucd5c\ucd08\ub4f1\ub85d\uc77c",sorter:!1,filter:!1,_props:{className:"createdAt"}},{key:"status",label:"\uc0c1\ud0dc",sorter:!1,filter:!1,_props:{className:"status"}}],n=[{key:"no",label:"No",sorter:!1,filter:!1,_props:{className:"no"}},{key:"name",label:"\uc774\ub984",_props:{className:"name"}},{key:"email",label:"\uc774\uba54\uc77c",_props:{className:"email"}},{key:"phoneNumber",label:"\ud734\ub300\uc804\ud654\ubc88\ud638",_props:{className:"phoneNumber"}},{key:"resignReason",label:"\ud0c8\ud1f4\uc0ac\uc720",_props:{className:"resignReason"}},{key:"createdAt",label:"\ucd5c\ucd08\ub4f1\ub85d\uc77c",sorter:!1,filter:!1,_props:{className:"createdAt"}},{key:"updatedAt",label:"\uacc4\uc815\ud0c8\ud1f4\uc77c",sorter:!1,filter:!1,_props:{className:"updatedAt"}},{key:"status",label:"\uc0c1\ud0dc",sorter:!1,filter:!1,_props:{className:"status"}}],i=[{key:"no",label:"No",sorter:!1,filter:!1,_props:{className:"no"}},{key:"category",label:"\uce74\ud14c\uace0\ub9ac",_props:{className:"category"}},{key:"title",label:"\uc81c\ubaa9",_props:{className:"title"}},{key:"name",label:"\uc774\ub984",_props:{className:"name"}},{key:"phoneNumber",label:"\ud734\ub300\uc804\ud654\ubc88\ud638",_props:{className:"phoneNumber"}},{key:"reply",label:"\ub2f5\ubcc0",sorter:!1,filter:!1,_props:{className:"reply"}}],o=[{key:"no",label:"No",sorter:!1,filter:!1,_props:{className:"no"}},{key:"category",label:"\uce74\ud14c\uace0\ub9ac",_props:{className:"category"}},{key:"title",label:"\uc81c\ubaa9",_props:{className:"title"}}],c=[{key:"no",label:"No",sorter:!1,filter:!1,_props:{className:"no"}},{key:"category",label:"\uce74\ud14c\uace0\ub9ac",_props:{className:"category"}},{key:"title",label:"\uc81c\ubaa9",_props:{className:"title"}},{key:"createdAt",label:"\uc791\uc131\uc77c",sorter:!1,filter:!1,_props:{className:"createdAt"}}],d=[{key:"no",label:"No",sorter:!1,filter:!1,_props:{className:"no"}},{key:"orderNumber",label:"\uc8fc\ubb38\ubc88\ud638",sorter:!1,_props:{className:"orderNumber"}},{key:"receiver",label:"\uc218\ucde8\uc778",sorter:!1,_props:{className:"receiver"}},{key:"phoneNumber",label:"\ud734\ub300\uc804\ud654\ubc88\ud638",sorter:!1,_props:{className:"phoneNumber"}},{key:"totalPrice",label:"\uc8fc\ubb38\ucd1d\uc561",filter:!1,_props:{className:"totalPrice"}},{key:"orderDate",label:"\uc8fc\ubb38\uc77c",sorter:!1,filter:!1,_props:{className:"orderDate"}}],m=[{key:"radioButton",label:"",sorter:!1,filter:!1,_props:{className:"radioButton"}},{key:"itemName",label:"\uc81c\ud488\uba85",sorter:!1,filter:!1,_props:{className:"itemName"}},{key:"orderItemCount",sorter:!1,filter:!1,label:"\uc81c\ud488\uc218\ub7c9",_props:{className:"orderItemCount"}},{key:"orderItemPrice",sorter:!1,filter:!1,label:"\uc81c\ud488\uac00\uaca9",_props:{className:"orderItemPrice"}},{key:"orderStatus",label:"\uc81c\ud488\uc0c1\ud0dc",sorter:!1,filter:!1,_props:{className:"orderStatus"}},{key:"invoiceNumber",sorter:!1,filter:!1,label:"\uc1a1\uc7a5\ubc88\ud638",_props:{className:"invoiceNumber"}}],u=[{key:"no",label:"No",sorter:!1,filter:!1,_props:{className:"no"}},{key:"orderNumber",label:"\uc8fc\ubb38\ubc88\ud638",sorter:!1,_props:{className:"orderNumber"}},{key:"itemName",label:"\uc81c\ud488\uba85",sorter:!1,_props:{className:"itemName"}},{key:"receiver",label:"\uc218\ucde8\uc778",sorter:!1,_props:{className:"receiver"}},{key:"cancelPrice",label:"\ucde8\uc18c\uae08\uc561",filter:!1,_props:{className:"cancelPrice"}},{key:"cancelDate",label:"\ucde8\uc18c \uc694\uccad\uc77c",sorter:!1,filter:!1,_props:{className:"cancelDate"}},{key:"orderStatus",label:"\uc8fc\ubb38\uc0c1\ud0dc",sorter:!1,filter:()=>(0,s.jsxs)(r.LX,{size:"sm",children:[(0,s.jsx)("option",{children:"\uc8fc\ubb38\uc0c1\ud0dc \uc120\ud0dd"}),(0,s.jsx)("option",{value:"\uacb0\uc81c \ub300\uae30",children:"\uacb0\uc81c \ub300\uae30"}),(0,s.jsx)("option",{value:"\uacb0\uc81c \uc644\ub8cc",children:"\uacb0\uc81c \uc644\ub8cc"}),(0,s.jsx)("option",{value:"\ubc30\uc1a1 \uc900\ube44\uc911",children:"\ubc30\uc1a1 \uc900\ube44\uc911"}),(0,s.jsx)("option",{value:"\ubc30\uc1a1\uc911",children:"\ubc30\uc1a1\uc911"}),(0,s.jsx)("option",{value:"\ubc30\uc1a1 \uc644\ub8cc",children:"\ubc30\uc1a1 \uc644\ub8cc"}),(0,s.jsx)("option",{value:"\ucde8\uc18c \ucc98\ub9ac\uc911",children:"\ucde8\uc18c \ucc98\ub9ac\uc911"}),(0,s.jsx)("option",{value:"\ucde8\uc18c \uc644\ub8cc",children:"\ucde8\uc18c \uc644\ub8cc"})]}),_props:{className:"orderStatus"}}],p=[{key:"no",label:"No",sorter:!1,filter:!1,_props:{className:"no"}},{key:"orderNumber",label:"\uc8fc\ubb38\ubc88\ud638",sorter:!1,_props:{className:"orderNumber"}},{key:"itemName",label:"\uc81c\ud488\uba85",sorter:!1,_props:{className:"itemName"}},{key:"receiver",label:"\uc218\ucde8\uc778",sorter:!1,_props:{className:"receiver"}},{key:"exchangePrice",label:"\uad50\ud658\uae08\uc561",filter:!1,_props:{className:"exchangePrice"}},{key:"exchangeDate",label:"\uad50\ud658 \uc694\uccad\uc77c",sorter:!1,filter:!1,_props:{className:"exchangeDate"}},{key:"orderStatus",label:"\uc8fc\ubb38\uc0c1\ud0dc",sorter:!1,_props:{className:"orderStatus"}}],_=[{key:"no",label:"No",sorter:!1,filter:!1,_props:{className:"no"}},{key:"title",label:"\ubc30\ub108 \ud0c0\uc774\ud2c0",sorter:!1,_props:{className:"title"}},{key:"image",label:"\uc774\ubbf8\uc9c0",sorter:!1,filter:!1,_props:{className:"image"}}]},28022:()=>{}}]);
//# sourceMappingURL=9974.aad3e686.chunk.js.map