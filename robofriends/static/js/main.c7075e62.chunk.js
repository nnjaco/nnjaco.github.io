(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(7),c=a.n(o),i=a(1),l=a(2),s=a(4),h=a(3),u=a(5),m=function(e){var t=e.searchChange;return n.a.createElement("div",{className:"pa2"},n.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t}))},d=function(e){var t=e.id,a=e.name,r=e.email;return n.a.createElement("div",{className:"tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5"},n.a.createElement("img",{alt:"Imagend del tobot de lina",src:"https://robohash.org/".concat(t,"?200x200")}),n.a.createElement("div",null,n.a.createElement("h1",null,a),n.a.createElement("p",null,r)))},p=function(e){var t=e.robots,a=e.hasError;if(a)throw console.log(a),new Error("waaaaaaaaaa!");return n.a.createElement("div",null,t.map(function(e,t){return n.a.createElement(d,{key:t,id:e.id,name:e.username,email:e.email})}))},b=function(e){return n.a.createElement("div",{style:{overflowY:"scroll",border:"1px solid black",height:"800px"}},e.children)},f=function(e){var t=e.errorButtonClicked;return n.a.createElement("div",{className:"pa3 ma2"},n.a.createElement("a",{className:"f2 link dim br3 ph3 pv2 mb2 dib white bg-dark-green",href:"#0",onClick:t},"Throw an error!"))},E=(a(14),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(h.a)(t).call(this,e))).state={hasError:!1},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?n.a.createElement("h1",null,"Oooooops! Something went wrong..."):this.props.children}}]),t}(r.Component)),g=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(h.a)(t).call(this))).onSearchChange=function(t){e.setState({searchField:t.target.value})},e.errorButtonClicked=function(t){e.setState({cardListError:!0})},e.state={robots:[],searchField:"",cardListError:!1},e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then(function(t){t.json().then(function(t){e.setState({robots:t})})})}},{key:"render",value:function(){var e=this.state,t=e.robots,a=e.searchField,r=e.cardListError,o=t.filter(function(e){return e.username.toLowerCase().includes(a.toLowerCase())});return t.length?n.a.createElement("div",{className:"tc"},n.a.createElement("h1",{className:"header-font pa1 ma2 purple"},"RoboFriends"),n.a.createElement(m,{searchChange:this.onSearchChange}),n.a.createElement(b,null,n.a.createElement(E,null,n.a.createElement(p,{robots:o,hasError:r}))),n.a.createElement(f,{errorButtonClicked:this.errorButtonClicked})):n.a.createElement("h1",{className:"tc header-font pa1 ma2 purple"},"Loading")}}]),t}(r.Component);a(15),a(16),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,a){e.exports=a(17)}},[[8,1,2]]]);
//# sourceMappingURL=main.c7075e62.chunk.js.map