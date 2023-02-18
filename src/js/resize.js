import { refs } from './refs';
export default function onResize(size, toRemove) {
  refs.item.forEach(singleItem => {
    for (sizeRemove of toRemove) {
      singleItem.classList.remove(`gallery__item-${sizeRemove}`);
    }
    singleItem.classList.add(`gallery__item-${size}`);
  });
  
}
