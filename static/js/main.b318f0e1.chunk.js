(this.webpackJsonpweb=this.webpackJsonpweb||[]).push([[0],{107:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(15),c=t.n(r),i=t(8),l=(t(39),t(52)),s=t(60),u=t(110),d=(t(73),t(85),t(86),t(29)),m=t(2),p=t.n(m),b=t(18),h=t(19);function f(){var e=Object(b.a)(["\n  height: 100%;\n  display: flex;\n  max-width: 960px;\n  width: 90%;\n  justify-content: center;\n  align-items: center;\n\n  .seperationline {\n    height: 100%;\n    width: 2px;\n    align-items: center;\n    background: #002907;\n\n    margin: 50px;\n    max-height: 70vh;\n  }\n\n  .auth_social {\n\n    background: #f9f9f9;\n    border-radius: 4px;\n    height: auto;\n    min-height: 44px;\n    padding: 10px 15px;\n    margin: 10px 0;\n    border: 2px solid #dbdbdb;\n    width: 100%;\n    display: inline-flex;\n    justify-content: space-around;\n    border: 2px solid #dbdbdb;\n    border-radius: 4px;\n    color: #544c4c;\n    font-style: italic;\n  \n  }\n\n  .authSocial {\n    margin: 35px 0 0 0;\n  }\n\n  }\n\n  form {\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n    margin-top:15px;\n    width: 100%;\n    max-width: 600px;\n    min-height: 140px;\n\n    input, select {\n      background: #f9f9f9;\n      border-radius: 4px;\n      height: 44px;\n      padding: 0 15px;\n      margin: 0 0 10px;\n      border: 2px solid #dbdbdb;\n      \n    }\n\n    .redes-sociais {\n      display: block!important;\n    }\n\n    .redes-sociais:target {background: red;}\n\n    .question-four {\n      display: inline-block;\n      text-align: left;\n    }\n\n    .question-four input {\n      height: auto;\n      margin: 5px 5px 00;\n    }\n\n    .select > div > div > div {\n    }\n\n    button {\n      padding: 5px 30px;\n      border: 0;\n      background: #002907;\n      color: #fff;\n      border-radius: 4px;\n      margin: 0 0 0 10px;\n    }\n\n    .buttons {\n      text-align: right;\n    }\n\n    .cadastro {\n      padding: 5px 20px;\n      border: 0;\n      background: #002907;\n      color: #fff!important;\n      border-radius: 4px;\n      margin: 0 0 0 10px;\n    }\n\n    .buttons a {\n      color: #002907;      \n    }\n\n\n\n    \n  }\n\n\n"]);return f=function(){return e},e}function g(){var e=Object(b.a)(["\n  height: 100%;\n  background: linear-gradient( rgba(255, 255, 255, 0.82) 100%,rgb(228, 228, 228)100%));\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-position: center;\n  background-size: cover;\n"]);return g=function(){return e},e}var v=h.b.div(g()),E=h.b.div(f());function x(e){var n=e.children;return o.a.createElement(v,null,o.a.createElement(E,null,n))}function y(){var e=Object(b.a)(["\n  height: 100%;\n  background: #ededed;\n"]);return y=function(){return e},e}x.protoTypes={children:p.a.element.isRequired};var k=h.b.div(y());function I(e){var n=e.children;return o.a.createElement(k,null,n)}I.protoTypes={children:p.a.element.isRequired};var O=t(28),j=t(61),S=t(62),w=t(11),N=t(57),B=t.n(N),_=t(26),R={token:null,signed:!1,loading:!1};var C={profile:null};var L=Object(w.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,n=arguments.length>1?arguments[1]:void 0;return Object(_.a)(e,(function(e){switch(n.type){case"@auth/SIGN_IN_REQUEST":e.loading=!0;break;case"@auth/SIGN_IN_SUCCESS":e.signed=!0,e.loading=!0;break;case"@auth/SIGN_FAILURE":e.loading=!1}}))},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"@auth/SIGN_IN_SUCCESS":return Object(_.a)(e,(function(e){e.profile=n.payload.user}));default:return e}}}),T=t(17),U=t.n(T),F=t(7),q=t(13),G=Object(q.a)(),A=t(27),P=t.n(A),V=P.a.create({baseURL:"http://localhost:1337/"});function z(e,n){return{type:"@auth/SIGN_IN_SUCCESS",payload:{token:e,user:n}}}var Q=U.a.mark(H),D=U.a.mark(J);function H(e){var n,t;return U.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n=e.payload,a.prev=1,t=n.nome,a.next=5,Object(F.call)(V.post,"teste",{nome:"".concat(t)});case 5:return a.sent,a.next=8,Object(F.put)(z());case 8:G.push("/dashboard"),a.next=16;break;case 11:return a.prev=11,a.t0=a.catch(1),i.b.error("Falha na autentica\xe7\xe3o, verifique seus dados"),a.next=16,Object(F.put)({type:"@auth/SIGN_FAILURE"});case 16:case"end":return a.stop()}}),Q,null,[[1,11]])}function J(e){var n,t,a,o,r,c,l,s,u;return U.a.wrap((function(d){for(;;)switch(d.prev=d.next){case 0:return n=e.payload,d.prev=1,t=n.name,a=n.login,o=n.password,d.next=5,Object(F.call)(V.post,"auth/local/register",{username:"".concat(t),email:"".concat(a),password:"".concat(o)});case 5:if(r=d.sent,c=r.data,l=c.jwt,s=c.user,u=l,console.log(l,s),s.provider){d.next=12;break}return console.tron.error("Usu\xe1rio \xe9 uma institui\xe7\xe3o"),d.abrupt("return");case 12:return V.defaults.headers.Authorization="Bearer ".concat(u),d.next=15,Object(F.put)(z(u,s));case 15:i.b.info("Cadastro conclu\xeddo com sucesso!"),G.push("/dashboard"),d.next=24;break;case 19:return d.prev=19,d.t0=d.catch(1),i.b.error("Falha no cadastro, verifique seus dados"),d.next=24,Object(F.put)({type:"@auth/SIGN_FAILURE"});case 24:case"end":return d.stop()}}),D,null,[[1,19]])}var M=Object(F.all)([Object(F.takeLatest)("persist/REHYDRATE",(function(e){var n=e.payload;if(n){var t=n.auth.token;t&&(V.defaults.headers.Authorization="Bearer ".concat(t))}})),Object(F.takeLatest)("@auth/SIGN_IN_REQUEST",H),Object(F.takeLatest)("@auth/SIGN_UP_REQUEST",J)]),Y=Object(F.all)([]),K=U.a.mark(W);function W(){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(F.all)([M,Y]);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),K)}var X,Z=Object(j.a)({sagaMonitor:null}),$=[Z],ee=function(e,n){var t=w.a.apply(void 0,Object(S.a)(n));return Object(w.e)(e,t)}((X=L,Object(O.a)({key:"teste",storage:B.a,whitelist:["auth","user"]},X)),$),ne=Object(O.b)(ee);function te(e){var n=e.component,t=e.isPrivate,a=Object(d.a)(e,["component","isPrivate"]),r=ee.getState().auth.signed;if(!r&&t)return o.a.createElement(u.a,{to:"/"});if(r&&!t)return o.a.createElement(u.a,{to:"/"});var c=r?I:x;return o.a.createElement(u.b,Object.assign({},a,{render:function(e){return o.a.createElement(c,null,o.a.createElement(n,e))}}))}Z.run(W),te.defaultProps={isPrivate:!1};var ae=t(59),oe=t(23);function re(e){var n=e.name,t=Object(d.a)(e,["name"]),r=Object(a.useRef)(null),c=Object(oe.c)(n),i=c.fieldName,l=c.defaultValue,s=void 0===l?"":l,u=c.registerField;c.error;return Object(a.useEffect)((function(){u({name:i,ref:r.current,path:"value"})}),[i,u]),o.a.createElement("input",Object.assign({ref:r,defaultValue:s},t))}function ce(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(ae.a,{onSubmit:function(e){var n=e.nome,t=e.telefone,a=document.getElementById("facebook").checked,o=document.getElementById("linkedin").checked,r=document.getElementById("instagram").checked,c=document.getElementById("como-nos-conheceu").value,l=n.split(" ");t=t.replace(" - ","");var s=[];if(!0===document.getElementById("sim").checked){var u="Sim";!0===a&&s.push("Facebook "),!0===o&&s.push("Linkedin "),!0===r&&s.push("Instagram ")}else u="N\xe3o";var d="http://localhost:8080/";l.length<=1?(i.b.error("Nome incompleto, preencha seu nome e sobrenome"),d="null"):t.length<10&&t.length>11?(i.b.error("Telefone incompleto, preencha seu telefone corretamente"),d="null",t.value=""):1==isNaN(t)?(d="null",document.getElementById("telefone").value="",i.b.error("Telefone incompleto, preencha seu telefone")):!1===document.getElementById("nao").checked&&!1===document.getElementById("sim").checked?(i.b.error("Informe se possui ou n\xe3o redes sociais"),d="null"):!0===document.getElementById("sim").checked&&!1===a&&!1===o&&!1===r&&(i.b.error("Nenhuma Rede Social foi selecionada!"),d="null"),P.a.post("".concat(d),{nome:"".concat(n),telefone:"".concat(t),comonosconheceu:"".concat(c),possuiredesociais:"".concat(u),quais:"".concat(s)}).then((function(e){document.getElementById("envio").setAttribute("disabled","disabled"),document.getElementById("envio").innerText="Enviado",document.getElementById("envio").style.background="#3fd600",i.b.info("Tudo feito!"),i.b.success("".concat(n,", Sua resposta foi salva com Sucesso, agora \xe9 com a gente :)"))})).catch((function(e){console.log("An error occurred:",e)}))}},o.a.createElement("h1",null,"Desafio EloGroup"),o.a.createElement("br",null),o.a.createElement(re,{type:"text",name:"nome",required:!0,placeholder:"Seu nome"}),o.a.createElement(re,{type:"text",required:!0,name:"telefone",id:"telefone",onBlur:function(){var e,n=document.getElementById("telefone"),t=n.value;if(t.length<10&&t.length>11)i.b.error("Numero de telefone incorreto, por favor digite novamente!"),n.value="";else{if(11===t.length){var a=t.slice(0,2),o=t.slice(2,5),r=t.slice(5,11);e="".concat(a," - ").concat(o).concat(r)}else{var c=t.slice(0,2),l=t.slice(2,4),s=t.slice(4,10);e="".concat(c," - ").concat(l).concat(s)}n.value=e}},minLength:"10",maxLength:"11",placeholder:"Ex: 99 \u2013 99999999"}),o.a.createElement("select",{placeholder:"Como nos conheceu?",name:"como-nos-conheceu",id:"como-nos-conheceu"},o.a.createElement("option",{disabled:!0,hidden:!0,defaultValue:"null"},"Como nos conheceu?"),o.a.createElement("option",{value:"Tv"},"TV"),o.a.createElement("option",{value:"Internet"},"Internet"),o.a.createElement("option",{value:"Outros"},"Outros")),o.a.createElement("div",{className:"question-four"},o.a.createElement("p",null,"Possui rede social:"),o.a.createElement(re,{type:"radio",id:"sim",onClick:function(){document.getElementById("redes-sociais").classList.add("show"),document.getElementById("nao").checked=!1},name:"sim",defaultValue:"false"}),o.a.createElement("label",{htmlFor:"sim"},"Sim"),o.a.createElement(re,{type:"radio",id:"nao",onClick:function(){document.getElementById("redes-sociais").classList.remove("show"),document.getElementById("sim").checked=!1},name:"nao",defaultValue:"false"}),o.a.createElement("label",{htmlFor:"nao",value:"false"},"N\xe3o"),o.a.createElement("div",{id:"redes-sociais"},o.a.createElement("p",null,"Quais:"),o.a.createElement(re,{type:"checkbox",id:"facebook",name:"facebook"}),"Facebook",o.a.createElement(re,{type:"checkbox",id:"linkedin",name:"linkedin"}),"Linkedin",o.a.createElement(re,{type:"checkbox",id:"instagram",name:"instagram"}),"Instagram")),o.a.createElement("div",{className:"buttons"},o.a.createElement("button",{type:"submit",id:"envio"},"Enviar"))))}function ie(){return o.a.createElement(u.d,null,o.a.createElement(te,{path:"/desafio-elogroup/",exact:!0,component:ce}))}function le(){var e=Object(b.a)(["\n\n\n  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,700,900&display=swap');\n\n  * {\n    margin: 0; \n    padding: 0;\n    outline: 0;\n    box-sizing: border-box;\n\n  }\n\n  *:focus {\n    outline: 0;\n  }\n\n  html, body, #root {\n    height: 100%;\n  } \n\n  body {\n    -webkit-font-smoothing: antialiased;\n  }\n\n  body, input, button {\n    font: 14px 'Roboto', sans-serif;\n  }\n\n  a {\n    text-decoration: none;\n  }\n\n  .show {\n    display: block!important;\n  }\n\n  #redes-sociais {\n    display: none;\n  }\n\n  ul {\n    list-style: none;\n  }\n\n  button {\n    cursor: pointer;\n  }\n"]);return le=function(){return e},e}var se=Object(h.a)(le());var ue=function(){return o.a.createElement(s.a,{store:ee},o.a.createElement(l.a,{persistor:ne},o.a.createElement(u.c,{history:G},o.a.createElement(ie,null),o.a.createElement(se,null),o.a.createElement(i.a,{position:"top-center",autoClose:3e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnVisibilityChange:!0,draggable:!0,pauseOnHover:!0}))))};c.a.render(o.a.createElement(ue,null),document.getElementById("root"))},64:function(e,n,t){e.exports=t(107)}},[[64,1,2]]]);
//# sourceMappingURL=main.b318f0e1.chunk.js.map