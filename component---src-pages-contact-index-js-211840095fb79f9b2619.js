(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{148:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return s});a(170);var n=a(7),i=a.n(n),c=(a(75),a(56),a(36),a(188),a(0)),l=a.n(c),M=(a(33),a(159));var s=function(e){function t(t){var a;return(a=e.call(this,t)||this).handleChange=function(e){var t;a.setState(((t={})[e.target.name]=e.target.value,t))},a.state={isValidated:!1},a}return i()(t,e),t.prototype.render=function(){return l.a.createElement(M.a,null,l.a.createElement("section",{className:"section"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"content"},l.a.createElement("h1",null,"Contact"),l.a.createElement("form",{name:"contact",method:"post",action:"https://formspree.io/info@little-endian.it",encType:"multipart/form-data"},l.a.createElement("input",{type:"hidden",name:"form-name",value:"contact"}),l.a.createElement("div",{hidden:!0},l.a.createElement("label",null,"Don’t fill this out:"," ",l.a.createElement("input",{name:"bot-field",onChange:this.handleChange}))),l.a.createElement("div",{className:"field"},l.a.createElement("label",{className:"label",htmlFor:"name"},"Your name"),l.a.createElement("div",{className:"control"},l.a.createElement("input",{className:"input",type:"text",name:"name",id:"name",required:!0,placeholder:"Your name"}))),l.a.createElement("div",{className:"field"},l.a.createElement("label",{className:"label",htmlFor:"email"},"Email"),l.a.createElement("div",{className:"control"},l.a.createElement("input",{className:"input",type:"email",name:"_replyto",placeholder:"Your email"}))),l.a.createElement("div",{className:"field"},l.a.createElement("label",{className:"label",htmlFor:"message"},"Message"),l.a.createElement("div",{className:"control"},l.a.createElement("textarea",{className:"textarea",name:"message",placeholder:"Enter your message here"}))),l.a.createElement("div",{className:"field"},l.a.createElement("button",{className:"button is-link",type:"submit",value:"Send"},"Send")))))))},t}(l.a.Component)},155:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),i=a.n(n),c=a(4),l=a.n(c),M=a(33),s=a.n(M);a.d(t,"a",function(){return s.a});a(156);var r=i.a.createContext({}),u=function(e){return i.a.createElement(r.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},156:function(e,t,a){var n;e.exports=(n=a(160))&&n.default||n},157:function(e,t,a){e.exports=a.p+"static/littleendian-logo-512891dca667eae0131b546c33430ba0.svg"},158:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNDM4LjU0OXB4IiBoZWlnaHQ9IjQzOC41NDlweCIgdmlld0JveD0iMCAwIDQzOC41NDkgNDM4LjU0OSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDM4LjU0OSA0MzguNTQ5OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPHBhdGggZD0iTTQwOS4xMzIsMTE0LjU3M2MtMTkuNjA4LTMzLjU5Ni00Ni4yMDUtNjAuMTk0LTc5Ljc5OC03OS44QzI5NS43MzYsMTUuMTY2LDI1OS4wNTcsNS4zNjUsMjE5LjI3MSw1LjM2NSAgIGMtMzkuNzgxLDAtNzYuNDcyLDkuODA0LTExMC4wNjMsMjkuNDA4Yy0zMy41OTYsMTkuNjA1LTYwLjE5Miw0Ni4yMDQtNzkuOCw3OS44QzkuODAzLDE0OC4xNjgsMCwxODQuODU0LDAsMjI0LjYzICAgYzAsNDcuNzgsMTMuOTQsOTAuNzQ1LDQxLjgyNywxMjguOTA2YzI3Ljg4NCwzOC4xNjQsNjMuOTA2LDY0LjU3MiwxMDguMDYzLDc5LjIyN2M1LjE0LDAuOTU0LDguOTQ1LDAuMjgzLDExLjQxOS0xLjk5NiAgIGMyLjQ3NS0yLjI4MiwzLjcxMS01LjE0LDMuNzExLTguNTYyYzAtMC41NzEtMC4wNDktNS43MDgtMC4xNDQtMTUuNDE3Yy0wLjA5OC05LjcwOS0wLjE0NC0xOC4xNzktMC4xNDQtMjUuNDA2bC02LjU2NywxLjEzNiAgIGMtNC4xODcsMC43NjctOS40NjksMS4wOTItMTUuODQ2LDFjLTYuMzc0LTAuMDg5LTEyLjk5MS0wLjc1Ny0xOS44NDItMS45OTljLTYuODU0LTEuMjMxLTEzLjIyOS00LjA4Ni0xOS4xMy04LjU1OSAgIGMtNS44OTgtNC40NzMtMTAuMDg1LTEwLjMyOC0xMi41Ni0xNy41NTZsLTIuODU1LTYuNTdjLTEuOTAzLTQuMzc0LTQuODk5LTkuMjMzLTguOTkyLTE0LjU1OSAgIGMtNC4wOTMtNS4zMzEtOC4yMzItOC45NDUtMTIuNDE5LTEwLjg0OGwtMS45OTktMS40MzFjLTEuMzMyLTAuOTUxLTIuNTY4LTIuMDk4LTMuNzExLTMuNDI5Yy0xLjE0Mi0xLjMzMS0xLjk5Ny0yLjY2My0yLjU2OC0zLjk5NyAgIGMtMC41NzItMS4zMzUtMC4wOTgtMi40MywxLjQyNy0zLjI4OWMxLjUyNS0wLjg1OSw0LjI4MS0xLjI3Niw4LjI4LTEuMjc2bDUuNzA4LDAuODUzYzMuODA3LDAuNzYzLDguNTE2LDMuMDQyLDE0LjEzMyw2Ljg1MSAgIGM1LjYxNCwzLjgwNiwxMC4yMjksOC43NTQsMTMuODQ2LDE0Ljg0MmM0LjM4LDcuODA2LDkuNjU3LDEzLjc1NCwxNS44NDYsMTcuODQ3YzYuMTg0LDQuMDkzLDEyLjQxOSw2LjEzNiwxOC42OTksNi4xMzYgICBjNi4yOCwwLDExLjcwNC0wLjQ3NiwxNi4yNzQtMS40MjNjNC41NjUtMC45NTIsOC44NDgtMi4zODMsMTIuODQ3LTQuMjg1YzEuNzEzLTEyLjc1OCw2LjM3Ny0yMi41NTksMTMuOTg4LTI5LjQxICAgYy0xMC44NDgtMS4xNC0yMC42MDEtMi44NTctMjkuMjY0LTUuMTRjLTguNjU4LTIuMjg2LTE3LjYwNS01Ljk5Ni0yNi44MzUtMTEuMTRjLTkuMjM1LTUuMTM3LTE2Ljg5Ni0xMS41MTYtMjIuOTg1LTE5LjEyNiAgIGMtNi4wOS03LjYxNC0xMS4wODgtMTcuNjEtMTQuOTg3LTI5Ljk3OWMtMy45MDEtMTIuMzc0LTUuODUyLTI2LjY0OC01Ljg1Mi00Mi44MjZjMC0yMy4wMzUsNy41Mi00Mi42MzcsMjIuNTU3LTU4LjgxNyAgIGMtNy4wNDQtMTcuMzE4LTYuMzc5LTM2LjczMiwxLjk5Ny01OC4yNGM1LjUyLTEuNzE1LDEzLjcwNi0wLjQyOCwyNC41NTQsMy44NTNjMTAuODUsNC4yODMsMTguNzk0LDcuOTUyLDIzLjg0LDEwLjk5NCAgIGM1LjA0NiwzLjA0MSw5LjA4OSw1LjYxOCwxMi4xMzUsNy43MDhjMTcuNzA1LTQuOTQ3LDM1Ljk3Ni03LjQyMSw1NC44MTgtNy40MjFzMzcuMTE3LDIuNDc0LDU0LjgyMyw3LjQyMWwxMC44NDktNi44NDkgICBjNy40MTktNC41NywxNi4xOC04Ljc1OCwyNi4yNjItMTIuNTY1YzEwLjA4OC0zLjgwNSwxNy44MDItNC44NTMsMjMuMTM0LTMuMTM4YzguNTYyLDIxLjUwOSw5LjMyNSw0MC45MjIsMi4yNzksNTguMjQgICBjMTUuMDM2LDE2LjE4LDIyLjU1OSwzNS43ODcsMjIuNTU5LDU4LjgxN2MwLDE2LjE3OC0xLjk1OCwzMC40OTctNS44NTMsNDIuOTY2Yy0zLjksMTIuNDcxLTguOTQxLDIyLjQ1Ny0xNS4xMjUsMjkuOTc5ICAgYy02LjE5MSw3LjUyMS0xMy45MDEsMTMuODUtMjMuMTMxLDE4Ljk4NmMtOS4yMzIsNS4xNC0xOC4xODIsOC44NS0yNi44NCwxMS4xMzZjLTguNjYyLDIuMjg2LTE4LjQxNSw0LjAwNC0yOS4yNjMsNS4xNDYgICBjOS44OTQsOC41NjIsMTQuODQyLDIyLjA3NywxNC44NDIsNDAuNTM5djYwLjIzN2MwLDMuNDIyLDEuMTksNi4yNzksMy41NzIsOC41NjJjMi4zNzksMi4yNzksNi4xMzYsMi45NSwxMS4yNzYsMS45OTUgICBjNDQuMTYzLTE0LjY1Myw4MC4xODUtNDEuMDYyLDEwOC4wNjgtNzkuMjI2YzI3Ljg4LTM4LjE2MSw0MS44MjUtODEuMTI2LDQxLjgyNS0xMjguOTA2ICAgQzQzOC41MzYsMTg0Ljg1MSw0MjguNzI4LDE0OC4xNjgsNDA5LjEzMiwxMTQuNTczeiIvPgo8L2c+CjxkaXYgeG1sbnM9IiIgaWQ9ImRpdlNjcmlwdHNVc2VkIiBzdHlsZT0iZGlzcGxheTogbm9uZSIvPjxzY3JpcHQgeG1sbnM9IiIgaWQ9Imdsb2JhbFZhcnNEZXRlY3Rpb24iIHNyYz0iY2hyb21lLWV4dGVuc2lvbjovL2Nta2RibWZuZGtmZ2VibGRobmtiZmhsbmVlZmRhYWlwL2pzL3dyc19lbnYuanMiLz48L3N2Zz4K"},159:function(e,t,a){"use strict";var n=a(0),i=a.n(n),c=a(164),l=a.n(c),M=a(7),s=a.n(M),r=a(155),u=a(157),N=a.n(u),L=a(161),j=a.n(L),m=a(158),o=a.n(m),g=a(162),E=a.n(g),y=function(e){function t(){return e.apply(this,arguments)||this}return s()(t,e),t.prototype.render=function(){return i.a.createElement("footer",{className:"footer has-background-black has-text-white-ter"},i.a.createElement("div",{className:"content has-text-centered has-background-black has-text-white-ter"},i.a.createElement("div",{className:"container has-background-black has-text-white-ter"},i.a.createElement("div",{className:"columns"},i.a.createElement("div",{className:"column is-4"},i.a.createElement("section",{className:"menu"},i.a.createElement("ul",{className:"menu-list"},i.a.createElement("li",null,i.a.createElement(r.a,{to:"/",className:"navbar-item"},"Home")),i.a.createElement("li",null,i.a.createElement(r.a,{className:"navbar-item",to:"/about"},"About")),i.a.createElement("li",null,i.a.createElement(r.a,{className:"navbar-item",to:"/technologies"},"technologies"))))),i.a.createElement("div",{className:"column is-4"},i.a.createElement("section",null,i.a.createElement("ul",{className:"menu-list"},i.a.createElement("li",null,i.a.createElement(r.a,{className:"navbar-item",to:"/projects"},"Projects")),i.a.createElement("li",null,i.a.createElement(r.a,{className:"navbar-item",to:"/contact"},"Contact"))))),i.a.createElement("div",{className:"column is-4 social"},i.a.createElement("a",{title:"facebook",href:"https://fb.me/littleendian.it "},i.a.createElement("img",{src:j.a,alt:"Facebook",style:{width:"1em",height:"1em"}})),i.a.createElement("a",{title:"twitter",href:"https://twitter.com/gumino_one/lists/littleendian"},i.a.createElement("img",{className:"fas fa-lg",src:E.a,alt:"Twitter",style:{width:"1em",height:"1em"}})),i.a.createElement("a",{title:"github",href:"https://github.com/orgs/little-endian-guglielmino/"},i.a.createElement("img",{src:o.a,alt:"Github",style:{width:"1em",height:"1em"}})))))),i.a.createElement("div",{className:"container has-background-black "},i.a.createElement("div",{className:"columns"},i.a.createElement("div",{className:"column is-4"},i.a.createElement("p",{className:"has-text-left is-size-7"},"LittleEndian - P.I.: 12092120018",i.a.createElement("br",null),"Copyright © 2019 LittleEndian All rights reserved",i.a.createElement("br",null),"Via Bussoleno, 42 - 10091 Alpignano (TO)",i.a.createElement("br",null),"ITALY",i.a.createElement("br",null),i.a.createElement("a",{href:"mailto:info@little-endian.it"},"info@little-endian.it"))),i.a.createElement("div",{className:"column is-4"}),i.a.createElement("div",{className:"column"},i.a.createElement("div",{className:"has-text-centered"},i.a.createElement("img",{src:N.a,alt:"LittleEndian",style:{width:"14em",height:"10em"}}))))))},t}(i.a.Component),T=function(e){function t(t){var a;return(a=e.call(this,t)||this).toggleHamburger=function(){a.setState({active:!a.state.active},function(){a.state.active?a.setState({navBarActiveClass:"is-active"}):a.setState({navBarActiveClass:""})})},a.state={active:!1,navBarActiveClass:""},a}return s()(t,e),t.prototype.render=function(){var e=this;return i.a.createElement("nav",{className:"navbar is-transparent",role:"navigation","aria-label":"main-navigation"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"navbar-brand"},i.a.createElement(r.a,{to:"/",className:"navbar-item",title:"Logo"},i.a.createElement("img",{src:N.a,alt:"LittleEndian",style:{width:"120px"}})),i.a.createElement("div",{className:"navbar-burger burger "+this.state.navBarActiveClass,"data-target":"navMenu",onClick:function(){return e.toggleHamburger()}},i.a.createElement("span",null),i.a.createElement("span",null),i.a.createElement("span",null))),i.a.createElement("div",{id:"navMenu",className:"navbar-menu "+this.state.navBarActiveClass},i.a.createElement("div",{className:"navbar-start has-text-centered"},i.a.createElement(r.a,{className:"navbar-item",to:"/about"},"About"),i.a.createElement(r.a,{className:"navbar-item",to:"/technologies"},"Technologies"),i.a.createElement(r.a,{className:"navbar-item",to:"/projects"},"Projects"),i.a.createElement(r.a,{className:"navbar-item",to:"/contact"},"Contact")),i.a.createElement("div",{className:"navbar-end has-text-centered"},i.a.createElement("a",{className:"navbar-item",href:"https://github.com/orgs/little-endian-guglielmino/",target:"_blank",rel:"noopener noreferrer"},i.a.createElement("span",{className:"icon"},i.a.createElement("img",{src:o.a,alt:"Github"})))))))},t}(i.a.Component),D=a(165),I=a.n(D),z=(a(166),a(163)),d=function(){return z.data.site.siteMetadata};t.a=function(e){var t=e.children,a=d(),n=a.title,c=a.description;return i.a.createElement("div",null,i.a.createElement(l.a,null,i.a.createElement("html",{lang:"en"}),i.a.createElement("title",null,n),i.a.createElement("meta",{name:"description",content:c}),i.a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/img/apple-touch-icon.png"}),i.a.createElement("link",{rel:"icon",type:"image/png",href:"/img/favicon-32x32.png",sizes:"32x32"}),i.a.createElement("link",{rel:"icon",type:"image/png",href:"/img/favicon-16x16.png",sizes:"16x16"}),i.a.createElement("link",{rel:"mask-icon",href:"/img/safari-pinned-tab.svg",color:"#ff4400"}),i.a.createElement("meta",{name:"theme-color",content:"#fff"}),i.a.createElement("meta",{property:"og:type",content:"business.business"}),i.a.createElement("meta",{property:"og:title",content:n}),i.a.createElement("meta",{property:"og:url",content:"/"}),i.a.createElement("meta",{property:"og:image",content:"/img/og-image.jpg"})),i.a.createElement(T,null),i.a.createElement(I.a,null,"This website uses cookies to enhance the user experience."),i.a.createElement("div",null,t),i.a.createElement(y,null))}},160:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),i=a.n(n),c=a(4),l=a.n(c),M=a(55),s=a(2),r=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(M.a,Object.assign({location:t,pageResources:a},a.json))};r.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=r},161:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+RmFjZWJvb2sgaWNvbjwvdGl0bGU+PHBhdGggZD0iTTIyLjY3NiAwSDEuMzI0Qy41OTMgMCAwIC41OTMgMCAxLjMyNHYyMS4zNTJDMCAyMy40MDguNTkzIDI0IDEuMzI0IDI0aDExLjQ5NHYtOS4yOTRIOS42ODl2LTMuNjIxaDMuMTI5VjguNDFjMC0zLjA5OSAxLjg5NC00Ljc4NSA0LjY1OS00Ljc4NSAxLjMyNSAwIDIuNDY0LjA5NyAyLjc5Ni4xNDF2My4yNGgtMS45MjFjLTEuNSAwLTEuNzkyLjcyMS0xLjc5MiAxLjc3MXYyLjMxMWgzLjU4NGwtLjQ2NSAzLjYzSDE2LjU2VjI0aDYuMTE1Yy43MzMgMCAxLjMyNS0uNTkyIDEuMzI1LTEuMzI0VjEuMzI0QzI0IC41OTMgMjMuNDA4IDAgMjIuNjc2IDAiLz48L3N2Zz4="},162:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+VHdpdHRlciBpY29uPC90aXRsZT48cGF0aCBkPSJNMjMuOTU0IDQuNTY5Yy0uODg1LjM4OS0xLjgzLjY1NC0yLjgyNS43NzUgMS4wMTQtLjYxMSAxLjc5NC0xLjU3NCAyLjE2My0yLjcyMy0uOTUxLjU1NS0yLjAwNS45NTktMy4xMjcgMS4xODQtLjg5Ni0uOTU5LTIuMTczLTEuNTU5LTMuNTkxLTEuNTU5LTIuNzE3IDAtNC45MiAyLjIwMy00LjkyIDQuOTE3IDAgLjM5LjA0NS43NjUuMTI3IDEuMTI0QzcuNjkxIDguMDk0IDQuMDY2IDYuMTMgMS42NCAzLjE2MWMtLjQyNy43MjItLjY2NiAxLjU2MS0uNjY2IDIuNDc1IDAgMS43MS44NyAzLjIxMyAyLjE4OCA0LjA5Ni0uODA3LS4wMjYtMS41NjYtLjI0OC0yLjIyOC0uNjE2di4wNjFjMCAyLjM4NSAxLjY5MyA0LjM3NCAzLjk0NiA0LjgyNy0uNDEzLjExMS0uODQ5LjE3MS0xLjI5Ni4xNzEtLjMxNCAwLS42MTUtLjAzLS45MTYtLjA4Ni42MzEgMS45NTMgMi40NDUgMy4zNzcgNC42MDQgMy40MTctMS42OCAxLjMxOS0zLjgwOSAyLjEwNS02LjEwMiAyLjEwNS0uMzkgMC0uNzc5LS4wMjMtMS4xNy0uMDY3IDIuMTg5IDEuMzk0IDQuNzY4IDIuMjA5IDcuNTU3IDIuMjA5IDkuMDU0IDAgMTMuOTk5LTcuNDk2IDEzLjk5OS0xMy45ODYgMC0uMjA5IDAtLjQyLS4wMTUtLjYzLjk2MS0uNjg5IDEuOC0xLjU2IDIuNDYtMi41NDhsLS4wNDctLjAyeiIvPjwvc3ZnPg=="},163:function(e){e.exports={data:{site:{siteMetadata:{title:"Little Endian - Company Site",description:"This repo contains an example business website that is built with Gatsby, and Netlify CMS.It follows the JAMstack architecture by using Git as a single source of truth, and Netlify for continuous deployment, and CDN distribution."}}}}},170:function(e,t,a){var n=a(25).f,i=Function.prototype,c=/^\s*function ([^ (]*)/;"name"in i||a(18)&&n(i,"name",{configurable:!0,get:function(){try{return(""+this).match(c)[1]}catch(e){return""}}})},188:function(e,t,a){var n=a(26),i=a(35);a(189)("keys",function(){return function(e){return i(n(e))}})},189:function(e,t,a){var n=a(11),i=a(19),c=a(20);e.exports=function(e,t){var a=(i.Object||{})[e]||Object[e],l={};l[e]=t(a),n(n.S+n.F*c(function(){a(1)}),"Object",l)}}}]);
//# sourceMappingURL=component---src-pages-contact-index-js-211840095fb79f9b2619.js.map