import { refs } from './refs';
import {
  categoriesForMobile,
  categoriesForTablet,
  categoriesForDesktop,
} from './filter';
export default function onResize(size, toRemove) {
  refs.listOfCatagories.classList.add(`catagories__list-${size}`);
  for (sizeRemove of toRemove) {
    refs.listOfCatagories.classList.remove(`catagories__list-${sizeRemove}`);
  }
  refs.catagories.classList.add(`catagories-${size}`);
  for (sizeRemove of toRemove) {
    refs.catagories.classList.remove(`catagories-${sizeRemove}`);
  }
  refs.name.classList.add(`catagories__btn-name-${size}`);
  for (sizeRemove of toRemove) {
    refs.name.classList.remove(`catagories__btn-name-${sizeRemove}`);
  }
  refs.btnCatagories.classList.add(`catagories__btn-${size}`);
  for (sizeRemove of toRemove) {
    refs.btnCatagories.classList.remove(`catagories__btn-${sizeRemove}`);
  }
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
  if (size === 'mobile') {
    // refs.catagoriesItem.innerHTML = '';
    categoriesForMobile();
  }
  if (size === 'tablet') {
    // refs.catagoriesItem.innerHTML = '';
    categoriesForTablet();
  }
  if (size === 'desktop') {
    // refs.catagoriesItem.innerHTML = '';
    categoriesForDesktop();
  }
}
