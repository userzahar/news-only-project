!function(){function t(t){return t&&t.__esModule?t.default:t}function e(t,e,n,r){Object.defineProperty(t,e,{get:n,set:r,enumerable:!0,configurable:!0})}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},a={},o=n.parcelRequired7c6;null==o&&((o=function(t){if(t in r)return r[t].exports;if(t in a){var e=a[t];delete a[t];var n={id:t,exports:{}};return r[t]=n,e.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){a[t]=e},n.parcelRequired7c6=o),o.register("8slrw",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t){if(Array.isArray(t))return t}})),o.register("7AJDX",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}})),o.register("ifqQW",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),o.register("auk6i",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e){if(!t)return;if("string"==typeof t)return r.default(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r.default(t,e)};var n,r=(n=o("8NIkP"))&&n.__esModule?n:{default:n}})),o.register("8NIkP",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}})),o.register("31XKK",(function(n,r){e(n.exports,"mqHandler",(function(){return y}));var a=o("1t1Wn"),i=o("kiL67"),c={mobile:window.matchMedia("(min-width: 300px)"),tablet:window.matchMedia("(min-width: 768px)"),desktop:window.matchMedia("(min-width: 1280px)")},s=!0,l=!1,u=void 0;try{for(var d,f=Object.entries(c)[Symbol.iterator]();!(s=(d=f.next()).done);s=!0){var m=t(a)(d.value,2),g=(m[0],m[1]);g&&g.addEventListener("change",y)}}catch(t){l=!0,u=t}finally{try{s||null==f.return||f.return()}finally{if(l)throw u}}function y(){var e=null,n=[],r=!0,o=!1,s=void 0;try{for(var l,u=Object.entries(c)[Symbol.iterator]();!(r=(l=u.next()).done);r=!0){var d=t(a)(l.value,2),f=d[0],m=d[1];!m||m.matches?e=f:f!==e&&n.push(f)}}catch(t){o=!0,s=t}finally{try{r||null==u.return||u.return()}finally{if(o)throw s}}(0,i.default)(e,n)}})),o.register("1t1Wn",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e){return n.default(t)||r.default(t,e)||i.default(t,e)||a.default()};var n=c(o("8slrw")),r=c(o("7AJDX")),a=c(o("ifqQW")),i=c(o("auk6i"));function c(t){return t&&t.__esModule?t:{default:t}}})),o.register("kiL67",(function(t,n){e(t.exports,"default",(function(){return i}));var r=o("4Nugj"),a=o("8lIKl");function i(t,e){r.refs.listOfCatagories.classList.add("catagories__list-".concat(t));var n=!0,o=!1,i=void 0;try{for(var c,s=e[Symbol.iterator]();!(n=(c=s.next()).done);n=!0)sizeRemove=c.value,r.refs.listOfCatagories.classList.remove("catagories__list-".concat(sizeRemove))}catch(t){o=!0,i=t}finally{try{n||null==s.return||s.return()}finally{if(o)throw i}}r.refs.catagories.classList.add("catagories-".concat(t));var l=!0,u=!1,d=void 0;try{for(var f,m=e[Symbol.iterator]();!(l=(f=m.next()).done);l=!0)sizeRemove=f.value,r.refs.catagories.classList.remove("catagories-".concat(sizeRemove))}catch(t){u=!0,d=t}finally{try{l||null==m.return||m.return()}finally{if(u)throw d}}r.refs.name.classList.add("catagories__btn-name-".concat(t));var g=!0,y=!1,b=void 0;try{for(var _,v=e[Symbol.iterator]();!(g=(_=v.next()).done);g=!0)sizeRemove=_.value,r.refs.name.classList.remove("catagories__btn-name-".concat(sizeRemove))}catch(t){y=!0,b=t}finally{try{g||null==v.return||v.return()}finally{if(y)throw b}}r.refs.btnCatagories.classList.add("catagories__btn-".concat(t));var p=!0,h=!1,L=void 0;try{for(var x,S=e[Symbol.iterator]();!(p=(x=S.next()).done);p=!0)sizeRemove=x.value,r.refs.btnCatagories.classList.remove("catagories__btn-".concat(sizeRemove))}catch(t){h=!0,L=t}finally{try{p||null==S.return||S.return()}finally{if(h)throw L}}var w=!0,k=!1,q=void 0;try{for(var M,j=e[Symbol.iterator]();!(w=(M=j.next()).done);w=!0)sizeRemove=M.value,r.refs.galleryList.classList.remove("gallery__list-".concat(sizeRemove)),r.refs.headerContainer.classList.remove("header-container-".concat(sizeRemove)),r.refs.logo.classList.remove("logo-".concat(sizeRemove))}catch(t){k=!0,q=t}finally{try{w||null==j.return||j.return()}finally{if(k)throw q}}r.refs.logo.classList.add("logo-".concat(t)),r.refs.headerContainer.classList.add("header-container-".concat(t)),r.refs.galleryList.classList.add("gallery__list-".concat(t)),r.refs.container.forEach((function(n){var r=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done);r=!0)sizeRemove=i.value,n.classList.remove("container-".concat(sizeRemove))}catch(t){a=!0,o=t}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}n.classList.add("container-".concat(t))})),document.querySelectorAll(".gallery__item").forEach((function(n){var r=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done);r=!0)sizeRemove=i.value,n.classList.remove("gallery__item-".concat(sizeRemove))}catch(t){a=!0,o=t}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}n.classList.add("gallery__item-".concat(t))})),"mobile"===t&&(0,a.categoriesForMobile)(),"tablet"===t&&(0,a.categoriesForTablet)(),"desktop"===t&&(0,a.categoriesForDesktop)()}})),o.register("4Nugj",(function(n,r){e(n.exports,"refs",(function(){return c}));var a,i=o("hKHmD"),c=(a={item:document.querySelectorAll(".gallery__item"),galleryList:document.querySelector(".gallery__list"),catagories:document.querySelector(".catagories"),listOfCatagories:document.querySelector(".catagories__list"),btnCatagories:document.querySelector(".catagories__btn"),name:document.querySelector(".catagories__btn-name"),catagoriesItem:document.querySelector(".catagories__item-container")},t(i)(a,"item",document.querySelectorAll(".gallery__list li")),t(i)(a,"galleryList",document.querySelector(".gallery__list")),t(i)(a,"container",document.querySelectorAll(".container")),t(i)(a,"headerContainer",document.querySelector(".header-container")),t(i)(a,"logo",document.querySelector(".logo")),t(i)(a,"paginationContainer",document.getElementById("pagination")),a)})),o.register("hKHmD",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e,n){e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n;return t}})),o.register("8lIKl",(function(n,r){e(n.exports,"categoriesForMobile",(function(){return s})),e(n.exports,"categoriesForTablet",(function(){return l})),e(n.exports,"categoriesForDesktop",(function(){return u}));var a=o("q7ZX2"),i=o("4Nugj"),c=fetch("https://api.nytimes.com/svc/news/v3/content/section-list.json?api-key=HunERBoFJkGno2ChxwL9g20UbJbd8EGL").then((function(t){return t.json()})).then((function(t){return t.results}));function s(){i.refs.catagoriesItem.innerHTML="",c.then((function(t){var e=t.reduce((function(t,e){return t+(n=e.section,"<li class='catagories__item'><button data-name=\"".concat(n,'" class="catagory__btn">').concat(n,"</button></li>"));var n}),"");i.refs.name.textContent="Categories",i.refs.listOfCatagories.innerHTML=e}))}function l(){i.refs.catagoriesItem.innerHTML="",c.then((function(e){var n=t(a)(e),r=n[0],o=n[1],c=n[2],s=n[3],l=n.slice(4),u='\n    \n    <li class=\'catagories__item-tab\'><button type="button" data-name="'.concat(r.section,'" class="catagory__btn-tab">').concat(r.section,'</button></li>\n    <li class=\'catagories__item-tab\'><button type="button" data-name="').concat(o.section,'" class="catagory__btn-tab">').concat(o.section,'</button></li>\n    <li class=\'catagories__item-tab\'><button type="button" data-name="').concat(c.section,'" class="catagory__btn-tab">').concat(c.section,'</button></li>\n    <li class=\'catagories__item-tab\'><button type="button" data-name="').concat(s.section,'" class="catagory__btn-tab">').concat(s.section,"</button></li>\n    \n    "),d="".concat(l.map((function(t){return' <button type="button" data-name="'.concat(t.section,'" class="catagory__btn-list-tab">').concat(t.section,"</button>")})).join(""));i.refs.name.textContent="Others",i.refs.catagoriesItem.insertAdjacentHTML("afterbegin",u),i.refs.listOfCatagories.innerHTML=d}))}function u(){i.refs.catagoriesItem.innerHTML="",c.then((function(e){var n=t(a)(e),r=n[0],o=n[1],c=n[2],s=n[3],l=n[4],u=n[5],d=n.slice(6),f='\n    \n    <li class=\'catagories__item-des\'><button type="button" data-name="'.concat(r.section,'" class="catagory__btn-tab">').concat(r.section,'</button></li>\n    <li class=\'catagories__item-des\'><button type="button" data-name="').concat(o.section,'" class="catagory__btn-tab">').concat(o.section,'</button></li>\n    <li class=\'catagories__item-des\'><button type="button" data-name="').concat(c.section,'" class="catagory__btn-tab">').concat(c.section,'</button></li>\n    <li class=\'catagories__item-des\'><button type="button" data-name="').concat(s.section,'" class="catagory__btn-tab">').concat(s.section,'</button></li>\n    <li class=\'catagories__item-des\'><button type="button" data-name="').concat(l.section,'" class="catagory__btn-tab">').concat(l.section,'</button></li>\n     <li class=\'catagories__item-des\'><button type="button" data-name="').concat(u.section,'" class="catagory__btn-tab">').concat(u.section,"</button></li>\n    \n     "),m="".concat(d.map((function(t){return'<button type="button" data-name="'.concat(t.section,'" class="catagory__btn-list-tab">').concat(t.section,"</button>\n          ")})).join(""));i.refs.name.textContent="Others",i.refs.catagoriesItem.insertAdjacentHTML("afterbegin",f),i.refs.listOfCatagories.innerHTML=m}))}function d(t){if("BUTTON"===t.target.nodeName){var e=t.target.dataset.name,n=t.target;return console.log(n),n.classList.toggle("btn-color"),fetch("https://api.nytimes.com/svc/news/v3/content/nyt/".concat(e,".json?api-key=HunERBoFJkGno2ChxwL9g20UbJbd8EGL")).then((function(t){return t.json()}))}}i.refs.btnCatagories.addEventListener("click",(function(){var t="true"===i.refs.btnCatagories.getAttribute("aria-expanded")||!1;i.refs.btnCatagories.classList.toggle("is-open"),i.refs.btnCatagories.setAttribute("aria-expanded",!t),i.refs.btnCatagories.classList.toggle("btn-color"),i.refs.listOfCatagories.classList.toggle("is-open")})),i.refs.catagoriesItem.addEventListener("click",d),i.refs.listOfCatagories.addEventListener("click",d)})),o.register("q7ZX2",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t){return n.default(t)||r.default(t)||c.default(t,i)||a.default()};var n=s(o("8slrw")),r=s(o("7AJDX")),a=s(o("ifqQW")),c=s(o("auk6i"));function s(t){return t&&t.__esModule?t:{default:t}}})),o("kiL67"),o("8lIKl");var c=document.querySelector(".switch-checkbox"),s=document.querySelector("body"),l=document.querySelector(".theme__dark"),u=document.querySelector(".theme__light");c.addEventListener("click",(function(){s.classList.toggle("darkMode"),l.classList.toggle("opacityForDark"),u.classList.toggle("opacityForDark"),"dark"!==localStorage.getItem("theme")?localStorage.setItem("theme","dark"):localStorage.removeItem("theme")})),function(){try{"dark"===localStorage.getItem("theme")&&(s.classList.add("darkMode"),c.checked=!0)}catch(t){}}();document.querySelector(".list-news");var d=document.querySelector(".js-menu-container"),f=document.querySelector(".js-open-menu"),m=document.querySelector(".js-close-menu");document.querySelector(".theme"),document.querySelector(".search-field__btn"),document.querySelector(".news-loader__container.container");function g(){d.classList.toggle("open-menu");var t="true"===f.getAttribute("aria-expanded")||!1;f.setAttribute("aria-expanded",!t),bodyScrollLock[t?"enableBodyScroll":"disableBodyScroll"](document.body)}f.addEventListener("click",g),m.addEventListener("click",g);var y=o("31XKK");window.addEventListener("DOMContentLoaded",(function(t){return(0,y.mqHandler)()}))}();
//# sourceMappingURL=read.7dcc1130.js.map
