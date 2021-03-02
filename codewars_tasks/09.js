/*

Write a function called repeat_str which repeats the given string src exactly count times.

repeatStr(6, "I") // "IIIIII"
repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

Sample Tests:
describe("Tests", function() {
  it ("Basic tests", function() {
    Test.assertSimilar(repeatStr(3, "*"), "***");
    Test.assertSimilar(repeatStr(5, "#"), "#####");
    Test.assertSimilar(repeatStr(2, "ha "), "ha ha ");
  });
});
*/

function repeatStr (n, s) {
    let str = '';
    for (let i = 0; i < n; i++) {
        str+=s;
    }
    return str;
}

// ИЛИ
// repeatStr = (n, s) => s.repeat(n);

console.log(repeatStr(6, 'I'));
console.log(repeatStr(5, 'Hello'));
