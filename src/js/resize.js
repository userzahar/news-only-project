import { refs } from './refs';
export default function onResize(mql) {
    if (mql.matches) {
    
    refs.item.forEach(singleItem => {
        singleItem.classList.add('gallery__item-tablet');
        singleItem.classList.remove('gallery__item-desktop');
    })
  } else {
      refs.item.forEach(singleItem => {
          singleItem.classList.remove('gallery__item-tablet');
          singleItem.classList.add('gallery__item-desktop');
      })
  }

 
}
