'use strict';

const now = new Date();
console.log(now);

const date = new Date('2020-12-19');
console.log(date);

// отсчет месяцев идет с 0, часы по гринвичу
const date2 = new Date(2020, 5, 1, 20);
console.log(date2);

// кол-во милисекунд (0) от 1970-01-01
const date3 = new Date(0);
console.log(date3);

const date4 = new Date();
console.log(date4.getFullYear()); // год
console.log(date4.getMonth()); // месяц, отсчет с нуля
console.log(date4.getDate()); // число
console.log(date4.getDay()); // день недели
console.log(date4.getHours()); // час
console.log(date4.getUTCHours()); // час UTC
console.log(date4.getTimezoneOffset()); // разница в минутах между местным часовым поясом и поясом по гринвичу
console.log(date4.getTime()); // кол-во мс прошедших с 1970 года 

date4.setHours(23); // установка часа, все остальные методы аналогичны get-set
console.log(date4);

// Бенчмарк, измерение времени отработки цикла
let start = new Date();

for (let i = 0; i < 100000; i++) {
    let some = i ** 3;
}

let end = new Date();

console.log(`Цикл отработал за ${end - start} миллисекунд`);