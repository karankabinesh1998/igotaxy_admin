(this.webpackJsonpBasic_React=this.webpackJsonpBasic_React||[]).push([[0],{17:function(e,t){e.exports={ACCESS_POINT:"http://localhost:5001"}},47:function(e,t,a){e.exports=a.p+"static/media/igotaxy_logo.451ef1a2.jpg"},53:function(e,t,a){e.exports=a(92)},59:function(e,t,a){},88:function(e,t,a){},91:function(e,t,a){},92:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),s=a(22),l=a.n(s),c=a(49),o=a(6),i=a(11),m=a(12),d=a(14),u=a(13),p=(r.Component,a(3)),f=a.n(p),E=a(5),h=a(27),b=a(28),g=a(17),v=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var r;return Object(i.a)(this,a),(r=t.call(this,e)).CheckActive=function(e){},r.Logout=Object(E.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:localStorage.removeItem("Userdetails"),window.location.href="/";case 2:case"end":return e.stop()}}),e)}))),r.state={Username:"",currentDate:"",Userdetails:null,Image:{width:"50%",height:"86px",marginTop:"3px",marginLeft:"-90px"}},r}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=Object(E.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:null!==(t=JSON.parse(localStorage.getItem("Userdetails")))?(console.log(t),this.setState({Userdetails:t[0],Username:t[0].name,Profilepic:t[0].profile_dp})):window.location.href="/admin",window.scrollTo({top:0,behavior:"smooth"});case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{class:"navbar-bg"}),n.a.createElement("nav",{class:"navbar navbar-expand-lg main-navbar sticky"},n.a.createElement("div",{class:"form-inline mr-auto"},n.a.createElement("ul",{class:"navbar-nav mr-3"},n.a.createElement("li",null,n.a.createElement("a",{href:"#","data-toggle":"sidebar",class:"nav-link nav-link-lg\r collapse-btn"},n.a.createElement(h.a,{size:24,style:{color:"black"}}))),n.a.createElement("li",null,n.a.createElement("a",{href:"#",class:"nav-link nav-link-lg fullscreen-btn"},n.a.createElement(b.b,{size:24,style:{color:"black"}}))),n.a.createElement("li",null,n.a.createElement("form",{class:"form-inline mr-auto"},n.a.createElement("div",{class:"search-element"},n.a.createElement("input",{class:"form-control",type:"search",placeholder:"Search","aria-label":"Search","data-width":"200"}),n.a.createElement("button",{class:"btn",type:"submit"},n.a.createElement("i",{class:"fas fa-search"}))))))),n.a.createElement("ul",{class:"navbar-nav navbar-right"},n.a.createElement("li",{class:"dropdown dropdown-list-toggle"},n.a.createElement("a",{href:"#","data-toggle":"dropdown",class:"nav-link nav-link-lg message-toggle"},n.a.createElement(h.b,{size:24,style:{color:"black"}}),n.a.createElement("span",{class:"badge headerBadge1"},"6 ")," "),n.a.createElement("div",{class:"dropdown-menu dropdown-list dropdown-menu-right pullDown"},n.a.createElement("div",{class:"dropdown-header"},"Messages",n.a.createElement("div",{class:"float-right"},n.a.createElement("a",{href:"#"},"Mark All As Read"))),n.a.createElement("div",{class:"dropdown-list-content dropdown-list-message"},n.a.createElement("a",{href:"#",class:"dropdown-item"}," ",n.a.createElement("span",{class:"dropdown-item-avatar\r text-white"}," ",n.a.createElement("img",{alt:"image",src:"assets/img/users/user-1.png",class:"rounded-circle"}))," ",n.a.createElement("span",{class:"dropdown-item-desc"}," ",n.a.createElement("span",{class:"message-user"},"John Deo"),n.a.createElement("span",{class:"time messege-text"},"Please check your mail !!"),n.a.createElement("span",{class:"time"},"2 Min Ago")))," ",n.a.createElement("a",{href:"#",class:"dropdown-item"}," ",n.a.createElement("span",{class:"dropdown-item-avatar text-white"},n.a.createElement("img",{alt:"image",src:"assets/img/users/user-2.png",class:"rounded-circle"}))," ",n.a.createElement("span",{class:"dropdown-item-desc"}," ",n.a.createElement("span",{class:"message-user"},"Sarah Smith")," ",n.a.createElement("span",{class:"time messege-text"},"Request for leave application"),n.a.createElement("span",{class:"time"},"5 Min Ago")))," ",n.a.createElement("a",{href:"#",class:"dropdown-item"}," ",n.a.createElement("span",{class:"dropdown-item-avatar text-white"},n.a.createElement("img",{alt:"image",src:"assets/img/users/user-5.png",class:"rounded-circle"}))," ",n.a.createElement("span",{class:"dropdown-item-desc"}," ",n.a.createElement("span",{class:"message-user"},"Jacob Ryan")," ",n.a.createElement("span",{class:"time messege-text"},"Your payment invoice is generated.")," ",n.a.createElement("span",{class:"time"},"12 Min Ago")))," ",n.a.createElement("a",{href:"#",class:"dropdown-item"}," ",n.a.createElement("span",{class:"dropdown-item-avatar text-white"},n.a.createElement("img",{alt:"image",src:"assets/img/users/user-4.png",class:"rounded-circle"}))," ",n.a.createElement("span",{class:"dropdown-item-desc"}," ",n.a.createElement("span",{class:"message-user"},"Lina Smith")," ",n.a.createElement("span",{class:"time messege-text"},"hii John, I have upload doc related to task.")," ",n.a.createElement("span",{class:"time"},"30 Min Ago")))," ",n.a.createElement("a",{href:"#",class:"dropdown-item"}," ",n.a.createElement("span",{class:"dropdown-item-avatar text-white"},n.a.createElement("img",{alt:"image",src:"assets/img/users/user-3.png",class:"rounded-circle"}))," ",n.a.createElement("span",{class:"dropdown-item-desc"}," ",n.a.createElement("span",{class:"message-user"},"Jalpa Joshi")," ",n.a.createElement("span",{class:"time messege-text"},"Please do as specify. Let me know if you have any query.")," ",n.a.createElement("span",{class:"time"},"1 Days Ago")))," ",n.a.createElement("a",{href:"#",class:"dropdown-item"}," ",n.a.createElement("span",{class:"dropdown-item-avatar text-white"},n.a.createElement("img",{alt:"image",src:"assets/img/users/user-2.png",class:"rounded-circle"}))," ",n.a.createElement("span",{class:"dropdown-item-desc"}," ",n.a.createElement("span",{class:"message-user"},"Sarah Smith")," ",n.a.createElement("span",{class:"time messege-text"},"Client Requirements"),n.a.createElement("span",{class:"time"},"2 Days Ago")))),n.a.createElement("div",{class:"dropdown-footer text-center"},n.a.createElement("a",{href:"#"},"View All ",n.a.createElement("i",{class:"fas fa-chevron-right"}))))),n.a.createElement("li",{class:"dropdown dropdown-list-toggle"},n.a.createElement("a",{href:"#","data-toggle":"dropdown",class:"nav-link notification-toggle nav-link-lg"},n.a.createElement(b.a,{size:24,style:{color:"black"}})),n.a.createElement("div",{class:"dropdown-menu dropdown-list dropdown-menu-right pullDown"},n.a.createElement("div",{class:"dropdown-header"},"Notifications",n.a.createElement("div",{class:"float-right"},n.a.createElement("a",{href:"#"},"Mark All As Read"))),n.a.createElement("div",{class:"dropdown-list-content dropdown-list-icons"},n.a.createElement("a",{href:"#",class:"dropdown-item dropdown-item-unread"}," ",n.a.createElement("span",{class:"dropdown-item-icon bg-primary text-white"}," ",n.a.createElement("i",{class:"fas\r fa-code"}))," ",n.a.createElement("span",{class:"dropdown-item-desc"}," Template update is available now! ",n.a.createElement("span",{class:"time"},"2 Min Ago")))," ",n.a.createElement("a",{href:"#",class:"dropdown-item"}," ",n.a.createElement("span",{class:"dropdown-item-icon bg-info text-white"}," ",n.a.createElement("i",{class:"far\r fa-user"}))," ",n.a.createElement("span",{class:"dropdown-item-desc"}," ",n.a.createElement("b",null,"You")," and ",n.a.createElement("b",null,"Dedik Sugiharto")," are now friends ",n.a.createElement("span",{class:"time"},"10 Hours Ago")))," ",n.a.createElement("a",{href:"#",class:"dropdown-item"}," ",n.a.createElement("span",{class:"dropdown-item-icon bg-success text-white"}," ",n.a.createElement("i",{class:"fas\r fa-check"}))," ",n.a.createElement("span",{class:"dropdown-item-desc"}," ",n.a.createElement("b",null,"Kusnaedi")," has moved task ",n.a.createElement("b",null,"Fix bug header")," to ",n.a.createElement("b",null,"Done")," ",n.a.createElement("span",{class:"time"},"12 Hours Ago")))," ",n.a.createElement("a",{href:"#",class:"dropdown-item"}," ",n.a.createElement("span",{class:"dropdown-item-icon bg-danger text-white"}," ",n.a.createElement("i",{class:"fas fa-exclamation-triangle"}))," ",n.a.createElement("span",{class:"dropdown-item-desc"}," Low disk space. Let's clean it! ",n.a.createElement("span",{class:"time"},"17 Hours Ago")))," ",n.a.createElement("a",{href:"#",class:"dropdown-item"}," ",n.a.createElement("span",{class:"dropdown-item-icon bg-info text-white"}," ",n.a.createElement("i",{class:"fas\r fa-bell"}))," ",n.a.createElement("span",{class:"dropdown-item-desc"}," Welcome to Otika template! ",n.a.createElement("span",{class:"time"},"Yesterday")))),n.a.createElement("div",{class:"dropdown-footer text-center"},n.a.createElement("a",{href:"#"},"View All ",n.a.createElement("i",{class:"fas fa-chevron-right"}))))),n.a.createElement("li",{class:"dropdown"},n.a.createElement("a",{href:"#","data-toggle":"dropdown",class:"nav-link dropdown-toggle nav-link-lg nav-link-user"}," ",n.a.createElement("img",{alt:"image",src:"".concat(g.ACCESS_POINT,"/admin/filename/").concat(this.state.Profilepic),class:"user-img-radious-style"})," ",n.a.createElement("span",{class:"d-sm-none d-lg-inline-block"})),n.a.createElement("div",{class:"dropdown-menu dropdown-menu-right pullDown"},n.a.createElement("div",{class:"dropdown-title"},"Hello ",this.state.Username),n.a.createElement("a",{href:"profile.html",class:"dropdown-item has-icon"}," ",n.a.createElement("i",{class:"far\r fa-user"})," Profile")," ",n.a.createElement("a",{href:"timeline.html",class:"dropdown-item has-icon"}," ",n.a.createElement("i",{class:"fas fa-bolt"}),"Activities")," ",n.a.createElement("a",{href:"#",class:"dropdown-item has-icon"}," ",n.a.createElement("i",{class:"fas fa-cog"}),"Settings"),n.a.createElement("div",{class:"dropdown-divider"}),n.a.createElement("a",{href:"#",onClick:this.Logout,class:"dropdown-item has-icon text-danger"}," ",n.a.createElement("i",{class:"fas fa-sign-out-alt"}),"Logout"))))))}}]),a}(r.Component),w=a(47),x=a.n(w),k=a(19),y=(a(59),function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var r;return Object(i.a)(this,a),(r=t.call(this,e)).state={},r}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=Object(E.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{class:"main-sidebar sidebar-style-2"},n.a.createElement("aside",{id:"sidebar-wrapper"},n.a.createElement("div",{class:"sidebar-brand"},n.a.createElement("a",{href:"/dashboard"}," ",n.a.createElement("img",{alt:"image",src:x.a,class:"header-logo"})," ",n.a.createElement("span",{class:"logo-name"},"igoTaxy"))),n.a.createElement("ul",{class:"sidebar-menu"},n.a.createElement("li",{class:"menu-header"},"Main"),n.a.createElement("li",{class:"dropdown active"},n.a.createElement("a",{href:"/dashboard",class:"nav-link"},n.a.createElement(k.b,{size:24,style:{width:"20px",color:"black"}}),n.a.createElement("span",{class:"Sidenav"},"Dashboard"))),n.a.createElement("li",{class:"menu-header"},"Masters"),n.a.createElement("li",{class:"dropdown"},n.a.createElement("a",{href:"#",class:"menu-toggle nav-link has-dropdown"}," ",n.a.createElement(k.c,{size:24,style:{width:"20px",color:"black"}})," ",n.a.createElement("span",{class:"Sidenav"}," Add Masters ")),n.a.createElement("ul",{class:"dropdown-menu"},n.a.createElement("li",null,n.a.createElement("a",{class:"nav-link",id:"anchorid",href:"/user"},"Add Users")),n.a.createElement("li",null,n.a.createElement("a",{class:"nav-link",id:"anchorid",href:"/vendar"},"Add Vendars")),n.a.createElement("li",null,n.a.createElement("a",{class:"nav-link",id:"anchorid",href:"/city"},"Add City")),n.a.createElement("li",null,n.a.createElement("a",{class:"nav-link",id:"anchorid",href:"/mapcity"},"Map City to Price")))),n.a.createElement("li",{class:"dropdown"},n.a.createElement("a",{href:"#",class:"menu-toggle nav-link has-dropdown"}," ",n.a.createElement(k.a,{size:24,style:{width:"20px",color:"black"}})," ",n.a.createElement("span",{class:"Sidenav"}," Vehicle ")),n.a.createElement("ul",{class:"dropdown-menu"},n.a.createElement("li",null,n.a.createElement("a",{class:"nav-link",id:"anchorid",href:"/vehicle"},"Vendar Vehicle")))),n.a.createElement("li",null,n.a.createElement("a",{class:"nav-link",href:"blank.html"},n.a.createElement("i",{"data-feather":"file"}),n.a.createElement("span",null,"Blank Page")))))))}}]),a}(n.a.Component)),S=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var r;return Object(i.a)(this,a),(r=t.call(this,e)).state={Year:""},r}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=Object(E.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=new Date,this.setState({Year:t.getFullYear()});case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("footer",{class:"main-footer"},n.a.createElement("div",{class:"footer-left"},n.a.createElement("a",{href:"#"},"\xa9 ",this.state.Year," igoTaxy.com")),n.a.createElement("div",{class:"footer-right"})))}}]),a}(n.a.Component),C=a(16),O=a(93),A=(a(60),a(20)),j=a.n(A),N={get:j.a.get,post:j.a.post,put:j.a.put,delete:j.a.delete},_={check:function(){var e=Object(E.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.get("".concat(g.ACCESS_POINT,"/cmsContent/test"));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getFreedom:function(){var e=Object(E.a)(f.a.mark((function e(t,a,r){var n,s,l,c,o=arguments;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=o.length>3&&void 0!==o[3]?o[3]:"id",s=o.length>4&&void 0!==o[4]?o[4]:"id",(l={}).select=t,l.tableName=a,l.condition=r,l.groupby=n,l.orderby=s,e.next=10,N.put(g.ACCESS_POINT+"/cmsContent/getFullFreedom/getFreedom",l);case 10:if(!(c=e.sent).data){e.next=13;break}return e.abrupt("return",c);case 13:case"end":return e.stop()}}),e)})));return function(t,a,r){return e.apply(this,arguments)}}(),updateMaster:function(){var e=Object(E.a)(f.a.mark((function e(t,a,r){var n,s,l=arguments;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=l.length>3&&void 0!==l[3]?l[3]:"id",e.next=3,N.put(g.ACCESS_POINT+"/cmsContent/master/".concat(t,"/").concat(n),{id:a,categoryArray:r});case 3:return s=e.sent,e.abrupt("return",s);case 5:case"end":return e.stop()}}),e)})));return function(t,a,r){return e.apply(this,arguments)}}(),deleteMaster:function(){var e=Object(E.a)(f.a.mark((function e(t,a){var r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.delete(g.ACCESS_POINT+"/cmsContent/master/".concat(t,"/").concat(a));case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),LoginAdmin:function(){var e=Object(E.a)(f.a.mark((function e(t){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.post(g.ACCESS_POINT+"/admin/login",t,{headers:{"Content-Type":"multipart/form-data"}});case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},D=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var r;return Object(i.a)(this,a),(r=t.call(this,e)).handlechange=function(){var e=Object(E.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r.setState(Object(C.a)({},t.target.name,t.target.value)),"username"==[t.target.name]?r.setState({errorusername:""}):"password"==[t.target.name]&&r.setState({errorpassowrd:""});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r.onDismiss=function(){r.setState({alertVisible:!1}),r.setState({formAlertdelete:!1})},r.ValidateEmail=function(){var e=Object(E.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(t)){e.next=4;break}return e.abrupt("return",1);case 4:return e.abrupt("return",0);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r.submit=Object(E.a)(f.a.mark((function e(){var t,a,n,s,l,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.state,a=t.username,n=t.password,t.errorusername,t.errorpassowrd,e.next=3,r.ValidateEmail(a);case 3:if(s=e.sent,a){e.next=9;break}return r.setState({errorusername:"Please fill in your email"}),e.abrupt("return",!1);case 9:if(0!=s){e.next=14;break}return r.setState({errorusername:"Please Enter your Valid email"}),e.abrupt("return",!1);case 14:r.setState({errorusername:""});case 15:if(n){e.next=20;break}return r.setState({errorpassowrd:"please fill in your password"}),e.abrupt("return",!1);case 20:r.setState({errorpassowrd:""});case 21:return(l=new FormData).append("email_id",a),l.append("password",n),e.next=26,_.LoginAdmin(l);case 26:c=e.sent,console.log(c),c.data.length?(localStorage.setItem("Userdetails",JSON.stringify(c.data)),window.location.href="/dashboard"):0==c.data&&(r.setState({alertVisible:!0,color:"danger",textALert:"Wrong Email or Password"}),setTimeout((function(){return r.setState({alertVisible:!1})}),3e3));case 29:case"end":return e.stop()}}),e)}))),r.submitEnter=function(){var e=Object(E.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"Enter"===t.key&&r.submit();case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r.state={username:"",password:"",errorusername:"",errorpassowrd:"",Userdetails:null==JSON.parse(localStorage.getItem("Userdetails"))?[]:JSON.parse(localStorage.getItem("Userdetails")),alertVisible:!1,formAlertdelete:!1,textALert:"",color:""},r}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=Object(E.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.state.Userdetails.length&&null!==this.state.Userdetails&&(window.location.href="/dashboard");case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.errorusername,r=t.errorpassowrd;t.color,t.textALert,t.alertVisible;return n.a.createElement(n.a.Fragment,null,n.a.createElement("section",{class:"section"},n.a.createElement("br",null),n.a.createElement("div",{className:"row form-group"},n.a.createElement("div",{className:"col-sm-2"}),n.a.createElement("div",{className:"col-sm-8"},n.a.createElement(O.a,Object(C.a)({className:"badge-content",color:"success",isOpen:this.state.alertVisible,toggle:this.onDismiss},"color",this.state.color),this.state.textALert)),n.a.createElement("div",{className:"col-sm-2"})),n.a.createElement("br",null),n.a.createElement("h1",{style:{marginTop:"1%",textAlign:"center",color:"black",fontWeight:"200"}},"igoTaxy"),n.a.createElement("div",{class:"container mt-5"},n.a.createElement("div",{class:"row"},n.a.createElement("div",{class:"col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4"},n.a.createElement("div",{class:"card card-primary"},n.a.createElement("div",{class:"card-header"},n.a.createElement("h4",null,"Login")),n.a.createElement("div",{class:"card-body"},n.a.createElement("div",null,n.a.createElement("div",{class:"form-group"},n.a.createElement("label",{for:"email"},"Email"),n.a.createElement("input",{id:"email",type:"email",class:"form-control",name:"username",tabindex:"1",value:this.state.username,onChange:this.handlechange,required:!0,autofocus:!0}),n.a.createElement("div",{class:"invalid-feedback"},a)),n.a.createElement("div",{class:"form-group"},n.a.createElement("div",{class:"d-block"},n.a.createElement("label",{for:"password",class:"control-label"},"Password"),n.a.createElement("div",{class:"float-right"},n.a.createElement("a",{href:"auth-forgot-password.html",class:"text-small"},"Forgot Password?"))),n.a.createElement("input",{id:"password",type:"password",class:"form-control",name:"password",value:this.state.password,onChange:this.handlechange,tabindex:"2",onKeyPress:function(t){return e.submitEnter(t)},required:!0}),n.a.createElement("div",{class:"invalid-feedback"},r)),n.a.createElement("div",{class:"form-group"},n.a.createElement("div",{class:"custom-control custom-checkbox"})),n.a.createElement("div",{class:"form-group"},n.a.createElement("button",{type:"submit",onClick:this.submit,class:"btn btn-primary btn-lg btn-block",tabindex:"4"},"Login"))))),n.a.createElement("div",{class:"mt-5 text-muted text-center"}))))))}}]),a}(r.Component),I=a(48),M=a(21),T=a(51);a(86);var P=function(e){var t=e.data,a=e.columnHeading,r=e.filterable,s=void 0===r||r;return n.a.createElement(T.a,{data:t,columns:a,filterable:s,defaultPageSize:10,className:"-striped -highlight",minRows:1,defaultFilterMethod:function(e,t){return function(e,t){var a=e.pivotId||e.id;return void 0===t[a]||null===t[a]||""===t[a]||(isNaN(e.value)?String(t[a].toLowerCase()).startsWith(e.value.toLowerCase()):String(t[a]).startsWith(e.value))}(e,t)}})},B=a(24),L=a.n(B),V=(a(88),function(e){var t=e.ButtonBody,a=e.ButtonTitle,r=e.id,s=(e.bodyText,e.onClick,e.extraClass,e.extraStyle),l=(e.maxwidth,e.indexStyle),c=void 0===l?{}:l;e.buttonStyle;return n.a.createElement("div",{class:"modal fade bd-example-modal-lg",id:"".concat(r),style:c,tabindex:"-1",role:"dialog","aria-labelledby":"formModal","aria-hidden":"true"},n.a.createElement("div",{class:"modal-dialog",role:"document"},n.a.createElement("div",{class:"modal-content",style:s||null},n.a.createElement("div",{class:"modal-header"},n.a.createElement("h5",{class:"modal-title",id:"formModal"},a),n.a.createElement("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},n.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),n.a.createElement("div",{class:"modal-body"},t))))}),F=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var r;return Object(i.a)(this,a),(r=t.call(this,e)).Status=function(e){var t=e;return"active"===e.original.status?n.a.createElement("center",null,n.a.createElement("button",{type:"button",className:"btn btn-info",onClick:function(){return r.StatusChange(t)}},"Active")):n.a.createElement("center",null,n.a.createElement("button",{type:"button",className:"btn btn-danger",onClick:function(){return r.StatusChange(t)}},"Inactive"))},r.StatusChange=function(){var e=Object(E.a)(f.a.mark((function e(t){var a,n,s,l,c,o;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.original.status,n=t.original.id,s=t.index,l=Object(M.a)(r.state.Data),(c={}).status="active"===a?"inactive":"active",e.prev=6,e.next=9,_.updateMaster("tbl_user_web",n,c);case 9:o=e.sent,l[s].status=c.status,o&&r.setState({Data:l}),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(6),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[6,14]])})));return function(t){return e.apply(this,arguments)}}(),r.edit=function(e){var t=e;return n.a.createElement("center",null,n.a.createElement("button",{type:"button",className:"btn btn-info","data-toggle":"modal","data-target":"#adduser",onClick:function(){return r.edition(t)}},"Edit"))},r.edition=function(){var e=Object(E.a)(f.a.mark((function e(t){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=t.original,console.log(t),r.setState({ButtonName1:!1,ButtonTitle:"Update Customers",ButtonName:"Update",username:a.username,mobile:a.mobile,email_id:a.email_id,password:a.password,EditId:a.id,Index:t.index});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r.delete=function(e){return n.a.createElement("center",null,n.a.createElement("button",{type:"button",className:"btn btn-danger",onClick:function(){return r.deletion(e)}},"Delete"))},r.deletion=function(){var e=Object(E.a)(f.a.mark((function e(t){var a,n,s,l;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=Object(M.a)(r.state.Data),n=Object(I.a)({},a[t.index]),s=n.id,l=a.filter((function(e){return e.id!==s}));try{L()({title:"Are you sure?",text:"Once deleted, you will not be able to recover this Customer!",icon:"warning",buttons:!0,dangerMode:!0}).then(function(){var e=Object(E.a)(f.a.mark((function e(t){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=7;break}return e.next=3,_.deleteMaster("tbl_user_web",s);case 3:(a=e.sent)&&(console.log(a),r.setState({Data:l}),L()("Poof! Your Data has been deleted!",{icon:"success"})),e.next=8;break;case 7:L()("Your Data  is safe!");case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}catch(c){r.setState({data:a}),console.log(c)}case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r.login_status=function(e){return 0==e.original.login_status?n.a.createElement("center",null,n.a.createElement("button",{type:"button",disabled:!0,className:"btn btn-warning"},"Inactive")):n.a.createElement("center",null,n.a.createElement("button",{type:"button",className:"btn btn-info"},"active"))},r.handleChange=function(){var e=Object(E.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r.setState(Object(C.a)({},t.target.name,t.target.value));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r.AddCustomers=Object(E.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r.setState({ButtonName1:!0,ButtonTitle:"Add Customers",ButtonName:"Submit",errorusername:"",errorconfirmpass:"",errormobile:"",errorpassword:"",erroremail:"",username:"",email_id:"",mobile:"",password:"",confirmpassword:""});case 1:case"end":return e.stop()}}),e)}))),r.ValidateEmail=function(){var e=Object(E.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(t)){e.next=4;break}return e.abrupt("return",1);case 4:return e.abrupt("return",0);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r.submit=function(){var e=Object(E.a)(f.a.mark((function e(t){var a,n,s,l,c,o,i,m,d,u,p;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.state,n=a.username,s=a.mobile,l=a.email_id,c=a.password,o=a.confirmpassword,e.next=3,r.ValidateEmail(l);case 3:if(i=e.sent,n){e.next=9;break}return r.setState({errorusername:"Enter the name"}),e.abrupt("return",!1);case 9:if(s){e.next=14;break}return r.setState({errormobile:"Enter the mobile number"}),e.abrupt("return",!1);case 14:if(l){e.next=19;break}return r.setState({erroremail:"Enter the email id"}),e.abrupt("return",!1);case 19:if(0!=i){e.next=24;break}return r.setState({erroremail:"Enter the valid email id"}),e.abrupt("return",!1);case 24:if(c){e.next=29;break}return r.setState({errorpassword:"Enter the password"}),e.abrupt("return",!1);case 29:if(o){e.next=34;break}return r.setState({errorconfirmpass:"Enter the confirm password"}),e.abrupt("return",!1);case 34:r.setState({errorusername:"",errorconfirmpass:"",errormobile:"",errorpassword:"",erroremail:""});case 35:if(c===o){e.next=38;break}return alert("wrong pass"),e.abrupt("return",!1);case 38:return(m=new FormData).append("username",n),m.append("name",n),m.append("mobile",s),m.append("email_id",l),m.append("password",c),m.append("userType",4),m.append("login_status",0),m.append("status",1),m.append("profile_dp",r.state.file),e.prev=48,e.next=51,_.AddUser("tbl_user_web",m);case 51:0==(d=e.sent).data?r.setState({erroremail:"Email Id already Exist"}):d&&((u={}).username=n,u.name=n,u.status="active",u.email_id=l,u.mobile=s,u.password=c,u.confirmpassword=o,u.login_status=0,u.id=d.insertId,u.profile_pic=d.profile_pic,p=[u].concat(Object(M.a)(r.state.Data)),r.setState({username:"",password:"",confirmpassword:"",mobile:"",email_id:"",alertVisible:!0,color:"success",textALert:"Successfully added Customer",Data:p}),setTimeout((function(){return r.setState({alertVisible:!1,textALert:""})}),3e3)),e.next=58;break;case 55:e.prev=55,e.t0=e.catch(48),console.log(e.t0);case 58:case"end":return e.stop()}}),e,null,[[48,55]])})));return function(t){return e.apply(this,arguments)}}(),r.Update=Object(E.a)(f.a.mark((function e(){var t,a,n,s,l,c,o,i,m,d,u,p;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.state,a=t.username,n=t.mobile,s=t.email_id,l=t.password,c=t.confirmpassword,o=t.EditId,i=t.Index,e.next=3,r.ValidateEmail(s);case 3:if(m=e.sent,a){e.next=9;break}return r.setState({errorusername:"Enter the name"}),e.abrupt("return",!1);case 9:if(n){e.next=14;break}return r.setState({errormobile:"Enter the email id"}),e.abrupt("return",!1);case 14:if(s){e.next=19;break}return r.setState({erroremail:"Enter the email id"}),e.abrupt("return",!1);case 19:if(0!=m){e.next=24;break}return r.setState({erroremail:"Enter the valid email id"}),e.abrupt("return",!1);case 24:if(l){e.next=29;break}return r.setState({errorpassword:"Enter the password"}),e.abrupt("return",!1);case 29:if(c){e.next=34;break}return r.setState({errorconfirmpass:"Enter the confirm password"}),e.abrupt("return",!1);case 34:r.setState({errorusername:"",errorconfirmpass:"",errormobile:"",errorpassword:"",erroremail:""});case 35:if(l===c){e.next=38;break}return alert("wrong pass"),e.abrupt("return",!1);case 38:return(d={}).username=a,d.name=a,d.email_id=s,d.password=l,d.mobile=n,e.prev=44,e.next=47,_.updateMaster("tbl_user_web",o,d);case 47:(u=e.sent)&&(console.log(u),(p=Object(M.a)(r.state.Data))[i].username=a,p[i].name=a,p[i].email_id=s,p[i].password=l,p[i].mobile=n,r.setState({username:"",password:"",confirmpassword:"",mobile:"",email_id:"",alertVisible:!0,color:"success",textALert:"Successfully updated Customer",Data:p}),setTimeout((function(){return r.setState({alertVisible:!1,textALert:""})}),3e3)),e.next=54;break;case 51:e.prev=51,e.t0=e.catch(44),console.log(e.t0);case 54:case"end":return e.stop()}}),e,null,[[44,51]])}))),r.onDismiss=function(){r.setState({alertVisible:!1}),r.setState({formAlertdelete:!1})},r.handleChangeFile=function(){var e=Object(E.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(t.target.files[0]),r.setState({file:t.target.files[0],filename:t.target.files[0].name});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r.state={Userdetails:JSON.parse(localStorage.getItem("Userdetails")),alertVisible:!1,formAlertdelete:!1,textALert:"",color:"",ButtonTitle:"Add Customers",ButtonName:"Submit",column:[{Header:"Name",accessor:"name"},{Header:"Mobile",accessor:"mobile"},{Header:"Email Id",accessor:"email_id"},{Header:"login_status",accessor:"login_status",Cell:function(e){return r.login_status(e)}},{Header:"Status",accessor:"status",Cell:function(e){return r.Status(e)}},{Header:"Edit",accessor:"edit",Cell:function(e){return r.edit(e)}},{Header:"Delete",accessor:"delete",Cell:function(e){return r.delete(e)}}],Data:[],ButtonName1:!0,username:"",mobile:"",email_id:"",country:"",state:"",password:"",confirmpassword:"",EditId:null,Index:null,erroremail:"",errorusername:"",errormobile:"",errorpassword:"",errorconfirmpass:"",file:"",filename:""},r}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=Object(E.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_.getFreedom("*","tbl_user_web","userType = 4",1,"id DESC");case 3:(t=e.sent).data.length?this.setState({Data:t.data}):this.setState({Data:[]}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.ButtonTitle,a=e.ButtonName,r=e.ButtonName1;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{class:"main-content"},n.a.createElement(V,{ButtonTitle:t,ButtonName:a,id:"adduser",indexStyle:{color:"black",fontWeight:"500"},ButtonBody:n.a.createElement("div",null,n.a.createElement("div",{className:"row form-group"},n.a.createElement("div",{className:"col-sm-2"}),n.a.createElement("div",{className:"col-sm-8"},n.a.createElement(O.a,Object(C.a)({className:"badge-content",color:"success",isOpen:this.state.alertVisible,toggle:this.onDismiss},"color",this.state.color),this.state.textALert)),n.a.createElement("div",{className:"col-sm-2"})),n.a.createElement("div",{class:"form-group"},n.a.createElement("label",{class:"labell"},"Username"),n.a.createElement("div",{class:"input-group"},n.a.createElement("div",{class:"input-group-prepend"}),n.a.createElement("input",{type:"text",class:"form-control",placeholder:"Enter the name",onChange:this.handleChange,value:this.state.username,name:"username"})),n.a.createElement("span",{id:"spanid"},this.state.errorusername)),n.a.createElement("div",{class:"form-group"},n.a.createElement("label",{class:"labell"},"Mobile"),n.a.createElement("div",{class:"input-group"},n.a.createElement("div",{class:"input-group-prepend"}),n.a.createElement("input",{type:"text",maxLength:10,class:"form-control",value:this.state.mobile,placeholder:"Enter the Mobile",onChange:this.handleChange,name:"mobile"})),n.a.createElement("span",{id:"spanid"},this.state.errormobile)),n.a.createElement("div",{class:"form-group"},n.a.createElement("label",{class:"labell"},"Email Id"),n.a.createElement("div",{class:"input-group"},n.a.createElement("div",{class:"input-group-prepend"}),n.a.createElement("input",{type:"text",class:"form-control",placeholder:"Enter the Email Id",value:this.state.email_id,onChange:this.handleChange,name:"email_id"})),n.a.createElement("span",{id:"spanid"},this.state.erroremail)),n.a.createElement("div",{class:"form-group"},n.a.createElement("label",{class:"labell"},"File"),n.a.createElement("div",{class:"input-group"},n.a.createElement("div",{class:"input-group-prepend"}),n.a.createElement("input",{type:"file",className:"custom-file-input",onChange:this.handleChangeFile,accept:"image/*"}),n.a.createElement("label",{className:"custom-file-label",htmlFor:"customFileThumbnail"},this.state.filename?this.state.filename.substring(0,15):null)),n.a.createElement("span",{id:"spanid"},this.state.errormobile)),n.a.createElement("div",{class:"form-group"},n.a.createElement("label",{class:"labell"},"Password"),n.a.createElement("div",{class:"input-group"},n.a.createElement("div",{class:"input-group-prepend"}),n.a.createElement("input",{type:"password",class:"form-control",placeholder:"Enter the Password",value:this.state.password,onChange:this.handleChange,name:"password"})),n.a.createElement("span",{sid:"spanid"},this.state.errorpassword)),n.a.createElement("div",{class:"form-group"},n.a.createElement("label",{class:"labell"},"Confirm Password"),n.a.createElement("div",{class:"input-group"},n.a.createElement("div",{class:"input-group-prepend"}),n.a.createElement("input",{type:"password",class:"form-control",placeholder:"Enter the Confirm Password",value:this.state.confirmpassword,onChange:this.handleChange,name:"confirmpassword"})),n.a.createElement("span",{id:"spanid"},this.state.errorconfirmpass)),n.a.createElement("div",{class:"row form-group"},n.a.createElement("div",{className:"col-sm-2"}),n.a.createElement("div",{className:"col-sm-8"},n.a.createElement("button",{type:"button",style:{width:"100%"},onClick:!0===r?this.submit:this.Update,class:"btn btn-primary m-t-15 waves-effect"},!0===r?"Add Customer":"Update Customer")),n.a.createElement("div",{className:"col-sm-2"})))}),n.a.createElement("section",{class:"section"},n.a.createElement("div",{class:"section-body"},n.a.createElement("div",{class:"row"},n.a.createElement("div",{class:"col-12"},n.a.createElement("div",{class:"card"},n.a.createElement("div",{class:"card-header"},n.a.createElement("h3",null,"Customers")),n.a.createElement("div",{class:"card-header"},n.a.createElement("button",{type:"button",class:"btn btn-primary","data-toggle":"modal",onClick:this.AddCustomers,"data-target":"#adduser"},"Add Customers")),n.a.createElement("div",{class:"card-body"},n.a.createElement("div",{className:"row form-group"},n.a.createElement("div",{className:"col-sm-12"},this.state.Data.length?n.a.createElement(P,{data:this.state.Data,columnHeading:this.state.column}):null))))))))))}}]),a}(n.a.Component);function U(){return n.a.createElement(c.a,null,n.a.createElement(o.a,{exact:!0,path:"/",render:function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement(D,e))}}),n.a.createElement(o.a,{exact:!0,path:"/dashboard",render:function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{id:"app"},n.a.createElement("div",{class:"main-wrapper main-wrapper-1"},n.a.createElement(v,e),n.a.createElement(y,e),n.a.createElement("div",{className:"app-body"}),n.a.createElement(S,e))))}}),n.a.createElement(o.a,{exact:!0,path:"/user",render:function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{id:"app"},n.a.createElement("div",{class:"main-wrapper main-wrapper-1"},n.a.createElement(v,e),n.a.createElement(y,e),n.a.createElement("div",{className:"app-body"},n.a.createElement(F,e)),n.a.createElement(S,e))))}}))}a(91);function z(){return n.a.createElement("div",null,n.a.createElement(U,null))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[53,1,2]]]);
//# sourceMappingURL=main.4bb16f3f.chunk.js.map