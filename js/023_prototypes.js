let str = 'some';
let strObj = new String(str);

console.log(typeof(str));
console.log(typeof(strObj));

console.dir([1,2,3]);



const soldier = {
    health: 400,
    armor: 100
};

const john = {
    health: 100
};

// Устаревший код прототипа:
// john.__proto__ = soldier;

// Современный код прототипа:
Object.setPrototypeOf(john, soldier);

console.log(john.armor);

// Создание прототипа
const john2 = Object.create(soldier);
console.log(john2.health);


