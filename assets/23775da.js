(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{675:function(e,t,o){var content=o(713);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(17).default)("7f54217a",content,!0,{sourceMap:!1})},712:function(e,t,o){"use strict";o(675)},713:function(e,t,o){var n=o(16)(!1);n.push([e.i,".done{text-decoration:line-through}",""]),e.exports=n},755:function(e,t,o){"use strict";o.r(t);o(11),o(8),o(9),o(14),o(10),o(15);var n=o(3),r=o(132);function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,o)}return t}var l={computed:{todos:function(){return this.$store.state.todos.list}},methods:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({addTodo:function(e){this.$store.commit("todos/add",e.target.value),e.target.value=""}},Object(r.b)({toggle:"todos/toggle"}))},d=(o(712),o(73)),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ul",[e._l(e.todos,(function(t,n){return o("li",{key:n},[o("input",{attrs:{type:"checkbox"},domProps:{checked:t.done},on:{change:function(o){return e.toggle(t)}}}),e._v(" "),o("span",{class:{done:t.done}},[e._v(e._s(t.text))])])})),e._v(" "),o("li",[o("input",{attrs:{placeholder:"What needs to be done?"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.addTodo(t)}}})])],2)}),[],!1,null,null,null);t.default=component.exports}}]);