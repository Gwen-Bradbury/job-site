(this["webpackJsonpjob-site"]=this["webpackJsonpjob-site"]||[]).push([[0],[,,,,,,function(e){e.exports=JSON.parse('[{"id":1,"company":"Photosnap","logo":"./images/photosnap.svg","new":true,"featured":true,"position":"Senior Frontend Developer","role":"Frontend","level":"Senior","postedAt":"1d ago","contract":"Full Time","location":"USA Only","languages":["HTML","CSS","JavaScript"],"tools":[]},{"id":2,"company":"Manage","logo":"./images/manage.svg","new":true,"featured":true,"position":"Fullstack Developer","role":"Fullstack","level":"Midweight","postedAt":"1d ago","contract":"Part Time","location":"Remote","languages":["Python"],"tools":["React"]},{"id":3,"company":"Account","logo":"./images/account.svg","new":true,"featured":false,"position":"Junior Frontend Developer","role":"Frontend","level":"Junior","postedAt":"2d ago","contract":"Part Time","location":"USA Only","languages":["JavaScript"],"tools":["React","Sass"]},{"id":4,"company":"MyHome","logo":"./images/myhome.svg","new":false,"featured":false,"position":"Junior Frontend Developer","role":"Frontend","level":"Junior","postedAt":"5d ago","contract":"Contract","location":"USA Only","languages":["CSS","JavaScript"],"tools":[]},{"id":5,"company":"Loop Studios","logo":"./images/loop-studios.svg","new":false,"featured":false,"position":"Software Engineer","role":"Fullstack","level":"Midweight","postedAt":"1w ago","contract":"Full Time","location":"Worldwide","languages":["JavaScript"],"tools":["Ruby","Sass"]},{"id":6,"company":"FaceIt","logo":"./images/faceit.svg","new":false,"featured":false,"position":"Junior Backend Developer","role":"Backend","level":"Junior","postedAt":"2w ago","contract":"Full Time","location":"UK Only","languages":["Ruby"],"tools":["RoR"]},{"id":7,"company":"Shortly","logo":"./images/shortly.svg","new":false,"featured":false,"position":"Junior Developer","role":"Frontend","level":"Junior","postedAt":"2w ago","contract":"Full Time","location":"Worldwide","languages":["HTML","JavaScript"],"tools":["Sass"]},{"id":8,"company":"Insure","logo":"./images/insure.svg","new":false,"featured":false,"position":"Junior Frontend Developer","role":"Frontend","level":"Junior","postedAt":"2w ago","contract":"Full Time","location":"USA Only","languages":["JavaScript"],"tools":["Vue","Sass"]},{"id":9,"company":"Eyecam Co.","logo":"./images/eyecam-co.svg","new":false,"featured":false,"position":"Full Stack Engineer","role":"Fullstack","level":"Midweight","postedAt":"3w ago","contract":"Full Time","location":"Worldwide","languages":["JavaScript","Python"],"tools":["Django"]},{"id":10,"company":"The Air Filter Company","logo":"./images/the-air-filter-company.svg","new":false,"featured":false,"position":"Front-end Dev","role":"Frontend","level":"Junior","postedAt":"1mo ago","contract":"Part Time","location":"Worldwide","languages":["JavaScript"],"tools":["React","Sass"]}]')},,,,,,,,function(e,t,o){},function(e,t,o){},function(e,t,o){},,function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){"use strict";o.r(t);var n=o(1),a=o.n(n),s=o(7),i=o.n(s),c=(o(14),o(15),o(16),o(0)),l=function(){return Object(c.jsx)("div",{children:Object(c.jsx)("img",{className:"nav",src:"./images/bg-header-desktop.svg"})})},r=o(2),u=(o(18),o(6)),d=(o(19),o(20),function(e){return Object(c.jsxs)("div",{className:"jobdetails_container",children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("span",{className:"jobdetails_maindetails company",children:e.company}),e.new?Object(c.jsx)("span",{className:"jobdetails_maindetails new",children:"New"}):null,e.featured?Object(c.jsx)("span",{className:"jobdetails_maindetails featured",children:"Featured"}):null]}),Object(c.jsx)("div",{className:"jobdetails_position",children:e.position}),Object(c.jsxs)("div",{children:[Object(c.jsx)("span",{className:"jobdetails_details",children:e.postedAt}),Object(c.jsx)("span",{className:"jobdetails_details",children:e.contract}),Object(c.jsx)("span",{className:"jobdetails_details",children:e.location})]})]})}),j=(o(21),function(e){var t=Object(n.useState)([]),o=Object(r.a)(t,2),a=o[0],s=o[1];return Object(n.useEffect)((function(){var t=e.languages.concat(e.tools);s(t)}),[e.languages,e.tools]),Object(c.jsx)("div",{className:"skills_container",children:a.map((function(e,t){return Object(c.jsx)("span",{className:"skills_skill",children:e},t)}))})}),g=function(e){return Object(c.jsxs)("div",{className:"job_container",children:[Object(c.jsx)("div",{className:"jobdetails_img",children:Object(c.jsx)("img",{src:e.job.logo})}),Object(c.jsx)(d,{company:e.job.company,position:e.job.position,new:e.job.new,featured:e.job.featured,postedAt:e.job.postedAt,contract:e.job.contract,location:e.job.location}),Object(c.jsx)(j,{languages:e.job.languages,tools:e.job.tools})]})},p=o(9),b=o(8),f=function(e){return Object(c.jsxs)("div",{children:[Object(c.jsx)("input",{type:"checkbox",value:e.value,onClick:function(){return e.handleCheckboxClick(e.value)}}),Object(c.jsx)("label",{children:e.value})]})},m=function(e){var t=Object(n.useState)([]),o=Object(r.a)(t,2),a=o[0],s=o[1];Object(n.useEffect)((function(){var t=e.initialJobs.map((function(e){return e.languages})).flat(),o=Object(b.a)(new Set(t));s(o);var n={};o.forEach((function(e){n[e]=!1})),d(n)}),[]);var i=Object(n.useState)({}),l=Object(r.a)(i,2),u=l[0],d=l[1],j=function(e){var t=Object(p.a)({},u);t[e]=!u[e],d(t)};return Object(n.useEffect)((function(){var t=Object.entries(u).filter((function(e){return e[1]})).map((function(e){return e[0]})),o=e.initialJobs.filter((function(e){return e.languages.some((function(e){return t.includes(e)}))}));e.setJobs(o)}),[u]),Object(c.jsx)("div",{children:a.map((function(e){return Object(c.jsx)(f,{value:e,handleCheckboxClick:j})}))})},v=function(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),o=t[0],s=t[1];return Object(n.useEffect)((function(){s(u)}),[]),Object(c.jsxs)(a.a.Fragment,{children:[Object(c.jsx)(m,{initialJobs:u,setJobs:s}),Object(c.jsx)("div",{className:"content_container",children:o.map((function(e){return Object(c.jsx)(g,{job:e},e.id)}))})]})};var O=function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(l,{}),Object(c.jsx)(v,{})]})},h=function(e){e&&e instanceof Function&&o.e(3).then(o.bind(null,23)).then((function(t){var o=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;o(e),n(e),a(e),s(e),i(e)}))};i.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(O,{})}),document.getElementById("root")),h()}],[[22,1,2]]]);
//# sourceMappingURL=main.c7f5901e.chunk.js.map