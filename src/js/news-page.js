// const API_KEY = 'pJnhjsndYoXEeiZxcLsx3UMkwINk9PiQ';
// const reqUrl = `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${API_KEY}`;
const baseUrl = 'https://api.nytimes.com';
const apiKey = 'TSw2QdOoFucel7ybh9h7kC4obHmkxxGl';



const galleryRef = document.querySelector('.gallery__list');
const formRef = document.querySelector('.search-field');
const inputRef = document.querySelector('#search-field__input');

formRef.addEventListener('submit', onSubmit);
inputRef.addEventListener('input', createReq);

const emptyCard = '<li class="gallery__item"></li>';


let searchPage = 1;
let totalPages = 0;
const ITEMS_PER_PAGE = 4;

async function fetchNews(endpoint, queryParams = {}) {
  
    const queryString = Object.entries(queryParams)
      .map(([key, value]) => `${key}=${value}`)
      .join('&');
  
    const url = `${baseUrl}${endpoint}?${queryString}&api-key=${apiKey}`;
  
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Failed to fetch data from ${url}`);
      }
      return await response.json();
    } catch (error) {
      console.error(error);
      throw new Error(`Failed to fetch data from ${url}`);
    }
  };

function createMarkup(arr) {
    const markup = arr.map((el) => {
        return `<li class="gallery__item">
                    <img class="gallery__img" src="${el.image}" alt="${el.alt}"/>
                    <h3 class="gallery__header">${el.title}</h3>
                    <p class="gallery__text">${el.descr}</p>
                    <div class="gallery__item-bottom_wrap">
                        <span class="gallery__date">${el.date}</span>
                        <a href="${el.source}" target="_blank" rel="noreferrer noopener" class="gallery__link">Read more</a>
                    </div>
                </li>`
    });
    markup.splice(2, 0, emptyCard);
    const finishedMkp = markup.join('');
    // console.log(finishedMkp);
    // console.log(markup);
    galleryRef.insertAdjacentHTML('beforeend', finishedMkp);
};

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
    }).slice(0, 8);
    // console.log(marks);
    return marks;

}

// function startFetch() {
//     fetchNews(reqUrl).then(res => {
//     console.log(res.results);
        
//     createMarkup(normalizePop(res.results));
//     });
// };

// startFetch();

fetchNews('/svc/mostpopular/v2/viewed/1.json', {
  })
    .then(data => {
      totalPages = Math.ceil(data.results.length / ITEMS_PER_PAGE);
      createMarkup(normalizePop(data.results))
      // Do something with the data
  })
  .catch(error => {
      console.error(error);
      // Handle the error
  });

console.log(totalPages);

function clearMarkup() {
    galleryRef.innerHTML = '';
};

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
    return marks;
}

function onSearch(inputData) {
    fetchNews('/svc/search/v2/articlesearch.json', {
        q: inputData,
        page: searchPage,
      })
      .then(data => {
        // console.log(res.response.docs);
        if (data.response.docs.length === 0) {
            // console.log('Empty');
        }
    createMarkup(normalizeSrc(data.response.docs));
    });
};



// onSearch('ukraine');

let searchReq = '';

function createReq(e) {
    searchReq = e.target.value.trim();
    // console.log(searchReq);
};
function onSubmit(e) {
    e.preventDefault();
    clearMarkup();
    onSearch(searchReq);

};

// const encoded = encodeURIComponent('crosswords & games'); //crosswords%20&%20games
const are = [1, 2, 3];
const are1 = are.join('')
// console.log(are1);






const paginationEl = document.getElementById('pagination');
const options = {
    totalItems: totalPages,
    itemsPerPage: 1,
    visiblePages: 3,
    page: 1,
    centerAlign: true,
    firstItemClassName: 'tui-first-child',
    lastItemClassName: 'tui-last-child',
    template: {
        page: '<a href="#" class="tui-page-btn">{{page}}</a>',
        currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
        disabled: '<span class="tui-page-btn tui-is-disabled">{{page}}</span>',
        moveButton:
            '<a href="#" class="tui-page-btn tui-{{type}}">' +
            '<span class="tui-ico-{{type}}">{{type}}</span>' +
            '</a>',
        moreButton:
            '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
            '<span class="tui-ico-ellip">...</span>' +
            '</a>',
    },
};

const pagination = new tui.Pagination(paginationEl, options);

pagination.on('afterMove', (event) => {
    const start = (event.page - 1) * options.itemsPerPage;
    const end = start + options.itemsPerPage;
    clearMarkup();
    if (searchReq) {
        onSearch(searchReq, start, end);
    } else {
        fetchNews('/svc/mostpopular/v2/viewed/1.json', {
        }).then((data) => {
            createMarkup(normalizePop(data.results.slice(start, end)));
        });
    }
});