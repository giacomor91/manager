(window.webpackJsonp=window.webpackJsonp||[]).push([["import-index"],{"./src/Template/Layout/js/app/pages/import/index.js":
/*!**********************************************************!*\
  !*** ./src/Template/Layout/js/app/pages/import/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/*! all exports used */function(e,t,s){"use strict";s.r(t),t.default={props:{jobs:{type:Array,default:()=>[]},timeout:{type:Number,default:5e3}},data:()=>({fileName:"",currentJobs:()=>[],showPayloadId:null}),created(){this.currentJobs=this.jobs},mounted(){setInterval(()=>{this.updateJobs()},this.timeout)},methods:{onFileChanged(e){this.fileName=e.target.files[0].name},updateJobs(){let e=`${BEDITA.base}/import/jobs`;return fetch(e,{credentials:"same-origin",headers:{accept:"application/json"}}).then(e=>e.json()).then(e=>{if(e.jobs)return this.currentJobs=e.jobs,this.currentJobs}).catch(e=>{console.error(e)})},togglePayload(e){this.showPayloadId!=e?this.showPayloadId=e:this.showPayloadId=null}}}}}]);
//# sourceMappingURL=import-index.bundle.js.map