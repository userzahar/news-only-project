import { refs } from "./refs";



function initPagination(totalPages) {
  const pagination = new tui.Pagination(refs.paginationContainer, {
    totalItems: totalPages,
    itemsPerPage: 1,
    visiblePages: 3,
  });
    pagination.on('beforeMove', event => {
    const currentPage = event.page;
    clearMarkup();
    createMarkup(markData, currentPage);
  });
}
export {initPagination};
