import { refs } from "./refs";



function initPagination(totalPages) {
  const pagination = new tui.Pagination(refs.paginationContainer, {
    totalItems: totalPages,
    itemsPerPage: 1,
    visiblePages: 3,
    centerAlign: true,
    // firstItemClassName: 'tui-first-child',
    // lastItemClassName: 'tui-last-child',
    template: {
      page: '<a href="#" class="tui-page-btn">{{page}}</a>',
      currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
      moveButton: 
        '<a href="#" class="tui-page-btn tui-{{type}}">' +
          '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</a>',
      disabledMoveButton:
        '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
          '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</span>',
      moreButton:
        '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
          '<span class="tui-ico-ellip">...</span>' +
        '</a>'
    },
  });

  // pagination.disabledMoveButton('first');

  
    pagination.on('beforeMove', event => {
    const currentPage = event.page;
    console.log(event);
    clearMarkup();
    createMarkup(markData, currentPage);
  });

}


