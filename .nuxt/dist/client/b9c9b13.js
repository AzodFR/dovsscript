(window.webpackJsonp=window.webpackJsonp||[]).push([[15,14],{329:function(t,e,n){var content=n(343);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(101).default)("ed39a9f8",content,!0,{sourceMap:!1})},342:function(t,e,n){"use strict";n(329)},343:function(t,e,n){var o=n(100)(!1);o.push([t.i,".login-form{display:flex;justify-content:center;margin-top:2%}.api-selector{margin-right:1%}.spinner-login{margin-left:1%;color:grey}",""]),t.exports=o},350:function(t,e,n){"use strict";n.r(e);var o,r=n(28),l=(n(67),n(38),{name:"Login",computed:{user:function(){return this.$store.state.user}},data:function(){return{wait:!1,options:["https://api.wax.greeneosio.com","https://wax.cryptolions.io","https://wax.greymass.com","https://api.waxsweden.org","https://wax.eosusa.news","https://wax.eosphere.io","https://wax.eu.eosamsterdam.net"],selected:"https://wax.cryptolions.io"}},methods:{login:(o=Object(r.a)(regeneratorRuntime.mark((function t(){var e,n,o=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.wait=!0,localStorage.setItem("rpc",this.selected),t.next=4,this.$store.commit("user/login",this.selected);case 4:e=this.$store.state.user.wax,n=setInterval((function(){null!=e&&null!=e.userAccount&&(clearInterval(n),o.$store.commit("user/setUser"),o.$emit("logged"))}),1e3);case 6:case"end":return t.stop()}}),t,this)}))),function(){return o.apply(this,arguments)})},mounted:function(){if(localStorage.getItem("rpc"))if("random"!=localStorage.getItem("rpc")||localStorage.getItem("blockedRPC")&&"false"!=localStorage.getItem("blockedRPC"))this.selected=localStorage.getItem("rpc");else{var t=parseInt(7*Math.random()+0);this.selected=this.options[t]}localStorage.getItem("autoLogin")&&"true"==localStorage.getItem("autoLogin")&&this.login(),localStorage.getItem("autoLogin")&&"rpc"==localStorage.getItem("autoLogin")&&(localStorage.setItem("autoLogin","false"),this.login())}}),c=l,d=(n(342),n(66)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login-form"},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.selected,expression:"selected"}],staticClass:"api-selector",on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.selected=e.target.multiple?n:n[0]}}},t._l(t.options,(function(e){return n("option",{key:e},[t._v("\n      "+t._s(e)+"\n    ")])})),0),t._v(" "),n("b-button",{attrs:{variant:"success"},on:{click:t.login}},[t._v("Login on WAX")]),t._v(" "),t.wait?n("b-spinner",{staticClass:"spinner-login",attrs:{label:"Spinning"}}):t._e()],1)}),[],!1,null,null,null);e.default=component.exports},355:function(t,e,n){var content=n(362);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(101).default)("1b7833da",content,!0,{sourceMap:!1})},361:function(t,e,n){"use strict";n(355)},362:function(t,e,n){var o=n(100)(!1);o.push([t.i,"body{background-color:#222;color:#f0f8ff}.devinfo{position:fixed;top:0;right:0;left:0;z-index:1030;background-color:rgba(58,58,58,.096)}.txt{text-align:left;font-weight:700;margin-left:20px}.dev1{color:#d666e0}.dev2{color:#e74c3c}.wax-stake{height:64px;display:flex;margin-top:3%;justify-content:center}",""]),t.exports=o},367:function(t,e,n){"use strict";n.r(e);n(38),n(22);var o=n(337),r=n(350),l=n(357),c=n(358),d=n(339),f={name:"IndexPage",components:{DefiLogo:o.default,Login:r.default,Interval:l.default,Test:c.default,Buffer:d.default},data:function(){return{refresh:!1}},mounted:function(){var t=this;setInterval((function(){t.refresh=!0,t.refresh=!1,console.log("refreshed stake")}),6e4)},computed:{name:function(){return this.$store.state.user.name}}},v=(n(361),n(66)),component=Object(v.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),t._v(" "),""==t.name?n("DefiLogo"):t._e(),t._v(" "),""==t.name?n("Login"):n("div",[n("Interval"),t._v(" "),n("Test")],1),t._v(" "),t.refresh?t._e():n("div",{staticClass:"wax-stake"},[n("div",{staticClass:"rent-cpu",attrs:{"data-nWax":"50","data-length":"3"}}),t._v(" "),n("div",{staticClass:"rent-cpu",attrs:{"data-nWax":"50","data-length":"7"}}),t._v(" "),n("div",{staticClass:"rent-cpu",attrs:{"data-nWax":"50","data-length":"30"}})]),t._v(" "),t.refresh?t._e():n("div",{staticClass:"wax-stake"},[n("div",{staticClass:"rent-cpu",attrs:{"data-nWax":"100","data-length":"3"}}),t._v(" "),n("div",{staticClass:"rent-cpu",attrs:{"data-nWax":"100","data-length":"7"}}),t._v(" "),n("div",{staticClass:"rent-cpu",attrs:{"data-nWax":"100","data-length":"30"}})])],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"devinfo"},[n("p",{staticClass:"txt"},[t._v("\n      Created by\n      "),n("span",{staticClass:"dev1"},[t._v(" Azod#9999 (vzfjg.wam) ")]),t._v("\n      (v0.5.8)\n    ")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{DefiLogo:n(337).default,Login:n(350).default,Interval:n(357).default,Test:n(358).default})}}]);