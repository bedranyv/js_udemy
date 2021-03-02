/*
Find the odd int

Given an array of integers, find the one that appears an odd number of times.
There will always be only one integer that appears an odd number of times.

Дан массив целых чисел, найдите тот, который встречается нечетное количество раз.
Всегда будет только одно целое число, которое встречается нечетное количество раз.

Sample Tests:
function doTest(a, n) {
  console.log("A = ", a);
  console.log("n = ", n);
  Test.assertEquals(findOdd(a), n);
}
Test.describe('Example tests', function() {
  doTest([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5], 5);
  doTest([1,1,2,-2,5,2,4,4,-1,-2,5], -1);
  doTest([20,1,1,2,2,3,3,5,5,4,20,4,5], 5);
  doTest([10], 10);
  doTest([1,1,1,1,1,1,10,1,1,1,1], 10);
  doTest([5,4,3,2,1,5,4,3,2,10,10], 1);
});
*/

function findOdd(A) {
    let counter = 0,
        repeatNumber = '';
    for (let i = 0; i < A.length; i++) {
        A.forEach(function(element, y) {
            if (A[i] == element) {
                counter++;
                repeatNumber = element;
            }
        });

        if (counter % 2) {
            return repeatNumber;
        }
        
        counter = 0;
        repeatNumber = '';
    }

    return 0;
}

console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]));
console.log(findOdd([1,1,2,-2,5,2,4,4,-1,-2,5]));
console.log(findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5]));
console.log(findOdd([10]));
console.log(findOdd([1,1,1,1,1,1,10,1,1,1,1]));
console.log(findOdd([5,4,3,2,1,5,4,3,2,10,10]));


// console.log(2 % 2);
// console.log(4 % 2);
// console.log(1 % 2);