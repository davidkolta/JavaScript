const { getRandomNumber } = require('../utils/MathHelper.js');



/*
Requirement:
Assume you are given 2 numbers to be 0 or 1.

Print true if they are same number.
Otherwise, print false

Test data 1:
0, 1

Expected result 1:
false


Test data 2:
0, 0

Expected result 2:
true


Test data 3:
1, 0

Expected result 3:
false


Test data 4:
1, 1

Expected result 4:
true
*/

let t1num1 = getRandomNumber(0, 1);
let t1num2 = getRandomNumber(0, 1);


if (t1num1 === t1num2) console.log*(true);
else console.log(false);

/*

ASCII representation of characters
32          SPACE
48-57       [0-9]
65-90       [A-Z]
97-122      [a-z]
The rest    Special Characters

*/


let t2character = "5"

let t2characterASCII = t2character.charCodeAt(0);

if(t2characterASCII >= 97 && t2characterASCII <= 122 ){
        console.log(`"${t2character}" is a lower case`);

}

else if(t2characterASCII >= 48 && t2characterASCII <= 57) {
    console.log(`"${t2characterASCII}" invalid input`);
} 

else if (t2characterASCII >= 65 && t2characterASCII <= 90) {
    console.log(`"${t2character}" is an upper cas`);
}

/*
Requirement:
Assume you are given a single character.
Find if the given character is a special character or not.

Test data 1:
"a"

Expected result 1:
"a"  is not a special character


Test data 2:
"5"

Expected result 2:
"5" is not a special character


Test data 3:
"$"

Expected result 3:
"$"  is a special character


Test data 4:
" "

Expected result 4:
" " is not a special character
*/

let t4character = '<';

let t4characterASCII = t4character.charCodeAt(0);

if(t4characterASCII )

    /*
Requirement:
Assume you are given a single character.
Find if the given character is a vowel or not.

NOTE: if the character is not a letter, print "INVALID INPUT"
NOTE: Vowel letters: a, e, i o, u, A, E, I, O, U 

Test data 1:
"a"

Expected result 1:
"a" is a vowel

Test data 2:
"5"

Expected result 2:
"INVALID INPUT"


Test data 2:
"N"

Expected result 1:
"N" is not a vowel

Test data 4:
" "

Expected result 4:
"INVALID INPUT"
*/
/*

ASCII representation of characters
32          SPACE
48-57       [0-9]
65-90       [A-Z]
97-122      [a-z]
The rest    Special Characters

*/
let t5character = 'U';

let t5characterASCII = t5character.charCodeAt(0);


if((t5characterASCII >= 65 && t5characterASCII <= 90) || (t5characterASCII >= 97 && t5characterASCII <= 122)) {
    console.log(`"${t5character}" its a letter`);
}
