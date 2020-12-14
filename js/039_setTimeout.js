const timerId1 = setTimeout(function() {
    console.log('Timer #1');
}, 500); // 0,5 секунды

const timerId2 = setTimeout(function(text) {
    console.log(text);
}, 500, 'Timer #2'); 

// Передача готовой функции
const timerId3 = setTimeout(logger, 500);

function logger() {
    console.log('Timer #3');
}

// Остановка таймера
clearInterval(timerId3);

// Повтор через определенный интервал
const timerId4 = setInterval(function() {
    console.log('Timer #4');
}, 500); // 2 секунды
// для остановки, используется та же функция clearInterval:
clearInterval(timerId4);

// Еще один вариант с объявлением переменной заранее.
let timerId5;
timerId5 = setTimeout(function() {
    console.log('Timer #5');
}, 500); // 2 секунды

// Задача. При клике на кнопку запускается setInterval и после 4 раз останавливается:
const btn = document.querySelector('.btn');
let timerId6,
    i = 0;

btn.addEventListener('click', () => {
    i = 0;
    timerId6 = setInterval(logger2, 500);
});

const logger2 = function() {
    if (i === 3) {
        clearInterval(timerId6);
    }
    console.log('Timer #6');
    i++;
};

// Рекурсивный вызов setTimeout
// Отрабатывает функция (даже если она будет работать 30 сек) и после этого ждет 0,5сек.
// Предыдущие варианты работают по другому, отрабатывает функция и если она будет работать дольше времени в setTimeout,
// то следующий раз функция будет отрабатывать сразу.
let timerId7 = setTimeout(function log() {
    console.log('Timer #7');
    timerId7 = setTimeout(log, 500);
}, 500);