'use strict';

// МЕТОД FILTER - фильтрует элементы массива

const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];

const shortNames = names.filter(function(name) { // можно исп. и стр. функцию
    return name.length < 5;
});

console.log(shortNames); // -> ['Ivan', 'Ann']

// МЕТОД MAP - позволяет трансформировать каждый отдельный элемент массива

const answers = ['IvAn', 'AnnA', 'Hello'];

const result = answers.map(item => {
    return item.toLowerCase(); 
});
// ИЛИ
// const result = answers.map(item => item.toLowerCase());

console.log(result); // -> ['ivan', 'anna', 'hello']

// ИЛИ без создания нового массива (нежелательно с точки зрения иммутабельности):

let answers2 = ['IvAn', 'AnnA', 'Hello'];

answers2 = answers2.map(item => {
    return item.toLowerCase(); 
});

console.log(answers2); // -> ['ivan', 'anna', 'hello']

// МЕТОДЫ EVERY/SOME - возвращают булиновые значения

const some = [4, 'stroka', 'biliberda'];

// SOME - возвращает TRUE, если хотя бы один элемент соответствует значению
console.log(some.some(item => typeof(item) === 'number')); // -> true

// EVERY - возвращает TRUE, если все элементы соответствуют значению
console.log(some.every(item => typeof(item) === 'number'));  // -> false

// МЕТОД REDUCE - для схлопывания или сбора массива в единое целое

const arr = [4, 5, 1, 3, 2, 6];
                     //  0     4
                     //  4     5
                     //  9     1
                     //  10    3 ...
const res = arr.reduce((sum, current) => sum + current);
console.log(res); // -> 21

const res2 = arr.reduce((sum, current) => sum + current, 3); // задаем начальное значение (3)
console.log(res); // -> 24

const arrStr = ['apple', 'pear', 'plum'];

const resStr = arrStr.reduce((sum, current) => `${sum}, ${current}`);
console.log(resStr); // -> apple, pear, plum


const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal'
};

// Object.entries(obj) - превращение объекта в матрицу (массив массивов)

const newArr = Object.entries(obj)
// [
//     [ 'ivan', 'persone' ],
//     [ 'ann', 'persone' ],
//     [ 'dog', 'animal' ],
//     [ 'cat', 'animal' ] 
// ]
.filter(item => item[1] === 'persone')
// [ [ 'ivan', 'persone' ], [ 'ann', 'persone' ] ]
.map(item => item[0]);
// [ 'ivan', 'ann' ]

console.log(newArr); // -> [ 'ivan', 'ann' ]