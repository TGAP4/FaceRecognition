(this.webpackJsonpfacerecognitionbrain=this.webpackJsonpfacerecognitionbrain||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(20)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){e.exports=a.p+"static/media/Roboto-Regular.11eabca2.ttf"},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(7),r=a.n(s),o=(a(14),a(1)),l=a(2),c=a(4),m=a(3),u=a(5),p=(a(15),a(8)),d=a.n(p),h=function(e){var t=e.onRouteChange;return e.isSignedIn?i.a.createElement("nav",{className:"flex justify-end"},i.a.createElement("p",{onClick:function(){return t("signout")},className:"f4 link dim black pointer pv2 pr2 mr4"},"Sign Out")):i.a.createElement("nav",{className:"flex justify-end"},i.a.createElement("p",{onClick:function(){return t("signin")},className:"f4 link dim black pointer pv2 pr2 mr3"},"Sign In"),i.a.createElement("p",{onClick:function(){return t("register")},className:"f4 link dim black pointer pv2 pr2 mr4"},"Register"))},g=(a(16),function(e){var t=e.onInputChange,a=e.onSubmit;return i.a.createElement("div",null,i.a.createElement("p",{className:"f5"},"Enter an image URL with faces to detect"),i.a.createElement("div",{className:"flex justify-center"},i.a.createElement("div",{className:"form w-40 mb2 pa3 br3 shadow-5"},i.a.createElement("input",{className:"f5 pa2 w-80 center",type:"text",onChange:t}),i.a.createElement("button",{className:"f5 w-20 link ph3 pv2 dib white bg-light-purple",onClick:a},"Detect"))))}),b=function(e){var t=e.name,a=e.entries;return i.a.createElement("div",null,i.a.createElement("div",{className:"black f3 mb3 mt3"},"".concat(t,", your total number of images submitted is...")),i.a.createElement("div",{className:"white f1"},a))},f=(a(17),function(e){var t=e.box,a=e.imageUrl;return i.a.createElement("div",{className:"flex justify-center ma"},i.a.createElement("div",{className:"absolute mt2"},i.a.createElement("img",{id:"inputimage",alt:"",src:a,width:"500px",height:"auto"}),i.a.createElement("div",{className:"boundingBox",style:{top:t.top,right:t.right,left:t.left,bottom:t.bottom}})))}),w=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).onEmailChange=function(e){a.setState({signinEmail:e.target.value})},a.onPasswordChange=function(e){a.setState({signinPassword:e.target.value})},a.onSubmitSignin=function(){fetch("https://guarded-woodland-98659.herokuapp.com/signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a.state.signinEmail,password:a.state.signinPassword})}).then((function(e){return e.json()})).then((function(e){e.id&&(a.props.loadUser(e),a.props.onRouteChange("home"))}))},a.state={signinEmail:"",signinPassword:""},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.onRouteChange;return i.a.createElement("article",{className:"br3 bg-white ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center"},i.a.createElement("main",{className:"pa4 black-80"},i.a.createElement("div",{className:"measure"},i.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},i.a.createElement("legend",{className:"f2 fw3 ph0 mh0 mb1"},"Sign In"),i.a.createElement("div",{className:"mt3"},i.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),i.a.createElement("input",{onChange:this.onEmailChange,className:"pa2 input-reset ba bg-transparent w-100",type:"email",name:"email-address",id:"email-address"})),i.a.createElement("div",{className:"mv3"},i.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),i.a.createElement("input",{onChange:this.onPasswordChange,className:"b pa2 input-reset ba bg-transparent w-100",type:"password",name:"password",id:"password"}))),i.a.createElement("div",{className:""},i.a.createElement("input",{onClick:this.onSubmitSignin,className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Sign in"})),i.a.createElement("div",{className:"lh-copy mt3"},i.a.createElement("p",{onClick:function(){return e("register")},className:"f6 link dim black db pointer"},"Register")))))}}]),t}(i.a.Component),E=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).onNameChange=function(e){a.setState({name:e.target.value})},a.onEmailChange=function(e){a.setState({email:e.target.value})},a.onPasswordChange=function(e){a.setState({password:e.target.value})},a.onSubmitSignin=function(){fetch("https://guarded-woodland-98659.herokuapp.com/register",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a.state.email,password:a.state.password,name:a.state.name})}).then((function(e){return e.json()})).then((function(e){e.id&&(a.props.loadUser(e),a.props.onRouteChange("home"))}))},a.state={email:"",password:"",name:""},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("article",{className:"br3 bg-white ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center"},i.a.createElement("main",{className:"pa4 black-80"},i.a.createElement("div",{className:"measure"},i.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},i.a.createElement("legend",{className:"f2 fw3 ph0 mh0 mb1"},"Register"),i.a.createElement("div",{className:"mt3"},i.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"name"},"Name"),i.a.createElement("input",{onChange:this.onNameChange,className:"pa2 input-reset ba bg-transparent w-100",type:"text",name:"name",id:"name"})),i.a.createElement("div",{className:"mt3"},i.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),i.a.createElement("input",{onChange:this.onEmailChange,className:"pa2 input-reset ba bg-transparent w-100",type:"email",name:"email-address",id:"email-address"})),i.a.createElement("div",{className:"mv3"},i.a.createElement("label",{className:"db fw6 lh-copy f6",for:"password"},"Password"),i.a.createElement("input",{onChange:this.onPasswordChange,className:"b pa2 input-reset ba bg-transparent w-100",type:"password",name:"password",id:"password"}))),i.a.createElement("div",{className:""},i.a.createElement("input",{onClick:this.onSubmitSignin,className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Register"})))))}}]),t}(i.a.Component),v={particles:{number:{value:80,density:{enable:!0,value_area:400}}}},N={input:"",imageUrl:"",box:{},route:"signin",isSignedIn:!1,user:{id:"",name:"",email:"",entries:0,joined:""}},C=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(c.a)(this,Object(m.a)(t).call(this))).loadUser=function(t){e.setState({user:{id:t.id,name:t.name,email:t.email,entries:t.entries,joined:t.joined}})},e.calculateFaceLocation=function(e){var t=e.outputs[0].data.regions[0].region_info.bounding_box,a=document.getElementById("inputimage"),n=Number(a.width),i=Number(a.height);return{left:t.left_col*n,top:t.top_row*i,right:n-t.right_col*n,bottom:i-t.bottom_row*i}},e.displayFaceBox=function(t){e.setState({box:t})},e.onInputChange=function(t){e.setState({input:t.target.value})},e.onSubmit=function(){""!==e.state.input&&(e.setState({imageUrl:e.state.input}),fetch("https://guarded-woodland-98659.herokuapp.com/imageurl",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({input:e.state.input})}).then((function(e){return e.json()})).then((function(t){t&&fetch("https://guarded-woodland-98659.herokuapp.com/image",{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e.state.user.id})}).then((function(e){return e.json()})).then((function(t){e.setState(Object.assign(e.state.user,{entries:t}))})).catch(console.log),e.displayFaceBox(e.calculateFaceLocation(t))})).catch((function(e){return console.log(e)})))},e.onRouteChange=function(t){"signout"===t?e.setState(N):"home"===t&&e.setState({isSignedIn:!0}),e.setState({route:t})},e.state={input:"",imageUrl:"",box:{},route:"signin",isSignedIn:!1,user:{id:"",name:"",email:"",entries:0,joined:""}},e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state,t=e.isSignedIn,a=e.imageUrl,n=e.route,s=e.box;return i.a.createElement("div",{className:"App"},i.a.createElement(d.a,{className:"particles",style:{color:"black"},params:v}),i.a.createElement(h,{isSignedIn:t,onRouteChange:this.onRouteChange}),"home"===n?i.a.createElement("div",null,i.a.createElement(b,{name:this.state.user.name,entries:this.state.user.entries}),i.a.createElement(g,{onInputChange:this.onInputChange,onSubmit:this.onSubmit}),i.a.createElement(f,{box:s,imageUrl:a})):"signin"===n?i.a.createElement(w,{loadUser:this.loadUser,onRouteChange:this.onRouteChange}):i.a.createElement(E,{loadUser:this.loadUser,onRouteChange:this.onRouteChange}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(18),a(19);r.a.render(i.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.49a5a1b1.chunk.js.map