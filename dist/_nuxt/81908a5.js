(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{362:function(t,e,o){var content=o(376);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(106).default)("ed39a9f8",content,!0,{sourceMap:!1})},375:function(t,e,o){"use strict";o(362)},376:function(t,e,o){var n=o(105)(!1);n.push([t.i,".login-form{display:flex;justify-content:center;margin-top:2%}.api-selector{margin-right:1%}.spinner-login{margin-left:1%;color:grey}",""]),t.exports=n},383:function(t,e,o){"use strict";o.r(e);var n,r=o(28),l=(o(71),o(38),{name:"Login",computed:{user:function(){return this.$store.state.user}},data:function(){return{wait:!1,options:["https://wax.cryptolions.io","https://query.3dkrender.com","https://api.wax.alohaeos.com","https://wax.eu.eosamsterdam.net","https://wax.blokcrafters.io","https://api-wax-mainnet.wecan.dev","https://wax.cryptolions.io","https://wax.dapplica.io","https://wax.eosdac.io","https://wax.eoseoul.io","https://wax.api.eosnation.io","https://api.waxsweden.org"],selected:"https://wax.cryptolions.io"}},methods:{login:(n=Object(r.a)(regeneratorRuntime.mark((function t(){var e,o,n=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.wait=!0,localStorage.setItem("rpc",this.selected),t.next=4,this.$store.commit("user/login",this.selected);case 4:e=this.$store.state.user.wax,o=setInterval((function(){null!=e&&null!=e.userAccount&&(clearInterval(o),n.$store.commit("user/setUser"),n.$emit("logged"))}),1e3);case 6:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})},mounted:function(){if(localStorage.getItem("rpc"))if("random"!=localStorage.getItem("rpc")||localStorage.getItem("blockedRPC")&&"false"!=localStorage.getItem("blockedRPC"))this.selected=localStorage.getItem("rpc");else{var t=parseInt(Math.random()*this.options.length);this.selected=this.options[t]}localStorage.getItem("autoLogin")&&"true"==localStorage.getItem("autoLogin")&&this.login(),localStorage.getItem("autoLogin")&&"rpc"==localStorage.getItem("autoLogin")&&(localStorage.setItem("autoLogin","false"),this.login())}}),c=l,m=(o(375),o(70)),component=Object(m.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"login-form"},[o("select",{directives:[{name:"model",rawName:"v-model",value:t.selected,expression:"selected"}],staticClass:"api-selector",on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.selected=e.target.multiple?o:o[0]}}},t._l(t.options,(function(e){return o("option",{key:e},[t._v("\n      "+t._s(e)+"\n    ")])})),0),t._v(" "),o("b-button",{attrs:{variant:"success"},on:{click:t.login}},[t._v("Login on WAX")]),t._v(" "),t.wait?o("b-spinner",{staticClass:"spinner-login",attrs:{label:"Spinning"}}):t._e()],1)}),[],!1,null,null,null);e.default=component.exports}}]);