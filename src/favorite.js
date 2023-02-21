import { refs } from './js/refs';
import { favoritesInLocalStorage } from './js/localStorageFavorite';
console.log(favoritesInLocalStorage);

function renderFavorites(element, constMarkup) {
  element.insertAdjacentHTML('beforeend', constMarkup);
}

function createMarkup({ title, img, description, source, category, date }) {
  return `<li class="gallery__item">
    <article class="gallery__article">
              <div class="gallery__thumb"> <p class="gallery__category">${category}</p>
                <img class="gallery__img" src="${img}" alt=""/>
                 <button type="button" class="gallery__favorite__btn ">
                         <span class="favorite__btn-span ">Add to favorite
                           <svg width='16' height='16'><use href="}"></use>
                    </svg> </span>
                    <span class="favorite__btn-span is-hidden">Remove from favorite
                                    <svg width='16' height='16'><use href=""></use>
                    </svg></span>
                          </button>
                    </div>
                    <h3 class="gallery__header">${title}</h3>
                    <p class="gallery__text">${description}</p>
                    <div class="gallery__item-bottom_wrap">
                        <span class="gallery__date">${date}</span>
                        <a href="${source}" target="_blank" rel="noreferrer noopener" class="gallery__link">Read more</a>
                    </div>
                </article>
             </li>`;
}

favoritesInLocalStorage.map(el => {
  renderFavorites(refs.favoriteGalleryList, createMarkup(el));
});
