/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        'Логан JS',
        'Лига справедливости JS',
        'Ла-ла лэнд JS',
        'Одержимость JS',
        'Скотт Пилигрим против JS'
    ]
};

const promoAdv = document.querySelectorAll('.promo__adv img'),
      poster = document.querySelector('.promo__bg'),
      posterGenre = poster.querySelector('.promo__genre'),
      promoInteractiveItem = document.querySelectorAll('.promo__interactive-item');

// 1 // 
promoAdv.forEach(item => {
    item.remove();
});

// 2 //
posterGenre.textContent = 'Драма';

// 3 //
poster.style.backgroundImage = 'url("img/bg.jpg")';

// 4, 5 //
// Вариант 1
movieDB.movies.sort();
promoInteractiveItem.forEach(function(item, i) {
    item.innerHTML = `
        ${i+1}. ${movieDB.movies[i]} 
        <div class="delete"></div>
    `;
});

// Вариант 2
// promoInteractiveItem.forEach((item, i) => {
//     item.innerHTML = `${i+1}. ${movieDB.movies.sort()[i]} <div class="delete"></div>`;
// });

