import { mqHandler } from './functions/mqHandler'
import { refs } from './refs';

import { fetchNews } from './functions/fetchNews';
import { createMarkup } from './functions/markup';
import { clearMarkup } from './functions/markup';
import { normalizePop } from './functions/markup';
import { normalizeSrc } from './functions/markup';
import { markData } from './functions/markup';
// import {itemsPerPage} from './functions/markup';
import { page } from './functions/markup';
// import { addToLocalStorate } from './js-read/read'


export let itemsPerPage = 8;
export let totalPages = 0;



const formRef = document.querySelector('.search-field');
const inputRef = document.querySelector('#search-field__input');



formRef.addEventListener('submit', onSubmit);
inputRef.addEventListener('input', createReq);


const emptyCard = '<li class="gallery__item"></li>';
let weatherPos = 2;
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
                    <p class="gallery__category">Job searching</p>
                    <img class="gallery__img" src="${el.image}" alt="${el.alt}"/>
                    <div class='gallery__favorite'><p>Add to favorite</p>
                    <button></button>
                    <svg width='16' height='16'><use href="../images/sprite.svg#icon-heart"></use>
                    </svg></div>
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
  pageMarkup.splice(weatherPos, 0, emptyCard);
  const finishedMkp = pageMarkup.join('');
  // console.log(finishedMkp);
  // console.log(markup);
  galleryRef.insertAdjacentHTML('beforeend', finishedMkp);
}





function startFetch() {

fetchNews('/svc/mostpopular/v2/viewed/1.json', {
}).then(data => {
  if (window.innerWidth >= 1280) {
    itemsPerPage = 8;
  }
  if (window.innerWidth < 1280 && window.innerWidth >= 780) {
    itemsPerPage = 7;
  }
  if (window.innerWidth < 768) {
    itemsPerPage = 4;
  }
  totalItems = data.results.length;
  totalPages = Math.ceil(data.results.length / itemsPerPage);

  normalizePop(data.results);
  // console.log(page);
  createMarkup(markData, page)

  addToLocalStorate();
  // Do something with the data		
})
  .catch(error => {
    console.error(error);
    // Handle the error		
  });


function onSearch(inputData) {
  fetchNews('/svc/search/v2/articlesearch.json', {

      q: inputData,
      page: '1',
    }).then(data => {
      totalItems = data.response.docs.length;
      
      totalPages = Math.ceil(data.response.docs.length / itemsPerPage);
      refs.errorFind.classList.add('notfind-part-hidden');
      // console.log(totalItems);
      if (data.response.docs.length === 0) {
          // console.log('Empty');
          refs.errorFind.classList.remove('notfind-part-hidden');
          galleryСontainer.innerHTML= "";
      }
      normalizeSrc(data.response.docs);
      createMarkup(markData, page);

  });
};

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


  pagination.on('beforeMove', event => {
    const currentPage = event.page;
    clearMarkup();
    createMarkup(markData, currentPage);
});
}

function onScreenChange() {
  weatherPos = 1;
  clearMarkup();
  createMarkup(markData, page);
}

export { onScreenChange };
  
function onCategorySrc(selectedCat) {
  const searchUrl = `https://api.nytimes.com/svc/news/v3/content/all/${selectedCat}.json?api-key=${API_KEY}&limit=${itemsPerPage}&offset=0`;
  fetchNews(searchUrl).then(res => {
    console.log(res);
    totalPages = res.num_results;
    console.log(totalPages);
    // if (res.response.docs.length === 0) {
    //   console.log('Empty');
    // }
    // normalizeSrc(res.response.docs);
    // createMarkup(markData, page);
  });
}

onCategorySrc('arts');

// const mql = window.matchMedia('(min-width: 1280px)');

// function screenChange(e) {
//   if (e.matches) {
//     weatherPos = 2;
//     console.log(weatherPos);
//     console.log('bolshe 1280')
//   } else {
//     weatherPos = 1;
//     clearMarkup();
//     createMarkup(markData, page);
//     console.log(weatherPos);
//     console.log('menshe 1280')
//   }
// }

// screenChange(mql);
// mql.addEventListener('change', screenChange);


