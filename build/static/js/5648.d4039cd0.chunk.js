(self.webpackChunkneordinary_template_react_js_admin=self.webpackChunkneordinary_template_react_js_admin||[]).push([[5648],{3460:function(e,t,n){"use strict";var r=n(78983),s=n(80184);t.Z=function(e){var t=e.onClick,n=e.visible,i=e.setVisible;return(0,s.jsx)(r.Tk,{visible:n,alignment:"center",children:(0,s.jsxs)(r.PO,{children:[(0,s.jsx)(r.fl,{children:"\uc815\ub9d0 \ud398\uc774\uc9c0\uc5d0\uc11c \ub098\uac00\uc2dc\uaca0\uc2b5\ub2c8\uae4c?"}),(0,s.jsx)(r.sD,{children:"\uc9c0\uae08 \ud398\uc774\uc9c0\ub97c \ub098\uac00\uc2dc\uba74 \ubcc0\uacbd\uc0ac\ud56d\uc774 \uc800\uc7a5\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."}),(0,s.jsxs)(r.Ym,{children:[(0,s.jsx)(r.u5,{color:"danger",onClick:t,children:"\ub098\uac00\uae30"}),(0,s.jsx)(r.u5,{color:"primary",onClick:function(){return i(!1)},children:"Cancel"})]})]})})}},99921:function(e,t,n){"use strict";var r=n(78983),s=n(80184);t.Z=function(e){var t=e.visible,n=e.title,i=void 0===n?"\uc0ad\uc81c \ud655\uc778":n,a=e.children,l=e.onDelete,c=e.setVisible;return(0,s.jsxs)(r.Tk,{visible:t,alignment:"center",children:[(0,s.jsx)(r.p0,{children:(0,s.jsx)(r.fl,{children:i})}),(0,s.jsx)(r.sD,{children:a||"\uc815\ub9d0 \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?"}),(0,s.jsxs)(r.Ym,{children:[(0,s.jsx)(r.u5,{onClick:l,color:"primary",children:"\ud655\uc778"}),(0,s.jsx)(r.u5,{color:"secondary",onClick:function(){return c(!1)},children:"\ucde8\uc18c"})]})]})}},54105:function(e,t,n){"use strict";var r=n(80184);t.Z=function(e){var t=e.children,n=e.onClick;return(0,r.jsxs)("div",{className:"modal-header",children:[(0,r.jsx)("h5",{className:"modal-title",children:t}),(0,r.jsx)("button",{type:"button",className:"btn btn-close",onClick:n,"aria-label":"Close"})]})}},32967:function(e,t,n){"use strict";n.d(t,{Z:function(){return g}});var r=n(30168),s=n(1413),i=n(93433),a=n(72791),l={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M885.2 446.3l-.2-.8-112.2-285.1c-5-16.1-19.9-27.2-36.8-27.2H281.2c-17 0-32.1 11.3-36.9 27.6L139.4 443l-.3.7-.2.8c-1.3 4.9-1.7 9.9-1 14.8-.1 1.6-.2 3.2-.2 4.8V830a60.9 60.9 0 0060.8 60.8h627.2c33.5 0 60.8-27.3 60.9-60.8V464.1c0-1.3 0-2.6-.1-3.7.4-4.9 0-9.6-1.3-14.1zm-295.8-43l-.3 15.7c-.8 44.9-31.8 75.1-77.1 75.1-22.1 0-41.1-7.1-54.8-20.6S436 441.2 435.6 419l-.3-15.7H229.5L309 210h399.2l81.7 193.3H589.4zm-375 76.8h157.3c24.3 57.1 76 90.8 140.4 90.8 33.7 0 65-9.4 90.3-27.2 22.2-15.6 39.5-37.4 50.7-63.6h156.5V814H214.4V480.1z"}}]},name:"inbox",theme:"outlined"},c=n(54291),o=function(e,t){return a.createElement(c.Z,(0,s.Z)((0,s.Z)({},e),{},{ref:t,icon:l}))};o.displayName="InboxOutlined";var u,d=a.forwardRef(o),p=n(70655),f=n(91191),h=n(78983),m=n(74912),x=n.n(m),v=n(76030),b=n(80184),g=function(e){var t=e.files,n=e.label,r=e.id,l=e.disabled,c=e.fileList,o=e.setFileList,u=e.filePath,f=e.isRequired;(0,a.useEffect)((function(){t&&t.length>0&&o(t.map((function(e,t){return{key:t,uid:t,name:e.fileTitle?e.fileTitle:decodeURI(e.split("/")[e.split("/").length-1]),status:"done",url:e.file?e.file:(0,v.J0)(e)}})))}),[t]);var m={name:"file",multiple:!0,disabled:l,fileList:c,customRequest:function(e){!function(e){var t=e.file,n=e.onError,r=e.onProgress,s=e.onSuccess;x().config.update({region:"ap-northeast-2",accessKeyId:"AKIAWS5VDTBO4P55EYXT",secretAccessKey:"pzJVhC36B2Kl5RsNmVgthoSjAA4bQL64PwZrS4jM"});var i=new(x().S3),a=t.name.replaceAll(" ",""),l={Bucket:(0,v.DK)(u),Key:a,Body:t,ContentType:t.type};i.putObject(l).on("httpUploadProgress",(function(e){var t=e.loaded,n=e.total;return r({percent:t/n*100})})).promise().then((function(e){s(e.$response)}),(function(e){n(),console.log(e.code),console.log(e.message)}))}(e)},onSuccess:function(e){!function(e){var t=e.request.httpRequest,n=t.body,r=t.endpoint,s=r.protocol,a=r.host,l={uid:e.request.params.Key,name:n.name,status:"done",url:"".concat(s,"//").concat(a).concat(t.path)};o([].concat((0,i.Z)(c),[l]))}(e)},onRemove:function(e){var t;t=e,o(c.filter((function(e){return e.uid!==t.uid})))}};return(0,b.jsx)(b.Fragment,{children:(0,b.jsxs)(j,{className:l,children:[(0,b.jsx)(h.L8,{className:f?"required":"",children:n||""}),(0,b.jsxs)(p.Z.Dragger,(0,s.Z)((0,s.Z)({},m),{},{id:r,children:[(0,b.jsx)("p",{className:"ant-upload-drag-icon",children:(0,b.jsx)(d,{})}),(0,b.jsx)("p",{className:"ant-upload-text",children:"\uc5c5\ub85c\ub4dc\ud558\ub824\uba74 \uc774 \uc601\uc5ed\uc73c\ub85c \ud30c\uc77c\uc744 \ud074\ub9ad\ud558\uac70\ub098 \ub4dc\ub798\uadf8\ud558\uc138\uc694."})]}))]})})},j=f.ZP.div(u||(u=(0,r.Z)(["\n  border-radius: 0.375rem;\n  &.disabled {\n    background: #d8dbe0;\n  }\n  & .ant-upload-disabled {\n    background: #d8dbe0;\n    border: 0.5px dashed #b1b7c1;\n    opacity: 1;\n  }\n  & > span {\n    display: flex;\n    flex-direction: column;\n  }\n"])))},86385:function(e,t,n){"use strict";var r,s=n(30168),i=n(93433),a=n(74165),l=n(15861),c=n(29439),o=n(79286),u=n(70655),d=n(72791),p=n(78983),f=n(91191),h=n(74912),m=n.n(h),x=n(76030),v=n(80184),b=function(e){return new Promise((function(t,n){var r=new FileReader;r.readAsDataURL(e),r.onload=function(){return t(r.result)},r.onerror=function(e){return n(e)}}))};t.Z=function(e){var t=e.images,n=e.id,r=e.label,s=e.fileList,f=e.setFileList,h=e.imgPath,j=e.isRequired,Z=e.readOnly,y=e.oneSheet,k=void 0!==y&&y,S=(0,d.useState)(!1),C=(0,c.Z)(S,2),w=(C[0],C[1]),T=(0,d.useState)(""),q=(0,c.Z)(T,2),N=q[0],O=q[1],I=(0,d.useState)(""),A=(0,c.Z)(I,2),E=A[0],R=A[1];(0,d.useEffect)((function(){t&&t.length>0&&f(t.map((function(e){return{uid:e,name:decodeURI(e.split("/")[e.split("/").length-1]),status:"done",url:(0,x.J0)(e)}})))}),[t,f]);var L=function(){var e=(0,l.Z)((0,a.Z)().mark((function e(t){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.url||t.preview){e.next=4;break}return e.next=3,b(t.originFileObj);case 3:t.preview=e.sent;case 4:O(t.url||t.preview),w(!0),R(t.name||t.url.substring(t.url.lastIndexOf("/")+1));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),U=(0,v.jsxs)("div",{children:[(0,v.jsx)(o.Z,{}),(0,v.jsx)("div",{style:{marginTop:8},children:"Upload"})]});return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(p.L8,{htmlFor:"".concat(n,"Static"),className:"col-sm-2 col-form-label",children:(0,v.jsx)("span",{className:j&&"required",children:r||" * "})}),(0,v.jsx)(u.Z,{listType:"picture-card",fileList:s,onPreview:L,onSuccess:function(e){return function(e){var t=e.request.httpRequest,n=t.body,r=t.endpoint,a=r.protocol,l=r.host,c={uid:e.request.params.Key,name:n.name,status:"done",url:"".concat(a,"//").concat(l).concat(t.path)};f([].concat((0,i.Z)(s),[c]))}(e)},onRemove:function(e){return t=e,void f(s.filter((function(e){return e.uid!==t.uid})));var t},customRequest:function(e){return function(e){var t=e.file,n=e.onError,r=e.onProgress,i=e.onSuccess;if(k&&1===s.length)alert("\uc774\ubbf8\uc9c0\ub294 \ud55c\uc7a5\ub9cc \ub4f1\ub85d \uac00\ub2a5\ud569\ub2c8\ub2e4!");else{m().config.update({region:"ap-northeast-2",accessKeyId:"AKIAWS5VDTBO4P55EYXT",secretAccessKey:"pzJVhC36B2Kl5RsNmVgthoSjAA4bQL64PwZrS4jM"});var a=new(m().S3),l=t.name.replaceAll(" ",""),c={Bucket:(0,x.AA)(h),Key:l,Body:t,ContentType:t.type};a.putObject(c).on("httpUploadProgress",(function(e){var t=e.loaded,n=e.total;return r({percent:t/n*100})})).promise().then((function(e){i(e.$response)}),(function(e){n(),console.log(e.code),console.log(e.message)}))}}(e)},disabled:Z,children:(null===s||void 0===s?void 0:s.length)>=8?null:!Z&&U}),N&&(0,v.jsxs)(p.b7,{children:[(0,v.jsx)(p.L8,{className:"col-form-label",children:(0,v.jsx)("span",{children:E||""})}),(0,v.jsx)(g,{className:"text-center p-2",children:(0,v.jsx)(p.DW,{rounded:!0,alt:"example",onClick:function(){O("")},src:N,width:300,height:300})})]})]})};var g=(0,f.ZP)(p.b7)(r||(r=(0,s.Z)(["\n  padding: 0.5rem 0;\n  background: #fafafa;\n  border: 1px dashed #d9d9d9;\n  border-radius: 2px;\n  & img {\n    cursor: pointer;\n  }\n"])))},3854:function(e,t,n){"use strict";var r=n(78983),s=(n(72791),n(80184));t.Z=function(e){var t=e.type,n=e.onChange,i=e.id,a=e.placeholder,l=e.value,c=e.label,o=e.readOnly,u=e.disabled,d=e.isRequired,p=e.xs;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.L8,{htmlFor:"".concat(i,"Static"),className:"col-sm-2 col-form-label",children:(0,s.jsx)("span",{className:d?"required":"",children:c||" * "})}),(0,s.jsx)(r.b7,{className:"align-items-center",xs:p,style:{display:"flex"},children:(0,s.jsx)(r.jO,{type:t||"text",id:i,placeholder:a||"",value:"file"===t?void 0:l||"",onChange:n,readOnly:o,disabled:u})})]})}},88688:function(e,t,n){"use strict";var r,s=n(30168),i=n(74165),a=n(1413),l=n(15861),c=n(72791),o=n(66770),u=n.n(o),d=(n(86009),n(78983)),p=n(91191),f=n(80184);t.Z=function(e){var t=e.id,n=e.value,r=e.label,s=e.isRequired,o=e.readOnly,u=void 0!==o&&o,p=e.setValue,m=(0,c.useRef)(),x=function(){var e=document.createElement("input"),t=new FormData,n="";e.setAttribute("type","file"),e.setAttribute("accept","image/*"),e.click(),e.onchange=(0,l.Z)((0,i.Z)().mark((function r(){var s,l,c,o,u,d,p;return(0,i.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(s=e.files,console.log(s),null===s){r.next=14;break}return t.append("image",s[0]),r.prev=4,o=n=o.data.url,null!==(u=null===(l=m.current)||void 0===l||null===(c=l.getEditor().getSelection())||void 0===c?void 0:c.index)&&void 0!==u&&(null===(p=null===(d=m.current)||void 0===d?void 0:d.getEditor())||void 0===p||p.setSelection(u,1),null===p||void 0===p||p.clipboard.dangerouslyPasteHTML(u,"<img src=".concat(n,' alt="\uc774\ubbf8\uc9c0 \ud0dc\uadf8\uac00 \uc0bd\uc785\ub429\ub2c8\ub2e4." />'))),r.abrupt("return",(0,a.Z)((0,a.Z)({},o),{},{success:!0}));case 11:return r.prev=11,r.t0=r.catch(4),r.abrupt("return",(0,a.Z)((0,a.Z)({},r.t0.response),{},{success:!1}));case 14:case"end":return r.stop()}}),r,null,[[4,11]])})))},v=(0,c.useMemo)((function(){return{toolbar:{container:[["bold","italic","underline","strike","blockquote"],[{size:["small",!1,"large","huge"]},{color:[]}],[{list:"ordered"},{list:"bullet"},{indent:"-1"},{indent:"+1"},{align:[]}],["image","video"]],handlers:{image:x}}}}),[]);return(0,f.jsxs)(d.b7,{style:{height:"300px"},className:"pb-5",children:[(0,f.jsx)(d.L8,{htmlFor:"".concat(t,"Static"),className:"col-sm-2 col-form-label",children:(0,f.jsx)("span",{className:s&&"required",children:r||" * "})}),(0,f.jsx)(h,{id:t||"",ref:function(e){null!==e&&(m.current=e)},value:n,onChange:p,modules:v,readOnly:u,theme:"snow",placeholder:"\ub0b4\uc6a9\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694.",style:{height:"100%"}})]})};var h=(0,p.ZP)(u())(r||(r=(0,s.Z)(["\n  background-color: ",";\n\n  .ql-toolbar {\n    display: ",";\n  }\n"])),(function(e){return e.readOnly?"#d8dbe0":"transparent"}),(function(e){return e.readOnly?"none":"block"}))},19080:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return T}});var r=n(4942),s=n(1413),i=n(74165),a=n(15861),l=n(29439),c=n(72791),o=n(20961),u=n(78983),d=n(38654),p=[{key:"no",label:"No",_props:{color:"primary",className:"no"}},{key:"title",label:"\uacf5\uace0\uc81c\ubaa9",_props:{color:"primary",className:"title"}},{key:"createdAt",label:"\ub4f1\ub85d\uc77c",_props:{color:"primary",className:"createdAt"}}],f=n(96672),h=n(19311),m=n(3854),x=n(99921),v=n(54105),b=n(3460),g=n(86385),j=n(59434),Z=n(46327),y=n(76030),k=n(32967),S=n(88688),C=n(80184),w=function(e){var t=e.getList,n=e.value,r=e.visible,s=e.setSelectedItem,o=e.setContent,d=e.content,p=e.setVisible,w=e.onChange,T=e.isReadOnly,q=e.setIsReadOnly,N=(0,c.useState)(!1),O=(0,l.Z)(N,2),I=O[0],A=O[1],E=(0,c.useState)(!1),R=(0,l.Z)(E,2),L=R[0],U=R[1],P=(0,c.useState)([]),V=(0,l.Z)(P,2),_=V[0],F=V[1],D=(0,c.useState)([]),H=(0,l.Z)(D,2),K=H[0],B=H[1],z=(0,j.I0)(),M=function(){return(0,Z.xb)(n.title)?(alert("\uacf5\uc9c0 \uc81c\ubaa9\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694."),!1):!(0,Z.xb)(d)||(alert("\uacf5\uc9c0 \ub0b4\uc6a9\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694."),!1)},Y=function(){var e=(0,a.Z)((0,i.Z)().mark((function e(){var r,s,a,l;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,M()){e.next=3;break}return e.abrupt("return");case 3:return r=(0,y.HU)(_),s=(0,y.HU)(K),e.next=7,f.Z.request({data:{title:n.title,content:d,imageUrls:r,fileUrls:s},query:{},path:{},method:f.w.POST,url:"".concat(h.l.NOTICE)});case 7:a=e.sent,l=a.data,console.log(l),l.isSuccess?(t(),A(!1),z({type:"SET_TOAST_STATE",visibleState:!0,toastColor:"success",textColor:"white",text:"\uacf5\uc9c0\uac00 \uc815\uc0c1\uc801\uc73c\ub85c \uc0dd\uc131 \ub418\uc5c8\uc2b5\ub2c8\ub2e4."}),Q()):alert(l.message),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),alert(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}(),J=function(){var e=(0,a.Z)((0,i.Z)().mark((function e(){var r,s;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.Z.request({data:{},query:{},path:{id:n.noticeId},method:f.w.PATCH,url:"".concat(h.l.NOTICE,"/:id/d")});case 3:r=e.sent,(s=r.data).isSuccess&&(t(),A(!1),z({type:"SET_TOAST_STATE",visibleState:!0,toastColor:"success",textColor:"white",text:"".concat(s.result)}),Q()),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),alert(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),W=function(){var e=(0,a.Z)((0,i.Z)().mark((function e(){var r,s,a,l;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=(0,y.HU)(_),s=(0,y.HU)(K),e.prev=2,M()){e.next=5;break}return e.abrupt("return");case 5:return e.next=7,f.Z.request({data:{title:n.title,content:d,imageUrls:r,fileUrls:s},query:{},path:{id:n.noticeId},method:f.w.PATCH,url:"".concat(h.l.NOTICE,"/:id")});case 7:a=e.sent,(l=a.data).isSuccess&&(t(),Q(),A(!1),z({type:"SET_TOAST_STATE",visibleState:!0,toastColor:"success",textColor:"white",text:"".concat(l.result)})),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),alert(e.t0);case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(){return e.apply(this,arguments)}}(),G=function(){T||-1===n.noticeId?(p(!1),q(!0),F([]),B([]),s({noticeId:-1,title:"",createdAt:"",content:"",imageUrls:[],fileUrls:[]})):U(!0)},Q=function(){U(!1),F([]),B([]),p(!1),o(""),q(!0),s({noticeId:-1,title:"",createdAt:"",content:"",imageUrls:[],fileUrls:[]})};return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)(u.Tk,{alignment:"center",size:"lg",visible:r,children:[(0,C.jsx)(v.Z,{onClick:G,children:"\uacf5\uc9c0 \uc0c1\uc138"}),(0,C.jsxs)(u.sD,{children:[(0,C.jsx)(u.rb,{className:"mb-3",children:(0,C.jsx)(m.Z,{xs:4,onChange:w,id:"noticeId",placeholder:"ID",label:"ID",readOnly:!0,disabled:!0,value:-1===n.noticeId?"":n.noticeId})}),(0,C.jsx)(u.rb,{className:"mb-3",children:(0,C.jsx)(m.Z,{onChange:w,id:"title",placeholder:"\uacf5\uc9c0 \uc81c\ubaa9\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694",label:"\uacf5\uc9c0 \uc81c\ubaa9",value:n.title,isRequired:!0,readOnly:T,disabled:T})}),(0,C.jsx)(u.rb,{className:"mb-3",children:(0,C.jsx)(S.Z,{id:"content",value:d,isRequired:!0,readOnly:T,setValue:o,label:"\uacf5\uc9c0 \ubcf8\ubb38"})}),(0,C.jsx)(u.rb,{className:"mb-3 pt-3",children:(0,C.jsx)(g.Z,{id:"image",label:"\uc774\ubbf8\uc9c0 \ucca8\ubd80",fileList:_,setFileList:F,images:n.imageUrls,imgPath:"notice_images",readOnly:T})}),(0,C.jsx)(u.rb,{className:"mb-3",children:(0,C.jsx)(k.Z,{id:"files",label:"\ud30c\uc77c \ucca8\ubd80",files:n.fileUrls,disabled:T,fileList:K,setFileList:B,filePath:"notice_files"})})]}),(0,C.jsxs)(u.Ym,{children:[-1===n.noticeId?(0,C.jsx)(u.u5,{color:"primary",onClick:Y,children:"\ucd94\uac00"}):(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(u.u5,{color:"danger",onClick:function(){return A(!0)},children:"\uc0ad\uc81c"}),(0,C.jsx)(u.u5,{color:T?"primary":"success",onClick:function(){T?q(!1):W()},children:"\uc218\uc815"})]}),(0,C.jsx)(u.u5,{color:"primary",onClick:G,children:"Cancel"})]})]}),(0,C.jsx)(x.Z,{onDelete:J,visible:I,setVisible:A}),(0,C.jsx)(b.Z,{onClick:Q,visible:L,setVisible:U})]})},T=function(){var e=(0,c.useState)([]),t=(0,l.Z)(e,2),n=t[0],m=t[1],x=(0,c.useState)(!1),v=(0,l.Z)(x,2),b=v[0],g=v[1],j=(0,c.useState)(!0),Z=(0,l.Z)(j,2),y=Z[0],k=Z[1],S=(0,c.useState)(""),T=(0,l.Z)(S,2),q=T[0],N=T[1],O=(0,c.useState)({noticeId:-1,title:"",createdAt:"",content:"",imageUrls:[],fileUrls:[]}),I=(0,l.Z)(O,2),A=I[0],E=I[1],R=function(){var e=(0,a.Z)((0,i.Z)().mark((function e(){var t;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.Z.request({data:{},query:{},path:{},method:f.w.GET,url:h.l.NOTICE});case 3:t=e.sent,m(null===t||void 0===t?void 0:t.data.result.responses),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),alert(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),L=function(){var e=(0,a.Z)((0,i.Z)().mark((function e(t){var n,r;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.Z.request({data:{},query:{},path:{id:t},method:f.w.GET,url:"".concat(h.l.NOTICE,"/:id")});case 3:n=e.sent,r=n.data,E(r.result),N(r.result.content),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),alert(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}();(0,c.useEffect)((function(){R()}),[]);var U=function(){var e=(0,a.Z)((0,i.Z)().mark((function e(t){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:L(t.noticeId),g(!b);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(o.Z,{title:"\uacf5\uc9c0\uc0ac\ud56d"}),(0,C.jsx)(u.rb,{children:(0,C.jsx)(u.b7,{xs:12,children:(0,C.jsxs)(u.xH,{className:"mb-4",children:[(0,C.jsx)(u.bn,{children:(0,C.jsxs)(u.lx,{className:"row g-3",children:[(0,C.jsx)(u.b7,{xs:1,children:(0,C.jsx)(u.u5,{color:"primary",onClick:R,children:"\uc870\ud68c\ud558\uae30"})}),(0,C.jsx)(u.b7,{xs:1,children:(0,C.jsx)(u.u5,{color:"primary",onClick:function(){k(!1),E({noticeId:-1,title:"",createdAt:"",content:"",imageUrls:[],fileUrls:[]}),N(""),g(!b)},children:"\ucd94\uac00"})})]})}),(0,C.jsx)(u.sl,{children:(0,C.jsx)(d.Z,{items:n,onClick:U,columns:p,className:"userList"})})]})})}),(0,C.jsx)(w,{onChange:function(e){var t=e.target,n=t.id,i=t.value;E((0,s.Z)((0,s.Z)({},A),{},(0,r.Z)({},n,i)))},visible:b,value:A,setVisible:g,isReadOnly:y,setIsReadOnly:k,getList:R,setSelectedItem:E,content:q,setContent:N})]})}},79286:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(1413),s=n(72791),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"},a=n(54291),l=function(e,t){return s.createElement(a.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:t,icon:i}))};l.displayName="PlusOutlined";var c=s.forwardRef(l)},28022:function(){}}]);
//# sourceMappingURL=5648.d4039cd0.chunk.js.map