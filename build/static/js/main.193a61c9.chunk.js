(this["webpackJsonpsoftware-company"]=this["webpackJsonpsoftware-company"]||[]).push([[0],{44:function(e,c,t){},45:function(e,c,t){},46:function(e,c,t){},47:function(e,c,t){},49:function(e,c,t){},50:function(e,c,t){},51:function(e,c,t){},52:function(e,c,t){},54:function(e,c,t){},59:function(e,c,t){},60:function(e,c,t){},61:function(e,c,t){},62:function(e,c,t){},63:function(e,c,t){},65:function(e,c,t){},66:function(e,c,t){},67:function(e,c,t){},68:function(e,c,t){},69:function(e,c,t){"use strict";t.r(c);var s=t(5),a=t.n(s),n=t(35),i=t.n(n),l=(t(44),t(45),t(19)),r=t(11),j=t(8),d=(t(46),t(47),t(1)),o=function(e){var c=e.whylearing,t=c.Title,s=c.Details,a=c.images;return Object(d.jsx)("div",{className:"col-lg-6 col-md-6 col-12 g-3",children:Object(d.jsx)("div",{className:"row",children:Object(d.jsxs)("div",{className:"card-body ",children:[Object(d.jsx)("div",{className:"text-center icon-color",children:Object(d.jsx)("i",{className:a})}),Object(d.jsxs)("h5",{className:"card-title text-white",children:[" ",t]}),Object(d.jsxs)("p",{className:"card-text text-white",children:[" ",s]})]})})})},b=function(){var e=Object(s.useState)([]),c=Object(j.a)(e,2),t=c[0],a=c[1];return Object(s.useEffect)((function(){fetch("./whyjoinus.json").then((function(e){return e.json()})).then((function(e){a(e)}))}),[]),Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:"aboutus",children:[Object(d.jsx)("h1",{className:"text-center text-white about-us pt-5",children:" WHY JOIN AMARSCHOOL"}),Object(d.jsx)("hr",{className:"w-25 m-auto text-color "}),Object(d.jsx)("div",{className:"container",children:Object(d.jsx)("div",{className:"row pb-5",children:t.map((function(e){return Object(d.jsx)(o,{whylearing:e},e.id)}))})})]})})},m=function(){var e=Object(s.useState)([]),c=Object(j.a)(e,2),t=c[0],a=c[1];return Object(s.useEffect)((function(){fetch("./course.json").then((function(e){return e.json()})).then((function(e){console.log("I have called! from userServic"),a(e)}))}),[]),[t]},h=(t(49),function(e){var c=e.course,t=c.price,s=c.image,a=c.subject,n=c.title,i=c.details,l=c.totalstudent;return Object(d.jsx)("div",{className:"col-lg-3 col-md-3 col-12 g-3",children:Object(d.jsxs)("div",{class:"card course-card shadow-lg rounded-3 hovereffect",children:[Object(d.jsx)("img",{className:"card-img-top",src:s,style:{minHeight:"30%",maxHeight:200},alt:"Card image cap"}),Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("h5",{className:"card-title",children:a}),Object(d.jsx)("p",{className:"card-text",children:n})]}),Object(d.jsx)("div",{children:Object(d.jsxs)("span",{className:"course-price",children:[" ",t]})})]}),Object(d.jsx)("p",{className:"card-text",children:i})]}),Object(d.jsx)("div",{class:"card-footer",children:Object(d.jsxs)("div",{className:"d-flex justify-content-around d-flex align-items-center",children:[Object(d.jsxs)("div",{className:"",children:[l," Student"]}),Object(d.jsx)("button",{type:"button",class:"gmail  my-2",children:"Enroll Now"})]})})]})})}),x=function(){var e=m(),c=Object(j.a)(e,1)[0];return Object(d.jsx)("div",{className:"container",children:Object(d.jsx)("div",{className:"row mt-3 mb-3",children:c.map((function(e){return Object(d.jsx)(h,{course:e},e.id)}))})})},O=(t(50),function(){return Object(d.jsx)("div",{className:"readyToStarted",children:Object(d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320",children:Object(d.jsx)("path",{fill:"#08608B","fill-opacity":"1",d:"M0,96L80,90.7C160,85,320,75,480,64C640,53,800,43,960,48C1120,53,1280,75,1360,85.3L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"})})})}),u=(t(51),function(){return Object(d.jsxs)("div",{className:"pt-5",children:[Object(d.jsx)("h1",{className:"text-center service ",children:" LATEST COURSES "}),Object(d.jsx)(x,{}),Object(d.jsx)(O,{})]})}),p=(t(52),function(){return Object(d.jsx)("footer",{className:"footer ",children:Object(d.jsxs)("section",{className:"container ",children:[Object(d.jsxs)("div",{className:"row pt-5",children:[Object(d.jsxs)("div",{className:"col-lg-3",children:[Object(d.jsx)("h5",{children:" BROWSE "}),Object(d.jsx)("p",{children:" Prices "}),Object(d.jsx)("p",{children:" Courses "}),Object(d.jsx)("p",{children:" Blog "}),Object(d.jsx)("p",{children:" Contact Us"})]}),Object(d.jsxs)("div",{className:"col-lg-3 ",children:[Object(d.jsx)("h5",{children:" NEXT COURSES "}),Object(d.jsx)("p",{children:" Flutter "}),Object(d.jsx)("p",{children:" Dart "}),Object(d.jsx)("p",{children:" SQL "}),Object(d.jsx)("p",{children:" Oracle "})]}),Object(d.jsxs)("div",{className:"col-lg-3 ",children:[Object(d.jsx)("h5",{children:" ABPUT LEARN "}),Object(d.jsx)("p",{children:" Prices "}),Object(d.jsx)("p",{children:" Apply "}),Object(d.jsx)("p",{children:" Tearms & Condition "}),Object(d.jsx)("p",{children:" Register"})]}),Object(d.jsxs)("div",{className:"col-lg-3 ",children:[Object(d.jsx)("h5",{children:" WORK WITH US "}),Object(d.jsx)("p",{children:" Our Team  "}),Object(d.jsx)("p",{children:" Instactor "})]})]}),Object(d.jsx)("div",{className:"d-flex justify-content-center",children:Object(d.jsxs)("div",{className:"pt-3 pb-0",children:[Object(d.jsx)("div",{className:"d-flex justify-content-center",children:Object(d.jsx)("div",{children:Object(d.jsxs)("span",{className:"d-flex text-dark py-3 ms-auto ",children:[Object(d.jsx)("div",{className:"social-icons-f",children:Object(d.jsx)("a",{href:"",target:"_blank",children:Object(d.jsx)("span",{className:"icon-users rounded-circle  p-3",children:Object(d.jsx)("i",{className:"fab fa-facebook-f"})})})}),Object(d.jsx)("div",{className:"social-icons-f ms-3 ",children:Object(d.jsx)("a",{href:"",target:"_blank",children:Object(d.jsx)("span",{className:"icon-users rounded-circle  p-3",children:Object(d.jsx)("i",{className:"fab fa-twitter"})})})}),Object(d.jsx)("div",{className:"social-icons-f ms-3 ",children:Object(d.jsx)("a",{href:"",target:"_blank",children:Object(d.jsx)("span",{className:"icon-users rounded-circle  p-3",children:Object(d.jsx)("i",{className:"fab fa-linkedin-in"})})})}),Object(d.jsx)("div",{className:"social-icons-f ms-3 ",children:Object(d.jsx)("a",{href:"",target:"_blank",children:Object(d.jsx)("span",{className:"icon-users rounded-circle  p-3",children:Object(d.jsx)("i",{className:"fab fa-instagram"})})})})]})})}),Object(d.jsx)("p",{className:"text-center text-dark ",children:"Copyright \xa9 2020  AmarSoft All Rights Reserved by j Islam ."})]})})]})})}),f=(t(53),t.p+"static/media/logo.7e138b10.png"),N=(t(54),function(){return Object(d.jsx)("nav",{className:"navbar navbar-expand-lg ",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsxs)("a",{className:"navbar-brand fw-bold",href:"#",children:[Object(d.jsx)("img",{src:f,width:"40",height:"40",class:"d-inline-block align-top",alt:""}),"AMAR ",Object(d.jsx)("span",{className:"schol-name-color",children:" SCHOOL "})]}),Object(d.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(d.jsx)("span",{className:"navbar-toggler-icon ",children:Object(d.jsx)("i",{class:"fa fa-navicon","aria-hidden":"true"})})}),Object(d.jsx)("div",{className:"collapse navbar-collapse fw-bold",id:"navbarSupportedContent",children:Object(d.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0 ms-auto",children:[Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(l.b,{to:"/",className:"nav-link menu-link",children:"Home"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(l.b,{to:"/about",className:"nav-link menu-link",children:"About"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(l.b,{to:"/services",className:"nav-link menu-link",children:"Services"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(l.b,{to:"/contactus",className:"nav-link menu-link",children:"Contact Us"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(l.b,{to:"/blogs",className:"nav-link menu-link",children:"Blogs"})})]})}),Object(d.jsx)("div",{className:"d-flex flex-row-reverse",children:Object(d.jsx)(l.b,{to:"/singin",className:" signin ",children:"Sign In"})})]})})}),v=function(e){var c=e.contact,t=c.images,s=c.Title;return Object(d.jsxs)("div",{className:"col-md-4 col-lg-4 col-sm-12 col-12",children:[Object(d.jsx)("div",{className:"contactme-card text-dark text-center  animate__animated animate__fadeInLeft"}),Object(d.jsxs)("div",{className:"py-3 pb-5 pt-5 contactme-card text-dark text-center  animate__animated animate__fadeInLeft",children:[Object(d.jsx)("div",{className:"icon-color",children:Object(d.jsx)("i",{className:t})}),Object(d.jsx)("div",{className:"fw-bold  text-justify",children:s})]})]})},g=(t(59),function(){var e=Object(s.useState)([]),c=Object(j.a)(e,2),t=c[0],a=c[1];return Object(s.useEffect)((function(){fetch("./cant.json").then((function(e){return e.json()})).then((function(e){return a(e)}))}),[]),Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:"container pb-5",children:[Object(d.jsx)("h1",{className:"fw-bold fs-1 text-center icon-color py-3",children:"Contact Me"}),Object(d.jsx)("hr",{className:"w-25 m-auto text-color "}),Object(d.jsx)("div",{className:"container overflow-hidden",children:Object(d.jsx)("div",{className:"row mt-2 pt-3 gy-3",children:t.map((function(e){return Object(d.jsx)(v,{contact:e},e.id)}))})})]}),Object(d.jsx)(O,{})]})}),y=function(){return Object(d.jsx)("div",{className:"container text-center",children:Object(d.jsx)("h1",{className:"p-5 text-danger",children:" 404 !! Not Found  "})})},w=t.p+"static/media/freelance-young-asian-businesswoman-casual-wear-using-laptop-working-living-room-home_7861-3022.0d870132.jpg",C=t.p+"static/media/top-view-person-writing-laptop-with-copy-space_23-2148708035.776c1ee0.jpg",S=t.p+"static/media/1_dLaDL-lSN0iprzmOpmM7zQ.adcd0b33.png",k=(t(60),function(){return Object(d.jsx)("div",{children:Object(d.jsxs)("div",{id:"carouselExampleCaptions",className:"carousel slide","data-bs-ride":"carousel",children:[Object(d.jsxs)("div",{className:"carousel-indicators",children:[Object(d.jsx)("button",{type:"button","data-bs-target":"#carouselExampleCaptions","data-bs-slide-to":"0",className:"active","aria-current":"true","aria-label":"Slide 1"}),Object(d.jsx)("button",{type:"button","data-bs-target":"#carouselExampleCaptions","data-bs-slide-to":"1","aria-label":"Slide 2"}),Object(d.jsx)("button",{type:"button","data-bs-target":"#carouselExampleCaptions","data-bs-slide-to":"2","aria-label":"Slide 3"})]}),Object(d.jsxs)("div",{className:"carousel-inner",children:[Object(d.jsxs)("div",{className:"carousel-item active",children:[Object(d.jsx)("img",{src:w,className:"d-block w-100",style:{minHeight:"10%",maxHeight:400},alt:"..."}),Object(d.jsxs)("div",{className:"carousel-caption d-none d-md-block",children:[Object(d.jsx)("h1",{children:" ENJOY&IMPROVE YOUR SKILLS "}),Object(d.jsx)("p",{className:"text-dark fs-5",children:"Slider Revolution is the highly acclaimed slide-based displaying solution, thousands of businesses, theme developers and everyday people use and love!"})]})]}),Object(d.jsxs)("div",{className:"carousel-item",children:[Object(d.jsx)("img",{src:C,style:{minHeight:"10%",maxHeight:400},className:"d-block w-100",alt:"..."}),Object(d.jsxs)("div",{className:"carousel-caption d-none d-md-block",children:[Object(d.jsx)("h1",{children:"ENJOY&SHARE YOUR SKILLS"}),Object(d.jsx)("p",{className:"text-dark fs-5",children:"Slider Revolution is the highly acclaimed slide-based displaying solution, thousands of businesses, theme developers and everyday people use and love!"})]})]}),Object(d.jsxs)("div",{className:"carousel-item",children:[Object(d.jsx)("img",{src:S,style:{minHeight:"10%",maxHeight:400},className:"d-block w-100",alt:"..."}),Object(d.jsxs)("div",{className:"carousel-caption d-none d-md-block",children:[Object(d.jsx)("h1",{children:" Learn Hot React"}),Object(d.jsx)("p",{className:"text-dark fs-5",children:"A JavaScript library for building user interfaces"})]})]})]}),Object(d.jsxs)("button",{className:"carousel-control-prev",type:"button","data-bs-target":"#carouselExampleCaptions","data-bs-slide":"prev",children:[Object(d.jsx)("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),Object(d.jsx)("span",{className:"visually-hidden",children:"Previous"})]}),Object(d.jsxs)("button",{className:"carousel-control-next",type:"button","data-bs-target":"#carouselExampleCaptions","data-bs-slide":"next",children:[Object(d.jsx)("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),Object(d.jsx)("span",{className:"visually-hidden",children:"Next"})]})]})})}),E=(t(61),function(e){var c=e.ourexpertice,t=c.Title,s=c.discripton,a=c.icon;return Object(d.jsx)("div",{className:"col-lg-4 col-md-4 col-12 g-5",children:Object(d.jsx)("div",{className:"our-expertice-card",children:Object(d.jsxs)("div",{className:"card-body ",children:[Object(d.jsx)("div",{className:"text-center icon-color p-3",children:Object(d.jsx)("i",{className:a})}),Object(d.jsxs)("div",{className:"pb-2 text-center",children:[Object(d.jsx)("h3",{className:"card-title",children:t}),Object(d.jsx)("p",{className:"card-text expertice-card-details fs-6",children:s})]})]})})})}),L=(t(62),function(){var e=Object(s.useState)([]),c=Object(j.a)(e,2),t=c[0],a=c[1];return Object(s.useEffect)((function(){fetch("./ourexpertice.json").then((function(e){return e.json()})).then((function(e){return a(e)}))}),[]),Object(d.jsxs)("div",{className:"container mt-5 mb-5",children:[Object(d.jsx)("h1",{className:"text-center",children:"OUR EXPERTICES"}),Object(d.jsx)("div",{className:"row mt-2 mb-4",children:t.map((function(e){return Object(d.jsx)(E,{ourexpertice:e},e.id)}))})]})}),R=(t(63),t.p+"static/media/francis_angelyn_logo2020.da14c6d6.jpg"),I=function(){return Object(d.jsxs)("div",{children:[Object(d.jsxs)("h1",{className:"text-center pt-5 student-perception-header",children:[" ","Students & Parents Opinion"," "]}),Object(d.jsxs)("div",{className:"container ",children:[Object(d.jsxs)("div",{className:"d-flex justify-content-center py-4",children:[Object(d.jsx)("img",{className:"card-img-top rounded-circle",src:R,style:{height:60,width:60},alt:"Card image cap"})," "]}),Object(d.jsx)("div",{className:"row d-flex justify-content-center",children:Object(d.jsx)("div",{className:"col-md-7 col-12 pb-4",children:Object(d.jsx)("p",{children:Object(d.jsx)("q",{children:" Replenish him third creature and meat blessed void a fruit gathered you\u2019re, they\u2019re two waters own morning gathered greater shall had behold had seed. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it. "})})})})]})]})},A=function(){var e=m(),c=Object(j.a)(e,1)[0];Object(r.f)();return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{className:"text-center service pt-4",children:" LATEST COURSES "}),Object(d.jsx)("div",{className:"container",children:Object(d.jsx)("div",{className:"row mb-3",children:c.slice(0,4).map((function(e){return Object(d.jsx)(h,{course:e},e.id)}))})})]})},H=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(k,{children:" "}),Object(d.jsx)(L,{}),Object(d.jsx)(b,{}),Object(d.jsx)(A,{children:" "}),Object(d.jsx)(I,{}),Object(d.jsx)(O,{})]})},T=t(38),_={apiKey:"AIzaSyAFxdI0i0bMG2eB-jpQ6dThNRi03Ragypg",authDomain:"amarschool-85de4.firebaseapp.com",projectId:"amarschool-85de4",storageBucket:"amarschool-85de4.appspot.com",messagingSenderId:"310682578003",appId:"1:310682578003:web:9cdbdc19f06b34edff6aa6",measurementId:"G-NPRYLPY6JL"},P=function(){Object(T.a)(_)},U=(t(65),t(26)),B=function(){P();var e=new U.a,c=new U.b,t=Object(s.useState)({}),a=Object(j.a)(t,2),n=(a[0],a[1]),i=Object(U.c)();return Object(d.jsx)("div",{className:"d-flex justify-content-center ",children:Object(d.jsxs)("div",{className:"sign-in shadow-lg my-5  px-5",children:[Object(d.jsx)("h3",{className:"text-center pt-5",children:" LOGIN TO AMARSCHOOL"}),Object(d.jsx)("hr",{className:"w-75 ms-auto me-auto"}),Object(d.jsxs)("div",{className:"d-flex justify-content-around",children:[Object(d.jsx)("button",{type:"button",class:"fb my-2 ",onClick:function(){Object(U.d)(i,e).then((function(e){var c=e.user,t=c.displayName,s=c.email,a=c.photoURL;console.log(e.user),n({name:t,email:s,photo:a})})).catch((function(e){}))},children:"Facebook"}),Object(d.jsx)("button",{type:"button",class:"gmail  my-2 ",onClick:function(){Object(U.d)(i,c).then((function(e){var c=e.user,t=c.displayName,s=c.email,a=c.photoURL;console.log(e.user),n({name:t,email:s,photo:a})})).catch((function(e){}))},children:"Gmail"})]}),Object(d.jsx)("hr",{className:"w-75 ms-auto me-auto"}),Object(d.jsxs)("form",{children:[Object(d.jsx)("div",{className:"form-group pb-2",children:Object(d.jsx)("input",{type:"email",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Enter email"})}),Object(d.jsx)("div",{className:"form-group",children:Object(d.jsx)("input",{type:"password",className:"form-control my-3",id:"exampleInputPassword1",placeholder:"Password"})}),Object(d.jsxs)("div",{class:"form-check",children:[Object(d.jsx)("input",{type:"checkbox",className:"form-check-input",id:"exampleCheck1"}),Object(d.jsx)("label",{className:"form-check-label",for:"exampleCheck1",children:"Check me out"})]}),Object(d.jsxs)("button",{type:"button",class:"btn my-2 mt-3",children:["LOG IN"," "]}),Object(d.jsx)(l.b,{to:"/register",children:Object(d.jsx)("button",{type:"button",class:"reg my-2",children:"Register"})})]})]})})},M=function(){return Object(d.jsx)("div",{className:"d-flex justify-content-center ",children:Object(d.jsxs)("div",{className:"sign-in shadow-lg my-5  px-5",children:[Object(d.jsx)("h3",{className:"text-center pt-5",children:" CREATE AN ACCOUNT"}),Object(d.jsx)("hr",{className:"w-75 ms-auto me-auto"}),Object(d.jsxs)("form",{children:[Object(d.jsx)("div",{className:"form-group my-4",children:Object(d.jsx)("input",{type:"email",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"User Name "})}),Object(d.jsx)("div",{className:"form-group my-4",children:Object(d.jsx)("input",{type:"email",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Email"})}),Object(d.jsx)("div",{className:"form-group my-4",children:Object(d.jsx)("input",{type:"email",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Password "})}),Object(d.jsx)("div",{className:"form-group my-4",children:Object(d.jsx)("input",{type:"email",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Confirm Password"})}),Object(d.jsxs)("button",{type:"button",class:"btn my-2 mt-3",children:["CREATE AN ACCOUNT"," "]})]})]})})},F=(t(66),t.p+"static/media/9f41e2d14093da80356873e2b8745950.d062a972.jpg"),J=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("img",{src:F,style:{minHeight:"10%",maxHeight:350},className:"d-block w-100",alt:"..."}),Object(d.jsxs)("div",{class:"centered text-center text-white",children:[Object(d.jsx)("h1",{className:"fw-bold display-4",children:"AMARSCHOOL BLOG "}),Object(d.jsx)("h5",{children:"Ex utamur fierent tacimates duis choro an"}),Object(d.jsx)("p",{children:"Lorem ipsum dolor sit amet, ius minim gubergren ad. At mei sumo sonet audiam, ad mutat elitr platonem vix. Ne nisl idque fierent vix."})]})]})},Y=(t(67),function(e){var c=e.recentblog,t=c.images,s=c.title,a=c.discripton,n=c.date,i=c.authorname;return Object(d.jsx)("div",{className:"col-lg-3 col-md-3 col-12 g-3 ",children:Object(d.jsxs)("div",{class:"card course-card shadow-lg rounded-3 hovereffect",children:[Object(d.jsx)("img",{className:"card-img-top",src:t,style:{minHeight:"30%",maxHeight:200},alt:"Card image cap"}),Object(d.jsx)("div",{className:"card-body",children:Object(d.jsx)("div",{className:"d-flex justify-content-between",children:Object(d.jsxs)("div",{children:[Object(d.jsx)("h5",{className:"card-title",children:s}),Object(d.jsx)("p",{className:"card-text",children:a})]})})}),Object(d.jsx)("div",{class:"card-footer",children:Object(d.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(d.jsx)("div",{children:Object(d.jsx)("p",{className:"card-text",children:i})}),Object(d.jsx)("div",{children:Object(d.jsxs)("span",{className:"course-price",children:[" ",n]})})]})})]})})}),G=(t(68),function(){var e=Object(s.useState)([]),c=Object(j.a)(e,2),t=c[0],a=c[1];return Object(s.useEffect)((function(){fetch("./recent_blog.json").then((function(e){return e.json()})).then((function(e){return a(e)}))}),[]),Object(d.jsx)("div",{className:"mb-5",children:Object(d.jsxs)("div",{className:"container mt-3",children:[Object(d.jsx)("h2",{className:" mt-3 recent-blogs-header",children:" Recent Posts "}),Object(d.jsx)("div",{className:"row mt-1 mb-3",children:t.map((function(e){return Object(d.jsx)(Y,{recentblog:e},e.id)}))})]})})}),D=function(){var e=Object(s.useState)([]),c=Object(j.a)(e,2),t=c[0],a=c[1];return Object(s.useEffect)((function(){fetch("./recent_blog.json").then((function(e){return e.json()})).then((function(e){return a(e)}))}),[]),Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:"container ",children:[Object(d.jsx)("h2",{className:" mt-5 recent-blogs-header",children:" Featured Posts "}),Object(d.jsx)("div",{className:"row mt-1 mb-3",children:t.map((function(e){return Object(d.jsx)(Y,{recentblog:e},e.id)}))})]})})},K=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(J,{}),Object(d.jsx)(D,{}),Object(d.jsx)(G,{}),Object(d.jsx)(O,{})]})},W=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(b,{}),Object(d.jsx)(O,{})]})};var z=function(){return Object(d.jsxs)(l.a,{children:[Object(d.jsx)(N,{children:" "}),Object(d.jsxs)(r.c,{children:[Object(d.jsx)(r.a,{exact:!0,path:"/",children:Object(d.jsx)(H,{})}),Object(d.jsx)(r.a,{path:"/home",children:Object(d.jsx)(H,{})}),Object(d.jsx)(r.a,{path:"/ourexprtice",children:Object(d.jsx)(L,{})}),Object(d.jsx)(r.a,{path:"/about",children:Object(d.jsx)(W,{})}),Object(d.jsx)(r.a,{path:"/services",children:Object(d.jsx)(u,{})}),Object(d.jsx)(r.a,{path:"/contactus",children:Object(d.jsx)(g,{})}),Object(d.jsx)(r.a,{path:"/blogs",children:Object(d.jsx)(K,{})}),Object(d.jsx)(r.a,{path:"/singin",children:Object(d.jsx)(B,{})}),Object(d.jsx)(r.a,{path:"/register",children:Object(d.jsx)(M,{})}),Object(d.jsx)(r.a,{path:"*",children:Object(d.jsx)(y,{})})]}),Object(d.jsx)(p,{})]})},Q=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,70)).then((function(c){var t=c.getCLS,s=c.getFID,a=c.getFCP,n=c.getLCP,i=c.getTTFB;t(e),s(e),a(e),n(e),i(e)}))};i.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(z,{})}),document.getElementById("root")),Q()}},[[69,1,2]]]);
//# sourceMappingURL=main.193a61c9.chunk.js.map