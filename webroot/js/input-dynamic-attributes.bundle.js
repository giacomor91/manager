(window.webpackJsonp=window.webpackJsonp||[]).push([["input-dynamic-attributes"],{"./src/Template/Layout/js/app/components/input-dynamic-attributes.js":
/*!***************************************************************************!*\
  !*** ./src/Template/Layout/js/app/components/input-dynamic-attributes.js ***!
  \***************************************************************************/
/*! exports provided: default */
/*! all exports used */function(t,e,a){"use strict";a.r(e),e.default={name:"InputDynamicAttributes",props:{value:{type:[String,Boolean]},attrs:{type:Object,required:!0}},render(t){const e=this.attrs,a=Object.keys(e).filter(t=>t.startsWith("v-")).map(t=>{return{name:t.split("v-").pop()}});let i={value:this.value},s={input:t=>{this.$emit("update:value",t.target.value)}};return"checkbox"===e.type&&(i={checked:"true"===this.value},s={input:t=>{this.$emit("update:value",t.target.checked)}}),delete e.time,t("input",{directives:a,attrs:e,domProps:i,on:s})}}}}]);
//# sourceMappingURL=input-dynamic-attributes.bundle.js.map