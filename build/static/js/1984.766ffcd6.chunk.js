(self.webpackChunkneordinary_template_react_js_admin=self.webpackChunkneordinary_template_react_js_admin||[]).push([[1984],{54105:function(e,n,t){"use strict";var r=t(80184);n.Z=function(e){var n=e.children,t=e.onClick;return(0,r.jsxs)("div",{className:"modal-header",children:[(0,r.jsx)("h5",{className:"modal-title",children:n}),(0,r.jsx)("button",{type:"button",className:"btn btn-close",onClick:t,"aria-label":"Close"})]})}},86385:function(e,n,t){"use strict";var r,a,s=t(30168),i=t(93433),l=t(74165),c=t(15861),o=t(29439),u=t(79286),d=t(70655),h=t(72791),p=t(78983),f=t(91191),m=t(74912),x=t.n(m),b=t(76030),v=t(80184),g=function(e){return new Promise((function(n,t){var r=new FileReader;r.readAsDataURL(e),r.onload=function(){return n(r.result)},r.onerror=function(e){return t(e)}}))};n.Z=function(e){var n=e.images,t=e.id,r=e.label,a=e.fileList,s=e.setFileList,f=e.imgPath,m=e.isRequired,y=e.readOnly,w=e.oneSheet,k=void 0!==w&&w,N=e.maxFileLength,q=void 0===N?1:N,O=(0,h.useState)(!1),C=(0,o.Z)(O,2),S=(C[0],C[1]),R=(0,h.useState)(""),I=(0,o.Z)(R,2),L=I[0],_=I[1],E=(0,h.useState)(""),P=(0,o.Z)(E,2),A=P[0],H=P[1];(0,h.useEffect)((function(){n&&n.length>0&&s(n.map((function(e){return{uid:e,name:decodeURI(e.split("/")[e.split("/").length-1]),status:"done",url:(0,b.J0)(e)}})))}),[n,s]);var F=function(){var e=(0,c.Z)((0,l.Z)().mark((function e(n){return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.url||n.preview){e.next=4;break}return e.next=3,g(n.originFileObj);case 3:n.preview=e.sent;case 4:_(n.url||n.preview),S(!0),H(n.name||n.url.substring(n.url.lastIndexOf("/")+1));case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),U=(0,v.jsxs)("div",{children:[(0,v.jsx)(u.Z,{}),(0,v.jsx)("div",{style:{marginTop:8},children:"Upload"})]}),B=(0,v.jsx)("div",{children:"Have No Image."});return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(p.L8,{htmlFor:"".concat(t,"Static"),className:"col-form-label",children:(0,v.jsx)("span",{className:m&&"required",children:r||" * "})}),(0,v.jsx)(d.Z,{listType:"picture-card",fileList:a,onPreview:F,onSuccess:function(e){return function(e){var n=e.request.httpRequest,t=n.body,r=n.endpoint,l=r.protocol,c=r.host,o={uid:e.request.params.Key,name:t.name,status:"done",url:"".concat(l,"//").concat(c).concat(n.path)};s([].concat((0,i.Z)(a),[o]))}(e)},onRemove:function(e){return n=e,void s(a.filter((function(e){return e.uid!==n.uid})));var n},customRequest:function(e){return function(e){var n=e.file,t=e.onError,r=e.onProgress,s=e.onSuccess;if(k&&a.length===q)alert("\uc774\ubbf8\uc9c0\ub294 \ucd5c\ub300 ".concat(q,"\uac1c\ub9cc \ub4f1\ub85d \uac00\ub2a5\ud569\ub2c8\ub2e4!"));else{x().config.update({region:"ap-northeast-2",accessKeyId:"AKIAWS5VDTBO4P55EYXT",secretAccessKey:"pzJVhC36B2Kl5RsNmVgthoSjAA4bQL64PwZrS4jM"});var i=new(x().S3),l=n.name.replaceAll(" ",""),c={Bucket:(0,b.AA)(f),Key:l,Body:n,ContentType:n.type};i.putObject(c).on("httpUploadProgress",(function(e){var n=e.loaded,t=e.total;return r({percent:n/t*100})})).promise().then((function(e){s(e.$response)}),(function(e){t(),console.log(e.code),console.log(e.message)}))}}(e)},disabled:y,children:(null===a||void 0===a?void 0:a.length)>=8?null:0===(null===a||void 0===a?void 0:a.length)?y?B:U:y?null:U}),L&&(0,v.jsxs)(p.b7,{children:[(0,v.jsx)(p.L8,{className:"col-form-label w-75",children:(0,v.jsx)(j,{children:(0,v.jsx)("span",{children:A||""})})}),(0,v.jsx)(Z,{className:"text-center p-2",children:(0,v.jsx)("div",{children:(0,v.jsx)(p.DW,{rounded:!0,alt:"example",onClick:function(){_("")},src:L})})})]})]})};var Z=(0,f.ZP)(p.b7)(r||(r=(0,s.Z)(["\n  padding: 0.5rem 0;\n  background: #fafafa;\n  border: 1px dashed #d9d9d9;\n  border-radius: 2px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  div {\n    width: 75%;\n\n    & img {\n      max-width: 100%;\n      height: auto;\n      cursor: pointer;\n      max-height: 600px;\n    }\n  }\n"]))),j=f.ZP.div(a||(a=(0,s.Z)(["\n  width: 100%;\n  padding: 0 5px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n"])))},3854:function(e,n,t){"use strict";var r=t(78983),a=(t(72791),t(80184));n.Z=function(e){var n=e.type,t=e.onChange,s=e.id,i=e.placeholder,l=e.value,c=e.label,o=e.readOnly,u=e.disabled,d=e.isRequired,h=e.xs;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.L8,{htmlFor:"".concat(s,"Static"),className:"col-sm-2 col-form-label",children:(0,a.jsx)("span",{className:d?"required":"",children:c||" * "})}),(0,a.jsx)(r.b7,{className:"align-items-center",xs:h,style:{display:"flex"},children:(0,a.jsx)(r.jO,{type:n||"text",id:s,placeholder:i||"",value:"file"===n?void 0:l||"",onChange:t,readOnly:o,disabled:u})})]})}},88688:function(e,n,t){"use strict";var r,a,s=t(30168),i=(t(74165),t(1413),t(15861),t(29439)),l=t(72791),c=t(66770),o=t.n(c),u=(t(86009),t(78983)),d=t(91191),h=t(80184);n.Z=function(e){var n=e.id,t=e.value,r=e.label,a=e.isRequired,s=e.readOnly,c=void 0!==s&&s,o=e.setValue,d=e.maxLength,m=e.editorHeight,x=void 0===m?300:m,b=(0,l.useRef)(),v=(0,l.useState)(!1),g=(0,i.Z)(v,2),Z=g[0],j=g[1],y=(0,l.useMemo)((function(){return{toolbar:{container:[["bold","italic","underline","strike"],["blockquote"],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{indent:"-1"},{indent:"+1"}],[{direction:"rtl"}],[{header:[1,2,3,4,5,6,!1]}],[{color:[]},{background:[]}],[{font:[]}],[{align:[]}],["clean"]]}}}),[]),w=function(e){if(d){var n=null===e||void 0===e?void 0:e.replace(/<[^>]*>?| /g,"").length;d>=n?(o((function(){return e})),j(!1)):j(!0)}else d||o((function(){return e}))};return(0,h.jsxs)(u.b7,{style:{height:"".concat(x,"px"),marginBottom:"20px"},className:"pb-5",children:[(0,h.jsxs)(u.L8,{htmlFor:"".concat(n,"Static"),className:"col-form-label",children:[(0,h.jsx)("span",{className:a&&"required",children:r||" * "}),(0,h.jsx)(f,{className:"px-lg-2",textLengthCheck:Z,children:d?"* ".concat(d,"\uc790 \uae4c\uc9c0 \uc785\ub825 \uac00\ub2a5\ud569\ub2c8\ub2e4."):"  "})]}),(0,h.jsx)(p,{id:n||"",ref:function(e){null!==e&&(b.current=e)},value:t,defaultValue:t,onChange:function(e){return w(Z?t:e)},modules:y,readOnly:c,theme:"snow",placeholder:"\ub0b4\uc6a9\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694.",style:{height:"100%"}})]})};var p=(0,d.ZP)(o())(r||(r=(0,s.Z)(["\n  background-color: ",";\n  border-radius: 0.375rem;\n  border: none;\n  padding-bottom: ",";\n  .ql-container {\n    border-radius: ",";\n    border-bottom-left-radius: 0.375rem;\n    border-bottom-right-radius: 0.375rem;\n  }\n  .ql-editor {\n    border-radius: ",";\n  }\n  .ql-toolbar {\n    border-top-left-radius: 0.375rem;\n    border-top-right-radius: 0.375rem;\n    display: ",";\n  }\n"])),(function(e){return e.readOnly?"#d8dbe0":"transparent"}),(function(e){return e.readOnly?"0":"67px"}),(function(e){return e.readOnly?"0.375rem":"0"}),(function(e){return e.readOnly?"0.375rem":"0"}),(function(e){return e.readOnly?"none":"block"})),f=d.ZP.span(a||(a=(0,s.Z)(["\n  font-size: 12px;\n  padding-left: 10px;\n  //color: ",";\n"])),(function(e){return e.textLengthCheck&&"red"}))},95646:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return k}});var r=t(4942),a=t(1413),s=t(74165),i=t(15861),l=t(29439),c=t(72791),o=t(20961),u=t(78983),d=t(70844),h=[{key:"no",label:"No",_props:{color:"primary",className:"no"},filter:!1},{key:"title",label:"\ubc30\ub108 \ud0c0\uc774\ud2c0",_props:{color:"primary",className:"title"}},{key:"imageUrls",label:"\ubc30\ub108 \uc774\ubbf8\uc9c0",_props:{color:"primary",className:"image"},filter:!1,sorter:!1}],p=t(96672),f=t(19311),m=t(3854),x=t(46327),b=t(86385),v=t(76030),g=t(88688),Z=t(54105),j=t(80184),y=function(e){var n=e.getList,t=e.value,r=e.visible,a=e.setSelectedItem,o=e.setContent,d=e.content,h=e.setVisible,y=e.onChange,w=e.isReadOnly,k=e.setIsReadOnly,N=(0,c.useState)([]),q=(0,l.Z)(N,2),O=q[0],C=q[1],S=function(){return(0,x.xb)(t.title)?(alert("\ubc30\ub108 \ud0c0\uc774\ud2c0\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694."),!1):(0,x.xb)(d)||"<p><br></p>"===d?(alert("\ubc30\ub108 \ub0b4\uc6a9\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694."),!1):0!==O.length||(alert("\uc774\ubbf8\uc9c0\ub97c \ucca8\ubd80\ud574\uc8fc\uc138\uc694."),!1)},R=function(){var e=(0,i.Z)((0,s.Z)().mark((function e(){var r,a,i;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,S()){e.next=3;break}return e.abrupt("return");case 3:return r=(0,v.HU)(O),e.next=6,p.Z.request({data:{title:t.title,content:d,imageUrls:r},query:{},path:{},method:p.w.POST,url:"".concat(f.l.HOME_BANNER)});case 6:a=e.sent,i=a.data,console.log(i),i.isSuccess?(n(),alert("\ubc30\ub108 \ub4f1\ub85d\uc774 \uc644\ub8cc \ub418\uc5c8\uc2b5\ub2c8\ub2e4."),E()):alert(i.message),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),alert(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=(0,i.Z)((0,s.Z)().mark((function e(){var r,a;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.Z.request({data:{},query:{},path:{id:t.bannerId},method:p.w.PATCH,url:"".concat(f.l.HOME_BANNER,"/:id/d")});case 3:r=e.sent,(a=r.data).isSuccess?(n(),alert(a.result),E()):alert(a.message),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),alert(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),L=function(){var e=(0,i.Z)((0,s.Z)().mark((function e(){var r,a,i;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=(0,v.HU)(O),e.prev=1,S()){e.next=4;break}return e.abrupt("return");case 4:return e.next=6,p.Z.request({data:{title:t.title,content:d,imageUrls:r},query:{},path:{id:t.bannerId},method:p.w.PATCH,url:"".concat(f.l.HOME_BANNER,"/:id")});case 6:a=e.sent,(i=a.data).isSuccess?(n(),E(),alert(i.result)):alert(i.message),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),alert(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(){return e.apply(this,arguments)}}(),_=function(){(w||-1===t.bannerId||window.confirm("\uc815\ub9d0 \ud398\uc774\uc9c0\uc5d0\uc11c \ub098\uac00\uc2dc\uaca0\uc2b5\ub2c8\uae4c? \n\n \uc9c0\uae08 \ud398\uc774\uc9c0\ub97c \ub098\uac00\uc2dc\uba74 \ubcc0\uacbd\uc0ac\ud56d\uc774 \uc800\uc7a5\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."))&&E()},E=function(){C([]),h(!1),o(""),k(!0),a({bannerId:-1,title:"",content:"",imageUrls:[]})};return(0,j.jsx)(j.Fragment,{children:(0,j.jsxs)(u.Tk,{alignment:"center",size:"lg",visible:r,children:[(0,j.jsx)(Z.Z,{onClick:_,children:"\ub864\ub9c1\ubc30\ub108 \uc0c1\uc138"}),(0,j.jsxs)(u.sD,{children:[(0,j.jsx)(u.rb,{className:"mb-3",children:(0,j.jsx)(m.Z,{xs:4,onChange:y,id:"bannerId",placeholder:"ID",label:"No",readOnly:!0,disabled:!0,value:-1===t.bannerId?"":t.bannerId})}),(0,j.jsx)(u.rb,{className:"mb-3",children:(0,j.jsx)(m.Z,{onChange:y,id:"title",placeholder:"\uacf5\ubc31 \ud3ec\ud568 30\uc790 \uc774\ub0b4\ub85c \uc785\ub825\ud574\uc8fc\uc138\uc694.",label:"\ubc30\ub108 \ud0c0\uc774\ud2c0",readOnly:w,disabled:w,value:t.title,isRequired:!0})}),(0,j.jsx)(u.rb,{className:"mb-3",children:(0,j.jsx)(g.Z,{id:"content",value:d,isRequired:!0,readOnly:w,setValue:o,label:"\ubcf8\ubb38"})}),(0,j.jsx)(u.rb,{className:"pt-3",children:(0,j.jsx)(b.Z,{id:"image",label:"\uc774\ubbf8\uc9c0 \ucca8\ubd80",fileList:O,setFileList:C,images:t.imageUrls,imgPath:"home_banner_images",readOnly:w,isRequired:!0})})]}),(0,j.jsxs)(u.Ym,{children:[-1===t.bannerId?(0,j.jsx)(u.u5,{color:"primary",onClick:R,children:"\ucd94\uac00"}):(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(u.u5,{color:"danger",onClick:function(){window.confirm("\uc815\ub9d0 \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")&&I()},children:"\uc0ad\uc81c"}),(0,j.jsx)(u.u5,{color:w?"primary":"success",onClick:function(){w?k(!1):L()},children:w?"\uc218\uc815":"\uc800\uc7a5"})]}),(0,j.jsx)(u.u5,{color:"secondary",onClick:_,children:"\ucde8\uc18c"})]})]})})},w=t(64509),k=function(){var e=(0,c.useState)([]),n=(0,l.Z)(e,2),t=n[0],m=n[1],x=(0,c.useState)(!1),b=(0,l.Z)(x,2),v=b[0],g=b[1],Z=(0,c.useState)(!0),k=(0,l.Z)(Z,2),N=k[0],q=k[1],O=(0,c.useState)(""),C=(0,l.Z)(O,2),S=C[0],R=C[1],I=(0,c.useState)({bannerId:-1,title:"",content:"",imageUrls:[]}),L=(0,l.Z)(I,2),_=L[0],E=L[1],P=function(){var e=(0,i.Z)((0,s.Z)().mark((function e(){var n;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.Z.request({data:{},query:{},path:{},method:p.w.GET,url:f.l.HOME_BANNER});case 3:n=e.sent,m(null===n||void 0===n?void 0:n.data.result.responses),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),alert(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=(0,i.Z)((0,s.Z)().mark((function e(n){var t,r;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.Z.request({data:{},query:{},path:{id:n},method:p.w.GET,url:"".concat(f.l.HOME_BANNER,"/:id")});case 3:t=e.sent,r=t.data,E(r.result),R(r.result.content),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),alert(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(n){return e.apply(this,arguments)}}();(0,c.useEffect)((function(){P()}),[]);var H=function(){var e=(0,i.Z)((0,s.Z)().mark((function e(n){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:A(n.bannerId),g(!v);case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(o.Z,{title:"\ub864\ub9c1\ubc30\ub108 \uad00\ub9ac"}),(0,j.jsx)(u.rb,{children:(0,j.jsx)(u.b7,{xs:12,children:(0,j.jsxs)(u.xH,{className:"mb-4",children:[(0,j.jsx)(u.bn,{children:(0,j.jsx)(u.lx,{className:"row g-3",children:(0,j.jsx)(u.b7,{xs:1,children:(0,j.jsx)(w.Z,{onClick:function(){q(!1),E({bannerId:-1,title:"",content:"",imageUrls:[]}),R(""),g(!v)},children:"\ucd94\uac00"})})})}),(0,j.jsx)(u.sl,{children:(0,j.jsx)(d.Z,{items:t,onClick:H,columns:h,className:"BannerList",datePickerHidden:!1})})]})})}),(0,j.jsx)(y,{onChange:function(e){var n=e.target,t=n.id,s=n.value;E((0,a.Z)((0,a.Z)({},_),{},(0,r.Z)({},t,s)))},visible:v,value:_,setVisible:g,isReadOnly:N,setIsReadOnly:q,getList:P,setSelectedItem:E,content:S,setContent:R})]})}},79286:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var r=t(1413),a=t(72791),s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"},i=t(54291),l=function(e,n){return a.createElement(i.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:n,icon:s}))};l.displayName="PlusOutlined";var c=a.forwardRef(l)},28022:function(){}}]);
//# sourceMappingURL=1984.766ffcd6.chunk.js.map