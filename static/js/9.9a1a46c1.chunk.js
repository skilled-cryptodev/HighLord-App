(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[9],{1083:function(e,n,t){"use strict";t.r(n);var i,c,r,o,a,l,d,s,u,j,b,p,h,x,O,f,m,v,g=t(12),C=t(0),F=t(7),w=t(5),k=t(59),H=t(3),P=t(249),D=t(1),y=function(e,n,t){return Object(F.d)(i||(i=Object(g.a)(["\n  width: 100%;\n  height: 20px;\n  clip-path: url(",");\n\n  background: ",";\n\n  & svg {\n    display: block;\n  }\n"])),n,(function(){return e.isDark?(null===t||void 0===t?void 0:t.dark)||(null===t||void 0===t?void 0:t.light)||e.colors.background:(null===t||void 0===t?void 0:t.light)||e.colors.background}))},L=Object(F.e)(H.k)(c||(c=Object(g.a)(["\n  ","\n  transform: ",";\n"])),(function(e){var n=e.theme,t=e.clipPath,i=e.clipFill;return y(n,t,i)}),(function(e){return"#bottomConcaveCurve"===e.clipPath?"translate(0, -13px)":"translate(0, 1px)"})),S=Object(F.e)(H.k)(r||(r=Object(g.a)(["\n  ","\n  transform: ",";\n"])),(function(e){var n=e.theme,t=e.clipPath,i=e.clipFill;return y(n,t,i)}),(function(e){return"#bottomConvexCurve"===e.clipPath?"translate(0, -13px)":"translate(0, -1px)"})),Q=function(e){var n=e.clipFill;return Object(D.jsx)(S,{clipFill:n,clipPath:"#topConvexCurve",children:Object(D.jsx)("svg",{width:"0",height:"0",children:Object(D.jsx)("defs",{children:Object(D.jsx)("clipPath",{id:"topConvexCurve",clipPathUnits:"objectBoundingBox",children:Object(D.jsx)("path",{d:"M 0,1 L 0,0 L 1,0 L 1,1 C 0.75 0, .25 0, 0 1 Z"})})})})})},E=function(e){var n=e.clipFill;return Object(D.jsx)(S,{clipFill:n,clipPath:"#bottomConvexCurve",children:Object(D.jsx)("svg",{width:"0",height:"0",children:Object(D.jsx)("defs",{children:Object(D.jsx)("clipPath",{id:"bottomConvexCurve",clipPathUnits:"objectBoundingBox",children:Object(D.jsx)("path",{d:"M 0,0 L 0,1 L 1,1 L 1,0 C .75 1, .25 1, 0 0 Z"})})})})})},T=function(e){var n=e.clipFill;return Object(D.jsx)(L,{clipFill:n,clipPath:"#topConcaveCurve",children:Object(D.jsx)("svg",{width:"0",height:"0",children:Object(D.jsx)("defs",{children:Object(D.jsx)("clipPath",{id:"topConcaveCurve",clipPathUnits:"objectBoundingBox",children:Object(D.jsx)("path",{d:"M 0,0 L 0,1 L 1,1 L 1,0 C .75 1, .25 1, 0 0 Z"})})})})})},z=function(e){var n=e.clipFill;return Object(D.jsx)(L,{clipFill:n,clipPath:"#bottomConcaveCurve",children:Object(D.jsx)("svg",{width:"0",height:"0",children:Object(D.jsx)("defs",{children:Object(D.jsx)("clipPath",{id:"bottomConcaveCurve",clipPathUnits:"objectBoundingBox",children:Object(D.jsx)("path",{d:"M 0,1 L 0,0 L 1,0 L 1,1 C .75 0.1, .25 0.1, 0 1 Z"})})})})})},B=F.e.div(o||(o=Object(g.a)(["\n  background: ",";\n  z-index: ",";\n  position: relative;\n  display: flex;\n  align-items: center;\n  width: 100%;\n"])),(function(e){var n=e.theme,t=e.dividerFill;return n.isDark?(null===t||void 0===t?void 0:t.dark)||(null===t||void 0===t?void 0:t.light)||"none":(null===t||void 0===t?void 0:t.light)||(null===t||void 0===t?void 0:t.dark)||"none"}),(function(e){return e.index})),I=F.e.div(a||(a=Object(g.a)(["\n  z-index: ",";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n"])),(function(e){return e.index+1})),R=function(e){var n=e.index,t=e.dividerPosition,i=e.dividerComponent,c=e.concave,r=e.clipFill,o=e.dividerFill,a="top"===t&&!c,l="bottom"===t&&!c,d="top"===t&&c,s="bottom"===t&&c;return Object(D.jsxs)(B,{index:n,dividerFill:o,children:[i&&Object(D.jsx)(I,{index:n,children:i}),Object(D.jsxs)(D.Fragment,{children:[d&&Object(D.jsx)(T,{clipFill:r}),s&&Object(D.jsx)(z,{clipFill:r})]}),Object(D.jsxs)(D.Fragment,{children:[a&&Object(D.jsx)(Q,{clipFill:r}),l&&Object(D.jsx)(E,{clipFill:r})]})]})},N=["children","background","svgFill","index","dividerComponent","dividerPosition","hasCurvedDivider","concaveDivider","clipFill","dividerFill","containerProps","innerProps"],A=Object(F.e)(H.H)(l||(l=Object(g.a)(["\n  position: relative;\n  flex-direction: column;\n  align-items: center;\n  z-index: ",";\n"])),(function(e){return e.index-1})),G=Object(F.e)(P.a)(d||(d=Object(g.a)(["\n  min-height: auto;\n  padding-top: 16px;\n  padding-bottom: 16px;\n\n  "," {\n    padding-top: 32px;\n    padding-bottom: 32px;\n  }\n\n  "," {\n    padding-top: 48px;\n    padding-bottom: 48px;\n  }\n"])),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.lg})),M=function(e){var n=e.children,t=e.background,i=e.svgFill,c=e.index,r=void 0===c?1:c,o=e.dividerComponent,a=e.dividerPosition,l=void 0===a?"bottom":a,d=e.hasCurvedDivider,s=void 0===d||d,u=e.concaveDivider,j=void 0!==u&&u,b=e.clipFill,p=e.dividerFill,h=e.containerProps,x=e.innerProps,O=Object(k.a)(e,N);return Object(D.jsxs)(H.k,Object(w.a)(Object(w.a)({},h),{},{children:[s&&"top"===l&&Object(D.jsx)(R,{svgFill:i,index:r,concave:j,dividerPosition:l,dividerComponent:o,clipFill:b,dividerFill:p}),Object(D.jsx)(A,Object(w.a)(Object(w.a)({background:t,index:r,getPadding:function(){return s?"bottom"===l?"48px 0 14px":"top"===l?"14px 0 48px":"48px 0":"48px 0"}},O),{},{children:Object(D.jsx)(G,Object(w.a)(Object(w.a)({},x),{},{children:n}))})),s&&"bottom"===l&&Object(D.jsx)(R,{svgFill:i,index:r,concave:j,dividerPosition:l,dividerComponent:o,clipFill:b,dividerFill:p})]}))},U=t(68),q=t(151),W=t(176),Z=t(20),$=function(){return Object(F.f)(s||(s=Object(g.a)(["\n  from {\n    opacity: 0.9;\n  }\n  50% {\n    opacity: 0.1;\n  }\n  to {\n    opacity: 0.9;\n  }  \n"])))},_=(F.e.div(u||(u=Object(g.a)(["\n  z-index: -1;\n  overflow: hidden;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  bottom: 0px;\n  left: 0px;\n"]))),F.e.div(j||(j=Object(g.a)(["\n  position: absolute;\n  width: 100%;\n  bottom: -3px;\n"]))),F.e.div(b||(b=Object(g.a)(["\n  width: 100%;\n  text-align: center;\n  margin: auto;\n\n  "," {\n    width: 80%;\n  }\n  "," {\n    width: 100%;\n  }\n"])),(function(e){return e.theme.mediaQueries.xs}),(function(e){return e.theme.mediaQueries.md}))),J=F.e.div(p||(p=Object(g.a)(["\n  width: 100%;\n  position: absolute;\n  height: 80%;\n  background: linear-gradient(90deg, #dc883e, #feac4f 52%);\n  border-radius: 25px;\n\n  "," {\n    border-radius: 10px;\n    height: 110%;\n  }\n  "," {\n    border-radius: 25px;\n    height: 80%;\n  }\n"])),(function(e){return e.theme.mediaQueries.xs}),(function(e){return e.theme.mediaQueries.md})),V=Object(F.e)(H.H)(h||(h=Object(g.a)(["\n  z-index: 1;\n  margin-left: 40px;\n  "," {\n    text-align: center;\n    margin-left: 0px;\n  }\n  "," {\n    text-align: left;\n    margin-left: 40px;\n  }\n"])),(function(e){return e.theme.mediaQueries.xs}),(function(e){return e.theme.mediaQueries.lg})),X=Object(F.e)(H.H)(x||(x=Object(g.a)(["\n  z-index: 1;\n  margin-left: 40px;\n  "," {\n    margin: auto;\n  }\n  "," {\n    margin-left: 40px;\n  }\n"])),(function(e){return e.theme.mediaQueries.xs}),(function(e){return e.theme.mediaQueries.lg})),K=Object(F.e)(H.sb)(O||(O=Object(g.a)(["\n  font-size: 50px;\n\n  "," {\n    font-size: 30px;\n  }\n  "," {\n    font-size: 40px;\n  }\n  "," {\n    font-size: 50px;\n  }\n"])),(function(e){return e.theme.mediaQueries.xs}),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.lg})),Y=Object(F.e)(H.H)(f||(f=Object(g.a)(["\n  align-self: center;\n"]))),ee=(F.e.div(m||(m=Object(g.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n\n  & :nth-child(2) {\n    animation: "," 2s ease-in-out infinite;\n    animation-delay: 1s;\n  }\n\n  & :nth-child(3) {\n    animation: "," 5s ease-in-out infinite;\n    animation-delay: 0.66s;\n  }\n\n  & :nth-child(4) {\n    animation: "," 2.5s ease-in-out infinite;\n    animation-delay: 0.33s;\n  }\n"])),$,$,$),function(){var e=Object(Z.b)().t,n=Object(U.c)().account;Object(q.a)().theme;return Object(D.jsx)(D.Fragment,{children:Object(D.jsxs)(H.H,{position:"relative",flexDirection:["column-reverse",null,null,"row"],alignItems:["flex-end",null,null,"center"],justifyContent:"center",mt:[n?"280px":"50px",null,0],id:"homepage-hero",children:[Object(D.jsx)(J,{}),Object(D.jsxs)(Y,{flexDirection:"column",children:[Object(D.jsxs)(V,{flex:"1",flexDirection:"column",children:[Object(D.jsx)(K,{color:"textSubtle",fontSize:"50px",bold:!0,children:e("HighLord Farm")}),Object(D.jsx)(H.J,{scale:"lg",color:"textSubtle",mb:"20px",children:e("The First Multichain Perpetual Farm. Creating value perpetually.")})]}),Object(D.jsx)(X,{children:Object(D.jsx)(H.l,{variant:"subtle",children:e("Read More")})})]}),Object(D.jsx)(H.H,{height:["100%",null,null,"100%"],width:["100%",null,null,"100%"],flex:[null,null,null,"1"],mb:["24px",null,null,"0"],position:"relative",children:Object(D.jsx)(_,{children:Object(D.jsx)("img",{src:"images/home/highlord.png",alt:e("welcome")})})})]})})}),ne=t(10),te=t(15),ie=t.n(te),ce=t(2),re=t.n(ce),oe=t(8),ae=t(4),le=t(235),de=t(90),se=t(139),ue=t(361),je=t(88);!function(e){e.NOT_FETCHED="not-fetched",e.FETCHING="fetching",e.SUCCESS="success",e.FAILED="failed"}(v||(v={}));var be,pe,he,xe,Oe,fe,me,ve,ge,Ce,Fe,we=function(e){var n=Object(de.b)(),t=Object(le.b)().data,i=Object(C.useState)(v.NOT_FETCHED),c=Object(ne.a)(i,2),r=c[0],o=c[1],a=Object(C.useState)([null,null,null,null,null]),l=Object(ne.a)(a,2),d=l[0],s=l[1],u=Object(le.g)();return Object(C.useEffect)((function(){var t=function(){var e=Object(oe.a)(re.a.mark((function e(){var t;return re.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(v.FETCHING),t=se.d.filter((function(e){return 0!==e.pid})),e.prev=2,e.next=5,n(Object(se.c)(t.map((function(e){return e.pid}))));case 5:o(v.SUCCESS),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(2),console.error(e.t0),o(v.FAILED);case 12:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(){return e.apply(this,arguments)}}();e&&r===v.NOT_FETCHED&&t()}),[n,o,r,d,e]),Object(C.useEffect)((function(){r!==v.SUCCESS||d[0]||function(e){var n=e.filter((function(e){return e.lpTotalInQuoteToken&&e.quoteTokenPriceBusd&&0!==e.pid&&e.multiplier&&"0X"!==e.multiplier})).map((function(e){var n=e.lpTotalInQuoteToken.times(e.quoteTokenPriceBusd),t=Object(ue.a)(e.poolWeight,u,n,e.lpAddresses[ae.a.MAINNET]),i=t.cakeRewardsApr,c=t.lpRewardsApr;return Object(w.a)(Object(w.a)({},e),{},{apr:i,lpRewardsApr:c})})),t=Object(je.orderBy)(n,(function(e){return e.apr+e.lpRewardsApr}),"desc");s(t.slice(0,5))}(t)}),[s,t,r,u,d]),{topFarms:d}},ke=t(105),He=t(50),Pe=t(42),De=t(34),ye=t(168),Le=t(33),Se=t(131),Qe=t(79),Ee=function(){var e=Object(C.useState)([]),n=Object(ne.a)(e,2),t=n[0],i=n[1],c=Object(C.useState)(null),r=Object(ne.a)(c,2),o=r[0],a=r[1],l=Object(U.c)().account,d=Object(Se.a)().fastRefresh;return Object(C.useEffect)((function(){l&&function(){var e=Object(oe.a)(re.a.mark((function e(){var n,t,c,r,o;return re.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Le.w.map((function(e){return{address:Object(De.n)(),name:"pendingHIGHLORD",params:[e.pid,l]}})),e.next=3,Object(Pe.a)(ye,n);case 3:t=e.sent,c=Le.w.map((function(e,n){return Object(w.a)(Object(w.a)({},e),{},{balance:new ie.a(t[n])})})),r=c.filter((function(e){return e.balance.gt(0)})),o=r.reduce((function(e,n){var t=new ie.a(n.balance);return t.eq(0)?e:e+t.div(Qe.h).toNumber()}),0),i(r),a(o);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[l,d]),{farmsWithStakedBalance:t,earningsSum:o}},Te=t(60),ze=t(124),Be=t(30),Ie=["background","borderColor","rotation","children"],Re=Object(F.e)(H.p)(be||(be=Object(g.a)(["\n  height: fit-content;\n  box-sizing: border-box;\n  width: 95%;\n  max-width: 350px;\n  text-align: center;\n  margin: auto;\n  margin-bottom: 10px;\n\n  "," {\n    ","\n  }\n"])),(function(e){return e.theme.mediaQueries.md}),(function(e){var n=e.rotation;return n?"transform: rotate(".concat(n,");"):""})),Ne=Object(F.e)(H.q)(pe||(pe=Object(g.a)(["\n  padding: 15px;\n"]))),Ae=(Object(F.e)(H.k)(he||(he=Object(g.a)(["\n  "," {\n    ","\n  }\n"])),(function(e){return e.theme.mediaQueries.md}),(function(e){var n=e.rotation;return n?"transform: rotate(".concat(n,");"):""})),function(e){var n=e.background,t=e.borderColor,i=e.rotation,c=e.children,r=Object(k.a)(e,Ie);return Object(D.jsx)(Re,Object(w.a)(Object(w.a)({background:n,borderBackground:t,rotation:i},r),{},{children:Object(D.jsx)(Ne,{children:c})}))}),Ge=Object(F.e)(H.H)(xe||(xe=Object(g.a)(["\n  flex-direction: column;\n  min-height: 300px;\n  align-items: center;\n  justify-content: center;\n"]))),Me=Object(F.e)(H.H)(Oe||(Oe=Object(g.a)(["\n  flex-direction: column;\n  min-height: 300px;  \n  align-items: center;\n  justify-content: center;\n  padding: 10px;\n"]))),Ue=Object(F.e)(H.H)(fe||(fe=Object(g.a)(["\n  flex-direction: column;\n  width: 100%;\n  text-align: start;\n"]))),qe=Object(F.e)(H.H)(me||(me=Object(g.a)(["\n  flex-direction: column;\n  width: 100%;\n  margin-bottom: 10px;\n"]))),We=Object(F.e)(H.sb)(ve||(ve=Object(g.a)(["\n  color: ",";\n  font-size: 16px;\n  font-weight: bold;\n"])),(function(e){return e.theme.colors.primary})),Ze=Object(F.e)(H.sb)(ge||(ge=Object(g.a)(["\n  color: ",";\n  font-size: 24px;\n"])),(function(e){return e.theme.colors.text})),$e=function(){var e=Object(Z.b)().t,n=function(){var e=Object(C.useState)(null),n=Object(ne.a)(e,2),t=n[0],i=n[1];return Object(C.useEffect)((function(){!function(){var e=Object(oe.a)(re.a.mark((function e(){var n,t;return re.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://openapi.debank.com/v1/protocol?id=bsc_pancakeswap");case 3:return n=e.sent,e.next=6,n.json();case 6:t=e.sent,i(t),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error("Unable to fetch data:",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}()()}),[i]),t}(),t=(Object(q.a)().theme,we(!0).topFarms,Object(le.h)()),i=(Object(U.c)().account,Object(ke.b)(Be.a.cake.address)),c=i.balance,r=(i.fetchStatus,Ee()),o=r.farmsWithStakedBalance,a=r.earningsSum,l=Object(ke.e)(),d=Object(Te.e)(Object(ke.c)(Be.a.cake.address)),s=l?Object(Te.e)(l)-d:0,u=Object(le.g)(),j=u.times(s),b=Object(Te.b)(j.toNumber()),p=(Object(He.f)(),new ie.a(a).multipliedBy(u),o.length),h=(o.filter((function(e){return 100!==e.pid})).length,n?Object(Te.b)(t.toNumber()):"-"),x=(Object(Te.b)(30841921),Object(Te.b)(2751624),e("And those users are now entrusting the platform with over $%tvl% in funds.",{tvl:h}).split(h)),O=Object(ne.a)(x,2);O[0],O[1];return Object(D.jsx)(H.H,{justifyContent:"center",alignItems:"center",flexDirection:"column",children:Object(D.jsxs)(H.H,{flexDirection:["column",null,null,"row"],justifyContent:"space-between",width:"100%",children:[Object(D.jsx)(Ae,{children:Object(D.jsxs)(Me,{children:[Object(D.jsxs)(Ue,{mb:"20px",children:[Object(D.jsxs)(qe,{children:[Object(D.jsx)(We,{children:e("HIGHLORD to Harvest")}),Object(D.jsx)(Ze,{children:e("%collect%",{collect:p.toFixed(3)})})]}),Object(D.jsxs)(qe,{children:[Object(D.jsx)(We,{children:e("HIGHLORD to Wallet")}),Object(D.jsx)(Ze,{children:Object(Te.g)(c,18,3)})]})]}),Object(D.jsx)(H.H,{width:"100%",justifyContent:"center",children:Object(D.jsx)(ze.a,{width:"70%"})})]})}),Object(D.jsx)(Ae,{children:Object(D.jsxs)(Me,{children:[Object(D.jsxs)(Ue,{children:[Object(D.jsxs)(qe,{children:[Object(D.jsx)(We,{children:e("HIGHLORD Price")}),Object(D.jsx)(Ze,{children:e("$%price%",{price:u.toFixed(3)})})]}),Object(D.jsxs)(qe,{children:[Object(D.jsx)(We,{children:e("HIGHLORD Market Cap")}),Object(D.jsx)(Ze,{children:e("$%marketcap%",{marketcap:b})})]})]}),Object(D.jsxs)(Ue,{children:[Object(D.jsxs)(qe,{children:[Object(D.jsx)(We,{children:e("HIGHLORD in Circulation")}),Object(D.jsx)(Ze,{children:e("%circulation%",{circulation:s.toFixed(3)})})]}),Object(D.jsxs)(qe,{children:[Object(D.jsx)(We,{children:e("HIGHLORD Burned")}),Object(D.jsx)(Ze,{children:e("%burnedamount%",{burnedamount:d.toFixed(3)})})]})]})]})}),Object(D.jsx)(Ae,{children:Object(D.jsxs)(Ge,{children:[Object(D.jsx)(H.sb,{fontSize:"46px",children:e("$%tvl%",{tvl:h})}),Object(D.jsx)(H.sb,{color:"primary",bold:!0,children:e("Total Value Locked (TVL)")})]})})]})})},_e=Object(F.e)(M)(Ce||(Ce=Object(g.a)(["\n  padding-top: 16px;\n\n  "," {\n    padding-top: 24px;\n  }\n"])),(function(e){return e.theme.mediaQueries.md}));Object(F.e)(P.a)(Fe||(Fe=Object(g.a)(["\n  z-index: 1;\n  position: absolute;\n  width: 100%;\n  top: 0;\n  left: 50%;\n  transform: translate(-50%, 0);\n  padding-left: 0px;\n  padding-right: 0px;\n\n  "," {\n    padding-left: 24px;\n    padding-right: 24px;\n  }\n"])),(function(e){return e.theme.mediaQueries.lg})),n.default=function(){Object(q.a)().theme,Object(U.c)().account;return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(W.a,{}),Object(D.jsx)(_e,{innerProps:{style:{margin:"0",width:"100%"}},index:2,hasCurvedDivider:!1,children:Object(D.jsx)(ee,{})}),Object(D.jsx)(_e,{innerProps:{style:{margin:"0",width:"100%"}},index:2,hasCurvedDivider:!1,children:Object(D.jsx)($e,{})})]})}}}]);
//# sourceMappingURL=9.9a1a46c1.chunk.js.map