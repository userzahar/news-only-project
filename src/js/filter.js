import { refs } from './refs';
const getCatagories = fetchCatagories();

refs.btnCatagories.addEventListener('click', onBtnCatagoriesClick);
refs.catagoriesItem.addEventListener('click', selectedCatagory);

function onBtnCatagoriesClick() {
  const expanded =
    refs.btnCatagories.getAttribute('aria-expanded') === 'true' || false;
  refs.btnCatagories.classList.toggle('is-open');
  refs.btnCatagories.setAttribute('aria-expanded', !expanded);

  refs.btnCatagories.classList.add('btn-color');

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

function createListOfSections({ display_name }) {
  return `<li class='catagories__item'><button data-name="${display_name}" class="catagory__btn">${display_name}</button></li>`;
}

function categoriesForTablet() {
  refs.catagoriesItem.innerHTML = '';
  getCatagories.then(results => {
    const [first, second, third, forth, ...rest] = results;
    const markUp = `
    
    <li class='catagories__item-tab'><button type="button" data-name="${first.display_name}" class="catagory__btn-tab">${first.display_name}</button></li>
    <li class='catagories__item-tab'><button type="button" data-name="${second.display_name}" class="catagory__btn-tab">${second.display_name}</button></li>
    <li class='catagories__item-tab'><button type="button" data-name="${third.display_name}" class="catagory__btn-tab">${third.display_name}</button></li>
    <li class='catagories__item-tab'><button type="button" data-name="${forth.display_name}" class="catagory__btn-tab">${forth.display_name}</button></li>
    
    `;

    const list = `${rest
      .map(
        item =>
          ` <button type="button" data-name="${item.display_name}" class="catagory__btn-list-tab">${item.display_name}</button>`
      )
      .join('')}`;

    refs.name.textContent = 'Others';
    refs.name.classList = 'catagories__btn-name-tab';
    refs.catagoriesItem.insertAdjacentHTML('afterbegin', markUp);

    refs.listOfCatagories.innerHTML = list;
  });
}

function categoriesForDesktop() {
  refs.catagoriesItem.innerHTML = '';
  getCatagories.then(results => {
    const [first, second, third, forth, fifth, sixth, ...rest] = results;
    const markUp = `
    
    <li class='catagories__item'><button type="button" data-name="${first.display_name}" class="catagory__btn-tab">${first.display_name}</button></li>
    <li class='catagories__item'><button type="button" data-name="${second.display_name}" class="catagory__btn-tab">${second.display_name}</button></li>
    <li class='catagories__item'><button type="button" data-name="${third.display_name}" class="catagory__btn-tab">${third.display_name}</button></li>
    <li class='catagories__item'><button type="button" data-name="${forth.display_name}" class="catagory__btn-tab">${forth.display_name}</button></li>
    <li class='catagories__item'><button type="button" data-name="${fifth.display_name}" class="catagory__btn-tab">${fifth.display_name}</button></li>
     <li class='catagories__item'><button type="button" data-name="${sixth.display_name}" class="catagory__btn-tab">${sixth.display_name}</button></li>
    
     `;

    const list = `${rest
      .map(
        item =>
          `<button type="button" data-name="${item.display_name}" class="catagory__btn-list-tab">${item.display_name}</button>
          `
      )
      .join('')}`;

    refs.name.textContent = 'Others';
    refs.name.classList = 'catagories__btn-name-tab';
    refs.catagoriesItem.insertAdjacentHTML('afterbegin', markUp);

    refs.listOfCatagories.innerHTML = list;
  });
}

function selectedCatagory(evt) {
  if (evt.target.nodeName !== 'BUTTON') {
    return;
  }

  const selectedCatagory = evt.target.dataset;
  console.log(selectedCatagory);
}

export { categoriesForMobile, categoriesForTablet, categoriesForDesktop };
