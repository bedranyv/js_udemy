/* МЕТОДЫ И СВОЙСТВА СТРОК И ЧИСЕЛ */

/* СТРОКИ */

const str = 'test';
const arr = [1, 2, 4];

/* длина строки */
console.log(str.length); 
/* кол-ов элементов в массиве */
console.log(arr.length);
/* Третий символ строки (нумерация с нуля) */
console.log(str[2]);

/* метод изменения регистра, не изменяет первоначальное значение */
console.log(str.toUpperCase());
console.log(str);

/* метод поиска куска строки (поиск подстроки), 
например Индекс (порядковый номер), с которого начинается слово */

let fruit = 'Some fruit';
console.log(fruit.indexOf('fruit'));

/* если искомого слова/символа нет - выводит "-1" */
console.log(fruit.indexOf('q'));

/* метод вырезания из строки (c 6 по 11 индексы) */
const logg = 'Hello world';

console.log(logg.slice(6,11));

/* отрицательные числа - индекс считается справа */
console.log(logg.slice(-9,-6));

/* substring - данный метод идентичен slice, только не поддерживает
отрицательные значения */
console.log(logg.substring(6, 11));

/* substr - данный метод идентичен slice и substring, 
только во втором значении не индекс, а кол-во символов (5),
которое необходимо вырезать после индекса (6) */
console.log(logg.substr(6, 5));

/* ЧИСЛА */

const numb = 12.2;

/* Округление */
console.log(Math.round(numb));

const test = '12.2px';

/* Перевод строки в другую систему исчисления с округлением */
console.log(parseInt(test));

/* Перевод строки в десятичный вариант */
console.log(parseFloat(test));