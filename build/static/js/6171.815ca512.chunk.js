"use strict";(self.webpackChunkneordinary_template_react_js_admin=self.webpackChunkneordinary_template_react_js_admin||[]).push([[6171],{99921:function(e,n,t){var r=t(78983),i=t(80184);n.Z=function(e){var n=e.visible,t=e.title,c=void 0===t?"\uc0ad\uc81c \ud655\uc778":t,s=e.children,o=e.onDelete,a=e.setVisible;return(0,i.jsxs)(r.Tk,{visible:n,alignment:"center",children:[(0,i.jsx)(r.p0,{children:(0,i.jsx)(r.fl,{children:c})}),(0,i.jsx)(r.sD,{children:s||"\uc815\ub9d0 \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?"}),(0,i.jsxs)(r.Ym,{children:[(0,i.jsx)(r.u5,{onClick:o,color:"primary",children:"\ud655\uc778"}),(0,i.jsx)(r.u5,{color:"secondary",onClick:function(){return a(!1)},children:"\ucde8\uc18c"})]})]})}},20961:function(e,n,t){var r,i=t(30168),c=t(44801),s=t(80184);n.Z=function(e){var n=e.title;return(0,s.jsx)(o,{children:(0,s.jsx)("h1",{children:n})})};var o=c.ZP.div(r||(r=(0,i.Z)(["\n  border-bottom: 1px solid #ccc;\n  margin-bottom: 40px;\n  margin-top: 20px;\n"])))},3854:function(e,n,t){var r=t(78983),i=(t(72791),t(80184));n.Z=function(e){var n=e.type,t=e.onChange,c=e.id,s=e.placeholder,o=e.value,a=e.label,u=e.readOnly,d=e.disabled,l=e.isRequired,h=e.xs;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.L8,{htmlFor:"".concat(c,"Static"),className:"col-sm-2 col-form-label",children:(0,i.jsx)("span",{className:l?"required":"",children:a||" * "})}),(0,i.jsx)(r.b7,{className:"align-items-center",xs:h,style:{display:"flex"},children:(0,i.jsx)(r.jO,{type:n||"text",id:c,placeholder:s||"",value:"file"===n?void 0:o||"",onChange:t,readOnly:u,disabled:d})})]})}},70844:function(e,n,t){t.d(n,{Z:function(){return P}});var r,i=t(93433),c=t(74165),s=t(15861),o=t(1413),a=t(29439),u=t(72791),d=t(1966),l=t(78983),h=t(76030),f=t(80184),m=function(e){var n=e.visible,t=e.setVisible,r=e.url,i=(0,u.useState)(""),c=(0,a.Z)(i,2);c[0],c[1];return(0,f.jsxs)(l.Tk,{alignment:"center",size:"xl",visible:n,onClose:function(){return t(!1)},children:[(0,f.jsx)(l.sD,{className:"clearfix",children:(0,f.jsx)(l.DW,{align:"center",fluid:!0,src:(0,h.J0)(r),alt:"\uc548\ub155\ud558\uc138\uc694",width:600})}),(0,f.jsx)(l.Ym,{children:(0,f.jsx)(l.u5,{color:"primary",onClick:function(){return t(!1)},children:"Cancel"})})]})},x=t(72426),j=t.n(x),Y=t(46327),p=t.p+"static/media/defaultImg.932a0a87e8b47c36eefa.png",v=t(30168),g=t(10815),D=t(28722),k=t(30774),C=t(72721),M=t(44801),y=t(6793),b=g.Z.Option,Z=function(e){var n,t=e.options,r=e.datePicker,i=(0,u.useState)({key:"createdAt",value:"",children:""}),c=(0,a.Z)(i,2),s=c[0],o=c[1],d=D.Z.RangePicker;(0,u.useEffect)((function(){t&&o(t[0])}),[]),j().locale("ko");return(0,f.jsx)(H,{children:(0,f.jsxs)(k.Z,{children:[t&&(null===t||void 0===t?void 0:t.length)>1&&(0,f.jsx)(g.Z,{value:s.value||(null===(n=t[0])||void 0===n?void 0:n.value),onChange:function(e,n){o(n)},children:t.map((function(e){var n=e.value,t=e.key;return(0,f.jsx)(b,{value:n,children:n},t)}))}),(0,f.jsx)(C.ZP,{locale:y.Z,children:(0,f.jsx)(k.Z,{direction:"vertical",children:(0,f.jsx)(d,{allowClear:!0,onChange:function(e){e?r(j()(e[0].$d).format("YYYY-MM-DD"),j()(e[1].$d).format("YYYY-MM-DD"),s):r("","",{})}})})})]})})},H=(0,M.ZP)(l.b7)(r||(r=(0,v.Z)(["\n  display: flex;\n  flex-direction: row;\n  align-content: end;\n  justify-content: end;\n  height: 100%;\n  width: 100%;\n"]))),P=function(e){var n=e.items,t=e.onClick,r=e.columns,x=e.className,v=e.onDelete,g=e.selectedOptions,D=e.datePickerHidden,k=void 0===D||D,C=(e.itemPerPageHidden,e.searchInputHidden,e.checkBoxInputHidden),M=void 0!==C&&C,y=e.func,b=e.datePickerOptions,H=e.notFilter,P=(0,u.useState)([]),I=(0,a.Z)(P,2),A=I[0],S=I[1],N=(0,u.useState)(),w=(0,a.Z)(N,2),_=w[0],T=w[1],E=(0,u.useState)(!1),z=(0,a.Z)(E,2),F=z[0],R=z[1],V=(0,u.useState)(""),q=(0,a.Z)(V,2),O=q[0],W=q[1],B=(0,u.useState)(""),J=(0,a.Z)(B,2),U=(J[0],J[1],(0,u.useState)("")),L=(0,a.Z)(U,2),$=(L[0],L[1],(0,u.useState)(!1)),K=(0,a.Z)($,2),G=K[0],Q=K[1],X=(0,u.useState)(""),ee=(0,a.Z)(X,2),ne=ee[0],te=ee[1],re=(0,u.useState)(""),ie=(0,a.Z)(re,2),ce=ie[0],se=ie[1],oe={key:"checkBox",label:(0,f.jsx)(l.EC,{id:"allSelected",type:"checkbox",onChange:function(e){return Q(!G),void S(A.map((function(e){return(0,o.Z)((0,o.Z)({},e),{},{checked:!G})})))},checked:G}),_props:{className:"checkBox"},sorter:!1,filter:!1},ae=function(e){switch(e){case"ACTIVE":return"success";case"INACTIVE":return"danger";case!0:return"success";case!1:return"danger";default:return"primary"}},ue=function(e){switch(e){case"ACTIVE":return"\ud65c\uc131\ud654";case"INACTIVE":return"\ube44\ud65c\uc131\ud654";case!0:return"\uc644\ub8cc";case!1:return"\ubbf8\uc644\ub8cc";default:return"\uae30\ud0c0"}},de=function(e,n){e.stopPropagation(),R(!F),W(n)},le=function(){var e=(0,s.Z)((0,c.Z)().mark((function e(n){var t,r;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y(n);case 2:t=e.sent,ne?(r=t.filter((function(e){var n=he(e.createdAt,"YYYYMMDDHHmmss");return n>=ce&&n<=ne})),T(r)):T("");case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();(0,u.useEffect)((function(){S(n)}),[n]);var he=function(e,n){if(e&&n)return"YYYY-MM-DD"===n||"YYYYMMDDHHmmss"===n?j()(e,n).format("YYYY-MM-DD"):void 0};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(l.rb,{className:"justify-content-end align-items-end pb-2",children:k&&(0,f.jsx)(Z,{datePicker:function(e,n,t){var r=t.key;if(n){var i=A.filter((function(t){var i=he(t[r],"YYYYMMDDHHmmss");return i>=e&&i<=n}));T(i),se(e),te(n)}else T(""),se(""),te("")},options:b})}),(0,f.jsx)(d.u,{items:_||A,columns:M?[oe].concat((0,i.Z)(r)):r||null,columnSorter:!0,pagination:!0,clickableRows:!0,columnFilter:!H,paginationProps:{limit:10},tableHeadProps:{id:"smTable"},onRowClick:t,tableProps:{hover:!0,responsive:!0,striped:!0,align:"middle",className:x},scopedColumns:{userId:function(e,t){return(0,f.jsx)("td",{children:n.length-t})},bannerId:function(e,t){return(0,f.jsx)("td",{children:n.length-t})},inquiryId:function(e,t){return(0,f.jsx)("td",{children:n.length-t})},faqId:function(e,t){return(0,f.jsx)("td",{children:n.length-t})},dataRoomId:function(e,t){return(0,f.jsx)("td",{children:n.length-t})},orderId:function(e,t){return(0,f.jsx)("td",{children:n.length-t})},orderCancelId:function(e,t){return(0,f.jsx)("td",{children:n.length-t})},orderExchangeId:function(e,t){return(0,f.jsx)("td",{children:n.length-t})},checkBox:function(e){return(0,f.jsx)("td",{onClick:function(e){return e.stopPropagation()},children:(0,f.jsx)(l.EC,{onChange:function(){return function(e){S(A.map((function(n){return n._id===e._id?(0,o.Z)((0,o.Z)({},n),{},{checked:!e.checked}):n}))),e.checked?e.checked=!1:e.checked=!0}(e)},checked:e.checked||!1})})},isAuthorized:function(e){return(0,f.jsx)("td",{onClick:function(e){return e.stopPropagation()},children:(0,f.jsx)(l.EC,{onChange:function(){return le(e)},checked:e.isAuthorized||!1})})},name:function(e){var n=e.name;return(0,f.jsx)("td",{children:(0,Y.Cd)(n,1,"right")})},phoneNumber:function(e){var n=e.phoneNumber;return(0,f.jsx)("td",{children:(0,Y.Cd)(n,4,"right")})},email:function(e){var n=e.email;return(0,f.jsx)("td",{children:(0,Y.Cd)(n,1,"left")})},status:function(e){var n=e.status;return(0,f.jsx)("td",{children:(0,f.jsx)(l.C_,{size:"sm",color:ae(n),children:ue(n)})})},reply:function(e){var n=e.reply;return(0,f.jsx)("td",{children:(0,f.jsx)(l.C_,{size:"sm",color:ae(n),children:ue(n)})})},hasReply:function(e){var n=e.hasReply;return(0,f.jsx)("td",{children:(0,f.jsx)(l.C_,{size:"sm",color:ae(n),children:ue(n)})})},image:function(e){var n=e.image;return(0,f.jsx)("td",{children:n?(0,f.jsx)(l.DW,{rounded:!0,thumbnail:!0,src:n,alt:""}):(0,f.jsx)(l.DW,{rounded:!0,thumbnail:!0,src:p,alt:""})})},images:function(e){var n=e.images;return(0,f.jsx)("td",{onClick:function(e){return 0!==n.length?de(e,n):t},children:(0,f.jsx)(l.DW,{rounded:!0,src:0===n.length?"":n[0],alt:"",width:100,height:60})})},deleteBtn:function(e){return(0,f.jsx)("td",{onClick:function(n){return function(e,n){e.stopPropagation(),v(n)}(n,e)},children:(0,f.jsx)(l.C_,{color:"danger",children:"\uc0ad\uc81c"})})},jobType:function(e){var n=e.jobType;return(0,f.jsx)("td",{children:g?g[n]:""})},education:function(e){var n=e.education;return(0,f.jsx)("td",{children:g?g[n]:""})},inquiryType:function(e){var n=e.inquiryType;return(0,f.jsx)("td",{children:g?g[n]:""})},career:function(e){var n=e.career;return(0,f.jsx)("td",{children:g?g[n]:""})},deliveryStatus:function(e){var n=e.deliveryStatus;return(0,f.jsx)("td",{children:(0,f.jsxs)(l.C_,{color:"primary",children:[g?g[n]:"Not Data"," "]})})},productImg:function(e){var n=e.productImg;return(0,f.jsx)("td",{children:(0,f.jsx)(l.DW,{rounded:!0,src:n||"",alt:"",width:100,height:60})})},totalPrice:function(e){var n=e.totalPrice;return(0,f.jsx)("td",{className:"totalPrice",children:(0,Y.ks)(n)})},orderItemPrice:function(e){var n=e.orderItemPrice;return(0,f.jsx)("td",{className:"orderItemPrice",children:(0,Y.ks)(n)})},startedAt:function(e){var n=e.startedAt;return(0,f.jsx)("td",{children:j()(n,"YYYYMMDDHHmmss").format("YYYY. MM. DD")})},closedAt:function(e){var n=e.closedAt;return(0,f.jsx)("td",{children:j()(n,"YYYYMMDDHHmmss").format("YYYY. MM. DD")})},createdAt:function(e){var n=e.createdAt;return(0,f.jsx)("td",{children:j()(n,"YYYYMMDDHHmmss").format("YYYY. MM. DD")})},deletedAt:function(e){var n=e.deletedAt;return(0,f.jsx)("td",{children:j()(n,"YYYYMMDDHHmmss").format("YYYY. MM. DD")})},updatedAt:function(e){var n=e.updatedAt;return(0,f.jsx)("td",{children:j()(n,"YYYYMMDDHHmmss").format("YYYY. MM. DD")})},orderDate:function(e){var n=e.orderDate;return(0,f.jsx)("td",{children:j()(n,"YYYYMMDDHHmmss").format("YYYY. MM. DD")})},payDate:function(e){var n=e.payDate;return(0,f.jsx)("td",{children:j()(n,"YYYYMMDDHHmmss").format("YYYY. MM. DD")})},noticeFiles:function(e){var n=e.noticeFiles;return(0,f.jsxs)("td",{children:[null===n||void 0===n?void 0:n.length," \uac1c"]})},imageUrls:function(e){var n=e.imageUrls;return(0,f.jsx)("td",{onClick:function(e){return 0!==n.length&&"."!==n[0]?de(e,n[0]):t},children:0===n.length||"."===n[0]?"":(0,f.jsx)(l.DW,{rounded:!0,src:(0,h.J0)(n[0]),alt:(0,h.J0)(n[0]),width:100,height:60})})},invoiceNum:function(e){return(0,f.jsx)("td",{onClick:function(n){return y(e,n,"invoiceNum")},children:(null===e||void 0===e?void 0:e.invoiceNum)||"\uc1a1\uc7a5\ubc88\ud638 \uc785\ub825"})},processingStatus:function(e){return(0,f.jsx)("td",{onClick:function(n){return y(e,n,"processingStatus")},children:(null===e||void 0===e?void 0:e.processingStatus)||""})}},noItemsLabel:"\ub370\uc774\ud130\uac00 \uc5c6\uc2b5\ub2c8\ub2e4.",itemsPerPage:20}),F?(0,f.jsx)(m,{visible:F,setVisible:R,onClick:function(){R(!F)},url:O}):""]})}},76030:function(e,n,t){t.d(n,{AA:function(){return i},DK:function(){return s},HU:function(){return r},J0:function(){return c}});var r=function(e){return e.map((function(e){return e.url.split(".com/")[1]}))},i=function(e){return"".concat("homepage-test-resource","/admin/images/").concat(e)},c=function(e){return"https://".concat("homepage-test-resource",".s3.").concat("ap-northeast-2",".amazonaws.com/").concat(e)},s=function(e){return"".concat("homepage-test-resource","/admin/files/").concat(e)}}}]);
//# sourceMappingURL=6171.815ca512.chunk.js.map