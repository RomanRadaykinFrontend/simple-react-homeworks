(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,,,,function(e,a,t){e.exports={someClass:"Greeting_someClass__1VHKS",error:"Greeting_error__1MttT",notError:"Greeting_notError__3Yoqm",appWrapper:"Greeting_appWrapper__2fkt5",appContent:"Greeting_appContent__3k4gg",count:"Greeting_count__Z0bMK",formWrapper:"Greeting_formWrapper__2zMFW",errorMessage:"Greeting_errorMessage__2YADQ"}},,function(e,a,t){e.exports={message:"Message_message__1FlBJ",avatarBlock:"Message_avatarBlock__1wyPN",messageBlock:"Message_messageBlock__35u39",name:"Message_name__-y43F",messageAndTime:"Message_messageAndTime__j-n2U",time:"Message_time__2rMbx"}},,,,function(e,a,t){e.exports={affairWrapper:"Affairs_affairWrapper__Bvsfx",buttonStyle:"Affairs_buttonStyle__1JFWi",affairsButtonsWrapper:"Affairs_affairsButtonsWrapper__2UsDw"}},,function(e,a,t){e.exports={superInput:"SuperInputText_superInput__JJr1V",errorInput:"SuperInputText_errorInput__163AJ",error:"SuperInputText_error__2ISRD"}},,function(e,a,t){e.exports={inputStyle:"HW4_inputStyle__2T85c",column:"HW4_column__dq_eO"}},function(e,a,t){e.exports={red:"SuperButton_red__pliTt",default:"SuperButton_default__3bJnf"}},function(e,a,t){e.exports={checkbox:"SuperCheckbox_checkbox__3xbdB",spanClassName:"SuperCheckbox_spanClassName__2emwz"}},,,,,,,function(e,a,t){e.exports={App:"App_App__1Lhqy"}},function(e,a,t){e.exports={errorPage:"Error404_errorPage__3-uiN"}},,function(e,a,t){e.exports={navLinks:"Header_navLinks__23gix"}},,function(e,a,t){e.exports=t(40)},,,,,function(e,a,t){},,,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(23),c=t.n(l),o=(t(34),t(24)),s=t.n(o),u=t(6),i=t(1),m=t(25),p=t.n(m);var f=function(){return r.a.createElement("div",{className:p.a.errorPage},r.a.createElement("h1",null,"404"),r.a.createElement("span",null,"Page not found!"))},d=t(7),E=t.n(d);var _=function(e){return r.a.createElement("div",{className:E.a.message},r.a.createElement("div",{className:E.a.avatarBlock},r.a.createElement("img",{src:e.avatar,alt:"avatar"})),r.a.createElement("div",{className:E.a.messageBlock},r.a.createElement("div",{className:E.a.name},r.a.createElement("b",null," ",e.name," ")),r.a.createElement("div",{className:E.a.messageAndTime},r.a.createElement("div",null,e.message),r.a.createElement("div",{className:E.a.time},e.time))))},h="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",v="Some Name",g="some text",b="22:00";var k=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 1",r.a.createElement(_,{avatar:h,name:v,message:g,time:b}),r.a.createElement("hr",null),r.a.createElement("hr",null))},C=t(4),N=t(11),y=t.n(N);var x=function(e){return r.a.createElement("div",{className:y.a.affairWrapper},r.a.createElement("div",null,e.affair.name),r.a.createElement("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)},className:y.a.buttonStyle},"X"))};var j=function(e){var a=e.data.map((function(a){return r.a.createElement(x,{key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",{className:y.a.affairsButtonsWrapper},a,r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){e.setFilter("all")}},"All"),r.a.createElement("button",{onClick:function(){e.setFilter("high")}},"High"),r.a.createElement("button",{onClick:function(){e.setFilter("middle")}},"Middle"),r.a.createElement("button",{onClick:function(){e.setFilter("low")}},"Low")))},S=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var O=function(){var e=Object(n.useState)(S),a=Object(C.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("all"),o=Object(C.a)(c,2),s=o[0],u=o[1],i=function(e,a){return"all"===a?e:"high"===a?e.filter((function(e){return"high"===e.priority})):"middle"===a?e.filter((function(e){return"middle"===e.priority})):"low"===a?e.filter((function(e){return"low"===e.priority})):e}(t,s);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement(j,{data:i,setFilter:u,deleteAffairCallback:function(e){return l(function(e,a){return e.filter((function(e){return e._id!==a}))}(t,e))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},w=t(28),W=t(5),A=t.n(W),T=function(e){var a=e.name,t=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,o=""!==l?A.a.error:A.a.notError;return r.a.createElement("div",{className:A.a.appWrapper},r.a.createElement("div",{className:A.a.appContent},r.a.createElement("div",{className:A.a.formWrapper},r.a.createElement("input",{placeholder:"Enter your name",value:a,onChange:t,className:o}),r.a.createElement("button",{onClick:n},"add")),r.a.createElement("div",{className:A.a.errorMessage},r.a.createElement("span",null,l)),r.a.createElement("div",{className:A.a.count},r.a.createElement("span",null,c))))},B=function(e){var a=e.users,t=e.addUserCallback,l=Object(n.useState)(""),c=Object(C.a)(l,2),o=c[0],s=c[1],u=Object(n.useState)(""),i=Object(C.a)(u,2),m=i[0],p=i[1],f=a.length;return r.a.createElement(T,{name:o,setNameCallback:function(e){s(e.currentTarget.value)},addUser:function(){""!==o?(t(o),alert("Hello, ".concat(o,"!")),s(""),p("")):p("The name field cannot be empty!")},error:m,totalUsers:f})},M=t(42);var F=function(){var e=Object(n.useState)([]),a=Object(C.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 3",r.a.createElement(B,{users:t,addUserCallback:function(e){var a=[{_id:Object(M.a)(),name:e}].concat(Object(w.a)(t));l(a)}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},I=t(8),G=t(13),J=t.n(G),P=function(e){e.type;var a=e.onChange,t=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,o=e.className,s=e.spanClassName,u=Object(I.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),i="".concat(J.a.error," ").concat(s||""),m="".concat(c?J.a.errorInput:J.a.superInput," ").concat(o," ");return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),"Enter"===e.key&&l&&l()},className:m},u)),c&&r.a.createElement("span",{className:i},c))},U=t(15),H=t.n(U),K=t(16),L=t.n(K),q=function(e){var a=e.red,t=e.className,n=Object(I.a)(e,["red","className"]),l="".concat(a?L.a.red:L.a.default," ").concat(t);return r.a.createElement("button",Object.assign({className:l},n))},D=t(17),Y=t.n(D),z=function(e){e.type;var a=e.onChange,t=e.onChangeChecked,n=e.className,l=(e.spanClassName,e.children),c=Object(I.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),o="".concat(Y.a.checkbox," ").concat(n||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:t?function(e){t&&t(e.currentTarget.checked)}:a,className:o},c)),l&&r.a.createElement("span",{className:Y.a.spanClassName},l))};var R=function(){var e=Object(n.useState)(""),a=Object(C.a)(e,2),t=a[0],l=a[1],c=t?"":"error",o=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(t)},s=Object(n.useState)(!1),u=Object(C.a)(s,2),i=u[0],m=u[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:H.a.column},r.a.createElement(P,{value:t,onChangeText:l,onEnter:o,error:c,className:H.a.inputStyle}),r.a.createElement(q,{onClick:o},"delete "),r.a.createElement(z,{checked:i,onChangeChecked:m},"some text "),r.a.createElement(z,{checked:i,onChange:function(e){return m(e.currentTarget.checked)}})),r.a.createElement("hr",null),r.a.createElement("hr",null))};var V=function(){return r.a.createElement("div",null,r.a.createElement(k,null),r.a.createElement(O,null),r.a.createElement(F,null),r.a.createElement(R,null))};var X=function(){return r.a.createElement("div",null)};var Z=function(){return r.a.createElement("div",null)},Q="/pre-junior",$="/junior",ee="/junior-plus";var ae=function(){return r.a.createElement("div",null,r.a.createElement(i.d,null,r.a.createElement(i.b,{path:"/",exact:!0,render:function(){return r.a.createElement(i.a,{to:Q})}}),r.a.createElement(i.b,{path:Q,render:function(){return r.a.createElement(V,null)}}),r.a.createElement(i.b,{path:$,render:function(){return r.a.createElement(X,null)}}),r.a.createElement(i.b,{path:ee,render:function(){return r.a.createElement(Z,null)}}),r.a.createElement(i.b,{render:function(){return r.a.createElement(f,null)}})))},te=t(27),ne=t.n(te);var re=function(){return r.a.createElement("div",{className:ne.a.navLinks},r.a.createElement(u.b,{to:Q}," pre-junior "),r.a.createElement(u.b,{to:$}," junior "),r.a.createElement(u.b,{to:ee}," junior-plus "))};var le=function(){return r.a.createElement("div",null,r.a.createElement(u.a,null,r.a.createElement(re,null),r.a.createElement(ae,null)))};var ce=function(){return r.a.createElement("div",{className:s.a.App},r.a.createElement(le,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ce,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[29,1,2]]]);
//# sourceMappingURL=main.e494b1b3.chunk.js.map