(self.webpackChunkneordinary_template_react_js_admin=self.webpackChunkneordinary_template_react_js_admin||[]).push([[6797],{41085:function(e,t,r){"use strict";var n,a=r(30168),l=r(78983),i=r(59513),s=r.n(i),o=r(44801),c=(r(68639),r(72426)),u=r.n(c),d=(r(99414),r(80184));t.Z=function(e){var t=e.id,r=e.date,n=e.onChange,a=e.label,i=e.readOnly,s=void 0!==i&&i,o=e.isRequired,c=e.isDisabled,h=void 0!==c&&c,m=function(e){n({target:{value:e,id:t}})};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(l.L8,{htmlFor:"".concat(t,"Static"),className:"col-sm-2 col-form-label",children:(0,d.jsx)("span",{className:o?"required":"",children:a||" * "})}),(0,d.jsx)(l.b7,{children:(0,d.jsx)(p,{readOnly:s,dateFormat:"yyyy-MM-dd",selected:null===r?null:u()(r).toDate(),onChange:function(e){return m(e)},disabled:h,placeholderText:"\ub0a0\uc9dc \uc785\ub825",id:t})})]})};var p=(0,o.ZP)(s())(n||(n=(0,a.Z)(["\n  display: block;\n  width: 100%;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: var(--cui-input-color, rgba(44, 56, 74, 0.95));\n  background-color: var(--cui-input-bg, #fff);\n  background-clip: padding-box;\n  border: 1px solid var(--cui-input-border-color, #b1b7c1);\n  appearance: none;\n  border-radius: 0.375rem;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n\n  &:disabled {\n    background-color: #d8dbe0;\n  }\n"])))},54105:function(e,t,r){"use strict";var n=r(80184);t.Z=function(e){var t=e.children,r=e.onClick;return(0,n.jsxs)("div",{className:"modal-header",children:[(0,n.jsx)("h5",{className:"modal-title",children:t}),(0,n.jsx)("button",{type:"button",className:"btn btn-close",onClick:r,"aria-label":"Close"})]})}},86385:function(e,t,r){"use strict";var n,a,l=r(30168),i=r(93433),s=r(74165),o=r(15861),c=r(29439),u=r(79286),d=r(43341),p=r(72791),h=r(78983),m=r(44801),b=r(74912),f=r.n(b),v=r(76030),x=r(80184),y=function(e){return new Promise((function(t,r){var n=new FileReader;n.readAsDataURL(e),n.onload=function(){return t(n.result)},n.onerror=function(e){return r(e)}}))};t.Z=function(e){var t=e.images,r=e.id,n=e.label,a=e.fileList,l=e.setFileList,m=e.imgPath,b=e.isRequired,N=e.readOnly,j=e.oneSheet,S=void 0!==j&&j,T=e.maxFileLength,O=void 0===T?1:T,R=(0,p.useState)(!1),Z=(0,c.Z)(R,2),k=(Z[0],Z[1]),A=(0,p.useState)(""),I=(0,c.Z)(A,2),C=I[0],_=I[1],L=(0,p.useState)(""),P=(0,c.Z)(L,2),q=P[0],w=P[1];(0,p.useEffect)((function(){t&&t.length>0&&l(t.map((function(e){return{uid:e,name:decodeURI(e.split("/")[e.split("/").length-1]),status:"done",url:(0,v.J0)(e)}})))}),[t,l]);var M=function(){var e=(0,o.Z)((0,s.Z)().mark((function e(t){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.url||t.preview){e.next=4;break}return e.next=3,y(t.originFileObj);case 3:t.preview=e.sent;case 4:_(t.url||t.preview),k(!0),w(t.name||t.url.substring(t.url.lastIndexOf("/")+1));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=(0,x.jsxs)("div",{children:[(0,x.jsx)(u.Z,{}),(0,x.jsx)("div",{style:{marginTop:8},children:"Upload"})]}),U=(0,x.jsx)("div",{children:"Have No Image."});return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(h.L8,{htmlFor:"".concat(r,"Static"),className:"col-form-label",children:(0,x.jsx)("span",{className:b&&"required",children:n||" * "})}),(0,x.jsx)(d.Z,{listType:"picture-card",fileList:a,onPreview:M,onSuccess:function(e){return function(e){var t=e.request.httpRequest,r=t.body,n=t.endpoint,s=n.protocol,o=n.host,c={uid:e.request.params.Key,name:r.name,status:"done",url:"".concat(s,"//").concat(o).concat(t.path)};l([].concat((0,i.Z)(a),[c]))}(e)},onRemove:function(e){return t=e,void l(a.filter((function(e){return e.uid!==t.uid})));var t},customRequest:function(e){return function(e){var t=e.file,r=e.onError,n=e.onProgress,l=e.onSuccess;if(S&&a.length===O)alert("\uc774\ubbf8\uc9c0\ub294 \ucd5c\ub300 ".concat(O,"\uac1c\ub9cc \ub4f1\ub85d \uac00\ub2a5\ud569\ub2c8\ub2e4!"));else{f().config.update({region:"ap-northeast-2",accessKeyId:"AKIAWS5VDTBO4P55EYXT",secretAccessKey:"pzJVhC36B2Kl5RsNmVgthoSjAA4bQL64PwZrS4jM"});var i=new(f().S3),s=t.name.replaceAll(" ",""),o={Bucket:(0,v.AA)(m),Key:s,Body:t,ContentType:t.type};i.putObject(o).on("httpUploadProgress",(function(e){var t=e.loaded,r=e.total;return n({percent:t/r*100})})).promise().then((function(e){l(e.$response)}),(function(e){r(),console.log(e.code),console.log(e.message)}))}}(e)},disabled:N,children:(null===a||void 0===a?void 0:a.length)>=8?null:0===(null===a||void 0===a?void 0:a.length)?N?U:D:N?null:D}),C&&(0,x.jsxs)(h.b7,{children:[(0,x.jsx)(h.L8,{className:"col-form-label w-75",children:(0,x.jsx)(E,{children:(0,x.jsx)("span",{children:q||""})})}),(0,x.jsx)(g,{className:"text-center p-2",children:(0,x.jsx)("div",{children:(0,x.jsx)(h.DW,{rounded:!0,alt:"example",onClick:function(){_("")},src:C})})})]})]})};var g=(0,m.ZP)(h.b7)(n||(n=(0,l.Z)(["\n  padding: 0.5rem 0;\n  background: #fafafa;\n  border: 1px dashed #d9d9d9;\n  border-radius: 2px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  div {\n    width: 75%;\n\n    & img {\n      max-width: 100%;\n      height: auto;\n      cursor: pointer;\n      max-height: 600px;\n    }\n  }\n"]))),E=m.ZP.div(a||(a=(0,l.Z)(["\n  width: 100%;\n  padding: 0 5px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n"])))},88688:function(e,t,r){"use strict";var n,a,l=r(30168),i=(r(74165),r(1413),r(15861),r(29439)),s=r(72791),o=r(66770),c=r.n(o),u=(r(86009),r(78983)),d=r(44801),p=r(80184);t.Z=function(e){var t=e.id,r=e.value,n=e.label,a=e.isRequired,l=e.readOnly,o=void 0!==l&&l,c=e.setValue,d=e.maxLength,b=e.editorHeight,f=void 0===b?300:b,v=(0,s.useRef)(),x=(0,s.useState)(!1),y=(0,i.Z)(x,2),g=y[0],E=y[1],N=(0,s.useMemo)((function(){return{toolbar:{container:[["bold","italic","underline","strike"],["blockquote"],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{indent:"-1"},{indent:"+1"}],[{direction:"rtl"}],[{header:[1,2,3,4,5,6,!1]}],[{color:[]},{background:[]}],[{font:[]}],[{align:[]}],["clean"]]}}}),[]),j=function(e){if(d){var t=null===e||void 0===e?void 0:e.replace(/<[^>]*>?| /g,"").length;d>=t?(c((function(){return e})),E(!1)):E(!0)}else d||c((function(){return e}))};return(0,p.jsxs)(u.b7,{style:{height:"".concat(f,"px"),marginBottom:"20px"},className:"pb-5",children:[(0,p.jsxs)(u.L8,{htmlFor:"".concat(t,"Static"),className:"col-form-label",children:[(0,p.jsx)("span",{className:a&&"required",children:n||" * "}),(0,p.jsx)(m,{className:"px-lg-2",textLengthCheck:g,children:d?"* ".concat(d,"\uc790 \uae4c\uc9c0 \uc785\ub825 \uac00\ub2a5\ud569\ub2c8\ub2e4."):"  "})]}),(0,p.jsx)(h,{id:t||"",ref:function(e){null!==e&&(v.current=e)},value:r,defaultValue:r,onChange:function(e){return j(g?r:e)},modules:N,readOnly:o,theme:"snow",placeholder:"\ub0b4\uc6a9\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694.",style:{height:"100%"}})]})};var h=(0,d.ZP)(c())(n||(n=(0,l.Z)(["\n  background-color: ",";\n  border-radius: 0.375rem;\n  border: none;\n  padding-bottom: ",";\n  .ql-container {\n    border-radius: ",";\n    border-bottom-left-radius: 0.375rem;\n    border-bottom-right-radius: 0.375rem;\n  }\n  .ql-editor {\n    border-radius: ",";\n  }\n  .ql-toolbar {\n    border-top-left-radius: 0.375rem;\n    border-top-right-radius: 0.375rem;\n    display: ",";\n  }\n"])),(function(e){return e.readOnly?"#d8dbe0":"transparent"}),(function(e){return e.readOnly?"0":"67px"}),(function(e){return e.readOnly?"0.375rem":"0"}),(function(e){return e.readOnly?"0.375rem":"0"}),(function(e){return e.readOnly?"none":"block"})),m=d.ZP.span(a||(a=(0,l.Z)(["\n  font-size: 12px;\n  padding-left: 10px;\n  //color: ",";\n"])),(function(e){return e.textLengthCheck&&"red"}))},55740:function(e,t,r){"use strict";var n=r(78983),a=r(80184);t.Z=function(e){var t=e.onChange,r=e.size,l=e.placeholder,i=e.label,s=e.value,o=e.readOnly,c=e.id,u=e.xs,d=e.disabled,p=void 0!==d&&d,h=e.isRequired,m=e.options.map((function(e){return(0,a.jsx)("option",{value:e.key,children:e.value},e.key)}));return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.L8,{htmlFor:"staticEmail",className:"col-sm-2 col-form-label",children:(0,a.jsx)("span",{className:h?"required":"",children:i||" * "})}),(0,a.jsx)(n.b7,{xs:u,children:(0,a.jsxs)(n.LX,{value:s,disabled:p,id:c,size:r,onChange:t,readOnly:o,children:[(0,a.jsx)("option",{value:"",children:l}),m]})})]})}},33368:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return _}});var n=r(4942),a=r(1413),l=r(74165),i=r(15861),s=r(29439),o=r(72791),c=r(20961),u=r(78983),d=r(70844),p=r(55740),h=r(3854),m=r(41085),b=r(54105),f=r(96672),v=r(19311),x=r(86385),y=r(46327),g=r(72426),E=r.n(g),N=r(76030),j=r(88688),S=r(80184),T=[{key:"SERVICE_PLANNING",value:"\uc11c\ube44\uc2a4 \uae30\ud68d"},{key:"SERVICE_DEVELOPMENT",value:"\uc11c\ube44\uc2a4 \uac1c\ubc1c"},{key:"DESIGN",value:"\ub514\uc790\uc778"},{key:"BUSINESS_DEVELOPMENT",value:"\uc0ac\uc5c5 \uac1c\ubc1c"},{key:"B2B_DEVELOPMENT",value:"B2B \uac1c\ubc1c"},{key:"B2B_OPERATION",value:"B2B \uc6b4\uc601"},{key:"CORPORATE_SALES",value:"\ubc95\uc778 \uc601\uc5c5"},{key:"CHANNEL_SALES",value:"\ucc44\ub110 \uc601\uc5c5"},{key:"DEVICE_SALES",value:"\ub514\ubc14\uc774\uc2a4 \uc601\uc5c5"},{key:"DEVICE_DEVELOPMENT",value:"\ub514\ubc14\uc774\uc2a4 \uac1c\ubc1c"},{key:"OEM_MANAGEMENT",value:"OEM \uad00\ub9ac"},{key:"AS_CENTER",value:"A/S \uc13c\ud130"},{key:"BUSINESS_MANAGEMENT",value:"\uacbd\uc601 \uad00\ub9ac"},{key:"SETTLEMENT",value:"\uc815\uc0b0"},{key:"OPERATION_PLANNING",value:"\uc6b4\uc601 \uae30\ud68d"},{key:"CUSTOMER_SUPPORT",value:"\uace0\uac1d \uc9c0\uc6d0"},{key:"INTEGRATED_CS",value:"\ud1b5\ud569 CS"},{key:"ONSITE_SUPPORT_TECHNICAL_SUPPORT",value:"\ud604\uc7a5 \uc9c0\uc6d0-\uae30\uc220 \uc9c0\uc6d0"},{key:"ONSITE_SUPPORT_LOGISTICS",value:"\ud604\uc7a5 \uc9c0\uc6d0 - \ubb3c\ub958"},{key:"OPERATIONAL_INNOVATION_TF",value:"\uc6b4\uc601 \ud601\uc2e0 TF"}],O=[{key:"FULL_TIME",value:"\uc815\uaddc\uc9c1"},{key:"PART_TIME",value:"\uacc4\uc57d\uc9c1"},{key:"INTERN",value:"\uc778\ud134"}],R=[{key:"UNIVERSITY_GRADUATE_4_YEAR",value:"\ub300\uc878(4\ub144\uc81c) \uc774\uc0c1"},{key:"UNIVERSITY_GRADUATE_2_3_YEAR",value:"\ub300\uc878(2,3\ub144\uc81c) \uc774\uc0c1"},{key:"HIGH_SCHOOL_GRADUATE",value:"\uace0\uc878"}],Z=[{key:"NEW",value:"\uc2e0\uc785"},{key:"EXPERIENCED",value:"\uacbd\ub825"},{key:"ANY",value:"\ubb34\uad00"}],k=function(e){var t,r,n,a,c=e.getList,d=e.value,g=e.visible,k=e.setSelectedItem,A=e.setVisible,I=e.onChange,C=e.isReadOnly,_=e.setIsReadOnly,L=e.duty,P=e.setDuty,q=e.qualification,w=e.setQualification,M=e.preference,D=e.setPreference,U=e.hiringReason,V=e.setHiringReason,B=e.departmentStatus,Y=e.setDepartmentStatus,F=e.otherNote,G=e.setOtherNote,H=(0,o.useState)([]),z=(0,s.Z)(H,2),K=z[0],W=z[1],Q=function(){if(-1!==d.recruitmentId){if("\uc120\ud0dd\ud574\uc8fc\uc138\uc694"===d.jobType)return alert("\uace0\uc6a9 \ud615\ud0dc\ub97c \uc120\ud0dd\ud574\uc8fc\uc138\uc694."),!1;if("\uc120\ud0dd\ud574\uc8fc\uc138\uc694"===d.category)return alert("\uce74\ud14c\uace0\ub9ac\ub97c \uc120\ud0dd\ud574 \uc8fc\uc138\uc694."),!1;if((0,y.xb)(d.title))return alert("\uacf5\uace0 \uc81c\ubaa9\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694."),!1;if((0,y.xb)(d.location))return alert("\uadfc\ubb34 \uc9c0\uc5ed\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694."),!1;if("\uc120\ud0dd\ud574\uc8fc\uc138\uc694"===d.education)return alert("\ud559\ub825 \ubc0f \uc804\uacf5\uc744 \uc120\ud0dd\ud574\uc8fc\uc138\uc694."),!1;if("\uc120\ud0dd\ud574\uc8fc\uc138\uc694"===d.career)return alert("\uacbd\ub825 \uc815\ubcf4\ub97c \uc120\ud0dd\ud574\uc8fc\uc138\uc694."),!1;if("<p><br></p>"===L)return alert("\uc9c1\ubb34 \ub0b4\uc6a9\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694."),!1}else{if((0,y.xb)(d.jobType)||"\uc120\ud0dd\ud574\uc8fc\uc138\uc694"===d.jobType)return alert("\uace0\uc6a9 \ud615\ud0dc\ub97c \uc120\ud0dd\ud574\uc8fc\uc138\uc694."),!1;if((0,y.xb)(d.title)||"\uc120\ud0dd\ud574\uc8fc\uc138\uc694"===d.title)return alert("\uacf5\uace0 \uc81c\ubaa9\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694."),!1;if((0,y.xb)(d.category)||"\uc120\ud0dd\ud574\uc8fc\uc138\uc694"===d.category)return alert("\uce74\ud14c\uace0\ub9ac\ub97c \uc120\ud0dd\ud574 \uc8fc\uc138\uc694."),!1;if((0,y.xb)(d.career)||"\uc120\ud0dd\ud574\uc8fc\uc138\uc694"===d.career)return alert("\uacbd\ub825 \uc815\ubcf4\ub97c \uc120\ud0dd\ud574\uc8fc\uc138\uc694."),!1;if((0,y.xb)(d.location))return alert("\uadfc\ubb34 \uc9c0\uc5ed\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694."),!1;if(console.log((0,y.xb)(d.education),d.education),(0,y.xb)(d.education)||"\uc120\ud0dd\ud574\uc8fc\uc138\uc694"===d.education)return alert("\ud559\ub825 \ubc0f \uc804\uacf5\uc744 \uc120\ud0dd\ud574\uc8fc\uc138\uc694."),!1;if((0,y.xb)(L)||"<p><br></p>"===L)return alert("\uc9c1\ubb34 \ub0b4\uc6a9\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694."),!1}return!0},X=function(){var e=(0,i.Z)((0,l.Z)().mark((function e(){var t,r,n,a,i,s,o,u,p;return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=E()(d.startedAt).format("YYYY.MM.DD 00:00:00"),r=E()(d.closedAt).format("YYYY.MM.DD 23:59:59"),e.prev=2,Q()){e.next=5;break}return e.abrupt("return");case 5:return o=(0,N.HU)(K),e.next=8,f.Z.request({data:{category:null!==(n=d.category)&&void 0!==n?n:d.categoryEnglish,title:d.title,startedAt:t,closedAt:r,imageUrls:o,jobType:null!==(a=d.jobType)&&void 0!==a?a:d.jobTypeEnglish,location:d.location,education:null!==(i=d.education)&&void 0!==i?i:d.educationEnglish,career:null!==(s=d.career)&&void 0!==s?s:d.careerEnglish,duty:L,qualification:""===q||"<p><br></p>"===q?null:q,preference:""===M||"<p><br></p>"===M?null:M,hiringReason:""===U||"<p><br></p>"===U?null:U,departmentStatus:""===B||"<p><br></p>"===B?null:B,otherNote:""===F||"<p><br></p>"===F?null:F},query:{},path:{},method:f.w.POST,url:"".concat(v.l.RECRUITMENT)});case 8:u=e.sent,(p=u.data).isSuccess?(c(),W([]),_(!0),A(!1),alert("\uacf5\uace0\uac00 \uc815\uc0c1\uc801\uc73c\ub85c \uc0dd\uc131 \ub418\uc5c8\uc2b5\ub2c8\ub2e4.")):alert(p.message),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(2),alert(e.t0);case 16:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(){return e.apply(this,arguments)}}(),J=function(){var e=(0,i.Z)((0,l.Z)().mark((function e(){var t,r;return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.Z.request({data:{},query:{},path:{recruitmentId:d.recruitmentId},method:f.w.PATCH,url:"".concat(v.l.RECRUITMENT,"/:recruitmentId/d")});case 3:t=e.sent,(r=t.data).isSuccess&&(c(),W([]),_(!0),A(!1),alert(r.result)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),alert(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),$=function(){var e=(0,i.Z)((0,l.Z)().mark((function e(){var t,r,n,a,i,s,o,u,p;return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=E()(d.startedAt).format("YYYY.MM.DD 00:00:00"),r=E()(d.closedAt).format("YYYY.MM.DD 23:59:59"),n=(0,N.HU)(K),e.prev=3,Q()){e.next=6;break}return e.abrupt("return");case 6:return e.next=8,f.Z.request({data:{category:null!==(a=d.category)&&void 0!==a?a:d.categoryEnglish,title:d.title,startedAt:t,closedAt:r,imageUrls:n,jobType:null!==(i=d.jobType)&&void 0!==i?i:d.jobTypeEnglish,location:d.location,education:null!==(s=d.education)&&void 0!==s?s:d.educationEnglish,career:null!==(o=d.career)&&void 0!==o?o:d.careerEnglish,duty:L,qualification:""===q||"<p><br></p>"===q?null:q,preference:""===M||"<p><br></p>"===M?null:M,hiringReason:""===U||"<p><br></p>"===U?null:U,departmentStatus:""===B||"<p><br></p>"===B?null:B,otherNote:""===F||"<p><br></p>"===F?null:F},query:{},path:{recruitmentId:d.recruitmentId},method:f.w.PATCH,url:"".concat(v.l.RECRUITMENT,"/:recruitmentId")});case 8:u=e.sent,(p=u.data).isSuccess?(c(),alert(p.result),te()):alert(p.message),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(3),alert(e.t0);case 16:case"end":return e.stop()}}),e,null,[[3,13]])})));return function(){return e.apply(this,arguments)}}(),ee=function(){(C||-1===d.recruitmentId||window.confirm("\uc815\ub9d0 \ud398\uc774\uc9c0\uc5d0\uc11c \ub098\uac00\uc2dc\uaca0\uc2b5\ub2c8\uae4c? \n\n \uc9c0\uae08 \ud398\uc774\uc9c0\ub97c \ub098\uac00\uc2dc\uba74 \ubcc0\uacbd\uc0ac\ud56d\uc774 \uc800\uc7a5\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."))&&te()},te=function(){W([]),A(!1),_(!0),k({})};return(0,S.jsx)(S.Fragment,{children:(0,S.jsxs)(u.Tk,{alignment:"center",size:"xl",visible:g,children:[(0,S.jsx)(b.Z,{onClick:ee,children:"\ucc44\uc6a9 \uc0c1\uc138"}),(0,S.jsxs)(u.sD,{className:"modal-scroll",children:[(0,S.jsxs)(u.rb,{className:"mb-3",children:[(0,S.jsx)(h.Z,{onChange:I,id:"recruitmentId",placeholder:"ID",label:"ID",readOnly:!0,disabled:!0,value:-1===d.recruitmentId?"":d.recruitmentId}),(0,S.jsx)(p.Z,{readOnly:C,disabled:C,onChange:I,size:"sm",id:"jobType",options:O,value:null!==(t=d.jobType)&&void 0!==t?t:d.jobTypeEnglish,isRequired:!0,placeholder:"\uc120\ud0dd\ud574\uc8fc\uc138\uc694",label:"\uace0\uc6a9 \ud615\ud0dc"})]}),(0,S.jsx)(u.rb,{className:"mb-3",children:(0,S.jsx)(h.Z,{onChange:I,id:"title",placeholder:"\uacf5\uace0\uc81c\ubaa9",label:"\uacf5\uace0 \uc81c\ubaa9",isRequired:!0,readOnly:C,disabled:C,value:d.title})}),(0,S.jsxs)(u.rb,{className:"mb-3",children:[(0,S.jsx)(p.Z,{options:T,readOnly:C,disabled:C,onChange:I,size:"sm",id:"category",value:null!==(r=d.category)&&void 0!==r?r:d.categoryEnglish,isRequired:!0,placeholder:"\uc120\ud0dd\ud574\uc8fc\uc138\uc694",label:"\uce74\ud14c\uace0\ub9ac"}),(0,S.jsx)(p.Z,{onChange:I,size:"sm",options:Z,value:null!==(n=d.career)&&void 0!==n?n:d.careerEnglish,id:"career",placeholder:"\uc120\ud0dd\ud574\uc8fc\uc138\uc694",isRequired:!0,readOnly:C,disabled:C,label:"\uacbd\ub825"})]}),(0,S.jsxs)(u.rb,{className:"mb-3",children:[(0,S.jsx)(m.Z,{readOnly:!1,label:"\uc2dc\uc791\uc77c",isRequired:!0,id:"startedAt",date:d.startedAt,onChange:I,isDisabled:C}),(0,S.jsx)(m.Z,{readOnly:!1,label:"\uc885\ub8cc\uc77c",isRequired:!0,id:"closedAt",date:d.closedAt,onChange:I,isDisabled:C})]}),(0,S.jsxs)(u.rb,{className:"mb-3",children:[(0,S.jsx)(h.Z,{onChange:I,id:"location",placeholder:"location",label:"\uadfc\ubb34 \uc9c0\uc5ed",value:d.location,isRequired:!0,readOnly:C,disabled:C}),(0,S.jsx)(p.Z,{readOnly:C,disabled:C,onChange:I,size:"sm",id:"education",options:R,isRequired:!0,value:null!==(a=d.education)&&void 0!==a?a:d.educationEnglish,placeholder:"\uc120\ud0dd\ud574\uc8fc\uc138\uc694",label:"\ud559\ub825 \ubc0f \uc804\uacf5"})]}),(0,S.jsx)(u.rb,{className:"mb-3",children:(0,S.jsx)(x.Z,{id:"image",label:"\uc774\ubbf8\uc9c0 \ucca8\ubd80",fileList:K,setFileList:W,images:d.imageUrl,imgPath:"recruitment_images",readOnly:C})}),(0,S.jsx)(u.rb,{className:"mb-3",children:(0,S.jsx)(j.Z,{onChange:I,id:"duty",label:"\uc9c1\ubb34 \ub0b4\uc6a9",isRequired:!0,value:L,readOnly:C,setValue:P,maxLength:300})}),(0,S.jsx)(u.rb,{className:"mb-3",children:(0,S.jsx)(j.Z,{onChange:I,id:"qualification",label:"\uc790\uaca9 \uc694\uac74",isRequired:!1,value:q,readOnly:C,setValue:w,maxLength:300})}),(0,S.jsx)(u.rb,{className:"mb-3",children:(0,S.jsx)(j.Z,{onChange:I,id:"preference",label:"\uc6b0\ub300\uc0ac\ud56d",isRequired:!1,value:M,readOnly:C,setValue:D,maxLength:300})}),(0,S.jsx)(u.rb,{className:"mb-3",children:(0,S.jsx)(j.Z,{onChange:I,id:"hiringReason",label:"\ucc44\uc6a9 \uc0ac\uc720",isRequired:!1,value:U,readOnly:C,setValue:V,maxLength:300})}),(0,S.jsx)(u.rb,{className:"mb-3",children:(0,S.jsx)(j.Z,{onChange:I,id:"departmentStatus",label:"\ubd80\uc11c \ud604\ud669",isRequired:!1,value:B,readOnly:C,setValue:Y,maxLength:300})}),(0,S.jsx)(u.rb,{className:"mb-3",children:(0,S.jsx)(j.Z,{onChange:I,id:"otherNote",label:"\uae30\ud0c0 \ucc38\uace0 \uc0ac\ud56d",isRequired:!1,value:F,readOnly:C,setValue:G,maxLength:300})})]}),(0,S.jsxs)(u.Ym,{children:[-1===d.recruitmentId?(0,S.jsx)(u.u5,{color:"primary",onClick:X,children:"\ucd94\uac00"}):(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(u.u5,{color:"danger",className:"text-white",onClick:function(){window.confirm("\uc815\ub9d0 \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")&&J()},children:"\uc0ad\uc81c"}),(0,S.jsx)(u.u5,{color:C?"primary":"success",onClick:function(){C?_(!1):$()},children:C?"\uc218\uc815":"\uc800\uc7a5"})]}),(0,S.jsx)(u.u5,{color:"secondary",onClick:ee,children:"\ucde8\uc18c"})]})]})})},A=[{key:"number",_props:{color:"primary",className:"number"},filter:!1},{key:"categoryKorean",label:"\uce74\ud14c\uace0\ub9ac",_props:{color:"primary",className:"categoryKorean"}},{key:"title",label:"\uacf5\uace0 \uc81c\ubaa9",_props:{color:"primary",className:"title"}},{key:"startedAt",label:"\uacf5\uace0 \uc2dc\uc791\uc77c",_props:{color:"primary",className:"startedAt"},filter:!1},{key:"closedAt",label:"\uacf5\uace0 \uc885\ub8cc\uc77c",_props:{color:"primary",className:"employEndDate"},filter:!1},{key:"proceedStatus",label:"\uc9c4\ud589 \uc0c1\ud0dc",_props:{color:"primary",className:"proceedStatus"}}],I=r(73210),C=r(64509),_=function(){var e=(0,o.useState)([]),t=(0,s.Z)(e,2),r=t[0],p=t[1],h=(0,o.useState)(!1),m=(0,s.Z)(h,2),b=m[0],x=m[1],y=(0,o.useState)(!0),g=(0,s.Z)(y,2),E=g[0],N=g[1],j=(0,o.useState)(""),T=(0,s.Z)(j,2),O=T[0],R=T[1],Z=(0,o.useState)(""),_=(0,s.Z)(Z,2),L=_[0],P=_[1],q=(0,o.useState)(""),w=(0,s.Z)(q,2),M=w[0],D=w[1],U=(0,o.useState)(""),V=(0,s.Z)(U,2),B=V[0],Y=V[1],F=(0,o.useState)(""),G=(0,s.Z)(F,2),H=G[0],z=G[1],K=(0,o.useState)(""),W=(0,s.Z)(K,2),Q=W[0],X=W[1],J=(0,o.useState)({recruitmentId:-1,category:"",proceed:0,title:"",startedAt:null,closedAt:null,imageUrls:[],jobType:"",location:"",education:"",career:"",duty:"",qualification:"",preference:"",hiringReason:"",departmentStatus:"",otherNote:""}),$=(0,s.Z)(J,2),ee=$[0],te=$[1],re=function(){var e=(0,i.Z)((0,l.Z)().mark((function e(){var t;return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.Z.request({data:{},query:{},path:{},method:f.w.GET,url:v.l.RECRUITMENT});case 3:t=e.sent,p(null===t||void 0===t?void 0:t.data.result.responses),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),alert(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),ne=function(){var e=(0,i.Z)((0,l.Z)().mark((function e(t){var r,n;return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.Z.request({data:{},query:{},path:{recruitmentId:t},method:f.w.GET,url:"".concat(v.l.RECRUITMENT,"/:recruitmentId")});case 3:if(r=e.sent,(n=r.data).isSuccess){e.next=7;break}return e.abrupt("return",alert(n.message));case 7:te(n.result),x(!b),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),alert(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}();(0,o.useEffect)((function(){re()}),[]);var ae=function(){var e=(0,i.Z)((0,l.Z)().mark((function e(t){return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:ne(t.recruitmentId);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(c.Z,{title:"\ucc44\uc6a9\uad00\ub9ac"}),(0,S.jsx)(u.rb,{children:(0,S.jsx)(u.b7,{xs:12,children:(0,S.jsxs)(u.xH,{className:"mb-4",children:[(0,S.jsx)(u.bn,{children:(0,S.jsx)(u.lx,{className:"row g-3",children:(0,S.jsx)(u.b7,{xs:1,children:(0,S.jsx)(C.Z,{onClick:function(){N(!1),te({recruitmentId:-1,category:"",proceed:0,title:"",startedAt:null,closedAt:null,imageUrls:[],jobType:"",location:"",education:"",career:"",duty:"",qualification:"",preference:"",hiringReason:"",departmentStatus:"",otherNote:""}),x(!b)},children:"\ucd94\uac00"})})})}),(0,S.jsx)(u.sl,{children:(0,S.jsx)(d.Z,{items:r,onClick:ae,columns:A,className:"userList",selectedOptions:I.W,datePickerOptions:[{key:"startedAt",value:"\uacf5\uace0 \uc2dc\uc791\uc77c"},{key:"closedAt",value:"\uacf5\uace0 \uc885\ub8cc\uc77c"}]})})]})})}),(0,S.jsx)(k,{onChange:function(e){var t=e.target,r=t.id,l=t.value;te((0,a.Z)((0,a.Z)({},ee),{},(0,n.Z)({},r,l)))},visible:b,value:ee,setVisible:x,isReadOnly:E,setIsReadOnly:N,getList:re,setSelectedItem:te,duty:O,setDuty:R,qualification:L,setQualification:P,preference:M,setPreference:D,hiringReason:B,setHiringReason:Y,departmentStatus:H,setDepartmentStatus:z,otherNote:Q,setOtherNote:X})]})}},73210:function(e,t){t.W={SERVICE_PLANNING:"\uc11c\ube44\uc2a4 \uae30\ud68d",SERVICE_DEVELOPMENT:"\uc11c\ube44\uc2a4 \uac1c\ubc1c",DESIGN:"\ub514\uc790\uc778",BUSINESS_DEVELOPMENT:"\uc0ac\uc5c5 \uac1c\ubc1c",B2B_DEVELOPMENT:"B2B \uac1c\ubc1c",B2B_OPERATION:"B2B \uc6b4\uc601 ",CORPORATE_SALES:"\ubc95\uc778 \uc601\uc5c5",CHANNEL_SALES:"\ucc44\ub110 \uc601\uc5c5",DEVICE_SALES:"\ub514\ubc14\uc774\uc2a4 \uc601\uc5c5",DEVICE_DEVELOPMENT:"\ub514\ubc14\uc774\uc2a4 \uac1c\ubc1c",OEM_MANAGEMENT:"OEM \uad00\ub9ac",AS_CENTER:"A/S \uc13c\ud130",BUSINESS_MANAGEMENT:"\uacbd\uc601 \uad00\ub9ac",SETTLEMENT:"\uc815\uc0b0",OPERATION_PLANNING:"\uc6b4\uc601 \uae30\ud68d",CUSTOMER_SUPPORT:"\uace0\uac1d \uc9c0\uc6d0",INTEGRATED_CS:"\ud1b5\ud569 CS ",ONSITE_SUPPORT_TECHNICAL_SUPPORT:"\ud604\uc7a5 \uc9c0\uc6d0-\uae30\uc220 \uc9c0\uc6d0",ONSITE_SUPPORT_LOGISTICS:"\ud604\uc7a5 \uc9c0\uc6d0 - \ubb3c\ub958",OPERATIONAL_INNOVATION_TF:"\uc6b4\uc601 \ud601\uc2e0 TF"}},79286:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(87462),a=r(72791),l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"},i=r(54291),s=function(e,t){return a.createElement(i.Z,(0,n.Z)({},e,{ref:t,icon:l}))};var o=a.forwardRef(s)},28022:function(){}}]);
//# sourceMappingURL=6797.84356c98.chunk.js.map