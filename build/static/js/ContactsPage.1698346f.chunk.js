(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[0],{82:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(14),r=n(87),i=n.n(r),o=n(2),s=function(t){var e=t.title;return Object(o.jsx)("h2",{className:i.a.title,children:e})},u=n(1),l=n(32),b=n(86),j=n(4),m=n(88),d=n(20),f=n(7),O=n(18),h=n.n(O),p=n(17),_=function(t){return function(e){e(Object(f.h)()),h.a.delete("".concat(p.a,"/").concat(t,".json")).then(e(Object(f.i)(t))).catch((function(t){return e(Object(f.g)(t))}))}},x=n(89),v=n(27),g=n(36),C=function(t){return t.contacts.filter},N=function(t){return t.contacts.items},y=function(t){return t.contacts.isLoading},F=Object(v.a)([N,C],(function(t,e){return Object(g.b)(t,e)})),S=function(t){var e=t.name,n=t.handleChange,a=t.inputNameId,c=t.className,r=t.inputLable;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("label",{htmlFor:a,children:r}),Object(o.jsx)("input",{className:c,id:a,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,autoComplete:"off",onChange:function(t){var e=t.target,a=e.name,c=e.value;n({name:a,value:c})},value:e})]})},A=function(t){var e=t.number,n=t.handleChange,a=t.inputNumberId,c=t.className,r=t.inputLable;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("label",{htmlFor:a,children:r}),Object(o.jsx)("input",{className:c,id:a,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,autoComplete:"off",onChange:function(t){var e=t.target,a=e.name,c=e.value;n({name:a,value:c})},value:e})]})},L=function(t){var e=t.isLoading,n=Object(c.b)(),r=Object(c.c)(N),i=Object(a.useState)(Object(l.a)({},m.a)),s=Object(b.a)(i,2),O=s[0],_=s[1];Object(a.useEffect)((function(){_(Object(l.a)({},m.a))}),[r]);var v=O.name,g=O.number,C=Object(j.d)(),y=Object(j.d)(),F=function(t){var e=t.name,n=t.value;_((function(t){return Object(l.a)(Object(l.a)({},t),{},Object(u.a)({},e,n))}))},L=d.inputName,w=d.inputTel,I=d.submitBtn;return Object(o.jsxs)("form",{className:x.form,onSubmit:function(t){var e;t.preventDefault(),n((e={name:v,number:g},function(t){t(Object(f.b)(e))||h.a.post("".concat(p.a,".json"),e).then((function(n){var a=n.data.name;t(Object(f.c)(Object(l.a)(Object(l.a)({},e),{},{id:a})))})).catch((function(e){return t(Object(f.a)(e))}))}))},children:[Object(o.jsx)(S,{handleChange:F,name:v,inputNameId:C,inputLable:L,className:x.input}),Object(o.jsx)(A,{handleChange:F,number:g,inputNumberId:y,inputLable:w,className:x.input}),Object(o.jsx)("button",{className:x.btn,type:"submit",disabled:e,children:I})]})},w=n(90),I=function(t){var e=t.filter,n=t.handleChange,a=t.inputSearch,c=Object(j.d)();return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("label",{htmlFor:c,children:a}),Object(o.jsx)("input",{id:c,type:"text",name:"filter",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",autoComplete:"off",onChange:function(t){var e=t.target.value;n(e)},value:e})]})},z=function(){var t=Object(c.b)(),e=Object(c.c)(C);return Object(o.jsx)("div",{className:w.wrap,children:Object(o.jsx)(I,{filter:e,handleChange:function(e){t(Object(f.j)(e))},inputSearch:d.inputSearch})})},B=function(t){var e=t.title;return Object(o.jsx)("p",{children:e})},Z=n(91),k=n.n(Z),J=function(t){var e=t.contact,n=t.removeContact,a=t.styles,r=t.deleteBtn,i=Object(c.b)(),s=a.listItem,u=a.name,l=a.number,b=a.btn;return Object(o.jsxs)("li",{className:s,children:[" ",Object(o.jsxs)("p",{className:u,children:[e.name,": ",Object(o.jsx)("span",{className:l,children:e.number})]}),Object(o.jsx)("button",{className:b,type:"button",onClick:function(){return i(n(e.id))},children:r})]})},E=function(){var t=Object(c.c)(F),e=t.title,n=t.contacts,a=d.deleteBtn,r=d.noDataToRender;return n.length?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(B,{title:e}),Object(o.jsx)("ul",{className:k.a.listWrap,children:n.map((function(t){return Object(o.jsx)(J,{contact:t,removeContact:_,styles:k.a,deleteBtn:a},t.id)}))})]}):Object(o.jsx)("p",{children:r})},T=n(92),W=n.n(T),M=n(16),q=d.titleMain,D=d.titleSecondary,H=d.isLoadingNow;e.default=function(){var t=Object(c.b)(),e=Object(c.c)(M.b),n=Object(c.c)(y);return Object(a.useEffect)((function(){t(function(t){return function(e){e(Object(f.e)()),h.a.defaults.headers.common.Authorization=t,h()(p.a+p.b).then((function(t){console.log(t)})).catch((function(t){return e(Object(f.d)(t))}))}}(e))}),[t,e]),Object(o.jsxs)("div",{className:W.a.container,children:[Object(o.jsx)(s,{title:q}),Object(o.jsx)(L,{isLoading:n}),Object(o.jsx)(s,{title:D}),Object(o.jsx)(z,{}),n?Object(o.jsx)(B,{title:H}):Object(o.jsx)(E,{})]})}},86:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var a=n(35);function c(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],a=!0,c=!1,r=void 0;try{for(var i,o=t[Symbol.iterator]();!(a=(i=o.next()).done)&&(n.push(i.value),!e||n.length!==e);a=!0);}catch(s){c=!0,r=s}finally{try{a||null==o.return||o.return()}finally{if(c)throw r}}return n}}(t,e)||Object(a.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},87:function(t,e,n){t.exports={title:"Title_title__21ESg"}},88:function(t){t.exports=JSON.parse('{"a":{"name":"","number":""}}')},89:function(t,e,n){t.exports={form:"ContactForm_form__1RCQQ",btn:"ContactForm_btn__1nTcr",input:"ContactForm_input__3zrct"}},90:function(t,e,n){t.exports={wrap:"Filter_wrap__2AqgH",listWrap:"Filter_listWrap__3SJcy",listItem:"Filter_listItem__8Oony",name:"Filter_name__2xe-v",number:"Filter_number__1_2NO",btn:"Filter_btn__2mDaS"}},91:function(t,e,n){t.exports={listWrap:"ContactsList_listWrap__38M0B",listItem:"ContactsList_listItem__1LlVu",btn:"ContactsList_btn__37rfK",name:"ContactsList_name__1j5hc",number:"ContactsList_number__eHESY"}},92:function(t,e,n){t.exports={container:"Container_container__1rSpG",title:"Container_title__2Z5-k"}}}]);
//# sourceMappingURL=ContactsPage.1698346f.chunk.js.map