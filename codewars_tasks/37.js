/*Reverse or rotate?

The input is a string str of digits. Cut the string into chunks (a chunk here is a substring of the initial string) 
of size sz (ignore the last chunk if its size is less than sz).

If a chunk represents an integer such as the sum of the cubes of its digits is divisible by 2, reverse that chunk; 
otherwise rotate it to the left by one position. Put together these modified chunks and return the result as a string.

If

sz is <= 0 or if str is empty return ""
sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".

Входными данными является строка цифр. Разрежьте строку на фрагменты (здесь фрагмент - подстрока исходной строки) 
размером sz (игнорируйте последний фрагмент, если его размер меньше sz).

Если кусок представляет собой целое число, например, сумма кубов его цифр делится на 2, переверните этот кусок; 
в противном случае поверните его влево на одну позицию. 
Соедините эти измененные фрагменты и верните результат в виде строки.

Если

sz <= 0, или если str пуста, верните ""
sz больше (>), чем длина str, невозможно взять кусок размером sz, поэтому верните "".

Examples:
revrot("123456987654", 6) --> "234561876549"
revrot("123456987653", 6) --> "234561356789"
revrot("66443875", 4) --> "44668753"
revrot("66443875", 8) --> "64438756"
revrot("664438769", 8) --> "67834466"
revrot("123456779", 8) --> "23456771"
revrot("", 8) --> ""
revrot("123456779", 0) --> "" 
revrot("563000655734469485", 4) --> "0365065073456944"


function testing(actual, expected) {
    Test.assertEquals(actual, expected)
}

Sample Tests:
Test.describe("revrot",function() {
    Test.it("Basic tests",function() {    
        testing(revrot("1234", 0), "")
        testing(revrot("", 0), "")
        testing(revrot("1234", 5), "")
        s = "733049910872815764"
        testing(revrot(s, 5), "330479108928157")
})})
*/

function revrot(str, sz) {
    if (sz <= 0 || sz > str.length) {
        return '';
    }

    let sum = 0,
        counter = 0,
        tempStr = '',
        tempStrArr = [],
        tempNumb = '',
        answerStr = '';
    for (let i = 0; i < str.length; i++) {
        counter++;
        sum+=+str[i];
        tempStr+=str[i];
        if (counter == sz) {
            if (sum%2 == false) {
                answerStr+=tempStr.split('').reverse().join('');
            } else {
                tempStrArr = tempStr.split('');
                tempNumb = tempStrArr[0];
                tempNumb = tempStr.split('')[0];
                tempStrArr.splice(0,1);
                tempStrArr.push(tempNumb);
                answerStr+=tempStrArr.join('');
            }
            clearData();
        }
    }

    function clearData() {
        sum = 0;
        counter = 0;
        tempStr = '';
        tempStrArr = [];
        tempNumb = '';
    }
    return(answerStr);
}

console.log(revrot('123456987654', 6)); // --> "234561876549"
console.log(revrot('123456987653', 6)); // --> "234561356789"
console.log(revrot('66443875', 4)); // --> "44668753"
console.log(revrot('66443875', 8)); // --> "64438756"
console.log(revrot('664438769', 8)); //--> "67834466"
console.log(revrot('123456779', 8)); //--> "23456771"
console.log(revrot('', 8)); // --> ""
console.log(revrot('123456779', 0)); // --> "" 
console.log(revrot('563000655734469485', 4)); // --> "0365065073456944"

