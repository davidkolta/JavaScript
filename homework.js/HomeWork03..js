const { getRandomNumber } = require('../utils/MathHelper.js');

/*

Write a  program that generates 3 random numbers 
between 1 to 100 (1 and 100 are included)
Print true if the average of the random numbers is 
greater or equals 50. 
Print false if the average of the random numbers is less 
than 50.
Test data 1:
20, 70, 25
Expected Output 1: 
false
Test data 2:
65, 80, 90
Expected Output 2: 

*/

console.log('\n---------------TASK01---------------\n');
   
const { getRandomNumber } = require('../utils/MathHelper.js');

        let r1 = getRandomNumber(1, 100);
        let r2 = getRandomNumber(1, 100);
        let r3 = getRandomNumber(1, 100);
        
        console.log(65);
        console.log(80);
        console.log(90);


if((r1 + r2 + r3) / 3 >= 50) {
    console.log('true');

} else {
    console.log('false');
}

/*
Write a  program that generates 3 random numbers 
between 1 to 3 (1 and 3 are included)
-If all numbers are different, then print “NO MATCH”
-If any of those 2 numbers are equal, then print 
“DOUBLE MATCH”
-If all 3 numbers are equal, then print “TRIPLE MATCH”
Test data 1:
3, 3, 3
Expected Output 1: 
TRIPLE MATCH
Test data 2:
1, 3, 3
Expected Output 2: 
DOUBLE MATCH
Test data 3:
1, 2, 3
Expected Output 3: 
NO MATCH
*/
console.log('\n---------------TASK02---------------\n');


const { getRandomNumber } = require('../utils/MathHelper.js');

        let r1 = getRandomNumber(1, 3);
        let r2 = getRandomNumber(1, 3);
        let r3 = getRandomNumber(1, 3);

        console.log(r1);
        console.log(r2);
        console.log(r3);

if (r1 === r2 && r1 === r3 && r2 === r3) console.log("TRIPLE MATCH ");
else if(r1 === r2 && r1 === r3 && r2 === r3) console.log("DOUBLE MATCH");
 else console.log("NO MATCH");


/*

Write a function named as hasA() which takes a string 
word as an argument and returns true if given string 
has a character "a" or "A", and false otherwise when 
invoked.
NOTE: Assume you will not be given an empty word.
Examples:
hasA("Tech")  -> false
hasA("Global")  -> true
hasA("")  -> false
hasA("Apple")  -> true
*/

console.log('\n---------------TASK03---------------\n');







function hasA(str) {
    return str.includes('a') || str.includes('A')
}

console.log(hasA("Tech"));
console.log(hasA("Global"));
console.log(hasA(""));
console.log(hasA("Apple"));





/* 

Requirement:
Write a function named as doubleOrTripleWord() 
which takes a string word as an argument and returns 
the given word back tripled if the string length is even 
or doubled if the string length is odd when invoked.
Examples:
doubleOrTripleWord("Tech")  -> "TechTechTech"
doubleOrTripleWord("Apple")  -> "AppleApple”
doubleOrTripleWord("")  -> ""
doubleOrTripleWord(" ")  -> " "
doubleOrTripleWord("1")  -> "11"
doubleOrTripleWord("22")  -> "222222

*/

console.log('\n---------------TASK04---------------\n');


    function doubleOrTripleWord(word) {
        if (word.length % 2 === 0) {
            return word.repeat(3);
        }
        else {
            return word.repeat(2);
        }
    }

 
    console.log(doubleOrTripleWord("Tech"));
    console.log(doubleOrTripleWord("Apple"));
    console.log(doubleOrTripleWord(""));
    console.log(doubleOrTripleWord(" "));
    console.log(doubleOrTripleWord("1"));
    console.log(doubleOrTripleWord("22"));

/*


Write a function named as firstWord() which takes a 
string word as an argument and returns the first word 
from the given string when invoked.
NOTE: Return empty string if the given string does not 
have any word.
Examples:
firstWord("Hello World")  -> "Hello"
firstWord("I like JavaScript")  -> "I"
firstWord("Hello")  -> "Hello"
firstWord("")  -> ""
firstWord("    ")  -> ""

*/

console.log('\n---------------TASK05---------------\n');

function firstWord(str) {

    return str.trim().split(' ')[0];
}

console.log(firstWord("Hello World"));
console.log(firstWord("I like Javascrip"));
console.log(firstWord("Hello"));
console.log(firstWord(""));
console.log(firstWord(" "));





/*

Write a function named as lastWord() which takes a 
string word as an argument and returns the last word 
from the given string when invoked.
NOTE: Return empty string if the given string does not 
have any word.
Examples:
lastWord("Hello World")  -> "World"
lastWord("I like JavaScript")  -> "JavaScript”
lastWord("Hello")  -> "Hello"
lastWord("")  -> ""
lastWord("    ")  -> ""

*/

console.log('\n---------------TASK06---------------\n');

function lastWord(word) {

    return word.substring(word.lastIndexOf(" ") + 1);
}


console.log(lastWord("Hello World"));
console.log(lastWord("I like Javascrip"));
console.log(lastWord("Hello"));
console.log(lastWord(""));
console.log(lastWord(" "));

function lastWord(str){
    str = str.trim().split(' ');
    return str[str.length - 1]}

    console.log(lastWord("Hello World"));
console.log(lastWord("I like Javascrip"));
console.log(lastWord("Hello"));
console.log(lastWord(""));
console.log(lastWord(" "));


/*

Write a function named as firstlastWord() which takes 
a string word as an argument and returns the first and 
last words from the given string when invoked.
NOTE: Return empty string if the given string does not 
have any word.
Examples:
firstLastWord("Hello World")  -> "HelloWorld"
firstLastWord("I like JavaScript")  -> "IJavaScript”
firstLastWord("Hello")  -> "HelloHello"
firstLastWord("")  -> ""
firstLastWord("    ")  -> ""

*/

console.log('\n---------------TASK07---------------\n');

function firstlastWord(word) {

    let firstWord = word[0];
    let lastword = word[word.lenght-1];
  
    return(firstWord, lastword);
    
}

console.log(firstlastWord(("Hello World")));  
console.log(firstlastWord("I like Javascrip"));
console.log(firstlastWord("Hello"));
console.log(firstlastWord(""));
console.log(firstlastWord("      "));


/*

Requirement:
Write a function named as startVowel() which takes a 
string word as an argument and returns true if given 
string starts with a vowel, and false otherwise when 
invoked.
NOTE: Vowel letters: a, e, i o, u, A, E, I, O, U 
Examples:
startVowel("Hello")  -> false
startVowel("Apple") -> true
startVowel("orange")  -> true
startVowel("")  -> false
startVowel("    ")  -> false
startVowel("123")  -> false

*/
console.log('\n---------------TASK08---------------\n');


function startVowel(word) {

  return 'aeouiAEOUI'.includes(word[0])
}

console.log(startVowel("Hello"));// false
console.log(startVowel("Apple")); // true
console.log(startVowel("orange"));// true
console.log(startVowel("")); //false
console.log(startVowel("    "));//false
console.log(startVowel("123") );


/*  

Write a function named as swap4() which takes a 
string word as an argument and returns the string back 
with its first and last 4 characters swapped when 
invoked.
NOTE: Return empty string if the given string does not 
have 8 or more characters.
Examples:
swap4("abc")  -> ""
swap4("JavaScript") -> "riptScJava"
swap4("TechGlobal")  -> "obalGlTech"
swap4("")  -> ""
swap4("    ")  -> ""
swap4("Apple")  -> ""

*/


function swap4(str) {
if(str.length < 8) return "";
 
let first4 = str.slice(0, 4);
let last4 =  str.slice(4, -4);
let middle4 = str.slice(-4);

return last4 + middle4 + first4;


}

console.log(swap4("abc")); // ""
console.log(swap4("JavaScript")); // "riptScJava"
console.log(swap4("TechGlobal")); // "obalGlTech"
console.log(swap4("")); // ""
console.log(swap4("    ")); // ""
console.log(swap4("Apple")); 


/*
Write a function named as swapFirstLastWord() 
which takes a string word as an argument and returns 
the string back with its first and last words swapped 
when invoked.
NOTE: Return empty string if the given string does not 
have 2 or more words.
Examples:
swapFirstLastWord("Hello World")  -> "World 
Hello"
swapFirstLastWord("I like JavaScript") -> "JavaScript like 
I"
swapFirstLastWord("foo bar foo bar")  -> "bar bar foo 
foo"
swapFirstLastWord("")  -> ""
swapFirstLastWord("    ")  -> ""
swapFirstLastWord("Hello")  -> ""
swapFirstLastWord("Hello   ")  -> ""

*/

function swapFirstLastWord(str) {
    str = str.trim();

    if(str.includes(' ')){
        let firstWord = str.slice(0, str.lastIndexOf(' '));
        let middle = str.slice(str.indexOf(' '), str.lastIndexOf(' ') + 1);
        let lastword = str.slice(str.lastIndexOf(' ') + 1);
        
        return lastword + middle + firstWord

    }
    return "";
}

console.log(swapFirstLastWord("Hello World"));
console.log(swapFirstLastWord("I like JavaScript"));
console.log(swapFirstLastWord("foo bar foo bar"));
console.log(swapFirstLastWord(""));
console.log(swapFirstLastWord("    "));
console.log(swapFirstLastWord("Hello"));
console.log(swapFirstLastWord("Hello  "));