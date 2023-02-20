import {initPagination} from '../pagination'
import {totalPages} from '../news-page';

let srartIndex = 0;
let endIndex = 0;
let itemsPerPage = 8;
export {itemsPerPage};

let page = 1;
export {page};

let markData = {};
export {markData};

const emptyCard = '<li class="gallery__item"></li>';
const ICON_HEART = '/sprite.f14d31f7.svg#icon-heart';
const galleryRef = document.querySelector('.gallery__list');


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
  
  export {createMarkup};

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

  export {normalizePop};

function clearMarkup() {
    galleryRef.innerHTML = '';
  }
  
  export {clearMarkup};
  
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
  
  export {normalizeSrc};

