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
        // const descr = el.abstract.slice(0, 119) + '...';
        // console.log(el.abstract.length);

        // const date = new Date(el.published_date);
        // const dateFormat = new Intl.DateTimeFormat().format(date);
        // console.log(dateFormat);
        return ` <li class="gallery__item">
                    <img class="gallery__img" src="${el.image}" alt="${el.alt}"/>
                    <h3 class="gallery__header">${el.title}</h3>
                    <p class="gallery__text">${el.descr}</p>
                    <div class="gallery__item-bottom_wrap">
                        <span class="gallery__date">${el.date}</span>
                        <a href="${el.source}" target="_blank" rel="noreferrer noopener" class="gallery__link">Read more</a>
                    </div>
                </li>`
    }).join('');
    // console.log(markup);
    galleryRef.insertAdjacentHTML('beforeend', markup);
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
        console.log(title.length);
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
    return marks;

}

function startFetch() {
    fetchNews(reqUrl).then(res => {
    console.log(res.results);
        
    createMarkup(normalizePop(res.results));
    });
};
startFetch();

function clearMarkup() {
    galleryRef.innerHTML = '';
};

function normalizeSrc(feed) {
     const marks = feed.map(el => {
        const descr = el.abstract.slice(0, 119) + '...';
        const dateFormat = new Date(el.pub_date);
        const date = new Intl.DateTimeFormat().format(dateFormat);
        const title = el.headline.main;
        const source = el.web_url;
        return { descr, date, title, source };
    });
    console.log(marks);
    return marks;
}

function onSearch(inputData) {
    const searchUrl = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${inputData}&api-key=${API_KEY}`;
    fetchNews(searchUrl).then(res => {
    console.log(res.response.docs);
    createMarkup(normalizeSrc(res.response.docs));
    });
};

// onSearch('ukraine');

// const encoded = encodeURIComponent('crosswords & games'); //crosswords%20&%20games