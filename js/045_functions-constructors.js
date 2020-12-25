// 'use strict';

// Функция конструктор. Пример №1
// /*
function User(name) {
    // this = {}; (неявно)
    this.name = name;
    this.isAdmin = false;
    // return this; (неявно)
}

let userNum1 = new User('Вася');
console.log(userNum1.name);
// */


// Функция конструктор. Пример №2
// /*
function User2(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log(`Hello, ${this.name}`);
    };
}

const ivan = new User2('Ivan', 28);
const alex = new User2('Alex', 20);

console.log(ivan);
console.log(alex);

ivan.hello();
alex.hello();

// добавление нового метода в существующий объект
User2.prototype.exit = function() {
    console.log(`Пользователь ${this.name} ушел`);
};

ivan.exit();
// */


// Функция конструктор. Пример №3
// /*
var Friend = function(name, password, interests, job){
    this.fullName = name;
    this.password = password;
    this.interests = interests;
    this.job = job;
  };
  
  function sayHello(){ 
    return `Hi, my name is ${this.fullName} and I'm a ${this.job}. Let's be friends!`;
  }

  // Мы можем создать один или несколько экземпляров объекта типа Friend, используя ключевое слово new
  var john = new Friend('John Smith', 'badpassword', ['hiking', 'biking', 'skiing'], 'teacher'); 
  
  console.log(john); 
  
  // Назначим функцию ключу greeting объекта john
  john.greeting = sayHello; 
  
  // Вызовем новый метод объекта
  console.log(john.greeting()); 
  
  // Помните о том, что sayHello() не стоит вызывать как обычную функцию
  console.log(sayHello());
// */


// Создание калькулятора при помощи конструктора
// /*
function Calculator() {
    this.read = function() {
        this.a = +prompt('Введите первое число', '');
        this.b = +prompt('Введите второе число', '');

        return (this.a, this.b);
    };

    this.sum = function() {
        return this.a + this.b;
    };

    this.mul = function() {
        return this.a * this.b;
    };
}

const calc = new Calculator();
calc.read();
console.log(calc.sum());
console.log(calc.mul());
// */


/* Создаём Accumulator
Напишите функцию-конструктор Accumulator(startingValue).

Объект, который она создаёт, должен уметь следующее:

Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора startingValue.
Метод read() использует prompt для получения числа и прибавляет его к свойству value.
Таким образом, свойство value является текущей суммой всего, что ввёл пользователь при вызовах метода read(), 
с учётом начального значения startingValue.
*/
// /*
function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function() {
        this.value = this.value + (+prompt('Сколько нужно добавить?', ''));
        console.log(this.value);
    };
}

const accumulator = new Accumulator(2);
accumulator.read();
accumulator.read();
accumulator.read();
// */