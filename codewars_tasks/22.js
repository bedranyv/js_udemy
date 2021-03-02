/* Build a pile of Cubes
Your task is to construct a building which will be a pile of n cubes. 
The cube at the bottom will have a volume of n^3, 
the cube above will have volume of (n-1)^3 and so on until the top which will have a volume of 1^3.

You are given the total volume m of the building. 
Being given m can you find the number n of cubes you will have to build?

The parameter of the function findNb (find_nb, find-nb, findNb) 
will be an integer m and you have to return the integer n 
such as n^3 + (n-1)^3 + ... + 1^3 = m if such a n exists or -1 if there is no such n.

Собери кучу кубиков
Ваша задача построить здание, которое будет представлять собой груду из n кубиков.
Куб внизу будет иметь объем n ^ 3,
куб выше будет иметь объем (n-1) ^ 3 и так далее до вершины, которая будет иметь объем 1 ^ 3.

Вам дан общий объем здания m.
Получив m, сможете ли вы найти количество n кубиков, которое вам нужно будет построить?

Параметр функции findNb (find_nb, find-nb, findNb)
будет целым числом m, и вы должны вернуть целое число n
например, n ^ 3 + (n-1) ^ 3 + ... + 1 ^ 3 = m, если такое n существует, или -1, если такого n нет.

Examples:
findNb(1071225) --> 45
findNb(91716553919377) --> -1
mov rdi, 1071225
call find_nb            ; rax <-- 45

mov rdi, 91716553919377
call find_nb            ; rax <-- -1

Sample Tests:
Test.describe("Basic tests",function() {

Test.assertEquals(findNb(4183059834009), 2022)
Test.assertEquals(findNb(24723578342962), -1)
Test.assertEquals(findNb(135440716410000), 4824)
Test.assertEquals(findNb(40539911473216), 3568)
})
*/

function findNb(m) {
    let n = 0,
        sum = 0;
    while (sum < m) {
        n++;
        sum = sum + Math.pow(n, 3);
    }

    return sum === m ? n : -1;
}

console.log(findNb(4183059834009));
console.log(findNb(24723578342962));
console.log(findNb(135440716410000));
console.log(findNb(40539911473216));