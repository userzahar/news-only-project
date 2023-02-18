import myFunc from './js/onLigthButtonClick';
import onResize from './js/resize';
const mediaQueryList = window.matchMedia('screen and (min-width: 768px) and (max-width: 1200px)');
// console.log(mediaQueryList)

mediaQueryList.addEventListener('change', onResize)
