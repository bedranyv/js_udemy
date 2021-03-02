/*
Sort the odd

You will be given an array of numbers. You have to sort the odd numbers in ascending order
while leaving the even numbers at their original positions.

Вам будет предоставлен массив чисел. Вы должны отсортировать нечетные числа в порядке возрастания, 
оставив четные числа на своих исходных позициях.

Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]


Sample Tests:
Test.assertDeepEquals(sortArray([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4]);
Test.assertDeepEquals(sortArray([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0]);
Test.assertDeepEquals(sortArray([]),[]);
*/

function sortArray(array) {
    const arrOdd = array.filter(function(odd) {
        return odd % 2;
    });
    const functSortArr = (a, b) => a - b;
    arrOdd.sort(functSortArr); 

    let i = 0,
        y = 0;
    let newArray = [];
    array.forEach(element => {
        if (element % 2) {
            newArray[i] = arrOdd[y];
            y++;
        } else {
            newArray[i] = element;
        }
        i++;
    });

    return newArray;
}

console.log(sortArray([7, 1]));
console.log(sortArray([5, 8, 6, 3, 4]));
console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));