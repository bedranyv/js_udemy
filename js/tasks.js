/*
// Напишите однострочное решение, которое вычисляет сумму квадратных корней 
// для всех чётных чисел целочисленного массива.

// Многострочное решение мое
const mas = [1, 4, 3, 0, 4, 5, 16];
function sum(m) {
    let sum = 0;
    for(let i = 0; i < m.length; i++) {
        if(m[i] % 2 == 0 && m[i] != 0) {
            console.log('Число', m[i], 'является четным, вычисляем корень и суммируем.');
            sum = sum + Math.sqrt(m[i]);
        }
    }
    return sum;
} 
console.log('Сумма квадратных корней четных чисел массива равна', sum(mas));

// Однострочное решение
console.log(
    [1, 4, 3, 0, 4, 5, 16]
    .filter(element => !(element % 2))
    .reduceRight((accumulator, element) => accumulator + Math.sqrt(element), 0)
);
*/
