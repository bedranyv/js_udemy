/* 1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки, 
отменить ответ или ввести название фильма длинее, чем 50 символов. 
Если это происходит - возвращаем пользователя к вопросам опять. 
(К любой строке можно обратиться как str.length - и получить ее длину)

3) При помощи условий проверить personalMovieDB.count, и если он меньше 10 - 
вывести сообщение "Просмотрено довольно мало фильмов", 
если от 10 до 30 - "Вы классический зритель", 
а если больше - "Вы киноман". А если не подошло ни к одному варианту 
- "Произошла ошибка".

4) Потренироваться и переписать цикл еще двумя способами */

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

/* Способ № 1 */

for (let i = 1; i <= numberOfFilms; i++) {
    let film;

    do {
        film = prompt('Один из последних просмотренных фильмов?', '');
    }
    while (film.length == 0 || film.length >50 || film == null);
    /* film == null появляется, когда нажимается кнопка отмена */

    let rating = prompt('На сколько оцените его?', '');
    
    personalMovieDB.movies[film] = rating;
}

console.log(personalMovieDB);

if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count > 30) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
}


/* Способ № 2 */

for (let i = 0; i < numberOfFilms; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
    b = prompt('На сколько оцените его?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        /* '' - пустая строка */
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}

console.log(personalMovieDB);

/* Способ № 3 */
/* пока условие выполняется */

let i = 1;
while (i <= numberOfFilms) {
    let film;

    do {
        film = prompt('Один из последних просмотренных фильмов?', '');
    }
    while (film.length == 0 || film.length >50 || film == null);
    /* film == null появляется, когда нажимается кнопка отмена */

    let rating = prompt('На сколько оцените его?', '');
    
    personalMovieDB.movies[film] = rating;

    i++;
}

console.log(personalMovieDB);

/* Способ № 4 */

i = 1;
do {
    let film;

    do {
        film = prompt('Один из последних просмотренных фильмов?', '');
    }
    while (film.length == 0 || film.length >50 || film == null);
    /* film == null появляется, когда нажимается кнопка отмена */

    let rating = prompt('На сколько оцените его?', '');
    
    personalMovieDB.movies[film] = rating;

    i++;
}

while (i <= numberOfFilms);

console.log(personalMovieDB);
