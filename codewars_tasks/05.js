/*
ПРИВЕДЕНИЕ К СТРОКЕ. СПОСОБЫ.

We need a function that can transform a number into a string.

What ways of achieving this do you know?

Examples:
numberToString(123); // returns '123';`   
numberToString(999); // returns '999';`

Sample Tests:
Test.assertEquals(numberToString(67), '67');

*/

function numberToString(num) {
    return num.toString();  // Вариант 1
    // return String(num);  // Вариант 2
    // return '' + num;  // Вариант 3
}

console.log(typeof(numberToString(123)));
console.log(numberToString(123));