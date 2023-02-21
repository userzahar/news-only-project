// function addLeadingZero(d) {
//     return (d < 10) ? '0' + d : d;
// }


// function getUserTime(t = new Date()) {
//     let Y = t.getFullYear();
//     let M = addLeadingZero(t.getMonth() + 1);
//     let D = addLeadingZero(t.getDate());
//     return `${D}/${M}/${Y}`
// };

// console.log(getUserTime());
// // ________________________________________

// export function addToLocalStorate() {

//     const galleryRef = document.querySelector('.gallery__list')

//     galleryRef.addEventListener('click', event => {
//         if (event.target.classList.contains('gallery__link')) {
//             event.preventDefault();
//             const articleEl = event.target.closest('.gallery__item');
//             const article = {
//                 title: articleEl.querySelector('.gallery__header').textContent,
//                 description: articleEl.querySelector('.gallery__text').textContent,
//                 date: articleEl.querySelector('.gallery__date').textContent,
//                 source: articleEl.querySelector('.gallery__link').href,
//                 img: articleEl.querySelector('.gallery__img').src,
//             };
//             const existingArticles =
//                 JSON.parse(localStorage.getItem('articles')) || [];
//             existingArticles.push(article);
//             localStorage.setItem('articles', JSON.stringify(existingArticles));
//         }
//     });
// }
// // _____________________________________________________
// let arrayLs = localStorage.getItem(`articles`);
// arrayLs = JSON.parse(arrayLs);
// console.log(arrayLs);
// // _____________________________________________________