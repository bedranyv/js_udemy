/* Equal Sides Of An Array
You are going to be given an array of integers. Your job is to take that array 
and find an index N where the sum of the integers to the left of N is equal to the sum 
of the integers to the right of N. If there is no index that would make this happen, return -1.

For example:

Let's say you are given the array {1,2,3,4,3,2,1}:
Your function will return the index 3, because at the 3rd position of the array, 
the sum of left side of the index ({1,2,3}) and the sum of the right side of the index ({3,2,1}) both equal 6.

Let's look at another one.
You are given the array {1,100,50,-51,1,1}:
Your function will return the index 1, because at the 1st position of the array, 
the sum of left side of the index ({1}) and the sum of the right side of the index ({50,-51,1,1}) both equal 1.

Last one:
You are given the array {20,10,-80,10,10,15,35}
At index 0 the left side is {}
The right side is {10,-80,10,10,15,35}
They both are equal to 0 when added. (Empty arrays are equal to 0 in this problem)
Index 0 is the place where the left side and right side are equal.

Note: Please remember that in most programming/scripting languages the index of an array starts at 0.

Input:
An integer array of length 0 < arr < 1000. The numbers in the array can be any integer positive or negative.

Output:
The lowest index N where the side to the left of N is equal to the side to the right of N. 
If you do not find an index that fits these rules, then you will return -1.

Note:
If you are given an array with multiple answers, return the lowest correct index.

Вам будет дан массив целых чисел. Ваша задача - взять этот массив и найти индекс N, 
где сумма целых чисел слева от N равна сумме целых чисел справа от N. 
Если нет индекса, который мог бы сделать это, верните - 1.

Например:

Допустим, вам дан массив {1,2,3,4,3,2,1}:
Ваша функция вернет индекс 3, потому что в 3-й позиции массива сумма левой части индекса ({1,2,3}) 
и сумма правой части индекса ({3,2, 1}) оба равны 6.

Посмотрим еще на один.
Вам дан массив {1,100,50, -51,1,1}:
Ваша функция вернет индекс 1, потому что в 1-й позиции массива сумма левой части индекса ({1}) 
и сумма правой части индекса ({50, -51,1,1 }) оба равны 1.

Последний:
Вам дан массив {20,10, -80,10,10,15,35}
В индексе 0 левая сторона {}
Правая сторона: {10, -80,10,10,15,35}
При добавлении они оба равны 0. (Пустые массивы в этой задаче равны 0)
Индекс 0 - это место, где левая и правая стороны равны.

Примечание: помните, что в большинстве языков программирования / сценариев индекс массива начинается с 0.

Вход:
Целочисленный массив длины 0 <arr <1000. Числа в массиве могут быть любыми целыми положительными или отрицательными.

Выход:
Самый низкий индекс N, где сторона слева от N равна стороне справа от N. 
Если вы не найдете индекс, который соответствует этим правилам, вы вернете -1.

Примечание:
Если вам дан массив с несколькими ответами, верните наименьший правильный индекс.

Sample Tests:
Test.describe("FindEvenIndex", function() {
  Test.it("Tests", function() {
    Test.assertEquals(findEvenIndex([1,2,3,4,3,2,1]),3, "The array was: [1,2,3,4,3,2,1] \n");
    Test.assertEquals(findEvenIndex([1,100,50,-51,1,1]),1, "The array was: [1,100,50,-51,1,1] \n");
    Test.assertEquals(findEvenIndex([1,2,3,4,5,6]),-1, "The array was: [1,2,3,4,5,6] \n");
    Test.assertEquals(findEvenIndex([20,10,30,10,10,15,35]),3, "The array was: [20,10,30,10,10,15,35] \n");
  });
});
*/

function findEvenIndex(arr) {
    for (let i = 0; i < arr.length; i++) {
        let sum1 = 0,
            sum2 = 0,
            x = i,
            y = i + 1;
        while (x) {
            sum1+=arr[x-1];
            x--;
        }
        
        while (y < arr.length) {
            sum2+=arr[y];
            y++;
        }

        if (sum1 == sum2) {
            return i;
        }
    }
    return -1;
}

console.log(findEvenIndex([1,2,3,4,3,2,1]));
console.log(findEvenIndex([1,100,50,-51,1,1]));
console.log(findEvenIndex([1,2,3,4,5,6]));
console.log(findEvenIndex([20,10,30,10,10,15,35]));