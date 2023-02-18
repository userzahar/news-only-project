const API_KEY = 'pJnhjsndYoXEeiZxcLsx3UMkwINk9PiQ';
const reqUrl = `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${API_KEY}`;



const galleryRef = document.querySelector('.gallery__list');

async function fetchNews(request) {
    const response = await fetch(request);
        if (!response.ok) {
        throw new Error(responce.statusText);
        };
    return response.json();
    };

function createMarkup(arr) {
    const markup = arr.map((el) => {
        const descr = el.abstract.slice(0, 119) + '...';
        // console.log(el.abstract.length);

        const date = new Date(el.published_date);
        const dateFormat = new Intl.DateTimeFormat().format(date);
        // console.log(dateFormat);
        return ` <li class="gallery__item">
                    <img class="gallery__img" src="https://photos-kl.kcdn.kz/kolesa-read/2019/05/02/1de33c0fb20453d858a24e776b78cd58f5bc7206-1193x671.jpg" alt="asia-woman" height='395' />
                    <h3 class="gallery__header">${el.title}</h3>
                    <p class="gallery__text">${descr}</p>
                    <div class="gallery__item-bottom_wrap">
                        <span class="gallery__date">${dateFormat}</span>
                        <a href="${el.url}" target="_blank" rel="noreferrer noopener" class="gallery__link">Read more</a>
                    </div>
                </li>`
    }).join('');
    // console.log(markup);
    galleryRef.insertAdjacentHTML('beforeend', markup);
};

function startFetch() {
    fetchNews(reqUrl).then(res => {
    console.log(res.results);
    createMarkup(res.results);
    });
};
// startFetch();

function clearMarkup() {
    galleryRef.innerHTML = '';
};

function onSearch(inputData) {
    const searchUrl = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${inputData}&api-key=${API_KEY}`;
    fetchNews(searchUrl).then(res => {
    console.log(res.response.docs);
    // createMarkup(res.results);
    });
};

onSearch('ukraine');