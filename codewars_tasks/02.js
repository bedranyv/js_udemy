/*
In this kata you will create a function that takes a list of non-negative integers and 
strings and returns a new list with the strings filtered out.

Фильтр, вывести новый массив только с цифрами

Example
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

Sample Tests:
Test.assertSimilar(filter_list([1,2,'a','b']),[1,2])
Test.assertSimilar(filter_list([1,'a','b',0,15]),[1,0,15])
Test.assertSimilar(filter_list([1,2,'aasf','1','123',123]),[1,2,123])
*/

function filterList(l) {
    return l.filter(function(item) {
        return typeof item == 'number';
    });
}

/* через стрелочную функцию:
function filterList(l) {
    return l.filter(item => typeof item == 'number');
}
*/


console.log(filterList([1,2,'a','b']));
console.log(filterList([1,'a','b',0,15]));
console.log(filterList([1,2,'aasf','1','123',123]));


/* 
ИЛИ:
function filterList(l) {
    let newMas = [];
    for (let i = 0; i < l.length; i++) {
      if (typeof l[i] == 'number') {
        newMas.push(l[i]);
      }
    }
    return newMas;
    // Return a new array with the strings filtered out
}
*/