(self.webpackChunkneordinary_template_react_js_admin=self.webpackChunkneordinary_template_react_js_admin||[]).push([[2790],{79528:function(e,a,r){"use strict";var l,t=r(30168),n=r(78983),o=r(91191),s=r(76030),i=r(80184);a.Z=function(e){var a=e.id,r=e.files,l=e.label,t=e.isRequired;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.L8,{htmlFor:"".concat(a,"Static"),className:"col-sm-2 col-form-label",children:(0,i.jsx)("span",{className:t?"required":"",children:l||" * "})}),(0,i.jsx)(n.b7,{children:(null===r||void 0===r?void 0:r.length)>0?r.map((function(e,a){var r=e.split("/"),l=r[r.length-1];return(0,i.jsx)("div",{className:"col-form-label",children:(0,i.jsxs)(c,{role:"link",href:(0,s.J0)(e),onClick:function(){return function(e,a){e=(0,s.J0)(e),fetch(e,{method:"GET"}).then((function(e){return e.blob()})).then((function(e){var r=window.URL.createObjectURL(e),l=document.createElement("a");l.href=r,l.download=a,document.body.appendChild(l),l.click(),setTimeout((function(e){window.URL.revokeObjectURL(r)}),6e4),l.remove()})).catch((function(e){console.error("err: ",e)}))}(e,l)},children:[a+1,". ",l]},a)},a)})):(0,i.jsx)("div",{className:"col-form-label",children:"\ub4f1\ub85d\ub41c \ud30c\uc77c\uc774 \uc5c6\uc2b5\ub2c8\ub2e4."})})]})};var c=o.ZP.span(l||(l=(0,t.Z)(["\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  padding: 0 8px;\n  line-height: 1.5714285714285714;\n  flex: auto;\n  transition: all 0.3s;\n  color: #1677ff !important;\n  text-decoration: none;\n  background-color: transparent;\n  outline: none;\n  cursor: pointer;\n"])))},32967:function(e,a,r){"use strict";r.d(a,{Z:function(){return k}});var l=r(30168),t=r(1413),n=r(93433),o=r(72791),s={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M885.2 446.3l-.2-.8-112.2-285.1c-5-16.1-19.9-27.2-36.8-27.2H281.2c-17 0-32.1 11.3-36.9 27.6L139.4 443l-.3.7-.2.8c-1.3 4.9-1.7 9.9-1 14.8-.1 1.6-.2 3.2-.2 4.8V830a60.9 60.9 0 0060.8 60.8h627.2c33.5 0 60.8-27.3 60.9-60.8V464.1c0-1.3 0-2.6-.1-3.7.4-4.9 0-9.6-1.3-14.1zm-295.8-43l-.3 15.7c-.8 44.9-31.8 75.1-77.1 75.1-22.1 0-41.1-7.1-54.8-20.6S436 441.2 435.6 419l-.3-15.7H229.5L309 210h399.2l81.7 193.3H589.4zm-375 76.8h157.3c24.3 57.1 76 90.8 140.4 90.8 33.7 0 65-9.4 90.3-27.2 22.2-15.6 39.5-37.4 50.7-63.6h156.5V814H214.4V480.1z"}}]},name:"inbox",theme:"outlined"},i=r(54291),c=function(e,a){return o.createElement(i.Z,(0,t.Z)((0,t.Z)({},e),{},{ref:a,icon:s}))};c.displayName="InboxOutlined";var p,d=o.forwardRef(c),u=r(70655),m=r(91191),y=r(78983),b=r(74912),f=r.n(b),N=r(76030),h=(r(79528),r(80184)),k=function(e){var a=e.files,r=e.label,l=e.id,s=e.disabled,i=e.fileList,c=e.setFileList,p=e.filePath,m=e.isRequired;(0,o.useEffect)((function(){a&&a.length>0&&c(a.map((function(e,a){return{key:a,uid:a,name:e.fileTitle?e.fileTitle:decodeURI(e.split("/")[e.split("/").length-1]),status:"done",url:e.file?(0,N.J0)(e.file):(0,N.J0)(e)}})))}),[a]);var b={name:"file",multiple:!0,disabled:s,fileList:i,customRequest:function(e){!function(e){var a=e.file,r=e.onError,l=e.onProgress,t=e.onSuccess;f().config.update({region:"ap-northeast-2",accessKeyId:"AKIAWS5VDTBO4P55EYXT",secretAccessKey:"pzJVhC36B2Kl5RsNmVgthoSjAA4bQL64PwZrS4jM"});var n=new(f().S3),o=a.name.replaceAll(" ",""),s={Bucket:(0,N.DK)(p),Key:o,Body:a,ContentType:a.type};n.putObject(s).on("httpUploadProgress",(function(e){var a=e.loaded,r=e.total;return l({percent:a/r*100})})).promise().then((function(e){t(e.$response)}),(function(e){r(),console.log(e.code),console.log(e.message)}))}(e)},onSuccess:function(e){!function(e){var a=e.request.httpRequest,r=a.body,l=a.endpoint,t=l.protocol,o=l.host,s={uid:e.request.params.Key,name:r.name,status:"done",url:"".concat(t,"//").concat(o).concat(a.path)};c([].concat((0,n.Z)(i),[s]))}(e)},onRemove:function(e){var a;a=e,c(i.filter((function(e){return e.uid!==a.uid})))}};return(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)(v,{className:s,children:[(0,h.jsx)(y.L8,{className:m?"required":"",children:r||""}),(0,h.jsxs)(u.Z.Dragger,(0,t.Z)((0,t.Z)({},b),{},{id:l,children:[(0,h.jsx)("p",{className:"ant-upload-drag-icon",children:(0,h.jsx)(d,{})}),(0,h.jsx)("p",{className:"ant-upload-text",children:"\uc5c5\ub85c\ub4dc\ud558\ub824\uba74 \uc774 \uc601\uc5ed\uc73c\ub85c \ud30c\uc77c\uc744 \ud074\ub9ad\ud558\uac70\ub098 \ub4dc\ub798\uadf8\ud558\uc138\uc694."})]}))]})})},v=m.ZP.div(p||(p=(0,l.Z)(["\n  border-radius: 0.375rem;\n  &.disabled {\n    background: #d8dbe0;\n  }\n  & .ant-upload-disabled {\n    background: #d8dbe0;\n    border: 0.5px dashed #b1b7c1;\n    opacity: 1;\n  }\n  & > span {\n    display: flex;\n    flex-direction: column;\n  }\n"])))},98708:function(e,a,r){"use strict";var l,t=r(30168),n=r(29439),o=r(43500),s=r(91191),i=r(78983),c=r(72791),p=r(76030),d=r(80184);a.Z=function(e){var a=e.fileItem,r=(0,c.useState)([]),l=(0,n.Z)(r,2),t=l[0],s=l[1];return(0,c.useEffect)((function(){a&&a.length>0&&s(a.map((function(e){var a=e.split("/");return{uid:e,name:a[a.length-1],status:"done",url:(0,p.J0)(e)}})))}),[a]),(0,d.jsx)(i.b7,{children:0!==t.length?t.map((function(e){return(0,d.jsxs)(u,{children:[(0,d.jsx)(o.Z,{}),(0,d.jsx)("a",{children:e.name})]},e.uid)})):(0,d.jsx)(i.jO,{type:"text",placeholder:"\ud30c\uc77c\uc774 \uc5c6\uc2b5\ub2c8\ub2e4.",disabled:!0})})};var u=s.ZP.div(l||(l=(0,t.Z)(["\n  display: flex;\n  align-items: center;\n  :hover {\n    background-color: rgba(0, 0, 0, 0.04);\n  }\n  & a {\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    padding: 0 8px;\n    line-height: 1.5714285714285714;\n    flex: auto;\n    transition: all 0.3s;\n    color: #1677ff !important;\n    text-decoration: none;\n    background-color: transparent;\n    outline: none;\n    cursor: pointer;\n  }\n"])))},3854:function(e,a,r){"use strict";var l=r(78983),t=(r(72791),r(80184));a.Z=function(e){var a=e.type,r=e.onChange,n=e.id,o=e.placeholder,s=e.value,i=e.label,c=e.readOnly,p=e.disabled,d=e.isRequired,u=e.xs;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.L8,{htmlFor:"".concat(n,"Static"),className:"col-sm-2 col-form-label",children:(0,t.jsx)("span",{className:d?"required":"",children:i||" * "})}),(0,t.jsx)(l.b7,{className:"align-items-center",xs:u,style:{display:"flex"},children:(0,t.jsx)(l.jO,{type:a||"text",id:n,placeholder:o||"",value:"file"===a?void 0:s||"",onChange:r,readOnly:c,disabled:p})})]})}},88688:function(e,a,r){"use strict";var l,t=r(30168),n=r(74165),o=r(1413),s=r(15861),i=r(72791),c=r(66770),p=r.n(c),d=(r(86009),r(78983)),u=r(91191),m=r(80184);a.Z=function(e){var a=e.id,r=e.value,l=e.label,t=e.isRequired,c=e.readOnly,p=void 0!==c&&c,u=e.setValue,b=(0,i.useRef)(),f=function(){var e=document.createElement("input"),a=new FormData,r="";e.setAttribute("type","file"),e.setAttribute("accept","image/*"),e.click(),e.onchange=(0,s.Z)((0,n.Z)().mark((function l(){var t,s,i,c,p,d,u;return(0,n.Z)().wrap((function(l){for(;;)switch(l.prev=l.next){case 0:if(t=e.files,console.log(t),null===t){l.next=14;break}return a.append("image",t[0]),l.prev=4,c=r=c.data.url,null!==(p=null===(s=b.current)||void 0===s||null===(i=s.getEditor().getSelection())||void 0===i?void 0:i.index)&&void 0!==p&&(null===(u=null===(d=b.current)||void 0===d?void 0:d.getEditor())||void 0===u||u.setSelection(p,1),null===u||void 0===u||u.clipboard.dangerouslyPasteHTML(p,"<img src=".concat(r,' alt="\uc774\ubbf8\uc9c0 \ud0dc\uadf8\uac00 \uc0bd\uc785\ub429\ub2c8\ub2e4." />'))),l.abrupt("return",(0,o.Z)((0,o.Z)({},c),{},{success:!0}));case 11:return l.prev=11,l.t0=l.catch(4),l.abrupt("return",(0,o.Z)((0,o.Z)({},l.t0.response),{},{success:!1}));case 14:case"end":return l.stop()}}),l,null,[[4,11]])})))},N=(0,i.useMemo)((function(){return{toolbar:{container:[["bold","italic","underline","strike","blockquote"],[{size:["small",!1,"large","huge"]},{color:[]}],[{list:"ordered"},{list:"bullet"},{indent:"-1"},{indent:"+1"},{align:[]}],["image","video"]],handlers:{image:f}}}}),[]);return(0,m.jsxs)(d.b7,{style:{height:"300px"},className:"pb-5",children:[(0,m.jsx)(d.L8,{htmlFor:"".concat(a,"Static"),className:"col-sm-2 col-form-label",children:(0,m.jsx)("span",{className:t&&"required",children:l||" * "})}),(0,m.jsx)(y,{id:a||"",ref:function(e){null!==e&&(b.current=e)},value:r,onChange:u,modules:N,readOnly:p,theme:"snow",placeholder:"\ub0b4\uc6a9\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694.",style:{height:"100%"}})]})};var y=(0,u.ZP)(p())(l||(l=(0,t.Z)(["\n  background-color: ",";\n\n  .ql-toolbar {\n    display: ",";\n  }\n"])),(function(e){return e.readOnly?"#d8dbe0":"transparent"}),(function(e){return e.readOnly?"none":"block"}))},84336:function(e,a,r){"use strict";var l=r(78983),t=(r(72791),r(80184));a.Z=function(e){var a=e.id,r=e.value,n=e.rows,o=e.label,s=e.onChange,i=e.text,c=e.readOnly,p=e.disabled;return(0,t.jsx)(l.b7,{children:(0,t.jsx)(l.PB,{id:a||"",label:o||"",rows:n||10,value:r||"",onChange:s,text:i||"",readOnly:c,disabled:p})})}},26670:function(e,a,r){"use strict";r.d(a,{J7:function(){return N},QN:function(){return d},ZX:function(){return f},g1:function(){return n},iN:function(){return y},l5:function(){return b},p0:function(){return u},qM:function(){return h},tO:function(){return o},uF:function(){return s},wo:function(){return c},yA:function(){return m},zI:function(){return i},zw:function(){return p}});var l=r(78983),t=(r(72791),r(80184)),n=[{key:"id",label:"\ubc88\ud638",_props:{color:"primary",className:"userId"}},{key:"userName",label:"\ud68c\uc6d0 \uc774\ub984",_props:{color:"primary",className:"userName"}},{key:"certificateNum",label:"\uc0ac\uc5c5\uc790\ubc88\ud638",_props:{color:"primary",className:"certificateNum"}},{key:"phoneNum",lebel:"\ud734\ub300\ud3f0 \ubc88\ud638",_props:{color:"primary",className:"phoneNum"}},{key:"createdAt",lebel:"\uacc4\uc815 \uc0dd\uc131\uc77c",_props:{color:"primary",className:"createdAt"},filter:!1},{key:"status",lebel:"\uacc4\uc815 \uc0c1\ud0dc",_props:{color:"primary",className:"status"},sorter:!1,filter:!1}],o=[{key:"userName",label:"\ud68c\uc6d0 \uc774\ub984",_props:{color:"primary",className:"userName"}},{key:"createdAt",label:"\uacc4\uc815 \uc0dd\uc131\uc77c",_props:{color:"primary",className:"createdAt"}},{key:"status",label:"\uacc4\uc815 \uc0c1\ud0dc",_props:{color:"primary",className:"status"},sorter:!1,filter:!1},{key:"deletedAt",label:"\uacc4\uc815 \uc0ad\uc81c\uc77c",_props:{color:"primary",className:"deletedAt"},sorter:!1,filter:!1},{key:"phoneNum",label:"\ud734\ub300\ud3f0 \ubc88\ud638",_props:{color:"primary",className:"phoneNum"}},{key:"certificateFile",label:"\uc0ac\uc5c5\uc790 \ub4f1\ub85d\uc99d \ud30c\uc77c",_props:{color:"primary",className:"certificateFile"}},{key:"businessName",label:"\uc0c1\ud638\uba85",_props:{color:"primary",className:"businessName"}},{key:"certificateNum",label:"\uc0ac\uc5c5\uc790 \ub4f1\ub85d\ubc88\ud638",_props:{color:"primary",className:"certificateNum"}},{key:"address",label:"\uc0ac\uc5c5\uc7a5 \uc8fc\uc18c",_props:{color:"primary",className:"address"}},{key:"withdrawalReason",label:"\ud0c8\ud1f4 \uc0ac\uc720",_props:{color:"primary",className:"withdrawalReason"}}],s=[{key:"inquiryCategory",label:"\ubb38\uc758 \uc720\ud615",_props:{color:"primary",className:"inquiryCategory"}},{key:"userName",label:"\ud68c\uc6d0 \uc774\ub984",_props:{color:"primary",className:"userName"}},{key:"userPhoneNum",label:"\ud68c\uc6d0 \ud734\ub300\ud3f0 \ubc88\ud638",_props:{color:"primary",className:"userPhoneNum"}},{key:"createdAt",label:"\ubb38\uc758 \ub4f1\ub85d\uc77c",filter:!1,_props:{color:"primary",className:"createdAt"}}],i=[{key:"id",label:"No",_props:{color:"primary",className:"no"}},{key:"title",label:"\uacf5\uc9c0\uc0ac\ud56d \uc81c\ubaa9",_props:{color:"primary",className:"title"}},{key:"createdAt",label:"\uacf5\uc9c0\uc0ac\ud56d \ub4f1\ub85d\uc77c",_props:{color:"primary",className:"createdAt"},filter:!1},{key:"noticeFiles",label:"\ud30c\uc77c",_props:{color:"primary",className:"noticeFiles"},filter:!1,sorter:!1}],c=[{key:"id",label:"No",_props:{className:"no"}},{key:"supportArea",label:"\uc9c0\uc6d0 \ubd84\uc57c",_props:{className:"supportArea"}},{key:"noticeTitle",label:"\uc9c0\uc6d0 \uacf5\uc9c0 \uc81c\ubaa9",_props:{className:"noticeTitle"}},{key:"userName",label:"\uc774\ub984",_props:{className:"userName"}},{key:"phoneNum",label:"\uc804\ud654\ubc88\ud638",_props:{className:"phoneNum"}},{key:"email",label:"\uc774\uba54\uc77c",_props:{className:"email"}}],p=[{key:"id",label:"No",_props:{className:"id"}},{key:"title",label:"\uc81c\ubaa9",_props:{className:"title"}},{key:"dataRoomCategory",label:"\uc790\ub8cc \uc720\ud615",_props:{className:"dataRoomCategory"}},{key:"createdAt",label:"\ub4f1\ub85d\uc77c",_props:{className:"createdAt"},filter:!1}],d=[{key:"no",_props:{className:"no"}},{key:"orderNo",label:"\ubc1c\uc8fc \uc2e0\uccad \uc2dd\ubcc4 \ubc88\ud638",_props:{className:"orderNo"}},{key:"businessName",label:"\uc0c1\ud638\uba85",_props:{className:"BusinessName"}},{key:"representativeName",label:"\ub300\ud45c\uc790 \uba85",_props:{className:"RepresentativeName"}},{key:"createdAt",label:"\uc2e0\uccad \uc77c\uc790",_props:{className:"createdAt"},filter:!1},{key:"deleteBtn",label:" ",_props:{color:"primary",className:"deleteBtn"},filter:!1,sorter:!1}],u=[{key:"maintenanceApplicationNo",label:"\uc720\uc9c0\ubcf4\uc218 \uc2e0\uccad \ubc88\ud638",_props:{color:"primary",className:"maintenanceApplicationNo"}},{key:"businessName",label:"\uc0c1\ud638\uba85",_props:{color:"primary",className:"BusinessName"}},{key:"businessNumber",label:"\uc0ac\uc5c5\uc790 \ub4f1\ub85d\ubc88\ud638",_props:{color:"primary",className:"businessNumber"}},{key:"representativeName",label:"\ub300\ud45c\uc790 \uba85",_props:{color:"primary",className:"RepresentativeName"}},{key:"createdAt",label:"\uc2e0\uccad \uc77c\uc790",_props:{color:"primary",className:"createdAt"},filter:!1}],m=[{title:"\uc9c0\uc5ed",dataIndex:"region",width:"20%"},{title:"CAT",dataIndex:"cat",width:"10%"},{title:"POS",dataIndex:"pos",width:"10%"},{title:"KIOSK",dataIndex:"kiosk",width:"10%"},{title:"SUM",dataIndex:"sum",width:"10%",render:function(e,a){if(e)return a.pos+a.cat+a.kiosk}},{title:"\ube44\uace0",dataIndex:"remark",width:"10%"}],y=[{title:"No.",dataIndex:"no",width:"5%"},{title:"\uad6c\ubd84",dataIndex:"division",width:"20%",render:function(e,a){if(console.log(e),e)return(0,t.jsx)(l.LX,{"aria-label":"Default select example",options:["Open this select menu",{label:"One",value:"1"},{label:"Two",value:"2"},{label:"Three",value:"3",disabled:!0}]})}},{title:"\uc194\ub8e8\uc158\uba85",dataIndex:"solution",width:"20%"},{title:"No.",dataIndex:"no",width:"5%"},{title:"\uc8fc\ub825 VAN\uc0ac",dataIndex:"flagshipCompany",width:"20%",render:function(e,a){if(e)return(0,t.jsx)(l.LX,{"aria-label":"Default select example",options:["Open this select menu",{label:"One",value:"1"},{label:"Two",value:"2"},{label:"Three",value:"3",disabled:!0}]})}}],b=[{title:"\uad6c\ubd84.",dataIndex:"division",width:"10%"},{title:"\uc81c\uc870\uc0ac/\ubaa8\ub378\uba85",dataIndex:"manufactureCompany",width:"40%"}],f=[{key:"id",label:"No",_props:{color:"primary",className:"no"}},{key:"title",label:"\uc81c\ubaa9",_props:{color:"primary",className:"title"}},{key:"createdAt",label:"\uc2e0\uccad\uc77c",_props:{color:"primary",className:"createdAt"},filter:!1}],N=[{key:"id",label:"No",_props:{color:"primary",className:"id"}},{key:"agencyName",label:"\ub300\ub9ac\uc810",_props:{color:"primary",className:"agencyName"}},{key:"educationDate",label:"\uad50\uc721 \uc2e0\uccad\uc77c",_props:{color:"primary",className:"educationDate"},filter:!1},{key:"phoneNum",label:"\uc5f0\ub77d\ucc98",_props:{color:"primary",className:"phoneNum"},filter:!1,sorter:!1},{key:"applicantNum",label:"\uad50\uc721 \uc2e0\uccad \uc778\uc6d0",_props:{color:"primary",className:"applicantNum"},filter:!1,sorter:!1}],h=[{key:"id",label:"No",_props:{color:"primary",className:"id"}},{key:"name",label:"\uc774\ub984",_props:{color:"primary",className:"distributorName"}},{key:"email",label:"\uc774\uba54\uc77c",_props:{color:"primary",className:"distributorContact"}},{key:"mobilePhoneNum",label:"\uc5f0\ub77d\ucc98",_props:{color:"primary",className:"phoneNumber"}}]},28022:function(){}}]);
//# sourceMappingURL=2790.90b35ab4.chunk.js.map