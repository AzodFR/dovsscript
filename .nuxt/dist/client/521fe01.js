(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{325:function(t,e,o){var content=o(333);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(101).default)("10fcbe00",content,!0,{sourceMap:!1})},327:function(t,e,o){"use strict";o.r(e);var l={name:"LocalAutoClaimButton",props:{type:String,id:String},data:function(){return{value:this.$store.state.user.autoclaim[this.type][this.id]}},methods:{autoOne:function(){var t=this.$store.state.user.autoclaim[this.type][this.id];t&&(localStorage.setItem("".concat(this.type,"AutoClaim"),"false"),this.$store.commit("user/setAutoClaim",{type:this.type,id:"global",value:!1}),this.$root.$emit("".concat(this.type,"disableClaimAll"))),localStorage.setItem("".concat(this.id),"".concat(!t)),this.$store.commit("user/setAutoClaim",{type:this.type,id:this.id,value:!t}),this.value=this.$store.state.user.autoclaim[this.type][this.id]}},mounted:function(){var t=this;this.$root.$on("".concat(this.type,"autoClaimAll"),(function(){localStorage.setItem("".concat(t.id),"true"),t.$store.commit("user/setAutoClaim",{type:t.type,id:t.id,value:!0}),t.value=t.$store.state.user.autoclaim[t.type][t.id]}))}},n=(o(332),o(66)),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("b-button",{class:t.value?"success":"danger",attrs:{variant:t.value?"success":"danger",size:"sm"},on:{click:t.autoOne}},[t._v("\n    C "+t._s(t.value?"[ON]":"[OFF]")+"\n  ")])],1)}),[],!1,null,null,null);e.default=component.exports},332:function(t,e,o){"use strict";o(325)},333:function(t,e,o){var l=o(100)(!1);l.push([t.i,".local-button{font-size:small}",""]),t.exports=l}}]);