/*
Simple Encryption #1 - Alternating Split

For building the encrypted string:
Take every 2nd char from the string, then the other chars, that are not every 2nd char, 
and concat them as new String.
Do this n times!

Для построения зашифрованной строки:
Возьмите каждый второй символ из строки, затем другие символы, которые не являются каждым вторым символом, 
и объедините их как новую строку.
Сделайте это n раз!

Примеры:

Examples:

"This is a test!", 1 -> "hsi  etTi sats!"
"This is a test!", 2 -> "hsi  etTi sats!" -> "s eT ashi tist!"
Write two methods:

function encrypt(text, n)
function decrypt(encryptedText, n)

Sample Tests:

describe("Solution", function(){
  it("EncryptExampleTests", function(){    
    Test.assertEquals(encrypt("This is a test!", 0), "This is a test!");
    Test.assertEquals(encrypt("This is a test!", 1), "hsi  etTi sats!");
    Test.assertEquals(encrypt("This is a test!", 2), "s eT ashi tist!");
    Test.assertEquals(encrypt("This is a test!", 3), " Tah itse sits!");
    Test.assertEquals(encrypt("This is a test!", 4), "This is a test!");
    Test.assertEquals(encrypt("This is a test!", -1), "This is a test!");
    Test.assertEquals(encrypt("This kata is very interesting!", 1), "hskt svr neetn!Ti aai eyitrsig");
  });
});

describe("Solution", function(){
  it("DecryptExampleTests", function(){    
    Test.assertEquals(decrypt("This is a test!", 0), "This is a test!");
    Test.assertEquals(decrypt("hsi  etTi sats!", 1), "This is a test!");
    Test.assertEquals(decrypt("s eT ashi tist!", 2), "This is a test!");
    Test.assertEquals(decrypt(" Tah itse sits!", 3), "This is a test!");
    Test.assertEquals(decrypt("This is a test!", 4), "This is a test!");
    Test.assertEquals(decrypt("This is a test!", -1), "This is a test!");
    Test.assertEquals(decrypt("hskt svr neetn!Ti aai eyitrsig", 1), "This kata is very interesting!");
  });
});

describe("Solution", function(){
  it("Null or Empty", function(){    
    Test.assertEquals(encrypt("", 0), "");
    Test.assertEquals(decrypt("", 0), "");
    Test.assertEquals(encrypt(null, 0), null);
    Test.assertEquals(decrypt(null, 0), null);
  });
});
*/

// function encrypt(text, n) {
//     let newString = '',
//         i = 1;
//     for (let repeat = 0; repeat < n; repeat++) {
//         newString = '';
//         i = 1;

//         while (newString.length < text.length) {
//             newString += text[i];
//             i+=2;

//             if (i >= text.length) {
//                 i = 0;
//             }
//         }
//         text = newString;
//     }

//     return text;
// }

function encrypt(text, n) {
  console.log(text, n);
  if (!text || n <= 0) {
    return text;
  }
  while (n--) {
    let newText = '';
    for (let i = 1; i < text.length; i += 2) {
      newText += text[i];
    }
    for (let i = 0; i < text.length; i += 2) {
      newText += text[i];
    }
    text = newText;
  }
  return text;
}

function decrypt(text, n) {
  console.log(text, n);
  if (!text || n <= 0) {
    return text;
  }
  while (n--) {
    let newText = '';
    for (let i = Math.floor(text.length / 2), y = 0; i < text.length; i++, y++) {
      newText += text[i];
      if (i + 1 < text.length) {
        newText += text[y];
      }
    }
    text = newText;
  }
  return '+' + text + '+';
}

console.log(encrypt('This is a test!', 1));
console.log(encrypt('This is a test!', 3));
console.log(encrypt('This is a test!', 4));
console.log(decrypt('hsi  etTi sats!', 1));
console.log(decrypt('s eT ashi tist!', 2));
console.log(decrypt(' Tah itse sits!', 3));
console.log(decrypt('This is a test!', 4));
console.log(decrypt('This is a test!', -1));
console.log(decrypt('hskt svr neetn!Ti aai eyitrsig', 1));
