(this.webpackJsonpminesweeper=this.webpackJsonpminesweeper||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var o=n(1),c=n.n(o),i=n(4),r=n.n(i),a=(n(9),n(2)),s=(n.p,n(10),n(0)),b=function(e){var t=e.onFaultClick,n=(e.isVisible,e.isBomb),c=e.neighborBombCount,i=e.gameOver,r=Object(o.useState)(!1),b=Object(a.a)(r,2),u=b[0],g=b[1],A=Object(o.useState)(!1),m=Object(a.a)(A,2),d=m[0],l=m[1],f=Object(o.useState)(!1),j=Object(a.a)(f,2),x=j[0],v=j[1];function O(e){i||(e.preventDefault(),"click"===e.type?(console.log("Left click"),g(!0),n&&(v(!0),t())):"contextmenu"===e.type&&(console.log("Right click"),l(!0)))}return Object(o.useEffect)((function(){return!i&&(g(!1),l(!1),v(!1))}),[i]),Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("div",{onClick:O,onContextMenu:O,style:{color:"white",cursor:"pointer",width:"60px",float:"left",textAlign:"center",height:"50px",paddingTop:"15px",fontSize:"19px",border:"2px solid #1b1717",backgroundColor:d||x?"red":"#536162"},children:d||u||i?u&&!x||i&&!n?c:n&&!d?Object(s.jsx)("img",{src:"data:image/png;base64,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"}):"":""})})};var u=function(){var e=Object(o.useState)(),t=Object(a.a)(e,2),n=t[0],c=t[1],i=Object(o.useState)(!1),r=Object(a.a)(i,2),u=r[0],g=r[1];function A(){for(var e=new Array(8),t=0;t<8;t++){e[t]=new Array(8);for(var n=0;n<8;n++){var o=Math.floor(100*Math.random())<30;e[t][n]={isBomb:o,neighborBombCount:0}}}!function(e){for(var t=0;t<8;t++)for(var n=0;n<8;n++){var o=n-1,i=n+1,r=t-1,a=t+1,s=o>=0,b=i<=7,u=r>=0,g=a<=7,A=0;s&&(A=e[t][o].isBomb?A+1:A),b&&(A=e[t][i].isBomb?A+1:A),u&&(A=e[r][n].isBomb?A+1:A,s&&(A=e[r][o].isBomb?A+1:A),b&&(A=e[r][i].isBomb?A+1:A)),g&&(A=e[a][n].isBomb?A+1:A,s&&(A=e[a][o].isBomb?A+1:A),b&&(A=e[a][i].isBomb?A+1:A)),e[t][n].neighborBombCount=A}console.log(e),c(e)}(e)}function m(){g(!0)}return Object(o.useEffect)((function(){A()}),[]),Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("div",{className:"canvas",children:[u?Object(s.jsx)("div",{style:{width:"100%",marginBottom:"50px"},children:Object(s.jsxs)("div",{style:{fontSize:"16px",width:"350px",margin:"0 auto"},children:["Mine exploded! ",Object(s.jsx)("span",{onClick:function(){g(!1),c([]),A()},style:{cursor:"pointer",color:"blue"},children:"Click here to start new game"})]})}):Object(s.jsx)(s.Fragment,{}),n&&n.map((function(e){return Object(s.jsxs)(s.Fragment,{children:[e.map((function(e){return Object(s.jsx)(b,{gameOver:u,onFaultClick:m,isBomb:e.isBomb,neighborBombCount:e.neighborBombCount,isVisible:!0})})),Object(s.jsx)("div",{style:{clear:"both"}})]})}))]})})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,o=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),o(e),c(e),i(e),r(e)}))};r.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(u,{})}),document.getElementById("root")),g()},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.37d0a018.chunk.js.map