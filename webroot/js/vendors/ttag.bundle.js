(window.webpackJsonp=window.webpackJsonp||[]).push([["vendors/ttag"],{"./node_modules/ttag/dist/config.js":
/*!******************************************!*\
  !*** ./node_modules/ttag/dist/config.js ***!
  \******************************************/
/*! no static exports found */
/*! all exports used */function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){var t=this,e={locales:{},currentLocales:[],currentLocale:"en",dedent:!0,defaultLang:"en"};this.addLocale=function(t,n){s||(0,a.validateLocaleCode)(t),s||(0,a.validateLocaleData)(n),n=(0,r.transformTranslateObj)(n),e.locales[t]=n},this.setCurrentLocale=function(t){e.currentLocale=t},this.setDedent=function(t){e.dedent=t},this.setCurrentLocales=function(n){s||(0,a.validateLocales)(n,t.getAvailLocales()),e.currentLocales=n},this.getAvailLocales=function(){return e.locales},this.getCurrentLocales=function(){return e.currentLocales},this.getCurrentLocale=function(){return e.currentLocale},this.isDedent=function(){return e.dedent},this.setDefaultLang=function(t){e.defaultLang=t},this.getDefaultPluralFn=function(){return(0,o.getPluralFunc)(e.defaultLang)},this.getDefaultPluralFormsCount=function(){return(0,o.getNPlurals)(e.defaultLang)},this.getCurrentLocaleHeaders=function(){return e.locales[e.currentLocale].headers}};var r=n(/*! ./utils */"./node_modules/ttag/dist/utils.js"),a=n(/*! ./validation */"./node_modules/ttag/dist/validation.js"),o=n(/*! plural-forms/dist/minimal */"./node_modules/plural-forms/dist/minimal.js"),s=t&&t.env&&!1}).call(this,n(/*! ./../../process/browser.js */"./node_modules/process/browser.js"))},"./node_modules/ttag/dist/index.js":
/*!*****************************************!*\
  !*** ./node_modules/ttag/dist/index.js ***!
  \*****************************************/
/*! no static exports found */
/*! exports used: addLocale, t, useLocale */function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.t=d,e.jt=v,e.msgid=function(t){if(t&&t.reduce){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];var o=new String((0,r.buildStr)(t,n));return o._strs=t,o._exprs=n,o}return t},e.gettext=m,e.ngettext=p,e.addLocale=function(t,e){o.addLocale(t,e)},e.useLocale=function(t){o.setCurrentLocale(t)},e.setDedent=function(t){o.setDedent(Boolean(t))},e.useLocales=function(t){o.setCurrentLocales(t)},e.setDefaultLang=function(t){r.isDebug&&(0,a.validateLang)(t);o.setDefaultLang(t)},e.c=function(t){var e=new s(t);return{t:d.bind(e),jt:v.bind(e),gettext:m.bind(e),ngettext:p.bind(e)}},e._=void 0;var r=n(/*! ./utils */"./node_modules/ttag/dist/utils.js"),a=n(/*! ./validation */"./node_modules/ttag/dist/validation.js");var o=new(function(t){return t&&t.__esModule?t:{default:t}}(n(/*! ./config */"./node_modules/ttag/dist/config.js")).default);function s(t){if(r.isDebug&&"string"!=typeof t)throw new Error("String type is expected as a first argument to c() function.");this.getContext=function(){return t}}var i=function(t){return t instanceof s?t.getContext():""};function u(t,e,n){var r=o.getAvailLocales(),a=r[t]&&(r[t].translations[n]||r[t].translations[""]),s=a&&a[e];return s&&!function(t){return t&&t.comments&&"fuzzy"===t.comments.flag}(s)&&function(t){return!!t.msgstr&&t.msgstr.reduce(function(t,e){return t&&e.length},!0)}(s)?s:null}function l(t,e){var n=o.getCurrentLocales();if(n.length)for(var r=0;r<n.length;r++){var a=u(n[r],t,e);if(a)return o.setCurrentLocale(n[r]),a}return u(o.getCurrentLocale(),t,e)}var c=function(t){return o.isDedent()?(0,r.dedentStr)(t):t};function d(t){var e=t;if(t&&t.reduce){for(var n=arguments.length,a=new Array(n>1?n-1:0),o=1;o<n;o++)a[o-1]=arguments[o];var s=l(c((0,r.getMsgid)(t,a)),i(this));e=s?(0,r.msgid2Orig)(s.msgstr[0],a):(0,r.buildStr)(t,a)}return c(e)}var f=/(\${\s*\d+\s*})/g,g=/\${\s*(\d+)\s*}/;function v(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];if(t&&t.reduce){var o=l(c((0,r.getMsgid)(t,n)),i(this));return o?o.msgstr[0].split(f).map(function(t){var e=t.match(g);return e?n[+e[1]]:t}):(0,r.buildArr)(t,n)}return t}function m(t){var e=l(t,i(this));return e?e.msgstr[0]:t}var h=m;function p(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];r.isDebug&&(0,a.validateNgettextMsgid)(e[0]);var s=c((0,r.getMsgid)(e[0]._strs,e[0]._exprs)),u=e[e.length-1];r.isDebug&&(0,a.validateNgettextNumber)(u);var d=e.slice(1,-1);d.unshift(e[0].toString()),r.isDebug&&(0,a.validateNgettextPluralForms)(o.getDefaultPluralFormsCount(),d.length);var f=l(s,i(this));if(f){var g=(0,r.getPluralFnForTrans)(f,o);return c((0,r.msgid2Orig)(g(u,f.msgstr),e[0]._exprs))}var v=o.getDefaultPluralFn();return c(v(u,d))}e._=h},"./node_modules/ttag/dist/utils.js":
/*!*****************************************!*\
  !*** ./node_modules/ttag/dist/utils.js ***!
  \*****************************************/
/*! no static exports found */
/*! all exports used */function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.makePluralFunc=u,e.getPluralFunc=c,e.transformTranslateObj=function(t){var e={},n=!0,r=!1,a=void 0;try{for(var o,s=f(t.translations)[Symbol.iterator]();!(n=(o=s.next()).done);n=!0){var i=o.value,u=t.translations[i],l={},c=!0,d=!1,g=void 0;try{for(var m,h=f(u)[Symbol.iterator]();!(c=(m=h.next()).done);c=!0){var p=m.value,y=v(u[p]);l[y.msgid]=y}}catch(t){d=!0,g=t}finally{try{c||null==h.return||h.return()}finally{if(d)throw g}}e[i]=l}}catch(t){r=!0,a=t}finally{try{n||null==s.return||s.return()}finally{if(r)throw a}}return t.translations=e,t},e.dedentStr=function(t){if("string"!=typeof t)return t;if(-1===t.indexOf("\n"))return t;return(0,r.default)(t)},e.getPluralFnForTrans=function(t,e){var n=e.getCurrentLocaleHeaders(),r=n.language|n.Language;if(r)return(0,a.getPluralFunc)(r);return u(c(n))},e.isDebug=e.buildArr=e.buildStr=e.msgid2Orig=e.getMsgid=void 0;var r=function(t){return t&&t.__esModule?t:{default:t}}(n(/*! dedent */"./node_modules/dedent/dist/dedent.js")),a=n(/*! plural-forms/dist/minimal */"./node_modules/plural-forms/dist/minimal.js");e.getMsgid=function(t,e){return t.reduce(function(t,n,r){return t+n+(void 0!==e[r]&&"${ ".concat(r," }")||"")},"")};var o={},s=function(t){return function(e){return o[e]?o[e]:(o[e]=t(e),o[e])}}(function(t){return new RegExp("\\$\\{([\\s]+?|\\s?)".concat(t,"([\\s]+?|\\s?)}"))});e.msgid2Orig=function(t,e){return e.reduce(function(t,e,n){return t.replace(s(n),e)},t)};e.buildStr=function(t,e){return t.reduce(function(t,n,r){return t+n+(void 0!==e[r]?e[r]:"")},"")};e.buildArr=function(t,e){return t.reduce(function(t,n,r){return void 0!==e[r]?t.concat(n,e[r]):t.concat(n)},[])};var i={};function u(t){var e=i[t];return e||(e=new Function("n","args",function(t){return"return args[+ (".concat(t,")];")}(t)),i[t]=e),e}var l=/\splural ?=?([\s\S]*);?/;function c(t){var e=l.exec(t["plural-forms"])[1];return";"===e[e.length-1]&&(e=e.slice(0,-1)),e}var d=/\$\{ \w+(.\w+)* \}/g;function f(t){var e=[];for(var n in t)t.hasOwnProperty(n)&&e.push(n);return e}function g(t,e){return t.replace(d,function(t){return"${ ".concat(e[t]," }")})}function v(t){var e=t.msgid.match(d);if(!e)return t;var n={};e.forEach(function(t,e){n[t]=e});var r={msgid:g(t.msgid,n)};t.msgid_plural&&(r.msgid_plural=g(t.msgid_plural,n)),r.msgstr=[];var a=!0,o=!1,s=void 0;try{for(var i,u=t.msgstr[Symbol.iterator]();!(a=(i=u.next()).done);a=!0){var l=i.value;r.msgstr.push(g(l,n))}}catch(t){o=!0,s=t}finally{try{a||null==u.return||u.return()}finally{if(o)throw s}}return r.comments=t.comments,r}e.isDebug=!0}).call(this,n(/*! ./../../process/browser.js */"./node_modules/process/browser.js"))},"./node_modules/ttag/dist/validation.js":
/*!**********************************************!*\
  !*** ./node_modules/ttag/dist/validation.js ***!
  \**********************************************/
/*! no static exports found */
/*! all exports used */function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.validateLocaleCode=function(t){if("string"!=typeof t)throw new Error("Expected locale code to be a string but recieved ".concat(a(t)," insttead"))},e.validateLocaleData=function(t){var e="https://c-3po.js.org/configuration-c-3po-lib.html#addlocale-string-locale-object-data-bool-replacevariablesnames";if(!t)throw new Error("\n            Locale data sould not be empty.\n            see - ".concat(e,"\n            "));if(!t.headers)throw new Error('\n            Locale data sould contain headers "'.concat(JSON.stringify(t),'".\n            see - ').concat(e,"\n            "));if(!t.headers["plural-forms"]&&!t.headers["Plural-Forms"])throw new Error("\n            Locale data.headers should contain 'Plural-Forms' attribute \"".concat(JSON.stringify(t),'".\n            see - ').concat(e,"\n            "));if(!t.translations)throw new Error('\n            Locale data sould contain translations "'.concat(JSON.stringify(t),'".\n            see - ').concat(e,"\n            "));if(!Object.keys(t.translations).length)throw new Error('\n            Locale data.translations should have at least 1 key"'.concat(JSON.stringify(t),'".\n            see - ').concat(e,"\n            "))},e.validateLocales=function(t,e){if(!Array.isArray(t))throw new Error("useLocales accepts only array as the first argument");t.forEach(function(t){return function(t,e){if(!e[t])throw new Error("\n                    Locale '".concat(t,"' is not found in config.\n                    useLocales accepts only existing locales. Use addLocale function before.\n                    Available locales: ").concat(JSON.stringify(e)))}(t,e)})},e.validateNgettextMsgid=function(t){if(!t.hasOwnProperty("_strs")||!t.hasOwnProperty("_exprs"))throw new Error("The first argument for ngettext must be tagged with 'msgid' tag.\n                see - ".concat("https://c-3po.js.org/ngettext.html#usage",";\n                "))},e.validateNgettextNumber=function(t){if("number"!=typeof t)throw new Error("The last argument to ngettext - '".concat(t,"' expected to be a number. Got '").concat(a(t),"' instead.\n                see - ").concat("https://c-3po.js.org/ngettext.html#usage"))},e.validateNgettextPluralForms=function(t,e){if(e!==t)throw new Error("ngettext expects ".concat(t," for the current default locale, but received - ").concat(e,"."))},e.validateLang=function(t){var e=(0,r.getAvailLangs)().join(",");if(!(0,r.hasLang)(t))throw new Error("Unknown lang code - ".concat(t,". Lang should be one of: ").concat(e,"."))};var r=n(/*! plural-forms/dist/minimal */"./node_modules/plural-forms/dist/minimal.js");function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}}}]);
//# sourceMappingURL=ttag.bundle.js.map