(self.webpackChunkneordinary_template_react_js_admin=self.webpackChunkneordinary_template_react_js_admin||[]).push([[6391],{3854:function(e,r,a){"use strict";var t=a(78983),s=(a(72791),a(80184));r.Z=function(e){var r=e.type,a=e.onChange,n=e.id,l=e.placeholder,o=e.value,i=e.label,c=e.readOnly,u=e.disabled,d=e.isRequired,p=e.xs;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.L8,{htmlFor:"".concat(n,"Static"),className:"col-sm-2 col-form-label",children:(0,s.jsx)("span",{className:d?"required":"",children:i||" * "})}),(0,s.jsx)(t.b7,{className:"align-items-center",xs:p,style:{display:"flex"},children:(0,s.jsx)(t.jO,{type:r||"text",id:n,placeholder:l||"",value:"file"===r?void 0:o||"",onChange:a,readOnly:c,disabled:u})})]})}},97405:function(e,r,a){"use strict";a.r(r),a.d(r,{default:function(){return A}});var t=a(4942),s=a(1413),n=a(74165),l=a(15861),o=a(29439),i=a(72791),c=a(78983),u=a(38654),d=a(20961),p=a(46819),m=a(96672),b=a(19311),f=a(46327),h=a(57689),v=(a(763),a(97182)),y=a(70655),x=a(74912),N=a.n(x),k=a(77106),g=a(79286),_=a(76030),j=a(80184),Z=function(e){var r=e.image,a=e.onChangeImage,t=e.label,n=e.id,l=e.disabled,u=e.filePath,d=e.isRequired,p=(0,i.useState)(!1),m=(0,o.Z)(p,2),b=m[0],f=(m[1],(0,j.jsxs)("div",{style:{border:"1px solid #d8dbe0",textAlign:"center",width:30},children:[b?(0,j.jsx)(k.Z,{}):(0,j.jsx)(g.Z,{}),(0,j.jsx)("div",{style:{marginTop:8}})]})),h={name:"avatar",listType:"picture",className:"avatar-uploader",showUploadList:!1,disabled:l,image:r,beforeUpload:function(e){var r="image/jpeg"===e.type||"image/png"===e.type;r||window.alert("\uc633\ubc14\ub978 \ud655\uc7a5\uc790\uac00 \uc544\ub2d9\ub2c8\ub2e4 (JPG/PNG)");var a=e.size/1024/1024<10;return a||v.ZP.error("\uc0ac\uc774\uc988 \uc6a9\ub7c9 \ucd08\uacfc (10MB)"),r&&a},customRequest:function(e){!function(e){var r=e.file,a=e.onError,t=e.onProgress,s=e.onSuccess;N().config.update({region:"ap-northeast-2",accessKeyId:"AKIAWS5VDTBO4P55EYXT",secretAccessKey:"pzJVhC36B2Kl5RsNmVgthoSjAA4bQL64PwZrS4jM"});var n=new(N().S3),l=r.name.replaceAll(" ",""),o={Bucket:(0,_.DK)(u),Key:l,Body:r,ContentType:r.type};n.putObject(o).on("httpUploadProgress",(function(e){var r=e.loaded,a=e.total;return t({percent:r/a*100})})).promise().then((function(e){s(e.$response)}),(function(e){a(),console.log(e.code),console.log(e.message)}))}(e)},onSuccess:function(e){!function(e){var r=e.request.httpRequest,t=r.body,s=r.endpoint,n=s.protocol,l=s.host,o={uid:e.request.params.Key,name:t.name,status:"done",url:"".concat(n,"//").concat(l).concat(r.path)};a(o.url)}(e)},onRemove:function(e){a("")}};return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(c.L8,{htmlFor:"".concat(n,"Static"),className:"col-sm-2 col-form-label",children:(0,j.jsx)("span",{className:d?"required":"",children:t||" * "})}),(0,j.jsx)(c.b7,{className:"align-items-center",style:{display:"flex"},children:(0,j.jsx)(y.Z,(0,s.Z)((0,s.Z)({},h),{},{children:r?(0,j.jsx)("img",{src:r,alt:"avatar",style:{width:"100%"}}):f}))})]})},I=a(3854),w=function(e){var r=e.item,a=e.onChange,t=e.onChangeImage,s=e.onUpdate,n=e.onDelete,l=e.visible,o=e.setVisible,i=e.isReadOnly,u=e.setIsReadOnly,d=e.isUpdate,p=e.setIsUpdate,m="\ubc30\ub108 \ucd94\uac00";return d&&(m="\ubc30\ub108 \uc218\uc815"),i&&(m="\ubc30\ub108 \uc0c1\uc138 \ub0b4\uc6a9"),(0,j.jsxs)(c.Tk,{size:"lg",visible:l,onClose:function(){return o(!1)},children:[(0,j.jsx)(c.p0,{children:(0,j.jsx)(c.fl,{children:m})}),(0,j.jsx)(c.sD,{children:(0,j.jsxs)(c.lx,{children:[(0,j.jsx)(c.rb,{className:"p-2",children:(i||d)&&(0,j.jsx)(I.Z,{id:"bannerId",placeholder:"",label:"No",value:r.bannerId||"",readOnly:!0,disabled:!0})}),(0,j.jsx)(c.rb,{className:"p-2",children:(0,j.jsx)(I.Z,{id:"title",placeholder:"\ubc30\ub108 \ud0c0\uc774\ud2c0",label:"\ubc30\ub108 \ud0c0\uc774\ud2c0",value:r.title||"",onChange:a,readOnly:i,disabled:i,isRequired:!0})}),(0,j.jsx)(c.rb,{className:"p-2",children:(0,j.jsx)(I.Z,{id:"subTitle",placeholder:"\uc11c\ube0c \ud0c0\uc774\ud2c0",label:"\uc11c\ube0c \ud0c0\uc774\ud2c0",value:r.subTitle||"",onChange:a,readOnly:i,disabled:i,isRequired:!0})}),(0,j.jsx)(c.rb,{className:"p-2",children:(0,j.jsx)(Z,{id:"image",placeholder:"\uc774\ubbf8\uc9c0",label:"\uc774\ubbf8\uc9c0",image:r.image||"",onChangeImage:t,readOnly:i,disabled:i,isRequired:!0})})]})}),(0,j.jsxs)(c.Ym,{children:[!i&&!d&&(0,j.jsx)(c.u5,{onClick:s,color:"primary",children:"\ucd94\uac00"}),d&&(0,j.jsx)(c.u5,{onClick:s,color:"primary",children:"\uc800\uc7a5"}),i&&(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(c.u5,{color:i?"primary":"success",onClick:function(){u(!1),p(!0)},children:"\uc218\uc815"}),(0,j.jsx)(c.u5,{onClick:n,color:"danger",children:"\uc0ad\uc81c"})]}),(0,j.jsx)(c.u5,{color:"secondary",onClick:function(){return o(!1)},children:"\ucde8\uc18c"})]})]})},A=function(){var e=(0,h.s0)(),r=(0,i.useState)([]),a=(0,o.Z)(r,2),v=a[0],y=a[1],x=(0,i.useState)({title:"",subTitle:"",image:""}),N=(0,o.Z)(x,2),k=N[0],g=N[1],_=(0,i.useState)(!1),Z=(0,o.Z)(_,2),I=Z[0],A=Z[1],C=(0,i.useState)(!1),T=(0,o.Z)(C,2),S=T[0],P=T[1],R=(0,i.useState)(!1),q=(0,o.Z)(R,2),L=q[0],E=q[1],O=function(){var r=(0,l.Z)((0,n.Z)().mark((function r(){var a,t;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,m.Z.request({method:m.w.GET,url:b.l.GET_MALL_BANNERS});case 3:a=r.sent,null!==(t=a.data)&&void 0!==t&&t.isSuccess&&!(0,f.xb)(null===t||void 0===t?void 0:t.result)||(2014===(null===t||void 0===t?void 0:t.code)?e("/login"):alert(null===t||void 0===t?void 0:t.message)),y(t.result.bannerInfos),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(0),alert("\ub124\ud2b8\uc6cc\ud06c \ud1b5\uc2e0 \uc2e4\ud328. \uc7a0\uc2dc\ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4\ud574\uc8fc\uc138\uc694.");case 12:case"end":return r.stop()}}),r,null,[[0,9]])})));return function(){return r.apply(this,arguments)}}(),B=function(){var r=(0,l.Z)((0,n.Z)().mark((function r(a){var t,s;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,m.Z.request({method:m.w.GET,url:b.l.GET_MALL_BANNER,path:{bannerId:a}});case 3:if(t=r.sent,null!==(s=t.data)&&void 0!==s&&s.isSuccess&&!(0,f.xb)(null===s||void 0===s?void 0:s.result)){r.next=8;break}return 2014===(null===s||void 0===s?void 0:s.code)?e("/login"):alert(null===s||void 0===s?void 0:s.message),r.abrupt("return");case 8:s.result.bannerId=a,g(s.result),r.next=15;break;case 12:r.prev=12,r.t0=r.catch(0),alert("\ub124\ud2b8\uc6cc\ud06c \ud1b5\uc2e0 \uc2e4\ud328. \uc7a0\uc2dc\ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4\ud574\uc8fc\uc138\uc694.");case 15:case"end":return r.stop()}}),r,null,[[0,12]])})));return function(e){return r.apply(this,arguments)}}(),U=function(){var r=(0,l.Z)((0,n.Z)().mark((function r(a){var t,s;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,m.Z.request({method:m.w.POST,url:b.l.POST_MALL_BANNER,data:{title:a.title,subTitle:a.subTitle,image:a.image}});case 3:if(t=r.sent,null!==(s=t.data)&&void 0!==s&&s.isSuccess){r.next=8;break}return 2014===(null===s||void 0===s?void 0:s.code)?e("/login"):alert(null===s||void 0===s?void 0:s.message),r.abrupt("return");case 8:alert(null===s||void 0===s?void 0:s.message),g(K),r.next=15;break;case 12:r.prev=12,r.t0=r.catch(0),alert("\ub124\ud2b8\uc6cc\ud06c \ud1b5\uc2e0 \uc2e4\ud328. \uc7a0\uc2dc\ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4\ud574\uc8fc\uc138\uc694.");case 15:case"end":return r.stop()}}),r,null,[[0,12]])})));return function(e){return r.apply(this,arguments)}}(),D=function(){var r=(0,l.Z)((0,n.Z)().mark((function r(a){var t,s;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,m.Z.request({method:m.w.PATCH,url:b.l.PATCH_MALL_UPDATE_BANNER,data:{bannerId:a.bannerId,title:a.title,subTitle:a.subTitle,image:a.image}});case 3:if(t=r.sent,null!==(s=t.data)&&void 0!==s&&s.isSuccess){r.next=8;break}return 2014===(null===s||void 0===s?void 0:s.code)?e("/login"):alert(null===s||void 0===s?void 0:s.message),r.abrupt("return");case 8:alert(null===s||void 0===s?void 0:s.message),g(a),r.next=15;break;case 12:r.prev=12,r.t0=r.catch(0),alert("\ub124\ud2b8\uc6cc\ud06c \ud1b5\uc2e0 \uc2e4\ud328. \uc7a0\uc2dc\ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4\ud574\uc8fc\uc138\uc694.");case 15:case"end":return r.stop()}}),r,null,[[0,12]])})));return function(e){return r.apply(this,arguments)}}(),H=function(){var r=(0,l.Z)((0,n.Z)().mark((function r(a){var t,s;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,m.Z.request({method:m.w.PATCH,url:b.l.PATCH_MALL_DELETE_BANNER,path:{bannerId:a}});case 3:t=r.sent,null!==(s=t.data)&&void 0!==s&&s.isSuccess||(2014===(null===s||void 0===s?void 0:s.code)?e("/login"):alert(null===s||void 0===s?void 0:s.message)),alert(null===s||void 0===s?void 0:s.message),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(0),alert("\ub124\ud2b8\uc6cc\ud06c \ud1b5\uc2e0 \uc2e4\ud328. \uc7a0\uc2dc\ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4\ud574\uc8fc\uc138\uc694.");case 12:case"end":return r.stop()}}),r,null,[[0,9]])})));return function(e){return r.apply(this,arguments)}}();(0,i.useEffect)((function(){O()}),[]);var K=function(){return{title:"",subTitle:"",image:""}},M=function(){var e=(0,l.Z)((0,n.Z)().mark((function e(){var r,a,t,s;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=k.bannerId,a=k.title,t=k.subTitle,s=k.image,a){e.next=3;break}return e.abrupt("return",alert("\ubc30\ub108 \ud0c0\uc774\ud2c0\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694."));case 3:if(!(a.length>30)){e.next=5;break}return e.abrupt("return",alert("\ubc30\ub108 \ud0c0\uc774\ud2c0\uc744 \uae00\uc790\uc218 \ucd08\uacfc\uc785\ub2c8\ub2e4."));case 5:if(t){e.next=7;break}return e.abrupt("return",alert("\uc11c\ube0c \ud0c0\uc774\ud2c0\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694."));case 7:if(s){e.next=9;break}return e.abrupt("return",alert("\uc774\ubbf8\uc9c0\ub97c \ub4f1\ub85d\ud574\uc8fc\uc138\uc694."));case 9:if(!window.confirm("\uc800\uc7a5 \ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")){e.next=22;break}if(!r){e.next=17;break}return e.next=13,D(k);case 13:A(!0),P(!1),e.next=20;break;case 17:return e.next=19,U(k);case 19:E(!1);case 20:return e.next=22,O();case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,j.jsxs)(c.rb,{children:[(0,j.jsx)(d.Z,{title:"\ubc30\ub108 \uad00\ub9ac"}),(0,j.jsx)(c.b7,{xs:12,children:(0,j.jsxs)(c.xH,{className:"mb-4",children:[(0,j.jsx)(c.bn,{children:(0,j.jsx)(c.lx,{className:"row g-3",children:(0,j.jsx)(c.b7,{xs:1,children:(0,j.jsx)(c.u5,{color:"primary",onClick:function(){g(K),A(!1),P(!1),E(!L)},children:"\ucd94\uac00"})})})}),(0,j.jsx)(c.sl,{children:(0,j.jsx)(u.Z,{items:v,onClick:function(e){B(e.bannerId),A(!0),P(!1),E(!L)},columns:p._y,className:"bannerList",datePickerHidden:!1,searchInputHidden:!1})})]})}),(0,j.jsx)(w,{item:k,onUpdate:M,onDelete:function(){window.confirm("\uc815\ub9d0 \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")&&H(k.bannerId).then(O,E(!1))},onChange:function(e){var r=e.target,a=r.id,n=r.value;g((0,s.Z)((0,s.Z)({},k),{},(0,t.Z)({},a,n)))},onChangeImage:function(e){g((0,s.Z)((0,s.Z)({},k),{},{image:e}))},visible:L,setVisible:E,isReadOnly:I,setIsReadOnly:A,isUpdate:S,setIsUpdate:P})]})}},46819:function(e,r,a){"use strict";a.d(r,{Po:function(){return o},Tv:function(){return n},W_:function(){return i},_y:function(){return u},g1:function(){return t},kg:function(){return s},lJ:function(){return l},xL:function(){return c}});var t=[{key:"userId",label:"No",sorter:!1,filter:!1,_props:{className:"no"}},{key:"name",label:"\uc774\ub984",_props:{className:"name"}},{key:"email",label:"\uc774\uba54\uc77c",_props:{className:"email"}},{key:"phoneNumber",label:"\ud734\ub300\uc804\ud654\ubc88\ud638",_props:{className:"phoneNumber"}},{key:"createdAt",label:"\ucd5c\ucd08\ub4f1\ub85d\uc77c",sorter:!1,filter:!1,_props:{className:"createdAt"}},{key:"status",label:"\uc0c1\ud0dc",sorter:!1,filter:!1,_props:{className:"status"}}],s=[{key:"userId",label:"No",sorter:!1,filter:!1,_props:{className:"no"}},{key:"name",label:"\uc774\ub984",_props:{className:"name"}},{key:"email",label:"\uc774\uba54\uc77c",_props:{className:"email"}},{key:"phoneNumber",label:"\ud734\ub300\uc804\ud654\ubc88\ud638",_props:{className:"phoneNumber"}},{key:"resignReason",label:"\ud0c8\ud1f4\uc0ac\uc720",_props:{className:"resignReason"}},{key:"createdAt",label:"\ucd5c\ucd08\ub4f1\ub85d\uc77c",sorter:!1,filter:!1,_props:{className:"createdAt"}},{key:"updatedAt",label:"\uacc4\uc815\ud0c8\ud1f4\uc77c",sorter:!1,filter:!1,_props:{className:"updatedAt"}},{key:"status",label:"\uc0c1\ud0dc",sorter:!1,filter:!1,_props:{className:"status"}}],n=[{key:"inquiryId",label:"No",sorter:!1,filter:!1,_props:{className:"no"}},{key:"title",label:"\uc81c\ubaa9",_props:{className:"title"}},{key:"category",label:"\ubb38\uc758 \uc720\ud615",_props:{className:"category"}},{key:"name",label:"\uc774\ub984",_props:{className:"name"}},{key:"phoneNumber",label:"\ud734\ub300\uc804\ud654\ubc88\ud638",_props:{className:"phoneNumber"}},{key:"reply",label:"\ub2f5\ubcc0",sorter:!1,filter:!1,_props:{className:"reply"}}],l=[{key:"faqId",label:"No",sorter:!1,filter:!1,_props:{className:"no"}},{key:"category",label:"\uce74\ud14c\uace0\ub9ac",_props:{className:"category"}},{key:"title",label:"\uc81c\ubaa9",_props:{className:"title"}}],o=[{key:"dataRoomId",label:"No",sorter:!1,filter:!1,_props:{className:"no"}},{key:"category",label:"\uce74\ud14c\uace0\ub9ac",_props:{className:"category"}},{key:"title",label:"\uc81c\ubaa9",_props:{className:"title"}},{key:"createdAt",label:"\uc791\uc131\uc77c",sorter:!1,filter:!1,_props:{className:"createdAt"}}],i=[{key:"orderId",label:"No",sorter:!1,filter:!1,_props:{className:"no"}},{key:"orderNumber",label:"\uc8fc\ubb38\ubc88\ud638",sorter:!1,_props:{className:"orderNumber"}},{key:"receiver",label:"\uc218\ucde8\uc778",_props:{className:"receiver"}},{key:"phoneNumber",label:"\ud734\ub300\uc804\ud654\ubc88\ud638",_props:{className:"phoneNumber"}},{key:"totalPrice",label:"\uc8fc\ubb38\ucd1d\uc561",filter:!1,_props:{className:"totalPrice"}},{key:"orderDate",label:"\uc8fc\ubb38\uc77c",sorter:!1,filter:!1,_props:{className:"orderDate"}}],c=[{key:"radioButton",label:"",sorter:!1,filter:!1,_props:{className:"radioButton"}},{key:"itemName",label:"\uc81c\ud488\uba85",sorter:!1,filter:!1,_props:{className:"itemName"}},{key:"orderItemCount",sorter:!1,filter:!1,label:"\uc81c\ud488\uc218\ub7c9",_props:{className:"orderItemCount"}},{key:"orderItemPrice",sorter:!1,filter:!1,label:"\uc81c\ud488\uac00\uaca9",_props:{className:"orderItemPrice"}},{key:"orderStatus",label:"\uc81c\ud488\uc0c1\ud0dc",sorter:!1,filter:!1,_props:{className:"orderStatus"}},{key:"invoiceNumber",sorter:!1,filter:!1,label:"\uc1a1\uc7a5\ubc88\ud638",_props:{className:"invoiceNumber"}}],u=[{key:"bannerId",label:"No",sorter:!1,filter:!1,_props:{className:"no"}},{key:"image",label:"\uc774\ubbf8\uc9c0",_props:{className:"image"}},{key:"title",label:"\ubc30\ub108 \ud0c0\uc774\ud2c0",_props:{className:"title"}}]},28022:function(){}}]);
//# sourceMappingURL=6391.a4395bed.chunk.js.map