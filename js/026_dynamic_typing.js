// To String 

// 1 //
console.log(typeof(String(null)));
console.log(typeof(String(3)));

// 2 //
console.log(typeof(5 + '')); // при сложении со строкой получается строка

const num = 5;
console.log('https://vk.com/' + num);

// To Number 

// 1 //
console.log(typeof(Number('3')));

// 2 - Унарный плюс //
console.log(typeof(+'5'));

// 3 //
console.log(typeof(parseInt('15px', 10)));

// To boolean

// 0, '', null, undefined, NaN - false
// Все остальное - true

// 1 //
console.log(typeof(Boolean('4')));

// 2 //
let switcher = null;

if (switcher) {
    console.log('Working');
}

switcher = 1;

if (switcher) {
    console.log('Working...');
}

// 3 //
console.log(typeof(!!'4444'));

