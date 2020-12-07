let a = 5,
b = a;

b = b + 5;


console.log(b);
console.log(a);

const obj = {
    a: 5,
    b: 1
};

const copyObj = obj; // кладется ссылка

copyObj.a = 10; // модифицируя копию, модифицируем и начальный объект

console.log(copyObj);
console.log(obj);


// Создание поверхностной копии объектов
// Копия только первого уровня, вложенные объекту будут ссылками

function copy(mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers);

newNumbers.a = 10;
newNumbers.c.x = 10;

console.log(newNumbers);
console.log(numbers);

// Object.assign - соединение нескольких объектов

const add = {
    d: 17,
    e: 20
};

const united = Object.assign(numbers, add);
console.log(united);

// Создание копии объекта. Вариант 2.

const clone = Object.assign({}, add);

clone.d = 20;

console.log(add);
console.log(clone);

// slice - создание поверхностной копии массива. Вариант 3.

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'abcd';

console.log(newArray);
console.log(oldArray);

// Оператор разворота. Пример 1.

const video = ['youtube', 'vimeo', 'rutube'],
    blogs = ['wordpress', 'livejournal', 'blogger'],
    internet = [...video, ...blogs, 'vk', 'fb'];

console.log(internet);


// Оператор разворота. Пример 2.

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log(...num);

// Создание поверхностной копии с помощью оператора разворота. Вариант 4.

const array2 = ['a', 'b'];

const newArray2 = [...array2];

newArray2[1] = 'c'; 

console.log(array2);
console.log(newArray2);


const q = {
    one: 1,
    two: 2
};

const newObj3 = {...q};