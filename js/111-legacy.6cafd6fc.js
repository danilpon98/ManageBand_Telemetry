"use strict";(self["webpackChunkmanageband"]=self["webpackChunkmanageband"]||[]).push([[111],{2111:function(t,e,i){i.r(e),i.d(e,{default:function(){return M}});var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",[i("v-row",[i("v-col",{attrs:{md:"8","offset-md":"2"}},[i("v-card",{staticClass:"mt-4",attrs:{elevation:"0",rounded:"lg"}},[i("v-card-title",[t._v(" Настройка отображения параметров ")]),i("v-card-text",[i("v-row",{attrs:{dense:""}},t._l(t.indicators,(function(e,n){return i("v-col",{key:n,attrs:{cols:"4"}},[i("v-checkbox",{attrs:{value:e,label:e,"hide-details":""},model:{value:t.checkedIndicators,callback:function(e){t.checkedIndicators=e},expression:"checkedIndicators"}})],1)})),1)],1),i("v-divider"),i("v-card-actions",{staticClass:"justify-end"},[i("v-btn",{attrs:{depressed:"",color:"primary",disabled:!t.checkedIndicators.length},on:{click:t.saveIndicators}},[t._v(" Сохранить настройки ")])],1)],1)],1)],1),i("v-snackbar",{attrs:{timeout:2e3,color:t.message.color,fixed:"",right:"",top:"",text:"",app:""},model:{value:t.message.show,callback:function(e){t.$set(t.message,"show",e)},expression:"message.show"}},[t._v(" "+t._s(t.message.text)+" ")])],1)},s=[],a=i(4367),o=(i(8862),i(629)),r=(i(9595),{name:"SettingsView",data:function(){return{checkedIndicators:[],message:{show:!1,color:"success",text:"Параметры сохранены"}}},created:function(){this.checkedIndicators=this.indicatorsActive},computed:(0,a.Z)({},(0,o.Se)("indicators",{indicators:"all",indicatorsActive:"active"})),methods:(0,a.Z)((0,a.Z)({},(0,o.nv)("indicators",{indicatorsActiveUpdate:"updateActive"})),{},{saveIndicators:function(){localStorage.setItem("indicators",JSON.stringify(this.checkedIndicators)),this.indicatorsActiveUpdate(this.checkedIndicators),this.message.show=!0}})}),c=r,l=i(1001),u=i(3453),h=i.n(u),d=i(680),p=i(2371),v=i(7118),m=i(3274),f=(i(1539),i(9714),i(172)),g=i(8230),k=(i(7327),i(6286)),b=i(144),C=b.Z.extend({name:"rippleable",directives:{ripple:k.Z},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",t)):null}}}),y=i(4419),V=i(3325);function I(t){t.preventDefault()}var x=(0,V.Z)(g.Z,C,y.Z).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,i=this.internalValue;return this.isMultiple?!!Array.isArray(i)&&i.some((function(i){return t.valueComparator(i,e)})):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,i):Boolean(i):this.valueComparator(i,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var t=g.Z.options.methods.genLabel.call(this);return t?(t.data.on={click:I},t):t},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:I},ref:"input"})},onBlur:function(){this.isFocused=!1},onClick:function(t){this.onChange(),this.$emit("click",t)},onChange:function(){var t=this;if(this.isInteractive){var e=this.value,i=this.internalValue;if(this.isMultiple){Array.isArray(i)||(i=[]);var n=i.length;i=i.filter((function(i){return!t.valueComparator(i,e)})),i.length===n&&i.push(e)}else i=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(i,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(i,e)?null:e:!i;this.validate(!0,i),this.internalValue=i,this.hasColor=i}},onFocus:function(){this.isFocused=!0},onKeydown:function(t){}}}),Z=["title"],A=x.extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data:function(){return{inputIndeterminate:this.indeterminate}},computed:{classes:function(){return(0,a.Z)((0,a.Z)({},g.Z.options.computed.classes.call(this)),{},{"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate})},computedIcon:function(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState:function(){if(!this.isDisabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate:function(t){var e=this;this.$nextTick((function(){return e.inputIndeterminate=t}))},inputIndeterminate:function(t){this.$emit("update:indeterminate",t)},isActive:function(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox:function(){var t=this.attrs$,e=(t.title,(0,m.Z)(t,Z));return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(f.Z,this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",(0,a.Z)((0,a.Z)({},e),{},{"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()})),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot:function(){return[this.genCheckbox(),this.genLabel()]}}}),w=i(2102),S=i(9846),B=i(1418),T=i(6403),$=i(3796),_=(i(9653),i(6699),i(3385)),D=i(6952),E=i(8085),L=i(2936),O=i(3536),F=i(4589),R=i(1824),z=(0,V.Z)(_.Z,D.Z,L.Z,(0,O.d)(["absolute","bottom","left","right","top"])).extend({name:"v-snackbar",props:{app:Boolean,centered:Boolean,contentClass:{type:String,default:""},multiLine:Boolean,text:Boolean,timeout:{type:[Number,String],default:5e3},transition:{type:[Boolean,String],default:"v-snack-transition",validator:function(t){return"string"===typeof t||!1===t}},vertical:Boolean},data:function(){return{activeTimeout:-1}},computed:{classes:function(){return{"v-snack--absolute":this.absolute,"v-snack--active":this.isActive,"v-snack--bottom":this.bottom||!this.top,"v-snack--centered":this.centered,"v-snack--has-background":this.hasBackground,"v-snack--left":this.left,"v-snack--multi-line":this.multiLine&&!this.vertical,"v-snack--right":this.right,"v-snack--text":this.text,"v-snack--top":this.top,"v-snack--vertical":this.vertical}},hasBackground:function(){return!this.text&&!this.outlined},isDark:function(){return this.hasBackground?!this.light:E.Z.options.computed.isDark.call(this)},styles:function(){if(this.absolute||!this.app)return{};var t=this.$vuetify.application,e=t.bar,i=t.bottom,n=t.footer,s=t.insetFooter,a=t.left,o=t.right,r=t.top;return{paddingBottom:(0,F.kb)(i+n+s),paddingLeft:(0,F.kb)(a),paddingRight:(0,F.kb)(o),paddingTop:(0,F.kb)(e+r)}}},watch:{isActive:"setTimeout",timeout:"setTimeout"},mounted:function(){this.isActive&&this.setTimeout()},created:function(){this.$attrs.hasOwnProperty("auto-height")&&(0,R.Jk)("auto-height",this),0==this.timeout&&(0,R.Rn)('timeout="0"',"-1",this)},methods:{genActions:function(){return this.$createElement("div",{staticClass:"v-snack__action "},[(0,F.z9)(this,"action",{attrs:{class:"v-snack__btn"}})])},genContent:function(){return this.$createElement("div",{staticClass:"v-snack__content",class:(0,$.Z)({},this.contentClass,!0),attrs:{role:"status","aria-live":"polite"}},[(0,F.z9)(this)])},genWrapper:function(){var t=this,e=this.hasBackground?this.setBackgroundColor:this.setTextColor,i=e(this.color,{staticClass:"v-snack__wrapper",class:_.Z.options.computed.classes.call(this),style:_.Z.options.computed.styles.call(this),directives:[{name:"show",value:this.isActive}],on:{pointerenter:function(){return window.clearTimeout(t.activeTimeout)},pointerleave:this.setTimeout}});return this.$createElement("div",i,[this.genContent(),this.genActions()])},genTransition:function(){return this.$createElement("transition",{props:{name:this.transition}},[this.genWrapper()])},setTimeout:function(){var t=this;window.clearTimeout(this.activeTimeout);var e=Number(this.timeout);this.isActive&&![0,-1].includes(e)&&(this.activeTimeout=window.setTimeout((function(){t.isActive=!1}),e))}},render:function(t){return t("div",{staticClass:"v-snack",class:this.classes,style:this.styles},[!1!==this.transition?this.genTransition():this.genWrapper()])}}),j=(0,l.Z)(c,n,s,!1,null,"bf67b6c0",null),M=j.exports;h()(j,{VBtn:d.Z,VCard:p.Z,VCardActions:v.h7,VCardText:v.ZB,VCardTitle:v.EB,VCheckbox:A,VCol:w.Z,VContainer:S.Z,VDivider:B.Z,VRow:T.Z,VSnackbar:z})}}]);
//# sourceMappingURL=111-legacy.6cafd6fc.js.map