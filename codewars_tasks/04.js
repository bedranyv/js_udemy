/*
Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...

1 1 1
2 2 3
3 3 6
4 4 10
5 5 15
 

Calculate the row sums of this triangle from the row index (starting at index 1) e.g.:

rowSumOddNumbers(1); // 1
rowSumOddNumbers(2); // 3 + 5 = 8

Sample Tests:
Test.assertEquals(rowSumOddNumbers(1), 1);
Test.assertEquals(rowSumOddNumbers(42), 74088);
*/

function rowSumOddNumbers(n) {
    let sum = 1,
        num = 1,
        counterRow = 1;

        while (n-1) {
            sum = 0;
            counterRow++;
            for (let i = 0; i < counterRow; i++) {
                num+=2;
                sum+=num;
            }
            n--;
        }
    return sum;
}

console.log(rowSumOddNumbers(1));
	
// РЕШЕНИЕ ПРИВЕДЕНИЯ В СТЕПЕНЬ:
// function rowSumOddNumbers(n) {
//     return Math.pow(n, 3);
//   }