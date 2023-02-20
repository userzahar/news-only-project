const API_KEY = 'pJnhjsndYoXEeiZxcLsx3UMkwINk9PiQ';
const reqUrl = `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${API_KEY}`;
const ICON_HEART = '/sprite.f14d31f7.svg#icon-heart';
const galleryRef = document.querySelector('.gallery__list');
const formRef = document.querySelector('.search-field');
const inputRef = document.querySelector('#search-field__input');
const paginationContainer = document.getElementById('pagination');

formRef.addEventListener('submit', onSubmit);
inputRef.addEventListener('input', createReq);

const emptyCard = '<li class="gallery__item"></li>';
let totalItems = 0;
let srartIndex = 0;
let endIndex = 0;
let page = 1;
let totalPages = 0;
let itemsPerPage = 8;
let markData = {};

async function fetchNews(request) {
  const response = await fetch(request);
  if (!response.ok) {
    throw new Error(responce.statusText);
  }
  return response.json();
}

function createMarkup(arr, page) {
  srartIndex = (page - 1) * itemsPerPage;
  endIndex = srartIndex + itemsPerPage;
  initPagination(totalPages);

  const markup = arr.map(el => {
    return `<li class="gallery__item">
                   <div class="gallery__thumb"> <p class="gallery__category">Job searching</p>
                    <img class="gallery__img" src="${el.image}" alt="${el.alt}"/>
                    <div class='gallery__favorite'><p>Add to favorite</p>
                    <button type="button"></button>
                    <svg width='16' height='16'><use href="${ICON_HEART}"></use>
                    </svg></div></div>
                    <h3 class="gallery__header">${el.title}</h3>
                    <p class="gallery__text">${el.descr}</p>
                    <div class="gallery__item-bottom_wrap">
                        <span class="gallery__date">${el.date}</span>
                        <a href="${el.source}" target="_blank" rel="noreferrer noopener" class="gallery__link">Read more</a>
                    </div>
                </li>`;
  });
  const pageMarkup = markup.slice(srartIndex, endIndex);
  // console.log(pageMarkup);
  pageMarkup.splice(2, 0, emptyCard);
  const finishedMkp = pageMarkup.join('');
  // console.log(finishedMkp);
  // console.log(markup);
  galleryRef.insertAdjacentHTML('beforeend', finishedMkp);
}

function normalizePop(feed) {
  const marks = feed.map(el => {
    function checkoutDescr() {
      if (el.abstract.length > 120) {
        return el.abstract.slice(0, 119) + '...';
      }
      return el.abstract;
    }
    const descr = checkoutDescr();
    const dateFormat = new Date(el.published_date);
    const date = new Intl.DateTimeFormat().format(dateFormat);
    function ckeckoutTit() {
      if (el.title.length > 50) {
        return el.title.slice(0, 49) + '...';
      }
      return el.title;
    }
    const title = ckeckoutTit();
    // console.log(title.length);
    const source = el.url;
    function checkoutImg() {
      if (el.media.length === 0) {
        return 'https://t3.ftcdn.net/jpg/04/62/93/66/360_F_462936689_BpEEcxfgMuYPfTaIAOC1tCDurmsno7Sp.jpg';
      }
      return el.media[0]['media-metadata'][2].url;
    }
    const image = checkoutImg();
    function checkoutAlt() {
      if (el.media.length === 0) {
        return 'Image is no avalible';
      }
      return el.media[0].caption;
    }
    const alt = checkoutAlt();
    // console.log(alt);
    // console.log(image);

    return { descr, date, title, source, image, alt };
  });
  // console.log(marks);
  markData = marks;
  // console.log(markData);
  return markData;
}

function startFetch() {
  fetchNews(reqUrl).then(res => {
    // console.log(res.results);
    totalItems = res.results.length;
    totalPages = Math.ceil(totalItems / itemsPerPage);
    normalizePop(res.results);
    createMarkup(markData, page);
  });
}
startFetch();

function clearMarkup() {
  galleryRef.innerHTML = '';
}

function normalizeSrc(feed) {
  const marks = feed.map(el => {
    function checkoutDescr() {
      if (el.abstract.length > 120) {
        return el.abstract.slice(0, 119) + '...';
      }
      return el.abstract;
    }
    const descr = checkoutDescr();
    const dateFormat = new Date(el.pub_date);
    const date = new Intl.DateTimeFormat().format(dateFormat);
    function ckeckoutTit() {
      if (el.headline.main.length > 50) {
        return el.headline.main.slice(0, 49) + '...';
      }
      return el.headline.main;
    }
    const title = ckeckoutTit();
    const source = el.web_url;
    const imagePart = el.multimedia;

    function checkoutImg() {
      if (imagePart.length === 0) {
        return 'https://t3.ftcdn.net/jpg/04/62/93/66/360_F_462936689_BpEEcxfgMuYPfTaIAOC1tCDurmsno7Sp.jpg';
      }
      return `https://static01.nyt.com/${imagePart[0].url}`;
    }
    const image = checkoutImg();
    const alt = 'New`s image';
    // console.log(image);
    return { descr, date, title, source, image, alt };
  });
  // console.log(marks);
  markData = marks;
  return markData;
}

function onSearch(inputData) {
  const searchUrl = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${inputData}&api-key=${API_KEY}`;
  fetchNews(searchUrl).then(res => {
    console.log(res.response.docs);
    if (res.response.docs.length === 0) {
      console.log('Empty');
    }
    normalizeSrc(res.response.docs);
    createMarkup(markData, page);
  });
}

// onSearch('ukraine');

let searchReq = '';
function createReq(e) {
  searchReq = e.target.value.trim();
  // console.log(searchReq);
}
function onSubmit(e) {
  e.preventDefault();
  clearMarkup();
  onSearch(searchReq);
}

// const encoded = encodeURIComponent('crosswords & games'); //crosswords%20&%20games

// пагинация
function initPagination(totalPages) {
  const pagination = new tui.Pagination(paginationContainer, {
    totalItems: totalPages,
    itemsPerPage: 1,
    visiblePages: 3,
    centerAlign: true,
    // firstItemClassName: 'tui-first-child',
    // lastItemClassName: 'tui-last-child',
    template: {
      page: '<a href="#" class="tui-page-btn">{{page}}</a>',
      currentPage:
        '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
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
        '</a>',
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

