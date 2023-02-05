(this["webpackJsonpmy-slack-clone1"]=this["webpackJsonpmy-slack-clone1"]||[]).push([[0],{66:function(n,e,t){},67:function(n,e,t){},78:function(n,e,t){"use strict";t.r(e);var i,c,a,r,o=t(2),s=t.n(o),d=t(30),l=t.n(d),p=(t(66),t(6)),j=t(23),b=(t(67),t(29)),x=t(11),g=t(7),h=t(52),u=t.n(h),O=t(51),f=t.n(O),m=t(42),v=t.n(m),w=t(3);var y,k,S,C,I,z=function(n){var e=n.sendMessage,t=Object(o.useState)(""),i=Object(j.a)(t,2),c=i[0],a=i[1];return Object(w.jsx)(D,{children:Object(w.jsx)(A,{children:Object(w.jsxs)("form",{children:[Object(w.jsx)("input",{onChange:function(n){return a(n.target.value)},type:"text",value:c,placeholder:"Message here...."}),Object(w.jsx)(M,{type:"submit",onClick:function(n){n.preventDefault(),c&&(e(c),a(""))},children:Object(w.jsx)(U,{})})]})})})},D=g.a.div(i||(i=Object(p.a)(["\n  background: #ab9774;\n  display: flex;\n  padding-left: 20px;\n  padding-right: 20px;\n  padding-bottom: 20px;\n  padding-top: 20px;\n"]))),A=g.a.div(c||(c=Object(p.a)(["\n    width: 100%;\n    border: 1px solid #690812\n    border-radius: 9px;\n    \n    form {\n        display: flex; \n        height: 42px;\n        \n        padding-left: 10px;\n        align-items: center;\n        input {\n            flex: 1;\n            border: none;\n            font-size: 14px;\n            font-weight: 700;\n            background-color: transparent;\n        }\n\n        input:focus {\n            outline: none;\n        }\n\n    }\n\n"]))),M=g.a.button(a||(a=Object(p.a)(["\n  background: #50a832;\n  border-radius: 4px;\n  width: 32px;\n  height: 32px;\n  display: flex;\n  justify-content: center;\n  margin-right: 5px;\n  cursor: pointer;\n\n  .MuiSvgIcon-root {\n    width: 18px;\n    padding-top: 3px;\n  }\n\n  :hover {\n    background: #89ab87;\n  }\n"]))),U=Object(g.a)(v.a)(r||(r=Object(p.a)(["\n  color: white;\n"])));var B,E,J,L,N,P,T,F,G=function(n){var e=n.text,t=n.name,i=n.image,c=n.timestamp;return Object(w.jsxs)(R,{children:[Object(w.jsx)(K,{children:Object(w.jsx)("img",{src:i})}),Object(w.jsxs)(V,{children:[Object(w.jsxs)(W,{children:[t,Object(w.jsx)("span",{children:new Date(c.toDate()).toUTCString()})]}),Object(w.jsx)(X,{children:e})]})]})},R=g.a.div(y||(y=Object(p.a)(["\n  padding: 8px 20px;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n\n  :hover {\n    background: #89ab87;\n  }\n"]))),K=g.a.div(k||(k=Object(p.a)(["\n  width: 36px;\n  height: 36px;\n  border-radius: 3px;\n  overflow: hidden;\n  margin-right: 8px;\n\n  img {\n    width: 100%;\n  }\n"]))),V=g.a.div(S||(S=Object(p.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),W=g.a.span(C||(C=Object(p.a)(["\n  font-weight: 900;\n  font-size: 15px;\n  line-height: 1.4;\n  span {\n    margin-left: 8px;\n    font-weight: 600;\n    color: rgb(97, 96, 97);\n    font-size: 13px;\n  }\n"]))),X=g.a.span(I||(I=Object(p.a)([""]))),Y=t(26),q=Y.a.initializeApp({apiKey:"AIzaSyA5Ux--SLmS4rXYENm8fDwACjGU0jaon10",authDomain:"my-slack-clone-d9ea3.firebaseapp.com",projectId:"my-slack-clone-d9ea3",storageBucket:"my-slack-clone-d9ea3.appspot.com",messagingSenderId:"744420269963",appId:"1:744420269963:web:99c097539d90caad5f998e"}).firestore(),H=Y.a.auth(),Q=new Y.a.auth.GoogleAuthProvider,Z=q;var $,_,nn,en,tn=function(n){var e=n.user,t=Object(x.g)().channelId,i=Object(o.useState)(),c=Object(j.a)(i,2),a=c[0],r=c[1],s=Object(o.useState)([]),d=Object(j.a)(s,2),l=d[0],p=d[1];return Object(o.useEffect)((function(){Z.collection("rooms").doc(t).onSnapshot((function(n){r(n.data())})),Z.collection("rooms").doc(t).collection("messages").orderBy("timestamp","asc").onSnapshot((function(n){var e=n.docs.map((function(n){return n.data()}));p(e)}))}),[t]),Object(w.jsxs)(cn,{children:[Object(w.jsxs)(an,{children:[Object(w.jsxs)(on,{children:[Object(w.jsxs)(dn,{children:["# ",a&&a.name]}),Object(w.jsxs)(ln,{children:[Object(w.jsx)(f.a,{})," Company wide announcements and other matters."]})]}),Object(w.jsxs)(sn,{children:[Object(w.jsx)("div",{children:"Details"}),Object(w.jsx)(pn,{})]})]}),Object(w.jsx)(rn,{children:l.length>0&&l.map((function(n,e){return Object(w.jsx)(G,{text:n.text,name:n.user,image:n.userImage,timestamp:n.timestamp})}))}),Object(w.jsx)(z,{sendMessage:function(n){if(t){var i={text:n,timestamp:Y.a.firestore.Timestamp.now(),user:e.name,userImage:e.photo};Z.collection("rooms").doc(t).collection("messages").add(i)}}})]})},cn=g.a.div(B||(B=Object(p.a)(["\n  display: grid;\n  grid-template-rows: 64px auto min-content;\n  min-height: 0;\n"]))),an=g.a.div(E||(E=Object(p.a)(["\n  background: #f5eee1;\n  padding-left: 20px;\n  padding-right: 20px;\n  display: flex;\n  align-items: center;\n  border-bottom: 2px solid rgba(83, 39, 83, 13);\n  justify-content: space-between;\n"]))),rn=g.a.div(J||(J=Object(p.a)(["\n  background: #f7f6f2;\n  display: flex;\n  flex-direction: column;\n  overflow-y: scroll;\n"]))),on=g.a.div(L||(L=Object(p.a)([""]))),sn=g.a.div(N||(N=Object(p.a)(["\n  background: #fffffff;\n  display: flex;\n  align-items: center;\n"]))),dn=g.a.div(P||(P=Object(p.a)(["\n  font-weight: 700;\n"]))),ln=g.a.div(T||(T=Object(p.a)(["\n  font-weight: 400;\n  background: #fffffff;\n  font-size: 10px;\n  margin-top: 4px;\n"]))),pn=Object(g.a)(u.a)(F||(F=Object(p.a)(["\n  margin-left: 10px;\n"])));var jn,bn,xn,gn,hn,un,On,fn=function(n){return Object(w.jsx)(mn,{children:Object(w.jsxs)(vn,{children:[Object(w.jsx)(wn,{src:"https://www.freeiconspng.com/thumbs/slack-icon/web-slack-icon-1.png"}),Object(w.jsx)("h1",{children:"Login"}),Object(w.jsx)(yn,{onClick:function(){H.signInWithPopup(Q).then((function(e){var t={name:e.user.displayName,photo:e.user.photoURL};localStorage.setItem("user",JSON.stringify(t)),n.setUser(t)})).catch((function(n){alert(n.message)}))},children:"Sign in with Google"})]})})},mn=g.a.div($||($=Object(p.a)(["\n  width: 100%;\n  height: 100vh;\n  background-color: #f8f8f9;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),vn=g.a.div(_||(_=Object(p.a)(["\n  background: white;\n  padding: 100px;\n  border-radius: 5px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  box-shadow: 0 1px 4px rgb(0 0 0 / 20%), 0px 1px 2px rgb(0 0 0 / 30%);\n"]))),wn=g.a.img(nn||(nn=Object(p.a)(["\n  height: 100px;\n"]))),yn=g.a.button(en||(en=Object(p.a)(["\n  margin-top: 50px;\n  background-color: lightgreen;\n  border: none;\n  height: 40px;\n  border-radius: 5px;\n  cursor: pointer;\n  font-size: 15px;\n"]))),kn=t(53),Sn=t.n(kn),Cn=t(54),In=t.n(Cn);var zn,Dn,An,Mn,Un,Bn,En,Jn,Ln,Nn,Pn=function(n){var e=n.user,t=n.signOut;return Object(w.jsxs)(Tn,{children:[Object(w.jsxs)(Fn,{children:[Object(w.jsx)(Sn.a,{}),Object(w.jsx)(Gn,{children:Object(w.jsx)(Rn,{children:Object(w.jsx)("input",{type:"text",placeholder:"Search....."})})}),Object(w.jsx)(In.a,{})]}),Object(w.jsxs)(Kn,{children:[Object(w.jsx)(Vn,{children:e.name}),Object(w.jsx)(Wn,{onClick:t,children:Object(w.jsx)("img",{src:e.photo?e.photo:"https://i.imgur.com/6VBx3io.png"})})]})]})},Tn=g.a.div(jn||(jn=Object(p.a)(["\n  display: flex;\n  background-color: #000000;\n  color: white;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  z-index: 10px;\n  box-shadow: 0 1px 0 0 rgb(255 255 255 / 20%);\n"]))),Fn=g.a.div(bn||(bn=Object(p.a)(["\n  display: flex;\n  margin-left: 16px;\n  margin-right: 16px;\n"]))),Gn=g.a.div(xn||(xn=Object(p.a)(["\n  min-width: 350px;\n  margin-left: 16px;\n  margin-right: 16px;\n"]))),Rn=g.a.div(gn||(gn=Object(p.a)(["\n  width: 100%;\n  box-shadow: inset 0 0 0 1px rgb(191, 157, 19);\n  border-radius: 8px;\n\n  input {\n    background-color: transparent;\n    border: none;\n    padding-left: 8px;\n    padding-right: 8px;\n    color: white;\n    padding-top: 4px;\n    padding-bottom: 4px;\n  }\n\n  input:focus {\n    outline: none;\n  }\n"]))),Kn=g.a.div(hn||(hn=Object(p.a)(["\n  display: flex;\n  align-items: center;\n  background: transparent;\n  padding-right: 15px;\n  position: absolute;\n  right: 0;\n"]))),Vn=g.a.div(un||(un=Object(p.a)(["\n  padding-right: 16px;\n"]))),Wn=g.a.div(On||(On=Object(p.a)(["\n  width: 28px;\n  height: 28px;\n  border: 1px solid gold;\n  border-radius: 3px;\n  cursor: pointer;\n\n  img {\n    width: 100%;\n  }\n"]))),Xn=t(60),Yn=t.n(Xn),qn=t(32),Hn=t.n(qn),Qn=t(55),Zn=t.n(Qn),$n=t(56),_n=t.n($n),ne=t(57),ee=t.n(ne),te=t(58),ie=t.n(te),ce=t(59),ae=t.n(ce),re=[{icon:Object(w.jsx)(Zn.a,{}),text:"Tell a Joke"},{icon:Object(w.jsx)(_n.a,{}),text:"Call it"},{icon:Object(w.jsx)(ee.a,{}),text:"Reactions"},{icon:Object(w.jsx)(ie.a,{}),text:"Save Items"},{icon:Object(w.jsx)(Hn.a,{}),text:"Peoples & Groups"},{icon:Object(w.jsx)(ae.a,{}),text:"More"}];var oe,se,de=function(n){var e=Object(x.f)();return Object(w.jsxs)(le,{children:[Object(w.jsxs)(pe,{children:[Object(w.jsx)(je,{children:Object(w.jsx)("h2",{children:"Slackers Can"})}),Object(w.jsx)(be,{children:Object(w.jsx)(Hn.a,{})})]}),Object(w.jsx)(xe,{children:re.map((function(n){return Object(w.jsxs)(ge,{children:[n.icon,n.text]})}))}),Object(w.jsxs)(he,{children:[Object(w.jsxs)(ue,{children:[Object(w.jsx)("div",{children:"Converse Rooms"}),Object(w.jsx)(Yn.a,{onClick:function(){var n=prompt("Enter channel name");n&&Z.collection("rooms").add({name:n})}})]}),Object(w.jsx)(Oe,{children:n.rooms.map((function(n){return Object(w.jsxs)(fe,{onClick:function(){var t;(t=n.id)&&e.push("/room/".concat(t))},children:["# ",n.name]})}))})]})]})},le=g.a.div(zn||(zn=Object(p.a)(["\n  background: #120f02;\n"]))),pe=g.a.div(Dn||(Dn=Object(p.a)(["\n  color: white;\n  height: 64px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-left: 19px;\n  border-bottom: 1px solid #0335fc;\n"]))),je=g.a.div(An||(An=Object(p.a)(["\n  color: gold;\n"]))),be=g.a.div(Mn||(Mn=Object(p.a)(["\n  width: 36px;\n  height: 36px;\n  background: white;\n  color: #3f0e40;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  margin-right: 20px;\n  cursor: pointer;\n"]))),xe=g.a.div(Un||(Un=Object(p.a)(["\n  padding-top: 10px;\n"]))),ge=g.a.div(Bn||(Bn=Object(p.a)(["\n  color: rgb(188, 171, 188);\n  display: grid;\n  grid-template-columns: 25px auto;\n  height: 20px;\n  align-items: center;\n  margin-top: 10px;\n  padding-left: 19px;\n  cursor: pointer;\n  :hover {\n    background: #350d15;\n  }\n"]))),he=g.a.div(En||(En=Object(p.a)(["\n  color: gold;\n  margin-top: 20px;\n"]))),ue=g.a.div(Jn||(Jn=Object(p.a)(["\n  display: flex;\n  justify-content: space-between;\n  padding-left: 15px;\n  padding-right: 15px;\n  coursor: pointer;\n  :hover {\n    background: #350d26;\n  }\n"]))),Oe=g.a.div(Ln||(Ln=Object(p.a)(["\n  color: silver;\n"]))),fe=g.a.div(Nn||(Nn=Object(p.a)(["\n  padding-left: 25px;\n  display: flex;\n\n  coursor: pointer;\n  :hover {\n    background: #350d88;\n  }\n"])));var me=function(){var n=Object(o.useState)([]),e=Object(j.a)(n,2),t=e[0],i=e[1],c=Object(o.useState)(JSON.parse(localStorage.getItem("user"))),a=Object(j.a)(c,2),r=a[0],s=a[1];return Object(o.useEffect)((function(){Z.collection("rooms").onSnapshot((function(n){i(n.docs.map((function(n){return{id:n.id,name:n.data().name}})))}))}),[]),Object(w.jsx)("div",{className:"App",children:Object(w.jsx)(b.a,{children:r?Object(w.jsxs)(ve,{children:[Object(w.jsx)(Pn,{signOut:function(){H.signOut().then((function(){localStorage.removeItem("user"),s(null)}))},user:r}),Object(w.jsxs)(we,{children:[Object(w.jsx)(de,{rooms:t}),Object(w.jsxs)(x.c,{children:[Object(w.jsx)(x.a,{path:"/room/:channelId",children:Object(w.jsx)(tn,{user:r})}),Object(w.jsx)(x.a,{path:"/",children:"Select or Create Channel"})]})]})]}):Object(w.jsx)(fn,{setUser:s})})})},ve=g.a.div(oe||(oe=Object(p.a)(["\n  width: 100%;\n  height: 100vh;\n  display: grid;\n  grid-template-rows: 38px minmax(0, 1fr);\n"]))),we=g.a.div(se||(se=Object(p.a)(["\n  display: grid;\n  grid-template-columns: 260px auto;\n"]))),ye=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,90)).then((function(e){var t=e.getCLS,i=e.getFID,c=e.getFCP,a=e.getLCP,r=e.getTTFB;t(n),i(n),c(n),a(n),r(n)}))};l.a.render(Object(w.jsx)(s.a.StrictMode,{children:Object(w.jsx)(me,{})}),document.getElementById("root")),ye()}},[[78,1,2]]]);
//# sourceMappingURL=main.e955d6ce.chunk.js.map