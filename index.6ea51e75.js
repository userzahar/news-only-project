!function(){function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=e.parcelRequired7c6;null==o&&((o=function(t){if(t in r)return r[t].exports;if(t in n){var e=n[t];delete n[t];var o={id:t,exports:{}};return r[t]=o,e.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(t,e){n[t]=e},e.parcelRequired7c6=o),o("31XKK"),o("4Nugj");var a={};function i(t,e,r,n,o,a,i){try{var c=t[a](i),l=c.value}catch(t){return void r(t)}c.done?e(l):Promise.resolve(l).then(n,o)}Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function c(t){i(a,n,o,c,l,"next",t)}function l(t){i(a,n,o,c,l,"throw",t)}c(void 0)}))}};var c=o("1t1Wn"),l={},s=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof g?e:g,a=Object.create(o.prototype),i=new T(n||[]);return a._invoke=function(t,e,r){var n=h;return function(o,a){if(n===p)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw a;return P()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=j(i,r);if(c){if(c===v)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===h)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var l=u(t,e,r);if("normal"===l.type){if(n=r.done?d:f,l.arg===v)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n=d,r.method="throw",r.arg=l.arg)}}}(t,r,i),a}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var h="suspendedStart",f="suspendedYield",p="executing",d="completed",v={};function g(){}function y(){}function m(){}var w={};l(w,a,(function(){return this}));var _=Object.getPrototypeOf,b=_&&_(_(F([])));b&&b!==r&&n.call(b,a)&&(w=b);var x=m.prototype=g.prototype=Object.create(w);function E(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function r(o,a,i,c){var l=u(t[o],t,a);if("throw"!==l.type){var s=l.arg,h=s.value;return h&&"object"==typeof h&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(h).then((function(t){s.value=t,i(s)}),(function(t){return r("throw",t,i,c)}))}c(l.arg)}var o;this._invoke=function(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}}function j(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,j(t,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=u(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,v;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function F(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:P}}function P(){return{value:e,done:!0}}return y.prototype=m,l(x,"constructor",m),l(m,"constructor",y),y.displayName=l(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,l(t,c,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},E(L.prototype),l(L.prototype,i,(function(){return this})),t.AsyncIterator=L,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new L(s(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},E(x),l(x,c,"Generator"),l(x,a,(function(){return this})),l(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=F,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(k),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var l=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(l&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:F(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},t}(l);try{regeneratorRuntime=s}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=s:Function("r","regeneratorRuntime = r")(s)}var u="https://api.nytimes.com",h="TSw2QdOoFucel7ybh9h7kC4obHmkxxGl";function f(t){return p.apply(this,arguments)}function p(){return p=t(a)(t(l).mark((function e(r){var n,o,a,i,s=arguments;return t(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=s.length>1&&void 0!==s[1]?s[1]:{},o=Object.entries(n).map((function(e){var r=t(c)(e,2),n=r[0],o=r[1];return"".concat(n,"=").concat(o)})).join("&"),a="".concat(u).concat(r,"?").concat(o,"&api-key=").concat(h),e.prev=3,e.next=6,fetch(a);case 6:if((i=e.sent).ok){e.next=9;break}throw new Error("Failed to fetch data from ".concat(a));case 9:return e.next=11,i.json();case 11:return e.abrupt("return",e.sent);case 14:throw e.prev=14,e.t0=e.catch(3),console.error(e.t0),new Error("Failed to fetch data from ".concat(a));case 18:case"end":return e.stop()}}),e,null,[[3,14]])}))),p.apply(this,arguments)}var d=document.getElementById("pagination");var v=o("31XKK"),g=0,y=0,m={},w='<li class="gallery__item">'.concat('<div class="weather">\n<div class="weather_wrap">\n<p class="weather_degree">23&deg</p>\n<div class="weather_part">\n<p class="weather_character gallery__text">Sunny</p>\n<button type="button" class="weather_location"><p class="weather_country"></p>West Jakarta</p></button>\n</div>\n</div>\n<img src="../images/Sun.png" width="121" class="weather_image">\n<p class="weather_character alighn">Mon<br>\n21 Jan 2021</p>\n<button type="button" class="weather_week"><p class="">weather for week</p></button>\n</div>',"</li>"),_=document.querySelector(".gallery__list");function b(t,e){var r;y=(g=8*(e-1))+8,r=E,new tui.Pagination(d,{totalItems:r,itemsPerPage:1,visiblePages:3}).on("beforeMove",(function(t){var e=t.page;x(),b(m,e)}));var n=t.map((function(t){return'<li class="gallery__item">\n                     <div class="gallery__thumb"> <p class="gallery__category">Job searching</p>\n                      <img class="gallery__img" src="'.concat(t.image,'" alt="').concat(t.alt,"\"/>\n                      <div class='gallery__favorite'><p>Add to favorite</p>\n                      <button type=\"button\"></button>\n                      <svg width='16' height='16'><use href=\"").concat("/sprite.f14d31f7.svg#icon-heart",'"></use>\n                      </svg></div></div>\n                      <h3 class="gallery__header">').concat(t.title,'</h3>\n                      <p class="gallery__text">').concat(t.descr,'</p>\n                      <div class="gallery__item-bottom_wrap">\n                          <span class="gallery__date">').concat(t.date,'</span>\n                          <a href="').concat(t.source,'" target="_blank" rel="noreferrer noopener" class="gallery__link">Read more</a>\n                      </div>\n                  </li>')})).slice(g,y);n.splice(2,0,w);var o=n.join("");console.log("BEFORE"),_.insertAdjacentHTML("beforeend",o),(0,v.mqHandler)()}function x(){_.innerHTML=""}var E=0,L=document.querySelector(".search-field"),j=document.querySelector("#search-field__input");L.addEventListener("submit",(function(t){t.preventDefault(),x(),e=O,f("/svc/search/v2/articlesearch.json",{q:e,page:"1"}).then((function(t){var e,r;totalItems=t.response.docs.length,E=Math.ceil(t.response.docs.length/8),t.response.docs.length,e=t.response.docs,r=e.map((function(t){var e=t.abstract.length>120?t.abstract.slice(0,119)+"...":t.abstract,r=new Date(t.pub_date),n=(new Intl.DateTimeFormat).format(r),o=t.headline.main.length>50?t.headline.main.slice(0,49)+"...":t.headline.main,a=t.web_url,i=t.multimedia;return{descr:e,date:n,title:o,source:a,image:0===i.length?"https://t3.ftcdn.net/jpg/04/62/93/66/360_F_462936689_BpEEcxfgMuYPfTaIAOC1tCDurmsno7Sp.jpg":"https://static01.nyt.com/".concat(i[0].url),alt:"New`s image"}})),b(m=r,1)}));var e})),j.addEventListener("input",(function(t){O=t.target.value.trim()})),f("/svc/mostpopular/v2/viewed/1.json",{}).then((function(t){var e,r;totalItems=t.results.length,E=Math.ceil(t.results.length/8),e=t.results,r=e.map((function(t){var e=t.abstract.length>120?t.abstract.slice(0,119)+"...":t.abstract,r=new Date(t.published_date);return{descr:e,date:(new Intl.DateTimeFormat).format(r),title:t.title.length>50?t.title.slice(0,49)+"...":t.title,source:t.url,image:0===t.media.length?"https://t3.ftcdn.net/jpg/04/62/93/66/360_F_462936689_BpEEcxfgMuYPfTaIAOC1tCDurmsno7Sp.jpg":t.media[0]["media-metadata"][2].url,alt:0===t.media.length?"Image is no avalible":t.media[0].caption}})),b(m=r,1)})).catch((function(t){console.error(t)}));var O=""}();
//# sourceMappingURL=index.6ea51e75.js.map
