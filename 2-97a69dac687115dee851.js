(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{156:function(e,t,a){"use strict";a.d(t,"b",function(){return l});var i=a(0),s=a.n(i),n=a(4),M=a.n(n),r=a(33),u=a.n(r);a.d(t,"a",function(){return u.a});a(157);var c=s.a.createContext({}),l=function(e){return s.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):s.a.createElement("div",null,"Loading (StaticQuery)")})};l.propTypes={data:M.a.object,query:M.a.string.isRequired,render:M.a.func,children:M.a.func}},157:function(e,t,a){var i;e.exports=(i=a(160))&&i.default||i},158:function(e,t,a){e.exports=a.p+"static/littleendian-logo-512891dca667eae0131b546c33430ba0.svg"},159:function(e,t,a){"use strict";var i=a(0),s=a.n(i),n=a(167),M=a.n(n),r=a(7),u=a.n(r),c=a(156),l=a(158),L=a.n(l),N=a(161),j=a.n(N),o=a(162),g=a.n(o),d=a(163),y=a.n(d),m=a(164),I=a.n(m),T=function(e){function t(){return e.apply(this,arguments)||this}return u()(t,e),t.prototype.render=function(){return s.a.createElement("footer",{className:"footer has-background-black has-text-white-ter"},s.a.createElement("div",{className:"content has-text-centered"},s.a.createElement("img",{src:L.a,alt:"LittleEndian",style:{width:"14em",height:"10em"}})),s.a.createElement("div",{className:"content has-text-centered has-background-black has-text-white-ter"},s.a.createElement("div",{className:"container has-background-black has-text-white-ter"},s.a.createElement("div",{className:"columns"},s.a.createElement("div",{className:"column is-4"},s.a.createElement("section",{className:"menu"},s.a.createElement("ul",{className:"menu-list"},s.a.createElement("li",null,s.a.createElement(c.a,{to:"/",className:"navbar-item"},"Home")),s.a.createElement("li",null,s.a.createElement(c.a,{className:"navbar-item",to:"/about"},"About")),s.a.createElement("li",null,s.a.createElement(c.a,{className:"navbar-item",to:"/technologies"},"technologies")),s.a.createElement("li",null,s.a.createElement("a",{className:"navbar-item",href:"/admin/",target:"_blank",rel:"noopener noreferrer"},"Admin"))))),s.a.createElement("div",{className:"column is-4"},s.a.createElement("section",null,s.a.createElement("ul",{className:"menu-list"},s.a.createElement("li",null,s.a.createElement(c.a,{className:"navbar-item",to:"/use-cases"},"Use Cases")),s.a.createElement("li",null,s.a.createElement(c.a,{className:"navbar-item",to:"/contact"},"Contact"))))),s.a.createElement("div",{className:"column is-4 social"},s.a.createElement("a",{title:"facebook",href:"https://facebook.com"},s.a.createElement("img",{src:j.a,alt:"Facebook",style:{width:"1em",height:"1em"}})),s.a.createElement("a",{title:"twitter",href:"https://twitter.com"},s.a.createElement("img",{className:"fas fa-lg",src:y.a,alt:"Twitter",style:{width:"1em",height:"1em"}})),s.a.createElement("a",{title:"instagram",href:"https://instagram.com"},s.a.createElement("img",{src:g.a,alt:"Instagram",style:{width:"1em",height:"1em"}})),s.a.createElement("a",{title:"vimeo",href:"https://vimeo.com"},s.a.createElement("img",{src:I.a,alt:"Vimeo",style:{width:"1em",height:"1em"}})))))))},t}(s.a.Component),D=a(165),S=a.n(D),z=function(e){function t(t){var a;return(a=e.call(this,t)||this).toggleHamburger=function(){a.setState({active:!a.state.active},function(){a.state.active?a.setState({navBarActiveClass:"is-active"}):a.setState({navBarActiveClass:""})})},a.state={active:!1,navBarActiveClass:""},a}return u()(t,e),t.prototype.render=function(){var e=this;return s.a.createElement("nav",{className:"navbar is-transparent",role:"navigation","aria-label":"main-navigation"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"navbar-brand"},s.a.createElement(c.a,{to:"/",className:"navbar-item",title:"Logo"},s.a.createElement("img",{src:L.a,alt:"LittleEndian",style:{width:"120px"}})),s.a.createElement("div",{className:"navbar-burger burger "+this.state.navBarActiveClass,"data-target":"navMenu",onClick:function(){return e.toggleHamburger()}},s.a.createElement("span",null),s.a.createElement("span",null),s.a.createElement("span",null))),s.a.createElement("div",{id:"navMenu",className:"navbar-menu "+this.state.navBarActiveClass},s.a.createElement("div",{className:"navbar-start has-text-centered"},s.a.createElement(c.a,{className:"navbar-item",to:"/about"},"About"),s.a.createElement(c.a,{className:"navbar-item",to:"/technologies"},"Technologies"),s.a.createElement(c.a,{className:"navbar-item",to:"/usecases"},"Use Cases"),s.a.createElement(c.a,{className:"navbar-item",to:"/contact"},"Contact")),s.a.createElement("div",{className:"navbar-end has-text-centered"},s.a.createElement("a",{className:"navbar-item",href:"https://github.com/orgs/little-endian-guglielmino/",target:"_blank",rel:"noopener noreferrer"},s.a.createElement("span",{className:"icon"},s.a.createElement("img",{src:S.a,alt:"Github"})))))))},t}(s.a.Component),E=(a(168),a(166)),f=function(){return E.data.site.siteMetadata};t.a=function(e){var t=e.children,a=f(),i=a.title,n=a.description;return s.a.createElement("div",null,s.a.createElement(M.a,null,s.a.createElement("html",{lang:"en"}),s.a.createElement("title",null,i),s.a.createElement("meta",{name:"description",content:n}),s.a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/img/apple-touch-icon.png"}),s.a.createElement("link",{rel:"icon",type:"image/png",href:"/img/favicon-32x32.png",sizes:"32x32"}),s.a.createElement("link",{rel:"icon",type:"image/png",href:"/img/favicon-16x16.png",sizes:"16x16"}),s.a.createElement("link",{rel:"mask-icon",href:"/img/safari-pinned-tab.svg",color:"#ff4400"}),s.a.createElement("meta",{name:"theme-color",content:"#fff"}),s.a.createElement("meta",{property:"og:type",content:"business.business"}),s.a.createElement("meta",{property:"og:title",content:i}),s.a.createElement("meta",{property:"og:url",content:"/"}),s.a.createElement("meta",{property:"og:image",content:"/img/og-image.jpg"})),s.a.createElement(z,null),s.a.createElement("div",null,t),s.a.createElement(T,null))}},160:function(e,t,a){"use strict";a.r(t);a(34);var i=a(0),s=a.n(i),n=a(4),M=a.n(n),r=a(55),u=a(2),c=function(e){var t=e.location,a=u.default.getResourcesForPathnameSync(t.pathname);return s.a.createElement(r.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:M.a.shape({pathname:M.a.string.isRequired}).isRequired},t.default=c},161:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+RmFjZWJvb2sgaWNvbjwvdGl0bGU+PHBhdGggZD0iTTIyLjY3NiAwSDEuMzI0Qy41OTMgMCAwIC41OTMgMCAxLjMyNHYyMS4zNTJDMCAyMy40MDguNTkzIDI0IDEuMzI0IDI0aDExLjQ5NHYtOS4yOTRIOS42ODl2LTMuNjIxaDMuMTI5VjguNDFjMC0zLjA5OSAxLjg5NC00Ljc4NSA0LjY1OS00Ljc4NSAxLjMyNSAwIDIuNDY0LjA5NyAyLjc5Ni4xNDF2My4yNGgtMS45MjFjLTEuNSAwLTEuNzkyLjcyMS0xLjc5MiAxLjc3MXYyLjMxMWgzLjU4NGwtLjQ2NSAzLjYzSDE2LjU2VjI0aDYuMTE1Yy43MzMgMCAxLjMyNS0uNTkyIDEuMzI1LTEuMzI0VjEuMzI0QzI0IC41OTMgMjMuNDA4IDAgMjIuNjc2IDAiLz48L3N2Zz4="},162:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+SW5zdGFncmFtIGljb248L3RpdGxlPjxwYXRoIGQ9Ik0xMiAwQzguNzQgMCA4LjMzMy4wMTUgNy4wNTMuMDcyIDUuNzc1LjEzMiA0LjkwNS4zMzMgNC4xNC42M2MtLjc4OS4zMDYtMS40NTkuNzE3LTIuMTI2IDEuMzg0Uy45MzUgMy4zNS42MyA0LjE0Qy4zMzMgNC45MDUuMTMxIDUuNzc1LjA3MiA3LjA1My4wMTIgOC4zMzMgMCA4Ljc0IDAgMTJzLjAxNSAzLjY2Ny4wNzIgNC45NDdjLjA2IDEuMjc3LjI2MSAyLjE0OC41NTggMi45MTMuMzA2Ljc4OC43MTcgMS40NTkgMS4zODQgMi4xMjYuNjY3LjY2NiAxLjMzNiAxLjA3OSAyLjEyNiAxLjM4NC43NjYuMjk2IDEuNjM2LjQ5OSAyLjkxMy41NThDOC4zMzMgMjMuOTg4IDguNzQgMjQgMTIgMjRzMy42NjctLjAxNSA0Ljk0Ny0uMDcyYzEuMjc3LS4wNiAyLjE0OC0uMjYyIDIuOTEzLS41NTguNzg4LS4zMDYgMS40NTktLjcxOCAyLjEyNi0xLjM4NC42NjYtLjY2NyAxLjA3OS0xLjMzNSAxLjM4NC0yLjEyNi4yOTYtLjc2NS40OTktMS42MzYuNTU4LTIuOTEzLjA2LTEuMjguMDcyLTEuNjg3LjA3Mi00Ljk0N3MtLjAxNS0zLjY2Ny0uMDcyLTQuOTQ3Yy0uMDYtMS4yNzctLjI2Mi0yLjE0OS0uNTU4LTIuOTEzLS4zMDYtLjc4OS0uNzE4LTEuNDU5LTEuMzg0LTIuMTI2QzIxLjMxOSAxLjM0NyAyMC42NTEuOTM1IDE5Ljg2LjYzYy0uNzY1LS4yOTctMS42MzYtLjQ5OS0yLjkxMy0uNTU4QzE1LjY2Ny4wMTIgMTUuMjYgMCAxMiAwem0wIDIuMTZjMy4yMDMgMCAzLjU4NS4wMTYgNC44NS4wNzEgMS4xNy4wNTUgMS44MDUuMjQ5IDIuMjI3LjQxNS41NjIuMjE3Ljk2LjQ3NyAxLjM4Mi44OTYuNDE5LjQyLjY3OS44MTkuODk2IDEuMzgxLjE2NC40MjIuMzYgMS4wNTcuNDEzIDIuMjI3LjA1NyAxLjI2Ni4wNyAxLjY0Ni4wNyA0Ljg1cy0uMDE1IDMuNTg1LS4wNzQgNC44NWMtLjA2MSAxLjE3LS4yNTYgMS44MDUtLjQyMSAyLjIyNy0uMjI0LjU2Mi0uNDc5Ljk2LS44OTkgMS4zODItLjQxOS40MTktLjgyNC42NzktMS4zOC44OTYtLjQyLjE2NC0xLjA2NS4zNi0yLjIzNS40MTMtMS4yNzQuMDU3LTEuNjQ5LjA3LTQuODU5LjA3LTMuMjExIDAtMy41ODYtLjAxNS00Ljg1OS0uMDc0LTEuMTcxLS4wNjEtMS44MTYtLjI1Ni0yLjIzNi0uNDIxLS41NjktLjIyNC0uOTYtLjQ3OS0xLjM3OS0uODk5LS40MjEtLjQxOS0uNjktLjgyNC0uOS0xLjM4LS4xNjUtLjQyLS4zNTktMS4wNjUtLjQyLTIuMjM1LS4wNDUtMS4yNi0uMDYxLTEuNjQ5LS4wNjEtNC44NDQgMC0zLjE5Ni4wMTYtMy41ODYuMDYxLTQuODYxLjA2MS0xLjE3LjI1NS0xLjgxNC40Mi0yLjIzNC4yMS0uNTcuNDc5LS45Ni45LTEuMzgxLjQxOS0uNDE5LjgxLS42ODkgMS4zNzktLjg5OC40Mi0uMTY2IDEuMDUxLS4zNjEgMi4yMjEtLjQyMSAxLjI3NS0uMDQ1IDEuNjUtLjA2IDQuODU5LS4wNmwuMDQ1LjAzem0wIDMuNjc4Yy0zLjQwNSAwLTYuMTYyIDIuNzYtNi4xNjIgNi4xNjIgMCAzLjQwNSAyLjc2IDYuMTYyIDYuMTYyIDYuMTYyIDMuNDA1IDAgNi4xNjItMi43NiA2LjE2Mi02LjE2MiAwLTMuNDA1LTIuNzYtNi4xNjItNi4xNjItNi4xNjJ6TTEyIDE2Yy0yLjIxIDAtNC0xLjc5LTQtNHMxLjc5LTQgNC00IDQgMS43OSA0IDQtMS43OSA0LTQgNHptNy44NDYtMTAuNDA1YzAgLjc5NS0uNjQ2IDEuNDQtMS40NCAxLjQ0LS43OTUgMC0xLjQ0LS42NDYtMS40NC0xLjQ0IDAtLjc5NC42NDYtMS40MzkgMS40NC0xLjQzOS43OTMtLjAwMSAxLjQ0LjY0NSAxLjQ0IDEuNDM5eiIvPjwvc3ZnPg=="},163:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+VHdpdHRlciBpY29uPC90aXRsZT48cGF0aCBkPSJNMjMuOTU0IDQuNTY5Yy0uODg1LjM4OS0xLjgzLjY1NC0yLjgyNS43NzUgMS4wMTQtLjYxMSAxLjc5NC0xLjU3NCAyLjE2My0yLjcyMy0uOTUxLjU1NS0yLjAwNS45NTktMy4xMjcgMS4xODQtLjg5Ni0uOTU5LTIuMTczLTEuNTU5LTMuNTkxLTEuNTU5LTIuNzE3IDAtNC45MiAyLjIwMy00LjkyIDQuOTE3IDAgLjM5LjA0NS43NjUuMTI3IDEuMTI0QzcuNjkxIDguMDk0IDQuMDY2IDYuMTMgMS42NCAzLjE2MWMtLjQyNy43MjItLjY2NiAxLjU2MS0uNjY2IDIuNDc1IDAgMS43MS44NyAzLjIxMyAyLjE4OCA0LjA5Ni0uODA3LS4wMjYtMS41NjYtLjI0OC0yLjIyOC0uNjE2di4wNjFjMCAyLjM4NSAxLjY5MyA0LjM3NCAzLjk0NiA0LjgyNy0uNDEzLjExMS0uODQ5LjE3MS0xLjI5Ni4xNzEtLjMxNCAwLS42MTUtLjAzLS45MTYtLjA4Ni42MzEgMS45NTMgMi40NDUgMy4zNzcgNC42MDQgMy40MTctMS42OCAxLjMxOS0zLjgwOSAyLjEwNS02LjEwMiAyLjEwNS0uMzkgMC0uNzc5LS4wMjMtMS4xNy0uMDY3IDIuMTg5IDEuMzk0IDQuNzY4IDIuMjA5IDcuNTU3IDIuMjA5IDkuMDU0IDAgMTMuOTk5LTcuNDk2IDEzLjk5OS0xMy45ODYgMC0uMjA5IDAtLjQyLS4wMTUtLjYzLjk2MS0uNjg5IDEuOC0xLjU2IDIuNDYtMi41NDhsLS4wNDctLjAyeiIvPjwvc3ZnPg=="},164:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+VmltZW8gaWNvbjwvdGl0bGU+PHBhdGggZD0iTTIzLjk3NyA2LjQxNmMtLjEwNSAyLjMzOC0xLjczOSA1LjU0My00Ljg5NCA5LjYwOS0zLjI2OCA0LjI0Ny02LjAyNiA2LjM3LTguMjkgNi4zNy0xLjQwOSAwLTIuNTc4LTEuMjk0LTMuNTUzLTMuODgxTDUuMzIyIDExLjRDNC42MDMgOC44MTYgMy44MzQgNy41MjIgMy4wMSA3LjUyMmMtLjE3OSAwLS44MDYuMzc4LTEuODgxIDEuMTMyTDAgNy4xOTdjMS4xODUtMS4wNDQgMi4zNTEtMi4wODQgMy41MDEtMy4xMjhDNS4wOCAyLjcwMSA2LjI2NiAxLjk4NCA3LjA1NSAxLjkxYzEuODY3LS4xOCAzLjAxNiAxLjEgMy40NDcgMy44MzguNDY1IDIuOTUzLjc4OSA0Ljc4OS45NzEgNS41MDcuNTM5IDIuNDUgMS4xMzEgMy42NzQgMS43NzYgMy42NzQuNTAyIDAgMS4yNTYtLjc5NiAyLjI2NS0yLjM4NSAxLjAwNC0xLjU4OSAxLjU0LTIuNzk3IDEuNjEyLTMuNjI4LjE0NC0xLjM3MS0uMzk1LTIuMDYxLTEuNjE0LTIuMDYxLS41NzQgMC0xLjE2Ny4xMjEtMS43NzcuMzkxIDEuMTg2LTMuODY4IDMuNDM0LTUuNzU3IDYuNzYyLTUuNjM3IDIuNDczLjA2IDMuNjI4IDEuNjY0IDMuNDkzIDQuNzk3bC0uMDEzLjAxeiIvPjwvc3ZnPg=="},165:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNDM4LjU0OXB4IiBoZWlnaHQ9IjQzOC41NDlweCIgdmlld0JveD0iMCAwIDQzOC41NDkgNDM4LjU0OSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDM4LjU0OSA0MzguNTQ5OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPHBhdGggZD0iTTQwOS4xMzIsMTE0LjU3M2MtMTkuNjA4LTMzLjU5Ni00Ni4yMDUtNjAuMTk0LTc5Ljc5OC03OS44QzI5NS43MzYsMTUuMTY2LDI1OS4wNTcsNS4zNjUsMjE5LjI3MSw1LjM2NSAgIGMtMzkuNzgxLDAtNzYuNDcyLDkuODA0LTExMC4wNjMsMjkuNDA4Yy0zMy41OTYsMTkuNjA1LTYwLjE5Miw0Ni4yMDQtNzkuOCw3OS44QzkuODAzLDE0OC4xNjgsMCwxODQuODU0LDAsMjI0LjYzICAgYzAsNDcuNzgsMTMuOTQsOTAuNzQ1LDQxLjgyNywxMjguOTA2YzI3Ljg4NCwzOC4xNjQsNjMuOTA2LDY0LjU3MiwxMDguMDYzLDc5LjIyN2M1LjE0LDAuOTU0LDguOTQ1LDAuMjgzLDExLjQxOS0xLjk5NiAgIGMyLjQ3NS0yLjI4MiwzLjcxMS01LjE0LDMuNzExLTguNTYyYzAtMC41NzEtMC4wNDktNS43MDgtMC4xNDQtMTUuNDE3Yy0wLjA5OC05LjcwOS0wLjE0NC0xOC4xNzktMC4xNDQtMjUuNDA2bC02LjU2NywxLjEzNiAgIGMtNC4xODcsMC43NjctOS40NjksMS4wOTItMTUuODQ2LDFjLTYuMzc0LTAuMDg5LTEyLjk5MS0wLjc1Ny0xOS44NDItMS45OTljLTYuODU0LTEuMjMxLTEzLjIyOS00LjA4Ni0xOS4xMy04LjU1OSAgIGMtNS44OTgtNC40NzMtMTAuMDg1LTEwLjMyOC0xMi41Ni0xNy41NTZsLTIuODU1LTYuNTdjLTEuOTAzLTQuMzc0LTQuODk5LTkuMjMzLTguOTkyLTE0LjU1OSAgIGMtNC4wOTMtNS4zMzEtOC4yMzItOC45NDUtMTIuNDE5LTEwLjg0OGwtMS45OTktMS40MzFjLTEuMzMyLTAuOTUxLTIuNTY4LTIuMDk4LTMuNzExLTMuNDI5Yy0xLjE0Mi0xLjMzMS0xLjk5Ny0yLjY2My0yLjU2OC0zLjk5NyAgIGMtMC41NzItMS4zMzUtMC4wOTgtMi40MywxLjQyNy0zLjI4OWMxLjUyNS0wLjg1OSw0LjI4MS0xLjI3Niw4LjI4LTEuMjc2bDUuNzA4LDAuODUzYzMuODA3LDAuNzYzLDguNTE2LDMuMDQyLDE0LjEzMyw2Ljg1MSAgIGM1LjYxNCwzLjgwNiwxMC4yMjksOC43NTQsMTMuODQ2LDE0Ljg0MmM0LjM4LDcuODA2LDkuNjU3LDEzLjc1NCwxNS44NDYsMTcuODQ3YzYuMTg0LDQuMDkzLDEyLjQxOSw2LjEzNiwxOC42OTksNi4xMzYgICBjNi4yOCwwLDExLjcwNC0wLjQ3NiwxNi4yNzQtMS40MjNjNC41NjUtMC45NTIsOC44NDgtMi4zODMsMTIuODQ3LTQuMjg1YzEuNzEzLTEyLjc1OCw2LjM3Ny0yMi41NTksMTMuOTg4LTI5LjQxICAgYy0xMC44NDgtMS4xNC0yMC42MDEtMi44NTctMjkuMjY0LTUuMTRjLTguNjU4LTIuMjg2LTE3LjYwNS01Ljk5Ni0yNi44MzUtMTEuMTRjLTkuMjM1LTUuMTM3LTE2Ljg5Ni0xMS41MTYtMjIuOTg1LTE5LjEyNiAgIGMtNi4wOS03LjYxNC0xMS4wODgtMTcuNjEtMTQuOTg3LTI5Ljk3OWMtMy45MDEtMTIuMzc0LTUuODUyLTI2LjY0OC01Ljg1Mi00Mi44MjZjMC0yMy4wMzUsNy41Mi00Mi42MzcsMjIuNTU3LTU4LjgxNyAgIGMtNy4wNDQtMTcuMzE4LTYuMzc5LTM2LjczMiwxLjk5Ny01OC4yNGM1LjUyLTEuNzE1LDEzLjcwNi0wLjQyOCwyNC41NTQsMy44NTNjMTAuODUsNC4yODMsMTguNzk0LDcuOTUyLDIzLjg0LDEwLjk5NCAgIGM1LjA0NiwzLjA0MSw5LjA4OSw1LjYxOCwxMi4xMzUsNy43MDhjMTcuNzA1LTQuOTQ3LDM1Ljk3Ni03LjQyMSw1NC44MTgtNy40MjFzMzcuMTE3LDIuNDc0LDU0LjgyMyw3LjQyMWwxMC44NDktNi44NDkgICBjNy40MTktNC41NywxNi4xOC04Ljc1OCwyNi4yNjItMTIuNTY1YzEwLjA4OC0zLjgwNSwxNy44MDItNC44NTMsMjMuMTM0LTMuMTM4YzguNTYyLDIxLjUwOSw5LjMyNSw0MC45MjIsMi4yNzksNTguMjQgICBjMTUuMDM2LDE2LjE4LDIyLjU1OSwzNS43ODcsMjIuNTU5LDU4LjgxN2MwLDE2LjE3OC0xLjk1OCwzMC40OTctNS44NTMsNDIuOTY2Yy0zLjksMTIuNDcxLTguOTQxLDIyLjQ1Ny0xNS4xMjUsMjkuOTc5ICAgYy02LjE5MSw3LjUyMS0xMy45MDEsMTMuODUtMjMuMTMxLDE4Ljk4NmMtOS4yMzIsNS4xNC0xOC4xODIsOC44NS0yNi44NCwxMS4xMzZjLTguNjYyLDIuMjg2LTE4LjQxNSw0LjAwNC0yOS4yNjMsNS4xNDYgICBjOS44OTQsOC41NjIsMTQuODQyLDIyLjA3NywxNC44NDIsNDAuNTM5djYwLjIzN2MwLDMuNDIyLDEuMTksNi4yNzksMy41NzIsOC41NjJjMi4zNzksMi4yNzksNi4xMzYsMi45NSwxMS4yNzYsMS45OTUgICBjNDQuMTYzLTE0LjY1Myw4MC4xODUtNDEuMDYyLDEwOC4wNjgtNzkuMjI2YzI3Ljg4LTM4LjE2MSw0MS44MjUtODEuMTI2LDQxLjgyNS0xMjguOTA2ICAgQzQzOC41MzYsMTg0Ljg1MSw0MjguNzI4LDE0OC4xNjgsNDA5LjEzMiwxMTQuNTczeiIvPgo8L2c+CjxkaXYgeG1sbnM9IiIgaWQ9ImRpdlNjcmlwdHNVc2VkIiBzdHlsZT0iZGlzcGxheTogbm9uZSIvPjxzY3JpcHQgeG1sbnM9IiIgaWQ9Imdsb2JhbFZhcnNEZXRlY3Rpb24iIHNyYz0iY2hyb21lLWV4dGVuc2lvbjovL2Nta2RibWZuZGtmZ2VibGRobmtiZmhsbmVlZmRhYWlwL2pzL3dyc19lbnYuanMiLz48L3N2Zz4K"},166:function(e){e.exports={data:{site:{siteMetadata:{title:"Little Endian - Company Site",description:"This repo contains an example business website that is built with Gatsby, and Netlify CMS.It follows the JAMstack architecture by using Git as a single source of truth, and Netlify for continuous deployment, and CDN distribution."}}}}},176:function(e,t,a){"use strict";var i=a(0),s=a.n(i),n=a(4),M=a.n(n),r=a(177),u=function(e){var t=e.gridItems;return s.a.createElement("div",{className:"columns is-multiline"},t.map(function(e){return s.a.createElement("div",{key:e.text,className:"column is-6"},s.a.createElement("section",{className:"section"},s.a.createElement("div",{className:"has-text-centered"},s.a.createElement("div",{style:{width:"240px",display:"inline-block"}},s.a.createElement(r.a,{imageInfo:e}))),s.a.createElement("p",null,e.text)))}))};u.propTypes={gridItems:M.a.arrayOf(M.a.shape({image:M.a.oneOfType([M.a.object,M.a.string]),text:M.a.string}))},t.a=u},177:function(e,t,a){"use strict";var i=a(0),s=a.n(i),n=a(4),M=a.n(n),r=a(188),u=a.n(r),c=function(e){var t=e.imageInfo,a={borderRadius:"5px"},i=t.alt,n=void 0===i?"":i,M=t.childImageSharp,r=t.image;return r&&r.childImageSharp?s.a.createElement(u.a,{style:a,fluid:r.childImageSharp.fluid,alt:n}):M?s.a.createElement(u.a,{style:a,fluid:M.fluid,alt:n}):r&&"string"==typeof r?s.a.createElement("img",{style:a,src:r,alt:n}):null};c.propTypes={imageInfo:M.a.shape({alt:M.a.string,childImageSharp:M.a.object,image:M.a.oneOfType([M.a.object,M.a.string]).isRequired,style:M.a.object}).isRequired},t.a=c},188:function(e,t,a){"use strict";var i=a(8);t.__esModule=!0,t.default=void 0;var s,n=i(a(7)),M=i(a(37)),r=i(a(76)),u=i(a(77)),c=i(a(0)),l=i(a(4)),L=function(e){var t=(0,u.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},N=Object.create({}),j=function(e){var t=L(e),a=t.fluid?t.fluid.src:t.fixed.src;return N[a]||!1},o=new WeakMap;var g=function(e,t){var a=(void 0===s&&"undefined"!=typeof window&&window.IntersectionObserver&&(s=new window.IntersectionObserver(function(e){e.forEach(function(e){if(o.has(e.target)){var t=o.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(s.unobserve(e.target),o.delete(e.target),t())}})},{rootMargin:"200px"})),s);return a&&(a.observe(e),o.set(e,t)),function(){a.unobserve(e),o.delete(e)}},d=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+a+"/>":"",s=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",M=e.alt?'alt="'+e.alt+'" ':'alt="" ';return"<picture>"+i+"<img "+(e.width?'width="'+e.width+'" ':"")+(e.height?'height="'+e.height+'" ':"")+a+s+t+M+n+(e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"")+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},y=c.default.forwardRef(function(e,t){var a=e.sizes,i=e.srcSet,s=e.src,n=e.style,M=e.onLoad,l=e.onError,L=(0,r.default)(e,["sizes","srcSet","src","style","onLoad","onError"]);return c.default.createElement("img",(0,u.default)({sizes:a,srcSet:i,src:s},L,{onLoad:M,onError:l,ref:t,style:(0,u.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))});y.propTypes={style:l.default.object,onError:l.default.func,onLoad:l.default.func};var m=function(e){function t(t){var a;a=e.call(this,t)||this;var i=!0,s=!1,n=t.fadeIn,r=j(t);!r&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=!1,s=!0),"undefined"==typeof window&&(i=!1),t.critical&&(i=!0,s=!1);var u=!(t.critical&&!t.fadeIn);return a.state={isVisible:i,imgLoaded:!1,imgCached:!1,IOSupported:s,fadeIn:n,hasNoScript:u,seenBefore:r},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,M.default)((0,M.default)(a))),a.handleRef=a.handleRef.bind((0,M.default)((0,M.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:j(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&(this.cleanUpListeners=g(e,function(){var e=j(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:t.imageRef.current.currentSrc.length>0})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=L(e),a=t.fluid?t.fluid.src:t.fixed.src,N[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=L(this.props),t=e.title,a=e.alt,i=e.className,s=e.style,n=void 0===s?{}:s,M=e.imgStyle,r=void 0===M?{}:M,l=e.placeholderStyle,N=void 0===l?{}:l,j=e.placeholderClassName,o=e.fluid,g=e.fixed,m=e.backgroundColor,I=e.Tag,T=e.itemProp,D=this.state.imgLoaded||!1===this.state.fadeIn,S=!0===this.state.fadeIn&&!this.state.imgCached,z=(0,u.default)({opacity:D?1:0,transition:S?"opacity 0.5s":"none"},r),E="boolean"==typeof m?"lightgray":m,f={transitionDelay:"0.5s"},x=(0,u.default)({opacity:this.state.imgLoaded?0:1},S&&f,r,N),O={title:t,alt:this.state.isVisible?"":a,style:x,className:j};if(o){var A=o;return c.default.createElement(I,{className:(i||"")+" gatsby-image-wrapper",style:(0,u.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(A.srcSet)},c.default.createElement(I,{style:{width:"100%",paddingBottom:100/A.aspectRatio+"%"}}),E&&c.default.createElement(I,{title:t,style:(0,u.default)({backgroundColor:E,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},S&&f)}),A.base64&&c.default.createElement(y,(0,u.default)({src:A.base64},O)),A.tracedSVG&&c.default.createElement(y,(0,u.default)({src:A.tracedSVG},O)),this.state.isVisible&&c.default.createElement("picture",null,A.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:A.srcSetWebp,sizes:A.sizes}),c.default.createElement(y,{alt:a,title:t,sizes:A.sizes,src:A.src,crossOrigin:this.props.crossOrigin,srcSet:A.srcSet,style:z,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:T})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:d((0,u.default)({alt:a,title:t},A))}}))}if(g){var p=g,h=(0,u.default)({position:"relative",overflow:"hidden",display:"inline-block",width:p.width,height:p.height},n);return"inherit"===n.display&&delete h.display,c.default.createElement(I,{className:(i||"")+" gatsby-image-wrapper",style:h,ref:this.handleRef,key:"fixed-"+JSON.stringify(p.srcSet)},E&&c.default.createElement(I,{title:t,style:(0,u.default)({backgroundColor:E,width:p.width,opacity:this.state.imgLoaded?0:1,height:p.height},S&&f)}),p.base64&&c.default.createElement(y,(0,u.default)({src:p.base64},O)),p.tracedSVG&&c.default.createElement(y,(0,u.default)({src:p.tracedSVG},O)),this.state.isVisible&&c.default.createElement("picture",null,p.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:p.srcSetWebp,sizes:p.sizes}),c.default.createElement(y,{alt:a,title:t,width:p.width,height:p.height,sizes:p.sizes,src:p.src,crossOrigin:this.props.crossOrigin,srcSet:p.srcSet,style:z,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:T})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:d((0,u.default)({alt:a,title:t},p))}}))}return null},t}(c.default.Component);m.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var I=l.default.shape({width:l.default.number.isRequired,height:l.default.number.isRequired,src:l.default.string.isRequired,srcSet:l.default.string.isRequired,base64:l.default.string,tracedSVG:l.default.string,srcWebp:l.default.string,srcSetWebp:l.default.string}),T=l.default.shape({aspectRatio:l.default.number.isRequired,src:l.default.string.isRequired,srcSet:l.default.string.isRequired,sizes:l.default.string.isRequired,base64:l.default.string,tracedSVG:l.default.string,srcWebp:l.default.string,srcSetWebp:l.default.string});m.propTypes={resolutions:I,sizes:T,fixed:I,fluid:T,fadeIn:l.default.bool,title:l.default.string,alt:l.default.string,className:l.default.oneOfType([l.default.string,l.default.object]),critical:l.default.bool,crossOrigin:l.default.oneOfType([l.default.string,l.default.bool]),style:l.default.object,imgStyle:l.default.object,placeholderStyle:l.default.object,placeholderClassName:l.default.string,backgroundColor:l.default.oneOfType([l.default.string,l.default.bool]),onLoad:l.default.func,onError:l.default.func,onStartLoad:l.default.func,Tag:l.default.string,itemProp:l.default.string};var D=m;t.default=D}}]);
//# sourceMappingURL=2-97a69dac687115dee851.js.map