(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{20:function(e,t,a){e.exports=a(52)},25:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(17),r=a.n(c),l=(a(25),a(4)),i=a(3),u=a.n(i),d=a(6),s=a(2),m=a(19),p=a(18),f=a.n(p).a.create({baseURL:"http://localhost:4000",withCredentials:!1,headers:{Accept:"application/json","Content-Type":"application/json"},timeout:1e4}),v=function(){return f.get("/todos")},h=function(e){return f.post("/todos",e)},E=function(e,t){return f.put("/todos/"+e,t)};a(44);function w(e){return o.a.createElement("div",{className:"tabControlContainer"},["all","active","done"].map((function(t){return o.a.createElement("span",{className:"tab ".concat(t===e.view?"active":""),key:t,onClick:function(){return function(t){e.switchTabView(t)}(t)}},t)})))}a(45);function b(e){var t=e.done||!1;return o.a.createElement("div",{className:"doneButton ".concat(t?"complete":""),onClick:e.toggleDone},o.a.createElement("span",null,t?"\u2714\ufe0f":""))}a(46);function N(e){var t=e.todo;return o.a.createElement("li",{className:"todoItem"},o.a.createElement(b,{done:t.done,toggleDone:function(){e.toggleDone(t)}}),o.a.createElement("div",{className:"todoName",onClick:function(){e.handleTodoClick(t)}},t.todoName))}function g(e){var t=e.todos;return o.a.createElement(o.a.Fragment,null,t.map((function(t){return o.a.createElement(N,{todo:t,key:t.id,toggleDone:e.toggleDone,handleTodoClick:e.handleTodoClick})})))}a(47);function y(e){var t=Object(n.useState)(""),a=Object(s.a)(t,2),c=a[0],r=a[1];return o.a.createElement("li",{className:"addNewTodo"},o.a.createElement("div",{className:"addIcon"},o.a.createElement("span",{role:"img","aria-label":"addNewTodoIcon"},"\u2795")),o.a.createElement("form",{className:"addNewTodoForm",onSubmit:function(t){t.preventDefault(),e.addNewTodo(c),r("")}},o.a.createElement("label",{className:"addNewTodoLabel",htmlFor:"newTodo"},"Add New"),o.a.createElement("input",{className:"addNewTodoInput",type:"text",value:c,onChange:function(e){r(e.target.value)},name:"newTodo",placeholder:"Add a new todo item"}),o.a.createElement("input",{className:"addButton",type:"submit",value:"Add"})))}a(48);function T(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",null,"Displaying ",e.view," todos"),o.a.createElement("ul",{className:"todoList"},o.a.createElement(g,{view:e.view,todos:function(e,t){switch(t){case"all":return e;case"active":return e.filter((function(e){return!e.done}));case"done":return e.filter((function(e){return e.done}));default:return e}}(e.todos,e.view),toggleDone:e.toggleDone,handleTodoClick:e.handleTodoClick}),o.a.createElement(y,{addNewTodo:e.addNewTodo})))}a(49);function j(e){var t=Object(n.useRef)(),a=e.show?"modal display-block":"modal display-none";return o.a.createElement("div",{className:a,onClick:function(a){t.current.contains(a.target)||(a.stopPropagation(),e.handleClose())}},o.a.createElement("section",{className:"modal-main",ref:t},o.a.createElement("h2",null,e.title||""),o.a.createElement("button",{className:"closeButton",onClick:e.handleClose},"close"),e.children))}a(50);function O(e){var t=e.todo,a=Object(n.useState)(""),c=Object(s.a)(a,2),r=c[0],i=c[1],u=Object(n.useState)(""),d=Object(s.a)(u,2),m=d[0],p=d[1];Object(n.useEffect)((function(){i(t.todoName||""),p(t.detail||"")}),[t]);return o.a.createElement("div",null,o.a.createElement("form",{className:"todoDetailContainer",onSubmit:function(a){a.preventDefault(),e.updateTodo(Object(l.a)(Object(l.a)({},t),{},{todoName:r,detail:m})),e.setActiveTodo({})}},o.a.createElement("div",{className:"todoDetailName"},o.a.createElement("label",{htmlFor:"todoDetailName"},"Title:"),o.a.createElement("input",{name:"todoDetailName",type:"text",value:r,onChange:function(e){i(e.target.value)},className:"todoDetailNameInput"})),o.a.createElement("div",{className:"todoDescription"},o.a.createElement("label",{htmlFor:"todoDescription"},"Description:"),o.a.createElement("textarea",{name:"todoDescription",value:m,rows:"10",onChange:function(e){p(e.target.value)},className:"todoDescriptionTextarea"})),o.a.createElement("input",{className:"todoDetailUpdate",type:"submit",value:"Update"})))}function D(e,t){switch(t.type){case"fetch":return t.payload;case"add":return[].concat(Object(m.a)(e),[t.payload]);case"update":return e.map((function(e,a){return e.id===t.payload.id?t.payload:e}));default:throw new Error}}function k(){var e=Object(n.useReducer)(D,[]),t=Object(s.a)(e,2),a=t[0],c=t[1];Object(n.useEffect)((function(){(function(){var e=Object(d.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v();case 2:t=e.sent,c({type:"fetch",payload:t.data});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var r=Object(n.useState)("all"),i=Object(s.a)(r,2),m=i[0],p=i[1],f=Object(n.useState)({}),b=Object(s.a)(f,2),N=b[0],g=b[1],y=function(){var e=Object(d.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E(t.id,Object(l.a)(Object(l.a)({},t),{},{done:!t.done}));case 2:a=e.sent,c({type:"update",payload:a.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(d.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E(t.id,t);case 2:a=e.sent,c({type:"update",payload:a.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(e){g(e)};return o.a.createElement("div",null,o.a.createElement("h1",null,"Todo App"),o.a.createElement(w,{view:m,switchTabView:function(e){p(e)}}),o.a.createElement(T,{view:m,todos:a,addNewTodo:function(e){(function(){var t=Object(d.a)(u.a.mark((function t(){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h({id:a.length+1,todoName:e,done:!1});case 2:n=t.sent,c({type:"add",payload:n.data});case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()},toggleDone:y,handleTodoClick:C}),o.a.createElement(j,{show:!!N.id,title:"Todo Detail",handleClose:function(){g({})}},o.a.createElement(O,{todo:N,setActiveTodo:C,updateTodo:k})))}a(51);var C=function(){return o.a.createElement("div",{className:"App"},o.a.createElement("section",null,o.a.createElement(k,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.97a66c97.chunk.js.map