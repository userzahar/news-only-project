import { refs } from './refs';
if (
  window.location.pathname === '/' ||
  window.location.pathname === '/index.html'
) {
  const getCatagories = fetchCatagories();
  console.log('FETCH CATS');
  refs.btnCatagories.addEventListener('click', onBtnCatagoriesClick);
  refs.catagoriesItem.addEventListener('click', selectedCatagory);
  refs.listOfCatagories.addEventListener('click', selectedCatagory);

  function onBtnCatagoriesClick() {
    const expanded =
      refs.btnCatagories.getAttribute('aria-expanded') === 'true' || false;
    refs.btnCatagories.classList.toggle('is-open');
    refs.btnCatagories.setAttribute('aria-expanded', !expanded);

    refs.btnCatagories.classList.toggle('btn-color');

    refs.listOfCatagories.classList.toggle('is-open');
  }

  function fetchCatagories() {
    return fetch(
      'https://api.nytimes.com/svc/news/v3/content/section-list.json?api-key=HunERBoFJkGno2ChxwL9g20UbJbd8EGL'
    )
      .then(res => res.json())
      .then(data => data.results);
  }

  function categoriesForMobile() {
    refs.catagoriesItem.innerHTML = '';
    getCatagories.then(results => {
      const markUp = results.reduce(
        (markUp, result) => markUp + createListOfSections(result),
        ''
      );
      refs.name.textContent = 'Categories';
      refs.listOfCatagories.innerHTML = markUp;
    });
  }

  function createListOfSections({ section }) {
    return `<li class='catagories__item'><button data-name="${section}" class="catagory__btn">${section}</button></li>`;
  }

  function categoriesForTablet() {
    refs.catagoriesItem.innerHTML = '';
    getCatagories.then(results => {
      const [first, second, third, forth, ...rest] = results;
      const markUp = `
    
    <li class='catagories__item-tab'><button type="button" data-name="${first.section}" class="catagory__btn-tab">${first.section}</button></li>
    <li class='catagories__item-tab'><button type="button" data-name="${second.section}" class="catagory__btn-tab">${second.section}</button></li>
    <li class='catagories__item-tab'><button type="button" data-name="${third.section}" class="catagory__btn-tab">${third.section}</button></li>
    <li class='catagories__item-tab'><button type="button" data-name="${forth.section}" class="catagory__btn-tab">${forth.section}</button></li>
    
    `;

      const list = `${rest
        .map(
          item =>
            ` <button type="button" data-name="${item.section}" class="catagory__btn-list-tab">${item.section}</button>`
        )
        .join('')}`;

      refs.name.textContent = 'Others';
      // refs.name.classList = 'catagories__btn-name-tab';
      refs.catagoriesItem.insertAdjacentHTML('afterbegin', markUp);

      refs.listOfCatagories.innerHTML = list;
    });
  }

  function categoriesForDesktop() {
    refs.catagoriesItem.innerHTML = '';
    getCatagories.then(results => {
      const [first, second, third, forth, fifth, sixth, ...rest] = results;
      const markUp = `
    
    <li class='catagories__item-des'><button type="button" data-name="${first.section}" class="catagory__btn-tab">${first.section}</button></li>
    <li class='catagories__item-des'><button type="button" data-name="${second.section}" class="catagory__btn-tab">${second.section}</button></li>
    <li class='catagories__item-des'><button type="button" data-name="${third.section}" class="catagory__btn-tab">${third.section}</button></li>
    <li class='catagories__item-des'><button type="button" data-name="${forth.section}" class="catagory__btn-tab">${forth.section}</button></li>
    <li class='catagories__item-des'><button type="button" data-name="${fifth.section}" class="catagory__btn-tab">${fifth.section}</button></li>
     <li class='catagories__item-des'><button type="button" data-name="${sixth.section}" class="catagory__btn-tab">${sixth.section}</button></li>
    
     `;

      const list = `${rest
        .map(
          item =>
            `<button type="button" data-name="${item.section}" class="catagory__btn-list-tab">${item.section}</button>
          `
        )
        .join('')}`;

      refs.name.textContent = 'Others';
      // refs.name.classList = 'catagories__btn-name-tab';
      refs.catagoriesItem.insertAdjacentHTML('afterbegin', markUp);

      refs.listOfCatagories.innerHTML = list;
    });
  }

  function selectedCatagory(evt) {
    if (evt.target.nodeName !== 'BUTTON') {
      return;
    }

    const selectedCatagory = evt.target.dataset.name;

    const button = evt.target;
    console.log(button);
    button.classList.toggle('btn-color');

    return fetch(
      `https://api.nytimes.com/svc/news/v3/content/nyt/${selectedCatagory}.json?api-key=HunERBoFJkGno2ChxwL9g20UbJbd8EGL`
    ).then(res => res.json());
  }
}
export { categoriesForMobile, categoriesForTablet, categoriesForDesktop };
