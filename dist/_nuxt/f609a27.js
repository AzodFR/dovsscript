(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{333:function(t,e,o){var content=o(345);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(101).default)("b14a3f40",content,!0,{sourceMap:!1})},344:function(t,e,o){"use strict";o(333)},345:function(t,e,o){var r=o(100)(!1);r.push([t.i,".fees{display:inline;margin-left:1%}.token-fees{display:flex;font-size:small;margin-bottom:1%}.token{width:30%}.keep,.to,.token{font-size:small}.to{width:100%}",""]),t.exports=r},350:function(t,e,o){"use strict";o.r(e);o(5),o(4),o(2),o(1),o(6),o(3),o(7);var r=o(0),n=(o(124),o(22),o(38),o(78));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h={computed:l(l({},Object(n.b)(["user/getRs"])),{},{user:function(){return this.$store.state.user}}),data:function(){return{fees:0,x:!1,h:!1,f:!1,r:!1,s:!1,a_h:0,a_x:0,a_f:0,a_r:0,a_s:0,wam:"",pushed:!1}},methods:{editWam:function(){localStorage.setItem("to",this.wam)},editAm:function(t){t?1==t?localStorage.setItem("a_h",this.a_h):2==t?localStorage.setItem("a_f",this.a_f):3==t?localStorage.setItem("a_r",this.a_r):4==t&&localStorage.setItem("a_s",this.a_s):localStorage.setItem("a_x",this.a_x)},switching:function(t){var e;t?1==t?(this.h=!this.h,e=this.h):2==t?(this.f=!this.f,e=this.f):3==t?(this.r=!this.r,e=this.r):4==t&&(this.s=!this.s,e=this.s):(this.x=!this.x,e=this.x),localStorage.setItem(["x","h","f","r","s"][t],e)},widthraw:function(){var t=this,e=[],o=[];if(this.x){var r=(this["user/getRs"].DOVX-this.a_x).toFixed(4);r>0&&(e.push("".concat(r," DOVX")),o.push("".concat(r," DOVX")))}if(this.h){var n=(this["user/getRs"].DOVH-this.a_h).toFixed(4);n>0&&(e.push("".concat(n," DOVH")),o.push("".concat(n," DOVH")))}if(this.f){var c=(this["user/getRs"].DOVF-this.a_f).toFixed(4);c>0&&(e.push("".concat(c," DOVF")),o.push("".concat(c," DOVF")))}if(this.r){var l=(this["user/getRs"].DOVR-this.a_r).toFixed(4);l>0&&(e.push("".concat(l," DOVR")),o.push("".concat(l," DOVR")))}if(this.s){var h=(this["user/getRs"].DOVS-this.a_s).toFixed(4);h>0&&(e.push("".concat(h," DOVS")),o.push("".concat(h," DOVS")))}if(console.log("ressources withdraw",e),console.log("token transfer",o),e.length>0&&!this.pushed){var m={actions:[]};for(var i in e)m.actions.push({account:"dovutilstake",name:"withdraw",authorization:[{actor:this.$store.state.user.name,permission:"active"}],data:{player:this.$store.state.user.name,quantity:e[i]}}),""!=this.wam&&m.actions.push({account:"dovvaultfort",name:"transfer",authorization:[{actor:this.$store.state.user.name,permission:"active"}],data:{from:this.$store.state.user.name,to:this.wam,quantity:o[i],memo:"auto transfer"}});var d={id:"withdraw",action:m,block:{blocksBehind:3,expireSeconds:30}};this.pushed=!0,console.log("transact withdraw",m),this.$store.commit("user/addRAction",d),setTimeout((function(){t.pushed=!1,console.log("withdraw available")}),6e4),console.log("asked for withdraw")}},launchWithdraw:function(){var t=this;this.widthraw(),setInterval((function(){t.widthraw()}),36e5)}},mounted:function(){var t=this;localStorage.getItem("x")&&"true"==localStorage.getItem("x")&&(this.x=!0),localStorage.getItem("h")&&"true"==localStorage.getItem("h")&&(this.h=!0),localStorage.getItem("f")&&"true"==localStorage.getItem("f")&&(this.f=!0),localStorage.getItem("r")&&"true"==localStorage.getItem("r")&&(this.r=!0),localStorage.getItem("s")&&"true"==localStorage.getItem("s")&&(this.s=!0),localStorage.getItem("to")&&(this.wam=localStorage.getItem("to")),localStorage.getItem("a_x")&&(this.a_x=localStorage.getItem("a_x")),localStorage.getItem("a_h")&&(this.a_h=localStorage.getItem("a_h")),localStorage.getItem("a_f")&&(this.a_f=localStorage.getItem("a_f")),localStorage.getItem("a_r")&&(this.a_r=localStorage.getItem("a_r")),localStorage.getItem("a_s")&&(this.a_s=localStorage.getItem("a_s")),setTimeout((function(){t.launchWithdraw()}),5e3)}},m=(o(344),o(66)),component=Object(m.a)(h,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"fees"},[o("div",{staticClass:"token-fees"},[o("div",{staticClass:"token"},[o("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{size:"sm",title:"Activate this to widthraw automaticaly your DOVX and send it to selected account.",variant:t.x?"success":"danger"},on:{click:function(e){return t.switching(0)}}},[t._v("DOVX: "+t._s(t.x?"ON":"OFF"))]),t._v(" "),o("b-input",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"keep",attrs:{type:"number",placeholder:"Amount to keep",title:"Amount to keep"},on:{change:function(e){return t.editAm(0)}},model:{value:t.a_x,callback:function(e){t.a_x=e},expression:"a_x"}})],1),t._v(" "),o("div",{staticClass:"token"},[o("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{size:"sm",title:"Activate this to widthraw automaticaly your DOVH and send it to selected account.",variant:t.h?"success":"danger"},on:{click:function(e){return t.switching(1)}}},[t._v("DOVH: "+t._s(t.h?"ON":"OFF"))]),t._v(" "),o("b-input",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"keep",attrs:{type:"number",placeholder:"Amount to keep",title:"Amount to keep"},on:{change:function(e){return t.editAm(1)}},model:{value:t.a_h,callback:function(e){t.a_h=e},expression:"a_h"}})],1),t._v(" "),o("div",{staticClass:"token"},[o("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{size:"sm",title:"Activate this to widthraw automaticaly your DOVF and send it to selected account.",variant:t.f?"success":"danger"},on:{click:function(e){return t.switching(2)}}},[t._v("DOVF: "+t._s(t.f?"ON":"OFF"))]),t._v(" "),o("b-input",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"keep",attrs:{type:"number",placeholder:"Amount to keep",title:"Amount to keep"},on:{change:function(e){return t.editAm(2)}},model:{value:t.a_f,callback:function(e){t.a_f=e},expression:"a_f"}})],1),t._v(" "),o("div",{staticClass:"token"},[o("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{size:"sm",title:"Activate this to widthraw automaticaly your DOVR and send it to selected account.",variant:t.r?"success":"danger"},on:{click:function(e){return t.switching(3)}}},[t._v("DOVR: "+t._s(t.r?"ON":"OFF"))]),t._v(" "),o("b-input",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"keep",attrs:{type:"number",placeholder:"Amount to keep",title:"Amount to keep"},on:{change:function(e){return t.editAm(3)}},model:{value:t.a_r,callback:function(e){t.a_r=e},expression:"a_r"}})],1),t._v(" "),o("div",{staticClass:"token"},[o("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{size:"sm",title:"Activate this to widthraw automaticaly your DOVS and send it to selected account.",variant:t.s?"success":"danger"},on:{click:function(e){return t.switching(4)}}},[t._v("DOVS: "+t._s(t.s?"ON":"OFF"))]),t._v(" "),o("b-input",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"keep",attrs:{type:"number",placeholder:"Amount to keep",title:"Amount to keep"},on:{change:function(e){return t.editAm(4)}},model:{value:t.a_s,callback:function(e){t.a_s=e},expression:"a_s"}}),t._v(" "),o("div",{staticClass:"goto"},[o("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{size:"sm",title:"Leave blank if you just want to keep it in your wallet.",variant:""!=t.wam?"success":"danger",disabled:""}},[t._v("Address to send:")]),t._v(" "),o("b-input",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{type:"text",placeholder:"Wax address",title:"Leave blank if you just want to keep it in your wallet."},on:{change:t.editWam},model:{value:t.wam,callback:function(e){t.wam=e},expression:"wam"}})],1)],1)])])}),[],!1,null,null,null);e.default=component.exports}}]);