// 'use strict';

// контекст вызова функции this
// 1) Обычная функция: this = window, но если use strict - undefined

function showThis() {
    console.log(this);
}

showThis(); // -> window/undefined

///////////////////////////////////////

function showThis2(a, b) {
    console.log(this); // -> window/undefined
    function sum() {
        console.log(this); // -> window/undefined
        return a + b;
    }

    console.log(sum());
}

showThis2(4, 5); // -> 9

///////////////////////////////////////
// 2) Контекст у методов объекта - сам объект

const obj = {
    a: 20,
    b: 15,
    sum: function() {
        console.log(this);
    }
};

obj.sum();

///////////////////////////////////////
// 3) this в конструкторах и классах - это новый экземпляр объекта

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
}

const ivan = new User('Ivan', 28);
console.log(ivan);

///////////////////////////////////////
// 4) Ручная привязка this: call, apply, bind

function sayName() {
    console.log(this);
    console.log(this.name);
}

const userr = {
    name: 'John'
};

sayName.call(userr); // -> { name: 'John' } -> John
sayName.apply(userr); // -> { name: 'John' } -> John

///////////////////////////////////////

function sayName2(surname) {
    console.log(this);
    console.log(this.name + surname);
}

const userr2 = {
    name: 'John'
};

sayName2.call(userr2, 'Smith'); // -> { name: 'John' } -> JohnSmith
sayName2.apply(userr2, ['Smith']); // -> { name: 'John' } -> JohnSmith

///////////////////////////////////////

function count(num) {
    return this*num;
}

const double = count.bind(2);
console.log(double(3)); // -> 6
console.log(double(13)); // -> 26

///////////////////////////////////////
// У СТРЕЛОЧНОЙ ФУНКЦИИ нет котекста вызова, берет его у своего родителя. Пример 1.

const btn = document.querySelector('button');

btn.addEventListener('click', function() {
    console.log(this); // -> <button></button>
    this.style.backgroundColor = 'red'; // -> кнопка окрасилась в красный
});

btn.addEventListener('click', () => {
    console.log(this); // -> undefined
});

// У СТРЕЛОЧНОЙ ФУНКЦИИ нет котекста вызова, берет его у своего родителя. Пример 2.

const obj2 = {
    num: 5,
    sayNumber: function() {
        const say = () => {
            console.log(this); // this - родитель (obj)
        };

        say();
    }
};

obj2.sayNumber(); // -> {num: 5, sayNumber: f}



