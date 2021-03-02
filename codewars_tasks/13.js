/*
Mumbling

This time no story, no theory. The examples below show you how to write function accum:

Examples:

accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"

*/

function accum(s) {
    let str = '';
    for (let i = 0; i < s.length; i++) {
        let strTemp = str + s[i].toUpperCase();
        str = strTemp;
        for (let y = 0; y < i; y++) {
            strTemp = str + s[i].toLowerCase();
            str = strTemp;
        }
        if (i + 1 != s.length) {
            str = str + '-';
        }
    }
    return str;
}

console.log(accum('abcd'));
console.log(accum('RqaEzty'));
console.log(accum('cwAt'));