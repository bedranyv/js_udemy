/*
Given an input string determine whether or not it is a Palindrome (e.g. "racecar") by returning a boolean response. A true\1 response indicates the input is a valid Palindrome.

Ignore whitespace, special characters, and case.

Sample Tests:
Test.describe("Sample tests", _=>{
  Test.assertEquals(isPalindrome("racecar"),true)
  Test.assertEquals(isPalindrome("Civic"),true)
  Test.assertEquals(isPalindrome("Toot!"),true)
  Test.assertEquals(isPalindrome("never odd or even"),true)
  Test.assertEquals(isPalindrome("Not a tub, but a ton"),true)
  Test.assertEquals(isPalindrome("Nope"),false)
  Test.assertEquals(isPalindrome("Not this one"),false)
});

*/

function isPalindrome(str){
    str = str.replace(/[ .,*+?^${}()|]/g, '');
    console.log(str);
    const n = str.length / 2;
    let i = 0;
    // while (i == n) {

    // }
}


console.log(isPalindrome('racecar'));
console.log(isPalindrome('never, odd or even'));