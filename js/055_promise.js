'use strict';

console.log('Запрос данных...');

const req = new Promise(function(resolve, reject) { 
    // resolve - запустится при успешном выполнении, reject - запустится при ошибке
    setTimeout(() => {
        console.log('Подготовка данных...');
    
        const product = {
            name: 'TV',
            price: 2000
        };
    
        resolve(product);
    }, 2000);
});

// req.then((product) => {
//     const req2 = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             product.status = 'order';
//             resolve(product);
//         }, 2000);
//     });

//     req2.then(data => {
//         console.log(data);
//     });
// });

// ИЛИ

req.then((product) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            product.status = 'order';
            resolve(product);
            // reject(); // -> catch -> Произошла ошибка
        }, 2000);
    });
}).then(data => {
    console.log(data);
}).catch(() => { // выполнится при ошибке - reject
    console.log('Произошла ошибка');
}).finally(() => { // выполнится всегда в конце, независимо от успешного или неуспешного выполнения Promise
    console.log('finally');
});

// const test = time => {
//     return new Promise(resolve => {  // если reject не нужен, можно задавать один аргумент
//         setTimeout(() => resolve(), time);
//     });
// };

const test = function(time) {
    return new Promise(function(resolve) {  // если reject не нужен, можно задавать один аргумент
        setTimeout(function() {
            resolve();
        }, time);
    });
};

test(1000).then(() => console.log('1000 ms'));
test(2000).then(() => console.log('2000 ms'));

// Promise.all ждет выполнения всех Promise и только потом выполняется
// принимает в себя массив промисов (([test(1000), test(2000)]))
Promise.all([test(1000), test(2000)]).then(() => {
    console.log('All');
});

// Promise.race выполнится после того как один из промисов выполнится
Promise.race([test(1000), test(2000)]).then(() => {
    console.log('All');
});





let promise = new Promise(function(resolve, reject) {
    // setTimeout(() => resolve('ок!'), 1000);
    resolve('ок!');
    reject('ошибка');
});

// THEN
// Первый аргумент метода .then – функция, которая выполняется, когда промис переходит в состояние «выполнен успешно».
// Второй аргумент .then – функция, которая выполняется, когда промис переходит в состояние «выполнен с ошибкой».
// выполнится только одна из функций, которая будет первее, в данном случае это reject
promise.then(
    resolve => console.log(resolve), // не выполнится
    reject => console.log(reject) // выведет 'ошибка'
);

promise.then(resolve => console.log('еще раз'));

// CATCH
// Если мы хотели бы только обработать ошибку, то можно использовать null в качестве первого аргумента: 
// .then(null, errorHandlingFunction). 
// Или можно воспользоваться методом .catch(errorHandlingFunction), который сделает тоже самое
promise.catch(console.log('ошибка'));




