import {createMarkup} from './functions/markup';
import {clearMarkup} from './functions/markup';
import {markData} from './functions/markup';
import {normalizeSrc}  from './functions/markup';

const paginationContainer = document.getElementById('pagination');
function initPagination(totalPages, pagBtnQty) {
  const pagination = new tui.Pagination(paginationContainer, {
    totalItems: totalPages,
    itemsPerPage: 1,
    visiblePages: pagBtnQty,
  });
  pagination.on('beforeMove', event => {
    const currentPage = event.page;
    clearMarkup();
    createMarkup(markData, currentPage);
    goToTop();
     
  });
}

function goToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}
export {initPagination};

