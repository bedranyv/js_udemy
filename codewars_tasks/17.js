/*
Highest and Lowest

In this little assignment you are given a string of space separated numbers, 
and have to return the highest and lowest number.

В этом небольшом задании вам дается строка чисел, разделенных пробелами, 
и вы должны возвращать наибольшее и наименьшее числа.

Example:

highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Notes:

All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.

Sample Tests:
Test.assertEquals(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"), "542 -214");

*/


function highAndLow(numbers){
    let arr = numbers.split(' ');

    function compareNum(a, b) {
        return a - b;
    }

    arr.sort(compareNum);

    return arr[arr.length - 1] + ' ' + arr[0];
}

console.log(highAndLow('1 2 3 4 5'));
console.log(highAndLow('1 2 -3 4 5'));
console.log(highAndLow('1 9 3 4 -5'));