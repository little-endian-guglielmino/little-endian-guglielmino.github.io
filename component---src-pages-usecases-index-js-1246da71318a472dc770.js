(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{153:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return j});var M=a(7),n=a.n(M),N=a(0),i=a.n(N),L=a(159),u=a(169),j=function(e){function t(){return e.apply(this,arguments)||this}return n()(t,e),t.prototype.render=function(){return i.a.createElement(L.a,null,i.a.createElement("div",{className:"full-width-image-container margin-top-0",style:{backgroundImage:"url('/img/blog-index.jpg')"}},i.a.createElement("h1",{className:"has-text-weight-bold is-size-1",style:{boxShadow:"0.5rem 0 0 #f40, -0.5rem 0 0 #f40",backgroundColor:"#f40",color:"white",padding:"1rem"}},"Latest Stories")),i.a.createElement("section",{className:"section"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"content"},i.a.createElement(u.a,null)))))},t}(i.a.Component)},156:function(e,t,a){"use strict";a.d(t,"b",function(){return c});var M=a(0),n=a.n(M),N=a(4),i=a.n(N),L=a(33),u=a.n(L);a.d(t,"a",function(){return u.a});a(157);var j=n.a.createContext({}),c=function(e){return n.a.createElement(j.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})};c.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},157:function(e,t,a){var M;e.exports=(M=a(160))&&M.default||M},158:function(e,t,a){e.exports=a.p+"static/littleendian-logo-512891dca667eae0131b546c33430ba0.svg"},159:function(e,t,a){"use strict";var M=a(0),n=a.n(M),N=a(167),i=a.n(N),L=a(7),u=a.n(L),j=a(156),c=a(158),s=a.n(c),l=a(161),r=a.n(l),g=a(162),o=a.n(g),y=a(163),m=a.n(y),T=a(164),D=a.n(T),I=function(e){function t(){return e.apply(this,arguments)||this}return u()(t,e),t.prototype.render=function(){return n.a.createElement("footer",{className:"footer has-background-black has-text-white-ter"},n.a.createElement("div",{className:"content has-text-centered"},n.a.createElement("img",{src:s.a,alt:"LittleEndian",style:{width:"14em",height:"10em"}})),n.a.createElement("div",{className:"content has-text-centered has-background-black has-text-white-ter"},n.a.createElement("div",{className:"container has-background-black has-text-white-ter"},n.a.createElement("div",{className:"columns"},n.a.createElement("div",{className:"column is-4"},n.a.createElement("section",{className:"menu"},n.a.createElement("ul",{className:"menu-list"},n.a.createElement("li",null,n.a.createElement(j.a,{to:"/",className:"navbar-item"},"Home")),n.a.createElement("li",null,n.a.createElement(j.a,{className:"navbar-item",to:"/about"},"About")),n.a.createElement("li",null,n.a.createElement(j.a,{className:"navbar-item",to:"/technologies"},"technologies")),n.a.createElement("li",null,n.a.createElement(j.a,{className:"navbar-item",to:"/contact/examples"},"Form Examples")),n.a.createElement("li",null,n.a.createElement("a",{className:"navbar-item",href:"/admin/",target:"_blank",rel:"noopener noreferrer"},"Admin"))))),n.a.createElement("div",{className:"column is-4"},n.a.createElement("section",null,n.a.createElement("ul",{className:"menu-list"},n.a.createElement("li",null,n.a.createElement(j.a,{className:"navbar-item",to:"/use-cases"},"Use Cases")),n.a.createElement("li",null,n.a.createElement(j.a,{className:"navbar-item",to:"/contact"},"Contact"))))),n.a.createElement("div",{className:"column is-4 social"},n.a.createElement("a",{title:"facebook",href:"https://facebook.com"},n.a.createElement("img",{src:r.a,alt:"Facebook",style:{width:"1em",height:"1em"}})),n.a.createElement("a",{title:"twitter",href:"https://twitter.com"},n.a.createElement("img",{className:"fas fa-lg",src:m.a,alt:"Twitter",style:{width:"1em",height:"1em"}})),n.a.createElement("a",{title:"instagram",href:"https://instagram.com"},n.a.createElement("img",{src:o.a,alt:"Instagram",style:{width:"1em",height:"1em"}})),n.a.createElement("a",{title:"vimeo",href:"https://vimeo.com"},n.a.createElement("img",{src:D.a,alt:"Vimeo",style:{width:"1em",height:"1em"}})))))))},t}(n.a.Component),E=a(165),z=a.n(E),x=function(e){function t(t){var a;return(a=e.call(this,t)||this).toggleHamburger=function(){a.setState({active:!a.state.active},function(){a.state.active?a.setState({navBarActiveClass:"is-active"}):a.setState({navBarActiveClass:""})})},a.state={active:!1,navBarActiveClass:""},a}return u()(t,e),t.prototype.render=function(){var e=this;return n.a.createElement("nav",{className:"navbar is-transparent",role:"navigation","aria-label":"main-navigation"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"navbar-brand"},n.a.createElement(j.a,{to:"/",className:"navbar-item",title:"Logo"},n.a.createElement("img",{src:s.a,alt:"LittleEndian",style:{width:"120px"}})),n.a.createElement("div",{className:"navbar-burger burger "+this.state.navBarActiveClass,"data-target":"navMenu",onClick:function(){return e.toggleHamburger()}},n.a.createElement("span",null),n.a.createElement("span",null),n.a.createElement("span",null))),n.a.createElement("div",{id:"navMenu",className:"navbar-menu "+this.state.navBarActiveClass},n.a.createElement("div",{className:"navbar-start has-text-centered"},n.a.createElement(j.a,{className:"navbar-item",to:"/about"},"About"),n.a.createElement(j.a,{className:"navbar-item",to:"/technologies"},"Technologies"),n.a.createElement(j.a,{className:"navbar-item",to:"/usecases"},"Use Cases"),n.a.createElement(j.a,{className:"navbar-item",to:"/contact"},"Contact"),n.a.createElement(j.a,{className:"navbar-item",to:"/contact/examples"},"Form Examples")),n.a.createElement("div",{className:"navbar-end has-text-centered"},n.a.createElement("a",{className:"navbar-item",href:"https://github.com/AustinGreen/gatsby-netlify-cms-boilerplate",target:"_blank",rel:"noopener noreferrer"},n.a.createElement("span",{className:"icon"},n.a.createElement("img",{src:z.a,alt:"Github"})))))))},t}(n.a.Component),S=(a(168),a(166)),A=function(){return S.data.site.siteMetadata};t.a=function(e){var t=e.children,a=A(),M=a.title,N=a.description;return n.a.createElement("div",null,n.a.createElement(i.a,null,n.a.createElement("html",{lang:"en"}),n.a.createElement("title",null,M),n.a.createElement("meta",{name:"description",content:N}),n.a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/img/apple-touch-icon.png"}),n.a.createElement("link",{rel:"icon",type:"image/png",href:"/img/favicon-32x32.png",sizes:"32x32"}),n.a.createElement("link",{rel:"icon",type:"image/png",href:"/img/favicon-16x16.png",sizes:"16x16"}),n.a.createElement("link",{rel:"mask-icon",href:"/img/safari-pinned-tab.svg",color:"#ff4400"}),n.a.createElement("meta",{name:"theme-color",content:"#fff"}),n.a.createElement("meta",{property:"og:type",content:"business.business"}),n.a.createElement("meta",{property:"og:title",content:M}),n.a.createElement("meta",{property:"og:url",content:"/"}),n.a.createElement("meta",{property:"og:image",content:"/img/og-image.jpg"})),n.a.createElement(x,null),n.a.createElement("div",null,t),n.a.createElement(I,null))}},160:function(e,t,a){"use strict";a.r(t);a(34);var M=a(0),n=a.n(M),N=a(4),i=a.n(N),L=a(55),u=a(2),j=function(e){var t=e.location,a=u.default.getResourcesForPathnameSync(t.pathname);return n.a.createElement(L.a,Object.assign({location:t,pageResources:a},a.json))};j.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=j},161:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+RmFjZWJvb2sgaWNvbjwvdGl0bGU+PHBhdGggZD0iTTIyLjY3NiAwSDEuMzI0Qy41OTMgMCAwIC41OTMgMCAxLjMyNHYyMS4zNTJDMCAyMy40MDguNTkzIDI0IDEuMzI0IDI0aDExLjQ5NHYtOS4yOTRIOS42ODl2LTMuNjIxaDMuMTI5VjguNDFjMC0zLjA5OSAxLjg5NC00Ljc4NSA0LjY1OS00Ljc4NSAxLjMyNSAwIDIuNDY0LjA5NyAyLjc5Ni4xNDF2My4yNGgtMS45MjFjLTEuNSAwLTEuNzkyLjcyMS0xLjc5MiAxLjc3MXYyLjMxMWgzLjU4NGwtLjQ2NSAzLjYzSDE2LjU2VjI0aDYuMTE1Yy43MzMgMCAxLjMyNS0uNTkyIDEuMzI1LTEuMzI0VjEuMzI0QzI0IC41OTMgMjMuNDA4IDAgMjIuNjc2IDAiLz48L3N2Zz4="},162:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+SW5zdGFncmFtIGljb248L3RpdGxlPjxwYXRoIGQ9Ik0xMiAwQzguNzQgMCA4LjMzMy4wMTUgNy4wNTMuMDcyIDUuNzc1LjEzMiA0LjkwNS4zMzMgNC4xNC42M2MtLjc4OS4zMDYtMS40NTkuNzE3LTIuMTI2IDEuMzg0Uy45MzUgMy4zNS42MyA0LjE0Qy4zMzMgNC45MDUuMTMxIDUuNzc1LjA3MiA3LjA1My4wMTIgOC4zMzMgMCA4Ljc0IDAgMTJzLjAxNSAzLjY2Ny4wNzIgNC45NDdjLjA2IDEuMjc3LjI2MSAyLjE0OC41NTggMi45MTMuMzA2Ljc4OC43MTcgMS40NTkgMS4zODQgMi4xMjYuNjY3LjY2NiAxLjMzNiAxLjA3OSAyLjEyNiAxLjM4NC43NjYuMjk2IDEuNjM2LjQ5OSAyLjkxMy41NThDOC4zMzMgMjMuOTg4IDguNzQgMjQgMTIgMjRzMy42NjctLjAxNSA0Ljk0Ny0uMDcyYzEuMjc3LS4wNiAyLjE0OC0uMjYyIDIuOTEzLS41NTguNzg4LS4zMDYgMS40NTktLjcxOCAyLjEyNi0xLjM4NC42NjYtLjY2NyAxLjA3OS0xLjMzNSAxLjM4NC0yLjEyNi4yOTYtLjc2NS40OTktMS42MzYuNTU4LTIuOTEzLjA2LTEuMjguMDcyLTEuNjg3LjA3Mi00Ljk0N3MtLjAxNS0zLjY2Ny0uMDcyLTQuOTQ3Yy0uMDYtMS4yNzctLjI2Mi0yLjE0OS0uNTU4LTIuOTEzLS4zMDYtLjc4OS0uNzE4LTEuNDU5LTEuMzg0LTIuMTI2QzIxLjMxOSAxLjM0NyAyMC42NTEuOTM1IDE5Ljg2LjYzYy0uNzY1LS4yOTctMS42MzYtLjQ5OS0yLjkxMy0uNTU4QzE1LjY2Ny4wMTIgMTUuMjYgMCAxMiAwem0wIDIuMTZjMy4yMDMgMCAzLjU4NS4wMTYgNC44NS4wNzEgMS4xNy4wNTUgMS44MDUuMjQ5IDIuMjI3LjQxNS41NjIuMjE3Ljk2LjQ3NyAxLjM4Mi44OTYuNDE5LjQyLjY3OS44MTkuODk2IDEuMzgxLjE2NC40MjIuMzYgMS4wNTcuNDEzIDIuMjI3LjA1NyAxLjI2Ni4wNyAxLjY0Ni4wNyA0Ljg1cy0uMDE1IDMuNTg1LS4wNzQgNC44NWMtLjA2MSAxLjE3LS4yNTYgMS44MDUtLjQyMSAyLjIyNy0uMjI0LjU2Mi0uNDc5Ljk2LS44OTkgMS4zODItLjQxOS40MTktLjgyNC42NzktMS4zOC44OTYtLjQyLjE2NC0xLjA2NS4zNi0yLjIzNS40MTMtMS4yNzQuMDU3LTEuNjQ5LjA3LTQuODU5LjA3LTMuMjExIDAtMy41ODYtLjAxNS00Ljg1OS0uMDc0LTEuMTcxLS4wNjEtMS44MTYtLjI1Ni0yLjIzNi0uNDIxLS41NjktLjIyNC0uOTYtLjQ3OS0xLjM3OS0uODk5LS40MjEtLjQxOS0uNjktLjgyNC0uOS0xLjM4LS4xNjUtLjQyLS4zNTktMS4wNjUtLjQyLTIuMjM1LS4wNDUtMS4yNi0uMDYxLTEuNjQ5LS4wNjEtNC44NDQgMC0zLjE5Ni4wMTYtMy41ODYuMDYxLTQuODYxLjA2MS0xLjE3LjI1NS0xLjgxNC40Mi0yLjIzNC4yMS0uNTcuNDc5LS45Ni45LTEuMzgxLjQxOS0uNDE5LjgxLS42ODkgMS4zNzktLjg5OC40Mi0uMTY2IDEuMDUxLS4zNjEgMi4yMjEtLjQyMSAxLjI3NS0uMDQ1IDEuNjUtLjA2IDQuODU5LS4wNmwuMDQ1LjAzem0wIDMuNjc4Yy0zLjQwNSAwLTYuMTYyIDIuNzYtNi4xNjIgNi4xNjIgMCAzLjQwNSAyLjc2IDYuMTYyIDYuMTYyIDYuMTYyIDMuNDA1IDAgNi4xNjItMi43NiA2LjE2Mi02LjE2MiAwLTMuNDA1LTIuNzYtNi4xNjItNi4xNjItNi4xNjJ6TTEyIDE2Yy0yLjIxIDAtNC0xLjc5LTQtNHMxLjc5LTQgNC00IDQgMS43OSA0IDQtMS43OSA0LTQgNHptNy44NDYtMTAuNDA1YzAgLjc5NS0uNjQ2IDEuNDQtMS40NCAxLjQ0LS43OTUgMC0xLjQ0LS42NDYtMS40NC0xLjQ0IDAtLjc5NC42NDYtMS40MzkgMS40NC0xLjQzOS43OTMtLjAwMSAxLjQ0LjY0NSAxLjQ0IDEuNDM5eiIvPjwvc3ZnPg=="},163:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+VHdpdHRlciBpY29uPC90aXRsZT48cGF0aCBkPSJNMjMuOTU0IDQuNTY5Yy0uODg1LjM4OS0xLjgzLjY1NC0yLjgyNS43NzUgMS4wMTQtLjYxMSAxLjc5NC0xLjU3NCAyLjE2My0yLjcyMy0uOTUxLjU1NS0yLjAwNS45NTktMy4xMjcgMS4xODQtLjg5Ni0uOTU5LTIuMTczLTEuNTU5LTMuNTkxLTEuNTU5LTIuNzE3IDAtNC45MiAyLjIwMy00LjkyIDQuOTE3IDAgLjM5LjA0NS43NjUuMTI3IDEuMTI0QzcuNjkxIDguMDk0IDQuMDY2IDYuMTMgMS42NCAzLjE2MWMtLjQyNy43MjItLjY2NiAxLjU2MS0uNjY2IDIuNDc1IDAgMS43MS44NyAzLjIxMyAyLjE4OCA0LjA5Ni0uODA3LS4wMjYtMS41NjYtLjI0OC0yLjIyOC0uNjE2di4wNjFjMCAyLjM4NSAxLjY5MyA0LjM3NCAzLjk0NiA0LjgyNy0uNDEzLjExMS0uODQ5LjE3MS0xLjI5Ni4xNzEtLjMxNCAwLS42MTUtLjAzLS45MTYtLjA4Ni42MzEgMS45NTMgMi40NDUgMy4zNzcgNC42MDQgMy40MTctMS42OCAxLjMxOS0zLjgwOSAyLjEwNS02LjEwMiAyLjEwNS0uMzkgMC0uNzc5LS4wMjMtMS4xNy0uMDY3IDIuMTg5IDEuMzk0IDQuNzY4IDIuMjA5IDcuNTU3IDIuMjA5IDkuMDU0IDAgMTMuOTk5LTcuNDk2IDEzLjk5OS0xMy45ODYgMC0uMjA5IDAtLjQyLS4wMTUtLjYzLjk2MS0uNjg5IDEuOC0xLjU2IDIuNDYtMi41NDhsLS4wNDctLjAyeiIvPjwvc3ZnPg=="},164:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+VmltZW8gaWNvbjwvdGl0bGU+PHBhdGggZD0iTTIzLjk3NyA2LjQxNmMtLjEwNSAyLjMzOC0xLjczOSA1LjU0My00Ljg5NCA5LjYwOS0zLjI2OCA0LjI0Ny02LjAyNiA2LjM3LTguMjkgNi4zNy0xLjQwOSAwLTIuNTc4LTEuMjk0LTMuNTUzLTMuODgxTDUuMzIyIDExLjRDNC42MDMgOC44MTYgMy44MzQgNy41MjIgMy4wMSA3LjUyMmMtLjE3OSAwLS44MDYuMzc4LTEuODgxIDEuMTMyTDAgNy4xOTdjMS4xODUtMS4wNDQgMi4zNTEtMi4wODQgMy41MDEtMy4xMjhDNS4wOCAyLjcwMSA2LjI2NiAxLjk4NCA3LjA1NSAxLjkxYzEuODY3LS4xOCAzLjAxNiAxLjEgMy40NDcgMy44MzguNDY1IDIuOTUzLjc4OSA0Ljc4OS45NzEgNS41MDcuNTM5IDIuNDUgMS4xMzEgMy42NzQgMS43NzYgMy42NzQuNTAyIDAgMS4yNTYtLjc5NiAyLjI2NS0yLjM4NSAxLjAwNC0xLjU4OSAxLjU0LTIuNzk3IDEuNjEyLTMuNjI4LjE0NC0xLjM3MS0uMzk1LTIuMDYxLTEuNjE0LTIuMDYxLS41NzQgMC0xLjE2Ny4xMjEtMS43NzcuMzkxIDEuMTg2LTMuODY4IDMuNDM0LTUuNzU3IDYuNzYyLTUuNjM3IDIuNDczLjA2IDMuNjI4IDEuNjY0IDMuNDkzIDQuNzk3bC0uMDEzLjAxeiIvPjwvc3ZnPg=="},165:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNDM4LjU0OXB4IiBoZWlnaHQ9IjQzOC41NDlweCIgdmlld0JveD0iMCAwIDQzOC41NDkgNDM4LjU0OSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDM4LjU0OSA0MzguNTQ5OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPHBhdGggZD0iTTQwOS4xMzIsMTE0LjU3M2MtMTkuNjA4LTMzLjU5Ni00Ni4yMDUtNjAuMTk0LTc5Ljc5OC03OS44QzI5NS43MzYsMTUuMTY2LDI1OS4wNTcsNS4zNjUsMjE5LjI3MSw1LjM2NSAgIGMtMzkuNzgxLDAtNzYuNDcyLDkuODA0LTExMC4wNjMsMjkuNDA4Yy0zMy41OTYsMTkuNjA1LTYwLjE5Miw0Ni4yMDQtNzkuOCw3OS44QzkuODAzLDE0OC4xNjgsMCwxODQuODU0LDAsMjI0LjYzICAgYzAsNDcuNzgsMTMuOTQsOTAuNzQ1LDQxLjgyNywxMjguOTA2YzI3Ljg4NCwzOC4xNjQsNjMuOTA2LDY0LjU3MiwxMDguMDYzLDc5LjIyN2M1LjE0LDAuOTU0LDguOTQ1LDAuMjgzLDExLjQxOS0xLjk5NiAgIGMyLjQ3NS0yLjI4MiwzLjcxMS01LjE0LDMuNzExLTguNTYyYzAtMC41NzEtMC4wNDktNS43MDgtMC4xNDQtMTUuNDE3Yy0wLjA5OC05LjcwOS0wLjE0NC0xOC4xNzktMC4xNDQtMjUuNDA2bC02LjU2NywxLjEzNiAgIGMtNC4xODcsMC43NjctOS40NjksMS4wOTItMTUuODQ2LDFjLTYuMzc0LTAuMDg5LTEyLjk5MS0wLjc1Ny0xOS44NDItMS45OTljLTYuODU0LTEuMjMxLTEzLjIyOS00LjA4Ni0xOS4xMy04LjU1OSAgIGMtNS44OTgtNC40NzMtMTAuMDg1LTEwLjMyOC0xMi41Ni0xNy41NTZsLTIuODU1LTYuNTdjLTEuOTAzLTQuMzc0LTQuODk5LTkuMjMzLTguOTkyLTE0LjU1OSAgIGMtNC4wOTMtNS4zMzEtOC4yMzItOC45NDUtMTIuNDE5LTEwLjg0OGwtMS45OTktMS40MzFjLTEuMzMyLTAuOTUxLTIuNTY4LTIuMDk4LTMuNzExLTMuNDI5Yy0xLjE0Mi0xLjMzMS0xLjk5Ny0yLjY2My0yLjU2OC0zLjk5NyAgIGMtMC41NzItMS4zMzUtMC4wOTgtMi40MywxLjQyNy0zLjI4OWMxLjUyNS0wLjg1OSw0LjI4MS0xLjI3Niw4LjI4LTEuMjc2bDUuNzA4LDAuODUzYzMuODA3LDAuNzYzLDguNTE2LDMuMDQyLDE0LjEzMyw2Ljg1MSAgIGM1LjYxNCwzLjgwNiwxMC4yMjksOC43NTQsMTMuODQ2LDE0Ljg0MmM0LjM4LDcuODA2LDkuNjU3LDEzLjc1NCwxNS44NDYsMTcuODQ3YzYuMTg0LDQuMDkzLDEyLjQxOSw2LjEzNiwxOC42OTksNi4xMzYgICBjNi4yOCwwLDExLjcwNC0wLjQ3NiwxNi4yNzQtMS40MjNjNC41NjUtMC45NTIsOC44NDgtMi4zODMsMTIuODQ3LTQuMjg1YzEuNzEzLTEyLjc1OCw2LjM3Ny0yMi41NTksMTMuOTg4LTI5LjQxICAgYy0xMC44NDgtMS4xNC0yMC42MDEtMi44NTctMjkuMjY0LTUuMTRjLTguNjU4LTIuMjg2LTE3LjYwNS01Ljk5Ni0yNi44MzUtMTEuMTRjLTkuMjM1LTUuMTM3LTE2Ljg5Ni0xMS41MTYtMjIuOTg1LTE5LjEyNiAgIGMtNi4wOS03LjYxNC0xMS4wODgtMTcuNjEtMTQuOTg3LTI5Ljk3OWMtMy45MDEtMTIuMzc0LTUuODUyLTI2LjY0OC01Ljg1Mi00Mi44MjZjMC0yMy4wMzUsNy41Mi00Mi42MzcsMjIuNTU3LTU4LjgxNyAgIGMtNy4wNDQtMTcuMzE4LTYuMzc5LTM2LjczMiwxLjk5Ny01OC4yNGM1LjUyLTEuNzE1LDEzLjcwNi0wLjQyOCwyNC41NTQsMy44NTNjMTAuODUsNC4yODMsMTguNzk0LDcuOTUyLDIzLjg0LDEwLjk5NCAgIGM1LjA0NiwzLjA0MSw5LjA4OSw1LjYxOCwxMi4xMzUsNy43MDhjMTcuNzA1LTQuOTQ3LDM1Ljk3Ni03LjQyMSw1NC44MTgtNy40MjFzMzcuMTE3LDIuNDc0LDU0LjgyMyw3LjQyMWwxMC44NDktNi44NDkgICBjNy40MTktNC41NywxNi4xOC04Ljc1OCwyNi4yNjItMTIuNTY1YzEwLjA4OC0zLjgwNSwxNy44MDItNC44NTMsMjMuMTM0LTMuMTM4YzguNTYyLDIxLjUwOSw5LjMyNSw0MC45MjIsMi4yNzksNTguMjQgICBjMTUuMDM2LDE2LjE4LDIyLjU1OSwzNS43ODcsMjIuNTU5LDU4LjgxN2MwLDE2LjE3OC0xLjk1OCwzMC40OTctNS44NTMsNDIuOTY2Yy0zLjksMTIuNDcxLTguOTQxLDIyLjQ1Ny0xNS4xMjUsMjkuOTc5ICAgYy02LjE5MSw3LjUyMS0xMy45MDEsMTMuODUtMjMuMTMxLDE4Ljk4NmMtOS4yMzIsNS4xNC0xOC4xODIsOC44NS0yNi44NCwxMS4xMzZjLTguNjYyLDIuMjg2LTE4LjQxNSw0LjAwNC0yOS4yNjMsNS4xNDYgICBjOS44OTQsOC41NjIsMTQuODQyLDIyLjA3NywxNC44NDIsNDAuNTM5djYwLjIzN2MwLDMuNDIyLDEuMTksNi4yNzksMy41NzIsOC41NjJjMi4zNzksMi4yNzksNi4xMzYsMi45NSwxMS4yNzYsMS45OTUgICBjNDQuMTYzLTE0LjY1Myw4MC4xODUtNDEuMDYyLDEwOC4wNjgtNzkuMjI2YzI3Ljg4LTM4LjE2MSw0MS44MjUtODEuMTI2LDQxLjgyNS0xMjguOTA2ICAgQzQzOC41MzYsMTg0Ljg1MSw0MjguNzI4LDE0OC4xNjgsNDA5LjEzMiwxMTQuNTczeiIvPgo8L2c+CjxkaXYgeG1sbnM9IiIgaWQ9ImRpdlNjcmlwdHNVc2VkIiBzdHlsZT0iZGlzcGxheTogbm9uZSIvPjxzY3JpcHQgeG1sbnM9IiIgaWQ9Imdsb2JhbFZhcnNEZXRlY3Rpb24iIHNyYz0iY2hyb21lLWV4dGVuc2lvbjovL2Nta2RibWZuZGtmZ2VibGRobmtiZmhsbmVlZmRhYWlwL2pzL3dyc19lbnYuanMiLz48L3N2Zz4K"},166:function(e){e.exports={data:{site:{siteMetadata:{title:"Little Endian - Company Site",description:"This repo contains an example business website that is built with Gatsby, and Netlify CMS.It follows the JAMstack architecture by using Git as a single source of truth, and Netlify for continuous deployment, and CDN distribution."}}}}},169:function(e,t,a){"use strict";var M=a(7),n=a.n(M),N=a(170),i=a(0),L=a.n(i),u=a(4),j=a.n(u),c=a(156),s=function(e){function t(){return e.apply(this,arguments)||this}return n()(t,e),t.prototype.render=function(){var e=this.props.data.allMarkdownRemark.edges;return L.a.createElement("div",{className:"columns is-multiline"},e&&e.map(function(e){var t=e.node;return L.a.createElement("div",{className:"is-parent column is-6",key:t.id},L.a.createElement("article",{className:"tile is-child box notification"},L.a.createElement("p",null,L.a.createElement(c.a,{className:"title has-text-primary is-size-4",to:t.fields.slug},t.frontmatter.title),L.a.createElement("span",null," • "),L.a.createElement("span",{className:"subtitle is-size-5 is-block"},t.frontmatter.date)),L.a.createElement("p",null,t.excerpt,L.a.createElement("br",null),L.a.createElement("br",null),L.a.createElement(c.a,{className:"button",to:t.fields.slug},"Keep Reading →"))))}))},t}(L.a.Component);s.propTypes={data:j.a.shape({allMarkdownRemark:j.a.shape({edges:j.a.array})})},t.a=function(){return L.a.createElement(c.b,{query:"1748157918",render:function(e,t){return L.a.createElement(s,{data:e,count:t})},data:N})}},170:function(e){e.exports={data:{allMarkdownRemark:{edges:[{node:{excerpt:"This week we’ll  take  a look at all the steps required to make astonishing coffee with a Chemex at home. The Chemex Coffeemaker is a manual, pour-over style glass-container coffeemaker that Peter Schlumbohm invented in 1941, and which continues to be manufactured by the Chemex Corporation in Chicopee, Massachusetts. In 1958, designers at the  Illinois Institute of Technology  said that the Chemex…",id:"c99a3cd2-dc44-5b59-a994-6da781254f0a",fields:{slug:"/usecases/2017-01-04-a-beginners-guide-to-brewing-with-chemex/"},frontmatter:{title:"A beginners’ guide to brewing with Chemex",templateKey:"use-case",date:"January 04, 2017"}}},{node:{excerpt:"We expect the shipment of a limited quantity of green beans next Monday. We’ll be offering the roasted beans from Tuesday, but quantities are limited, so be quick. Blue Mountain Peak is the highest mountain in Jamaica and one of the highest peaks in the Caribbean at 7,402 ft. It is the home of Blue Mountain coffee and their famous tours. It is located on the border of the Portland and Saint Thomas…",id:"17aed636-f99e-5e04-a9b3-ec37da8229ea",fields:{slug:"/usecases/2017-01-04-just-in-small-batch-of-jamaican-blue-mountain-in-store-next-week/"},frontmatter:{title:"Just in: small batch of Jamaican Blue Mountain in store next week",templateKey:"use-case",date:"January 04, 2017"}}},{node:{excerpt:"The SCAA updated the wheel to reflect the finer nuances needed to describe flavors more precisely. The new descriptions are more detailed and hence allow cuppers to distinguish between more flavors. While this is going to be a big change for professional coffee tasters, it means a lot to you as a consumer as well. We’ll explain how the wheel came to be, how pros use it and what the flavors…",id:"66b560d6-9dca-5129-87b2-ccaeec52eadb",fields:{slug:"/usecases/2016-12-17-making-sense-of-the-scaas-new-flavor-wheel/"},frontmatter:{title:"Making sense of the SCAA’s new Flavor Wheel",templateKey:"use-case",date:"December 17, 2016"}}}]}}}}}]);
//# sourceMappingURL=component---src-pages-usecases-index-js-1246da71318a472dc770.js.map