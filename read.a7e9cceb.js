!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},n=t.parcelRequired7c6;null==n&&((n=function(e){if(e in r)return r[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){o[e]=t},t.parcelRequired7c6=n),n.register("8slrw",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return e}})),n.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),n.register("ifqQW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),n.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return o.default(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o.default(e,t)};var r,o=(r=n("8NIkP"))&&r.__esModule?r:{default:r}})),n.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}}));var l={};Object.defineProperty(l,"__esModule",{value:!0}),l.default=function(e,t){return a.default(e)||i.default(e,t)||c.default(e,t)||u.default()};var a=d(n("8slrw")),i=d(n("7AJDX")),u=d(n("ifqQW")),c=d(n("auk6i"));function d(e){return e&&e.__esModule?e:{default:e}}var s={item:document.querySelectorAll(".gallery__item"),galleryList:document.querySelector(".gallery__list")};function f(e,t){s.item.forEach((function(r){var o=!0,n=!1,l=void 0;try{for(var a,i=t[Symbol.iterator]();!(o=(a=i.next()).done);o=!0)sizeRemove=a.value,r.classList.remove("gallery__item-".concat(sizeRemove))}catch(e){n=!0,l=e}finally{try{o||null==i.return||i.return()}finally{if(n)throw l}}r.classList.add("gallery__item-".concat(e))}))}var y=document.querySelector(".switch-checkbox"),m=document.querySelector("body"),p=document.querySelector(".theme__dark"),v=document.querySelector(".theme__light");y.addEventListener("click",(function(){m.classList.toggle("darkMode"),p.classList.toggle("opacityForDark"),v.classList.toggle("opacityForDark"),"dark"!==localStorage.getItem("theme")?localStorage.setItem("theme","dark"):localStorage.removeItem("theme")})),function(){try{"dark"===localStorage.getItem("theme")&&(m.classList.add("darkMode"),y.checked=!0)}catch(e){}}();document.querySelector(".list-news"),document.querySelector(".js-menu-container"),document.querySelector(".js-open-menu"),document.querySelector(".js-close-menu"),document.querySelector(".theme"),document.querySelector(".search-field__btn"),document.querySelector(".news-loader__container.container");var h={mobile:window.matchMedia("(min-width: 480px)"),tablet:window.matchMedia("(min-width: 768px)"),desktop:window.matchMedia("(min-width: 1200px)")},_=!0,g=!1,b=void 0;try{for(var w,S=Object.entries(h)[Symbol.iterator]();!(_=(w=S.next()).done);_=!0){var x=e(l)(w.value,2),q=(x[0],x[1]);q&&q.addEventListener("change",k)}}catch(e){g=!0,b=e}finally{try{_||null==S.return||S.return()}finally{if(g)throw b}}function k(){var t=null,r=[],o=!0,n=!1,a=void 0;try{for(var i,u=Object.entries(h)[Symbol.iterator]();!(o=(i=u.next()).done);o=!0){var c=e(l)(i.value,2),d=c[0],s=c[1];!s||s.matches?t=d:d!==t&&r.push(d)}}catch(e){n=!0,a=e}finally{try{o||null==u.return||u.return()}finally{if(n)throw a}}f(t,r)}}();
//# sourceMappingURL=read.a7e9cceb.js.map