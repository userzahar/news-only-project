import onResize from './js/resize';
import getCatagories from './js/filter';
import './js/js-header/dark-mode';
import './js/js-header/mobile-menu';
import { mqHandler } from './js/functions/mqHandler';
import './js/js-read/read';
import './js/functions/eventLiCard';
import './js/localStorageFavorite';

if (window.location.pathname !== '/index.html') {
  window.addEventListener('DOMContentLoaded', event => mqHandler());
}
console.log(window.location);
