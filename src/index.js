import onResize from './js/resize';
import getCatagories from './js/filter';
import './js/js-header/dark-mode';
import './js/js-header/mobile-menu';
import { mqHandler } from './js/functions/mqHandler';
import './js/js-read/read';
import { refs } from './js/refs';
import { calendar } from './js/calendar';

if (
  window.location.pathname === '/favorite.html' ||
  window.location.pathname === '/read.html'
) {
  window.addEventListener('DOMContentLoaded', event => mqHandler());
}

console.log(window.location);
