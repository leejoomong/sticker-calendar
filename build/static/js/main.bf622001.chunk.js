(this["webpackJsonpsticker-calendar"]=this["webpackJsonpsticker-calendar"]||[]).push([[0],{73:function(e,t,n){},74:function(e,t,n){},79:function(e,t,n){"use strict";n.r(t);var r=n(2),c=n(0),a=n.n(c),s=n(54),i=n.n(s),l=(n(73),n(56)),d=(n(74),n(85)),j=n(86),o=n(84),u=n(83);var b=function(){var e=new Date,t=e.getFullYear(),n=e.getMonth(),a=(e.getDate(),{0:"Sunday",1:"Monday",2:"Tuesday",3:"Wednesday",4:"Thursday",5:"Friday",6:"Saturday"}),s=Object(c.useState)(1),i=Object(l.a)(s,2),b=i[0],h=i[1];Object(c.useEffect)((function(){h(n)}),[t,n]);var O=function(e,t){return new Date(e,t,0).getDate()};return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)("header",{className:"App-header",children:Object(r.jsx)(u.a,{children:Object(r.jsxs)("h3",{style:{color:"#34314C",letterSpacing:"3px"},children:[" ",{0:"January",1:"February",2:"March",3:"April",4:"May",5:"June",6:"July",7:"August",8:"September",9:"October",10:"November",11:"December"}[b].toUpperCase()," "]})})}),Object(r.jsx)("body",{className:"App-body",children:Object(r.jsxs)(u.a,{width:"80%",children:[" ",function(e,t,n){var c=O(e,t),s=parseInt(c/7+1),i=function(e,t){for(var n=[],r=1,c=O(e,t),a=new Date(e,t,1).getDay(),s=0,i=new Array(a);s<i.length;s++)i[s],n.push(0);for(var l=0,d=new Array(c);l<d.length;l++)d[l],n.push(r++);return n}(e,t),l=Object.values(a).map((function(e,t){var n=0===t?"#FF7473":6===t?"#47B8E0":"#34314C";return Object(r.jsx)(d.a.Cell,{children:Object(r.jsx)("b",{style:{color:n},children:e})},t)})),u=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"#34314C";return 0!==e&&e?Object(r.jsx)(d.a.Cell,{children:Object(r.jsxs)(j.a,{children:[Object(r.jsx)(j.a.Row,{style:{padding:0,margin:0},children:Object(r.jsx)(j.a.Column,{style:{padding:0,margin:0,background:"#F6F6F6"},children:Object(r.jsx)("font",{color:t,children:e})})}),Object(r.jsx)(j.a.Row,{children:Object(r.jsx)(j.a.Column,{children:Object(r.jsx)(o.a,{name:"heart",size:"big",style:{color:"#FFC952"}})})})]})},e):Object(r.jsx)(d.a.Cell,{},e)};return Object(r.jsxs)(d.a,{celled:!0,textAlign:"center",children:[Object(r.jsx)(d.a.Header,{width:"5%",children:Object(r.jsx)(d.a.Row,{children:l})}),Object(r.jsx)(d.a.Body,{width:"5%",children:function(e){return new Array(s).fill(0).map((function(t,n){return c=e.slice(7*n,7*n+7),Object(r.jsxs)(d.a.Row,{children:[u(c[0],"#FF7473"),u(c[1]),u(c[2]),u(c[3]),u(c[4]),u(c[5]),u(c[6],"#47B8E0")]});var c}))}(i)})]})}(t,n)," "]})})]})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,87)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))};n(78);i.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(b,{})}),document.getElementById("root")),h()}},[[79,1,2]]]);
//# sourceMappingURL=main.bf622001.chunk.js.map