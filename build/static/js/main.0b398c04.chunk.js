(this.webpackJsonpreact_game_demo=this.webpackJsonpreact_game_demo||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(1),c=n.n(a),s=n(7),o=n.n(s),i=(n(14),n.p+"static/media/logo.6ce24c58.svg"),l=(n(15),n(2)),u=n(3),j=n(5),d=n(4),p=n(8),h=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(e){var r;return Object(l.a)(this,n),(r=t.call(this,e)).state={type:e.type,on:!1},r}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return Object(r.jsx)("div",{className:"squares ".concat("t"+this.state.type," ").concat(this.state.on?"on":""),onClick:function(){return e.setState({on:!0})},children:this.state.type})}}]),n}(c.a.Component),b=new Array(49).fill(1).map((function(e){return Object(p.random)(1,7)}));console.log(b);var O=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(e){var r;return Object(l.a)(this,n),(r=t.call(this,e)).state={arr:b},r}return Object(u.a)(n,[{key:"renderSquare",value:function(e,t){return Object(r.jsx)(h,{type:e,onClick:console.log},t)}},{key:"render",value:function(){var e=this;return Object(r.jsx)("div",{className:"container",children:this.state.arr.map((function(t,n){return e.renderSquare(t,n)}))})}}]),n}(c.a.Component);var f=function(){return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(O,{}),Object(r.jsxs)("header",{className:"App-header",children:[Object(r.jsx)("img",{src:i,className:"App-logo",alt:"logo"}),Object(r.jsxs)("p",{children:["Edit ",Object(r.jsx)("code",{children:"src/App.js"})," and save to reload."]}),Object(r.jsx)("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:"Learn React"})]})]})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))};o.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(f,{})}),document.getElementById("root")),m()}},[[18,1,2]]]);
//# sourceMappingURL=main.0b398c04.chunk.js.map