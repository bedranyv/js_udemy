/* 1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat.
Если стоит в позиции false - выводит в консоль объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза
отвечать на вопрос "Ваш любимый жанр под номером ${номер по порядку}".
Каждый ответ записывается в массив данных genres

P.S. Функции вызывать не обязательно */

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    // пока пользователь вводит пустую строку (''),
    // или нажимает кнопку отмена (null),
    // или вводит не число (isNAN)
    while 
        (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
            numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    
    return(numberOfFilms);
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms () {
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
}

rememberMyFilms();



function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count > 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}

detectPersonalLevel();

// Задание 2

function showMyDB () {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }
}

showMyDB();

// Задание 2 Альтернатива

function showMyDB2 (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB2(personalMovieDB.privat);

// Задание 3

function writeYouGenres() {
    for (let i = 0; i < 3; i++) {
        const favoriteGenre = prompt('Ваш любимый жанр под номером ' + (i + 1));

        // или:
        // const favoriteGenre = prompt(`Ваш любимый жанр под номером ${i+1}`);
        
        personalMovieDB.genres[i] = favoriteGenre;
    }

    // или (без объявления переменной, работает быстрее)
    // for (let i = 0; i < 3; i++) {
    //     personalMovieDB.genres[i] = prompt('Ваш любимый жанр под номером ' + (i + 1));
    // }
}

writeYouGenres();

