const t={item:document.querySelectorAll(".gallery__item"),galleryList:document.querySelector(".gallery__list"),catagories:document.querySelector(".catagories"),listOfCatagories:document.querySelector(".catagories__list"),btnCatagories:document.querySelector(".catagories__btn"),name:document.querySelector(".catagories__btn-name"),catagoriesItem:document.querySelector(".catagories__item-container"),item:document.querySelectorAll(".gallery__list li"),galleryList:document.querySelector(".gallery__list"),container:document.querySelectorAll(".container"),headerContainer:document.querySelector(".header-container"),logo:document.querySelector(".logo"),paginationContainer:document.getElementById("pagination")},e=fetch("https://api.nytimes.com/svc/news/v3/content/section-list.json?api-key=HunERBoFJkGno2ChxwL9g20UbJbd8EGL").then((t=>t.json())).then((t=>t.results));function a(t){if("BUTTON"!==t.target.nodeName)return;const e=t.target.dataset.name,a=t.target;return console.log(a),a.classList.toggle("btn-color"),fetch(`https://api.nytimes.com/svc/news/v3/content/nyt/${e}.json?api-key=HunERBoFJkGno2ChxwL9g20UbJbd8EGL`).then((t=>t.json()))}function o(a,o){for(sizeRemove of(t.listOfCatagories.classList.add(`catagories__list-${a}`),o))t.listOfCatagories.classList.remove(`catagories__list-${sizeRemove}`);for(sizeRemove of(t.catagories.classList.add(`catagories-${a}`),o))t.catagories.classList.remove(`catagories-${sizeRemove}`);for(sizeRemove of(t.name.classList.add(`catagories__btn-name-${a}`),o))t.name.classList.remove(`catagories__btn-name-${sizeRemove}`);for(sizeRemove of(t.btnCatagories.classList.add(`catagories__btn-${a}`),o))t.btnCatagories.classList.remove(`catagories__btn-${sizeRemove}`);for(sizeRemove of o)t.galleryList.classList.remove(`gallery__list-${sizeRemove}`),t.headerContainer.classList.remove(`header-container-${sizeRemove}`),t.logo.classList.remove(`logo-${sizeRemove}`);t.logo.classList.add(`logo-${a}`),t.headerContainer.classList.add(`header-container-${a}`),t.galleryList.classList.add(`gallery__list-${a}`),t.container.forEach((t=>{for(sizeRemove of o)t.classList.remove(`container-${sizeRemove}`);t.classList.add(`container-${a}`)})),document.querySelectorAll(".gallery__item").forEach((t=>{for(sizeRemove of o)t.classList.remove(`gallery__item-${sizeRemove}`);t.classList.add(`gallery__item-${a}`)})),"mobile"===a&&(t.catagoriesItem.innerHTML="",e.then((e=>{const a=e.reduce(((t,e)=>t+function({section:t}){return`<li class='catagories__item'><button data-name="${t}" class="catagory__btn">${t}</button></li>`}(e)),"");t.name.textContent="Categories",t.listOfCatagories.innerHTML=a}))),"tablet"===a&&(t.catagoriesItem.innerHTML="",e.then((e=>{const[a,o,n,s,...i]=e,c=`\n    \n    <li class='catagories__item-tab'><button type="button" data-name="${a.section}" class="catagory__btn-tab">${a.section}</button></li>\n    <li class='catagories__item-tab'><button type="button" data-name="${o.section}" class="catagory__btn-tab">${o.section}</button></li>\n    <li class='catagories__item-tab'><button type="button" data-name="${n.section}" class="catagory__btn-tab">${n.section}</button></li>\n    <li class='catagories__item-tab'><button type="button" data-name="${s.section}" class="catagory__btn-tab">${s.section}</button></li>\n    \n    `,r=`${i.map((t=>` <button type="button" data-name="${t.section}" class="catagory__btn-list-tab">${t.section}</button>`)).join("")}`;t.name.textContent="Others",t.catagoriesItem.insertAdjacentHTML("afterbegin",c),t.listOfCatagories.innerHTML=r}))),"desktop"===a&&(t.catagoriesItem.innerHTML="",e.then((e=>{const[a,o,n,s,i,c,...r]=e,l=`\n    \n    <li class='catagories__item-des'><button type="button" data-name="${a.section}" class="catagory__btn-tab">${a.section}</button></li>\n    <li class='catagories__item-des'><button type="button" data-name="${o.section}" class="catagory__btn-tab">${o.section}</button></li>\n    <li class='catagories__item-des'><button type="button" data-name="${n.section}" class="catagory__btn-tab">${n.section}</button></li>\n    <li class='catagories__item-des'><button type="button" data-name="${s.section}" class="catagory__btn-tab">${s.section}</button></li>\n    <li class='catagories__item-des'><button type="button" data-name="${i.section}" class="catagory__btn-tab">${i.section}</button></li>\n     <li class='catagories__item-des'><button type="button" data-name="${c.section}" class="catagory__btn-tab">${c.section}</button></li>\n    \n     `,d=`${r.map((t=>`<button type="button" data-name="${t.section}" class="catagory__btn-list-tab">${t.section}</button>\n          `)).join("")}`;t.name.textContent="Others",t.catagoriesItem.insertAdjacentHTML("afterbegin",l),t.listOfCatagories.innerHTML=d})))}t.btnCatagories.addEventListener("click",(function(){const e="true"===t.btnCatagories.getAttribute("aria-expanded")||!1;t.btnCatagories.classList.toggle("is-open"),t.btnCatagories.setAttribute("aria-expanded",!e),t.btnCatagories.classList.toggle("btn-color"),t.listOfCatagories.classList.toggle("is-open")})),t.catagoriesItem.addEventListener("click",a),t.listOfCatagories.addEventListener("click",a);const n=document.querySelector(".switch-checkbox"),s=document.querySelector("body"),i=document.querySelector(".theme__dark"),c=document.querySelector(".theme__light");n.addEventListener("click",(function(){s.classList.toggle("darkMode"),i.classList.toggle("opacityForDark"),c.classList.toggle("opacityForDark"),"dark"!==localStorage.getItem("theme")?localStorage.setItem("theme","dark"):localStorage.removeItem("theme")})),function(){try{"dark"===localStorage.getItem("theme")&&(s.classList.add("darkMode"),n.checked=!0)}catch(t){}}();document.querySelector(".list-news");const r=document.querySelector(".js-menu-container"),l=document.querySelector(".js-open-menu"),d=document.querySelector(".js-close-menu");document.querySelector(".theme"),document.querySelector(".search-field__btn"),document.querySelector(".news-loader__container.container");function m(){r.classList.toggle("open-menu");const t="true"===l.getAttribute("aria-expanded")||!1;l.setAttribute("aria-expanded",!t);bodyScrollLock[t?"enableBodyScroll":"disableBodyScroll"](document.body)}l.addEventListener("click",m),d.addEventListener("click",m),window.addEventListener("DOMContentLoaded",(t=>u()));const g={mobile:window.matchMedia("(min-width: 300px)"),tablet:window.matchMedia("(min-width: 768px)"),desktop:window.matchMedia("(min-width: 1280px)")};for(let[t,e]of Object.entries(g))e&&e.addEventListener("change",u);function u(){let t=null,e=[];for(let[a,o]of Object.entries(g))!o||o.matches?t=a:a!==t&&e.push(a);o(t,e)}
//# sourceMappingURL=read.73b5ecd1.js.map
