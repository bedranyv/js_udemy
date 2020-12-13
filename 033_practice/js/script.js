  
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
      addForm = document.querySelector('.add'),
      addBtn = addForm.querySelector('button'),
      addInput = addForm.querySelector('.adding__input'),
      checkbox = addForm.querySelector('[type="checkbox"]');


const deleteAdv = (arr) => {
    arr.forEach(item => {
        item.remove();
    });
};

function makeChanges() {
    posterGenre.textContent = 'Драма';
    poster.style.backgroundImage = 'url("img/bg.jpg")';
}

function createMovieList(films, parent) {
    parent.innerHTML = '';
    sortArr(films);
    films.forEach((film, i) => {
        parent.innerHTML += `
            <li class="promo__interactive-item">
            ${i + 1}. ${film} 
            <div class="delete"></div>
            </li>
        `;
    });

    document.querySelectorAll('.delete').forEach((btnDel, i) => {
        btnDel.addEventListener('click', () => {
            btnDel.parentElement.remove();
            movieDB.movies.splice(i, 1);
            createMovieList(movieDB.movies, movieList);
        });
    });
}

function sortArr(arr) {
    arr.sort();
}

addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let newFilm = addInput.value;
    const favorite = checkbox.checked;

    if (newFilm) {
        if (newFilm.length > 21) {
            newFilm = `${newFilm.substring(0,21)}... `;
        }
        movieDB.movies.push(newFilm);
        
        if (favorite) {
            console.log('Добавляем любимый фильм');
        }

        createMovieList(movieDB.movies, movieList);

        addForm.reset(); // очищаем форму
    } else {
        console.log('Ничего не введено');
    }
});

deleteAdv(promoAdv);
makeChanges(); 
createMovieList(movieDB.movies, movieList);