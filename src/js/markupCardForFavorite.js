// !!це треба вставити у  functions/markup у ту саму змінну. зламатись нічого не повинна, хіба readMore

const markup = arr.map(el => {
  return `<li class="gallery__item">
    <article class="gallery__article">
              <div class="gallery__thumb"> <p class="gallery__category">Job searching</p>
                <img class="gallery__img" src="${el.image}" alt="${el.alt}"/>
                 <button type="button" class="gallery__favorite__btn ">
                         <span class="favorite__btn-span">Add to favorite 
                           <svg width='16' height='16'><use href="${ICON_HEART}"></use>
                    </svg> </span>
                    <span class="favorite__btn-span remove-btn is-hidden">Remove from favorite
                                    <svg width='16' height='16'><use href="${ICON_HEART}"></use>
                    </svg></span>
                          </button>         
                    </div>
                    <h3 class="gallery__header">${el.title}</h3>
                    <p class="gallery__text">${el.descr}</p>
                    <div class="gallery__item-bottom_wrap">
                        <span class="gallery__date">${el.date}</span>
                        <a href="${el.source}" target="_blank" rel="noreferrer noopener" class="gallery__link">Read more</a>
                    </div>
                </article>
             </li>`;
});
