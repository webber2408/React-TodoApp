(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(t,e,o){t.exports=o(55)},33:function(t,e,o){},55:function(t,e,o){"use strict";o.r(e);var n=o(0),a=o.n(n),r=o(21),c=o.n(r),l=o(14),i=o(6),s=o(7),d=o(9),u=o(8),p=o(10),m=o(58),f=o(57),h=function(t){function e(){var t,o;Object(i.a)(this,e);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(o=Object(d.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(a)))).getStyle=function(){return{backgroundColor:"#f4f4f4",textDecoration:o.props.todo.completed?"line-through":"none",padding:"10px",borderBottom:"1px #ccc dotted"}},o.markComplete=function(t){console.log(o.props)},o}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this.props.todo,e=t.id,o=t.title;return a.a.createElement("div",{style:this.getStyle()},a.a.createElement("p",null,a.a.createElement("input",{type:"checkbox",onChange:this.props.markComplete.bind(this,e)})," ",o,a.a.createElement("button",{style:b,onClick:this.props.delTodo.bind(this,e)},"x")))}}]),e}(n.Component),b={backgroundColor:"#ff0000",color:"#fff",border:"none",padding:"5px 9px",borderRadius:"50%",cursor:"pointer",float:"right"},y=h,g=function(t){function e(){return Object(i.a)(this,e),Object(d.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this;return console.log(this.props.todos),this.props.todos.map(function(e){return a.a.createElement(y,{key:e.id,todo:e,markComplete:t.props.markComplete,delTodo:t.props.delTodo})})}}]),e}(n.Component),j=o(22),v=function(t){function e(){var t,o;Object(i.a)(this,e);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(o=Object(d.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(a)))).state={title:""},o.onChange=function(t){o.setState(Object(j.a)({},t.target.name,t.target.value))},o.onSubmit=function(t){t.preventDefault(),o.props.addTodo(o.state.title),o.setState({title:""})},o}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return a.a.createElement("form",{onSubmit:this.onSubmit,style:{display:"flex"}},a.a.createElement("input",{type:"text",name:"title",placeholder:"Add a todo here .. ",style:{flex:"10",padding:"5px"},value:this.state.title,onChange:this.onChange}),a.a.createElement("input",{type:"submit",value:"Submit",className:"btn",style:{flex:"1"}}))}}]),e}(n.Component),E=o(56);var O={background:"#333",color:"#fff",textAlign:"center",padding:"10px"},k={color:"#fff",textDecoration:"none"},C=function(){return a.a.createElement("header",{style:O},a.a.createElement("h1",null,"TodoList"),a.a.createElement(E.a,{to:"/",style:k},"Home"),"|",a.a.createElement(E.a,{to:"/about",style:k},"About"))};function x(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,"About"),a.a.createElement("p",null,"This is a TodoList app v1.0.0"))}o(33);var T=o(12),S=o.n(T),w=function(t){function e(){var t,o;Object(i.a)(this,e);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(o=Object(d.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(a)))).state={todos:[]},o.markComplete=function(t){o.setState({todos:o.state.todos.map(function(e){return e.id===t&&(e.completed=!e.completed),e})})},o.delTodo=function(t){S.a.delete("https://jsonplaceholder.typicode.com/todos/".concat(t)).then(function(e){return o.setState({todos:Object(l.a)(o.state.todos.filter(function(e){return e.id!==t}))})})},o.addTodo=function(t){S.a.post("https://jsonplaceholder.typicode.com/todos",{title:t,completed:!1}).then(function(t){return o.setState({todos:[].concat(Object(l.a)(o.state.todos),[t.data])})})},o}return Object(p.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){var t=this;S.a.get("https://jsonplaceholder.typicode.com/todos?_limit=5").then(function(e){return t.setState({todos:e.data})})}},{key:"render",value:function(){var t=this;return a.a.createElement(m.a,null,a.a.createElement("div",{className:"App"},a.a.createElement("div",{className:"container"},a.a.createElement(C,null),a.a.createElement(f.a,{exact:!0,path:"/",render:function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement(v,{addTodo:t.addTodo}),a.a.createElement(g,{todos:t.state.todos,markComplete:t.markComplete,delTodo:t.delTodo}))}}),a.a.createElement(f.a,{path:"/about",component:x}))))}}]),e}(n.Component);c.a.render(a.a.createElement(w,null),document.getElementById("root"))}},[[25,2,1]]]);
//# sourceMappingURL=main.9a526590.chunk.js.map