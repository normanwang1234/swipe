(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{125:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(6),r=a.n(i),o=a(16),l=a(11),s=a(12),m=a(14),u=a(13),d=a(15),h=a(10),p=a(126),b=(a(37),function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"background-e9",style:{display:"flex",margin:"auto",width:"100%",textAlign:"center",justifyContent:"center",alignItems:"center"}},c.a.createElement("div",null,c.a.createElement("h1",{style:{fontFamily:"Leckerli One",fontSize:40,color:"black"}},"Swipe Right To Like."),c.a.createElement("img",{src:"https://www.onlygfx.com/wp-content/uploads/2016/05/hand-drawn-heart-2.png",style:{width:100,height:100}}),c.a.createElement("h2",{style:{fontFamily:"Leckerli One",fontSize:40,color:"black",paddingBottom:10}},"Swipe Left To Pass."),c.a.createElement(h.b,{to:"/deck"},c.a.createElement(p.a,{onClick:c.a.createElement(h.b,{to:"/deck"}),style:{backgroundColor:"#f95c5e",borderRadius:"30px",width:200}},c.a.createElement("h1",{style:{color:"white",fontWeight:"bold",fontSize:25}},"Click To Begin!")))))}}]),t}(c.a.Component)),f=a(53),g=a(19),y=a(17),w=a(51),j=a(52),E=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.i,a=e.x,n=e.y,i=e.rot,r=e.scale,o=e.trans,l=e.bind,s=e.data[t],m=s.name,u=s.age,d=s.distance,b=s.text,f=s.pics,g=s.match;return c.a.createElement(y.a.div,{key:t,style:{transform:Object(y.b)([a,n],function(e,t){return"translate3d(".concat(e,"px,").concat(t,"px,0)")})}},c.a.createElement(y.a.div,Object.assign({},l(t),{style:{transform:Object(y.b)([i,r],o)}}),c.a.createElement(h.b,{to:"/match"},c.a.createElement(p.a,{style:{width:290,height:35,color:"white",backgroundClip:"white",border:"white"}})),c.a.createElement("div",{className:"card"},c.a.createElement(j.a,null,f.map(function(e,t){return c.a.createElement("img",{src:e,key:t,alt:"profilePicture"})})),c.a.createElement("h2",null,m,","),c.a.createElement("h2",null,u),c.a.createElement("h5",null,d),c.a.createElement("h5",null,b),c.a.createElement("h1",null,g))))}}]),t}(c.a.Component),O=[{pics:["https://images.unsplash.com/photo-1520024146169-3240400354ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"],name:"Heather",age:32,distance:"4 miles away",text:"My nickname is Gilette because I'm the best a man can get. Also I will cut you.",match:!1},{pics:["https://i.imgur.com/6Sg2irv.jpg"],name:"Ananda",age:19,distance:"3 miles away",text:"I love Drake, Young Thug, and Travis Scott.",match:!0},{pics:["https://images.unsplash.com/photo-1522263842439-347f062b8475?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"],name:"Chloe",age:18,distance:"1 mile away",text:"Looking for a cuddle buddy.",match:!1},{pics:["https://images.unsplash.com/photo-1539758462369-43adaa19bc1f?ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"],name:"Helen",age:19,distance:"3 miles away",text:"Aspiring Dancer and actor. I go to UCLA and love doggos. 10+ Points for the best dog pic.",match:!1},{pics:["https://images.unsplash.com/photo-1456885284447-7dd4bb8720bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80","https://images.unsplash.com/photo-1532635270-c09dac425ca9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"],name:"Jane",age:22,distance:"2 miles away",text:"Jamaican me crazy. I enjoy long walks to the fridge and cheesecake.",match:!1}],x=(a(76),function(e){return{x:0,y:-10*e,scale:1,rot:20*Math.random()-10,delay:100*e}}),k=function(e){return{rot:0,scale:1.5,y:-1e3}},v=function(e,t){return"perspective(1500px) rotateX(30deg) rotateY(".concat(e/10,"deg) rotateZ(").concat(e,"deg) scale(").concat(t,")")};var C=function(){var e=Object(n.useState)(function(){return new Set}),t=Object(g.a)(e,1)[0],a=Object(y.c)(O.length,function(e){return Object(f.a)({},x(e),{from:k(e)})}),i=Object(g.a)(a,2),r=i[0],o=i[1],l=Object(w.a)(function(e){var a=Object(g.a)(e.args,1)[0],n=e.down,c=Object(g.a)(e.delta,1)[0],i=(e.distance,Object(g.a)(e.direction,1)[0]),r=e.velocity,l=i<0?-1:1;!n&&r>.2&&t.add(a),o(function(e){if(a===e){var i=t.has(a);return{x:i?(200+window.innerWidth)*l:n?c:0,rot:c/100+(i?10*l*r:0),scale:n?1.1:1,delay:void 0,config:{friction:50,tension:n?800:i?200:500}}}}),n||t.size!==O.length||setTimeout(function(){return t.clear()||o(function(e){return x(e)})},600)});return r.map(function(e,t){var a=e.x,n=e.y,i=e.rot,r=e.scale;return c.a.createElement(E,{i:t,x:a,y:n,rot:i,scale:r,trans:v,data:O,bind:l})})},S=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement(C,null)}}]),t}(c.a.Component),I=(a(77),function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"background",style:{display:"flex",margin:"auto",width:"100%",textAlign:"center",justifyContent:"center",alignItems:"center"}},c.a.createElement("div",null,c.a.createElement("h1",{style:{fontFamily:"Leckerli One",fontSize:30}},"It's a Match!"),c.a.createElement("img",{src:"https://i.imgur.com/2MevT3c.jpg",style:{borderRadius:50,height:195,width:170,paddingBottom:20}}),c.a.createElement("img",{src:"https://i.imgur.com/6Sg2irv.jpg",style:{borderRadius:50,height:195,width:170,paddingBottom:10}}),c.a.createElement("img",{src:"https://i.ya-webdesign.com/images/continue-button-png-10.png",style:{height:55,width:200}})))}}]),t}(c.a.Component)),B=function(){return c.a.createElement(o.c,null,c.a.createElement(o.a,{exact:!0,path:"/swipe",component:b}),c.a.createElement(o.a,{exact:!0,path:"/swipe/deck",component:S}),c.a.createElement(o.a,{exact:!0,path:"/swipe/match",component:I}))};var J=function(){return c.a.createElement(B,null)};r.a.render(c.a.createElement(h.a,null,c.a.createElement(J,null)),document.getElementById("root"))},37:function(e,t,a){},54:function(e,t,a){e.exports=a(125)},76:function(e,t,a){}},[[54,1,2]]]);
//# sourceMappingURL=main.07203e3e.chunk.js.map