/* Highest Rank Number in an Array

Complete the method which returns the number which is most frequent in the given input array. 
If there is a tie for most frequent number, return the largest number among them.

Note: no empty arrays will be given.

Examples
[12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
[12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
[12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

Sample Tests:
var arr = [12, 10, 8, 12, 7, 6, 4, 10, 12];
Test.assertSimilar( highestRank(arr), 12);
*/

function highestRank(arr){
    let counterArr = [],
        counter;
    for (let i = 0; i < arr.length; i++) {
        counter = 1;
        for (let y = 0; y < arr.length; y++) {
            if (i == y) {
               break;
            }
            if (arr[i] == arr[y]) {
                counter++;
            }
        }
        counterArr.push(counter);
    }

    let maxCounter = Math.max(...counterArr),
        highestNumbers = [];

    for (let i = 0; i < arr.length; i++) {
        counter = 1;
        for (let y = 0; y < arr.length; y++) {
            if (i == y) {
               break;
            }
            if (arr[i] == arr[y]) {
                counter++;
            }
        }
        if (maxCounter == counter) {
            highestNumbers.push(arr[i]);
        }
    }

    if (highestNumbers.length == 1) {
        return highestNumbers[0];
    } else {
        return Math.max(...highestNumbers);
    }
}


var arr1 = [12, 10, 8, 12, 7, 6, 4, 10, 12];
var arr2 = [12, 10, 8, 12, 7, 6, 4, 10, 12, 10] ;
var arr3 = [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10];

console.log(highestRank(arr1));
console.log(highestRank(arr2));
console.log(highestRank(arr3));