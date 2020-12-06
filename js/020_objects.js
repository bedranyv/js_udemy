// Объект

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    }
};

console.log(options.name);

// обращение к объекту внутри объекта
// console.log(options['colors']['border']); // Вариант 1
console.log(options.colors.border); // Вариант 2

// удаление свойств из объекта
delete options.name;

console.log(options);

// перебор объекта
for (let key in options) {
    console.log(`Свойство ${key} имеет значение ${options[key]}`);
}

// перебор объекта и объектов внутри объекта
for (let key in options) {
    if (typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
        }
    } else {
    console.log(`Свойство ${key} имеет значение ${options[key]}`);
    }
}

// метод вывода ключей объекта
console.log(Object.keys(options));

// метод вывода количества ключей в объекте
console.log(Object.keys(options).length);

// метод внутри объекта
const options2 = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log('Test');
    }
};

options2.makeTest();


// Деструктуризация объекта 

const {border, bg} = options2.colors;
console.log(border);
