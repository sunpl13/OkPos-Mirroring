"use strict";(self.webpackChunkneordinary_template_react_js_admin=self.webpackChunkneordinary_template_react_js_admin||[]).push([[3299],{83299:function(e,n,s){s.r(n),s.d(n,{default:function(){return R}});var r,l,t,a,i=s(4942),c=s(1413),d=s(74165),o=s(15861),u=s(29439),m=s(72791),x=s(78983),h=s(38654),j=s(20961),p=s(26670),b=(s(63108),s(96672)),f=s(19311),N=s(46327),Z=s(3854),g=(s(98114),s(90399)),v=s(53655),C=s(40880),y=s(30168),S=s(91191),w=s(80184),k=function(e){var n=e.items,s=(e.onClick,e.columns),r=e.className,l=e.title,t=e.listIndex,a=e.summary,i=e.children;return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(T,{children:[(0,w.jsx)("span",{children:function(e){switch(+e){case 1:return"\u2460";case 2:return"\u2461";case 3:return"\u2462";case 4:return"\u2463";case 5:return"\u2464";case 6:return"\u2465";case 7:return"\u2466";case 8:return"\u2467";case 9:return"\u2468";case 10:return"\u2469";default:return""}}(t)}),l]}),i,(0,w.jsx)(E,{onRow:function(e,n){return{onClick:function(s){console.log(s,e,n)},onDoubleClick:function(s){console.log(s,e,n)}}},onCell:{cat:function(e){return console.log(e),(0,w.jsx)("div",{children:"asdasd"})}},columns:s||[],dataSource:n||[],className:r,pagination:!1,summary:a,bordered:!0})]})},E=(0,S.ZP)(C.Z)(r||(r=(0,y.Z)(["\n  &.userList {\n    width: 100%;\n    & > div {\n    width:100%\n  }\n  & th {\n    width: 100&;\n    min-width: auto;\n    background:#d6d2f8;\n  }\n  & th,\n  & td{\n  border: 1px solid #d8dbe0;\n    text-align: center;\n    padding:0.5rem;\n    & select {\n     border:none;\n    }\n  }\n  \n  }\n  &.solutionList{\n  & td:nth-child(2),\n  & td:nth-child(5){\n  padding:0;\n    & select{\n      padding:.8rem;\n    }\n  }\n  \n"]))),T=(0,S.ZP)(x.L8)(l||(l=(0,y.Z)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: start;\n  align-items: center;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  & span {\n    font-size: 17px;\n    margin-right: 0.2rem;\n  }\n"]))),D=v.Z.Text,L=function(e){var n=e.items,s=(e.onClick,e.columns),r=e.className,l=(0,m.useState)([]),t=(0,u.Z)(l,2),a=t[0],i=t[1];return(0,m.useEffect)((function(){i(n)}),[n]),(0,w.jsx)(w.Fragment,{children:(0,w.jsx)(k,{listIndex:1,title:"\uc720\uc9c0\ubcf4\uc218 \uc2e0\uccad \uac00\ub9f9\uc810 \uc218",columns:s,items:a,className:r,summary:function(e){var n=0,s=0,r=0,l=0;return e.forEach((function(e){var t=e.catcount,a=e.poscount,i=e.kioskcount,c=e.sum;n+=t,s+=a,r+=i,l+=c})),(0,w.jsx)(w.Fragment,{children:(0,w.jsxs)(C.Z.Summary.Row,{children:[(0,w.jsx)(C.Z.Summary.Cell,{index:0,children:"Total"}),(0,w.jsx)(C.Z.Summary.Cell,{index:1,children:(0,w.jsx)(D,{children:Number(n)})}),(0,w.jsx)(C.Z.Summary.Cell,{index:2,children:(0,w.jsx)(D,{children:Number(s)})}),(0,w.jsx)(C.Z.Summary.Cell,{index:2,children:(0,w.jsx)(D,{children:Number(r)})}),(0,w.jsx)(C.Z.Summary.Cell,{index:2,children:(0,w.jsx)(D,{children:Number(l)})}),(0,w.jsx)(C.Z.Summary.Cell,{index:2,children:(0,w.jsx)(D,{children:"  "})})]})})}})})},A=function(e){var n=e.items,s=(e.onClick,e.columns),r=e.className,l=(0,m.useState)([]),t=(0,u.Z)(l,2),a=t[0],i=t[1];return console.log(n),(0,m.useEffect)((function(){i(n)}),[n]),(0,w.jsx)(w.Fragment,{children:(0,w.jsx)(k,{columns:s||[],items:a||[],className:r,title:"\uc8fc\ub825 \uc194\ub8e8\uc158 \ubc0f VAN \uc0ac",listIndex:2,summary:function(e){return(0,w.jsx)(w.Fragment,{children:(0,w.jsxs)(C.Z.Summary.Row,{children:[(0,w.jsx)(C.Z.Summary.Cell,{index:0,children:"\uae30\ud0c0"}),(0,w.jsx)(C.Z.Summary.Cell,{index:1}),(0,w.jsx)(C.Z.Summary.Cell,{index:2}),(0,w.jsx)(C.Z.Summary.Cell,{index:3,children:"\uae30\ud0c0"}),(0,w.jsx)(C.Z.Summary.Cell,{index:4})]})})}})})},_=function(e){var n=e.items,s=(e.onClick,e.columns,e.className,(0,m.useState)([])),r=(0,u.Z)(s,2),l=(r[0],r[1]);return console.log(n),(0,m.useEffect)((function(){l(n)}),[n]),(0,w.jsxs)(x.b7,{children:[(0,w.jsxs)(P,{children:[(0,w.jsx)("span",{children:"\u2462"}),"\uad00\ub9ac \ub300\uc0c1 H/W \ud604\ud669"]}),(0,w.jsx)(x.b7,{className:"searchInput pb-3",children:(0,w.jsx)(x.jO,{type:"text",placeholder:"\uc8fc\ub825 H/W \ubaa8\ub378\uba85\uc744 \uc785\ub825\ud574 \uc8fc\uc138\uc694","aria-label":"Disabled input"})}),(0,w.jsx)(x.b7,{children:(0,w.jsxs)(I,{stripedColumns:!0,children:[(0,w.jsxs)(x.V,{color:"light",children:[(0,w.jsx)(x.is,{children:"\uad6c\ubd84"}),(0,w.jsx)(x.is,{children:"\uc81c\uc870\uc0ac/\ubaa8\ub378\uba85"}),(0,w.jsx)(x.is,{children:"\uad6c\ubd84"}),(0,w.jsx)(x.is,{children:"\uc81c\uc870\uc0ac/\ubaa8\ub378\uba85"})]}),(0,w.jsx)(x.NR,{children:(0,w.jsxs)(x.T6,{children:[(0,w.jsx)(x.NN,{className:"rowTitle",children:"POS"}),(0,w.jsxs)(x.NN,{children:[(0,w.jsx)(x.b7,{children:"1"}),(0,w.jsx)(x.b7,{children:"1"}),(0,w.jsx)(x.b7,{children:"1"}),(0,w.jsx)(x.b7,{children:"1"}),(0,w.jsx)(x.b7,{children:"1"}),(0,w.jsx)(x.b7,{children:"1"})]}),(0,w.jsx)(x.NN,{className:"rowTitle",children:"KIOSK"}),(0,w.jsxs)(x.NN,{children:[(0,w.jsx)(x.b7,{children:"1"}),(0,w.jsx)(x.b7,{children:"1"}),(0,w.jsx)(x.b7,{children:"1"}),(0,w.jsx)(x.b7,{children:"1"}),(0,w.jsx)(x.b7,{children:"1"}),(0,w.jsx)(x.b7,{children:"1"})]})]})})]})})]})},I=(0,S.ZP)(x.Sx)(t||(t=(0,y.Z)(["\n  text-align: center;\n  & th {\n    padding: 0.5rem 0;\n  }\n  & .rowTitle {\n    display: table-cell;\n    vertical-align: middle;\n  }\n  & tbody td {\n    padding: 0;\n    & .col {\n    padding: 0.5rem;\n    &.col:not(:last-child) {\n      border-bottom: 1px solid #D8DBE0;\n    }\n  }\n"]))),P=(0,S.ZP)(x.L8)(a||(a=(0,y.Z)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: start;\n  align-items: center;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  & span {\n    font-size: 17px;\n    margin-right: 0.2rem;\n  }\n"]))),O=function(e){var n=e.onChange,s=e.value,r=e.visible,l=e.setVisible,t=(e.upDate,e.onDelete,s.id,s.maintenanceNum),a=s.certificateNum,i=s.representativeName,c=s.createdAt,d=s.mobilePhoneNum,o=s.phoneNum,u=s.email,h=s.address,j=s.maintenanceCategory,b=s.adminMaintenanceHardwareDTOs,f=s.adminMaintenanceSolutionDTOs,N=s.adminMaintenanceStoreDTOs;s.operationalProcesses;return(0,m.useEffect)((function(){}),[r]),(0,w.jsxs)(g.Z,{title:"\uc720\uc9c0\ubcf4\uc218 \uc2e0\uccad \uc0c1\uc138",visible:r,setVisible:l,notEditBtn:!0,children:[(0,w.jsxs)(x.rb,{className:"p-2",children:[(0,w.jsx)(Z.Z,{id:"orderNum",placeholder:"\ubc1c\uc8fc \ubc88\ud638",label:"\ubc1c\uc8fc \ubc88\ud638",value:t,onChange:n,readOnly:!0}),(0,w.jsx)(Z.Z,{id:"businessName",placeholder:"\uc0c1\ud638\uba85",label:"\uc0c1\ud638\uba85",onChange:n})]}),(0,w.jsxs)(x.rb,{className:"p-2",children:[(0,w.jsx)(Z.Z,{id:"businessNumber",placeholder:"\uc0ac\uc5c5\uc790 \ubc88\ud638",label:"\uc0ac\uc5c5\uc790 \ubc88\ud638",value:a,onChange:n}),(0,w.jsx)(Z.Z,{id:"representativeName",placeholder:"\ub300\ud45c\uc790 \uba85",label:"\ub300\ud45c\uc790 \uba85",value:i,onChange:n})]}),(0,w.jsxs)(x.rb,{className:"p-2",children:[(0,w.jsx)(Z.Z,{id:"orderDate",placeholder:"\uc8fc\ubb38 \uc77c\uc790",label:"\uc8fc\ubb38 \uc77c\uc790",value:c,onChange:n}),(0,w.jsx)(Z.Z,{id:"phoneNumber",placeholder:"\ud734\ub300\uc804\ud654 \ubc88\ud638",label:"\ud734\ub300\uc804\ud654 \ubc88\ud638",value:d,onChange:n})]}),(0,w.jsxs)(x.rb,{className:"p-2",children:[(0,w.jsx)(Z.Z,{id:"phoneNum",placeholder:"\uc0ac\uc5c5\uc7a5 \uc804\ud654\ubc88\ud638",label:"\uc0ac\uc5c5\uc7a5 \uc804\ud654\ubc88\ud638",value:o,onChange:n}),(0,w.jsx)(Z.Z,{id:"email",placeholder:"\uc774\uba54\uc77c",label:"\uc774\uba54\uc77c",value:u,onChange:n})]}),(0,w.jsxs)(x.rb,{className:"p-2",children:[(0,w.jsx)(Z.Z,{id:"businessAddress",placeholder:"\uc0ac\uc5c5\uc7a5 \uc8fc\uc18c",label:"\uc0ac\uc5c5\uc7a5 \uc8fc\uc18c",value:h,onChange:n}),(0,w.jsx)(Z.Z,{id:"maintenanceCategory",placeholder:"\uc720\uc9c0\ubcf4\uc218 \uc2e0\uccad \uc720\ud615",label:"\uc720\uc9c0\ubcf4\uc218 \uc2e0\uccad \uc720\ud615",value:j,onChange:n})]}),(0,w.jsx)(x.rb,{className:"p-2",children:(0,w.jsx)(L,{className:"userList",columns:p.yA,items:N})}),(0,w.jsx)(x.rb,{className:"p-2",children:(0,w.jsx)(A,{className:"userList solutionList",columns:p.iN,items:f})}),(0,w.jsx)(x.rb,{className:"p-2",children:(0,w.jsx)(_,{className:"userList",columns:p.l5,items:b})})]})},R=function(){var e=(0,m.useState)([]),n=(0,u.Z)(e,2),s=n[0],r=n[1],l=(0,m.useState)({}),t=(0,u.Z)(l,2),a=t[0],Z=t[1],g=(0,m.useState)({}),v=(0,u.Z)(g,2),C=(v[0],v[1]),y=(0,m.useState)(!1),S=(0,u.Z)(y,2),k=S[0],E=S[1],T=function(){var e=(0,o.Z)((0,d.Z)().mark((function e(){var n,s,l,t,a,i;return(0,d.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.Z.request({method:b.w.GET,url:f.l.PARTNER_MAINTENANCES});case 3:if(n=e.sent,s=n.data,l=s.isSuccess,t=s.result,a=s.code,i=s.message,console.log(t),l&&!(0,N.xb)(t)){e.next=12;break}return e.abrupt("return");case 12:1e3===a?r(null===t||void 0===t?void 0:t.adminMaintenanceDTOs):alert(i),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(){return e.apply(this,arguments)}}();(0,m.useEffect)((function(){T()}),[]);var D=function(){var e=(0,o.Z)((0,d.Z)().mark((function e(n){var s,r,l,t,a,i,c;return(0,d.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=n.id,e.prev=1,e.next=4,b.Z.request({method:b.w.GET,url:"".concat(f.l.PARTNER_MAINTENANCES,"/").concat(s)});case 4:if(r=e.sent,l=r.data,t=l.isSuccess,a=l.result,i=l.code,c=l.message,console.log(a),t&&!(0,N.xb)(a)){e.next=13;break}return e.abrupt("return");case 13:1e3===i?(Z(a),C(a)):alert(c),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(1),console.log(e.t0);case 19:E(!k);case 20:case"end":return e.stop()}}),e,null,[[1,16]])})));return function(n){return e.apply(this,arguments)}}();return(0,w.jsxs)(x.rb,{children:[(0,w.jsx)(j.Z,{title:"\uc720\uc9c0\ubcf4\uc218 \uc2e0\uccad \ub9ac\uc2a4\ud2b8"}),(0,w.jsx)(x.b7,{xs:12,children:(0,w.jsx)(x.xH,{className:"mb-4",children:(0,w.jsx)(x.sl,{children:(0,w.jsx)(h.Z,{items:s,onClick:D,columns:p.p0,className:"userList",onDelete:function(e){var n=e.no;window.confirm("Delete ?")&&r(s.filter((function(e){return e.no!==n})))}})})})}),(0,w.jsx)(O,{value:a,visible:k,setVisible:E,onChange:function(e){var n=e.target,s=n.id,r=n.value;Z((0,c.Z)((0,c.Z)({},a),{},(0,i.Z)({},s,r)))},onDelete:function(e){var n=e.productId;window.confirm("Delete ?")&&Z((0,c.Z)((0,c.Z)({},a),{},{orderList:a.orderList.filter((function(e){return e.productId!==n}))}))}})]})}}}]);
//# sourceMappingURL=3299.f5df074c.chunk.js.map