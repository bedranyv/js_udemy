  
/* Задания на урок:
1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.
2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки
3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)
4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"
5) Фильмы должны быть отсортированы по алфавиту */

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
      movieList = document.querySelector('.promo__interactive-list'),
      formAdd = document.querySelector('.add'),
      inputAdd = formAdd.querySelector('.adding__input'),
      btnAdd = formAdd.querySelector('button'),
      checkboxFavorite = formAdd.querySelector('.yes').previousElementSibling;


promoAdv.forEach(item => {
    item.remove();
});

posterGenre.textContent = 'Драма';
poster.style.backgroundImage = 'url("img/bg.jpg")';

function createMovieList(movies) {
    movies.sort();
    movieList.innerHTML = '';
    movies.forEach((film, i) => {
        movieList.innerHTML += `
            <li class="promo__interactive-item">
            ${i + 1}. ${film}
            <div class="delete"></div>
            </li>
        `;
    });

    let btnsDel = movieList.querySelectorAll('.delete');
    console.log(btnsDel);

    btnsDel.forEach(function(btn, i) {
        btn.addEventListener('click', (event) => {
            movieDB.movies.splice(i,1);
            createMovieList(movieDB.movies);
        });
    });
}

createMovieList(movieDB.movies);

btnAdd.addEventListener('click', (event) => {
    event.preventDefault();
    if (inputAdd.value) {
        if (inputAdd.value.length > 21) {
            movieDB.movies.push(inputAdd.value.substr(0, 22) + '...');
        } else {
            movieDB.movies.push(inputAdd.value);
        }
        if (checkboxFavorite.checked) {
            console.log('Добавляем любимый фильм');
        }
        createMovieList(movieDB.movies);
    }
});
