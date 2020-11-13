// "use strict"; // строгий режим

let number = 5; // изменяемая переменная
const leftBorderWidth = 1; // постоянная переменная, нельзя изменить потом
var name2 = "Ivan"; // устаревший метод объявления переменных

number = 10;
console.log(number);

let number2 = 4; // числовой тип данных
const persone = "5"; // строчный тип данных
const bool = true; // логический тип данных

// Объект, внутри него (name, age..) - это свойство объекта
const obj = {
    name: "John",
    age: 25,
    isMarried: false
};

// обращение к свойствам объекта
console.log(obj.name);

// массив
let arr = ['plumd.png', 'orange.jpg', 'apple.bmp'];

// обращение к элементу массива (начинается с 0)
console.log(arr[1]);

// alert('Hello!');

// модальное окно с да или нет:
const result = confirm("Are you here?");

// модальное окно с инпутом для ввода данных:
const answer = prompt("Вам есть 18?", "18");

// узнать тип данных
console.log(typeof(answer));

// создаем пустой массив
const answers = [];

answers[0] = prompt('Как ваше имя?', '');
answers[1] = prompt('Как ваша фамилия?', '');
answers[2] = prompt('Сколько вам лет?', '');

// смотрим введенные данные на странице
document.write(answers);

const category = 'toys';

// ИНТЕРПОЛЯЦИЯ - подстановка переменной, нужно использовать бэктики - косые кавычки
console.log(`https://someurl.com/${category}`);

// ПОСТФИКСНЫЕ И ПРЕФИКСНЫЕ ИНКРЕМЕНТЫ И ДЕКРЕМЕНТЫ
let incr = 10,
    decr = 10;

incr++; // постфиксный (++incr префиксный) инкремент - увеличение на еденицу - 10+1
decr--; // постфиксный декремент - уменьшение на еденицу - 10-1

console.log(incr);
console.log(decr);

// РАВЕНСТВА
console.log (4*2 == 8); // равенство, равно ли 4*2=8? вывод - true
console.log (4*2 == '8'); // равенство, равно ли 4*2='8'(строчный элемент)? вывод - true
console.log (4*2 === '8'); // строгое равенство, равно ли 4*2=8? вывод - false

// && - И
// || - ИЛИ

const isChecked = true,
        isClose = true;

console.log(isChecked && isClose);

// ! - ОПЕРАТОР ОТРИЦАНИЯ

console.log(isChecked && !isClose); //isClose стал false
console.log (4*2 != '8'); // неравенство (противоположность ==), неравно ли 4*2='8'(строчный элемент)? вывод - false
console.log (4*2 !== '8'); // строгое неравенство (противоположность ===), равно ли 4*2=8? вывод - true
