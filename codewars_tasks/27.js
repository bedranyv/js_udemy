/* Break camelCase
Complete the solution so that the function will break up camel casing, using a space between words.

Example
solution("camelCasing")  ==  "camel Casing"

Sample Tests:
Test.assertEquals(solution('camelCasing'), 'camel Casing', 'Unexpected result')
Test.assertEquals(solution('camelCasingTest'), 'camel Casing Test', 'Unexpected result')

*/

function solution(string) {
    let newString = '';
    for (let i = 0; i < string.length; i++) {
        string[i] == string[i].toUpperCase() ? newString+= ' ' + string[i] : newString+=string[i];
    }
    return newString;
}

console.log(solution('camelCasing'));
console.log(solution('camelCasingTest'));