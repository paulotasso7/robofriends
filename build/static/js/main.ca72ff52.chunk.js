(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{12:function(e,n,a){},14:function(e,n,a){},16:function(e,n,a){"use strict";a.r(n);var t=a(1),i=a.n(t),r=a(3),s=a.n(r),o=(a(12),a(4)),c=a(5),l=a(7),h=a(6),d=a(0),m=function(e){var n=e.name,a=e.email,t=e.id;return Object(d.jsxs)("div",{className:"bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(d.jsx)("img",{alt:"robots",src:"https://robohash.org/".concat(t,"?200x200")}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:n}),Object(d.jsx)("p",{children:a})]})]})},u=function(e){var n=e.robots;return Object(d.jsx)("div",{children:n.map((function(e,a){return Object(d.jsx)(m,{id:n[a].id,name:n[a].name,email:n[a].email},a)}))})},b=function(e){e.searchfield;var n=e.searchChange;return Object(d.jsx)("div",{className:"pa2",children:Object(d.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:n})})},j=function(e){return Object(d.jsx)("div",{style:{overflowY:"scroll",border:"5px solid black",height:"500px"},children:e.children})},f=(a(14),function(e){Object(l.a)(a,e);var n=Object(h.a)(a);function a(){var e;return Object(o.a)(this,a),(e=n.call(this)).onSearchChange=function(n){e.setState({searchfield:n.target.value})},e.state={robots:[],searchfield:""},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(n){e.setState({robots:n})}))}},{key:"render",value:function(){var e=this.state,n=e.robots,a=e.searchfield,t=n.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())}));return n.length?Object(d.jsxs)("div",{className:"tc",children:[Object(d.jsx)("h1",{className:"f1",children:"RoboFriends"}),Object(d.jsx)(b,{searchChange:this.onSearchChange}),Object(d.jsx)(j,{children:Object(d.jsx)(u,{robots:t})})]}):Object(d.jsx)("h1",{children:"Loading"})}}]),a}(t.Component)),g=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,17)).then((function(n){var a=n.getCLS,t=n.getFID,i=n.getFCP,r=n.getLCP,s=n.getTTFB;a(e),t(e),i(e),r(e),s(e)}))};a(15);s.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(f,{robots:[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}]})}),document.getElementById("root")),g()}},[[16,1,2]]]);
//# sourceMappingURL=main.ca72ff52.chunk.js.map