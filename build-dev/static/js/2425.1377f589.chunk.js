(self.webpackChunkneordinary_template_react_js_admin=self.webpackChunkneordinary_template_react_js_admin||[]).push([[2425],{90399:(e,a,s)=>{"use strict";s.d(a,{Z:()=>r});s(72791);var l=s(78983),t=s(80184);const r=e=>{let{visible:a,title:s,children:r,setVisible:n,upDate:o,onDelete:c,btnText:i,notEditBtn:d}=e;return(0,t.jsxs)(l.Tk,{size:"lg",visible:a,onClose:()=>n(!1),children:[(0,t.jsx)(l.p0,{children:(0,t.jsx)(l.fl,{children:s||"Not Title"})}),(0,t.jsx)(l.sD,{children:r||(0,t.jsx)("h1",{children:"Not Children"})}),(0,t.jsxs)(l.Ym,{children:[!d&&(0,t.jsx)(l.u5,{onClick:()=>o(),color:"primary",children:i||"Not Btn Title"}),c&&(0,t.jsx)(l.u5,{onClick:()=>c(),color:"danger",children:"\uc0ad\uc81c"}),(0,t.jsx)(l.u5,{color:"secondary",onClick:()=>n(!1),children:"\ub2eb\uae30"})]})]})}},86385:(e,a,s)=>{"use strict";s.d(a,{Z:()=>b});var l,t,r=s(30168),n=s(79286),o=s(33809),c=s(72791),i=s(78983),d=s(44801),p=s(74912),m=s.n(p),u=s(76030),N=s(80184);const b=e=>{let{images:a,id:s,label:l,fileList:t,setFileList:r,imgPath:d,isRequired:p,readOnly:b,oneSheet:k=!1,maxFileLength:x=1}=e;const[_,g]=(0,c.useState)(!1),[f,v]=(0,c.useState)(""),[j,A]=(0,c.useState)("");(0,c.useEffect)((()=>{a&&a.length>0&&r(a.map((e=>({uid:e,name:decodeURI(e.split("/")[e.split("/").length-1]),status:"done",url:(0,u.J0)(e)}))))}),[a,r]);const w=(0,N.jsxs)("div",{children:[(0,N.jsx)(n.Z,{}),(0,N.jsx)("div",{style:{marginTop:8},children:"Upload"})]}),C=(0,N.jsx)("div",{children:"Have No Image."});return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(i.L8,{htmlFor:"".concat(s,"Static"),className:"col-form-label",children:(0,N.jsx)("span",{className:p&&"required",children:l||" * "})}),(0,N.jsx)(o.Z,{listType:"picture-card",fileList:t,onPreview:async e=>{e.url||e.preview||(e.preview=await(e=>new Promise(((a,s)=>{const l=new FileReader;l.readAsDataURL(e),l.onload=()=>a(l.result),l.onerror=e=>s(e)})))(e.originFileObj)),v(e.url||e.preview),g(!0),A(e.name||e.url.substring(e.url.lastIndexOf("/")+1))},onSuccess:e=>(e=>{const a=e.request.httpRequest,s=a.body,{protocol:l,host:n}=a.endpoint,o={uid:e.request.params.Key,name:s.name,status:"done",url:"".concat(l,"//").concat(n).concat(a.path)};r([...t,o])})(e),onRemove:e=>{return a=e,void r(t.filter((e=>e.uid!==a.uid)));var a},customRequest:e=>(e=>{let{file:a,onError:s,onProgress:l,onSuccess:r}=e;if(k&&t.length===x)return void alert("\uc774\ubbf8\uc9c0\ub294 \ucd5c\ub300 ".concat(x,"\uac1c\ub9cc \ub4f1\ub85d \uac00\ub2a5\ud569\ub2c8\ub2e4!"));m().config.update({region:"ap-northeast-2",accessKeyId:"AKIAWS5VDTBO4P55EYXT",secretAccessKey:"pzJVhC36B2Kl5RsNmVgthoSjAA4bQL64PwZrS4jM"});const n=new(m().S3),o=a.name.replaceAll(" ",""),c={Bucket:(0,u.AA)(d),Key:o,Body:a,ContentType:a.type};n.putObject(c).on("httpUploadProgress",(e=>{let{loaded:a,total:s}=e;return l({percent:a/s*100})})).promise().then((function(e){r(e.$response)}),(function(e){s(),console.log(e.code),console.log(e.message)}))})(e),disabled:b,children:(null===t||void 0===t?void 0:t.length)>=8?null:0===(null===t||void 0===t?void 0:t.length)?b?C:w:b?null:w}),f&&(0,N.jsxs)(i.b7,{children:[(0,N.jsx)(i.L8,{className:"col-form-label w-75",children:(0,N.jsx)(h,{children:(0,N.jsx)("span",{children:j||""})})}),(0,N.jsx)(y,{className:"text-center p-2",children:(0,N.jsx)("div",{children:(0,N.jsx)(i.DW,{rounded:!0,alt:"example",onClick:()=>{v("")},src:f})})})]})]})},y=(0,d.ZP)(i.b7)(l||(l=(0,r.Z)(["\n  padding: 0.5rem 0;\n  background: #fafafa;\n  border: 1px dashed #d9d9d9;\n  border-radius: 2px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  div {\n    width: 75%;\n\n    & img {\n      max-width: 100%;\n      height: auto;\n      cursor: pointer;\n      max-height: 600px;\n    }\n  }\n"]))),h=d.ZP.div(t||(t=(0,r.Z)(["\n  width: 100%;\n  padding: 0 5px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n"])))},88688:(e,a,s)=>{"use strict";s.d(a,{Z:()=>m});var l,t,r=s(30168),n=s(72791),o=s(66770),c=s.n(o),i=(s(86009),s(78983)),d=s(44801),p=s(80184);const m=e=>{let{id:a,value:s,label:l,isRequired:t,readOnly:r=!1,setValue:o,maxLength:c,editorHeight:d=300}=e;const m=(0,n.useRef)(),[b,y]=(0,n.useState)(!1),h=(0,n.useMemo)((()=>({toolbar:{container:[["bold","italic","underline","strike"],["blockquote"],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{indent:"-1"},{indent:"+1"}],[{direction:"rtl"}],[{header:[1,2,3,4,5,6,!1]}],[{color:[]},{background:[]}],[{font:[]}],[{align:[]}],["clean"]]}})),[]),k=e=>{if(c){const a=null===e||void 0===e?void 0:e.replace(/<[^>]*>?| /g,"").length;c>=a?(o((()=>e)),y(!1)):y(!0)}else c||o((()=>e))};return(0,p.jsxs)(i.b7,{style:{height:"".concat(d,"px"),marginBottom:"20px"},className:"pb-5",children:[(0,p.jsxs)(i.L8,{htmlFor:"".concat(a,"Static"),className:"col-form-label",children:[(0,p.jsx)("span",{className:t&&"required",children:l||" * "}),(0,p.jsx)(N,{className:"px-lg-2",textLengthCheck:b,children:c?"* ".concat(c,"\uc790 \uae4c\uc9c0 \uc785\ub825 \uac00\ub2a5\ud569\ub2c8\ub2e4."):"  "})]}),(0,p.jsx)(u,{id:a||"",ref:e=>{null!==e&&(m.current=e)},value:s,defaultValue:s,onChange:e=>k(b?s:e),modules:h,readOnly:r,theme:"snow",placeholder:"\ub0b4\uc6a9\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694.",style:{height:"100%"}})]})},u=(0,d.ZP)(c())(l||(l=(0,r.Z)(["\n  background-color: ",";\n  border-radius: 0.375rem;\n  border: none;\n  padding-bottom: ",";\n  .ql-container {\n    border-radius: ",";\n    border-bottom-left-radius: 0.375rem;\n    border-bottom-right-radius: 0.375rem;\n  }\n  .ql-editor {\n    border-radius: ",";\n  }\n  .ql-toolbar {\n    border-top-left-radius: 0.375rem;\n    border-top-right-radius: 0.375rem;\n    display: ",";\n  }\n"])),(e=>{let{readOnly:a}=e;return a?"#d8dbe0":"transparent"}),(e=>{let{readOnly:a}=e;return a?"0":"67px"}),(e=>{let{readOnly:a}=e;return a?"0.375rem":"0"}),(e=>{let{readOnly:a}=e;return a?"0.375rem":"0"}),(e=>{let{readOnly:a}=e;return a?"none":"block"})),N=d.ZP.span(t||(t=(0,r.Z)(["\n  font-size: 12px;\n  padding-left: 10px;\n  //color: ",";\n"])),(e=>{let{textLengthCheck:a}=e;return a&&"red"}))},42699:(e,a,s)=>{"use strict";s.d(a,{NW:()=>c,Wt:()=>i,aZ:()=>n,i6:()=>o,mi:()=>r});var l=s(96672),t=s(46327);const r=async e=>{try{const{data:{result:a,isSuccess:s,code:r,message:n}}=await l.Z.request({method:l.w.GET,url:e});return!s||(0,t.xb)(a)?alert(n):1e3===r?a:alert(n)}catch(a){return a}},n=async(e,a)=>{try{const{data:{result:s,isSuccess:r,code:n,message:o}}=await l.Z.request({method:l.w.GET,url:"".concat(e,"/").concat(a)});if(!r||(0,t.xb)(s))return alert(o);if(1e3===n)return s;alert(o)}catch(s){return s}},o=async(e,a,s)=>{try{const{data:{result:r,isSuccess:n,code:o,message:c}}=await l.Z.request({method:l.w.PATCH,url:"".concat(e,"/").concat(a),data:s});return!n||(0,t.xb)(r),c}catch(r){return r}},c=async(e,a,s)=>{try{const{data:{result:r,isSuccess:n,code:o,message:c}}=await l.Z.request({method:l.w.PUT,url:"".concat(e,"/").concat(a),data:s});return!n||(0,t.xb)(r),c}catch(r){return r}},i=async(e,a)=>{try{const{data:{result:s,isSuccess:r,code:n,message:o}}=await l.Z.request({method:l.w.POST,url:e,data:a});return!r||(0,t.xb)(s)?alert(o):o}catch(s){return s}}},62077:(e,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>k});var l=s(72791),t=s(78983),r=s(20961),n=s(70844),o=s(26670),c=s(3854),i=s(86385),d=s(90399),p=s(88688),m=s(80184);const u=e=>{let{value:a,visible:s,setVisible:l,onChange:r,onDelete:n}=e;const{noticeTitle:o,noticeContent:u,noticeImages:N,supportArea:b,name:y,email:h,phoneNum:k,isExperiences:x}=a;return(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)(d.Z,{visible:s,title:"\ub51c\ub7ec \uc9c0\uc6d0 \uc0c1\uc138",setVisible:l,onDelete:n,notEditBtn:!0,children:[(0,m.jsx)(t.rb,{className:"p-2",children:(0,m.jsx)(c.Z,{onChange:r,id:"noticeTitle",placeholder:"\uc9c0\uc6d0 \uacf5\uace0",label:"\uc9c0\uc6d0 \uacf5\uace0",readOnly:!0,disabled:!0,value:o||""})}),(0,m.jsxs)(t.rb,{className:"p-2",children:[(0,m.jsx)(c.Z,{readOnly:!0,disabled:!0,size:"sm",value:b,label:"\uc9c0\uc6d0 \ubd84\uc57c"}),(0,m.jsx)(c.Z,{id:"phoneNum",placeholder:"VAN \uc601\uc5c5 \uacbd\ub825",label:"VAN \uc601\uc5c5 \uacbd\ub825",value:x?"\uc720":"\ubb34",readOnly:!0,disabled:!0})]}),(0,m.jsx)(t.rb,{className:"p-2 pb-2",children:(0,m.jsx)(p.Z,{id:"noticeContent",value:u,label:"\uc9c0\uc6d0 \uacf5\uace0 \ubcf8\ubb38",readOnly:!0,disabled:!0})}),(0,m.jsx)(t.rb,{className:"p-2",children:(0,m.jsx)(i.Z,{fileList:N||[],id:"images",label:"\uc9c0\uc6d0 \uacf5\uace0 \uc774\ubbf8\uc9c0",readOnly:!0,disabled:!0})}),(0,m.jsx)(t.rb,{className:"p-2",children:(0,m.jsx)(c.Z,{onChange:r,id:"name",placeholder:"\uc9c0\uc6d0\uc790 \uc774\ub984",label:"\uc9c0\uc6d0\uc790 \uc774\ub984",value:y,readOnly:!0,disabled:!0})}),(0,m.jsx)(t.rb,{className:"p-2",children:(0,m.jsx)(c.Z,{onChange:r,id:"email",placeholder:"\uc774\uba54\uc77c",label:"\uc9c0\uc6d0\uc790 \uc774\uba54\uc77c",value:h,readOnly:!0,disabled:!0})}),(0,m.jsx)(t.rb,{className:"p-2",children:(0,m.jsx)(c.Z,{onChange:r,id:"phoneNum",placeholder:"\uc804\ud654\ubc88\ud638",label:"\uc9c0\uc6d0\uc790 \uc804\ud654\ubc88\ud638",value:k,readOnly:!0,disabled:!0})})]})})};var N=s(96672),b=s(19311),y=s(46327),h=s(42699);const k=()=>{const[e,a]=(0,l.useState)([]),[s,c]=(0,l.useState)({}),[i,d]=(0,l.useState)("");(0,l.useEffect)((()=>{(async()=>{(0,h.mi)(b.l.PARTNER_AGENCYAPPLICANT).then((e=>{a(null===e||void 0===e?void 0:e.adminAgencyApplicantDTOs.map((e=>({phoneNumber:e.phoneNum.replace(/-/g,""),...e})))),d(null===e||void 0===e?void 0:e.noticeContent)})).catch((e=>console.log(e)))})()}),[]);const[p,k]=(0,l.useState)(!1),[x,_]=(0,l.useState)(!0);return(0,m.jsxs)("main",{children:[(0,m.jsx)(r.Z,{title:"\ub51c\ub7ec \uc9c0\uc6d0 \ub9ac\uc2a4\ud2b8"}),(0,m.jsx)(t.rb,{children:(0,m.jsx)(t.b7,{xs:12,children:(0,m.jsx)(t.xH,{className:"mb-4",children:(0,m.jsx)(t.sl,{children:(0,m.jsx)(n.Z,{items:e,onClick:async e=>{let{id:a}=e;try{const{data:{result:e,isSuccess:s,code:l,message:t}}=await N.Z.request({method:N.w.GET,url:"".concat(b.l.PARTNER_AGENCYAPPLICANT,"/").concat(a)});if(!s||(0,y.xb)(e))return;1e3===l?c(e):alert(t)}catch(s){console.log(s)}k(!p)},columns:o.wo,className:"userList",datePickerHidden:!1})})})})}),(0,m.jsx)(u,{onChange:e=>{let{target:{id:a,value:l}}=e;c({...s,[a]:l})},visible:p,value:s,setVisible:k,isReadOnly:x,setIsReadOnly:_,editor:i})]})}},26670:(e,a,s)=>{"use strict";s.d(a,{J7:()=>y,QN:()=>i,W_:()=>d,ZX:()=>b,_c:()=>c,g1:()=>l,gh:()=>k,iN:()=>u,l5:()=>N,p0:()=>p,qM:()=>h,tO:()=>t,uF:()=>r,wo:()=>o,yA:()=>m,zI:()=>n});s(72791);const l=[{key:"idx",label:"No",_props:{className:"id"}},{key:"name",label:"\uc0ac\uc6a9\uc790 \uba85",_props:{className:"userName"}},{key:"certificateNum",label:"\uc0ac\uc5c5\uc790 \ubc88\ud638",_props:{className:"certificateNum"}},{key:"phoneNumber",label:"\ud734\ub300\uc804\ud654 \ubc88\ud638",_props:{className:"phoneNum"}},{key:"createdAt",label:"\ucd5c\ucd08 \ub4f1\ub85d\uc77c",_props:{className:"createdAt"},filter:!1},{key:"status",label:"\uacc4\uc815 \uc0c1\ud0dc",_props:{className:"status"},sorter:!1,filter:!1}],t=[{key:"idx",label:"No",_props:{className:"id"}},{key:"name",label:"\uc0ac\uc6a9\uc790 \uba85",_props:{className:"userName"}},{key:"createdAt",label:"\ucd5c\ucd08 \ub4f1\ub85d\uc77c",filter:!1,_props:{className:"createdAt"}},{key:"status",label:"\uacc4\uc815 \uc0c1\ud0dc",_props:{className:"status"},filter:!1},{key:"deletedAt",label:"\uacc4\uc815 \ud0c8\ud1f4\uc77c",_props:{className:"deletedAt"},sorter:!1,filter:!1},{key:"phoneNumber",label:"\ud734\ub300\uc804\ud654 \ubc88\ud638",_props:{className:"phoneNum"}},{key:"certificateFile",label:"\uc0ac\uc5c5\uc790 \ub4f1\ub85d\uc99d",_props:{className:"certificateFile"}},{key:"businessName",label:"\uc0c1\ud638\uba85",_props:{className:"businessName"}},{key:"certificateNum",label:"\uc0ac\uc5c5\uc790 \ub4f1\ub85d\ubc88\ud638",_props:{className:"certificateNum"}},{key:"address",label:"\uc0ac\uc5c5\uc7a5 \uc8fc\uc18c",_props:{className:"address"}},{key:"withdrawalCategory",label:"\ud0c8\ud1f4 \uc0ac\uc720",_props:{className:"withdrawalCategory"}}],r=[{key:"idx",label:"No",_props:{className:"id"}},{key:"inquiryCategory",label:"\ubb38\uc758 \uc720\ud615",_props:{className:"inquiryCategory"}},{key:"name",label:"\uc774\ub984",_props:{className:"userName"}},{key:"phoneNumber",label:"\uc804\ud654\ubc88\ud638",_props:{className:"userPhoneNum"}}],n=[{key:"idx",label:"No",_props:{className:"no"}},{key:"title",label:"\uacf5\uc9c0\uc0ac\ud56d \uc81c\ubaa9",_props:{className:"title"}},{key:"createdAt",label:"\uacf5\uc9c0\uc0ac\ud56d \ub4f1\ub85d\uc77c",_props:{className:"createdAt"},filter:!1},{key:"noticeFiles",label:"\ucca8\ubd80 \ud30c\uc77c",_props:{className:"noticeFiles"},filter:!1,sorter:!1}],o=[{key:"idx",label:"No",_props:{className:"no"}},{key:"supportArea",label:"\uc9c0\uc6d0 \ubd84\uc57c",_props:{className:"supportArea"}},{key:"noticeTitle",label:"\uc9c0\uc6d0 \uacf5\uc9c0 \uc81c\ubaa9",_props:{className:"noticeTitle"}},{key:"name",label:"\uc774\ub984",_props:{className:"name"}},{key:"email",label:"\uc774\uba54\uc77c",_props:{className:"email"}},{key:"phoneNumber",label:"\uc804\ud654\ubc88\ud638",_props:{className:"phoneNum"}}],c=[{key:"idx",label:"No",_props:{className:"id"}},{key:"dataRoomCategory",label:"\uce74\ud14c\uace0\ub9ac",_props:{className:"createdAt"}},{key:"title",label:"\uc81c\ubaa9",_props:{className:"title"}},{key:"createdAt",label:"\ub4f1\ub85d\uc77c",_props:{className:"createdAt"},filter:!1}],i=[{key:"idx",label:"No",_props:{className:"id"}},{key:"orderNum",label:"\ubc1c\uc8fc\ubc88\ud638",_props:{className:"orderNum"}},{key:"businessName",label:"\uc0c1\ud638\uba85",_props:{className:"BusinessName"}},{key:"certificateNum",label:"\uc0ac\uc5c5\uc790 \ubc88\ud638",_props:{className:"certificateNum"}},{key:"representativeName",label:"\ub300\ud45c\uc790 \uba85",_props:{className:"RepresentativeName"}},{key:"createdAt",label:"\uc2e0\uccad \uc77c\uc790",_props:{className:"createdAt"},filter:!1}],d=[{key:"id",label:"No",_props:{className:"no"}},{key:"category",label:"\uce74\ud14c\uace0\ub9ac",_props:{className:"category"}},{key:"invoiceNum",label:"\uc1a1\uc7a5\ubc88\ud638",_props:{className:"invoiceNum"}},{key:"itemName",label:"\uc81c\ud488\uba85",_props:{className:"itemName"}},{key:"processingStatus",label:"\ubc30\uc1a1 \ud604\ud669",_props:{className:"processingStatus"}},{key:"quantity",label:"\ubc1c\uc8fc \uc218\ub7c9",_props:{className:"quantity"}},{key:"van",_props:{className:"van"}}],p=[{key:"idx",label:"No",_props:{className:"id"}},{key:"maintenanceNum",label:"\uc720\uc9c0\ubcf4\uc218 \ubc88\ud638",_props:{className:"maintenanceNum"}},{key:"businessName",label:"\uc0c1\ud638\uba85",_props:{className:"BusinessName"}},{key:"certificateNum",label:"\uc0ac\uc5c5\uc790 \ubc88\ud638",_props:{className:"certificateNum"}},{key:"representativeName",label:"\ub300\ud45c\uc790 \uba85",_props:{className:"representativeName"}},{key:"createdAt",label:"\uc2e0\uccad \uc77c\uc790",_props:{className:"createdAt"},filter:!1}],m=[{key:"region",label:"\uc9c0\uc5ed",sorter:!1,_props:{className:"region"}},{key:"catcount",label:"CAT",sorter:!1,_props:{className:"catcount"}},{key:"poscount",label:"POS",sorter:!1,_props:{className:"poscount"}},{key:"kioskcount",label:"KIOSK",sorter:!1,_props:{className:"kioskcount"}},{key:"sum",label:"SUM",sorter:!1,_props:{className:"sum"}},{key:"note",label:"\ube44\uace0",_props:{className:"note"}}],u=[{key:"id",label:"No.",_props:{className:"id"}},{key:"category",label:"\uad6c\ubd84",_props:{className:"category"}},{key:"name",label:"\uc194\ub8e8\uc158 \uba85",_props:{className:"name"}},{key:"id",label:"No.",_props:{className:"id"}},{key:"van",label:"\uc8fc\ub825 VAN\uc0ac",_props:{className:"van"}}],N=[{title:"\uad6c\ubd84.",dataIndex:"division",width:"10%"},{title:"\uc81c\uc870\uc0ac/\ubaa8\ub378\uba85",dataIndex:"manufactureCompany",width:"40%"}],b=[{key:"idx",label:"No",_props:{className:"no"}},{key:"title",label:"\uc81c\ubaa9",_props:{className:"title"}},{key:"createdAt",label:"\ub4f1\ub85d\uc77c",_props:{className:"createdAt"},filter:!1}],y=[{key:"idx",label:"No",_props:{className:"id"}},{key:"agencyName",label:"\ub300\ub9ac\uc810 \uba85",_props:{className:"agencyName"}},{key:"phoneNumber",label:"\ub300\ub9ac\uc810 \uc5f0\ub77d\ucc98",_props:{className:"phoneNum"},sorter:!1},{key:"applicantNum",label:"\uc2e0\uccad \uc778\uc6d0",_props:{className:"applicantNum"},sorter:!1},{key:"educationDate",label:"\uc2e0\uccad \uad50\uc721 \uc77c\uc790",_props:{className:"educationDate"},filter:!1}],h=[{key:"id",label:"No",_props:{className:"id"}},{key:"userName",label:"\uc774\ub984",_props:{className:"userName"}},{key:"email",label:"\uc774\uba54\uc77c",_props:{className:"email"}},{key:"mobilePhoneNum",label:"\uc5f0\ub77d\ucc98",_props:{className:"phoneNumber"}}],k=[{key:"idx",label:"No",_props:{className:"id"}},{key:"title",label:"\uacf5\uace0 \uc81c\ubaa9",_props:{className:"title"}},{key:"createdAt",label:"\ub4f1\ub85d\uc77c",filter:!1,_props:{className:"createdAt"}},{key:"start",label:"\uad50\uc721\uc2e0\uccad \uc2dc\uc791\uc77c",filter:!1,_props:{className:"createdAt"}},{key:"deadline",label:"\uad50\uc721\uc2e0\uccad \ub9c8\uac10\uc77c",filter:!1,_props:{className:"createdAt"}},{key:"place",label:"\uad50\uc721 \uc7a5\uc18c",_props:{className:"place"}},{key:"applicantsCap",label:"\ucc38\uc5ec \uac00\ub2a5 \uc778\uc6d0",_props:{className:"id"}}]},79286:(e,a,s)=>{"use strict";s.d(a,{Z:()=>c});var l=s(87462),t=s(72791);const r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"};var n=s(54291),o=function(e,a){return t.createElement(n.Z,(0,l.Z)({},e,{ref:a,icon:r}))};const c=t.forwardRef(o)},28022:()=>{}}]);
//# sourceMappingURL=2425.1377f589.chunk.js.map