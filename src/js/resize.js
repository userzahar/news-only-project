import { refs } from './refs';
import {
  categoriesForMobile,
  categoriesForTablet,
  categoriesForDesktop,
} from './filter';
export default function onResize(size, toRemove) {
  refs.btnCatagories.classList.add(`catagories__btn-${size}`);
  for (sizeRemove of toRemove) {
    refs.btnCatagories.classList.remove(`catagories__btn-${sizeRemove}`);
  }
  refs.item.forEach(singleItem => {
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
