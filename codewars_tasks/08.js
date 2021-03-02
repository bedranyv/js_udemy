/*
Check to see if a string has the same amount of 'x's and 'o's. 
The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false

Sample Tests:
Test.assertEquals(XO('xo'),true);
Test.assertEquals(XO("xxOo"),true);
Test.assertEquals(XO("xxxm"),false);
Test.assertEquals(XO("Oo"),false);
Test.assertEquals(XO("ooom"),false);
*/

function XO(str) {
    let countX = 0,
        countO = 0;
    str = str.toLowerCase();

    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'x') {
            countX++;
        }
        if (str[i] === 'o') {
            countO++;
        }
    } 

    return (countX === countO) ? true : false;
}

console.log(XO('xo'));
console.log(XO('xxOo'));
console.log(XO('xxxm'));
console.log(XO('Oo'));
console.log(XO('ooom'));