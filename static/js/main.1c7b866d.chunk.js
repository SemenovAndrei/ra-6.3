(this["webpackJsonpra-6.3"]=this["webpackJsonpra-6.3"]||[]).push([[0],{23:function(e,n,t){},24:function(e,n,t){},29:function(e,n,t){"use strict";t.r(n);var r,a,s,c=t(0),i=t.n(c),o=t(15),d=t.n(o),u=(t(23),t(24),t(5)),l=t.n(u),b=t(12),p=t(10),j=t(6),h=t(13),f=t(2),g=t(3),m=t(1),x=g.a.form(r||(r=Object(f.a)(["\n  width: 100%;\n  position: relative;\n"]))),O=g.a.textarea(a||(a=Object(f.a)(["\n  width: 100%;\n  padding: 10px;\n  font-size: 1.2rem;\n  resize: none;\n  border-style: none;\n  outline: none;\n"]))),v=g.a.button(s||(s=Object(f.a)(["\n  position: absolute;\n  bottom: 10px;\n  right: 10px;\n  width: 60px;\n  padding: 10px;\n  border-style: none;\n  border-radius: 10px;\n  cursor: pointer;\n"])));var w,y,I,k=function(e){return Object(m.jsxs)(x,{onSubmit:function(n){n.preventDefault(),e.onSubmit()},children:[Object(m.jsx)(O,{cols:"5",rows:"5",placeholder:"Enter your message",value:e.messageValue,onChange:function(n){e.onChange(n.target.value)}}),e.messageValue&&Object(m.jsx)(v,{children:"Send"})]})},S=g.a.div(w||(w=Object(f.a)(["\n  width: 100%;\n  height: 50vh;\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n\n  overflow-y: scroll;\n  scrollbar-width: none;\n\n  ::-webkit-scrollbar {\n    width: 0;\n  }\n"]))),D=g.a.div(y||(y=Object(f.a)(["\n  position: relative;\n  align-self: flex-end;\n  width: 45%;\n  padding-top: 5px;\n  padding-bottom: 5px;\n\n  & div {\n    padding: 10px;\n    margin-top: 5px;\n    margin-bottom: 5px;\n    white-space: pre-line;\n    border-radius: 10px;\n    background-color: rgba(81, 255, 0, 0.555);\n  }\n"]))),C=Object(g.a)(D)(I||(I=Object(f.a)(["\n  align-self: flex-start;\n\n  & div {\n    background-color: rgba(53, 211, 177, 0.281);\n  }\n"])));var E,F,T=function(e){var n=e.messages.map((function(n){return n.userId===e.userID?Object(m.jsx)(D,{id:n.id,children:Object(m.jsx)("div",{children:n.content})},n.id):Object(m.jsx)(C,{id:n.id,children:Object(m.jsx)("div",{children:n.content})},n.id)}));return Object(c.useEffect)((function(){n.length&&document.getElementById("".concat(e.latestID)).scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"})})),Object(m.jsx)(S,{id:"list",children:n})},V=g.a.div(E||(E=Object(f.a)(["\n  width: 700px;\n  border: 2px solid #892dd4;\n  border-radius: 10px;\n"]))),B=g.a.div(F||(F=Object(f.a)(["\n  border-top: 2px solid #892dd4;\n"]))),J="userID";function P(){var e=Object(c.useState)({empty:""}),n=Object(h.a)(e,2),t=n[0],r=n[1],a=Object(c.useState)({messages:[],latestID:0}),s=Object(h.a)(a,2),i=s[0],o=s[1];function d(){return(d=Object(p.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://ra-6-3-server.herokuapp.com/messages",{method:"POST",body:JSON.stringify({content:t.message,userId:J})});case 2:e.sent.status;case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(c.useEffect)((function(){function e(){return(e=Object(p.a)(l.a.mark((function e(){var n,t,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://ra-6-3-server.herokuapp.com/messages?from=".concat(i.latestID),{method:"GET"});case 2:return n=e.sent,e.next=5,n.json();case 5:(t=e.sent).length&&(r=i.messages,o((function(){return{messages:[].concat(Object(b.a)(r),Object(b.a)(t)),latestID:t[t.length-1].id}})));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var n=setInterval((function(){return function(){return e.apply(this,arguments)}()}),1e3);return function(){clearInterval(n)}}),[i]),Object(m.jsxs)(V,{children:[Object(m.jsx)(T,Object(j.a)(Object(j.a)({},i),{},{userID:J})),Object(m.jsx)(B,{children:Object(m.jsx)(k,{messageValue:t.message||t.empty,onChange:function(e){r((function(n){return Object(j.a)(Object(j.a)({},n),{},{message:e})}))},onSubmit:function(){t.message.trim()&&function(){d.apply(this,arguments)}(),r({empty:""})}})})]})}var z=function(){return Object(m.jsx)("div",{className:"App",children:Object(m.jsx)(P,{})})},L=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,30)).then((function(n){var t=n.getCLS,r=n.getFID,a=n.getFCP,s=n.getLCP,c=n.getTTFB;t(e),r(e),a(e),s(e),c(e)}))};d.a.render(Object(m.jsx)(i.a.StrictMode,{children:Object(m.jsx)(z,{})}),document.getElementById("root")),L()}},[[29,1,2]]]);
//# sourceMappingURL=main.1c7b866d.chunk.js.map