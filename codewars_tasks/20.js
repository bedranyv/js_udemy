/*
A square of squares
You like building blocks. You especially like building blocks that are squares. 
And what you even like more, is to arrange them into a square of square building blocks!

However, sometimes, you can't arrange them into a square. 
Instead, you end up with an ordinary rectangle! Those blasted things! 
If you just had a way to know, whether you're currently working in vain… Wait! 
That's it! You just have to check if your number of building blocks is a perfect square.

Task
Given an integral number, determine if it's a square number:

In mathematics, a square number or perfect square is an integer that is the square of an integer; 
in other words, it is the product of some integer with itself.

The tests will always use some integral number, so don't worry about that in dynamic typed languages.

Квадрат квадратов
Вам нравятся строительные блоки. Вам особенно нравятся квадратные строительные блоки.
И что вам даже больше нравится, так это расположить их в виде квадрата из квадратных строительных блоков!

Однако иногда вы не можете расположить их в квадрат.
Вместо этого вы получите обычный прямоугольник! Эти проклятые штуки!
Если бы у вас был только способ узнать, работаете ли вы в настоящее время напрасно… Подождите!
Это оно! Вам просто нужно проверить, является ли ваше количество строительных блоков идеальным квадратом.

Задача
Учитывая целое число, определите, квадратное ли оно:

В математике квадратное число или полный квадрат - это целое число, которое является квадратом целого числа;
другими словами, это произведение некоторого целого числа на себя.

Тесты всегда будут использовать какое-то целое число, поэтому не беспокойтесь об этом в языках с динамической типизацией.

Examples
-1  =>  false
 0  =>  true
 3  =>  false
 4  =>  true
25  =>  true
26  =>  false

Sample Tests:
Test.describe("isSquare", function(){
  Test.it("should work for some examples", function(){
    Test.assertEquals(isSquare(-1), false, "-1: Negative numbers cannot be square numbers");
    Test.assertEquals(isSquare( 0), true, "0 is a square number (0 * 0)");
    Test.assertEquals(isSquare( 3), false, "3 is not a square number");
    Test.assertEquals(isSquare( 4), true, "4 is a square number (2 * 2)");
    Test.assertEquals(isSquare(25), true, "25 is a square number (5 * 5)");
    Test.assertEquals(isSquare(26), false, "26 is not a square number");
  });
});
*/

var isSquare = function(n){
    if (Number.isInteger(Math.sqrt(n))) {
        return true;
    } else {
        return false;
    }
};

// ВАРИАНТ 2
// var isSquare = function(n){
//     return Number.isInteger(Math.sqrt(n));
// };

console.log(isSquare( 0));

console.log(isSquare(3));
console.log(isSquare(4));
console.log(isSquare(25));
console.log(isSquare(26));
