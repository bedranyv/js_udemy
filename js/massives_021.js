// Массивы

const arr = [1, 2, 3, 6, 8];

// Удаление последнего элемента из массива
arr.pop();

// Добавление элемента в конец массива
arr.push(10);

// Длина массива (индекс последнего элемента + 1)

console.log(arr.length);

console.log(arr);

// Перебор всех элементов массива. Вариант 1.

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// Перебор всех элементов массива. Вариант 2.
// Можно использовать break и continue

for (let value of arr) {
    console.log(value);
}

// Перебор всех элементов массива. Вариант 3.
// Метод forEach, самый популярный

arr.forEach(function(item, i, arr) {
    console.log(`${i}: ${item} внутри массива ${arr}`);
});

// split - из строки сформировать массив
// внутри split() пишем отделяются элементы в строке

const str = prompt('', '');
const products = str.split(', ');
console.log(products);

// join - из массива в строку
// внутри join() пишем чем будут отделяться элементы в строке
// после преобразования из массива

console.log(products.join('; '));

// sort - метод сотрировки в алфавитном порядке
// сортирует все как строки (не работает для чисел,
// сортирует их по первому символу)

console.log(products.sort());

// сортировка чисел в массивах с помощью sort

const arrNum = [2, 13, 26, 8, 10];

arrNum.sort(compareNum);
console.log(arrNum);

function compareNum(a, b) {
    return a - b;
}
