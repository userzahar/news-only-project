const e={item:document.querySelectorAll(".gallery__item"),galleryList:document.querySelector(".gallery__list")};const t=window.matchMedia("screen and (min-width: 768px) and (max-width: 1200px)");console.log(t),t.addEventListener("change",(function(t){t.matches?e.item.forEach((e=>{e.classList.add("gallery__item-tablet"),e.classList.remove("gallery__item-desktop")})):e.item.forEach((e=>{e.classList.remove("gallery__item-tablet"),e.classList.add("gallery__item-desktop")}))}));
//# sourceMappingURL=favorite.3512395a.js.map
