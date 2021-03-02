/*
Vowel Count

Return the number (count) of vowels in the given string.
We will consider a, e, i, o, u as vowels for this Kata (but not y).
The input string will only consist of lower case letters and/or spaces.

Счетчик гласных

Возвращает количество (количество) гласных в заданной строке.
Мы будем рассматривать a, e, i, o, u как гласные для этого ката (но не y).
Входная строка будет состоять только из строчных букв и / или пробелов.

Sample Tests:
const chai = require("chai");
const assert = chai.assert;

describe("Case 1", function(){
    it ("should be defined", function(){
        assert.strictEqual(getCount("abracadabra"), 5)
    });
});
*/

function getCount(str) {
    var vowelsCount = 0;
    let vowel = ['a', 'e', 'i', 'o', 'u'];
    
    for (let i = 0; i < str.length; i++) {
        for(let y = 0; y < vowel.length; y++) {
            if (str[i] == vowel[y]) {
                vowelsCount++;
            }
        }
    }
    return vowelsCount;
}

console.log(getCount('abracadabra'));