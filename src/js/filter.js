const listOfCatagories = document.querySelector('.catagories__list');
const btnCatagories = document.querySelector('.catagories__btn');
const fetchNews = getNews();

btnCatagories.addEventListener('click', onBtnCatagoriesClick)

function onBtnCatagoriesClick(){
  
}

function getNews() {
  return fetch(
    'https://api.nytimes.com/svc/news/v3/content/section-list.json?api-key=CdOVzdHfdAOmsvNkoYFPAZqI00yRvxqQ'
  )
    .then(res => res.json())
    .then(data => data.results);
}

fetchNews.then(results => {
  const markUp = results.reduce(
    (markUp, result) => markUp + createListOfSections(result),
    ''
  );

  listOfCatagories.innerHTML = markUp;
  console.log(button);
});

function createListOfSections({ display_name }) {
  return `<li><button data-name="${display_name}" >${display_name}</button></li>`;
}
