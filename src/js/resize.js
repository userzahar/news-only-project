import { refs } from './refs';
export default function onResize(size, toRemove) {
  for (sizeRemove of toRemove) {
    refs.galleryList.classList.remove(`gallery__list-${sizeRemove}`);
    refs.headerContainer.classList.remove(`header-container-${sizeRemove}`);
    refs.logo.classList.remove(`logo-${sizeRemove}`);
  }
  refs.logo.classList.add(`logo-${size}`);
  refs.headerContainer.classList.add(`header-container-${size}`);
  refs.galleryList.classList.add(`gallery__list-${size}`);
  refs.container.forEach(cont => {
    for (sizeRemove of toRemove) {
      cont.classList.remove(`container-${sizeRemove}`);
    }
    cont.classList.add(`container-${size}`);
  });
  let item = document.querySelectorAll('.gallery__item');
  item.forEach(singleItem => {
    for (sizeRemove of toRemove) {
      singleItem.classList.remove(`gallery__item-${sizeRemove}`);
    }
    singleItem.classList.add(`gallery__item-${size}`);
  });
}
