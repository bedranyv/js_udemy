'use strict';

// new RegExp('pattern', 'flags');
// /pattern/f 

const ans = 'ANN';

const reg = /n/i;
const reg2 = /n/ig;

// ФЛАГИ
// i - вне зависимости от регистра
// g - поиск нескольких вхождений
// m - многострочный режим 

console.log(ans.search(reg)); // -> 1 (индекс первой буквы)
console.log(ans.match(reg)); // -> [ 'N', index: 1, input: 'ANN', groups: undefined ]
console.log(ans.match(reg2)); // -> [ 'N', 'N' ]

const pass = 'password.';

console.log(pass.replace(/./g, '*')); // Точка значит все элементы строки -> *********
console.log(pass.replace(/\./g, '*')); // "\"" - Экранирование, точка значит точка -> password*

console.log('12-34-56'.replace(/-/g, ':')); // -> 12:34:56

console.log(reg2.test(ans)); // -> true

// КЛАССЫ
// \d - поиск цифр
// \w - поиск букв
// \s - поиск пробелов

const str = 'abcd1234';
const reg3 = /\d/;
console.log(str.match(reg3)); // -> [ '1', index: 4, input: 'abcd1234', groups: undefined ]

const reg4 = /\d/g;
console.log(str.match(reg4)); // -> [ '1', '2', '3', '4' ]


const str2 = 'My name is R2D2';
console.log(str2.match(/\w\d\w\d/i)); // -> [ 'R2D2', index: 11, input: 'My name is R2D2', groups: undefined ]

// ОБРАТНЫЕ КЛАССЫ
// \D - поиск не цифр
// \W - поиск не букв

console.log(str2.match(/\W/i)); // -> [ ' ', index: 2, input: 'My name is R2D2', groups: undefined ]
console.log(str2.match(/\D/ig)); // -> ['M', 'y', ' ', 'n', 'a', 'm', 'e', ' ', 'i', 's', ' ', 'R', 'D']


