(this.webpackJsonpawitter=this.webpackJsonpawitter||[]).push([[0],{56:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var n=a(3),c=a.n(n),r=a(36),s=a.n(r),i=a(11),u=a(22),o=a(9),l=a(12),j=a.n(l),b=a(18),d=a(14),p=a(24),O=a(25);a(50),a(51),a(52);O.a.initializeApp({apiKey:"AIzaSyAXvpcUFd5kzpsrskDtdC6tHo8gsFRJdRc",authDomain:"awitter-62944.firebaseapp.com",projectId:"awitter-62944",storageBucket:"awitter-62944.appspot.com",messagingSenderId:"366116699103",appId:"1:366116699103:web:abca0b934de58a527de26a"});var f=O.a,h=O.a.auth(),m=O.a.firestore(),x=O.a.storage(),v=a(2),g=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),s=Object(i.a)(r,2),u=s[0],o=s[1],l=Object(n.useState)(!0),d=Object(i.a)(l,2),p=d[0],O=d[1],f=Object(n.useState)(""),m=Object(i.a)(f,2),x=m[0],g=m[1],y=function(e){var t=e.target,a=t.name,n=t.value;"email"===a?c(n):"password"===a&&o(n)},w=function(){var e=Object(b.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!p){e.next=8;break}return e.next=5,h.createUserWithEmailAndPassword(a,u);case 5:n=e.sent,e.next=11;break;case 8:return e.next=10,h.signInWithEmailAndPassword(a,u);case 10:n=e.sent;case 11:console.log(n),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),g(e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("form",{onSubmit:w,className:"container",children:[Object(v.jsx)("input",{name:"email",type:"text",placeholder:"Email",required:!0,value:a,onChange:y,className:"authInput"}),Object(v.jsx)("input",{name:"password",type:"password",placeholder:"Password",required:!0,value:u,onChange:y,className:"authInput"}),Object(v.jsx)("input",{className:"authInput authSubmit",type:"submit",value:p?"Create Account":"Log In"})]}),x&&Object(v.jsx)("span",{className:"authError",children:x}),Object(v.jsx)("span",{onClick:function(){return O((function(e){return!e}))},className:"authSwitch",children:p?"Sign In":"Create Account"})]})},y=function(){var e=function(){var e=Object(b.a)(j.a.mark((function e(t){var a,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===(a=t.target.name)?n=new f.auth.GoogleAuthProvider:"github"===a&&(n=new f.auth.GithubAuthProvider),e.next=4,h.signInWithPopup(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsxs)("div",{className:"authContainer",children:[Object(v.jsx)(d.a,{icon:p.c,color:"#04AAFF",size:"3x",style:{marginBottom:30}}),Object(v.jsx)(g,{}),Object(v.jsxs)("div",{className:"authBtns",children:[Object(v.jsxs)("button",{onClick:e,name:"google",className:"authBtn",children:["Continue with Google ",Object(v.jsx)(d.a,{icon:p.b})]}),Object(v.jsxs)("button",{onClick:e,name:"github",className:"authBtn",children:["Continue with Github ",Object(v.jsx)(d.a,{icon:p.a})]})]})]})},w=a(38),N=a(19),k=function(e){var t=e.aweetObj,a=e.isOwner,c=Object(n.useState)(!1),r=Object(i.a)(c,2),s=r[0],u=r[1],o=Object(n.useState)(t.text),l=Object(i.a)(o,2),p=l[0],O=l[1],f=function(){var e=Object(b.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you sure you want to delete this aweet?")){e.next=6;break}return e.next=4,m.doc("aweets/".concat(t.id)).delete();case 4:return e.next=6,x.refFromURL(t.attachmentUrl).delete();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){return u((function(e){return!e}))},g=function(){var e=Object(b.a)(j.a.mark((function e(a){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,m.doc("aweets/".concat(t.id)).update({text:p});case 3:h();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsx)("div",{className:"nweet",children:s?Object(v.jsxs)("form",{onSubmit:g,className:"container nweetEdit",children:[Object(v.jsx)("input",{type:"text",placeholder:t.text,onChange:function(e){var t=e.target.value;O(t)},autoFocus:!0,value:p,className:"formInput",required:!0}),Object(v.jsx)("span",{onClick:h,className:"formBtn cancelBtn",children:"Cancel"}),Object(v.jsx)("input",{type:"submit",value:"Update Aweet",className:"formBtn"})]}):Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("h4",{children:t.text}),t.attachmentUrl&&Object(v.jsx)("img",{src:t.attachmentUrl}),a&&Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("div",{class:"nweet__actions",children:[Object(v.jsx)("span",{onClick:f,children:Object(v.jsx)(d.a,{icon:N.d})}),Object(v.jsx)("span",{onClick:h,children:Object(v.jsx)(d.a,{icon:N.a})})]})})]})})},S=a(59),I=function(e){var t=e.userObj,a=Object(n.useState)(""),c=Object(i.a)(a,2),r=c[0],s=c[1],u=Object(n.useState)(""),o=Object(i.a)(u,2),l=o[0],p=o[1],O=function(){var e=Object(b.a)(j.a.mark((function e(a){var n,c,i,u;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),""!==r){e.next=3;break}return e.abrupt("return");case 3:if(n="",""===l){e.next=12;break}return c=x.ref().child("".concat(t.uid,"/").concat(Object(S.a)())),e.next=8,c.putString(l,"data_url");case 8:return i=e.sent,e.next=11,i.ref.getDownloadURL();case 11:n=e.sent;case 12:return u={text:r,createdAt:Date.now(),creatorId:t.uid,attachmentUrl:n},e.next=15,m.collection("aweets").add(u);case 15:s(""),p("");case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsxs)("form",{onSubmit:O,className:"factoryForm",children:[Object(v.jsxs)("div",{className:"factoryInput__container",children:[Object(v.jsx)("input",{className:"factoryInput__input",value:r,onChange:function(e){var t=e.target.value;s(t)},type:"text",placeholder:"What's on your mind?",maxLength:120}),Object(v.jsx)("input",{type:"submit",value:"\u2192",className:"factoryInput__arrow"})]}),Object(v.jsxs)("label",{for:"attach-file",className:"factoryInput__label",children:[Object(v.jsx)("span",{children:"Add photos"}),Object(v.jsx)(d.a,{icon:N.b})]}),Object(v.jsx)("input",{id:"attach-file",type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],a=new FileReader;a.onloadend=function(e){var t=e.currentTarget.result;p(t)},Boolean(t)&&a.readAsDataURL(t)},style:{opacity:0}}),l&&Object(v.jsxs)("div",{className:"factoryForm__attachment",children:[Object(v.jsx)("img",{src:l,style:{backgroundImage:l}}),Object(v.jsxs)("div",{className:"factoryForm__clear",onClick:function(){return p("")},children:[Object(v.jsx)("span",{children:"Remove"}),Object(v.jsx)(d.a,{icon:N.c})]})]})]})},C=function(e){var t=e.userObj,a=Object(n.useState)([]),c=Object(i.a)(a,2),r=c[0],s=c[1];return Object(n.useEffect)((function(){m.collection("aweets").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(w.a)({id:e.id},e.data())}));s(t)}))}),[]),Object(v.jsxs)("div",{className:"container",children:[Object(v.jsx)(I,{userObj:t}),Object(v.jsx)("div",{style:{marginTop:30},children:r.map((function(e){return Object(v.jsx)(k,{aweetObj:e,isOwner:e.creatorId===t.uid},e.id)}))})]})},A=function(e){var t=e.userObj;return Object(v.jsx)("nav",{children:Object(v.jsxs)("ul",{style:{display:"flex",justifyContent:"center",marginTop:50},children:[Object(v.jsxs)("li",{children:[Object(v.jsx)(u.b,{to:"/",children:"Home"}),Object(v.jsx)(u.b,{to:"/",style:{marginRight:10},children:Object(v.jsx)(d.a,{icon:p.c,color:"#04AAFF",size:"2x"})})]}),Object(v.jsx)("li",{children:Object(v.jsxs)(u.b,{to:"/profile",style:{marginLeft:10,display:"flex",flexDirection:"column",alignItems:"center",fontSize:12},children:[Object(v.jsx)(d.a,{icon:N.e,color:"#04AAFF",size:"2x"}),Object(v.jsx)("span",{style:{marginTop:10},children:t.displayName?"".concat(t.displayName,"'s Profile"):"Profile"})]})})]})})},F=function(e){var t=e.refreshUser,a=e.userObj,c=Object(n.useState)(a.displayName),r=Object(i.a)(c,2),s=r[0],u=r[1],l=Object(o.f)(),d=function(){var e=Object(b.a)(j.a.mark((function e(n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),a.displayName===s){e.next=5;break}return e.next=4,a.updateProfile({displayName:s});case 4:t();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsxs)("div",{className:"container",children:[Object(v.jsxs)("form",{onSubmit:d,className:"profileForm",children:[Object(v.jsx)("input",{onChange:function(e){var t=e.target.value;u(t)},type:"text",autoFocus:!0,className:"formInput",placeholder:"Display name",value:s}),Object(v.jsx)("input",{type:"submit",value:"Update Profile Name",className:"formBtn",style:{marginTop:10}})]}),Object(v.jsx)("span",{className:"formBtn cancelBtn logOut",onClick:function(){h.signOut(),l.push("/")},children:"Log Out"})]})},U=function(e){var t=e.refreshUser,a=e.isLoggedIn,n=e.userObj;return Object(v.jsxs)(u.a,{children:[a&&Object(v.jsx)(A,{userObj:n}),Object(v.jsx)(o.c,{children:a?Object(v.jsxs)("div",{style:{maxWidth:890,width:"100%",margin:"0 auto",marginTop:80,display:"flex",justifyContent:"center"},children:[Object(v.jsx)(o.a,{exact:!0,path:"/",children:Object(v.jsx)(C,{userObj:n})}),Object(v.jsx)(o.a,{exact:!0,path:"/profile",children:Object(v.jsx)(F,{refreshUser:t,userObj:n})})]}):Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(o.a,{exact:!0,path:"/",children:Object(v.jsx)(y,{})})})})]})};var _=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(null),s=Object(i.a)(r,2),u=s[0],o=s[1];return Object(n.useEffect)((function(){h.onAuthStateChanged((function(e){o(e?{displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}}:null),c(!0)}))}),[]),Object(v.jsx)(v.Fragment,{children:a?Object(v.jsx)(U,{refreshUser:function(){var e=h.currentUser;o({displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}})},userObj:u,isLoggedIn:Boolean(u)}):"Initializing"})};a(56);s.a.render(Object(v.jsx)(c.a.StrictMode,{children:Object(v.jsx)(_,{})}),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.5e8ef0c2.chunk.js.map