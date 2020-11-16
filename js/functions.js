/* при запуске скрипта сначала выполняются переменные var 
и функции (только Function Declaration, пример 1, 2, 3),
потом весь остальной код.
Тоесть функцию можно вызвать до ее объявления */

// 1 //

let num = 20; // глобальная переменная

function showFirstMessage(text) {
    console.log(text);
    let num = 10; // локальная переменная (в функции)
    console.log(num); 
    // сначала функция сканирует num локально, 
    // если не находит внутри себя - ищет на уровень выше
}

showFirstMessage('Hello World!');
console.log(num);

// 2 //

function calc(a, b) {
    return (a + b);
    // return - окончание функции, после него ниче не выполнится
}

console.log(calc(4, 3));
console.log(calc(5, 6));

// 3 //

function ret() {
    let num = 50;
    return num;
    // во внеший мир возвращается значение локальной переменной
}

const anotherNum = ret();
console.log(anotherNum);

// 4 //
/* Function Expression - создается только тогда, когда доходит поток кода,
можно вызывать только после объявления */

const logger = function() {
  console.log('Hello');  
};

logger();

// 5 // 
/* Стрелочная функция */

const calc2 = (a, b) => a + b;