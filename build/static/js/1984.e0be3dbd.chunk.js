(self.webpackChunkneordinary_template_react_js_admin=self.webpackChunkneordinary_template_react_js_admin||[]).push([[1984],{54105:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(80184);const s=e=>{let{children:t,onClick:n}=e;return(0,r.jsxs)("div",{className:"modal-header",children:[(0,r.jsx)("h5",{className:"modal-title",children:t}),(0,r.jsx)("button",{type:"button",className:"btn btn-close",onClick:n,"aria-label":"Close"})]})}},86385:(e,t,n)=>{"use strict";n.d(t,{Z:()=>b});var r,s,a=n(30168),l=n(79286),i=n(33809),c=n(72791),o=n(78983),d=n(44801),u=n(74912),h=n.n(u),m=n(76030),p=n(80184);const b=e=>{let{images:t,id:n,label:r,fileList:s,setFileList:a,imgPath:d,isRequired:u,readOnly:b,oneSheet:y=!1,maxFileLength:j=1}=e;const[f,v]=(0,c.useState)(!1),[w,N]=(0,c.useState)(""),[q,Z]=(0,c.useState)("");(0,c.useEffect)((()=>{t&&t.length>0&&a(t.map((e=>({uid:e,name:decodeURI(e.split("/")[e.split("/").length-1]),status:"done",url:(0,m.J0)(e)}))))}),[t,a]);const k=(0,p.jsxs)("div",{children:[(0,p.jsx)(l.Z,{}),(0,p.jsx)("div",{style:{marginTop:8},children:"Upload"})]}),O=(0,p.jsx)("div",{children:"Have No Image."});return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(o.L8,{htmlFor:"".concat(n,"Static"),className:"col-form-label",children:(0,p.jsx)("span",{className:u&&"required",children:r||" * "})}),(0,p.jsx)(i.Z,{listType:"picture-card",fileList:s,onPreview:async e=>{e.url||e.preview||(e.preview=await(e=>new Promise(((t,n)=>{const r=new FileReader;r.readAsDataURL(e),r.onload=()=>t(r.result),r.onerror=e=>n(e)})))(e.originFileObj)),N(e.url||e.preview),v(!0),Z(e.name||e.url.substring(e.url.lastIndexOf("/")+1))},onSuccess:e=>(e=>{const t=e.request.httpRequest,n=t.body,{protocol:r,host:l}=t.endpoint,i={uid:e.request.params.Key,name:n.name,status:"done",url:"".concat(r,"//").concat(l).concat(t.path)};a([...s,i])})(e),onRemove:e=>{return t=e,void a(s.filter((e=>e.uid!==t.uid)));var t},customRequest:e=>(e=>{let{file:t,onError:n,onProgress:r,onSuccess:a}=e;if(y&&s.length===j)return void alert("\uc774\ubbf8\uc9c0\ub294 \ucd5c\ub300 ".concat(j,"\uac1c\ub9cc \ub4f1\ub85d \uac00\ub2a5\ud569\ub2c8\ub2e4!"));h().config.update({region:"ap-northeast-2",accessKeyId:"AKIAWS5VDTBO5PU3SWMV",secretAccessKey:"F4sf4N/+4p1fKQiybA6P5lIcD2e2S6PjMfTePA/J"});const l=new(h().S3),i=t.name.replaceAll(" ",""),c={Bucket:(0,m.AA)(d),Key:i,Body:t,ContentType:t.type};l.putObject(c).on("httpUploadProgress",(e=>{let{loaded:t,total:n}=e;return r({percent:t/n*100})})).promise().then((function(e){a(e.$response)}),(function(e){n(),console.log(e.code),console.log(e.message)}))})(e),disabled:b,children:(null===s||void 0===s?void 0:s.length)>=8?null:0===(null===s||void 0===s?void 0:s.length)?b?O:k:b?null:k}),w&&(0,p.jsxs)(o.b7,{children:[(0,p.jsx)(o.L8,{className:"col-form-label w-75",children:(0,p.jsx)(g,{children:(0,p.jsx)("span",{children:q||""})})}),(0,p.jsx)(x,{className:"text-center p-2",children:(0,p.jsx)("div",{children:(0,p.jsx)(o.DW,{rounded:!0,alt:"example",onClick:()=>{N("")},src:w})})})]})]})},x=(0,d.ZP)(o.b7)(r||(r=(0,a.Z)(["\n  padding: 0.5rem 0;\n  background: #fafafa;\n  border: 1px dashed #d9d9d9;\n  border-radius: 2px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  div {\n    width: 75%;\n\n    & img {\n      max-width: 100%;\n      height: auto;\n      cursor: pointer;\n      max-height: 600px;\n    }\n  }\n"]))),g=d.ZP.div(s||(s=(0,a.Z)(["\n  width: 100%;\n  padding: 0 5px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n"])))},88688:(e,t,n)=>{"use strict";n.d(t,{Z:()=>h});var r,s,a=n(30168),l=n(72791),i=n(66770),c=n.n(i),o=(n(86009),n(78983)),d=n(44801),u=n(80184);const h=e=>{let{id:t,value:n,label:r,isRequired:s,readOnly:a=!1,setValue:i,maxLength:c,editorHeight:d=300}=e;const h=(0,l.useRef)(),[b,x]=(0,l.useState)(!1),g=(0,l.useMemo)((()=>({toolbar:{container:[["bold","italic","underline","strike"],["blockquote"],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{indent:"-1"},{indent:"+1"}],[{direction:"rtl"}],[{header:[1,2,3,4,5,6,!1]}],[{color:[]},{background:[]}],[{font:[]}],[{align:[]}],["clean"]]}})),[]),y=e=>{if(c){const t=null===e||void 0===e?void 0:e.replace(/<[^>]*>?| /g,"").length;c>=t?(i((()=>e)),x(!1)):x(!0)}else c||i((()=>e))};return(0,u.jsxs)(o.b7,{style:{height:"".concat(d,"px"),marginBottom:"20px"},className:"pb-5",children:[(0,u.jsxs)(o.L8,{htmlFor:"".concat(t,"Static"),className:"col-form-label",children:[(0,u.jsx)("span",{className:s&&"required",children:r||" * "}),(0,u.jsx)(p,{className:"px-lg-2",textLengthCheck:b,children:c?"* ".concat(c,"\uc790 \uae4c\uc9c0 \uc785\ub825 \uac00\ub2a5\ud569\ub2c8\ub2e4."):"  "})]}),(0,u.jsx)(m,{id:t||"",ref:e=>{null!==e&&(h.current=e)},value:n,defaultValue:n,onChange:e=>y(b?n:e),modules:g,readOnly:a,theme:"snow",placeholder:"\ub0b4\uc6a9\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694.",style:{height:"100%"}})]})},m=(0,d.ZP)(c())(r||(r=(0,a.Z)(["\n  background-color: ",";\n  border-radius: 0.375rem;\n  border: none;\n  padding-bottom: ",";\n  .ql-container {\n    border-radius: ",";\n    border-bottom-left-radius: 0.375rem;\n    border-bottom-right-radius: 0.375rem;\n  }\n  .ql-editor {\n    border-radius: ",";\n  }\n  .ql-toolbar {\n    border-top-left-radius: 0.375rem;\n    border-top-right-radius: 0.375rem;\n    display: ",";\n  }\n"])),(e=>{let{readOnly:t}=e;return t?"#d8dbe0":"transparent"}),(e=>{let{readOnly:t}=e;return t?"0":"67px"}),(e=>{let{readOnly:t}=e;return t?"0.375rem":"0"}),(e=>{let{readOnly:t}=e;return t?"0.375rem":"0"}),(e=>{let{readOnly:t}=e;return t?"none":"block"})),p=d.ZP.span(s||(s=(0,a.Z)(["\n  font-size: 12px;\n  padding-left: 10px;\n  //color: ",";\n"])),(e=>{let{textLengthCheck:t}=e;return t&&"red"}))},95646:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>j});var r=n(72791),s=n(20961),a=n(78983),l=n(70844);const i=[{key:"no",label:"No",_props:{color:"primary",className:"no"},filter:!1},{key:"title",label:"\ubc30\ub108 \ud0c0\uc774\ud2c0",_props:{color:"primary",className:"title"}},{key:"imageUrls",label:"\ubc30\ub108 \uc774\ubbf8\uc9c0",_props:{color:"primary",className:"image"},filter:!1,sorter:!1}];var c=n(96672),o=n(19311),d=n(3854),u=n(46327),h=n(86385),m=n(76030),p=n(88688),b=n(54105),x=n(80184);const g=e=>{let{getList:t,value:n,visible:s,setSelectedItem:l,setContent:i,content:g,setVisible:y,onChange:j,isReadOnly:f,setIsReadOnly:v}=e;const[w,N]=(0,r.useState)([]),q=()=>(0,u.xb)(n.title)?(alert("\ubc30\ub108 \ud0c0\uc774\ud2c0\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694."),!1):(0,u.xb)(g)||"<p><br></p>"===g?(alert("\ubc30\ub108 \ub0b4\uc6a9\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694."),!1):0!==w.length||(alert("\uc774\ubbf8\uc9c0\ub97c \ucca8\ubd80\ud574\uc8fc\uc138\uc694."),!1),Z=async()=>{const e=(0,m.HU)(w);try{if(!q())return;const{data:r}=await c.Z.request({data:{title:n.title,content:g,imageUrls:e},query:{},path:{id:n.bannerId},method:c.w.PATCH,url:"".concat(o.l.HOME_BANNER,"/:id")});r.isSuccess?(t(),O(),alert(r.result)):alert(r.message)}catch(r){alert(r)}},k=()=>{(f||-1===n.bannerId||window.confirm("\uc815\ub9d0 \ud398\uc774\uc9c0\uc5d0\uc11c \ub098\uac00\uc2dc\uaca0\uc2b5\ub2c8\uae4c? \n\n \uc9c0\uae08 \ud398\uc774\uc9c0\ub97c \ub098\uac00\uc2dc\uba74 \ubcc0\uacbd\uc0ac\ud56d\uc774 \uc800\uc7a5\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."))&&O()},O=()=>{N([]),y(!1),i(""),v(!0),l({bannerId:-1,title:"",content:"",imageUrls:[]})};return(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)(a.Tk,{alignment:"center",size:"lg",visible:s,children:[(0,x.jsx)(b.Z,{onClick:k,children:"\ub864\ub9c1\ubc30\ub108 \uc0c1\uc138"}),(0,x.jsxs)(a.sD,{children:[(0,x.jsx)(a.rb,{className:"mb-3",children:(0,x.jsx)(d.Z,{xs:4,onChange:j,id:"bannerId",placeholder:"ID",label:"No",readOnly:!0,disabled:!0,value:-1===n.bannerId?"":n.bannerId})}),(0,x.jsx)(a.rb,{className:"mb-3",children:(0,x.jsx)(d.Z,{onChange:j,id:"title",placeholder:"\uacf5\ubc31 \ud3ec\ud568 30\uc790 \uc774\ub0b4\ub85c \uc785\ub825\ud574\uc8fc\uc138\uc694.",label:"\ubc30\ub108 \ud0c0\uc774\ud2c0",readOnly:f,disabled:f,value:n.title,isRequired:!0})}),(0,x.jsx)(a.rb,{className:"mb-3",children:(0,x.jsx)(p.Z,{id:"content",value:g,isRequired:!0,readOnly:f,setValue:i,label:"\ubcf8\ubb38"})}),(0,x.jsx)(a.rb,{className:"pt-3",children:(0,x.jsx)(h.Z,{id:"image",label:"\uc774\ubbf8\uc9c0 \ucca8\ubd80",fileList:w,setFileList:N,images:n.imageUrls,imgPath:"home_banner_images",readOnly:f,isRequired:!0})})]}),(0,x.jsxs)(a.Ym,{children:[-1===n.bannerId?(0,x.jsx)(a.u5,{color:"primary",onClick:async()=>{try{if(!q())return;const e=(0,m.HU)(w),{data:r}=await c.Z.request({data:{title:n.title,content:g,imageUrls:e},query:{},path:{},method:c.w.POST,url:"".concat(o.l.HOME_BANNER)});console.log(r),r.isSuccess?(t(),alert("\ubc30\ub108 \ub4f1\ub85d\uc774 \uc644\ub8cc \ub418\uc5c8\uc2b5\ub2c8\ub2e4."),O()):alert(r.message)}catch(e){alert(e)}},children:"\ucd94\uac00"}):(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(a.u5,{color:"danger",onClick:()=>{window.confirm("\uc815\ub9d0 \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")&&(async()=>{try{const{data:e}=await c.Z.request({data:{},query:{},path:{id:n.bannerId},method:c.w.PATCH,url:"".concat(o.l.HOME_BANNER,"/:id/d")});e.isSuccess?(t(),alert(e.result),O()):alert(e.message)}catch(e){alert(e)}})()},children:"\uc0ad\uc81c"}),(0,x.jsx)(a.u5,{color:f?"primary":"success",onClick:()=>{f?v(!1):Z()},children:f?"\uc218\uc815":"\uc800\uc7a5"})]}),(0,x.jsx)(a.u5,{color:"secondary",onClick:k,children:"\ucde8\uc18c"})]})]})})};var y=n(64509);const j=()=>{const[e,t]=(0,r.useState)([]),[n,d]=(0,r.useState)(!1),[u,h]=(0,r.useState)(!0),[m,p]=(0,r.useState)(""),[b,j]=(0,r.useState)({bannerId:-1,title:"",content:"",imageUrls:[]}),f=async()=>{try{const e=await c.Z.request({data:{},query:{},path:{},method:c.w.GET,url:o.l.HOME_BANNER});t(null===e||void 0===e?void 0:e.data.result.responses)}catch(e){alert(e)}};(0,r.useEffect)((()=>{f()}),[]);return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(s.Z,{title:"\ub864\ub9c1\ubc30\ub108 \uad00\ub9ac"}),(0,x.jsx)(a.rb,{children:(0,x.jsx)(a.b7,{xs:12,children:(0,x.jsxs)(a.xH,{className:"mb-4",children:[(0,x.jsx)(a.bn,{children:(0,x.jsx)(a.lx,{className:"row g-3",children:(0,x.jsx)(a.b7,{xs:1,children:(0,x.jsx)(y.Z,{onClick:()=>{h(!1),j({bannerId:-1,title:"",content:"",imageUrls:[]}),p(""),d(!n)},children:"\ucd94\uac00"})})})}),(0,x.jsx)(a.sl,{children:(0,x.jsx)(l.Z,{items:e,onClick:async e=>{(async e=>{try{const{data:t}=await c.Z.request({data:{},query:{},path:{id:e},method:c.w.GET,url:"".concat(o.l.HOME_BANNER,"/:id")});j(t.result),p(t.result.content)}catch(t){alert(t)}})(e.bannerId),d(!n)},columns:i,className:"BannerList",datePickerHidden:!1})})]})})}),(0,x.jsx)(g,{onChange:e=>{let{target:t}=e;const{id:n,value:r}=t;j({...b,[n]:r})},visible:n,value:b,setVisible:d,isReadOnly:u,setIsReadOnly:h,getList:f,setSelectedItem:j,content:m,setContent:p})]})}},79286:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var r=n(87462),s=n(72791);const a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"};var l=n(54291),i=function(e,t){return s.createElement(l.Z,(0,r.Z)({},e,{ref:t,icon:a}))};const c=s.forwardRef(i)},28022:()=>{}}]);
//# sourceMappingURL=1984.e0be3dbd.chunk.js.map