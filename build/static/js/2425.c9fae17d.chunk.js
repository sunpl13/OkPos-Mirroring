(self.webpackChunkneordinary_template_react_js_admin=self.webpackChunkneordinary_template_react_js_admin||[]).push([[2425],{90399:function(e,a,t){"use strict";t(72791);var r=t(78983),s=t(80184);a.Z=function(e){var a=e.visible,t=e.title,n=e.children,l=e.setVisible,i=e.upDate,o=e.onDelete,c=e.btnText,d=e.notEditBtn;return(0,s.jsxs)(r.Tk,{size:"lg",visible:a,onClose:function(){return l(!1)},children:[(0,s.jsx)(r.p0,{children:(0,s.jsx)(r.fl,{children:t||"Not Title"})}),(0,s.jsx)(r.sD,{children:n||(0,s.jsx)("h1",{children:"Not Children"})}),(0,s.jsxs)(r.Ym,{children:[!d&&(0,s.jsx)(r.u5,{onClick:function(){return i()},color:"primary",children:c||"Not Btn Title"}),o&&(0,s.jsx)(r.u5,{onClick:function(){return o()},color:"danger",children:"\uc0ad\uc81c"}),(0,s.jsx)(r.u5,{color:"secondary",onClick:function(){return l(!1)},children:"\ub2eb\uae30"})]})]})}},86385:function(e,a,t){"use strict";var r,s,n=t(30168),l=t(93433),i=t(74165),o=t(15861),c=t(29439),d=t(79286),u=t(70655),p=t(72791),m=t(78983),N=t(91191),b=t(74912),h=t.n(b),f=t(76030),y=t(80184),x=function(e){return new Promise((function(a,t){var r=new FileReader;r.readAsDataURL(e),r.onload=function(){return a(r.result)},r.onerror=function(e){return t(e)}}))};a.Z=function(e){var a=e.images,t=e.id,r=e.label,s=e.fileList,n=e.setFileList,N=e.imgPath,b=e.isRequired,g=e.readOnly,_=e.oneSheet,j=void 0!==_&&_,Z=e.maxFileLength,w=void 0===Z?1:Z,A=(0,p.useState)(!1),C=(0,c.Z)(A,2),q=(C[0],C[1]),O=(0,p.useState)(""),S=(0,c.Z)(O,2),I=S[0],P=S[1],T=(0,p.useState)(""),R=(0,c.Z)(T,2),L=R[0],F=R[1];(0,p.useEffect)((function(){a&&a.length>0&&n(a.map((function(e){return{uid:e,name:decodeURI(e.split("/")[e.split("/").length-1]),status:"done",url:(0,f.J0)(e)}})))}),[a,n]);var E=function(){var e=(0,o.Z)((0,i.Z)().mark((function e(a){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.url||a.preview){e.next=4;break}return e.next=3,x(a.originFileObj);case 3:a.preview=e.sent;case 4:P(a.url||a.preview),q(!0),F(a.name||a.url.substring(a.url.lastIndexOf("/")+1));case 7:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),V=(0,y.jsxs)("div",{children:[(0,y.jsx)(d.Z,{}),(0,y.jsx)("div",{style:{marginTop:8},children:"Upload"})]}),B=(0,y.jsx)("div",{children:"Have No Image."});return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(m.L8,{htmlFor:"".concat(t,"Static"),className:"col-form-label",children:(0,y.jsx)("span",{className:b&&"required",children:r||" * "})}),(0,y.jsx)(u.Z,{listType:"picture-card",fileList:s,onPreview:E,onSuccess:function(e){return function(e){var a=e.request.httpRequest,t=a.body,r=a.endpoint,i=r.protocol,o=r.host,c={uid:e.request.params.Key,name:t.name,status:"done",url:"".concat(i,"//").concat(o).concat(a.path)};n([].concat((0,l.Z)(s),[c]))}(e)},onRemove:function(e){return a=e,void n(s.filter((function(e){return e.uid!==a.uid})));var a},customRequest:function(e){return function(e){var a=e.file,t=e.onError,r=e.onProgress,n=e.onSuccess;if(j&&s.length===w)alert("\uc774\ubbf8\uc9c0\ub294 \ucd5c\ub300 ".concat(w,"\uac1c\ub9cc \ub4f1\ub85d \uac00\ub2a5\ud569\ub2c8\ub2e4!"));else{h().config.update({region:"ap-northeast-2",accessKeyId:"AKIAWS5VDTBO4P55EYXT",secretAccessKey:"pzJVhC36B2Kl5RsNmVgthoSjAA4bQL64PwZrS4jM"});var l=new(h().S3),i=a.name.replaceAll(" ",""),o={Bucket:(0,f.AA)(N),Key:i,Body:a,ContentType:a.type};l.putObject(o).on("httpUploadProgress",(function(e){var a=e.loaded,t=e.total;return r({percent:a/t*100})})).promise().then((function(e){n(e.$response)}),(function(e){t(),console.log(e.code),console.log(e.message)}))}}(e)},disabled:g,children:(null===s||void 0===s?void 0:s.length)>=8?null:0===(null===s||void 0===s?void 0:s.length)?g?B:V:g?null:V}),I&&(0,y.jsxs)(m.b7,{children:[(0,y.jsx)(m.L8,{className:"col-form-label w-75",children:(0,y.jsx)(v,{children:(0,y.jsx)("span",{children:L||""})})}),(0,y.jsx)(k,{className:"text-center p-2",children:(0,y.jsx)("div",{children:(0,y.jsx)(m.DW,{rounded:!0,alt:"example",onClick:function(){P("")},src:I})})})]})]})};var k=(0,N.ZP)(m.b7)(r||(r=(0,n.Z)(["\n  padding: 0.5rem 0;\n  background: #fafafa;\n  border: 1px dashed #d9d9d9;\n  border-radius: 2px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  div {\n    width: 75%;\n\n    & img {\n      max-width: 100%;\n      height: auto;\n      cursor: pointer;\n      max-height: 600px;\n    }\n  }\n"]))),v=N.ZP.div(s||(s=(0,n.Z)(["\n  width: 100%;\n  padding: 0 5px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n"])))},3854:function(e,a,t){"use strict";var r=t(78983),s=(t(72791),t(80184));a.Z=function(e){var a=e.type,t=e.onChange,n=e.id,l=e.placeholder,i=e.value,o=e.label,c=e.readOnly,d=e.disabled,u=e.isRequired,p=e.xs;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.L8,{htmlFor:"".concat(n,"Static"),className:"col-sm-2 col-form-label",children:(0,s.jsx)("span",{className:u?"required":"",children:o||" * "})}),(0,s.jsx)(r.b7,{className:"align-items-center",xs:p,style:{display:"flex"},children:(0,s.jsx)(r.jO,{type:a||"text",id:n,placeholder:l||"",value:"file"===a?void 0:i||"",onChange:t,readOnly:c,disabled:d})})]})}},88688:function(e,a,t){"use strict";var r,s,n=t(30168),l=(t(74165),t(1413),t(15861),t(29439)),i=t(72791),o=t(66770),c=t.n(o),d=(t(86009),t(78983)),u=t(91191),p=t(80184);a.Z=function(e){var a=e.id,t=e.value,r=e.label,s=e.isRequired,n=e.readOnly,o=void 0!==n&&n,c=e.setValue,u=e.maxLength,b=e.editorHeight,h=void 0===b?300:b,f=(0,i.useRef)(),y=(0,i.useState)(!1),x=(0,l.Z)(y,2),k=x[0],v=x[1],g=(0,i.useMemo)((function(){return{toolbar:{container:[["bold","italic","underline","strike"],["blockquote"],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{indent:"-1"},{indent:"+1"}],[{direction:"rtl"}],[{header:[1,2,3,4,5,6,!1]}],[{color:[]},{background:[]}],[{font:[]}],[{align:[]}],["clean"]]}}}),[]),_=function(e){if(u){var a=e.replace(/<[^>]*>?| /g,"").length;u>=a?(c(e),v(!1)):v(!0)}else u||c(e)};return(0,p.jsxs)(d.b7,{style:{height:"".concat(h,"px"),marginBottom:"20px"},className:"pb-5",children:[(0,p.jsxs)(d.L8,{htmlFor:"".concat(a,"Static"),className:"col-form-label",children:[(0,p.jsx)("span",{className:s&&"required",children:r||" * "}),(0,p.jsx)(N,{className:"px-lg-2",textLengthCheck:k,children:u?"* ".concat(u,"\uc790 \uae4c\uc9c0 \uc785\ub825 \uac00\ub2a5\ud569\ub2c8\ub2e4."):"  "})]}),(0,p.jsx)(m,{id:a||"",ref:function(e){null!==e&&(f.current=e)},value:t,defaultValue:t,onChange:function(e){return _(k?t:e)},modules:g,readOnly:o,theme:"snow",placeholder:"\ub0b4\uc6a9\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694.",style:{height:"100%"}})]})};var m=(0,u.ZP)(c())(r||(r=(0,n.Z)(["\n  background-color: ",";\n  border-radius: 0.375rem;\n  border: none;\n  padding-bottom: ",";\n  .ql-container {\n    border-radius: ",";\n    border-bottom-left-radius: 0.375rem;\n    border-bottom-right-radius: 0.375rem;\n  }\n  .ql-editor {\n    border-radius: ",";\n  }\n  .ql-toolbar {\n    border-top-left-radius: 0.375rem;\n    border-top-right-radius: 0.375rem;\n    display: ",";\n  }\n"])),(function(e){return e.readOnly?"#d8dbe0":"transparent"}),(function(e){return e.readOnly?"0":"67px"}),(function(e){return e.readOnly?"0.375rem":"0"}),(function(e){return e.readOnly?"0.375rem":"0"}),(function(e){return e.readOnly?"none":"block"})),N=u.ZP.span(s||(s=(0,n.Z)(["\n  font-size: 12px;\n  padding-left: 10px;\n  //color: ",";\n"])),(function(e){return e.textLengthCheck&&"red"}))},62077:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return g}});var r=t(4942),s=t(1413),n=t(74165),l=t(15861),i=t(29439),o=t(72791),c=t(78983),d=t(20961),u=t(70844),p=t(26670),m=t(3854),N=t(86385),b=t(90399),h=t(88688),f=t(80184),y=function(e){var a=e.value,t=e.visible,r=e.setVisible,s=e.onChange,n=e.onDelete,l=a.noticeTitle,i=a.noticeContent,o=a.noticeImages,d=a.supportArea,u=a.name,p=a.email,y=a.phoneNum,x=a.isExperiences;return(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)(b.Z,{visible:t,title:"\ub51c\ub7ec \uc9c0\uc6d0 \uc0c1\uc138",setVisible:r,onDelete:n,notEditBtn:!0,children:[(0,f.jsx)(c.rb,{className:"p-2",children:(0,f.jsx)(m.Z,{onChange:s,id:"noticeTitle",placeholder:"\uc9c0\uc6d0 \uacf5\uace0",label:"\uc9c0\uc6d0 \uacf5\uace0",readOnly:!0,disabled:!0,value:l||""})}),(0,f.jsxs)(c.rb,{className:"p-2",children:[(0,f.jsx)(m.Z,{readOnly:!0,disabled:!0,size:"sm",value:d,label:"\uc9c0\uc6d0 \ubd84\uc57c"}),(0,f.jsx)(m.Z,{id:"phoneNum",placeholder:"VAN \uc601\uc5c5 \uacbd\ub825",label:"VAN \uc601\uc5c5 \uacbd\ub825",value:x?"\uc720":"\ubb34",readOnly:!0,disabled:!0})]}),(0,f.jsx)(c.rb,{className:"p-2 pb-2",children:(0,f.jsx)(h.Z,{id:"noticeContent",value:i,label:"\uc9c0\uc6d0 \uacf5\uace0 \ubcf8\ubb38",readOnly:!0,disabled:!0})}),(0,f.jsx)(c.rb,{className:"p-2",children:(0,f.jsx)(N.Z,{fileList:o||[],id:"images",label:"\uc9c0\uc6d0 \uacf5\uace0 \uc774\ubbf8\uc9c0",readOnly:!0,disabled:!0})}),(0,f.jsx)(c.rb,{className:"p-2",children:(0,f.jsx)(m.Z,{onChange:s,id:"name",placeholder:"\uc9c0\uc6d0\uc790 \uc774\ub984",label:"\uc9c0\uc6d0\uc790 \uc774\ub984",value:u,readOnly:!0,disabled:!0})}),(0,f.jsx)(c.rb,{className:"p-2",children:(0,f.jsx)(m.Z,{onChange:s,id:"email",placeholder:"\uc774\uba54\uc77c",label:"\uc9c0\uc6d0\uc790 \uc774\uba54\uc77c",value:p,readOnly:!0,disabled:!0})}),(0,f.jsx)(c.rb,{className:"p-2",children:(0,f.jsx)(m.Z,{onChange:s,id:"phoneNum",placeholder:"\uc804\ud654\ubc88\ud638",label:"\uc9c0\uc6d0\uc790 \uc804\ud654\ubc88\ud638",value:y,readOnly:!0,disabled:!0})})]})})},x=t(96672),k=t(19311),v=t(46327),g=function(){var e=(0,o.useState)([]),a=(0,i.Z)(e,2),t=a[0],m=a[1],N=(0,o.useState)({}),b=(0,i.Z)(N,2),h=b[0],g=b[1],_=(0,o.useState)(""),j=(0,i.Z)(_,2),Z=j[0],w=j[1],A=function(){var e=(0,l.Z)((0,n.Z)().mark((function e(){var a,t,r,s,l,i;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.Z.request({method:x.w.GET,url:k.l.PARTNER_AGENCYAPPLICANT});case 3:if(a=e.sent,t=a.data,r=t.result,s=t.isSuccess,l=t.code,i=t.message,s&&!(0,v.xb)(r)){e.next=11;break}return e.abrupt("return",alert(i));case 11:1e3===l?(m(null===r||void 0===r?void 0:r.adminAgencyApplicantDTOs),w(null===r||void 0===r?void 0:r.noticeContent)):alert(i),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(){return e.apply(this,arguments)}}();(0,o.useEffect)((function(){A()}),[]);var C=(0,o.useState)(!1),q=(0,i.Z)(C,2),O=q[0],S=q[1],I=(0,o.useState)(!0),P=(0,i.Z)(I,2),T=P[0],R=P[1],L=function(){var e=(0,l.Z)((0,n.Z)().mark((function e(a){var t,r,s,l,i,o,c;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.id,e.prev=1,e.next=4,x.Z.request({method:x.w.GET,url:"".concat(k.l.PARTNER_AGENCYAPPLICANT,"/").concat(t)});case 4:if(r=e.sent,s=r.data,l=s.result,i=s.isSuccess,o=s.code,c=s.message,i&&!(0,v.xb)(l)){e.next=12;break}return e.abrupt("return");case 12:1e3===o?g(l):alert(c),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(1),console.log(e.t0);case 18:S(!O);case 19:case"end":return e.stop()}}),e,null,[[1,15]])})));return function(a){return e.apply(this,arguments)}}();return(0,f.jsxs)("main",{children:[(0,f.jsx)(d.Z,{title:"\ub51c\ub7ec \uc9c0\uc6d0 \ub9ac\uc2a4\ud2b8"}),(0,f.jsx)(c.rb,{children:(0,f.jsx)(c.b7,{xs:12,children:(0,f.jsx)(c.xH,{className:"mb-4",children:(0,f.jsx)(c.sl,{children:(0,f.jsx)(u.Z,{items:t,onClick:L,columns:p.wo,className:"userList",datePickerHidden:!1})})})})}),(0,f.jsx)(y,{onChange:function(e){var a=e.target,t=a.id,n=a.value;g((0,s.Z)((0,s.Z)({},h),{},(0,r.Z)({},t,n)))},visible:O,value:h,setVisible:S,isReadOnly:T,setIsReadOnly:R,editor:Z})]})}},26670:function(e,a,t){"use strict";t.d(a,{J7:function(){return h},QN:function(){return c},W_:function(){return d},ZX:function(){return b},_c:function(){return o},g1:function(){return r},gh:function(){return y},iN:function(){return m},l5:function(){return N},p0:function(){return u},qM:function(){return f},tO:function(){return s},uF:function(){return n},wo:function(){return i},yA:function(){return p},zI:function(){return l}});t(72791);var r=[{key:"idx",label:"No",_props:{className:"id"}},{key:"userName",label:"\uc0ac\uc6a9\uc790 \uba85",_props:{className:"userName"}},{key:"certificateNum",label:"\uc0ac\uc5c5\uc790 \ubc88\ud638",_props:{className:"certificateNum"}},{key:"phoneNum",label:"\ud734\ub300\uc804\ud654 \ubc88\ud638",_props:{className:"phoneNum"}},{key:"createdAt",label:"\ucd5c\ucd08 \ub4f1\ub85d\uc77c",_props:{className:"createdAt"},filter:!1},{key:"status",label:"\uacc4\uc815 \uc0c1\ud0dc",_props:{className:"status"},sorter:!1,filter:!1}],s=[{key:"idx",label:"No",_props:{className:"id"}},{key:"userName",label:"\uc0ac\uc6a9\uc790 \uba85",_props:{className:"userName"}},{key:"createdAt",label:"\ucd5c\ucd08 \ub4f1\ub85d\uc77c",filter:!1,_props:{className:"createdAt"}},{key:"status",label:"\uacc4\uc815 \uc0c1\ud0dc",_props:{className:"status"},filter:!1},{key:"deletedAt",label:"\uacc4\uc815 \ud0c8\ud1f4\uc77c",_props:{className:"deletedAt"},sorter:!1,filter:!1},{key:"phoneNum",label:"\ud734\ub300\uc804\ud654 \ubc88\ud638",_props:{className:"phoneNum"}},{key:"certificateFile",label:"\uc0ac\uc5c5\uc790 \ub4f1\ub85d\uc99d",_props:{className:"certificateFile"}},{key:"businessName",label:"\uc0c1\ud638\uba85",_props:{className:"businessName"}},{key:"certificateNum",label:"\uc0ac\uc5c5\uc790 \ub4f1\ub85d\ubc88\ud638",_props:{className:"certificateNum"}},{key:"address",label:"\uc0ac\uc5c5\uc7a5 \uc8fc\uc18c",_props:{className:"address"}},{key:"withdrawalCategory",label:"\ud0c8\ud1f4 \uc0ac\uc720",_props:{className:"withdrawalCategory"}}],n=[{key:"idx",label:"No",_props:{className:"id"}},{key:"inquiryCategory",label:"\ubb38\uc758 \uc720\ud615",_props:{className:"inquiryCategory"}},{key:"userName",label:"\uc774\ub984",_props:{className:"userName"}},{key:"userPhoneNum",label:"\uc804\ud654\ubc88\ud638",_props:{className:"userPhoneNum"}}],l=[{key:"idx",label:"No",_props:{className:"no"}},{key:"title",label:"\uacf5\uc9c0\uc0ac\ud56d \uc81c\ubaa9",_props:{className:"title"}},{key:"createdAt",label:"\uacf5\uc9c0\uc0ac\ud56d \ub4f1\ub85d\uc77c",_props:{className:"createdAt"},filter:!1},{key:"noticeFiles",label:"\ucca8\ubd80 \ud30c\uc77c",_props:{className:"noticeFiles"},filter:!1,sorter:!1}],i=[{key:"idx",label:"No",_props:{className:"no"}},{key:"supportArea",label:"\uc9c0\uc6d0 \ubd84\uc57c",_props:{className:"supportArea"}},{key:"noticeTitle",label:"\uc9c0\uc6d0 \uacf5\uc9c0 \uc81c\ubaa9",_props:{className:"noticeTitle"}},{key:"name",label:"\uc774\ub984",_props:{className:"name"}},{key:"email",label:"\uc774\uba54\uc77c",_props:{className:"email"}},{key:"phoneNum",label:"\uc804\ud654\ubc88\ud638",_props:{className:"phoneNum"}}],o=[{key:"idx",label:"No",_props:{className:"id"}},{key:"dataRoomCategory",label:"\uce74\ud14c\uace0\ub9ac",_props:{className:"createdAt"}},{key:"title",label:"\uc81c\ubaa9",_props:{className:"title"}},{key:"createdAt",label:"\ub4f1\ub85d\uc77c",_props:{className:"createdAt"},filter:!1}],c=[{key:"idx",label:"No",_props:{className:"id"}},{key:"orderNum",label:"\ubc1c\uc8fc\ubc88\ud638",_props:{className:"orderNum"}},{key:"businessName",label:"\uc0c1\ud638\uba85",_props:{className:"BusinessName"}},{key:"certificateNum",label:"\uc0ac\uc5c5\uc790 \ubc88\ud638",_props:{className:"certificateNum"}},{key:"representativeName",label:"\ub300\ud45c\uc790 \uba85",_props:{className:"RepresentativeName"}},{key:"createdAt",label:"\uc8fc\ubb38 \uc77c\uc790",_props:{className:"createdAt"},filter:!1}],d=[{key:"id",label:"No",_props:{className:"no"}},{key:"category",label:"\uce74\ud14c\uace0\ub9ac",_props:{className:"category"}},{key:"invoiceNum",label:"\uc1a1\uc7a5\ubc88\ud638",_props:{className:"invoiceNum"}},{key:"itemName",label:"\uc81c\ud488\uba85",_props:{className:"itemName"}},{key:"quantity",label:"\ubc1c\uc8fc \uc218\ub7c9",_props:{className:"quantity"}},{key:"processingStatus",label:"\ubc30\uc1a1 \ud604\ud669",_props:{className:"processingStatus"},filter:!1},{key:"quantity",label:"\ubc1c\uc8fc \uc218\ub7c9",_props:{className:"quantity"}},{key:"van",_props:{className:"van"}}],u=[{key:"idx",label:"No",_props:{className:"id"}},{key:"maintenanceNum",label:"\uc720\uc9c0\ubcf4\uc218 \ubc88\ud638",_props:{className:"maintenanceNum"}},{key:"businessName",label:"\uc0c1\ud638\uba85",_props:{className:"BusinessName"}},{key:"certificateNum",label:"\uc0ac\uc5c5\uc790 \ubc88\ud638",_props:{className:"certificateNum"}},{key:"representativeName",label:"\ub300\ud45c\uc790 \uba85",_props:{className:"representativeName"}},{key:"createdAt",label:"\uc8fc\ubb38 \uc77c\uc790",_props:{className:"createdAt"},filter:!1}],p=[{title:"\uc9c0\uc5ed",dataIndex:"region",width:"20%"},{title:"CAT",dataIndex:"catcount",width:"10%"},{title:"POS",dataIndex:"poscount",width:"10%"},{title:"KIOSK",dataIndex:"kioskcount",width:"10%"},{title:"\ud569\uacc4",dataIndex:"sum",width:"10%"},{title:"\ube44\uace0",dataIndex:"note",width:"10%"}],m=[{title:"No.",dataIndex:"id",width:"5%"},{title:"\uad6c\ubd84",dataIndex:"category",width:"20%"},{title:"\uc194\ub8e8\uc158\uba85",dataIndex:"name",width:"20%"},{title:"No.",dataIndex:"id",width:"5%"},{title:"\uc8fc\ub825 VAN\uc0ac",dataIndex:"van",width:"20%"}],N=[{title:"\uad6c\ubd84.",dataIndex:"division",width:"10%"},{title:"\uc81c\uc870\uc0ac/\ubaa8\ub378\uba85",dataIndex:"manufactureCompany",width:"40%"}],b=[{key:"idx",label:"No",filter:!1,_props:{className:"no"}},{key:"title",label:"\uc81c\ubaa9",filter:!1,_props:{className:"title"}},{key:"createdAt",label:"\ub4f1\ub85d\uc77c",_props:{className:"createdAt"},filter:!1}],h=[{key:"idx",label:"No",_props:{className:"id"}},{key:"agencyName",label:"\ub300\ub9ac\uc810 \uba85",_props:{className:"agencyName"}},{key:"phoneNum",label:"\ub300\ub9ac\uc810 \uc5f0\ub77d\ucc98",_props:{className:"phoneNum"},sorter:!1},{key:"applicantNum",label:"\uc2e0\uccad \uc778\uc6d0",_props:{className:"applicantNum"},sorter:!1},{key:"educationDate",label:"\uc2e0\uccad \uad50\uc721 \uc77c\uc790",_props:{className:"educationDate"},filter:!1}],f=[{key:"id",label:"No",_props:{className:"id"}},{key:"name",label:"\uc774\ub984",_props:{className:"distributorName"}},{key:"email",label:"\uc774\uba54\uc77c",_props:{className:"distributorContact"}},{key:"mobilePhoneNum",label:"\uc5f0\ub77d\ucc98",_props:{className:"phoneNumber"}}],y=[{key:"idx",label:"No",_props:{className:"id"}},{key:"title",label:"\uacf5\uace0 \uc81c\ubaa9",_props:{className:"title"}},{key:"createdAt",label:"\ub4f1\ub85d\uc77c",filter:!1,_props:{className:"createdAt"}},{key:"start",label:"\uad50\uc721\uc2e0\uccad \uc2dc\uc791\uc77c",filter:!1,_props:{className:"createdAt"}},{key:"deadline",label:"\uad50\uc721\uc2e0\uccad \ub9c8\uac10\uc77c",filter:!1,_props:{className:"createdAt"}},{key:"place",label:"\uad50\uc721 \uc7a5\uc18c",_props:{className:"place"}},{key:"applicantsCap",label:"\ucc38\uc5ec \uac00\ub2a5 \uc778\uc6d0",_props:{className:"id"}}]},79286:function(e,a,t){"use strict";t.d(a,{Z:function(){return o}});var r=t(1413),s=t(72791),n={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"},l=t(54291),i=function(e,a){return s.createElement(l.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:a,icon:n}))};i.displayName="PlusOutlined";var o=s.forwardRef(i)},28022:function(){}}]);
//# sourceMappingURL=2425.c9fae17d.chunk.js.map