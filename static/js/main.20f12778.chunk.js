(this["webpackJsonpmonsters-rolodex"]=this["webpackJsonpmonsters-rolodex"]||[]).push([[0],[,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(4),o=n.n(s),a=(n(9),n(3)),i=(n(10),n(11),n(0)),u=function(e){return Object(i.jsxs)("div",{className:"card-container",children:[Object(i.jsx)("img",{alt:"robohash",src:"https://robohash.org/".concat(e.marvel.id,"?set=set2&size=180x180")}),Object(i.jsxs)("h2",{children:[" ",e.marvel.name," "]})]})},l=(n(13),function(e){return Object(i.jsx)("div",{className:"card-list",children:e.marvels.map((function(e){return Object(i.jsx)(u,{marvel:e},e.id)}))})}),h=(n(14),function(e){var t=e.placeholder,n=e.handleChange;return Object(i.jsx)("input",{className:"search",type:"search",placeholder:t,onChange:n})});var j=function(){var e=Object(c.useState)([]),t=Object(a.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(""),o=Object(a.a)(s,2),u=o[0],j=o[1],d=n.filter((function(e){return e.name.toLowerCase().includes(u.toLowerCase())}));return fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){return r(e)})),Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)("h1",{children:" Monsters Rolodex "}),Object(i.jsx)(h,{placeholder:"search monsters",handleChange:function(e){return j(e.target.value)}}),Object(i.jsx)(l,{marvels:d})]})},d=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),s(e),o(e)}))};o.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(j,{})}),document.getElementById("root")),d()}],[[15,1,2]]]);
//# sourceMappingURL=main.20f12778.chunk.js.map