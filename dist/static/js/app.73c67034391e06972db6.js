webpackJsonp([0],{NHnr:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i("7+uW"),s={name:"Navbar",data:function(){return{mobile:!1,burgerIsToggled:!1,socialMedia:{Facebook:{isActive:!1,link:""},Twitter:{isActive:!1,link:""},Pinterest:{isActive:!1,link:""}}}},created:function(){window.innerWidth<=768&&(this.mobile=!0)},methods:{isMobileBurger:function(){return!(!this.mobile||!this.burgerIsToggled)},toggleBurger:function(){this.burgerIsToggled=!this.burgerIsToggled,console.log("Burger toggled to "+this.burgerIsToggled)},linkToggleBurger:function(){this.burgerIsToggled=!1}}},r={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"hero"},[i("nav",{staticClass:"navbar"},[i("div",{staticClass:"navbar-brand"},[i("div",{staticClass:"navbar-item brand-item"},[i("router-link",{staticClass:"navbar-item",attrs:{to:{name:"Home"}},on:{click:e.toggleBurger}},[i("p",[e._v("YourFavouriteOreo")])])],1),i("div",{staticClass:"navbar-burger burger",class:[e.burgerIsToggled&e.mobile?"is-active":""],attrs:{"data-target":"navbarExampleTransparentExample"},on:{click:e.toggleBurger}},[i("span"),i("span"),i("span")])]),i("div",{staticClass:"navbar-menu",class:[e.burgerIsToggled?"is-active":""],attrs:{id:"navbarExampleTransparentExample"}},[i("div",{staticClass:"navbar-start"},[e.mobile?e._e():i("router-link",{staticClass:"navbar-item",attrs:{to:{name:"Home"}},on:{click:e.toggleBurger}},[e._v("Home")]),i("div",{staticClass:"navbar-item has-dropdown is-hoverable"},[i("p",{staticClass:"navbar-link",class:[e.isMobileBurger?"":"is-hidden"],attrs:{href:"/documentation/overview/start/"},on:{click:e.toggleBurger}},[e.mobile?e._e():i("span",[e._v("Moar Information")])]),i("div",{staticClass:"navbar-dropdown is-boxed",on:{click:e.toggleBurger}},[e.mobile?i("router-link",{staticClass:"navbar-item",attrs:{to:{name:"Home"}},on:{click:e.toggleBurger}},[e._v("Home")]):e._e(),e.mobile?i("router-link",{staticClass:"navbar-item",attrs:{to:{name:"Home"}},on:{click:e.toggleBurger}},[e._v("Home")]):e._e(),i("router-link",{staticClass:"navbar-item",attrs:{to:{name:"NewsRoom"}}},[e._v("Vertex Capital Limited")]),i("router-link",{staticClass:"navbar-item",attrs:{to:{name:"Where"}}},[e._v("Where is Vertex")])],1)])],1),i("div",{staticClass:"navbar-end"},[i("div",{staticClass:"navbar-item"},[i("div",{staticClass:"field is-grouped"},[e.socialMedia.Twitter.isActive?i("p",{staticClass:"control"},[e._m(0)]):e._e(),e.socialMedia.Facebook.isActive?i("p",{staticClass:"control"},[e._m(1)]):e._e(),e.socialMedia.Pinterest.isActive?i("p",{staticClass:"control"},[e._m(2)]):e._e()])])])])])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("a",{staticClass:"bd-tw-button button round-icon blue-icon",attrs:{"data-social-network":"Twitter","data-social-action":"tweet","data-social-target":"http://localhost:4000",target:"_blank",href:"https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&hashtags=bulmaio&url=http://localhost:4000&via=jgthms"}},[t("span",{staticClass:"icon"},[t("i",{staticClass:"fab fa-twitter"})])])},function(){var e=this.$createElement,t=this._self._c||e;return t("a",{staticClass:"bd-tw-button button round-icon orange-icon",attrs:{"data-social-network":"Facebook","data-social-action":"tweet","data-social-target":"http://localhost:4000",target:"_blank",href:"https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&hashtags=bulmaio&url=http://localhost:4000&via=jgthms"}},[t("span",{staticClass:"icon"},[t("i",{staticClass:"fab fa-facebook"})])])},function(){var e=this.$createElement,t=this._self._c||e;return t("a",{staticClass:"bd-tw-button button round-icon red-icon",attrs:{"data-social-network":"Facebook","data-social-action":"tweet","data-social-target":"http://localhost:4000",target:"_blank",href:"https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&hashtags=bulmaio&url=http://localhost:4000&via=jgthms"}},[t("span",{staticClass:"icon"},[t("i",{staticClass:"fab fa-pinterest"})])])}]};var o={name:"App",components:{Navbar:i("VU/8")(s,r,!1,function(e){i("bOlF")},"data-v-588d5dcf",null).exports}},l={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("Navbar"),this._v(" "),t("router-view")],1)},staticRenderFns:[]};var u=i("VU/8")(o,l,!1,function(e){i("RLWp")},null,null).exports,n=i("/ocq"),c={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"parallax parallax-screen me-hero",staticStyle:{"background-position":"initial"}},[a("div",{staticClass:"li-header"},[a("h1",{staticClass:"li-header-text",staticStyle:{"font-family":"Quattrocento","text-shadow":"1px 1px 3px #222222"}},[e._v("Hello Hooman!\t"),a("img",{staticStyle:{width:"10%"},attrs:{src:i("s3Yc")}})]),a("hr",{staticClass:"smaller"}),a("h3",{staticClass:"column-text light",staticStyle:{width:"60%"}},[e._v("Hi and welcome to my IP Assignment website. I am Abdul also known as YourFavouriteOreo in more geek circles.")]),a("br"),a("br"),a("h3",{staticClass:"column-text light",staticStyle:{width:"60%"}},[e._v("I tend to delve my time into different avenues of technology and I can't ever stick to something so I have dipped my toes into everything from Web development, App Development and even Game development (using Unreal Engine).")])])]),a("div",{staticClass:"parallax parallax-screen handshake-hero",staticStyle:{"background-position":"initial"}},[a("div",{staticClass:"li-header"},[a("h1",{staticClass:"li-header-text",staticStyle:{"font-family":"Quattrocento","text-shadow":"1px 1px 3px #222222"}},[e._v("How did I get my Internship?")]),a("hr",{staticClass:"smaller"}),a("h3",{staticClass:"column-text light"},[e._v("I applied , interviewed and done diddly did. (Jokes)")]),a("br"),a("br"),a("h3",{staticClass:"column-text light"},[e._v("Vertex is owned by a family relative and as such I had a network into the company. After conversations with him, he asked me for my work and was pleased with previous results I have had with other employers.")]),a("br"),a("br"),a("h3",{staticClass:"column-text light"},[e._v("After a few more conversations, we struck a deal on my internship pay, hours and I was locked in for my internship.")])])]),a("div",{staticClass:"parallax parallax-screen parallax-hero",staticStyle:{"background-position":"initial"}},[a("div",{staticClass:"li-header"},[a("h1",{staticClass:"li-header-text",staticStyle:{"font-family":"Quattrocento","text-shadow":"1px 1px 3px #222222"}},[e._v("My "),a("span",{staticStyle:{"font-family":"Almendra Display","font-weight":"bold"}},[e._v("Internship Adventure")])]),a("hr",{staticClass:"smaller"}),a("h3",{staticClass:"column-text light"},[a("span",[e._v("My Internship is with an investment house in Dar es Salaam called "),a("b",[e._v("Vertex Capital Limited.")])])]),a("br"),a("br"),a("h3",{staticClass:"column-text light"},[a("span",[e._v("Vertex was looking into expanding themselves in various tech industries as well as cementing themselves digitally with websites to advertise themselves . I was brought in as a software engineer intern to start this process and the creation of their digital representation.")])]),a("br"),a("br"),a("h3",{staticClass:"column-text light"},[e._v("I accepted the offer with Vertex Capital Limited due to not only seeing the potential in Vertex Capital Limited as a business but also for the impact it has in my community due to the fact that multiple of the businesses supported by Vertex improve or supply exclusively to the local communities and neighbouring countries.")]),a("br"),a("br"),a("h3",{staticClass:"column-text light"},[e._v("I also believed that I needed to work with a relatively young company to understand the struggles such companies go through as it is important to have a wide and diverse variety of perspective to ensure that all future software that I create accurately solves problems for companies of all shapes and sizes.")])])]),a("div",{staticClass:"parallax parallax-screen meditation-hero",staticStyle:{"background-position":"initial"}},[a("div",{staticClass:"li-header"},[a("h1",{staticClass:"li-header-text",staticStyle:{"font-family":"Quattrocento","text-shadow":"1px 1px 3px #222222"}},[e._v("Post-Internship Reflection")]),a("hr",{staticClass:"smaller"}),a("h3",{staticClass:"column-text light"},[a("span",[e._v("Upon reflecting on my internship I think it was a success, reason being that my managers were impressed and I also manage to sink myself deeper into Vue.js which I used with all my VCL projects allowing me to further solidify my understand of both javascript and at least one of it's frameworks.")])]),a("br"),a("br"),a("h3",{staticClass:"column-text light"},[e._v("However due to my role and the nature of the company with being self funded , I didn't manage to do much networking and to get my name out there to other potential future employers or just to form conenctions iwth other developers for future projects or quesitons.")])])])])}]};var d=i("VU/8")({name:"HomePage",data:function(){return{}},components:{},methods:{}},c,!1,function(e){i("V+er")},"data-v-c6f3afb8",null).exports,m=i("bm7V"),p=i.n(m),v={name:"NewsRoom",data:function(){return{currentArticle:{title:"",date:"",article:"",index:null},isScrollable:!1,news:[{title:"Vertex Capital Limited acquired Blue Vessel Freighters",date:"   2016",snippet:"VCL acquired BVF in 2016, the primary activities of this company is providing clearing and forwarding services to a vast customer base in the land locked countries that depend of the Dar es Salaam port for imports. ",article:"<div><p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget fringilla erat. Quisque ultricies urna eget elit molestie, vel laoreet turpis tempus. Donec ultrices diam justo, eget venenatis purus mollis a. Fusce pulvinar dolor in rhoncus efficitur. Sed ut ligula nec orci suscipit malesuada vel id tellus. Donec eros dolor, posuere in convallis ut, porttitor eu lectus. Sed a leo venenatis, porta dolor a, rhoncus eros. Sed facilisis nibh nisi, quis vulputate risus dapibus ac.</p> <p> Nam ultrices faucibus nisl, ut porttitor justo tincidunt vitae. Morbi non sapien vehicula, pellentesque ligula et, ornare leo. Vestibulum in mauris vitae quam dictum tincidunt ac ullamcorper dolor. Quisque lorem ligula, rhoncus a ante at, suscipit malesuada urna. Integer augue sem, lobortis ut lectus id, viverra euismod libero. Sed molestie lacus dui, eu finibus massa pharetra eget. Suspendisse euismod elementum est, ut iaculis metus tristique eu. Aenean convallis enim ex, auctor pharetra arcu pretium sit amet. Donec tempus diam sit amet metus ornare, vitae tempor dolor tempor. Sed quis pharetra tellus, sed vulputate metus. Cras malesuada suscipit mollis</p><p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget fringilla erat. Quisque ultricies urna eget elit molestie, vel laoreet turpis tempus. Donec ultrices diam justo, eget venenatis purus mollis a. Fusce pulvinar dolor in rhoncus efficitur. Sed ut ligula nec orci suscipit malesuada vel id tellus. Donec eros dolor, posuere in convallis ut, porttitor eu lectus. Sed a leo venenatis, porta dolor a, rhoncus eros. Sed facilisis nibh nisi, quis vulputate risus dapibus ac.</p> <p> Nam ultrices faucibus nisl, ut porttitor justo tincidunt vitae. Morbi non sapien vehicula, pellentesque ligula et, ornare leo. Vestibulum in mauris vitae quam dictum tincidunt ac ullamcorper dolor. Quisque lorem ligula, rhoncus a ante at, suscipit malesuada urna. Integer augue sem, lobortis ut lectus id, viverra euismod libero. Sed molestie lacus dui, eu finibus massa pharetra eget. Suspendisse euismod elementum est, ut iaculis metus tristique eu. Aenean convallis enim ex, auctor pharetra arcu pretium sit amet. Donec tempus diam sit amet metus ornare, vitae tempor dolor tempor. Sed quis pharetra tellus, sed vulputate metus. Cras malesuada suscipit mollis</p></div>"},{title:"Vertex Capital Limited acquired Kemondo Bottlers a.k.a NK Bottlers",date:"2009",snippet:"VCL acquired Kemondo Bottlers Ltd in 2009 and changed its name to N K Bottlers Ltd. Located in the Tanzanian north-western region of Kagera, NK Bottlers principle activity is purifying an packaging natural spring bottled water and a variety of flavoured carbonated soft drinks trading under the name ASILA. ",article:"<div><p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget fringilla erat. Quisque ultricies urna eget elit molestie, vel laoreet turpis tempus. Donec ultrices diam justo, eget venenatis purus mollis a. Fusce pulvinar dolor in rhoncus efficitur. Sed ut ligula nec orci suscipit malesuada vel id tellus. Donec eros dolor, posuere in convallis ut, porttitor eu lectus. Sed a leo venenatis, porta dolor a, rhoncus eros. Sed facilisis nibh nisi, quis vulputate risus dapibus ac.</p> <p> Nam ultrices faucibus nisl, ut porttitor justo tincidunt vitae. Morbi non sapien vehicula, pellentesque ligula et, ornare leo. Vestibulum in mauris vitae quam dictum tincidunt ac ullamcorper dolor. Quisque lorem ligula, rhoncus a ante at, suscipit malesuada urna. Integer augue sem, lobortis ut lectus id, viverra euismod libero. Sed molestie lacus dui, eu finibus massa pharetra eget. Suspendisse euismod elementum est, ut iaculis metus tristique eu. Aenean convallis enim ex, auctor pharetra arcu pretium sit amet. Donec tempus diam sit amet metus ornare, vitae tempor dolor tempor. Sed quis pharetra tellus, sed vulputate metus. Cras malesuada suscipit mollis</p></div>"},{title:"Vertex Capital Limited acquired OM - Agro (T) Ltd ",date:"n/a",snippet:"VCL provided debt financing and later acquired majority share stake in OM – Agro (T) Ltd which primarily deals with the purchase and trade of agricultural commodities.  ",article:"<div><p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget fringilla erat. Quisque ultricies urna eget elit molestie, vel laoreet turpis tempus. Donec ultrices diam justo, eget venenatis purus mollis a. Fusce pulvinar dolor in rhoncus efficitur. Sed ut ligula nec orci suscipit malesuada vel id tellus. Donec eros dolor, posuere in convallis ut, porttitor eu lectus. Sed a leo venenatis, porta dolor a, rhoncus eros. Sed facilisis nibh nisi, quis vulputate risus dapibus ac.</p> <p> Nam ultrices faucibus nisl, ut porttitor justo tincidunt vitae. Morbi non sapien vehicula, pellentesque ligula et, ornare leo. Vestibulum in mauris vitae quam dictum tincidunt ac ullamcorper dolor. Quisque lorem ligula, rhoncus a ante at, suscipit malesuada urna. Integer augue sem, lobortis ut lectus id, viverra euismod libero. Sed molestie lacus dui, eu finibus massa pharetra eget. Suspendisse euismod elementum est, ut iaculis metus tristique eu. Aenean convallis enim ex, auctor pharetra arcu pretium sit amet. Donec tempus diam sit amet metus ornare, vitae tempor dolor tempor. Sed quis pharetra tellus, sed vulputate metus. Cras malesuada suscipit mollis</p></div>"},{title:"Vertex Capital Limited acquired Tangulf Nakatuta Energy Company Limited ",date:"n/a",snippet:"With the drive to promote sustainability, VCL debt financed and later acquired the majority share stake in TANECO. TANECO is an independent power producer, this is a 10MW hydro power plant located in the Southern Tanzanian region of Songea. TANECO will supply its power onto the national grid under a Special Power Purchase Agreement with Tanzania Electric Supply Company Ltd (TANESCO). ",article:"<div><p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget fringilla erat. Quisque ultricies urna eget elit molestie, vel laoreet turpis tempus. Donec ultrices diam justo, eget venenatis purus mollis a. Fusce pulvinar dolor in rhoncus efficitur. Sed ut ligula nec orci suscipit malesuada vel id tellus. Donec eros dolor, posuere in convallis ut, porttitor eu lectus. Sed a leo venenatis, porta dolor a, rhoncus eros. Sed facilisis nibh nisi, quis vulputate risus dapibus ac.</p> <p> Nam ultrices faucibus nisl, ut porttitor justo tincidunt vitae. Morbi non sapien vehicula, pellentesque ligula et, ornare leo. Vestibulum in mauris vitae quam dictum tincidunt ac ullamcorper dolor. Quisque lorem ligula, rhoncus a ante at, suscipit malesuada urna. Integer augue sem, lobortis ut lectus id, viverra euismod libero. Sed molestie lacus dui, eu finibus massa pharetra eget. Suspendisse euismod elementum est, ut iaculis metus tristique eu. Aenean convallis enim ex, auctor pharetra arcu pretium sit amet. Donec tempus diam sit amet metus ornare, vitae tempor dolor tempor. Sed quis pharetra tellus, sed vulputate metus. Cras malesuada suscipit mollis</p></div>"},{title:"Vertex Capital Limited acquired Flying Bird Tours ",date:"n/a",snippet:"In a JV structure, FB primary activities is transportation and logistics services. FB executes staff transportation contracts with a number of companies in Tanzania, and opearates a logistics wing that deals in the transportation of transit containers destined for clients to neighbouring countries. ",article:"<div><p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget fringilla erat. Quisque ultricies urna eget elit molestie, vel laoreet turpis tempus. Donec ultrices diam justo, eget venenatis purus mollis a. Fusce pulvinar dolor in rhoncus efficitur. Sed ut ligula nec orci suscipit malesuada vel id tellus. Donec eros dolor, posuere in convallis ut, porttitor eu lectus. Sed a leo venenatis, porta dolor a, rhoncus eros. Sed facilisis nibh nisi, quis vulputate risus dapibus ac.</p> <p> Nam ultrices faucibus nisl, ut porttitor justo tincidunt vitae. Morbi non sapien vehicula, pellentesque ligula et, ornare leo. Vestibulum in mauris vitae quam dictum tincidunt ac ullamcorper dolor. Quisque lorem ligula, rhoncus a ante at, suscipit malesuada urna. Integer augue sem, lobortis ut lectus id, viverra euismod libero. Sed molestie lacus dui, eu finibus massa pharetra eget. Suspendisse euismod elementum est, ut iaculis metus tristique eu. Aenean convallis enim ex, auctor pharetra arcu pretium sit amet. Donec tempus diam sit amet metus ornare, vitae tempor dolor tempor. Sed quis pharetra tellus, sed vulputate metus. Cras malesuada suscipit mollis</p></div>"},{title:"Vertex Capital Limited created Smart Card House ",date:"2002",snippet:"VCL pioneered Smart Card Tanzania Ltd in 2002, having a principle activity of providing IT solutions. Located in the heart of Dar es Salaam, Smart Card House caters to the general public on various IT requirements such as but not limited to, Telecommunications, Internet and all other corporate IT services. ",article:"<div><p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget fringilla erat. Quisque ultricies urna eget elit molestie, vel laoreet turpis tempus. Donec ultrices diam justo, eget venenatis purus mollis a. Fusce pulvinar dolor in rhoncus efficitur. Sed ut ligula nec orci suscipit malesuada vel id tellus. Donec eros dolor, posuere in convallis ut, porttitor eu lectus. Sed a leo venenatis, porta dolor a, rhoncus eros. Sed facilisis nibh nisi, quis vulputate risus dapibus ac.</p> <p> Nam ultrices faucibus nisl, ut porttitor justo tincidunt vitae. Morbi non sapien vehicula, pellentesque ligula et, ornare leo. Vestibulum in mauris vitae quam dictum tincidunt ac ullamcorper dolor. Quisque lorem ligula, rhoncus a ante at, suscipit malesuada urna. Integer augue sem, lobortis ut lectus id, viverra euismod libero. Sed molestie lacus dui, eu finibus massa pharetra eget. Suspendisse euismod elementum est, ut iaculis metus tristique eu. Aenean convallis enim ex, auctor pharetra arcu pretium sit amet. Donec tempus diam sit amet metus ornare, vitae tempor dolor tempor. Sed quis pharetra tellus, sed vulputate metus. Cras malesuada suscipit mollis</p></div>"},{title:"Vertex Capital Limited created Busecom ",date:"2002",snippet:"VCL pioneered busecom in 2002, the primary activities being the supply of sufficient labour force to perform the stuffing and de-stuffing of containerized items at warehouses across the country",article:"<div><p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget fringilla erat. Quisque ultricies urna eget elit molestie, vel laoreet turpis tempus. Donec ultrices diam justo, eget venenatis purus mollis a. Fusce pulvinar dolor in rhoncus efficitur. Sed ut ligula nec orci suscipit malesuada vel id tellus. Donec eros dolor, posuere in convallis ut, porttitor eu lectus. Sed a leo venenatis, porta dolor a, rhoncus eros. Sed facilisis nibh nisi, quis vulputate risus dapibus ac.</p> <p> Nam ultrices faucibus nisl, ut porttitor justo tincidunt vitae. Morbi non sapien vehicula, pellentesque ligula et, ornare leo. Vestibulum in mauris vitae quam dictum tincidunt ac ullamcorper dolor. Quisque lorem ligula, rhoncus a ante at, suscipit malesuada urna. Integer augue sem, lobortis ut lectus id, viverra euismod libero. Sed molestie lacus dui, eu finibus massa pharetra eget. Suspendisse euismod elementum est, ut iaculis metus tristique eu. Aenean convallis enim ex, auctor pharetra arcu pretium sit amet. Donec tempus diam sit amet metus ornare, vitae tempor dolor tempor. Sed quis pharetra tellus, sed vulputate metus. Cras malesuada suscipit mollis</p></div>"},{title:"Vertex Capital Limited bought majority share stake Harbours Investment Ltd ",date:"n/a",snippet:"HIL is a holding company that VCL has a majority share stake. The principle activities being a port concession for container handling at the Port of Dar es Salaam, trading under the company known as Tanzania International Container Terminal Services (TICTS).  ",article:"<div><p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget fringilla erat. Quisque ultricies urna eget elit molestie, vel laoreet turpis tempus. Donec ultrices diam justo, eget venenatis purus mollis a. Fusce pulvinar dolor in rhoncus efficitur. Sed ut ligula nec orci suscipit malesuada vel id tellus. Donec eros dolor, posuere in convallis ut, porttitor eu lectus. Sed a leo venenatis, porta dolor a, rhoncus eros. Sed facilisis nibh nisi, quis vulputate risus dapibus ac.</p> <p> Nam ultrices faucibus nisl, ut porttitor justo tincidunt vitae. Morbi non sapien vehicula, pellentesque ligula et, ornare leo. Vestibulum in mauris vitae quam dictum tincidunt ac ullamcorper dolor. Quisque lorem ligula, rhoncus a ante at, suscipit malesuada urna. Integer augue sem, lobortis ut lectus id, viverra euismod libero. Sed molestie lacus dui, eu finibus massa pharetra eget. Suspendisse euismod elementum est, ut iaculis metus tristique eu. Aenean convallis enim ex, auctor pharetra arcu pretium sit amet. Donec tempus diam sit amet metus ornare, vitae tempor dolor tempor. Sed quis pharetra tellus, sed vulputate metus. Cras malesuada suscipit mollis</p></div>"},{title:"Vertex Capital Limited created Tanzania Microfinance Ltd ",date:"n/a",snippet:"VCL pioneered Tanzania Microfinance Ltd, located in the Dar es Salaam CBD area, the company provides micro loans to civil servants and employees working for large established organizations at a competitive market interest rate. ",article:"<div><p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget fringilla erat. Quisque ultricies urna eget elit molestie, vel laoreet turpis tempus. Donec ultrices diam justo, eget venenatis purus mollis a. Fusce pulvinar dolor in rhoncus efficitur. Sed ut ligula nec orci suscipit malesuada vel id tellus. Donec eros dolor, posuere in convallis ut, porttitor eu lectus. Sed a leo venenatis, porta dolor a, rhoncus eros. Sed facilisis nibh nisi, quis vulputate risus dapibus ac.</p> <p> Nam ultrices faucibus nisl, ut porttitor justo tincidunt vitae. Morbi non sapien vehicula, pellentesque ligula et, ornare leo. Vestibulum in mauris vitae quam dictum tincidunt ac ullamcorper dolor. Quisque lorem ligula, rhoncus a ante at, suscipit malesuada urna. Integer augue sem, lobortis ut lectus id, viverra euismod libero. Sed molestie lacus dui, eu finibus massa pharetra eget. Suspendisse euismod elementum est, ut iaculis metus tristique eu. Aenean convallis enim ex, auctor pharetra arcu pretium sit amet. Donec tempus diam sit amet metus ornare, vitae tempor dolor tempor. Sed quis pharetra tellus, sed vulputate metus. Cras malesuada suscipit mollis</p></div>"},{title:"Vertex Capital Limited acquired International Refractory Services",date:"2009",snippet:"We offer fully integrated refractory maintenance services to clients in Cement. Lime, Iron and many more.",article:"<div><p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget fringilla erat. Quisque ultricies urna eget elit molestie, vel laoreet turpis tempus. Donec ultrices diam justo, eget venenatis purus mollis a. Fusce pulvinar dolor in rhoncus efficitur. Sed ut ligula nec orci suscipit malesuada vel id tellus. Donec eros dolor, posuere in convallis ut, porttitor eu lectus. Sed a leo venenatis, porta dolor a, rhoncus eros. Sed facilisis nibh nisi, quis vulputate risus dapibus ac.</p> <p> Nam ultrices faucibus nisl, ut porttitor justo tincidunt vitae. Morbi non sapien vehicula, pellentesque ligula et, ornare leo. Vestibulum in mauris vitae quam dictum tincidunt ac ullamcorper dolor. Quisque lorem ligula, rhoncus a ante at, suscipit malesuada urna. Integer augue sem, lobortis ut lectus id, viverra euismod libero. Sed molestie lacus dui, eu finibus massa pharetra eget. Suspendisse euismod elementum est, ut iaculis metus tristique eu. Aenean convallis enim ex, auctor pharetra arcu pretium sit amet. Donec tempus diam sit amet metus ornare, vitae tempor dolor tempor. Sed quis pharetra tellus, sed vulputate metus. Cras malesuada suscipit mollis</p></div>"}]}},methods:{getArticle:function(e){var t=this;this.setArticle(this.news[e],e),this.isActive=!0,setTimeout(function(){t.ScrollToArticle()},1),setTimeout(function(){t.isScrollable=!0},1e3)},setArticle:function(e,t){this.currentArticle.title=e.title,this.currentArticle.article=e.article,this.currentArticle.date=e.date,this.currentArticle.index=t},ScrollToArticle:function(){p.a.scrollTo("#article_header")},clearCurrentArticle:function(){var e=this;this.isScrollable=!1,this.isActive=!1,setTimeout(function(){e.currentArticle={title:"",date:"",article:"",index:null}},1e3)}}},h={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticStyle:{margin:"auto"}},[e._m(0),i("div",{staticClass:"hero",staticStyle:{background:"#ffffffde",padding:"2em 0"}},[i("div",{staticClass:"row"},[i("div",{staticClass:"columns"},[i("div",{staticClass:"column is-6",staticStyle:{margin:"auto",overflow:"auto",height:"44em"}},[i("ul",e._l(e.news,function(t,a){return i("div",{staticClass:"card",staticStyle:{padding:"0.5rem","margin-bottom":"1rem"}},[i("div",{staticClass:"card-content"},[i("div",{staticClass:"content"},[i("li",{staticClass:"news-item"},[i("a",{staticClass:"news-header",on:{click:function(t){e.getArticle(a)}}},[e._v(e._s(t.title))]),i("p",{staticClass:"news-snippet"},[e._v(e._s(t.snippet))]),i("br"),i("p",{staticClass:"news-date"},[e._v("Acquirement / Creation Year: "+e._s(t.date))])])])])])}))])])])])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"hero"},[t("div",{staticClass:"parallax parallax-hero"},[t("p",[this._v("About "),t("em",[this._v("Vertex Capital Limited")])])])])}]};var g=i("VU/8")(v,h,!1,function(e){i("ZEoH"),i("qdNR")},"data-v-68b5f128",null).exports,f={name:"Where",data:function(){return{}},created:function(){window.innerWidth<=768&&(this.mobile=!0),console.log(this.mobile)}},b={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticStyle:{margin:"auto",background:"#e5e3df"}},[t("div",{staticClass:"hero"}),t("iframe",{attrs:{src:"https://www.google.com/maps/d/embed?mid=1Y9_cPKP4FmtRprSQnvF5v5V_pxEntajJ&hl=en",width:"1920",height:"1080"}})])}]};var C=i("VU/8")(f,b,!1,function(e){i("ZC7s")},"data-v-144fa741",null).exports,S={render:function(){var e=this.$createElement;return(this._self._c||e)("p",[this._v("About Oreo")])},staticRenderFns:[]};var w=i("VU/8")({name:"About Oreo",data:function(){return{}},methods:{}},S,!1,function(e){i("Ra1P")},"data-v-3be68b58",null).exports;a.a.use(n.a);var q=new n.a({routes:[{path:"/",name:"Home",component:d},{path:"/NewsRoom",name:"NewsRoom",component:g},{path:"/Where",name:"Where",component:C},{path:"/AboutMe",name:"Me",component:w}],mode:"history"});a.a.config.productionTip=!1,new a.a({el:"#app",router:q,components:{App:u},template:"<App/>"})},RLWp:function(e,t){},Ra1P:function(e,t){},"V+er":function(e,t){},ZC7s:function(e,t){},ZEoH:function(e,t){},bOlF:function(e,t){},qdNR:function(e,t){},s3Yc:function(e,t,i){e.exports=i.p+"static/img/nyan.f339afd.gif"}},["NHnr"]);
//# sourceMappingURL=app.73c67034391e06972db6.js.map