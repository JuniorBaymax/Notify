(this.webpackJsonpnotifyer=this.webpackJsonpnotifyer||[]).push([[0],{17:function(e,t,a){e.exports=a(26)},25:function(e,t,a){},26:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),s=a(14),c=a.n(s),r=a(16),m=a(1),i=a(2),o=a(4),u=a(3),d=a(27),f=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("nav",{className:" model_nav navbar"},l.a.createElement(d.a,{xs:6,lg:3,className:"d-flex justify-content-center justify-content-sm-center justify-content-md-around order-sm-1 order-xl-1"},l.a.createElement("a",{className:"model_brand navbar-brand",href:""},"Edittor",l.a.createElement("i",{className:" model_brand-icon fas fa-pen-square"}))),l.a.createElement(d.a,{xs:12,lg:6,className:"d-flex justify-content-center order-sm-12 order-xl-2 mt-sm-2"},l.a.createElement("div",{className:" model_form form-group mb-0"},l.a.createElement("div",{className:" search_icon"},l.a.createElement("i",{className:" search_icon-i fas fa-search"}),l.a.createElement("input",{type:"search",className:"model_search form-control ",id:"search",placeholder:"Search anything"})))),l.a.createElement(d.a,{xs:6,lg:3,className:"d-flex justify-content-end justify-content-md-around order-sm-2 order-xl-3"},l.a.createElement("ul",{className:"navbar-nav"},l.a.createElement("li",{className:"nav-item active",id:"settings"},l.a.createElement("a",{className:"nav-link ",href:""},l.a.createElement("i",{className:" fas fa-2x fa-cog"}))),l.a.createElement("li",{className:"nav-item",id:"notifications"},l.a.createElement("a",{className:"nav-link ",href:""},l.a.createElement("i",{className:" far fa-2x fa-bell"}))),l.a.createElement("li",{className:"nav-item",id:"userpanel"},l.a.createElement("a",{className:"nav-link ",href:""},l.a.createElement("i",{className:" fas  fa-2x fa-plus-square"})))))))}}]),a}(l.a.Component),E=a(28),h=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement(E.a,{className:"mt-sm-4 mt-xl-0"},l.a.createElement(d.a,{className:" col-lg-3"}),l.a.createElement("div",{className:"notegroup "},l.a.createElement(d.a,{xs:12,xl:"auto",lg:"auto",className:"d-flex justify-content-sm-between justify-content-xl-around align-items-center"},l.a.createElement("h1",{className:"notegroup_headline"},"Today"),l.a.createElement("ul",{className:"notegroup_nav"},l.a.createElement("li",{className:"notegroup_nav-icons"},l.a.createElement("i",{className:" fas fa-sun"})),l.a.createElement("li",{className:"notegroup_nav-icons"},l.a.createElement("i",{className:" fas fa-user-tag"})),l.a.createElement("li",{className:"notegroup_nav-icons"},l.a.createElement("i",{className:" fas fa-ellipsis-h"}))))),l.a.createElement(d.a,{lg:3,xl:3}))}}]),a}(l.a.Component),p=a(10),v=a.n(p),N=a(29),b=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props,t=e.item,a=e.handleInputChange,n=e.handleSubmit,s=e.editItem;return l.a.createElement(E.a,null,l.a.createElement(d.a,{className:"col-sm-1 col-xl-3"}),l.a.createElement(d.a,{className:"col-sm-10 col-xl-6"},l.a.createElement(N.a,{fluid:!0},l.a.createElement("form",{className:"form_group",onSubmit:function(e){e.preventDefault(),""!==t?n():v()("Text Missing","You must continue with some Todo's","warning")}},l.a.createElement("input",{className:" text-input form-control shadow-sm",placeholder:"write a note or paste a link",value:t,onChange:a,type:"text",maxLength:80}),l.a.createElement("i",{className:"form_group-icon addbtn fas fa-2x fa-plus-circle",onClick:function(){""!==t?n():v()("Text Missing","You must continue with some text","warning")}}),l.a.createElement("div",{className:"clearlist text-center"},l.a.createElement("button",{className:s?"btn btn-danger btn-success":"btn btn-danger"},s?"Edit note":"save note"))))),l.a.createElement(d.a,{className:"col-sm-1 col-xl-3"}))}}]),a}(l.a.Component),g=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props,t=e.title,a=e.timeStamp,n=e.deleteItem,s=e.editItem;return l.a.createElement(E.a,null,l.a.createElement(d.a,{className:"col-sm-1"}),l.a.createElement(d.a,{sm:10},l.a.createElement("div",{className:"view shadow-lg"},l.a.createElement("div",{className:"view-items"},l.a.createElement("h3",{className:"view-items-text"},l.a.createElement("strong",null,t))),l.a.createElement("div",{className:"view-items"},l.a.createElement("div",{className:"view-items-timeline "},l.a.createElement("p",{className:"view-items-timeline-today mr-2"},"Today"),l.a.createElement("p",{className:"view-items-timeline-time"},a)),l.a.createElement("div",{className:"view-items-icons"},l.a.createElement("span",{className:"mx-2 text-success ",onClick:s},l.a.createElement("button",{className:"btn btn-sm btn-info px-3"},"Edit",l.a.createElement("i",{className:"fas fa-pen ml-2"}))),l.a.createElement("span",{className:"mx-2 text-danger",onClick:n},l.a.createElement("button",{className:"btn btn-sm btn-danger"},"Delete",l.a.createElement("i",{className:"fas fa-trash ml-2"}))))))),l.a.createElement(d.a,{className:"col-sm-1"}))}}]),a}(l.a.Component),x=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props,t=e.items,a=(e.clearList,e.handleDelete),n=e.handleEdit;return l.a.createElement(N.a,{fluid:!0},l.a.createElement("section",{className:"container"},t.map((function(e){return l.a.createElement(g,{key:e.id,title:e.title,timeStamp:e.Time,deleteItem:function(){return a(e.id)},editItem:function(){return n(e.id)}})}))))}}]),a}(l.a.Component),j=(a(24),function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(e=t.call.apply(t,[this].concat(l))).state={items:[],id:Math.floor(1e3+9e3*Math.random()),item:"",editItem:!1,curTime:(new Date).toLocaleTimeString("en-US",{hour12:!1,hour:"numeric",minute:"numeric"})},e.onInputChange=function(t){e.setState({item:t.target.value,curTime:e.state.curTime})},e.handleSubmit=function(t){var a={id:e.state.id,title:e.state.item,Time:e.state.curTime},n=[].concat(Object(r.a)(e.state.items),[a]);e.setState({items:n,item:" ",id:Math.floor(1e3+9e3*Math.random()),editItem:!1,curTime:e.state.curTime})},e.clearList=function(){0!==e.state.items.length&&(e.setState={items:[]}),console.log(e.state.items)},e.handleDelete=function(t){var a=e.state.items.filter((function(e){return e.id!==t}));e.setState({items:a})},e.handleEdit=function(t){console.log(t);var a=e.state.items.filter((function(e){return e.id!==t})),n=e.state.items.find((function(e){return e.id===t}));console.log(n),e.setState({items:a,item:n.title,editItem:!0,id:t,curTime:(new Date).toLocaleTimeString()})},e}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement("section",{className:"hero "},l.a.createElement("div",{className:"model "},l.a.createElement(N.a,{fluid:!0},l.a.createElement(E.a,null,l.a.createElement(d.a,null,l.a.createElement("div",{className:"model_divider"}))),l.a.createElement(E.a,null,l.a.createElement(d.a,null,l.a.createElement(f,null))),l.a.createElement(h,null),l.a.createElement(N.a,null,l.a.createElement(b,{item:this.state.item,handleInputChange:this.onInputChange,handleSubmit:this.handleSubmit,editItem:this.state.editItem})),l.a.createElement(x,{items:this.state.items,clearList:this.clearList,handleDelete:this.handleDelete,handleEdit:this.handleEdit})))))}}]),a}(l.a.Component));a(25),c.a.render(l.a.createElement(j,null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.80a9083b.chunk.js.map