(this.webpackJsonpconfusion=this.webpackJsonpconfusion||[]).push([[0],{38:function(e,a,t){e.exports=t(60)},46:function(e,a,t){},47:function(e,a,t){},60:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(13),i=t.n(r),s=(t(43),t(44),t(45),t(46),t(14)),c=t(15),o=t(17),m=t(16),u=(t(47),t(12)),d=t(7),h=t(61),E=t(62),f=t(63),g=t(64),p=t(65),b=t(66),v=t(67),y=t(68),N=t(88),w=t(69),k=t(70),C=t(71),I=t(72),O=t(73),j=t(74),F=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this)).state={isNavOpen:!1,isModalOpen:!1},n.toggleNav=n.toggleNav.bind(Object(u.a)(n)),n.toggleModal=n.toggleModal.bind(Object(u.a)(n)),n.handleLogin=n.handleLogin.bind(Object(u.a)(n)),n}return Object(c.a)(t,[{key:"toggleNav",value:function(){this.setState({isNavOpen:!this.state.isNavOpen})}},{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"handleLogin",value:function(e){this.toggleModal(),alert("Username: "+this.username.value+" Password: "+this.password.value+" Remember Me: "+this.remember.checked),e.preventDefault()}},{key:"render",value:function(){var e=this;return l.a.createElement(l.a.Fragment,null,l.a.createElement(h.a,{dark:!0,expand:"md"},l.a.createElement("div",{className:"container"},l.a.createElement(E.a,{onClick:this.toggleNav}),l.a.createElement(f.a,{className:"mr-auto",href:"/"},l.a.createElement("img",{src:"assets/images/logo.png",height:"30",width:"41",alt:"Ristorante Con Fusion"})),l.a.createElement(g.a,{isOpen:this.state.isNavOpen,navbar:!0},l.a.createElement(p.a,{navbar:!0},l.a.createElement(b.a,null,l.a.createElement(d.c,{className:"nav-link",to:"/home"},l.a.createElement("span",{className:"fa fa-home fa-lg"})," Home")),l.a.createElement(b.a,null,l.a.createElement(d.c,{className:"nav-link",to:"/aboutus"},l.a.createElement("span",{className:"fa fa-info fa-lg"})," About Us")),l.a.createElement(b.a,null,l.a.createElement(d.c,{className:"nav-link",to:"/menu"},l.a.createElement("span",{className:"fa fa-list fa-lg"})," Menu")),l.a.createElement(b.a,null,l.a.createElement(d.c,{className:"nav-link",to:"/contactus"},l.a.createElement("span",{className:"fa fa-address-card fa-lg"})," Contact Us"))),l.a.createElement(p.a,{className:"ml-auto",navbar:!0},l.a.createElement(b.a,null,l.a.createElement(v.a,{outline:!0,onClick:this.toggleModal},l.a.createElement("span",{className:"fa fa-sign-in fa-lg"})," Login")))))),l.a.createElement(y.a,null,l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row row-header"},l.a.createElement("div",{className:"col-12 col-sm-6"},l.a.createElement("h1",null,"Ristorante Con Fusion"),l.a.createElement("p",null,"We take inspiration deom the world's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!!!"))))),l.a.createElement(N.a,{isOpen:this.state.isModalOpen,toggle:this.toggleModal},l.a.createElement(w.a,{toggle:this.toggleModal},"Login"),l.a.createElement(k.a,null,l.a.createElement(C.a,{onSubmit:this.handleLogin},l.a.createElement(I.a,null,l.a.createElement(O.a,{htmlFor:"username"},"Username"),l.a.createElement(j.a,{type:"text",id:"username",name:"username",innerRef:function(a){return e.username=a}})),l.a.createElement(I.a,null,l.a.createElement(O.a,{htmlFor:"password"},"Password"),l.a.createElement(j.a,{type:"password",id:"password",name:"password",innerRef:function(a){return e.password=a}})),l.a.createElement(I.a,{check:!0},l.a.createElement(O.a,{check:!0},l.a.createElement(j.a,{type:"checkbox",name:"remember",innerRef:function(a){return e.remember=a}})," "," Remember me")),l.a.createElement(v.a,{type:"submit",value:"submit",className:"primary"},"Login")))))}}]),t}(l.a.Component);var T=function(e){return l.a.createElement("div",{className:"footer"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row justify-content-center"},l.a.createElement("div",{className:"col-4 offset-1 col-sm-2"},l.a.createElement("h5",null,"Links"),l.a.createElement("ul",{className:"list-unstyled"},l.a.createElement("li",null,l.a.createElement(d.b,{to:"/home"},"Home")),l.a.createElement("li",null,l.a.createElement(d.b,{to:"/aboutus"},"About Us")),l.a.createElement("li",null,l.a.createElement(d.b,{to:"/menu"},"Menu")),l.a.createElement("li",null,l.a.createElement(d.b,{to:"/contactus"},"Contact Us")))),l.a.createElement("div",{className:"col-7 col-sm-5"},l.a.createElement("h5",null,"Our Address"),l.a.createElement("address",null,"121, Clear Water Bay Road",l.a.createElement("br",null),"Clear Water Bay, Kowloon",l.a.createElement("br",null),"HONG KONG",l.a.createElement("br",null),l.a.createElement("i",{className:"fa fa-phone fa-lg"}),": +852 1234 5678",l.a.createElement("br",null),l.a.createElement("i",{className:"fa fa-fax fa-lg"}),": +852 8765 4321",l.a.createElement("br",null),l.a.createElement("i",{className:"fa fa-envelope fa-lg"}),": ",l.a.createElement("a",{href:"mailto:confusion@food.net"},"confusion@food.net"))),l.a.createElement("div",{className:"col-12 col-sm-4 align-self-center"},l.a.createElement("div",{className:"text-center"},l.a.createElement("a",{className:"btn btn-social-icon btn-google",href:"http://google.com/+"},l.a.createElement("i",{className:"fa fa-google-plus"})),l.a.createElement("a",{className:"btn btn-social-icon btn-facebook",href:"http://www.facebook.com/profile.php?id="},l.a.createElement("i",{className:"fa fa-facebook"})),l.a.createElement("a",{className:"btn btn-social-icon btn-linkedin",href:"http://www.linkedin.com/in/"},l.a.createElement("i",{className:"fa fa-linkedin"})),l.a.createElement("a",{className:"btn btn-social-icon btn-twitter",href:"http://twitter.com/"},l.a.createElement("i",{className:"fa fa-twitter"})),l.a.createElement("a",{className:"btn btn-social-icon btn-google",href:"http://youtube.com/"},l.a.createElement("i",{className:"fa fa-youtube"})),l.a.createElement("a",{className:"btn btn-social-icon",href:"mailto:"},l.a.createElement("i",{className:"fa fa-envelope-o"}))))),l.a.createElement("div",{className:"row justify-content-center"},l.a.createElement("div",{className:"col-auto"},l.a.createElement("p",null,"\xa9 Copyright 2018 Ristorante Con Fusion")))))},M=t(75),S=t(76),x=t(77),B=t(78),Z=t(79),A=t(80);function z(e){var a=e.item;return l.a.createElement(M.a,null,l.a.createElement(S.a,{src:a.image,alt:a.name}),l.a.createElement(x.a,null,l.a.createElement(B.a,null,l.a.createElement("h4",null,a.name)),a.designation?l.a.createElement(Z.a,null,l.a.createElement("h6",null,a.designation)):null,l.a.createElement(A.a,null,a.description)))}var L=function(e){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row align-items-start"},l.a.createElement("div",{className:"col-12 col-md m-1"},l.a.createElement(z,{item:e.dish})),l.a.createElement("div",{className:"col-12 col-md m-1"},l.a.createElement(z,{item:e.promotion})),l.a.createElement("div",{className:"col-12 col-md m-1"},l.a.createElement(z,{item:e.leader}))))},P=t(81),R=t(82),H=t(83);function U(e){var a=e.dish;return l.a.createElement(M.a,null,l.a.createElement(d.b,{to:"/menu/".concat(a.id)},l.a.createElement(S.a,{width:"100%",src:a.image,alt:a.name}),l.a.createElement(P.a,null,l.a.createElement(B.a,null,l.a.createElement("h4",null,a.name)))))}var J=function(e){var a=e.dishes.map((function(e){return l.a.createElement("div",{key:e.id,className:"col-12 col-md-5 m-1"},l.a.createElement(U,{dish:e}))}));return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement(R.a,null,l.a.createElement(H.a,null,l.a.createElement(d.b,{to:"/home"},"Home")),l.a.createElement(H.a,{active:"true"},"Menu")),l.a.createElement("div",{className:"col-12"},l.a.createElement("h3",null,"Menu"))),l.a.createElement("div",{className:"row"},a))},W=t(22),D=t(29),q=t(84),G=t(85),K=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this)).handleBlur=function(e){return function(a){n.setState({touched:Object(D.a)(Object(D.a)({},n.state.touched),{},Object(W.a)({},e,!0))})}},n.state={firstname:"",lastname:"",telnum:"",email:"",agree:!1,contactType:"Tel.",message:"",touched:{firstname:!1,lastname:!1,telnum:!1,email:!1}},n.handleSubmit=n.handleSubmit.bind(Object(u.a)(n)),n.handleInputChange=n.handleInputChange.bind(Object(u.a)(n)),n.handleBlur=n.handleBlur.bind(Object(u.a)(n)),n}return Object(c.a)(t,[{key:"handleInputChange",value:function(e){var a=e.target,t="checkbox"===a.type?a.checked:a.value,n=a.name;this.setState(Object(W.a)({},n,t))}},{key:"handleSubmit",value:function(e){console.log("Current state : "+JSON.stringify(this.state)),alert("Current state : "+JSON.stringify(this.state)),e.preventDefault()}},{key:"validate",value:function(e,a,t,n){var l={firstname:"",lastname:"",telnum:"",email:""};this.state.touched.firstname&&e.length<3?l.firstname="First Name should be greater than 3 characters":e.length>10&&(l.firstname="First Name cannot be greater than 10 characters"),this.state.touched.lastname&&a.length<3?l.lastname="Last Name should be greater than 3 characters":a.length>10&&(l.lastname="Last Name cannot be greater than 10 characters");return this.state.touched.telnum&&!/^\d+$/.test(t)&&(l.telnum="Please enter only numbers"),this.state.touched.email&&1!==n.split("").filter((function(e){return"@"===e})).length&&(l.email="Please enter a valid email"),l}},{key:"render",value:function(){var e=this.validate(this.state.firstname,this.state.lastname,this.state.telnum,this.state.email);return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement(R.a,null,l.a.createElement(H.a,null,l.a.createElement(d.b,{to:"/home"},"Home")),l.a.createElement(H.a,{active:!0},"Contact Us")),l.a.createElement("div",{className:"col-12"},l.a.createElement("h3",null,"Menu"))),l.a.createElement("div",{className:"row row-content"},l.a.createElement("div",{className:"col-12"},l.a.createElement("h3",null,"Location Information")),l.a.createElement("div",{className:"col-12 col-sm-4 offset-sm-1"},l.a.createElement("h5",null,"Our Address"),l.a.createElement("address",null,"121, Clear Water Bay Road",l.a.createElement("br",null),"Clear Water Bay, Kowloon",l.a.createElement("br",null),"HONG KONG",l.a.createElement("br",null),l.a.createElement("i",{className:"fa fa-phone"}),": +852 1234 5678",l.a.createElement("br",null),l.a.createElement("i",{className:"fa fa-fax"}),": +852 8765 4321",l.a.createElement("br",null),l.a.createElement("i",{className:"fa fa-envelope"}),": ",l.a.createElement("a",{href:"mailto:confusion@food.net"},"confusion@food.net"))),l.a.createElement("div",{className:"col-12 col-sm-6 offset-sm-1"},l.a.createElement("h5",null,"Map of our Location")),l.a.createElement("div",{className:"col-12 col-sm-11 offset-sm-1"},l.a.createElement("div",{className:"btn-group",role:"group"},l.a.createElement("a",{role:"button",className:"btn btn-primary",href:"tel:+85212345678"},l.a.createElement("i",{className:"fa fa-phone"})," Call"),l.a.createElement("a",{role:"button",className:"btn btn-info",href:"/"},l.a.createElement("i",{className:"fa fa-skype"})," Skype"),l.a.createElement("a",{role:"button",className:"btn btn-success",href:"mailto:confusion@food.net"},l.a.createElement("i",{className:"fa fa-envelope-o"})," Email")))),l.a.createElement("div",{className:"row row-content"},l.a.createElement("div",{className:"col-12"},l.a.createElement("h3",null,"Send us your feedback")),l.a.createElement("div",{className:"col-12 col-md-9"},l.a.createElement(C.a,{onSubmit:this.handleSubmit},l.a.createElement(I.a,{row:!0},l.a.createElement(O.a,{htmlFor:"firstname",md:2},"First Name"),l.a.createElement(q.a,null,l.a.createElement(j.a,{type:"text",id:"firstname",name:"firstname",placeholder:"Enter your first name",value:this.state.firstname,onChange:this.handleInputChange,valid:""===e.firstname,invalid:""!==e.firstname,onBlur:this.handleBlur("firstname")}),l.a.createElement(G.a,null,e.firstname))),l.a.createElement(I.a,{row:!0},l.a.createElement(O.a,{htmlFor:"lastname",md:2},"Last Name"),l.a.createElement(q.a,null,l.a.createElement(j.a,{type:"text",id:"lastname",name:"lastname",placeholder:"Enter your last name",value:this.state.lastname,onChange:this.handleInputChange,valid:""===e.lastname,invalid:""!==e.lastname,onBlur:this.handleBlur("lastname")}),l.a.createElement(G.a,null,e.lastname))),l.a.createElement(I.a,{row:!0},l.a.createElement(O.a,{htmlFor:"telnum",md:2},"Contact Tel."),l.a.createElement(q.a,null,l.a.createElement(j.a,{type:"tel",id:"telnum",name:"telnum",placeholder:"Enter your telephone number",value:this.state.telnum,onChange:this.handleInputChange,valid:""===e.telnum,invalid:""!==e.telnum,onBlur:this.handleBlur("telnum")}),l.a.createElement(G.a,null,e.telnum))),l.a.createElement(I.a,{row:!0},l.a.createElement(O.a,{htmlFor:"email",md:2},"Email"),l.a.createElement(q.a,null,l.a.createElement(j.a,{type:"email",id:"email",name:"email",placeholder:"Enter email",value:this.state.email,onChange:this.handleInputChange,valid:""===e.email,invalid:""!==e.email,onBlur:this.handleBlur("email")}),l.a.createElement(G.a,null,e.email))),l.a.createElement(I.a,{row:!0},l.a.createElement(q.a,{md:{size:6,offset:2}},l.a.createElement(I.a,{check:!0},l.a.createElement(O.a,{check:!0},l.a.createElement(j.a,{type:"checkbox",name:"agree",checked:this.state.agree,onChange:this.handleInputChange})," ",l.a.createElement("strong",null,"May we contact you?")))),l.a.createElement(q.a,{md:{size:3,offset:1}},l.a.createElement(j.a,{type:"select",name:"contectType",value:this.state.contactType,onChange:this.handleInputChange},l.a.createElement("option",null,"Tel."),l.a.createElement("option",null,"Email")))),l.a.createElement(I.a,{row:!0},l.a.createElement(O.a,{htmlFor:"feedback",md:2},"Your Feedback"),l.a.createElement(q.a,null,l.a.createElement(j.a,{type:"textarea",id:"message",name:"message",rows:"12",value:this.state.message,onChange:this.handleInputChange}))),l.a.createElement(I.a,{row:!0},l.a.createElement(q.a,{md:{size:10,offset:2}},l.a.createElement(v.a,{type:"submit",color:"primary"},"Send Feedback")))))))}}]),t}(n.Component);function Y(e){var a=e.dish;return null!==a?l.a.createElement("div",{className:"col-12 col-md-5 m-1"},l.a.createElement(M.a,null,l.a.createElement(S.a,{width:"100%",src:a.image,alt:a.name}),l.a.createElement(x.a,null,l.a.createElement(B.a,null,l.a.createElement("h4",null,a.name)),l.a.createElement(A.a,null,a.description)))):l.a.createElement("div",null)}function V(e){var a=e.comments;return l.a.createElement("div",{className:"col-12 col-md-5 m-1"},l.a.createElement("h4",null,"Comments"),l.a.createElement("ul",{className:"list-unstyled"},a.map((function(e){return l.a.createElement("li",{key:e.id},l.a.createElement("p",null,e.comment),l.a.createElement("p",null,"-- ",e.author,", ",new Intl.DateTimeFormat("en-US",{year:"numeric",month:"short",day:"2-digit"}).format(new Date(Date.parse(e.date)))))}))))}var $=function(e){return console.log(e.dishComponent),null===e.dishComponent||void 0===e.dishComponent?l.a.createElement("div",null):l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement(R.a,null,l.a.createElement(H.a,null,l.a.createElement(d.b,{to:"/menu"},"Menu")),l.a.createElement(H.a,{active:!0},e.dishComponent.name)),l.a.createElement("div",{className:"col-12"},l.a.createElement("h3",null,e.dishComponent.name))),l.a.createElement("h1",null,"Selected Dish"),l.a.createElement("div",{className:"row"},l.a.createElement(Y,{dish:e.dishComponent}),l.a.createElement(V,{comments:e.comments})))},Q=t(86),X=t(87);function _(e){var a=e.leader;return l.a.createElement(Q.a,{className:"col-12 mt-5",tag:"li"},l.a.createElement(Q.a,{left:!0,middle:!0},l.a.createElement(Q.a,{object:!0,src:a.image,alt:a.name})),l.a.createElement(Q.a,{body:!0,className:"ml-5"},l.a.createElement(Q.a,{heading:!0},a.name),l.a.createElement("h6",null,a.designation),l.a.createElement("p",null,a.description)))}var ee=function(e){var a=e.leaders.map((function(e){return l.a.createElement("div",{key:e.id},l.a.createElement(_,{leader:e}))}));return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement(R.a,null,l.a.createElement(H.a,null,l.a.createElement(d.b,{to:"/home"},"Home")),l.a.createElement(H.a,{active:!0},"About Us")),l.a.createElement("div",{className:"col-12"},l.a.createElement("h3",null,"About Us"),l.a.createElement("hr",null))),l.a.createElement("div",{className:"row row-content"},l.a.createElement("div",{className:"col-12 col-md-6"},l.a.createElement("h2",null,"Our History"),l.a.createElement("p",null,"Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us."),l.a.createElement("p",null,"The restaurant traces its humble beginnings to ",l.a.createElement("em",null,"The Frying Pan"),", a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.")),l.a.createElement("div",{className:"col-12 col-md-5"},l.a.createElement(M.a,null,l.a.createElement(X.a,{className:"bg-primary text-white"},"Facts At a Glance"),l.a.createElement(x.a,null,l.a.createElement("dl",{className:"row p-1"},l.a.createElement("dt",{className:"col-6"},"Started"),l.a.createElement("dd",{className:"col-6"},"3 Feb. 2013"),l.a.createElement("dt",{className:"col-6"},"Major Stake Holder"),l.a.createElement("dd",{className:"col-6"},"HK Fine Foods Inc."),l.a.createElement("dt",{className:"col-6"},"Last Year's Turnover"),l.a.createElement("dd",{className:"col-6"},"$1,250,375"),l.a.createElement("dt",{className:"col-6"},"Employees"),l.a.createElement("dd",{className:"col-6"},"40"))))),l.a.createElement("div",{className:"col-12"},l.a.createElement(M.a,null,l.a.createElement(x.a,{className:"bg-faded"},l.a.createElement("blockquote",{className:"blockquote"},l.a.createElement("p",{className:"mb-0"},"You better cut the pizza in four pieces because I'm not hungry enough to eat six."),l.a.createElement("footer",{className:"blockquote-footer"},"Yogi Berra,",l.a.createElement("cite",{title:"Source Title"},"The Wit and Wisdom of Yogi Berra, P. Pepe, Diversion Books, 2014"))))))),l.a.createElement("div",{className:"row row-content"},l.a.createElement("div",{className:"col-12"},l.a.createElement("h2",null,"Corporate Leadership"),l.a.createElement("br",null)),l.a.createElement("div",{className:"col-12"},l.a.createElement(Q.a,{list:!0},a))))},ae=t(8),te=t(25),ne=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(e){return Object(s.a)(this,t),a.call(this)}return Object(c.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement(F,null),l.a.createElement(ae.d,null,l.a.createElement(ae.b,{path:"/home",component:function(){return l.a.createElement(L,{dish:e.props.dishes.filter((function(e){return e.featured}))[0],promotion:e.props.promotions.filter((function(e){return e.featured}))[0],leader:e.props.leaders.filter((function(e){return e.featured}))[0]})}}),l.a.createElement(ae.b,{exact:!0,path:"/menu",component:function(){return l.a.createElement(J,{dishes:e.props.dishes})}}),l.a.createElement(ae.b,{path:"/menu/:dishId",component:function(a){var t=a.match;return l.a.createElement($,{dishComponent:e.props.dishes.filter((function(e){return e.id===parseInt(t.params.dishId,10)}))[0],comments:e.props.comments.filter((function(e){return e.dishId===parseInt(t.params.dishId,10)}))})}}),l.a.createElement(ae.b,{exact:!0,path:"/contactus",component:K}),l.a.createElement(ae.b,{path:"/aboutus",component:function(){return l.a.createElement(ee,{leaders:e.props.leaders})}}),l.a.createElement(ae.a,{to:"/home"})),l.a.createElement(T,null))}}]),t}(l.a.Component),le=Object(ae.g)(Object(te.b)((function(e){return{dishes:e.dishes,comments:e.comments,leaders:e.leaders,promotions:e.promotions}}))(ne)),re=t(24),ie={dishes:[{id:0,name:"Uthappizza",image:"/assets/images/uthappizza.png",category:"mains",label:"Hot",price:"4.99",featured:!0,description:"A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer."},{id:1,name:"Zucchipakoda",image:"/assets/images/zucchipakoda.png",category:"appetizer",label:"",price:"1.99",featured:!1,description:"Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce"},{id:2,name:"Vadonut",image:"/assets/images/vadonut.png",category:"appetizer",label:"New",price:"1.99",featured:!1,description:"A quintessential ConFusion experience, is it a vada or is it a donut?"},{id:3,name:"ElaiCheese Cake",image:"/assets/images/elaicheesecake.png",category:"dessert",label:"",price:"2.99",featured:!1,description:"A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms"}],comments:[{id:0,dishId:0,rating:5,comment:"Imagine all the eatables, living in conFusion!",author:"John Lemon",date:"2012-10-16T17:57:28.556094Z"},{id:1,dishId:0,rating:4,comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",author:"Paul McVites",date:"2014-09-05T17:57:28.556094Z"},{id:2,dishId:0,rating:3,comment:"Eat it, just eat it!",author:"Michael Jaikishan",date:"2015-02-13T17:57:28.556094Z"},{id:3,dishId:0,rating:4,comment:"Ultimate, Reaching for the stars!",author:"Ringo Starry",date:"2013-12-02T17:57:28.556094Z"},{id:4,dishId:0,rating:2,comment:"It's your birthday, we're gonna party!",author:"25 Cent",date:"2011-12-02T17:57:28.556094Z"},{id:5,dishId:1,rating:5,comment:"Imagine all the eatables, living in conFusion!",author:"John Lemon",date:"2012-10-16T17:57:28.556094Z"},{id:6,dishId:1,rating:4,comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",author:"Paul McVites",date:"2014-09-05T17:57:28.556094Z"},{id:7,dishId:1,rating:3,comment:"Eat it, just eat it!",author:"Michael Jaikishan",date:"2015-02-13T17:57:28.556094Z"},{id:8,dishId:1,rating:4,comment:"Ultimate, Reaching for the stars!",author:"Ringo Starry",date:"2013-12-02T17:57:28.556094Z"},{id:9,dishId:1,rating:2,comment:"It's your birthday, we're gonna party!",author:"25 Cent",date:"2011-12-02T17:57:28.556094Z"},{id:10,dishId:2,rating:5,comment:"Imagine all the eatables, living in conFusion!",author:"John Lemon",date:"2012-10-16T17:57:28.556094Z"},{id:11,dishId:2,rating:4,comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",author:"Paul McVites",date:"2014-09-05T17:57:28.556094Z"},{id:12,dishId:2,rating:3,comment:"Eat it, just eat it!",author:"Michael Jaikishan",date:"2015-02-13T17:57:28.556094Z"},{id:13,dishId:2,rating:4,comment:"Ultimate, Reaching for the stars!",author:"Ringo Starry",date:"2013-12-02T17:57:28.556094Z"},{id:14,dishId:2,rating:2,comment:"It's your birthday, we're gonna party!",author:"25 Cent",date:"2011-12-02T17:57:28.556094Z"},{id:15,dishId:3,rating:5,comment:"Imagine all the eatables, living in conFusion!",author:"John Lemon",date:"2012-10-16T17:57:28.556094Z"},{id:16,dishId:3,rating:4,comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",author:"Paul McVites",date:"2014-09-05T17:57:28.556094Z"},{id:17,dishId:3,rating:3,comment:"Eat it, just eat it!",author:"Michael Jaikishan",date:"2015-02-13T17:57:28.556094Z"},{id:18,dishId:3,rating:4,comment:"Ultimate, Reaching for the stars!",author:"Ringo Starry",date:"2013-12-02T17:57:28.556094Z"},{id:19,dishId:3,rating:2,comment:"It's your birthday, we're gonna party!",author:"25 Cent",date:"2011-12-02T17:57:28.556094Z"}],leaders:[{id:0,name:"Peter Pan",image:"/assets/images/alberto.png",designation:"Chief Epicurious Officer",abbr:"CEO",featured:!1,description:"Our CEO, Peter, credits his hardworking East Asian immigrant parents who undertook the arduous journey to the shores of America with the intention of giving their children the best future. His mother's wizardy in the kitchen whipping up the tastiest dishes with whatever is available inexpensively at the supermarket, was his first inspiration to create the fusion cuisines for which The Frying Pan became well known. He brings his zeal for fusion cuisines to this restaurant, pioneering cross-cultural culinary connections."},{id:1,name:"Dhanasekaran Witherspoon",image:"/assets/images/alberto.png",designation:"Chief Food Officer",abbr:"CFO",featured:!1,description:"Our CFO, Danny, as he is affectionately referred to by his colleagues, comes from a long established family tradition in farming and produce. His experiences growing up on a farm in the Australian outback gave him great appreciation for varieties of food sources. As he puts it in his own words, Everything that runs, wins, and everything that stays, pays!"},{id:2,name:"Agumbe Tang",image:"/assets/images/alberto.png",designation:"Chief Taste Officer",abbr:"CTO",featured:!1,description:"Blessed with the most discerning gustatory sense, Agumbe, our CFO, personally ensures that every dish that we serve meets his exacting tastes. Our chefs dread the tongue lashing that ensues if their dish does not meet his exacting standards. He lives by his motto, You click only if you survive my lick."},{id:3,name:"Alberto Somayya",image:"/assets/images/alberto.png",designation:"Executive Chef",abbr:"EC",featured:!0,description:"Award winning three-star Michelin chef with wide International experience having worked closely with whos-who in the culinary world, he specializes in creating mouthwatering Indo-Italian fusion experiences. He says, Put together the cuisines from the two craziest cultures, and you get a winning hit! Amma Mia!"}],promotions:[{id:0,name:"Weekend Grand Buffet",image:"/assets/images/buffet.png",label:"New",price:"19.99",featured:!0,description:"Featuring mouthwatering combinations with a choice of five different salads, six enticing appetizers, six main entrees and five choicest desserts. Free flowing bubbly and soft drinks. All for just $19.99 per person"}]},se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie;return e},ce=Object(re.b)(se,ie),oe=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement(te.a,{store:ce},l.a.createElement(d.a,null,l.a.createElement("div",null,l.a.createElement(le,null))))}}]),t}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(oe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[38,1,2]]]);
//# sourceMappingURL=main.3f30b6f4.chunk.js.map