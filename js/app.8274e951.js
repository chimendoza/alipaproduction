(function(t){function e(e){for(var n,r,o=e[0],l=e[1],c=e[2],u=0,p=[];u<o.length;u++)r=o[u],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&p.push(s[r][0]),s[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);d&&d(e);while(p.length)p.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,r=1;r<a.length;r++){var l=a[r];0!==s[l]&&(n=!1)}n&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},s={app:0},i=[];function r(t){return o.p+"js/"+({}[t]||t)+"."+{"chunk-2d219ff9":"1189c811","chunk-d3b0360c":"90adf422","chunk-2d0a3534":"c61b9e5c","chunk-2d0c0df4":"a716dec5","chunk-2d230530":"552a0144","chunk-bbe001dc":"64265ceb","chunk-bc0c0eda":"45a68069","chunk-e8172d1a":"c73d1270","chunk-e8195604":"adc8af6f"}[t]+".js"}function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(t){var e=[],a=s[t];if(0!==a)if(a)e.push(a[2]);else{var n=new Promise((function(e,n){a=s[t]=[e,n]}));e.push(a[2]=n);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.src=r(t);var c=new Error;i=function(e){l.onerror=l.onload=null,clearTimeout(u);var a=s[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+n+": "+i+")",c.name="ChunkLoadError",c.type=n,c.request=i,a[1](c)}s[t]=void 0}};var u=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(e)},o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/",o.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var d=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0e00":function(t,e,a){},1556:function(t,e,a){},"1df9":function(t,e,a){"use strict";a("d0e3")},4336:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-xl-4 col-lg-5 col-md-6"},[e("user-card"),e("members-card")],1),e("div",{staticClass:"col-xl-8 col-lg-7 col-md-6"},[e("edit-profile-form")],1)])},s=[],i=function(){var t=this,e=t._self._c;return e("card",{staticClass:"card",attrs:{title:"Edit Profile"}},[e("div",[e("form",{on:{submit:function(t){t.preventDefault()}}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-5"},[e("fg-input",{attrs:{type:"text",label:"Company",disabled:!0,placeholder:"Paper dashboard"},model:{value:t.user.company,callback:function(e){t.$set(t.user,"company",e)},expression:"user.company"}})],1),e("div",{staticClass:"col-md-3"},[e("fg-input",{attrs:{type:"text",label:"Username",placeholder:"Username"},model:{value:t.user.username,callback:function(e){t.$set(t.user,"username",e)},expression:"user.username"}})],1),e("div",{staticClass:"col-md-4"},[e("fg-input",{attrs:{type:"email",label:"Username",placeholder:"Email"},model:{value:t.user.email,callback:function(e){t.$set(t.user,"email",e)},expression:"user.email"}})],1)]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6"},[e("fg-input",{attrs:{type:"text",label:"First Name",placeholder:"First Name"},model:{value:t.user.firstName,callback:function(e){t.$set(t.user,"firstName",e)},expression:"user.firstName"}})],1),e("div",{staticClass:"col-md-6"},[e("fg-input",{attrs:{type:"text",label:"Last Name",placeholder:"Last Name"},model:{value:t.user.lastName,callback:function(e){t.$set(t.user,"lastName",e)},expression:"user.lastName"}})],1)]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("fg-input",{attrs:{type:"text",label:"Address",placeholder:"Home Address"},model:{value:t.user.address,callback:function(e){t.$set(t.user,"address",e)},expression:"user.address"}})],1)]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-4"},[e("fg-input",{attrs:{type:"text",label:"City",placeholder:"City"},model:{value:t.user.city,callback:function(e){t.$set(t.user,"city",e)},expression:"user.city"}})],1),e("div",{staticClass:"col-md-4"},[e("fg-input",{attrs:{type:"text",label:"Country",placeholder:"Country"},model:{value:t.user.country,callback:function(e){t.$set(t.user,"country",e)},expression:"user.country"}})],1),e("div",{staticClass:"col-md-4"},[e("fg-input",{attrs:{type:"number",label:"Postal Code",placeholder:"ZIP Code"},model:{value:t.user.postalCode,callback:function(e){t.$set(t.user,"postalCode",e)},expression:"user.postalCode"}})],1)]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"form-group"},[e("label",[t._v("About Me")]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.user.aboutMe,expression:"user.aboutMe"}],staticClass:"form-control border-input",attrs:{rows:"5",placeholder:"Here can be your description"},domProps:{value:t.user.aboutMe},on:{input:function(e){e.target.composing||t.$set(t.user,"aboutMe",e.target.value)}}})])])]),e("div",{staticClass:"text-center"},[e("p-button",{attrs:{type:"info",round:""},nativeOn:{click:function(e){return e.preventDefault(),t.updateProfile.apply(null,arguments)}}},[t._v("\n          Update Profile\n        ")])],1),e("div",{staticClass:"clearfix"})])])])},r=[],o={data:function(){return{user:{company:"Paper Dashboard",username:"michael23",email:"",firstName:"Chet",lastName:"Faker",address:"Melbourne, Australia",city:"Melbourne",postalCode:"",aboutMe:"We must accept finite disappointment, but hold on to infinite hope."}}},methods:{updateProfile:function(){alert("Your data: "+JSON.stringify(this.user))}}},l=o,c=a("2877"),u=Object(c["a"])(l,i,r,!1,null,null,null),d=u.exports,p=function(){var t=this,e=t._self._c;return e("card",{staticClass:"card-user"},[e("div",{attrs:{slot:"image"},slot:"image"},[e("img",{attrs:{src:a("6a07"),alt:"..."}})]),e("div",[e("div",{staticClass:"author"},[e("img",{staticClass:"avatar border-white",attrs:{src:a("d9fe"),alt:"..."}}),e("h4",{staticClass:"title"},[t._v("\n        Chet Faker\n        "),e("br"),e("a",{attrs:{href:"#"}},[e("small",[t._v("@chetfaker")])])])]),e("p",{staticClass:"description text-center"},[t._v('\n      "I like the way you work it\n      '),e("br"),t._v("\n      No diggity "),e("br"),t._v('\n      I wanna bag it up"\n    ')])]),e("hr"),e("div",{staticClass:"text-center"},[e("div",{staticClass:"row"},t._l(t.details,(function(a,n){return e("div",{key:n,class:t.getClasses(n)},[e("h5",[t._v("\n          "+t._s(a.title)+"\n          "),e("br"),e("small",[t._v(t._s(a.subTitle))])])])})),0)])])},f=[],v={data:function(){return{details:[{title:"12",subTitle:"Files"},{title:"2GB",subTitle:"Used"},{title:"24,6$",subTitle:"Spent"}]}},methods:{getClasses:function(t){var e=t%3;return 0===e?"col-lg-3 offset-lg-1":2===e?"col-lg-4":"col-lg-3"}}},m=v,h=Object(c["a"])(m,p,f,!1,null,null,null),b=h.exports,g=(a("7f7f"),function(){var t=this,e=t._self._c;return e("card",{staticClass:"card",attrs:{title:t.title}},[e("div",[e("ul",{staticClass:"list-unstyled team-members"},[e("li",t._l(t.members,(function(a){return e("div",{key:a.name,staticClass:"row"},[e("div",{staticClass:"col-3"},[e("div",{staticClass:"avatar"},[e("img",{staticClass:"rounded img-fluid",attrs:{src:a.image,alt:"Circle Image"}})])]),e("div",{staticClass:"col-6"},[t._v("\n            "+t._s(a.name)+"\n            "),e("br"),e("span",{class:t.getStatusClass(a.status)},[e("small",[t._v(t._s(a.status))])])]),e("div",{staticClass:"col-3"},[e("p-button",{attrs:{type:"success",outline:"",icon:""}},[e("i",{staticClass:"fa fa-envelope"})])],1)])})),0)])])])}),C=[],_={data:function(){return{title:"Team members",members:[{image:a("8e1c"),name:"Dj Khaled",status:"Offline"},{image:a("8e52"),name:"Creative Tim",status:"Available"},{image:a("8e52"),name:"Flume",status:"Busy"}]}},methods:{getStatusClass:function(t){switch(t){case"Offline":return"text-muted";case"Available":return"text-success";case"Busy":return"text-danger";default:return"text-success"}}}},y=_,k=Object(c["a"])(y,g,C,!1,null,null,null),x=k.exports,w={components:{EditProfileForm:d,UserCard:b,MembersCard:x}},O=w,S=Object(c["a"])(O,n,s,!1,null,null,null);e["default"]=S.exports},"56d7":function(t,e,a){"use strict";a.r(e);var n=a("7618"),s=(a("cadf"),a("551c"),a("f751"),a("097d"),a("2b0e")),i=function(){var t=this,e=t._self._c;return e("div",{class:{"nav-open":t.$sidebar.showSidebar}},[e("notifications"),e("router-view")],1)},r=[],o={},l=o,c=(a("a047"),a("2877")),u=Object(c["a"])(l,i,r,!1,null,null,null),d=u.exports,p=a("a18c"),f=a("7346"),v=a.n(f),m=(a("7f7f"),function(){var t=this,e=t._self._c;return e("div",{staticClass:"sidebar",attrs:{"data-background-color":t.backgroundColor,"data-active-color":t.activeColor}},[e("div",{staticClass:"sidebar-wrapper",attrs:{id:"style-3"}},[e("div",{staticClass:"logo"},[e("a",{staticClass:"simple-text",attrs:{href:"#"}},[t._m(0),t._v("\n        "+t._s(t.title)+"\n      ")])]),t._t("default"),e("ul",{staticClass:"nav"},[t._t("links",(function(){return t._l(t.sidebarLinks,(function(t,a){return e("sidebar-link",{key:a,attrs:{to:t.path,name:t.name,icon:t.icon}})}))}))],2),e("moving-arrow",{attrs:{"move-y":t.arrowMovePx}})],2)])}),h=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"logo-img"},[e("img",{attrs:{src:a("fdbc"),alt:""}})])}],b=(a("ac6a"),function(){var t=this,e=t._self._c;return e("div",{staticClass:"moving-arrow",style:t.arrowStyle})}),g=[],C=(a("c5f6"),{props:{moveY:{type:Number,default:0}},computed:{arrowStyle:function(){return{transform:"translate3d(0px, ".concat(this.moveY,"px, 0px)")}}}}),_=C,y=(a("dd51"),Object(c["a"])(_,b,g,!1,null,null,null)),k=y.exports,x=function(){var t=this,e=t._self._c;return e(t.tag,t._b({tag:"component",staticClass:"nav-item",attrs:{tag:"li"},nativeOn:{click:function(e){return t.hideSidebar.apply(null,arguments)}}},"component",t.$attrs,!1),[e("a",{staticClass:"nav-link"},[t._t("default",(function(){return[t.icon?e("i",{class:t.icon}):t._e(),e("p",[t._v(t._s(t.name))])]}))],2)])},w=[],O={name:"sidebar-link",inheritAttrs:!1,inject:{autoClose:{default:!0},addLink:{default:function(){}},removeLink:{default:function(){}}},props:{name:String,icon:String,tag:{type:String,default:"router-link"}},methods:{hideSidebar:function(){this.autoClose&&this.$sidebar.displaySidebar(!1)},isActive:function(){return this.$el.classList.contains("active")}},mounted:function(){this.addLink&&this.addLink(this)},beforeDestroy:function(){this.$el&&this.$el.parentNode&&this.$el.parentNode.removeChild(this.$el),this.removeLink&&this.removeLink(this)}},S=O,j=Object(c["a"])(S,x,w,!1,null,null,null),$=j.exports,L={props:{title:{type:String,default:"ALIPA"},backgroundColor:{type:String,default:"darkblue",validator:function(t){var e=["white","black","darkblue"];return-1!==e.indexOf(t)}},activeColor:{type:String,default:"success",validator:function(t){var e=["primary","info","success","warning","danger"];return-1!==e.indexOf(t)}},sidebarLinks:{type:Array,default:function(){return[]}},autoClose:{type:Boolean,default:!0}},provide:function(){return{autoClose:this.autoClose,addLink:this.addLink,removeLink:this.removeLink}},components:{MovingArrow:k,SidebarLink:$},computed:{arrowMovePx:function(){return this.linkHeight*this.activeLinkIndex}},data:function(){return{linkHeight:65,activeLinkIndex:0,windowWidth:0,isWindows:!1,hasAutoHeight:!1,links:[]}},methods:{findActiveLink:function(){var t=this;this.links.forEach((function(e,a){e.isActive()&&(t.activeLinkIndex=a)}))},addLink:function(t){var e=this.$slots.links.indexOf(t.$vnode);this.links.splice(e,0,t)},removeLink:function(t){var e=this.links.indexOf(t);e>-1&&this.links.splice(e,1)}},mounted:function(){this.$watch("$route",this.findActiveLink,{immediate:!0})}},P=L,N=Object(c["a"])(P,m,h,!1,null,null,null),I=N.exports,T={showSidebar:!1,sidebarLinks:[],displaySidebar:function(t){this.showSidebar=t}},A={install:function(t){var e=new t({data:{sidebarStore:T}});t.prototype.$sidebar=e.sidebarStore,t.component("side-bar",I),t.component("sidebar-link",$)}},D=A,M=function(){var t=this,e=t._self._c;return e("div",{staticClass:"form-group",class:{"input-group":t.hasIcon}},[t._t("label",(function(){return[t.label?e("label",{staticClass:"control-label"},[t._v("\n      "+t._s(t.label)+"\n    ")]):t._e()]})),t._t("addonLeft",(function(){return[t.addonLeftIcon?e("span",{staticClass:"input-group-prepend"},[e("i",{staticClass:"input-group-text",class:t.addonLeftIcon})]):t._e()]})),e("input",t._b({staticClass:"form-control",attrs:{"aria-describedby":"addon-right addon-left"},domProps:{value:t.value},on:{input:function(e){return t.$emit("input",e.target.value)}}},"input",t.$attrs,!1)),t._t("default"),t._t("addonRight",(function(){return[t.addonRightIcon?e("span",{staticClass:"input-group-append"},[e("i",{staticClass:"input-group-text",class:t.addonRightIcon})]):t._e()]}))],2)},F=[],B={inheritAttrs:!1,name:"fg-input",props:{label:String,value:[String,Number],addonRightIcon:String,addonLeftIcon:String},computed:{hasIcon:function(){var t=this.$slots,e=t.addonRight,a=t.addonLeft;return void 0!==e||void 0!==a||void 0!==this.addonRightIcon||void 0!==this.addonLeftIcon}}},E=B,R=Object(c["a"])(E,M,F,!1,null,null,null),U=R.exports,H=function(){var t=this,e=t._self._c;return e(t.tag,{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.closeDropDown,expression:"closeDropDown"}],tag:"component",staticClass:"dropdown",class:{show:t.isOpen},on:{click:t.toggleDropDown}},[e("a",{staticClass:"dropdown-toggle btn-rotate",class:t.titleClasses,attrs:{"data-toggle":"dropdown"}},[t._t("title",(function(){return[e("i",{class:t.icon}),e("span",{staticClass:"notification"},[t._v(t._s(t.title)+"\n        "),e("b",{staticClass:"caret"})])]}))],2),e("ul",{staticClass:"dropdown-menu",class:{show:t.isOpen}},[t._t("default")],2)])},z=[],J={props:{tag:{type:String,default:"li"},title:String,icon:String,titleClasses:[String,Object,Array]},data:function(){return{isOpen:!1}},methods:{toggleDropDown:function(){this.isOpen=!this.isOpen,this.$emit("change",this.isOpen)},closeDropDown:function(){this.isOpen=!1,this.$emit("change",!1)}}},V=J,W=Object(c["a"])(V,H,z,!1,null,null,null),Y=W.exports,q=function(){var t=this,e=t._self._c;return e("table",{staticClass:"table",class:t.tableClass},[e("thead",[t._t("columns",(function(){return t._l(t.columns,(function(a){return e("th",{key:a},[t._v(t._s(a))])}))}))],2),e("tbody",t._l(t.data,(function(a,n){return e("tr",{key:n},[t._t("default",(function(){return t._l(t.columns,(function(n,s){return t.hasValue(a,n)?e("td",{key:s},[t._v("\n          "+t._s(t.itemValue(a,n))+"\n        ")]):t._e()}))}),{row:a})],2)})),0)])},G=[],K={name:"paper-table",props:{columns:Array,data:Array,type:{type:String,default:"striped"},title:{type:String,default:""},subTitle:{type:String,default:""}},computed:{tableClass:function(){return"table-".concat(this.type)}},methods:{hasValue:function(t,e){return"undefined"!==t[e.toLowerCase()]},itemValue:function(t,e){return t[e.toLowerCase()]}}},Z=K,Q=Object(c["a"])(Z,q,G,!1,null,null,null),X=(Q.exports,a("bd86")),tt=function(){var t=this,e=t._self._c;return e(t.tag,{tag:"component",staticClass:"btn",class:[{"btn-round":t.round},{"btn-block":t.block},{"btn-just-icon":t.icon},Object(X["a"])({},"btn-".concat(t.type),t.type&&!t.outline),Object(X["a"])({},"btn-outline-".concat(t.type),t.type&&t.outline),Object(X["a"])({},"btn-".concat(t.size),t.size),{"btn-link":t.simple}],attrs:{type:t.nativeType,disabled:t.disabled||t.loading}},[t._t("loading",(function(){return[t.loading?e("i",{staticClass:"fa fa-spinner fa-spin"}):t._e()]})),t._t("default")],2)},et=[],at={name:"p-button",props:{tag:{type:String,default:"button"},round:Boolean,icon:Boolean,outline:Boolean,block:Boolean,loading:Boolean,disabled:Boolean,type:{type:String,default:"default"},nativeType:{type:String,default:"button"},size:{type:String,default:""},simple:Boolean}},nt=at,st=Object(c["a"])(nt,tt,et,!1,null,null,null),it=st.exports,rt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"card"},[t.$slots.image?e("div",{staticClass:"card-image"},[t._t("image")],2):t._e(),t.$slots.header||t.title?e("div",{staticClass:"card-header"},[t._t("header",(function(){return[e("h4",{staticClass:"card-title"},[t._v(t._s(t.title))]),t.subTitle?e("p",{staticClass:"card-category"},[t._v(t._s(t.subTitle))]):t._e()]}))],2):t._e(),t.$slots.default?e("div",{staticClass:"card-body"},[t._t("default")],2):t._e(),t._t("raw-content"),t.$slots.footer?e("div",{staticClass:"card-footer"},[e("hr"),t._t("footer")],2):t._e()],2)},ot=[],lt={name:"card",props:{title:String,subTitle:String}},ct=lt,ut=Object(c["a"])(ct,rt,ot,!1,null,null,null),dt=ut.exports,pt=function(){var t=this,e=t._self._c;return e("card",[e("template",{slot:"header"},[t.$slots.title||t.title?e("h4",{staticClass:"card-title"},[t._t("title",(function(){return[t._v("\n        "+t._s(t.title)+"\n      ")]}))],2):t._e(),e("p",{staticClass:"card-category"},[t._t("subTitle",(function(){return[t._v("\n        "+t._s(t.subTitle)+"\n      ")]}))],2)]),e("div",[e("div",{staticClass:"ct-chart",attrs:{id:t.chartId}}),e("div",{staticClass:"footer"},[e("div",{staticClass:"chart-legend"},[t._t("legend")],2),e("hr"),e("div",{staticClass:"stats"},[t._t("footer")],2),e("div",{staticClass:"pull-right"})])])],2)},ft=[],vt=(a("6b54"),{name:"chart-card",components:{Card:dt},props:{footerText:{type:String,default:""},title:{type:String,default:""},subTitle:{type:String,default:""},chartType:{type:String,default:"Line"},chartOptions:{type:Object,default:function(){return{}}},chartData:{type:Object,default:function(){return{labels:[],series:[]}}}},data:function(){return{chartId:"no-id"}},methods:{initChart:function(t){var e="#".concat(this.chartId);t[this.chartType](e,this.chartData,this.chartOptions)},updateChartId:function(){var t=(new Date).getTime().toString(),e=this.getRandomInt(0,t);this.chartId="div_".concat(e)},getRandomInt:function(t,e){return Math.floor(Math.random()*(e-t+1))+t}},mounted:function(){var t=this;this.updateChartId(),a.e("chunk-2d219ff9").then(a.t.bind(null,"ba48",7)).then((function(e){var a=e.default||e;t.$nextTick((function(){t.initChart(a)}))}))}}),mt=vt,ht=Object(c["a"])(mt,pt,ft,!1,null,null,null),bt=(ht.exports,function(){var t=this,e=t._self._c;return e("card",[e("div",[e("div",{staticClass:"row"},[t.$slots.header?e("div",{staticClass:"col-5"},[t._t("header")],2):t._e(),t.$slots.content?e("div",{staticClass:"col-7"},[t._t("content")],2):t._e()]),t.$slots.footer?e("div",[e("hr"),t._t("footer")],2):t._e()])])}),gt=[],Ct={name:"stats-card",components:{Card:dt}},_t=Ct,yt=Object(c["a"])(_t,bt,gt,!1,null,null,null),kt=(yt.exports,{install:function(t){t.component("fg-input",U),t.component("drop-down",Y),t.component("card",dt),t.component("p-button",it)}}),xt=kt,wt=a("c7db"),Ot={install:function(t){t.directive("click-outside",wt["directive"])}},St=Ot,jt=(a("54ba"),a("f9e3"),a("0e00"),a("e454"),{install:function(t){t.use(xt),t.use(St),t.use(D),t.use(v.a)}}),$t=(a("72e0"),a("5f5b")),Lt="https://alipa.zeinsoftware.com/api/",Pt=Lt;s["default"].prototype.$apiUrl=Pt,s["default"].use($t["a"]);var Nt={computed:{createFormData:function(){return function(t,e){e=e||[];var a=new FormData;for(var s in t)if(-1===e.indexOf(s)){var i=t[s];void 0!=i&&("object"!=Object(n["a"])(i)||i instanceof File||(i=JSON.stringify(i)),a.append(s,i))}return a}},fillModel:function(){return function(t,e){for(var a in e)t.hasOwnProperty(a)&&e[a]&&(t[a]=e[a])}}}};s["default"].mixin(Nt),s["default"].use(jt),new s["default"]({router:p["a"],render:function(t){return t(d)}}).$mount("#app")},"6a07":function(t,e,a){t.exports=a.p+"img/background.b37d0f28.jpg"},"8e1c":function(t,e,a){t.exports=a.p+"img/face-0.83f3f36d.jpg"},"8e52":function(t,e,a){t.exports=a.p+"img/face-1.99e58416.jpg"},"9c4c":function(t,e,a){},a047:function(t,e,a){"use strict";a("9c4c")},a18c:function(t,e,a){"use strict";var n=a("2b0e"),s=a("8c4f"),i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"wrapper"},[e("side-bar",[e("template",{slot:"links"},[e("sidebar-link",{attrs:{to:"/dashboard",name:"Inicio",icon:"ti-panel"}}),e("sidebar-link",{attrs:{to:"/columnas",name:"Columnas",icon:"ti-layout"}}),e("sidebar-link",{attrs:{to:"/conceptoimportes",name:"Conceptos de importe",icon:"ti-settings"}}),e("sidebar-link",{attrs:{to:"/account",name:"Acceso",icon:"ti-lock"}})],1),e("mobile-menu",[e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link"},[e("i",{staticClass:"ti-settings"}),e("p",[t._v("Configuración")])])]),e("li",{staticClass:"divider"})])],2),e("div",{staticClass:"main-panel"},[e("top-navbar"),e("dashboard-content",{nativeOn:{click:function(e){return t.toggleSidebar.apply(null,arguments)}}}),e("content-footer")],1)],1)},r=[],o=function(){var t=this,e=t._self._c;return e("nav",{staticClass:"navbar navbar-expand-lg navbar-light"},[e("div",{staticClass:"container-fluid"},[e("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[t._v(t._s(t.routeName))]),e("button",{staticClass:"navbar-toggler navbar-burger",attrs:{type:"button","aria-expanded":t.$sidebar.showSidebar,"aria-label":"Toggle navigation"},on:{click:t.toggleSidebar}},[e("span",{staticClass:"navbar-toggler-bar"}),e("span",{staticClass:"navbar-toggler-bar"}),e("span",{staticClass:"navbar-toggler-bar"})]),t._m(0)])])},l=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"collapse navbar-collapse"},[e("ul",{staticClass:"navbar-nav ml-auto"},[e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"#"}},[e("i",{staticClass:"ti-settings"}),e("p",[t._v("Configuración")])])])])])}],c=(a("7f7f"),{computed:{routeName:function(){var t=this.$route.name;return this.capitalizeFirstLetter(t)}},data:function(){return{activeNotifications:!1}},methods:{capitalizeFirstLetter:function(t){return t.charAt(0).toUpperCase()+t.slice(1)},toggleNotificationDropDown:function(){this.activeNotifications=!this.activeNotifications},closeDropDown:function(){this.activeNotifications=!1},toggleSidebar:function(){this.$sidebar.displaySidebar(!this.$sidebar.showSidebar)},hideSidebar:function(){this.$sidebar.displaySidebar(!1)}}}),u=c,d=a("2877"),p=Object(d["a"])(u,o,l,!1,null,null,null),f=p.exports,v=function(){var t=this,e=t._self._c;return e("div")},m=[],h={},b=h,g=Object(d["a"])(b,v,m,!1,null,null,null),C=g.exports,_=function(){var t=this,e=t._self._c;return e("div",{staticClass:"content"},[e("div",{staticClass:"container-fluid"},[e("transition",{attrs:{name:"fade",mode:"out-in"}},[e("router-view")],1)],1)])},y=[],k={},x=k,w=(a("1df9"),Object(d["a"])(x,_,y,!1,null,null,null)),O=w.exports,S=function(){var t=this,e=t._self._c;return e("ul",{staticClass:"nav navbar-nav nav-mobile-menu"},[t._t("default")],2)},j=[],$={},L=$,P=Object(d["a"])(L,S,j,!1,null,null,null),N=P.exports,I={components:{TopNavbar:f,ContentFooter:C,DashboardContent:O,MobileMenu:N},methods:{toggleSidebar:function(){this.$sidebar.showSidebar&&this.$sidebar.displaySidebar(!1)}}},T=I,A=Object(d["a"])(T,i,r,!1,null,null,null),D=A.exports,M=function(){var t=this,e=t._self._c;return e("div",{staticClass:"contact-us full-screen"},[e("nav",{staticClass:"navbar navbar-ct-default",attrs:{role:"navigation-demo"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"navbar-header"},[t._m(0),e("router-link",{staticClass:"navbar-brand",attrs:{to:{path:"/"}}},[t._v("Site title")])],1),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navigation-example-2"}},[e("ul",{staticClass:"nav navbar-nav navbar-right"},[e("li",[e("router-link",{attrs:{to:{path:"/"}}},[t._v("Home")])],1)])])])]),t._m(1),e("footer",{staticClass:"footer-demo"},[e("div",{staticClass:"container"},[e("nav",{staticClass:"pull-left"},[e("ul",[e("li",[e("router-link",{attrs:{to:{path:"/"}}},[t._v("Home")])],1),e("li",[e("router-link",{attrs:{to:{path:"/register"}}},[t._v("Register")])],1)])]),t._m(2)])])])},F=[function(){var t=this,e=t._self._c;return e("button",{staticClass:"navbar-toggle",attrs:{type:"button","data-toggle":"collapse","data-target":"#navigation-example-2"}},[e("span",{staticClass:"sr-only"},[t._v("Toggle navigation")]),e("span",{staticClass:"icon-bar"}),e("span",{staticClass:"icon-bar"}),e("span",{staticClass:"icon-bar"})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"wrapper wrapper-full-page section content"},[e("div",{},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-8 col-md-offset-2 text-center"},[e("h2",{staticClass:"title text-danger"},[t._v("404 Not Found")]),e("h2",{staticClass:"title"},[t._v("\n              Oops! It seems that this page does not exist.\n            ")])])])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"copyright pull-right"},[t._v("\n        © 2017, made with\n        "),e("i",{staticClass:"fa fa-heart heart"}),t._v(" by Paper admin\n      ")])}],B={},E=B,R=Object(d["a"])(E,M,F,!1,null,null,null),U=R.exports,H=(a("4336"),[{path:"/",redirect:"/dashboard",component:D,children:[{path:"/dashboard",name:"Bienvenido al panel",component:function(){return Promise.all([a.e("chunk-d3b0360c"),a.e("chunk-2d230530")]).then(a.bind(null,"ec95"))}}]},{path:"/columnas",name:"Columnas del sistema",component:D,children:[{path:"",component:function(){return Promise.all([a.e("chunk-d3b0360c"),a.e("chunk-2d0a3534")]).then(a.bind(null,"0262"))},name:"Columnas del sistema"},{path:"crear",name:"Crear columna",component:function(){return Promise.all([a.e("chunk-d3b0360c"),a.e("chunk-e8195604")]).then(a.bind(null,"45cc"))}},{path:"editar/:id",name:"Editar columna",component:function(){return Promise.all([a.e("chunk-d3b0360c"),a.e("chunk-e8172d1a")]).then(a.bind(null,"5a9c"))}}]},{path:"/conceptoimportes",name:"Conceptos de importes del sistema",component:D,children:[{path:"",component:function(){return Promise.all([a.e("chunk-d3b0360c"),a.e("chunk-2d0c0df4")]).then(a.bind(null,"4442"))},name:"Conceptos de importes del sistema"},{path:"crear",name:"Crear concepto",component:function(){return Promise.all([a.e("chunk-d3b0360c"),a.e("chunk-bbe001dc")]).then(a.bind(null,"addf"))}},{path:"editar/:id",name:"Editar concepto",component:function(){return Promise.all([a.e("chunk-d3b0360c"),a.e("chunk-bc0c0eda")]).then(a.bind(null,"27cd"))}}]},{path:"/account",component:D,name:"Acceso",children:[{path:"",name:"Acceso",component:function(){return Promise.resolve().then(a.bind(null,"4336"))}}]},{path:"*",component:U}]),z=H;n["default"].use(s["a"]);var J=new s["a"]({routes:z,linkActiveClass:"active",mode:"history"});e["a"]=J},d0e3:function(t,e,a){},d9fe:function(t,e,a){t.exports=a.p+"img/face-2.119d7ee6.jpg"},dd51:function(t,e,a){"use strict";a("1556")},e454:function(t,e,a){},fdbc:function(t,e,a){t.exports=a.p+"img/vue-logo.c2a605fb.png"}});
//# sourceMappingURL=app.8274e951.js.map