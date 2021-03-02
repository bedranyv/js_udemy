/* If you can read this...
The idea for this Kata came from 9gag today.here

You'll have to translate a string to Pilot's alphabet (NATO phonetic alphabet) wiki.

Like this:

Input:

If, you can read?

Output:

India Foxtrot , Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta ?

Notes

The set of used punctuation is .!?.
Punctuation should be kept in your return string, but spaces should not.
Xray should not have a dash within.
Every word and punctuation mark should be seperated by a space ' '.
There should be no trailing whitespace

Sample Tests:
// TODO: Replace examples and use TDD development by writing your own tests

// These are some CW specific test methods available:
//    Test.expect(boolean, [optional] message)
//    Test.assertEquals(actual, expected, [optional] message)
//    Test.assertSimilar(actual, expected, [optional] message)
//    Test.assertNotEquals(actual, expected, [optional] message)

// NodeJS assert is also automatically required for you.
//    assert(true)
//    assert.strictEqual({a: 1}, {a: 1})
//    assert.deepEqual({a: [{b: 1}]}, {a: [{b: 1}]})

// You can also use Chai (http://chaijs.com/) by requiring it yourself
// var expect = require('chai').expect;
// var assert = require('chai').assert;
// require('chai').should();

describe('Solution', function(){
  it('Should return a correctly translated string', function(){
    Test.assertEquals(to_nato('If you can read'), 'India Foxtrot Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta');
    Test.assertEquals(to_nato('Did not see that coming'), 'Delta India Delta November Oscar Tango Sierra Echo Echo Tango Hotel Alfa Tango Charlie Oscar Mike India November Golf');
    Test.assertEquals(to_nato('go for it!'),'Golf Oscar Foxtrot Oscar Romeo India Tango !');
  });
});

*/

function toNato(words) {
    let alphabetNato = {'A':'Alfa','B':'Bravo','C':'Charlie','D':'Delta','E':'Echo','F':'Foxstrot','G':'Golf','H':'Hotel','I':'India','J':'Juliett','K':'Kilo','L':'Lima','M':'Mike','N':'November','O':'Oscar','P':'Papa','Q':'Quebec','R':'Romeo','S':'Sierra','T':'Tango','U':'Uniform','V':'Victor','W':'Whiskey','X':'Xray','Y':'Yankee','Z':'Zulu' };
    let answer = '';
    for (let i = 0; i < words.length; i++) {
        if (words[i] == ' ' || words[i] == '.' || words[i] == '!' || words[i] == '?') {
            if (words[i] == ' ') {}
            else {
                answer+=words[i]+ ' ';
            }
        } else {
            for (let key in alphabetNato) {
                if (words[i].toUpperCase() == key) {
                    answer+=alphabetNato[key] + ' ';
                }
            }
        }
    }
	return answer.slice(0, answer.length - 1);
}

console.log(toNato('If you can read'));
console.log(toNato('Did not see that coming'));
console.log(toNato('go for it!'));
