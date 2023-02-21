import { refs } from './refs';
import onResize from './resize';

let favoritesInLocalStorage = [];
const ICON_HEART = '/sprite.f14d31f7.svg#icon-heart';

refs.galleryList.addEventListener('click', onBtnFavoriteClick);

function checkFavorite() {
  if (JSON.parse(localStorage.getItem('favoritesNews')) === null) {
    favoritesInLocalStorage = [];
    return;
  }
  favoritesInLocalStorage = JSON.parse(localStorage.getItem('favoritesNews'));
}

checkFavorite();

function onBtnFavoriteClick(e) {
  const btn = e.target.closest(`.gallery__favorite__btn`);
  if (!btn) return;
  checkFavorite();
  let title = btn.parentNode.parentNode.childNodes[3].textContent;
  // console.log(title);
  if (!btn.classList.contains('is-hidden')) {
    btn.classList.add('is-hidden');

    addToFavorite(btn);
    return;
  }

  for (let i = 0; i < favoritesInLocalStorage.length; i += 1) {
    if (favoritesInLocalStorage[i].title === title) {
      favoritesInLocalStorage.splice(i, 1);
    }
  }
  localStorage.setItem(
    'favoritesNews',
    JSON.stringify(favoritesInLocalStorage)
  );
}

function addToFavorite(btn) {
  const favoriteData = {
    title: btn.parentNode.parentNode.childNodes[3].textContent,
    img: btn.parentNode.childNodes[3].attributes.src.nodeValue,
    category: btn.parentNode.childNodes[1].innerText,
    description: btn.parentNode.parentNode.childNodes[5].textContent,
    date: btn.parentNode.parentNode.lastElementChild.children[0].textContent,
    favorite: 'true',
    source:
      btn.parentNode.parentNode.lastElementChild.children[1].attributes[0]
        .value,
  };

  for (let i = 0; i < favoritesInLocalStorage.length; i += 1) {
    if (favoritesInLocalStorage[i].title === favoriteData.title) return;
  }

  favoritesInLocalStorage.push(favoriteData);

  localStorage.setItem(
    'favoritesNews',
    JSON.stringify(favoritesInLocalStorage)
  );
  console.log(favoritesInLocalStorage);
}

// favoritesInLocalStorage.map(el => {
//   renderFavorites(refs.favoriteGalleryList, createMarkup(el));
// });

// function renderFavorites(element, constMarkup) {
//   element.insertAdjacentHTML('beforeend', constMarkup);
// }

// function createMarkup({ title, img, description, source, category, date }) {
//   return `<li class="gallery__item">
//     <article class="gallery__article">
//               <div class="gallery__thumb"> <p class="gallery__category">${category}</p>
//                 <img class="gallery__img" src="${img}" alt=""/>
//                  <button type="button" class="gallery__favorite__btn ">
//                          <span class="favorite__btn-span ">Add to favorite
//                            <svg width='16' height='16'><use href="}"></use>
//                     </svg> </span>
//                     <span class="favorite__btn-span is-hidden">Remove from favorite
//                                     <svg width='16' height='16'><use href=""></use>
//                     </svg></span>
//                           </button>
//                     </div>
//                     <h3 class="gallery__header">${title}</h3>
//                     <p class="gallery__text">${description}</p>
//                     <div class="gallery__item-bottom_wrap">
//                         <span class="gallery__date">${date}</span>
//                         <a href="${source}" target="_blank" rel="noreferrer noopener" class="gallery__link">Read more</a>
//                     </div>
//                 </article>
//              </li>`;
// }
