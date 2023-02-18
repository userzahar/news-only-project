const API_KEY = 'qrHaNn2k74FM8RnB6KjeURX3lnCKHKR4';
const ENP_POINT = 'https://api.nytimes.com';
const formEl = document.getElementById('form');
const inputEl = document.getElementById('input');
const listEl = document.querySelector('.gallery-list');

let inputValue= '';

function getFetchByInput(query) {
  return fetch(`${ENP_POINT}/svc/search/v2/articlesearch.json?q=${query}&api-key=${API_KEY}`
  ).then(responce => {
    if (!responce.ok) {
      throw new Error(responce.statusText);
    }
    return responce.json();
  });
}
formEl.addEventListener('submit', onBtnSubmit);

function onBtnSubmit(e){
    e.preventDefault();

    inputValue = e.currentTarget.search.value.trim();
    console.log(inputValue);

    getFetchByInput(inputValue).then((res)=> renderMarkup(res.response.docs))

    if(res.response.docs === 0){
        notFindNewsRender();
    }


}

function renderMarkup(){
    console.log('render card')
}

function notFindNewsRender(){
    return `  <p class="notfind-title">We haven’t found news from </br> this category</p>
    <picture>
        <source
        srcset="./images/mobile.png 1x, ./images/mobile@2x.png 2x"
        type="image/png"
        media="(min-width: 480px)"/>

        <source
        srcset="./images/tablet.png 1x, ./images/tablet@2x.png 2x"
        type="image/png"
        media="(max-width: 768px)"/>

        <source
        srcset="./images/desctop.png 1x, ./images/desctop@2x.png 2x"
        type="image/png"
        media="(max-width: 1200px)"/>
        
        <img class="notfind-picture" src="./images/mobile.png" alt="no find Image" width="248" height="198">
    </picture> `

}