(self.webpackChunkneordinary_template_react_js_admin=self.webpackChunkneordinary_template_react_js_admin||[]).push([[6396],{13538:(e,t,n)=>{"use strict";n.d(t,{Z:()=>b});var l=n(72791),s=n(78983),r=n(3854),a=n(54105),i=n(96672),o=n(19311),c=n(86385),d=(n(59434),n(46327)),u=n(76030),h=n(32967),m=n(88688),p=n(80184);const b=e=>{let{type:t,getList:n,value:b,visible:g,setSelectedItem:f,setContent:x,content:y,setVisible:j,onChange:v,isReadOnly:w,setIsReadOnly:q}=e;const[N,Z]=(0,l.useState)([]),[L,k]=(0,l.useState)([]),C=()=>(0,d.xb)(b.title)?(alert("\uacf5\uc9c0 \uc81c\ubaa9\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694."),!1):!(0,d.xb)(y)&&"<p><br></p>"!==y||(alert("\uacf5\uc9c0 \ub0b4\uc6a9\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694."),!1),I=async()=>{const e=(0,u.HU)(N),l=(0,u.HU)(L);try{if(!C())return;const{data:s}=await i.Z.request({data:{title:b.title,content:y,imageUrls:e,fileUrls:l},query:{},path:{noticeId:b.noticeId},method:i.w.PATCH,url:"".concat("home"===t?o.l.PATCH_NOTICE:o.l.PATCH_MALL_NOTICE)});s.isSuccess&&(n(),S(),alert(s.result))}catch(s){alert(s)}},P=()=>{(w||-1===b.noticeId||window.confirm("\uc815\ub9d0 \ud398\uc774\uc9c0\uc5d0\uc11c \ub098\uac00\uc2dc\uaca0\uc2b5\ub2c8\uae4c? \n\n \uc9c0\uae08 \ud398\uc774\uc9c0\ub97c \ub098\uac00\uc2dc\uba74 \ubcc0\uacbd\uc0ac\ud56d\uc774 \uc800\uc7a5\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."))&&S()},S=()=>{Z([]),k([]),j(!1),x(""),q(!0),f({noticeId:-1,title:"",createdAt:"",content:"",imageUrls:[],fileUrls:[]})};return(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)(s.Tk,{alignment:"center",size:"lg",visible:g,children:[(0,p.jsx)(a.Z,{onClick:P,children:"\uacf5\uc9c0 \uc0c1\uc138"}),(0,p.jsxs)(s.sD,{className:"modal-scroll",children:[(0,p.jsx)(s.rb,{className:"mb-3",children:(0,p.jsx)(r.Z,{xs:4,onChange:v,id:"noticeId",placeholder:"ID",label:"ID",readOnly:!0,disabled:!0,value:-1===b.noticeId?"":b.noticeId})}),(0,p.jsx)(s.rb,{className:"mb-3",children:(0,p.jsx)(r.Z,{onChange:v,id:"title",placeholder:"\uacf5\uc9c0 \uc81c\ubaa9\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694",label:"\uacf5\uc9c0 \uc81c\ubaa9",value:b.title,isRequired:!0,readOnly:w,disabled:w})}),(0,p.jsx)(s.rb,{className:"mb-3",children:(0,p.jsx)(m.Z,{id:"content",value:y,isRequired:!0,readOnly:w,setValue:x,label:"\uacf5\uc9c0 \ubcf8\ubb38"})}),(0,p.jsx)(s.rb,{className:"mb-3 pt-3",children:(0,p.jsx)(c.Z,{id:"image",label:"\uc774\ubbf8\uc9c0 \ucca8\ubd80",fileList:N,setFileList:Z,images:null===b||void 0===b?void 0:b.imageUrls,imgPath:"notice_images",readOnly:w})}),(0,p.jsx)(s.rb,{className:"mb-3",children:(0,p.jsx)(h.Z,{id:"files",label:"\ud30c\uc77c \ucca8\ubd80",files:b.fileUrls,disabled:w,fileList:L,setFileList:k,filePath:"notice_files"})})]}),(0,p.jsxs)(s.Ym,{children:[-1===b.noticeId?(0,p.jsx)(s.u5,{color:"primary",onClick:async()=>{try{if(!C())return;const e=(0,u.HU)(N),l=(0,u.HU)(L),{data:s}=await i.Z.request({data:{title:b.title,content:y,imageUrls:e,fileUrls:l},query:{},path:{},method:i.w.POST,url:"".concat("home"===t?o.l.POST_NOTICE:o.l.POST_MALL_NOTICE)});console.log(s),s.isSuccess?(n(),alert("\uacf5\uc9c0\uac00 \uc815\uc0c1\uc801\uc73c\ub85c \uc0dd\uc131 \ub418\uc5c8\uc2b5\ub2c8\ub2e4."),S()):alert(s.message)}catch(e){alert(e)}},children:"\ucd94\uac00"}):(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(s.u5,{color:"danger",onClick:()=>{window.confirm("\uc815\ub9d0 \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")&&(async()=>{try{const{data:e}=await i.Z.request({data:{},query:{},path:{noticeId:b.noticeId},method:i.w.PATCH,url:"".concat("home"===t?o.l.DELETE_NOTICE:o.l.DELETE_MALL_NOTICE)});e.isSuccess&&(n(),alert(e.result),S())}catch(e){alert(e)}})()},children:"\uc0ad\uc81c"}),(0,p.jsx)(s.u5,{color:w?"primary":"success",onClick:()=>{w?q(!1):I()},children:w?"\uc218\uc815":"\uc800\uc7a5"})]}),(0,p.jsx)(s.u5,{color:"secondary",onClick:P,children:"\ucde8\uc18c"})]})]})})}},54105:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var l=n(80184);const s=e=>{let{children:t,onClick:n}=e;return(0,l.jsxs)("div",{className:"modal-header",children:[(0,l.jsx)("h5",{className:"modal-title",children:t}),(0,l.jsx)("button",{type:"button",className:"btn btn-close",onClick:n,"aria-label":"Close"})]})}},32967:(e,t,n)=>{"use strict";n.d(t,{Z:()=>x});var l=n(30168),s=n(87462),r=n(72791);const a={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M885.2 446.3l-.2-.8-112.2-285.1c-5-16.1-19.9-27.2-36.8-27.2H281.2c-17 0-32.1 11.3-36.9 27.6L139.4 443l-.3.7-.2.8c-1.3 4.9-1.7 9.9-1 14.8-.1 1.6-.2 3.2-.2 4.8V830a60.9 60.9 0 0060.8 60.8h627.2c33.5 0 60.8-27.3 60.9-60.8V464.1c0-1.3 0-2.6-.1-3.7.4-4.9 0-9.6-1.3-14.1zm-295.8-43l-.3 15.7c-.8 44.9-31.8 75.1-77.1 75.1-22.1 0-41.1-7.1-54.8-20.6S436 441.2 435.6 419l-.3-15.7H229.5L309 210h399.2l81.7 193.3H589.4zm-375 76.8h157.3c24.3 57.1 76 90.8 140.4 90.8 33.7 0 65-9.4 90.3-27.2 22.2-15.6 39.5-37.4 50.7-63.6h156.5V814H214.4V480.1z"}}]},name:"inbox",theme:"outlined"};var i=n(54291),o=function(e,t){return r.createElement(i.Z,(0,s.Z)({},e,{ref:t,icon:a}))};const c=r.forwardRef(o);var d,u=n(33809),h=n(44801),m=n(78983),p=n(74912),b=n.n(p),g=n(76030),f=n(80184);const x=e=>{let{files:t,label:n,id:l,disabled:s,fileList:a,setFileList:i,filePath:o,isRequired:d,oneSheet:h=!1,maxFileLength:p=1}=e;(0,r.useEffect)((()=>{t&&t.length>0&&i(t.map(((e,t)=>({key:t,uid:t,name:e.fileTitle?e.fileTitle:decodeURI(e.split("/")[e.split("/").length-1]),status:"done",url:e.file?e.file:(0,g.J0)(e)}))))}),[t]);const x={name:"file",multiple:!0,disabled:s,fileList:a,customRequest(e){(e=>{let{file:t,onError:n,onProgress:l,onSuccess:s}=e;b().config.update({region:"ap-northeast-2",accessKeyId:"AKIAWS5VDTBO5PU3SWMV",secretAccessKey:"F4sf4N/+4p1fKQiybA6P5lIcD2e2S6PjMfTePA/J"});const r=new(b().S3),a=t.name.replaceAll(" ",""),i={Bucket:(0,g.DK)(o),Key:a,Body:t,ContentType:t.type};r.putObject(i).on("httpUploadProgress",(e=>{let{loaded:t,total:n}=e;return l({percent:t/n*100})})).promise().then((function(e){s(e.$response)}),(function(e){n(),console.log(e.code),console.log(e.message)}))})(e)},onSuccess(e){(e=>{const t=e.request.httpRequest,n=t.body,{protocol:l,host:s}=t.endpoint;if(h&&a.length>=p)return alert("\ud30c\uc77c\uc740 \ucd5c\ub300 ".concat(p,"\uac1c\ub9cc \ub4f1\ub85d \uac00\ub2a5\ud569\ub2c8\ub2e4!"));const r={uid:e.request.params.Key,name:n.name,status:"done",url:"".concat(l,"//").concat(s).concat(t.path)};i([...a,r])})(e)},onRemove(e){var t;t=e,i(a.filter((e=>e.uid!==t.uid)))}};return(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)(y,{className:s,children:[(0,f.jsx)(m.L8,{className:d?"required":"",children:n||""}),(0,f.jsxs)(u.Z.Dragger,{...x,id:l,children:[(0,f.jsx)("p",{className:"ant-upload-drag-icon",children:(0,f.jsx)(c,{})}),(0,f.jsx)("p",{className:"ant-upload-text",children:"\uc5c5\ub85c\ub4dc\ud558\ub824\uba74 \uc774 \uc601\uc5ed\uc73c\ub85c \ud30c\uc77c\uc744 \ud074\ub9ad\ud558\uac70\ub098 \ub4dc\ub798\uadf8\ud558\uc138\uc694."})]})]})})},y=h.ZP.div(d||(d=(0,l.Z)(["\n  border-radius: 0.375rem;\n  &.disabled {\n    background: #d8dbe0;\n  }\n  & .ant-upload-disabled {\n    background: #d8dbe0;\n    border: 0.5px dashed #b1b7c1;\n    opacity: 1;\n  }\n  & > span {\n    display: flex;\n    flex-direction: column;\n  }\n  & > span.ant-upload-wrapper.css-dev-only-do-not-override-sk7ap8 {\n    flex-direction: column-reverse;\n  }\n"])))},86385:(e,t,n)=>{"use strict";n.d(t,{Z:()=>b});var l,s,r=n(30168),a=n(79286),i=n(33809),o=n(72791),c=n(78983),d=n(44801),u=n(74912),h=n.n(u),m=n(76030),p=n(80184);const b=e=>{let{images:t,id:n,label:l,fileList:s,setFileList:r,imgPath:d,isRequired:u,readOnly:b,oneSheet:x=!1,maxFileLength:y=1}=e;const[j,v]=(0,o.useState)(!1),[w,q]=(0,o.useState)(""),[N,Z]=(0,o.useState)("");(0,o.useEffect)((()=>{t&&t.length>0&&r(t.map((e=>({uid:e,name:decodeURI(e.split("/")[e.split("/").length-1]),status:"done",url:(0,m.J0)(e)}))))}),[t,r]);const L=(0,p.jsxs)("div",{children:[(0,p.jsx)(a.Z,{}),(0,p.jsx)("div",{style:{marginTop:8},children:"Upload"})]}),k=(0,p.jsx)("div",{children:"Have No Image."});return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(c.L8,{htmlFor:"".concat(n,"Static"),className:"col-form-label",children:(0,p.jsx)("span",{className:u&&"required",children:l||" * "})}),(0,p.jsx)(i.Z,{listType:"picture-card",fileList:s,onPreview:async e=>{e.url||e.preview||(e.preview=await(e=>new Promise(((t,n)=>{const l=new FileReader;l.readAsDataURL(e),l.onload=()=>t(l.result),l.onerror=e=>n(e)})))(e.originFileObj)),q(e.url||e.preview),v(!0),Z(e.name||e.url.substring(e.url.lastIndexOf("/")+1))},onSuccess:e=>(e=>{const t=e.request.httpRequest,n=t.body,{protocol:l,host:a}=t.endpoint,i={uid:e.request.params.Key,name:n.name,status:"done",url:"".concat(l,"//").concat(a).concat(t.path)};r([...s,i])})(e),onRemove:e=>{return t=e,void r(s.filter((e=>e.uid!==t.uid)));var t},customRequest:e=>(e=>{let{file:t,onError:n,onProgress:l,onSuccess:r}=e;if(x&&s.length===y)return void alert("\uc774\ubbf8\uc9c0\ub294 \ucd5c\ub300 ".concat(y,"\uac1c\ub9cc \ub4f1\ub85d \uac00\ub2a5\ud569\ub2c8\ub2e4!"));h().config.update({region:"ap-northeast-2",accessKeyId:"AKIAWS5VDTBO5PU3SWMV",secretAccessKey:"F4sf4N/+4p1fKQiybA6P5lIcD2e2S6PjMfTePA/J"});const a=new(h().S3),i=t.name.replaceAll(" ",""),o={Bucket:(0,m.AA)(d),Key:i,Body:t,ContentType:t.type};a.putObject(o).on("httpUploadProgress",(e=>{let{loaded:t,total:n}=e;return l({percent:t/n*100})})).promise().then((function(e){r(e.$response)}),(function(e){n(),console.log(e.code),console.log(e.message)}))})(e),disabled:b,children:(null===s||void 0===s?void 0:s.length)>=8?null:0===(null===s||void 0===s?void 0:s.length)?b?k:L:b?null:L}),w&&(0,p.jsxs)(c.b7,{children:[(0,p.jsx)(c.L8,{className:"col-form-label w-75",children:(0,p.jsx)(f,{children:(0,p.jsx)("span",{children:N||""})})}),(0,p.jsx)(g,{className:"text-center p-2",children:(0,p.jsx)("div",{children:(0,p.jsx)(c.DW,{rounded:!0,alt:"example",onClick:()=>{q("")},src:w})})})]})]})},g=(0,d.ZP)(c.b7)(l||(l=(0,r.Z)(["\n  padding: 0.5rem 0;\n  background: #fafafa;\n  border: 1px dashed #d9d9d9;\n  border-radius: 2px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  div {\n    width: 75%;\n\n    & img {\n      max-width: 100%;\n      height: auto;\n      cursor: pointer;\n      max-height: 600px;\n    }\n  }\n"]))),f=d.ZP.div(s||(s=(0,r.Z)(["\n  width: 100%;\n  padding: 0 5px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n"])))},88688:(e,t,n)=>{"use strict";n.d(t,{Z:()=>h});var l,s,r=n(30168),a=n(72791),i=n(66770),o=n.n(i),c=(n(86009),n(78983)),d=n(44801),u=n(80184);const h=e=>{let{id:t,value:n,label:l,isRequired:s,readOnly:r=!1,setValue:i,maxLength:o,editorHeight:d=300}=e;const h=(0,a.useRef)(),[b,g]=(0,a.useState)(!1),f=(0,a.useMemo)((()=>({toolbar:{container:[["bold","italic","underline","strike"],["blockquote"],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{indent:"-1"},{indent:"+1"}],[{direction:"rtl"}],[{header:[1,2,3,4,5,6,!1]}],[{color:[]},{background:[]}],[{font:[]}],[{align:[]}],["clean"]]}})),[]),x=e=>{if(o){const t=null===e||void 0===e?void 0:e.replace(/<[^>]*>?| /g,"").length;o>=t?(i((()=>e)),g(!1)):g(!0)}else o||i((()=>e))};return(0,u.jsxs)(c.b7,{style:{height:"".concat(d,"px"),marginBottom:"20px"},className:"pb-5",children:[(0,u.jsxs)(c.L8,{htmlFor:"".concat(t,"Static"),className:"col-form-label",children:[(0,u.jsx)("span",{className:s&&"required",children:l||" * "}),(0,u.jsx)(p,{className:"px-lg-2",textLengthCheck:b,children:o?"* ".concat(o,"\uc790 \uae4c\uc9c0 \uc785\ub825 \uac00\ub2a5\ud569\ub2c8\ub2e4."):"  "})]}),(0,u.jsx)(m,{id:t||"",ref:e=>{null!==e&&(h.current=e)},value:n,defaultValue:n,onChange:e=>x(b?n:e),modules:f,readOnly:r,theme:"snow",placeholder:"\ub0b4\uc6a9\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694.",style:{height:"100%"}})]})},m=(0,d.ZP)(o())(l||(l=(0,r.Z)(["\n  background-color: ",";\n  border-radius: 0.375rem;\n  border: none;\n  padding-bottom: ",";\n  .ql-container {\n    border-radius: ",";\n    border-bottom-left-radius: 0.375rem;\n    border-bottom-right-radius: 0.375rem;\n  }\n  .ql-editor {\n    border-radius: ",";\n  }\n  .ql-toolbar {\n    border-top-left-radius: 0.375rem;\n    border-top-right-radius: 0.375rem;\n    display: ",";\n  }\n"])),(e=>{let{readOnly:t}=e;return t?"#d8dbe0":"transparent"}),(e=>{let{readOnly:t}=e;return t?"0":"67px"}),(e=>{let{readOnly:t}=e;return t?"0.375rem":"0"}),(e=>{let{readOnly:t}=e;return t?"0.375rem":"0"}),(e=>{let{readOnly:t}=e;return t?"none":"block"})),p=d.ZP.span(s||(s=(0,r.Z)(["\n  font-size: 12px;\n  padding-left: 10px;\n  //color: ",";\n"])),(e=>{let{textLengthCheck:t}=e;return t&&"red"}))},13156:(e,t,n)=>{"use strict";n.d(t,{W:()=>l});const l=[{key:"no",label:"No",_props:{color:"primary",className:"no"},filter:!1},{key:"title",label:"\uacf5\uace0\uc81c\ubaa9",_props:{color:"primary",className:"title"}},{key:"createdAt",label:"\ub4f1\ub85d\uc77c",_props:{color:"primary",className:"createdAt"},filter:!1}]},79286:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var l=n(87462),s=n(72791);const r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"};var a=n(54291),i=function(e,t){return s.createElement(a.Z,(0,l.Z)({},e,{ref:t,icon:r}))};const o=s.forwardRef(i)},28022:()=>{}}]);
//# sourceMappingURL=6396.7db576c3.chunk.js.map