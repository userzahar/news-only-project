function addLeadingZero(d) {
    return (d < 10) ? '0' + d : d;
}


function getUserTime(t = new Date()) {
    let Y = t.getFullYear();
    let M = addLeadingZero(t.getMonth() + 1);
    let D = addLeadingZero(t.getDate());
    return `${D}/${M}/${Y}`
};

console.log(getUserTime());
// ________________________________________

export function addToLocalStorate() {

    const galleryRef = document.querySelector('.gallery__list')

    galleryRef.addEventListener('click', event => {
        if (event.target.classList.contains('gallery__link')) {
            event.preventDefault();
            const articleEl = event.target.closest('.gallery__item');
            const article = {
                title: articleEl.querySelector('.gallery__header').textContent,
                description: articleEl.querySelector('.gallery__text').textContent,
                date: articleEl.querySelector('.gallery__date').textContent,
                source: articleEl.querySelector('.gallery__link').href,
                img: articleEl.querySelector('.gallery__img').src,
            };
            const existingArticles =
                JSON.parse(localStorage.getItem('articles')) || [];
            existingArticles.push(article);
            localStorage.setItem('articles', JSON.stringify(existingArticles));
        }
    });
}
// _____________________________________________________
let arrayLs = localStorage.getItem(`articles`);
arrayLs = JSON.parse(arrayLs);
console.log(arrayLs);
// _____________________________________________________
const btnRead = document.querySelector('#btn_read');
const galleryNews = document.querySelector('.gallery_date_read');
console.log(btnRead);
console.log(galleryNews);

btnRead.addEventListener('click', event => {
    createMarkupRead(arrayLs)
})


function createMarkupRead(arrayLs) {
    console.log(arrayLs)
    const markup = arrayLs.map(el => {
        return `<li class="gallery__item">
                     <div class="gallery__thumb"> <p class="gallery__category">Job searching</p>
                      <img class="gallery__img" src="${el.image}" alt="${el.alt}"/>
                      <div class='gallery__favorite'><p>Add to favorite</p>
                      <button type="button"></button>
                      <svg width='16' height='16'><use href=""></use>
                      </svg></div></div>
                      <h3 class="gallery__header">${el.title}</h3>
                      <p class="gallery__text">${el.descr}</p>
                      <div class="gallery__item-bottom_wrap">
                          <span class="gallery__date">${el.date}</span>
                          <a href="${el.source}" target="_blank" rel="noreferrer noopener" class="gallery__link">Read more</a>
                      </div>
                  </li>`;

    }).join('');

    console.log(markup)
    galleryNews.insertAdjacentHTML('beforeend', markup);
}

