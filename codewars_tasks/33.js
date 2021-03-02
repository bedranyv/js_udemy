/* Highest Scoring Word
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.

Sample Tests:
Test.describe("Example tests",_=>{
Test.assertEquals(high('man i need a taxi up to ubud'), 'taxi');
Test.assertEquals(high('what time are we climbing up the volcano'), 'volcano'); 
Test.assertEquals(high('take me to semynak'), 'semynak');  
});


*/

function high(x){
    let arrWords = x.split(' ');
    let arrScores = [];
    let arrAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


    for (let i = 0; i < arrWords.length; i++) {
        let score = 0;
        for (let j = 0; j < arrWords[i].length; j++) {
            for (let a = 0; a < arrAlphabet.length; a++) {
                if (arrWords[i][j] === arrAlphabet[a]) {
                    score+=a+1;
                }
            }
        }

        arrScores.push(score);
    }
    function compareNum(a, b) {
        return a - b;
    }
    arrScores.sort(compareNum);
    let maxScore = arrScores[arrScores.length - 1];

    console.log(arrWords);

    for (let i = 0; i < arrWords.length; i++) {
        let score = 0;
        for (let j = 0; j < arrWords[i].length; j++) {
            for (let a = 0; a < arrAlphabet.length; a++) {
                if (arrWords[i][j] === arrAlphabet[a]) {
                    score+=a+1;
                }
            }
        }
        if (maxScore == score) {
            return arrWords[i];
        }
    }
}

console.log(high('man i need a taxi up to ubud'));
console.log(high('what time are we climbing up the volcano'));
console.log(high('aa b'));