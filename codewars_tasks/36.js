/* Integers: Recreation One
Divisors of 42 are : 1, 2, 3, 6, 7, 14, 21, 42. These divisors squared are: 1, 4, 9, 36, 49, 196, 441, 1764. 
The sum of the squared divisors is 2500 which is 50 * 50, a square!

Given two integers m, n (1 <= m <= n) we want to find all integers between m and n whose sum of squared divisors 
is itself a square. 42 is such a number.

The result will be an array of arrays or of tuples (in C an array of Pair) or a string, 
each subarray having two elements, first the number whose squared divisors is a square and then the sum 
of the squared divisors.

Examples:
list_squared(1, 250) --> [[1, 1], [42, 2500], [246, 84100]]
list_squared(42, 250) --> [[42, 2500], [246, 84100]]
The form of the examples may change according to the language, see Example Tests: for more details.

Note

In Fortran - as in any other language - the returned string is not permitted to contain any redundant 
trailing whitespace: you can use dynamically allocated character strings.

Sample Tests:
Test.describe("Basic tests",function() {
Test.assertSimilar(listSquared(1, 250), [[1, 1], [42, 2500], [246, 84100]])
Test.assertSimilar(listSquared(42, 250), [[42, 2500], [246, 84100]])
Test.assertSimilar(listSquared(250, 500), [[287, 84100]])

})
*/

function listSquared(m, n) {
    let num1,
        num2 = m,
        arrNum,
        sum,
        answerArr = [],
        indexAnswerArr = 0;

    while (num2 <= n) {
        num1 = 1;
        arrNum = [];
        sum = 0;

        while (num1 <= num2) {
            if (num2%num1 == 0) {
                arrNum.push(num1);
            }
            num1++;
        }

        for (let i = 0; i < arrNum.length; i++) {
            arrNum[i] = Math.pow(arrNum[i], 2);
            sum+=arrNum[i];
        }

        if (Number.isInteger(Math.sqrt(sum))) {
            answerArr[indexAnswerArr] = [num2, sum];
            indexAnswerArr++;
        }
    num2++;
    }
    return answerArr;
}

console.log(listSquared(1, 250));
console.log(listSquared(42, 250));
console.log(listSquared(250, 500));