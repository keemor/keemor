webpackJsonp([6],{153:function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function a(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function i(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}Object.defineProperty(n,"__esModule",{value:!0});var s=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),l=t(11),c=t(408),u=r(c),f=t(411),d=r(f),p=function(e){function n(){return o(this,n),a(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return i(n,e),s(n,[{key:"render",value:function(e,n){n.text;return(0,l.h)(u.default,null,(0,l.h)("div",null,(0,l.h)("h3",null,"Example of using ",(0,l.h)("a",{href:"https://github.com/isagalaev/highlight.js/"},"highlight.js")," based on preact-material-components"," ",(0,l.h)("a",{href:"https://github.com/prateekbh/preact-material-components/blob/master/docs/src/components/code-block/index.js"},"code-block"))),(0,l.h)(u.default.Media,null,(0,l.h)(d.default,{code:'\nimport { h } from "preact";\nimport hljs from "highlight.js/lib/highlight";\nimport javascript from "highlight.js/lib/languages/javascript";\nimport "highlight.js/styles/monokai-sublime.css";\n\nconst LANGUAGES = { javascript };\nObject.keys(LANGUAGES).forEach(key =>\n  hljs.registerLanguage(key, LANGUAGES[key])\n);\n\nexport default ({ code }) => {\n  let text = code.replace(/(^s+|s+$)/g, ""),\n    highlighted = hljs.highlightAuto(text, Object.keys(LANGUAGES)),\n    hLang = highlighted.language;\n  return (\n    <pre class="highlight">\n      <code\n        class={`hljs lang-${hLang}`}\n        dangerouslySetInnerHTML={{ __html: highlighted.value }}\n      />\n    </pre>\n  );\n};'})))}}]),n}(l.Component);n.default=p},408:function(e,n,t){"use strict";function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function o(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function a(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}function i(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},s.apply(this,arguments)}var l=function e(n,t,r){null===n&&(n=Function.prototype);var o=Object.getOwnPropertyDescriptor(n,t);if(void 0===o){var a=Object.getPrototypeOf(n);return null===a?void 0:e(a,t,r)}if("value"in o)return o.value;var i=o.get;if(void 0!==i)return i.call(r)},c=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}();Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u=i(t(409)),f=i(t(104)),d=i(t(49)),p=t(11),g=function(e){function n(){r(this,n);var e=o(this,(n.__proto__||Object.getPrototypeOf(n)).call(this));return e.componentName="card",e._mdcProps=["outlined"],e}return a(n,e),n}(d.default),h=function(e){function n(){r(this,n);var e=o(this,(n.__proto__||Object.getPrototypeOf(n)).call(this));return e.componentName="card__actions",e._mdcProps=["full-bleed"],e}return a(n,e),n}(d.default),b=function(e){function n(){r(this,n);var e=o(this,(n.__proto__||Object.getPrototypeOf(n)).call(this));return e.componentName="card__media",e._mdcProps=["square","16-9"],e}return a(n,e),n}(d.default),m=function(e){function n(){r(this,n);var e=o(this,(n.__proto__||Object.getPrototypeOf(n)).call(this));return e.componentName="card__action",e}return a(n,e),c(n,[{key:"materialDom",value:function(e){return(0,p.h)("button",s({className:"mdc-button mdc-card__action--button"},e,{ref:this.setControlRef}),e.children)}}]),n}(u.default),_=function(e){function n(){r(this,n);var e=o(this,(n.__proto__||Object.getPrototypeOf(n)).call(this));return e.componentName="card__action-icons",e}return a(n,e),n}(d.default),v=function(e){function n(){r(this,n);var e=o(this,(n.__proto__||Object.getPrototypeOf(n)).call(this));return e.componentName="card__action",e}return a(n,e),c(n,[{key:"materialDom",value:function(e){return e.className="mdc-card__action--icon",l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"materialDom",this).call(this,e)}}]),n}(f.default),y=function(e){function n(){r(this,n);var e=o(this,(n.__proto__||Object.getPrototypeOf(n)).call(this));return e.componentName="card__media-content",e}return a(n,e),n}(d.default);g.Actions=h,g.ActionButton=m,g.ActionIcons=_,g.ActionIcon=v,g.Media=b,g.CardMediaContent=y;var E=g;n.default=E},409:function(e,n,t){"use strict";function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function o(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function a(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}function i(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},s.apply(this,arguments)}var l=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),c=function e(n,t,r){null===n&&(n=Function.prototype);var o=Object.getOwnPropertyDescriptor(n,t);if(void 0===o){var a=Object.getPrototypeOf(n);return null===a?void 0:e(a,t,r)}if("value"in o)return o.value;var i=o.get;if(void 0!==i)return i.call(r)};Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u=t(11),f=i(t(49)),d=i(t(104)),p=i(t(410)),g=function(e){function n(){r(this,n);var e=o(this,(n.__proto__||Object.getPrototypeOf(n)).call(this));return e.componentName="button",e._mdcProps=["dense","raised","unelevated","outlined"],e.themeProps=["primary","secondary"],e}return a(n,e),l(n,[{key:"componentDidMount",value:function(){c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"attachRipple",this).call(this)}},{key:"materialDom",value:function(e){var n=e.href?"a":"button",t="";return this.themeProps.forEach(function(n){n in e&&!1!==e[n]&&(t+=(0,p.default)(n)+" ")}),(0,u.h)(n,s({ref:this.setControlRef},e,{className:t}),this.props.children)}}]),n}(f.default),h=function(e){function n(){r(this,n);var e=o(this,(n.__proto__||Object.getPrototypeOf(n)).call(this));return e.componentName="button__icon",e}return a(n,e),n}(d.default);g.Icon=h;var b=g;n.default=b},410:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){return"mdc-theme--"+e+"-bg"}},411:function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var o=t(11),a=t(412),i=r(a),s=t(413),l=r(s);t(414);var c={javascript:l.default};Object.keys(c).forEach(function(e){return i.default.registerLanguage(e,c[e])}),n.default=function(e){var n=e.code,t=n.replace(/(^\s+|\s+$)/g,""),r=i.default.highlightAuto(t,Object.keys(c)),a=r.language;return(0,o.h)("pre",{class:"highlight"},(0,o.h)("code",{class:"hljs lang-"+a,dangerouslySetInnerHTML:{__html:r.value}}))}},412:function(e,n,t){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(e){"object"===("undefined"==typeof window?"undefined":r(window))&&window||"object"===("undefined"==typeof self?"undefined":r(self))&&self;e(n)}(function(e){function n(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function t(e){return e.nodeName.toLowerCase()}function r(e,n){var t=e&&e.exec(n);return t&&0===t.index}function o(e){return R.test(e)}function a(e){var n,t,r,a,i=e.className+" ";if(i+=e.parentNode?e.parentNode.className:"",t=M.exec(i))return E(t[1])?t[1]:"no-highlight";for(i=i.split(/\s+/),n=0,r=i.length;n<r;n++)if(a=i[n],o(a)||E(a))return a}function i(e){var n,t={},r=Array.prototype.slice.call(arguments,1);for(n in e)t[n]=e[n];return r.forEach(function(e){for(n in e)t[n]=e[n]}),t}function s(e){var n=[];return function e(r,o){for(var a=r.firstChild;a;a=a.nextSibling)3===a.nodeType?o+=a.nodeValue.length:1===a.nodeType&&(n.push({event:"start",offset:o,node:a}),o=e(a,o),t(a).match(/br|hr|img|input/)||n.push({event:"stop",offset:o,node:a}));return o}(e,0),n}function l(e,r,o){function a(){return e.length&&r.length?e[0].offset!==r[0].offset?e[0].offset<r[0].offset?e:r:"start"===r[0].event?e:r:e.length?e:r}function i(e){function r(e){return" "+e.nodeName+'="'+n(e.value).replace('"',"&quot;")+'"'}u+="<"+t(e)+O.map.call(e.attributes,r).join("")+">"}function s(e){u+="</"+t(e)+">"}function l(e){("start"===e.event?i:s)(e.node)}for(var c=0,u="",f=[];e.length||r.length;){var d=a();if(u+=n(o.substring(c,d[0].offset)),c=d[0].offset,d===e){f.reverse().forEach(s);do{l(d.splice(0,1)[0]),d=a()}while(d===e&&d.length&&d[0].offset===c);f.reverse().forEach(i)}else"start"===d[0].event?f.push(d[0].node):f.pop(),l(d.splice(0,1)[0])}return u+n(o.substr(c))}function c(e){return e.variants&&!e.cached_variants&&(e.cached_variants=e.variants.map(function(n){return i(e,{variants:null},n)})),e.cached_variants||e.endsWithParent&&[i(e)]||[e]}function u(e){function n(e){return e&&e.source||e}function t(t,r){return new RegExp(n(t),"m"+(e.case_insensitive?"i":"")+(r?"g":""))}function r(o,a){if(!o.compiled){if(o.compiled=!0,o.keywords=o.keywords||o.beginKeywords,o.keywords){var i={},s=function(n,t){e.case_insensitive&&(t=t.toLowerCase()),t.split(" ").forEach(function(e){var t=e.split("|");i[t[0]]=[n,t[1]?Number(t[1]):1]})};"string"==typeof o.keywords?s("keyword",o.keywords):j(o.keywords).forEach(function(e){s(e,o.keywords[e])}),o.keywords=i}o.lexemesRe=t(o.lexemes||/\w+/,!0),a&&(o.beginKeywords&&(o.begin="\\b("+o.beginKeywords.split(" ").join("|")+")\\b"),o.begin||(o.begin=/\B|\b/),o.beginRe=t(o.begin),o.end||o.endsWithParent||(o.end=/\B|\b/),o.end&&(o.endRe=t(o.end)),o.terminator_end=n(o.end)||"",o.endsWithParent&&a.terminator_end&&(o.terminator_end+=(o.end?"|":"")+a.terminator_end)),o.illegal&&(o.illegalRe=t(o.illegal)),null==o.relevance&&(o.relevance=1),o.contains||(o.contains=[]),o.contains=Array.prototype.concat.apply([],o.contains.map(function(e){return c("self"===e?o:e)})),o.contains.forEach(function(e){r(e,o)}),o.starts&&r(o.starts,a);var l=o.contains.map(function(e){return e.beginKeywords?"\\.?("+e.begin+")\\.?":e.begin}).concat([o.terminator_end,o.illegal]).map(n).filter(Boolean);o.terminators=l.length?t(l.join("|"),!0):{exec:function(){return null}}}}r(e)}function f(e,t,o,a){function i(e,n){var t,o;for(t=0,o=n.contains.length;t<o;t++)if(r(n.contains[t].beginRe,e))return n.contains[t]}function s(e,n){if(r(e.endRe,n)){for(;e.endsParent&&e.parent;)e=e.parent;return e}if(e.endsWithParent)return s(e.parent,n)}function l(e,n){return!o&&r(n.illegalRe,e)}function c(e,n){var t=v.case_insensitive?n[0].toLowerCase():n[0];return e.keywords.hasOwnProperty(t)&&e.keywords[t]}function p(e,n,t,r){var o=r?"":A.classPrefix,a='<span class="'+o,i=t?"":x;return(a+=e+'">')+n+i}function g(){var e,t,r,o;if(!O.keywords)return n(R);for(o="",t=0,O.lexemesRe.lastIndex=0,r=O.lexemesRe.exec(R);r;)o+=n(R.substring(t,r.index)),e=c(O,r),e?(M+=e[1],o+=p(e[0],n(r[0]))):o+=n(r[0]),t=O.lexemesRe.lastIndex,r=O.lexemesRe.exec(R);return o+n(R.substr(t))}function h(){var e="string"==typeof O.subLanguage;if(e&&!w[O.subLanguage])return n(R);var t=e?f(O.subLanguage,R,!0,j[O.subLanguage]):d(R,O.subLanguage.length?O.subLanguage:void 0);return O.relevance>0&&(M+=t.relevance),e&&(j[O.subLanguage]=t.top),p(t.language,t.value,!1,!0)}function b(){N+=null!=O.subLanguage?h():g(),R=""}function m(e){N+=e.className?p(e.className,"",!0):"",O=Object.create(e,{parent:{value:O}})}function _(e,n){if(R+=e,null==n)return b(),0;var t=i(n,O);if(t)return t.skip?R+=n:(t.excludeBegin&&(R+=n),b(),t.returnBegin||t.excludeBegin||(R=n)),m(t,n),t.returnBegin?0:n.length;var r=s(O,n);if(r){var o=O;o.skip?R+=n:(o.returnEnd||o.excludeEnd||(R+=n),b(),o.excludeEnd&&(R=n));do{O.className&&(N+=x),O.skip||(M+=O.relevance),O=O.parent}while(O!==r.parent);return r.starts&&m(r.starts,""),o.returnEnd?0:n.length}if(l(n,O))throw new Error('Illegal lexeme "'+n+'" for mode "'+(O.className||"<unnamed>")+'"');return R+=n,n.length||1}var v=E(e);if(!v)throw new Error('Unknown language: "'+e+'"');u(v);var y,O=a||v,j={},N="";for(y=O;y!==v;y=y.parent)y.className&&(N=p(y.className,"",!0)+N);var R="",M=0;try{for(var S,C,P=0;;){if(O.terminators.lastIndex=P,!(S=O.terminators.exec(t)))break;C=_(t.substring(P,S.index),S[0]),P=S.index+C}for(_(t.substr(P)),y=O;y.parent;y=y.parent)y.className&&(N+=x);return{relevance:M,value:N,language:e,top:O}}catch(e){if(e.message&&-1!==e.message.indexOf("Illegal"))return{relevance:0,value:n(t)};throw e}}function d(e,t){t=t||A.languages||j(w);var r={relevance:0,value:n(e)},o=r;return t.filter(E).forEach(function(n){var t=f(n,e,!1);t.language=n,t.relevance>o.relevance&&(o=t),t.relevance>r.relevance&&(o=r,r=t)}),o.language&&(r.second_best=o),r}function p(e){return A.tabReplace||A.useBR?e.replace(S,function(e,n){return A.useBR&&"\n"===e?"<br>":A.tabReplace?n.replace(/\t/g,A.tabReplace):""}):e}function g(e,n,t){var r=n?N[n]:t,o=[e.trim()];return e.match(/\bhljs\b/)||o.push("hljs"),-1===e.indexOf(r)&&o.push(r),o.join(" ").trim()}function h(e){var n,t,r,i,c,u=a(e);o(u)||(A.useBR?(n=document.createElementNS("http://www.w3.org/1999/xhtml","div"),n.innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ \/]*>/g,"\n")):n=e,c=n.textContent,r=u?f(u,c,!0):d(c),t=s(n),t.length&&(i=document.createElementNS("http://www.w3.org/1999/xhtml","div"),i.innerHTML=r.value,r.value=l(t,s(i),c)),r.value=p(r.value),e.innerHTML=r.value,e.className=g(e.className,u,r.language),e.result={language:r.language,re:r.relevance},r.second_best&&(e.second_best={language:r.second_best.language,re:r.second_best.relevance}))}function b(e){A=i(A,e)}function m(){if(!m.called){m.called=!0;var e=document.querySelectorAll("pre code");O.forEach.call(e,h)}}function _(){addEventListener("DOMContentLoaded",m,!1),addEventListener("load",m,!1)}function v(n,t){var r=w[n]=t(e);r.aliases&&r.aliases.forEach(function(e){N[e]=n})}function y(){return j(w)}function E(e){return e=(e||"").toLowerCase(),w[e]||w[N[e]]}var O=[],j=Object.keys,w={},N={},R=/^(no-?highlight|plain|text)$/i,M=/\blang(?:uage)?-([\w-]+)\b/i,S=/((^(<[^>]+>|\t|)+|(?:\n)))/gm,x="</span>",A={classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:void 0};return e.highlight=f,e.highlightAuto=d,e.fixMarkup=p,e.highlightBlock=h,e.configure=b,e.initHighlighting=m,e.initHighlightingOnLoad=_,e.registerLanguage=v,e.listLanguages=y,e.getLanguage=E,e.inherit=i,e.IDENT_RE="[a-zA-Z]\\w*",e.UNDERSCORE_IDENT_RE="[a-zA-Z_]\\w*",e.NUMBER_RE="\\b\\d+(\\.\\d+)?",e.C_NUMBER_RE="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",e.BINARY_NUMBER_RE="\\b(0b[01]+)",e.RE_STARTERS_RE="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",e.BACKSLASH_ESCAPE={begin:"\\\\[\\s\\S]",relevance:0},e.APOS_STRING_MODE={className:"string",begin:"'",end:"'",illegal:"\\n",contains:[e.BACKSLASH_ESCAPE]},e.QUOTE_STRING_MODE={className:"string",begin:'"',end:'"',illegal:"\\n",contains:[e.BACKSLASH_ESCAPE]},e.PHRASAL_WORDS_MODE={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},e.COMMENT=function(n,t,r){var o=e.inherit({className:"comment",begin:n,end:t,contains:[]},r||{});return o.contains.push(e.PHRASAL_WORDS_MODE),o.contains.push({className:"doctag",begin:"(?:TODO|FIXME|NOTE|BUG|XXX):",relevance:0}),o},e.C_LINE_COMMENT_MODE=e.COMMENT("//","$"),e.C_BLOCK_COMMENT_MODE=e.COMMENT("/\\*","\\*/"),e.HASH_COMMENT_MODE=e.COMMENT("#","$"),e.NUMBER_MODE={className:"number",begin:e.NUMBER_RE,relevance:0},e.C_NUMBER_MODE={className:"number",begin:e.C_NUMBER_RE,relevance:0},e.BINARY_NUMBER_MODE={className:"number",begin:e.BINARY_NUMBER_RE,relevance:0},e.CSS_NUMBER_MODE={className:"number",begin:e.NUMBER_RE+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},e.REGEXP_MODE={className:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[e.BACKSLASH_ESCAPE,{begin:/\[/,end:/\]/,relevance:0,contains:[e.BACKSLASH_ESCAPE]}]},e.TITLE_MODE={className:"title",begin:e.IDENT_RE,relevance:0},e.UNDERSCORE_TITLE_MODE={className:"title",begin:e.UNDERSCORE_IDENT_RE,relevance:0},e.METHOD_GUARD={begin:"\\.\\s*"+e.UNDERSCORE_IDENT_RE,relevance:0},e})},413:function(e,n,t){"use strict";e.exports=function(e){var n="[A-Za-z$_][0-9A-Za-z$_]*",t={keyword:"in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await static import from as",literal:"true false null undefined NaN Infinity",built_in:"eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise"},r={className:"number",variants:[{begin:"\\b(0[bB][01]+)"},{begin:"\\b(0[oO][0-7]+)"},{begin:e.C_NUMBER_RE}],relevance:0},o={className:"subst",begin:"\\$\\{",end:"\\}",keywords:t,contains:[]},a={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,o]};o.contains=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,a,r,e.REGEXP_MODE];var i=o.contains.concat([e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]);return{aliases:["js","jsx"],keywords:t,contains:[{className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},{className:"meta",begin:/^#!/,end:/$/},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,a,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,r,{begin:/[{,]\s*/,relevance:0,contains:[{begin:n+"\\s*:",returnBegin:!0,relevance:0,contains:[{className:"attr",begin:n,relevance:0}]}]},{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.REGEXP_MODE,{className:"function",begin:"(\\(.*?\\)|"+n+")\\s*=>",returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:n},{begin:/\(\s*\)/},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:t,contains:i}]}]},{begin:/</,end:/(\/\w+|\w+\/)>/,subLanguage:"xml",contains:[{begin:/<\w+\s*\/>/,skip:!0},{begin:/<\w+/,end:/(\/\w+|\w+\/)>/,skip:!0,contains:[{begin:/<\w+\s*\/>/,skip:!0},"self"]}]}],relevance:0},{className:"function",beginKeywords:"function",end:/\{/,excludeEnd:!0,contains:[e.inherit(e.TITLE_MODE,{begin:n}),{className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,contains:i}],illegal:/\[|%/},{begin:/\$[(.]/},e.METHOD_GUARD,{className:"class",beginKeywords:"class",end:/[{;=]/,excludeEnd:!0,illegal:/[:"\[\]]/,contains:[{beginKeywords:"extends"},e.UNDERSCORE_TITLE_MODE]},{beginKeywords:"constructor",end:/\{/,excludeEnd:!0}],illegal:/#(?!!)/}}},414:function(e,n,t){var r=t(415);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0};o.transform=void 0;t(34)(r,o);r.locals&&(e.exports=r.locals)},415:function(e,n,t){n=e.exports=t(33)(!1),n.push([e.i,"/*\n\nMonokai Sublime style. Derived from Monokai by noformnocontent http://nn.mit-license.org/\n\n*/\n.hljs {\n  display: block;\n  overflow-x: auto;\n  padding: 0.5em;\n  background: #23241f; }\n\n.hljs,\n.hljs-tag,\n.hljs-subst {\n  color: #f8f8f2; }\n\n.hljs-strong,\n.hljs-emphasis {\n  color: #a8a8a2; }\n\n.hljs-bullet,\n.hljs-quote,\n.hljs-number,\n.hljs-regexp,\n.hljs-literal,\n.hljs-link {\n  color: #ae81ff; }\n\n.hljs-code,\n.hljs-title,\n.hljs-section,\n.hljs-selector-class {\n  color: #a6e22e; }\n\n.hljs-strong {\n  font-weight: bold; }\n\n.hljs-emphasis {\n  font-style: italic; }\n\n.hljs-keyword,\n.hljs-selector-tag,\n.hljs-name,\n.hljs-attr {\n  color: #f92672; }\n\n.hljs-symbol,\n.hljs-attribute {\n  color: #66d9ef; }\n\n.hljs-params,\n.hljs-class .hljs-title {\n  color: #f8f8f2; }\n\n.hljs-string,\n.hljs-type,\n.hljs-built_in,\n.hljs-builtin-name,\n.hljs-selector-id,\n.hljs-selector-attr,\n.hljs-selector-pseudo,\n.hljs-addition,\n.hljs-variable,\n.hljs-template-variable {\n  color: #e6db74; }\n\n.hljs-comment,\n.hljs-deletion,\n.hljs-meta {\n  color: #75715e; }\n",""])}});