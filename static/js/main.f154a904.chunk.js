(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,function(e,a,t){e.exports={dialogs:"Dialogs_dialogs__36-Hv",dialogsItem:"Dialogs_dialogsItem__3bHbj",dialog:"Dialogs_dialog__qlnsz",active:"Dialogs_active__ZOlpC",messages:"Dialogs_messages__293H0",message:"Dialogs_message__dKWJq"}},,function(e,a,t){e.exports={nav:"Nav_nav__2tfp1",active:"Nav_active__2wDzi"}},,,,,function(e,a,t){e.exports={MyPosts:"MyPosts_MyPosts__2KVXN"}},,,,function(e,a,t){e.exports={header:"Header_header__3Unjl"}},,function(e,a,t){e.exports={item:"Post_item__3Fkw4"}},function(e,a,t){e.exports={profile:"ProfileInfo_profile__24lZN"}},function(e,a,t){e.exports=t(37)},,,,,function(e,a,t){},function(e,a,t){},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var s=t(0),n=t.n(s),i=t(17),r=t.n(i),l=(t(27),t(28),t(18)),c=t.n(l),o=function(){return n.a.createElement("header",{className:c.a.header},n.a.createElement("img",{src:"/img/logo.png"}))},m=t(9),g=t.n(m),u=t(6),p=function(){return n.a.createElement("nav",{className:g.a.nav},n.a.createElement(u.b,{to:"/Profile",activeClassName:g.a.active},"Profile"),n.a.createElement(u.b,{to:"/Dialogs",activeClassName:g.a.active},"Message"),n.a.createElement(u.b,{to:"/Setting",activeClassName:g.a.active},"Setting"),n.a.createElement(u.b,{to:"/News",activeClassName:g.a.active},"News"),n.a.createElement(u.b,{to:"/Music",activeClassName:g.a.active},"Music"))},d=t(14),v=t.n(d),E=t(20),_=t.n(E),f=function(e){return n.a.createElement("div",null,n.a.createElement("div",{className:_.a.item},n.a.createElement("img",{src:e.img,alt:""}),e.message,n.a.createElement("div",null,n.a.createElement("span",null,e.likeCounts))))},h={_state:{profilePage:{posts:[{id:1,message:"post 1",likeCounts:4,img:"https://cs16planet.ru/steam-avatars/images/avatar2700.jpg"},{id:1,message:"post 1",likeCounts:4,img:"https://cs16planet.ru/steam-avatars/images/avatar2700.jpg"},{id:2,message:"post 2",likeCounts:123,img:"https://klike.net/uploads/posts/2019-03/1551511801_1.jpg"}],newPostText:""},dialogsPage:{dialogs:[{id:1,name:"Viktoria",img:"/img/avatar/avatar1.jpg"},{id:2,name:"Dmitriy",img:"/img/avatar/avatar2.jpg"},{id:3,name:"Sasha",img:"/img/avatar/avatar3.jpg"},{id:4,name:"Nikolay",img:"/img/avatar/avatar4.jpg"},{id:5,name:"Kris",img:"/img/avatar/avatar5.jpg"}],messages:[{id:1,message:"\u041f\u0440\u0438\u0432\u0435\u0442"},{id:1,message:"\u041a\u0430\u043a \u0442\u044b \u0431\u0440\u043e?"},{id:1,message:"\u041a\u0430\u043a \u0442\u044b \u0431\u0440\u043e?"},{id:1,message:"\u041a\u0430\u043a \u0442\u044b \u0431\u0440\u043e?"},{id:1,message:"\u041a\u0430\u043a \u0442\u044b \u0431\u0440\u043e?"},{id:1,message:"\u0414\u0430 \u0432\u0441\u0435 \u0445\u043e\u0440\u043e\u0448\u043e"}],newMessageText:""}},_callSubscriber:function(){console.log("state changed")},subscriber:function(e){this._callSubscriber=e},getState:function(){return this._state},dispatch:function(e){if("ADD_POST"===e.type){var a={id:5,message:this._state.profilePage.newPostText,likeCounts:0,img:"https://cs16planet.ru/steam-avatars/images/avatar2700.jpg"};this._state.profilePage.posts.push(a),this._state.profilePage.newPostText="",this._callSubscriber(this._state)}else if("UPDATE_NEW_POST_TEXT"===e.type)this._state.profilePage.newPostText=e.newText,this._callSubscriber(this._state);else if("ADD_MESSAGE"===e.type){var t={id:5,message:this._state.dialogsPage.newMessageText};this._state.dialogsPage.messages.push(t),this._state.dialogsPage.newMessageText="",this._callSubscriber(this._state)}else"UPDATE_NEW_MESSAGE_TEXT"===e.type&&(this._state.dialogsPage.newMessageText=e.newMessage,this._callSubscriber(this._state))}};var P=function(e){var a=e.posts.map((function(e){return n.a.createElement(f,{img:e.img,message:e.message,likeCounts:e.likeCounts})}));return n.a.createElement("div",{className:v.a.postsBlok},n.a.createElement("h3",null,"My posts"),n.a.createElement("div",null,n.a.createElement("div",null,n.a.createElement("textarea",{onChange:function(a){var t=a.currentTarget.value;e.dispatch({type:"UPDATE_NEW_POST_TEXT",newText:t}),console.log(a.currentTarget.value)},value:e.newPostText})),n.a.createElement("div",null,n.a.createElement("button",{onClick:function(){e.dispatch({type:"ADD_POST"})}},"Add post"))),n.a.createElement("div",{className:v.a.posts},a))},w=t(21),N=t.n(w),T=function(){return n.a.createElement("div",{className:N.a.profile},n.a.createElement("img",{src:"/img/main-page.jpeg",alt:""}))};var b=function(e){return n.a.createElement("div",null,n.a.createElement(T,null),n.a.createElement(P,{posts:e.state.posts,dispatch:e.dispatch,newPostText:e.state.newPostText}))},S=t(7),x=t.n(S),D=function(e){var a="/Dialogs/"+e.id;return n.a.createElement("div",{className:x.a.dialog},n.a.createElement(u.b,{to:a,activeClassName:x.a.active},n.a.createElement("img",{src:e.img,alt:""}),e.name))},M=function(e){return n.a.createElement("div",{className:x.a.message},e.message)},k=function(e){var a=e.state.dialogs.map((function(e){return n.a.createElement(D,{name:e.name,id:e.id,img:e.img})})),t=e.state.messages.map((function(e){return n.a.createElement(M,{message:e.message,id:e.id})}));return n.a.createElement("div",{className:x.a.dialogs},n.a.createElement("div",{className:x.a.dialogsItem},a),n.a.createElement("div",{className:x.a.messages},t,n.a.createElement("textarea",{onChange:function(a){var t=a.target.value;e.dispatch({type:"UPDATE_NEW_MESSAGE_TEXT",newMessage:t})},value:e.state.newMessageText}),n.a.createElement("div",null,n.a.createElement("button",{onClick:function(){e.dispatch({type:"ADD_MESSAGE"})}},"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"))))},y=(t(34),function(){return n.a.createElement("div",null,"News")}),C=(t(35),function(){return n.a.createElement("div",null,"Setting")}),A=(t(36),function(){return n.a.createElement("div",null,"Music")}),j=t(1);var W=function(e){return n.a.createElement(u.a,null,n.a.createElement("div",{className:"app-wrapper"},n.a.createElement(o,null),n.a.createElement(p,null),n.a.createElement("div",{className:"app-wrapper-content"},n.a.createElement(j.a,{path:"/Profile",render:function(){return n.a.createElement(b,{state:e.state.profilePage,dispatch:e.dispatch})}}),n.a.createElement(j.a,{path:"/Dialogs",render:function(){return n.a.createElement(k,{state:e.state.dialogsPage,dispatch:e.dispatch})}}),n.a.createElement(j.a,{path:"/Setting",render:function(){return n.a.createElement(C,null)}}),n.a.createElement(j.a,{path:"/News",render:function(){return n.a.createElement(y,null)}}),n.a.createElement(j.a,{path:"/Music",render:function(){return n.a.createElement(A,null)}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var I=function(e){r.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(W,{state:e,dispatch:h.dispatch.bind(h)})),document.getElementById("root"))};I(h.getState()),h.subscriber(I),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[22,1,2]]]);
//# sourceMappingURL=main.f154a904.chunk.js.map