/* Duplicate Encoder
The goal of this exercise is to convert a string to a new string where each character 
in the new string is "(" if that character appears only once in the original string, or ")" 
if that character appears more than once in the original string. Ignore capitalization when 
determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
Notes

Assertion messages may be unclear about what they display in some languages. 
If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

Sample Tests:
Test.assertEquals(duplicateEncode("din"),"(((");
Test.assertEquals(duplicateEncode("recede"),"()()()");
Test.assertEquals(duplicateEncode("Success"),")())())","should ignore case");
Test.assertEquals(duplicateEncode("(( @"),"))((");

*/

function duplicateEncode(word){
    let newString = '';
    for (let i = 0; i < word.length; i++) {
        let counter = 0;
        for (let y = 0; y < word.length; y++) {
            if (i != y) {
                if (word[i].toLowerCase() == word[y].toLowerCase()) {
                    counter++;
                }
            }
        }
        if (counter) {
            newString+=')';
        } else {
            newString+='(';
        }
    }
    return newString;
}

console.log(duplicateEncode('din'));
console.log(duplicateEncode('recede'));
console.log(duplicateEncode('Success'));
console.log(duplicateEncode('(( @'));