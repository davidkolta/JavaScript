/*
Write a function that takes 2 number arguments and return a random number between these numbers
Both numbers are included 
Be careful as the numbers given can be different considering min, max

getRandomNumber(3, 5)       -> 
getRandomNumber(5, 3)       -> 
getRandomNumber(-5, 15)     -> 
*/

function getRandomNumber(num1, num2) {

return Math.floor(Math.random() * (num1 - num2 + 1)) + num1;

}

console.log(Math.floor(Math.random() * (3 - 5 + 1)) + 3);
console.log(Math.floor(Math.random() * (5 - 3 + 1)) + 3);
console.log(Math.floor(Math.random() * (-5 - 15 + 1)) + -5);

/*
Requirement:
Write a program that extracts expected values from a given String using JS String functions.

"I like apples and oranges"                         -> "APPLE"
"Java is not a scripting programming language"      -> "JavaScript"
"I don't like books"                                -> "I like books"
*/

let sentence1 = "I like apples and oranges" ;
let sentence2 = "Java is not a scripting programming language";
let sentence3 = "I don't like books";

console.log(sentence1.slice(7, 12).toUpperCase());


/*
Requirement:
Assume that you are given a String of any length. 
Find:
-The length of the String
-First char in the String
-Last char in the String
-Check if the String contains any vowel letters     
    -if it has any vowel, then print true
    -Else, print false
    Vowels = a, e, i, u, o, A, E, I, U, O

Test Data 1:
let s1 = "JavaScript";

Expected Result 1:
The length is = 10
The first char is = J
The last char is = t
true


Test Data 2:
let s1 = "";

Expected Result 2:
The length is = 0
The first char is = undefined
The last char is = undefined
false
*/


let s1 = "";


console.log(`The length of the name is = ${s1.length}`);
console.log(`The first character in the name is = ${s1[0]} `);
console.log(`The last character in the name is = ${(s1.charAt())} `);
console.log(`The first 3 characters in the name are = ${name.slice(0, 3)}`);
console.log(`The last 3 characters in the name are = ${name.slice(2, 5)}`);



let s2 = "abcd";


console.log(s2.slice(${0}, ${}));

console.log(s2[(s2.length -1) /2]);
Test Data 2:



/*
Expected Result 2:
The first 2 characters are = Ja
The last 2 characters are = pt
The other characters  are = vaScri
*/


let s4 = "JavaScript";                 

console.log(`the first 2 characters are = ${s4.slice(0, 2)}`);
console.log(`the first 2 characters are = ${s4.slice(-2)}`);

console.log 


let s9 =  "JavaScript is nice to learn"
console.log(s9.split(' ').length + 1);






