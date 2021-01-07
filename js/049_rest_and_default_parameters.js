// REST оператор

const log = function(a, b, ...rest) {
    console.log(a, b, rest);
};

log('num1', 'num2', 'num3', 'num4');

// ПАРАМЕТР ПО УМОЛЧАНИЮ (если аргумент не задан, можно сделать присваивание ему по умолчанию)

function calcOrDouble(number, basis = 2) {
    console.log(number * basis);
}

calcOrDouble(3);