(self.webpackChunkneordinary_template_react_js_admin=self.webpackChunkneordinary_template_react_js_admin||[]).push([[3546],{90399:function(e,a,r){"use strict";r(72791);var l=r(78983),s=r(80184);a.Z=function(e){var a=e.visible,r=e.title,t=e.children,o=e.setVisible,i=e.upDate,n=e.onDelete,c=e.btnText,p=e.notEditBtn;return(0,s.jsxs)(l.Tk,{size:"lg",visible:a,onClose:function(){return o(!1)},children:[(0,s.jsx)(l.p0,{children:(0,s.jsx)(l.fl,{children:r||"Not Title"})}),(0,s.jsx)(l.sD,{children:t||(0,s.jsx)("h1",{children:"Not Children"})}),(0,s.jsxs)(l.Ym,{children:[!p&&(0,s.jsx)(l.u5,{onClick:function(){return i()},color:"primary",children:c||"Not Btn Title"}),n&&(0,s.jsx)(l.u5,{onClick:function(){return n()},color:"danger",children:"\uc0ad\uc81c"}),(0,s.jsx)(l.u5,{color:"secondary",onClick:function(){return o(!1)},children:"\ub2eb\uae30"})]})]})}},70126:function(e,a,r){"use strict";r.d(a,{Z:function(){return d}});var l,s=r(78983),t=r(3854),o=(r(72791),r(32967),r(90399)),i=(r(79528),r(91149)),n=r(30168),c=(r(763),r(91191)),p=r(80184),d=(c.ZP.span(l||(l=(0,n.Z)(["\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  padding: 0 8px;\n  line-height: 1.5714285714285714;\n  flex: auto;\n  transition: all 0.3s;\n  color: #1677ff !important;\n  text-decoration: none;\n  background-color: transparent;\n  outline: none;\n  cursor: pointer;\n"]))),function(e){var a=e.value,r=e.visible,l=e.setVisible,n=e.onChange,c=e.readOnly,d=a.address,m=a.businessName,u=a.certificateNum,y=a.createdAt,N=a.phoneNum,b=a.status,f=a.userName,h=a.certificateFile;return(0,p.jsx)(o.Z,{title:"\ud68c\uc6d0 \uc0c1\uc138",visible:r,setVisible:l,notEditBtn:!0,children:(0,p.jsxs)(s.sD,{children:[(0,p.jsxs)(s.rb,{className:"pb-4",children:[(0,p.jsx)(t.Z,{id:"userName",placeholder:"\uc0ac\uc6a9\uc790\uba85",label:"\uc0ac\uc6a9\uc790\uba85",value:f,onChange:n,readOnly:c,disabled:c}),(0,p.jsx)(t.Z,{id:"certificateNum",placeholder:"\uc0ac\uc5c5\uc790 \ubc88\ud638",label:"\uc0ac\uc5c5\uc790 \ubc88\ud638",value:u,onChange:n,readOnly:c,disabled:c})]}),(0,p.jsxs)(s.rb,{className:"pb-4",children:[(0,p.jsx)(t.Z,{id:"createdAt",placeholder:"\ucd5c\ucd08 \ub4f1\ub85d\uc77c",label:"\ucd5c\ucd08 \ub4f1\ub85d\uc77c",value:y,onChange:n,readOnly:c,disabled:c}),(0,p.jsx)(t.Z,{id:"status",placeholder:"\uacc4\uc815 \uc0c1\ud0dc",label:"\uacc4\uc815 \uc0c1\ud0dc",value:function(e){switch(e){case"ACTIVE":return"\ud65c\uc131\ud654";case"INACTIVE":return"\ube44\ud65c\uc131\ud654";case!0:return"success";default:return" "}}(b),onChange:n,readOnly:c,disabled:c})]}),(0,p.jsxs)(s.rb,{className:"pb-4",children:[(0,p.jsx)(t.Z,{id:"phoneNum",placeholder:"\ud734\ub300\uc804\ud654 \ubc88\ud638",label:"\ud734\ub300\uc804\ud654 \ubc88\ud638",value:N,onChange:n,readOnly:c,disabled:c}),(0,p.jsx)("br",{}),(0,p.jsx)(t.Z,{id:"businessName",placeholder:"\uc0c1\ud638\uba85",label:"\uc0c1\ud638\uba85",value:m,onChange:n,readOnly:c,disabled:c})]}),(0,p.jsx)(s.rb,{className:"pb-2",children:(0,p.jsx)(t.Z,{id:"address",placeholder:"\uc0ac\uc5c5\uc7a5 \uc8fc\uc18c",label:"\uc0ac\uc5c5\uc7a5 \uc8fc\uc18c",value:d,onChange:n,readOnly:c,disabled:c})}),(0,p.jsx)("br",{}),(0,p.jsx)(s.rb,{className:"pb-2",children:(0,p.jsx)(i.Z,{id:"files",label:"\uc0ac\uc5c5\uc790 \ub4f1\ub85d\uc99d",value:h,readOnly:c,disabled:c})})]})})})},91149:function(e,a,r){"use strict";var l=r(29439),s=r(78983),t=r(72791),o=r(80184);a.Z=function(e){var a=e.id,r=e.value,i=e.label,n=e.isRequired,c=(0,t.useState)(""),p=(0,l.Z)(c,2),d=p[0],m=p[1];return(0,t.useEffect)((function(){if(r){var e=r.split("/"),a=e[e.length-1];m(a)}}),[r]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.L8,{htmlFor:"".concat(a,"Static"),className:"col-sm-2 col-form-label",children:(0,o.jsx)("span",{className:n?"required":"",children:i||" * "})}),(0,o.jsx)(s.b7,{className:"align-items-center",style:{display:"flex"},children:r?(0,o.jsx)("div",{className:"col-form-label",children:(0,o.jsx)("a",{href:r,download:!0,target:"_blank",rel:"noreferrer",children:d})}):(0,o.jsx)("div",{className:"col-form-label",children:"\ub4f1\ub85d\ub41c \ud30c\uc77c\uc774 \uc5c6\uc2b5\ub2c8\ub2e4."})})]})}},79528:function(e,a,r){"use strict";var l,s=r(30168),t=r(78983),o=r(91191),i=r(76030),n=(r(72791),r(80184));a.Z=function(e){var a=e.id,r=e.files,l=e.label,s=e.isRequired;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.L8,{htmlFor:"".concat(a,"Static"),className:"col-sm-2 col-form-label",children:(0,n.jsx)("span",{className:s?"required":"",children:l||" * "})}),(0,n.jsx)(t.b7,{children:(null===r||void 0===r?void 0:r.length)>0?r.map((function(e,a){var r=e.split("/"),l=r[r.length-1];return(0,n.jsx)("div",{className:"col-form-label",children:(0,n.jsxs)(c,{role:"link",href:(0,i.J0)(e),onClick:function(){return function(e,a){e=(0,i.J0)(e),fetch(e,{method:"GET"}).then((function(e){return e.blob()})).then((function(e){var r=window.URL.createObjectURL(e),l=document.createElement("a");l.href=r,l.download=a,document.body.appendChild(l),l.click(),setTimeout((function(e){window.URL.revokeObjectURL(r)}),6e4),l.remove()})).catch((function(e){console.error("err: ",e)}))}(e,l)},children:[a+1,". ",l]},a)},a)})):(0,n.jsx)(t.jO,{type:"text",id:a||"",placeholder:"\ub4f1\ub85d\ub41c \ud30c\uc77c\uc774 \uc5c6\uc2b5\ub2c8\ub2e4.",disabled:!0})})]})};var c=o.ZP.span(l||(l=(0,s.Z)(["\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  padding: 0 8px;\n  line-height: 1.5714285714285714;\n  flex: auto;\n  transition: all 0.3s;\n  color: #1677ff !important;\n  text-decoration: none;\n  background-color: transparent;\n  outline: none;\n  cursor: pointer;\n"])))},32967:function(e,a,r){"use strict";r.d(a,{Z:function(){return x}});var l=r(30168),s=r(1413),t=r(93433),o=r(72791),i={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M885.2 446.3l-.2-.8-112.2-285.1c-5-16.1-19.9-27.2-36.8-27.2H281.2c-17 0-32.1 11.3-36.9 27.6L139.4 443l-.3.7-.2.8c-1.3 4.9-1.7 9.9-1 14.8-.1 1.6-.2 3.2-.2 4.8V830a60.9 60.9 0 0060.8 60.8h627.2c33.5 0 60.8-27.3 60.9-60.8V464.1c0-1.3 0-2.6-.1-3.7.4-4.9 0-9.6-1.3-14.1zm-295.8-43l-.3 15.7c-.8 44.9-31.8 75.1-77.1 75.1-22.1 0-41.1-7.1-54.8-20.6S436 441.2 435.6 419l-.3-15.7H229.5L309 210h399.2l81.7 193.3H589.4zm-375 76.8h157.3c24.3 57.1 76 90.8 140.4 90.8 33.7 0 65-9.4 90.3-27.2 22.2-15.6 39.5-37.4 50.7-63.6h156.5V814H214.4V480.1z"}}]},name:"inbox",theme:"outlined"},n=r(54291),c=function(e,a){return o.createElement(n.Z,(0,s.Z)((0,s.Z)({},e),{},{ref:a,icon:i}))};c.displayName="InboxOutlined";var p,d=o.forwardRef(c),m=r(50473),u=r(91191),y=r(78983),N=r(74912),b=r.n(N),f=r(76030),h=r(80184),x=function(e){var a=e.files,r=e.label,l=e.id,i=e.disabled,n=e.fileList,c=e.setFileList,p=e.filePath,u=e.isRequired,N=e.oneSheet,x=void 0!==N&&N,_=e.maxFileLength,v=void 0===_?1:_;(0,o.useEffect)((function(){a&&a.length>0&&c(a.map((function(e,a){return{key:a,uid:a,name:e.fileTitle?e.fileTitle:decodeURI(e.split("/")[e.split("/").length-1]),status:"done",url:e.file?e.file:(0,f.J0)(e)}})))}),[a]);var g={name:"file",multiple:!0,disabled:i,fileList:n,customRequest:function(e){!function(e){var a=e.file,r=e.onError,l=e.onProgress,s=e.onSuccess;b().config.update({region:"ap-northeast-2",accessKeyId:"AKIAWS5VDTBO4P55EYXT",secretAccessKey:"pzJVhC36B2Kl5RsNmVgthoSjAA4bQL64PwZrS4jM"});var t=new(b().S3),o=a.name.replaceAll(" ",""),i={Bucket:(0,f.DK)(p),Key:o,Body:a,ContentType:a.type};t.putObject(i).on("httpUploadProgress",(function(e){var a=e.loaded,r=e.total;return l({percent:a/r*100})})).promise().then((function(e){s(e.$response)}),(function(e){r(),console.log(e.code),console.log(e.message)}))}(e)},onSuccess:function(e){!function(e){var a=e.request.httpRequest,r=a.body,l=a.endpoint,s=l.protocol,o=l.host;if(x&&n.length>=v)return alert("\ud30c\uc77c\uc740 \ucd5c\ub300 ".concat(v,"\uac1c\ub9cc \ub4f1\ub85d \uac00\ub2a5\ud569\ub2c8\ub2e4!"));var i={uid:e.request.params.Key,name:r.name,status:"done",url:"".concat(s,"//").concat(o).concat(a.path)};c([].concat((0,t.Z)(n),[i]))}(e)},onRemove:function(e){var a;a=e,c(n.filter((function(e){return e.uid!==a.uid})))}};return(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)(k,{className:i,children:[(0,h.jsx)(y.L8,{className:u?"required":"",children:r||""}),(0,h.jsxs)(m.Z.Dragger,(0,s.Z)((0,s.Z)({},g),{},{id:l,children:[(0,h.jsx)("p",{className:"ant-upload-drag-icon",children:(0,h.jsx)(d,{})}),(0,h.jsx)("p",{className:"ant-upload-text",children:"\uc5c5\ub85c\ub4dc\ud558\ub824\uba74 \uc774 \uc601\uc5ed\uc73c\ub85c \ud30c\uc77c\uc744 \ud074\ub9ad\ud558\uac70\ub098 \ub4dc\ub798\uadf8\ud558\uc138\uc694."})]}))]})})},k=u.ZP.div(p||(p=(0,l.Z)(["\n  border-radius: 0.375rem;\n  &.disabled {\n    background: #d8dbe0;\n  }\n  & .ant-upload-disabled {\n    background: #d8dbe0;\n    border: 0.5px dashed #b1b7c1;\n    opacity: 1;\n  }\n  & > span {\n    display: flex;\n    flex-direction: column;\n  }\n"])))},3854:function(e,a,r){"use strict";var l=r(78983),s=(r(72791),r(80184));a.Z=function(e){var a=e.type,r=e.onChange,t=e.id,o=e.placeholder,i=e.value,n=e.label,c=e.readOnly,p=e.disabled,d=e.isRequired,m=e.xs;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l.L8,{htmlFor:"".concat(t,"Static"),className:"col-sm-2 col-form-label",children:(0,s.jsx)("span",{className:d?"required":"",children:n||" * "})}),(0,s.jsx)(l.b7,{className:"align-items-center",xs:m,style:{display:"flex"},children:(0,s.jsx)(l.jO,{type:a||"text",id:t,placeholder:o||"",value:"file"===a?void 0:i||"",onChange:r,readOnly:c,disabled:p})})]})}},26670:function(e,a,r){"use strict";r.d(a,{J7:function(){return b},QN:function(){return c},W_:function(){return p},ZX:function(){return N},_c:function(){return n},g1:function(){return l},gh:function(){return h},iN:function(){return u},l5:function(){return y},p0:function(){return d},qM:function(){return f},tO:function(){return s},uF:function(){return t},wo:function(){return i},yA:function(){return m},zI:function(){return o}});r(72791);var l=[{key:"idx",label:"No",_props:{color:"primary",className:"id"}},{key:"userName",label:"\uc0ac\uc6a9\uc790 \uba85",_props:{color:"primary",className:"userName"}},{key:"certificateNum",label:"\uc0ac\uc5c5\uc790 \ubc88\ud638",_props:{color:"primary",className:"certificateNum"}},{key:"phoneNum",label:"\ud734\ub300\uc804\ud654 \ubc88\ud638",_props:{color:"primary",className:"phoneNum"}},{key:"createdAt",label:"\ucd5c\ucd08 \ub4f1\ub85d\uc77c",_props:{color:"primary",className:"createdAt"},filter:!1},{key:"status",label:"\uacc4\uc815 \uc0c1\ud0dc",_props:{color:"primary",className:"status"},sorter:!1,filter:!1}],s=[{key:"idx",label:"No",_props:{color:"primary",className:"id"}},{key:"userName",label:"\uc0ac\uc6a9\uc790 \uba85",_props:{color:"primary",className:"userName"}},{key:"createdAt",label:"\ucd5c\ucd08 \ub4f1\ub85d\uc77c",filter:!1,_props:{color:"primary",className:"createdAt"}},{key:"status",label:"\uacc4\uc815 \uc0c1\ud0dc",_props:{color:"primary",className:"status"},filter:!1},{key:"deletedAt",label:"\uacc4\uc815 \ud0c8\ud1f4\uc77c",_props:{color:"primary",className:"deletedAt"},sorter:!1,filter:!1},{key:"phoneNum",label:"\ud734\ub300\uc804\ud654 \ubc88\ud638",_props:{color:"primary",className:"phoneNum"}},{key:"certificateFile",label:"\uc0ac\uc5c5\uc790 \ub4f1\ub85d\uc99d",_props:{color:"primary",className:"certificateFile"}},{key:"businessName",label:"\uc0c1\ud638\uba85",_props:{color:"primary",className:"businessName"}},{key:"certificateNum",label:"\uc0ac\uc5c5\uc790 \ub4f1\ub85d\ubc88\ud638",_props:{color:"primary",className:"certificateNum"}},{key:"address",label:"\uc0ac\uc5c5\uc7a5 \uc8fc\uc18c",_props:{color:"primary",className:"address"}},{key:"withdrawalCategory",label:"\ud0c8\ud1f4 \uc0ac\uc720",_props:{color:"primary",className:"withdrawalCategory"}}],t=[{key:"idx",label:"No",_props:{color:"primary",className:"id"}},{key:"inquiryCategory",label:"\ubb38\uc758 \uc720\ud615",_props:{color:"primary",className:"inquiryCategory"}},{key:"userName",label:"\uc774\ub984",_props:{color:"primary",className:"userName"}},{key:"userPhoneNum",label:"\uc804\ud654\ubc88\ud638",_props:{color:"primary",className:"userPhoneNum"}}],o=[{key:"idx",label:"No",_props:{color:"primary",className:"no"}},{key:"title",label:"\uacf5\uc9c0\uc0ac\ud56d \uc81c\ubaa9",_props:{color:"primary",className:"title"}},{key:"createdAt",label:"\uacf5\uc9c0\uc0ac\ud56d \ub4f1\ub85d\uc77c",_props:{color:"primary",className:"createdAt"},filter:!1},{key:"noticeFiles",label:"\ucca8\ubd80 \ud30c\uc77c",_props:{color:"primary",className:"noticeFiles"},filter:!1,sorter:!1}],i=[{key:"idx",label:"No",_props:{className:"no"}},{key:"supportArea",label:"\uc9c0\uc6d0 \ubd84\uc57c",_props:{className:"supportArea"}},{key:"noticeTitle",label:"\uc9c0\uc6d0 \uacf5\uc9c0 \uc81c\ubaa9",_props:{className:"noticeTitle"}},{key:"name",label:"\uc774\ub984",_props:{className:"name"}},{key:"email",label:"\uc774\uba54\uc77c",_props:{className:"email"}},{key:"phoneNum",label:"\uc804\ud654\ubc88\ud638",_props:{className:"phoneNum"}}],n=[{key:"idx",label:"No",_props:{className:"id"}},{key:"dataRoomCategory",label:"\uce74\ud14c\uace0\ub9ac",_props:{className:"createdAt"}},{key:"title",label:"\uc81c\ubaa9",_props:{className:"title"}},{key:"createdAt",label:"\ub4f1\ub85d\uc77c",_props:{className:"createdAt"},filter:!1}],c=[{key:"idx",label:"No",_props:{className:"id"}},{key:"orderNum",label:"\ubc1c\uc8fc\ubc88\ud638",_props:{className:"orderNum"}},{key:"businessName",label:"\uc0c1\ud638\uba85",_props:{className:"BusinessName"}},{key:"certificateNum",label:"\uc0ac\uc5c5\uc790 \ubc88\ud638",_props:{className:"certificateNum"}},{key:"representativeName",label:"\ub300\ud45c\uc790 \uba85",_props:{className:"RepresentativeName"}},{key:"createdAt",label:"\uc8fc\ubb38 \uc77c\uc790",_props:{className:"createdAt"},filter:!1}],p=[{key:"id",label:"No",_props:{color:"primary",className:"no"}},{key:"category",label:"\uce74\ud14c\uace0\ub9ac",_props:{color:"primary",className:"category"}},{key:"invoiceNum",label:"\uc1a1\uc7a5\ubc88\ud638",_props:{color:"primary",className:"invoiceNum"}},{key:"itemName",label:"\uc81c\ud488\uba85",_props:{color:"primary",className:"itemName"}},{key:"quantity",label:"\ubc1c\uc8fc \uc218\ub7c9",_props:{color:"primary",className:"quantity"}},{key:"processingStatus",label:"\ubc30\uc1a1 \ud604\ud669",_props:{color:"primary",className:"processingStatus"},filter:!1},{key:"quantity",label:"\ubc1c\uc8fc \uc218\ub7c9",_props:{color:"primary",className:"quantity"}},{key:"van",_props:{color:"primary",className:"van"}}],d=[{key:"idx",label:"No",_props:{color:"primary",className:"id"}},{key:"maintenanceNum",label:"\uc720\uc9c0\ubcf4\uc218 \ubc88\ud638",_props:{color:"primary",className:"maintenanceNum"}},{key:"businessName",label:"\uc0c1\ud638\uba85",_props:{color:"primary",className:"BusinessName"}},{key:"certificateNum",label:"\uc0ac\uc5c5\uc790 \ubc88\ud638",_props:{color:"primary",className:"certificateNum"}},{key:"representativeName",label:"\ub300\ud45c\uc790 \uba85",_props:{color:"primary",className:"representativeName"}},{key:"createdAt",label:"\uc8fc\ubb38 \uc77c\uc790",_props:{color:"primary",className:"createdAt"},filter:!1}],m=[{title:"\uc9c0\uc5ed",dataIndex:"region",width:"20%"},{title:"CAT",dataIndex:"catcount",width:"10%"},{title:"POS",dataIndex:"poscount",width:"10%"},{title:"KIOSK",dataIndex:"kioskcount",width:"10%"},{title:"\ud569\uacc4",dataIndex:"sum",width:"10%"},{title:"\ube44\uace0",dataIndex:"note",width:"10%"}],u=[{title:"No.",dataIndex:"id",width:"5%"},{title:"\uad6c\ubd84",dataIndex:"category",width:"20%"},{title:"\uc194\ub8e8\uc158\uba85",dataIndex:"name",width:"20%"},{title:"No.",dataIndex:"id",width:"5%"},{title:"\uc8fc\ub825 VAN\uc0ac",dataIndex:"van",width:"20%"}],y=[{title:"\uad6c\ubd84.",dataIndex:"division",width:"10%"},{title:"\uc81c\uc870\uc0ac/\ubaa8\ub378\uba85",dataIndex:"manufactureCompany",width:"40%"}],N=[{key:"idx",label:"No",filter:!1,_props:{color:"primary",className:"no"}},{key:"title",label:"\uc81c\ubaa9",filter:!1,_props:{color:"primary",className:"title"}},{key:"createdAt",label:"\ub4f1\ub85d\uc77c",_props:{color:"primary",className:"createdAt"},filter:!1}],b=[{key:"idx",label:"No",_props:{color:"primary",className:"id"}},{key:"agencyName",label:"\ub300\ub9ac\uc810 \uba85",_props:{color:"primary",className:"agencyName"}},{key:"phoneNum",label:"\ub300\ub9ac\uc810 \uc5f0\ub77d\ucc98",_props:{color:"primary",className:"phoneNum"},sorter:!1},{key:"applicantNum",label:"\uc2e0\uccad \uc778\uc6d0",_props:{color:"primary",className:"applicantNum"},sorter:!1},{key:"educationDate",label:"\uc2e0\uccad \uad50\uc721 \uc77c\uc790",_props:{color:"primary",className:"educationDate"},filter:!1}],f=[{key:"id",label:"No",_props:{color:"primary",className:"id"}},{key:"name",label:"\uc774\ub984",_props:{color:"primary",className:"distributorName"}},{key:"email",label:"\uc774\uba54\uc77c",_props:{color:"primary",className:"distributorContact"}},{key:"mobilePhoneNum",label:"\uc5f0\ub77d\ucc98",_props:{color:"primary",className:"phoneNumber"}}],h=[{key:"idx",label:"No",_props:{color:"primary",className:"id"}},{key:"title",label:"\uacf5\uace0 \uc81c\ubaa9",_props:{color:"primary",className:"title"}},{key:"createdAt",label:"\ub4f1\ub85d\uc77c",filter:!1,_props:{color:"primary",className:"createdAt"}},{key:"start",label:"\uad50\uc721\uc2e0\uccad \uc2dc\uc791\uc77c",filter:!1,_props:{color:"primary",className:"createdAt"}},{key:"deadline",label:"\uad50\uc721\uc2e0\uccad \ub9c8\uac10\uc77c",filter:!1,_props:{color:"primary",className:"createdAt"}},{key:"place",label:"\uad50\uc721 \uc7a5\uc18c",_props:{color:"primary",className:"place"}},{key:"applicantsCap",label:"\ucc38\uc5ec \uac00\ub2a5 \uc778\uc6d0",_props:{color:"primary",className:"id"}}]},28022:function(){}}]);
//# sourceMappingURL=3546.a497c262.chunk.js.map