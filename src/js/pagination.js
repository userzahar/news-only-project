// import Notiflix from 'notiflix';

// const paginationEl = document.querySelector(".tui-pagination");
// const cardsEl = document.querySelector(".cards");

// const BASE_URL = "https://api.nytimes.com/svc";
// const CATEGORY_URL = "/news/v3/content/section-list.json"
// const POPULAR = "/mostpopular/v2/viewed/1.json"

// const API_KEY = "?api-key=TSw2QdOoFucel7ybh9h7kC4obHmkxxGl";


// function fetchNews(url) {
//     return fetch(`${BASE_URL}${url}${API_KEY}`).then(
//       (response) => {
//         if (!response.ok) {
//           throw new Error(response.status);
//         }
//         return response.json();
//       }
//     );
//   }

// //   console.log(fetchNews(POPULAR));
// // console.log(fetchNews(CATEGORY_URL));


//   fetchNews(POPULAR).then((res) => {
//     const card = renderCard(res.results);
//     // const imgUrl = res.results[0].media[0];
//     // const {'media-metadata': mediametadata} = imgUrl;
//     // console.log(mediametadata[0].url);
//     // console.log(res.results[0].media[0].media-metadata[0].url);
//     cardsEl.insertAdjacentHTML('beforeend', card);
//   });


//   function renderCard(arrObj){
//     // const imgUrl = arrObj.media;
//     // const {'media-metadata': mediametadata} = imgUrl;
//     // console.log(mediametadata.url);
//     const markup = arrObj.map(({section, title, url}) => {
//     return `
//     <li class=newsCard>
//     <h2 id=${encodeURIComponent(section)}>${title}</h2>
//     <a href="${url}" class="readMore">Read more...</a>
//     </li>`;
//   }).join("");
//   return markup;
// };


const apiKey = 'TSw2QdOoFucel7ybh9h7kC4obHmkxxGl';
const url = `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${apiKey}`;

const articleList = document.getElementById('article-list');
const paginationContainer = document.getElementById('pagination');

const ITEMS_PER_PAGE = 8;
let articles = [];
let totalPages = 0;
let page = 1;

fetch(url)
  .then(response => response.json())
  .then(data => {
    articles = data.results;
    totalPages = Math.ceil(articles.length / ITEMS_PER_PAGE);
    renderArticles(page); // initially display first page
    initPagination(totalPages);
    // console.log(totalPages);
  })
  .catch(error => {
    console.error('Error fetching articles', error);
  });



function renderArticles(page) {
    articleList.innerHTML = '';
    const start = (page - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;
    const pageArticles = articles.slice(start, end);
    pageArticles.forEach(article => {
      const imgUrl = article.media[0];
      let mediametadata;
      if (article.media.length > 0){
        ({'media-metadata': mediametadata} = imgUrl);
      } else {
        mediametadata = [
          {
              "url": "https://grassrootjournalist.files.wordpress.com/2019/02/nyt-logo.png",
              "format": "Standard Thumbnail",
              "height": 75,
              "width": 75
          },
          {
              "url": "https://grassrootjournalist.files.wordpress.com/2019/02/nyt-logo.png",
              "format": "mediumThreeByTwo210",
              "height": 140,
              "width": 210
          },
          {
              "url": "https://grassrootjournalist.files.wordpress.com/2019/02/nyt-logo.png",
              "format": "mediumThreeByTwo440",
              "height": 293,
              "width": 440
          }
      ];
      };
      const articleDiv = document.createElement('div');
      console.log(mediametadata);
      articleDiv.innerHTML = `
        <h2>${article.title}</h2>
        <img src="${mediametadata[2].url}"/>
        <p>${article.abstract}</p>
        <a href="${article.url}">Read more</a>
      `;
      articleList.appendChild(articleDiv);
    });
  }



function initPagination(totalPages) {
  const pagination = new tui.Pagination(paginationContainer, {
    totalItems: totalPages,
    itemsPerPage: 1,
    visiblePages: 3,
    centerAlign: true,
  });

  pagination.on('beforeMove', (event) => {
    const currentPage = event.page;
    renderArticles(currentPage);
});
}


// список категорій	                    https://api.nytimes.com/svc/news/v3/content/section-list.json
// список новин по категоріям	        https://api.nytimes.com/svc/news/v3/content/inyt/automobiles.json
// список новин за пошуковим значенням	https://api.nytimes.com/svc/search/v2/articlesearch.json
// список популярних новин	            https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json

