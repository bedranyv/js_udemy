/* Take a Number And Sum Its Digits Raised To The Consecutive Powers And ....¡Eureka!!

The number 89 is the first integer with more than one digit that fulfills 
the property partially introduced in the title of this kata. 
What's the use of saying "Eureka"? Because this sum gives the same number.

In effect: 89 = 8^1 + 9^2

The next number in having this property is 135.

See this property again: 135 = 1^1 + 3^2 + 5^3

We need a function to collect these numbers, that may receive 
two integers a, b that defines the range [a, b] (inclusive) 
and outputs a list of the sorted numbers in the range that fulfills the property described above.

Let's see some cases:

sumDigPow(1, 10) == [1, 2, 3, 4, 5, 6, 7, 8, 9]

sumDigPow(1, 100) == [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
If there are no numbers of this kind in the range [a, b] the function should output an empty list.

sumDigPow(90, 100) == []


Возьмите число и просуммируйте его цифры в порядке следования степеней и ... ¡Эврика !!

Число 89 - это первое целое число с более чем одной цифрой, которое соответствует
свойство частично отражено в названии этого ката.
Что толку говорить «Эврика»? Потому что эта сумма дает столько же.

Фактически: 89 = 8 ^ 1 + 9 ^ 2

Следующее число обладателей этого свойства - 135.

Посмотрите это свойство еще раз: 135 = 1 ^ 1 + 3 ^ 2 + 5 ^ 3

Нам нужна функция для сбора этих чисел, которая может получить
два целых числа a, b, которые определяют диапазон [a, b] (включительно)
и выводит список отсортированных чисел в диапазоне, который удовлетворяет описанному выше свойству.

Давайте посмотрим на некоторые случаи:

sumDigPow (1, 10) == [1, 2, 3, 4, 5, 6, 7, 8, 9]

sumDigPow (1, 100) == [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
Если в диапазоне [a, b] таких чисел нет, функция должна вывести пустой список.

sumDigPow (90, 100) == []


Sample Tests:
Test.describe("Example Tests", function() {
  Test.assertSimilar(sumDigPow(1, 10), [1, 2, 3, 4, 5, 6, 7, 8, 9])
  Test.assertSimilar(sumDigPow(1, 100), [1, 2, 3, 4, 5, 6, 7, 8, 9, 89])
  Test.assertSimilar(sumDigPow(10, 100),  [89])
  Test.assertSimilar(sumDigPow(90, 100), [])
  Test.assertSimilar(sumDigPow(90, 150), [135])
  Test.assertSimilar(sumDigPow(50, 150), [89, 135])
  Test.assertSimilar(sumDigPow(10, 150), [89, 135])
});
*/

function sumDigPow(a, b) {
    let arr = [];
    let arrAnswer = [];
    for (a; a <= b; a++) {
        arr.push(a);
    }

    for (let i = 0; i < arr.length; i++) {
        let arrString = arr[i].toString();
        let sum = 0;
        for (let y = 0; y < arrString.length; y++) {
            sum = sum + Math.pow(arrString[y], y + 1);
        }

        if (arr[i] == sum) {
            arrAnswer.push(arr[i]);
        }
    }
    return arrAnswer;
}

console.log(sumDigPow(1, 10));
console.log(sumDigPow(1, 100));
console.log(sumDigPow(90, 100));
console.log(sumDigPow(10, 150));

