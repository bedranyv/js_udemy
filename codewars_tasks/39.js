/* Word a10n (abbreviation)
The word i18n is a common abbreviation of internationalization in the developer community, 
used instead of typing the whole word and trying to spell it correctly. 
Similarly, a11y is an abbreviation of accessibility.

Write a function that takes a string and turns any and all "words" (see below) within that string of length 4 
or greater into an abbreviation, following these rules:

A "word" is a sequence of alphabetical characters. By this definition, any other character like a space or hyphen 
(eg. "elephant-ride") will split up a series of letters into two words (eg. "elephant" and "ride").
The abbreviated version of the word should have the first letter, then the number of removed characters, 
then the last letter (eg. "elephant ride" => "e6t r2e").
Example
abbreviate("elephant-rides are really fun!")
//          ^^^^^^^^*^^^^^*^^^*^^^^^^*^^^*
// words (^):   "elephant" "rides" "are" "really" "fun"
//                123456     123     1     1234     1
// ignore short words:               X              X

// abbreviate:    "e6t"     "r3s"  "are"  "r4y"   "fun"
// all non-word characters (*) remain in place
//                     "-"      " "    " "     " "     "!"
=== "e6t-r3s are r4y fun!"

Sample Tests:
Test.assertEquals(abbreviate("internationalization"), "i18n");
Test.assertEquals(abbreviate("accessibility"), "a11y");
Test.assertEquals(abbreviate("Accessibility"), "A11y");
Test.assertEquals(abbreviate("elephant-ride"), "e6t-r2e");

*/

function abbreviate(string) {
    let stringArr = string.split(' '),
        subArr = [],
        switcherHyphen = false,
        answer = [];
        let arrAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    for (let i = 0; i < stringArr.length; i++) {
        switcherHyphen = false;
        for (let j = 0; j < stringArr[i].length; j++) {
            if (stringArr[i][j] == '-') {
                switcherHyphen = true;
            }
        }
        if (!switcherHyphen) {
            let symbolSwitcher = false;
            for (let a = 0; a < arrAlphabet.length; a++) {
                if (stringArr[i][(stringArr[i].length-1)] == arrAlphabet[a]) {
                    symbolSwitcher = true;
                }
            }

            if (symbolSwitcher) {
                if (stringArr[i].length > 3) {
                    answer.push(stringArr[i][0] + (stringArr[i].length - 2) + stringArr[i][stringArr[i].length - 1]);
                } else {
                    answer.push(stringArr[i]);
                } 
                
            } else {
                if (stringArr[i].length - 1 > 3) {
                    answer.push(stringArr[i][0] + (stringArr[i].length - 3) + stringArr[i][stringArr[i].length - 2] + stringArr[i][stringArr[i].length - 1]);
                } else {
                    answer.push(stringArr[i]);
                } 
            }
            
        } else {
            subArr = stringArr[i].split('-');
            console.log(subArr);
            let answerSubArr = [];
            for (let y = 0; y < subArr.length; y++) {
                if (subArr[y].length > 3) {
                    answerSubArr.push(subArr[y][0] + (subArr[y].length - 2) + subArr[y][subArr[y].length - 1]);
                } else {
                    answerSubArr.push(subArr[y]);
                }
            }
            answer.push(answerSubArr.join('-'));
        }
    }
    
    return answer.join(' ');
}

console.log(abbreviate('internationalization'));
console.log(abbreviate('accessibility'));
console.log(abbreviate('Accessibility'));
console.log(abbreviate('elephant-ride'));
console.log(abbreviate('elephant-rides are really fun!'));

// https://www.codewars.com/kata/5375f921003bf62192000746/solutions/javascript