(this.webpackJsonp=this.webpackJsonp||[]).push([[0],[,,,,,,,,function(e){e.exports=JSON.parse('{"main":{"name":"The Secret Path LLC","occupation":"Project Manager and GWU Full Stack Coding Student","description":"Changing to a Coding Career","image":"Headshot2.jpg","intro":"A woman owned business where the goal is to help small businesses gain online visibility through web presence and marketing skills at little to no cost. It\'s the Secret Path to success for small businesses.","bio":"Welcome to The Secret Path LLC, a woman owned business where the goal is to help small businesses gain online visibility through web presence and marketing skills at little to no cost. The Secret Path LLC knows it is difficult running a business while trying to find time to build an online presence and develop marketing plans for brand growth, especially with everything that is going on nowadays. This is what we offer:","bio2":"It is The Secret Path LLC\u2019s belief that by filling this gap, small businesses can grow to their full potential by creating brand recognition and stakeholder connections. If you think your small business would benefit from having a broader online presence, please select Services to learn how you can connect with us and receive our services for free.","service1":"Website Development, Setup and Training,","service2":"Marketing Basics Training,","service3":"Marketing Plan Development,","service4":"Logo Design.","contactmessage":"Contact info below: ","email":"thesecretpathllc@gmail.com","address":{"city":"Manassas","state":"Northern VA"},"website":"http://www.timbakerdev.com","resumedownload":"images/portfolio/AshlyMayle-TechnicalResume.pdf","social":[{"name":"Other Portfolio","url":"https://radiant-dawn-57014.herokuapp.com/","className":"fa fa-briefcase "},{"name":"github","url":"https://github.com/infiernodeashly","className":"fa fa-github"}]},"resume":{"skillmessage":"Here you can create a short write-up of your skills to show off to employers","education":[{"school":"George Washington University","degree":"Full-Stack Coding Bootcamp","description":"Javascript, Reactjs, jQuery, MongoDB, MySQL, JNode, JSON, AJAX"},{"school":"Bellevue University","degree":"M.S. Computer Information Systems","description":"Focus on Project Management and System Architecture"},{"school":"George Mason University","degree":"B.A. Communication - Public Relations","description":"Focus on Public Relations with Minor in Business"}],"work":[{"company":"Project Management","title":"IT Project Manager","description":"System development Project Management for government clients."},{"company":"Marketing/Logo Design","title":"Outreach Specialists, Communication Specialist, and Marketing Analyst","description":"Marketing, media relations, and outreach strategies creation, along with multimedia development for government clients. Marketing communications, promotional branding, and strategy development for private and nonprofit clients."},{"company":"Web Design","title":"Data Analyst and Full Stack Developer","description":"System development, Website updates, and website user analysis test development and execution for government clients. Develop websites for small businesses."}],"skills":[{"name":"System Development","level":"100%"},{"name":"Project Management","level":"100%"},{"name":"Marketing","level":"100%"},{"name":"Graphic Design","level":"100%"}]},"portfolio":{"projects":[{"title":"Club De Vida Demo","category":"Fitness and Wellness","image":"storefront.jpg","url":"https://infiernodeashly.wixsite.com/clubdevidademo"},{"title":"American Dreaming Farm and Gardens Demo","category":"Produce and Flora","image":"sunflower.jpg","url":"https://infiernodeashly.wixsite.com/adfg-demo"},{"title":"Mulligans Pub on the Green","category":"Restaurant and Golf","image":"mulligans.png","url":"https://mulliganspubonthegreen.godaddysites.com/"}]}}')},function(e,a,t){e.exports=t(16)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(7),s=t.n(r),i=(t(14),t(1)),o=t(2),c=t(4),m=t(3),u=(t(15),function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,a=this.props.data.intro,t=(this.props.data.occupation,this.props.data.description,this.props.data.address.state,this.props.data.social.map((function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url,target:"_blank"},l.a.createElement("i",{className:e.className})))})));return l.a.createElement("header",{id:"home"},l.a.createElement("nav",{id:"nav-wrap"},l.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),l.a.createElement("a",{className:"mobile-btn",href:"#home",title:"Hide navigation"},"Hide navigation"),l.a.createElement("ul",{id:"nav",className:"nav"},l.a.createElement("li",{className:"current"},l.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Resume")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Portfolio")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#contact"},"Contact")))),l.a.createElement("div",{className:"row banner"},l.a.createElement("div",{className:"banner-text"},l.a.createElement("h1",{className:"responsive-headline"},"Welcome to ",l.a.createElement("br",null),e,"."),l.a.createElement("h3",null," ",a," "),l.a.createElement("hr",null),l.a.createElement("ul",{className:"social"},t))),l.a.createElement("p",{className:"scrolldown"},l.a.createElement("a",{className:"smoothscroll",href:"#about"},l.a.createElement("i",{className:"icon-down-circle"}))))}}]),t}(n.Component)),d=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.social.map((function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url,target:"_blank"},l.a.createElement("i",{className:e.className})))}));return l.a.createElement("footer",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("ul",{className:"social-links"},e)),l.a.createElement("div",{id:"go-top"},l.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},l.a.createElement("i",{className:"icon-up-open"})))))}}]),t}(n.Component),p=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,a="images/"+this.props.data.image,t=this.props.data.bio,n=this.props.data.bio2,r=this.props.data.service1,s=this.props.data.service2,i=this.props.data.service3,o=this.props.data.service4,c=(this.props.data.address.street,this.props.data.address.city,this.props.data.address.state),m=(this.props.data.address.zip,this.props.data.phone,this.props.data.email);return l.a.createElement("section",{id:"about"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"three columns"},l.a.createElement("img",{className:"profile-pic",src:a,alt:"Ashly Mayle Profile Pic"})),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("h2",null,"About The Secret Path LLC"),l.a.createElement("p",null,t),l.a.createElement("li",null,r),l.a.createElement("li",null,s),l.a.createElement("li",null,i),l.a.createElement("li",null,o),l.a.createElement("p",null,n),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"columns contact-details"},l.a.createElement("h2",null,"Contact Details"),l.a.createElement("p",{className:"address"},l.a.createElement("span",null,e),l.a.createElement("br",null),l.a.createElement("span",null,c,l.a.createElement("br",null)),l.a.createElement("span",null,m)))))))}}]),t}(n.Component),h=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){if(this.props.data){this.props.data.skillmessage,this.props.data.education.map((function(e){return l.a.createElement("div",{key:e.school},l.a.createElement("h3",null,e.school),l.a.createElement("p",{className:"info"},e.degree," ",l.a.createElement("span",null,"\u2022"),l.a.createElement("em",{className:"date"},e.graduated)),l.a.createElement("p",null,e.description))}));var e=this.props.data.work.map((function(e){return l.a.createElement("div",{key:e.company},l.a.createElement("h3",null,e.company),l.a.createElement("p",{className:"info"},e.title,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.years)),l.a.createElement("p",null,e.description))}));this.props.data.skills.map((function(e){var a="bar-expand "+e.name.toLowerCase();return l.a.createElement("li",{key:e.name},l.a.createElement("span",{style:{width:e.level},className:a}),l.a.createElement("em",null,e.name))}))}return l.a.createElement("section",{id:"resume"},l.a.createElement("div",{className:"row work"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Background"))),l.a.createElement("div",{className:"nine columns main-col"},e)))}}]),t}(n.Component),g=t(5),E=function(e){var a=e.data,t=Object(n.useState)("mailto:thesecretpathllc@gmail.com?subject=subject&body=body"),r=Object(g.a)(t,2),s=(r[0],r[1],Object(n.useState)("")),i=Object(g.a)(s,2),o=i[0],c=i[1],m=Object(n.useState)(""),u=Object(g.a)(m,2),d=u[0],p=u[1],h=Object(n.useState)(""),E=Object(g.a)(h,2),f=E[0],v=E[1],b=Object(n.useState)(""),w=Object(g.a)(b,2),y=w[0],N=w[1];console.log(a);return l.a.createElement("section",{id:"contact"},l.a.createElement("div",{className:"row section-head"},l.a.createElement("div",{className:"two columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Reach Out."))),l.a.createElement("div",{className:"ten columns"},l.a.createElement("p",{className:"lead"},null===a||void 0===a?void 0:a.message))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"eight columns"},l.a.createElement("form",{id:"contactForm",name:"contactForm"},l.a.createElement("fieldset",null,l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"contactName"},"Name ",l.a.createElement("span",{className:"required"},"*")),l.a.createElement("input",{value:o,type:"text",defaultValue:"",size:"35",id:"contactName",name:"contactName",onChange:function(e){return c(e.target.value)}})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"contactEmail"},"Email ",l.a.createElement("span",{className:"required"},"*")),l.a.createElement("input",{value:f,type:"text",defaultValue:"",size:"35",id:"contactEmail",name:"contactEmail",onChange:function(e){return v(e.target.value)}})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"contactSubject"},"Subject ",l.a.createElement("span",{className:"required"},"*")),l.a.createElement("input",{value:d,type:"text",defaultValue:"",size:"35",id:"contactSubject",name:"contactSubject",onChange:function(e){return p(e.target.value)}})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"contactMessage"},"Message ",l.a.createElement("span",{className:"required"},"*")),l.a.createElement("textarea",{value:y,onChange:function(e){return N(e.target.value)},cols:"50",rows:"15",id:"contactMessage",name:"contactMessage"})),l.a.createElement("div",null,l.a.createElement("button",{type:"submit",onClick:function(e){e.preventDefault(),window.open("mailto:".concat(f,"?subject=").concat(d,"&body=").concat(o,": ").concat(y))},className:"submit"},"Submit"),l.a.createElement("span",{id:"image-loader"},l.a.createElement("img",{alt:"",src:"images/loader.gif"}))))),l.a.createElement("div",{id:"message-warning"}," Error"),l.a.createElement("div",{id:"message-success"},l.a.createElement("i",{className:"fa fa-check"}),"Sent!",l.a.createElement("br",null))),l.a.createElement("aside",{className:"four columns footer-widgets"},l.a.createElement("div",{className:"widget widget_contact"},l.a.createElement("h4",null,"Contact Info"),l.a.createElement("p",{className:"address"},null===a||void 0===a?void 0:a.name,l.a.createElement("br",null),null===a||void 0===a?void 0:a.address.state," ",l.a.createElement("br",null),null===a||void 0===a?void 0:a.email," ",l.a.createElement("br",null))),l.a.createElement("div",{className:"widget widget_tweets"}))))},f=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.projects.map((function(e){var a="images/portfolio/"+e.image;return l.a.createElement("div",{key:e.title,className:"columns portfolio-item"},l.a.createElement("div",{className:"item-wrap"},l.a.createElement("a",{href:e.url,title:e.title,target:"_blank"},l.a.createElement("img",{alt:e.title,src:a}),l.a.createElement("div",{className:"overlay"},l.a.createElement("div",{className:"portfolio-item-meta"},l.a.createElement("h5",null,e.title),l.a.createElement("p",null,e.category))),l.a.createElement("div",{className:"link-icon"},l.a.createElement("i",{className:"fa fa-link"})))))}));return l.a.createElement("section",{id:"portfolio"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns collapsed"},l.a.createElement("h1",null,"Check Out My Portfolio. ",l.a.createElement("br",null),"(right click to open in a new tab or window.)"),l.a.createElement("div",{id:"portfolio-wrapper",className:"item-wrap-align bgrid-quarters s-bgrid-thirds cf"},e))))}}]),t}(n.Component),v=t(8),b=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).state={foo:"bar",resumeData:v},n}return Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(u,{data:this.state.resumeData.main}),l.a.createElement(p,{data:this.state.resumeData.main}),l.a.createElement(h,{data:this.state.resumeData.resume}),l.a.createElement(f,{data:this.state.resumeData.portfolio}),l.a.createElement(E,{data:this.state.resumeData.main}),l.a.createElement(d,{data:this.state.resumeData.main}))}}]),t}(n.Component),w=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function y(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}s.a.render(l.a.createElement(b,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");w?function(e){fetch(e).then((function(a){404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):y(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):y(e)}))}}()}],[[9,1,2]]]);
//# sourceMappingURL=main.8d93bf76.chunk.js.map