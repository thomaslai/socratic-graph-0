(this["webpackJsonpsocratic-graph-0"]=this["webpackJsonpsocratic-graph-0"]||[]).push([[0],{10:function(t,e,n){t.exports=n(26)},15:function(t,e,n){},26:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),i=n(2),r=n.n(i),c=(n(15),n(4)),s=n(5),l=n(8),h=n(6),u=n(9),d=n(7),w=n.n(d),m=function(t){function e(){var t,n;Object(c.a)(this,e);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return(n=Object(l.a)(this,(t=Object(h.a)(e)).call.apply(t,[this].concat(a)))).state={w:0,h:0,elements:[{data:{id:"one"},position:{x:0,y:0}},{data:{id:"two"},position:{x:100,y:0}},{data:{source:"one",target:"two",label:"Edge from Node1 to Node2"}}]},n.componentDidMount=function(){n.setState({w:window.innerWidth,h:window.innerHeight}),n.setUpListeners()},n.setUpListeners=function(){n.cy.on("click","node",(function(t){console.log(t.target)}))},n}return Object(u.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this;return a.a.createElement("div",{style:{backgroundColor:"#262626"}},a.a.createElement(w.a,{elements:this.state.elements,style:{width:this.state.w,height:this.state.h},cy:function(e){t.cy=e},layout:{name:"cose"}}))}}]),e}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[10,1,2]]]);
//# sourceMappingURL=main.3045cac6.chunk.js.map