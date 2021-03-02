/*
Unique In Order

Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:
uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]

Sample Tests:
Test.assertSimilar(uniqueInOrder('AAAABBBCCDAABBB'), ['A','B','C','D','A','B'])
*/

var uniqueInOrder = function(iterable) {
    let newarr = [];
    if (iterable.length > 0) {
        newarr.push(iterable[0]);
    }
    for (let i = 0; i < iterable.length; i++) {
        if (iterable[i] !== iterable[i+1] && (i + 1) != iterable.length) {
            newarr.push(iterable[i+1]);
        }
    }
    return newarr;
};

console.log(uniqueInOrder('AAAABBBCCDAABBB'));
console.log(uniqueInOrder('ABBCcAD'));
console.log(uniqueInOrder([1,2,2,3,3])); 