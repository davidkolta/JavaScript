 /*

 Find if a number is even or not.
Write a program that generates a random number between 1 and 10 (both inclusive).
If the random number is even, print true.
Otherwise, print false.
Examples:
1 -> false
2 -> true
5 -> false
10 -> true

*/

let num1 = Math.floor(Math.random() * 10) + 1

console.log(num1);

if(num1 % 2 === 0) console.log("true");
else console.log("false");

/*

Write a program that generates a random number between 1 and 10 (both inclusive).
If the random number is odd, print true.
Otherwise, print false.
Examples:
1 -> true
2 -> false
5 -> true
10 -> false

*/

let num1 = Math.floor(Math.random() * 10) + 1

console.log(num1);

if(num1 % 2 !== 0) console.log("odd");
else console.log("false");

          
/*

Write a program that generates a random number between -5 and 5 (both inclusive).
If the random number is positive, print true.
Otherwise, print false.
Examples:
-5 -> false
-1 -> false
0 -> false
1 -> true
5 -> true

*/

let num1 = Math.floor(Math.random() *11 ) -5

console.log(num1);

if(num1 > 0) console.log("true");
else console.log("false");


/*

Write a program that generates a random number between -5 and 5 (both inclusive).
If the random number is negative, print true.
Otherwise, print false.
Examples:
-5 -> true
-1 -> true
0 -> false
1 -> false
5 -> false

*/
 

let num1 = Math.floor(Math.random() * 11 ) -5

console.log(num1);

if(num1 < 0) console.log("True")
    else console.log("false");


/*

Write a program that generates a random number between 1 and 50 (both inclusive).
If the random number is divisible by 5, print true.
Otherwise, print false.
Examples:
1 -> false
5 -> true
20 -> true
37 -> false
50 -> true

*/

let num1 = Math.floor(Math.random() * 50) + 1

console.log(num1);

if(num1 % 7 === 0) console.log("TRUE");
else console.log("false");



 /*

 Calculate the sum of 2 random numbers.
Write a program that generates 2 random numbers between 1 and 10 (both inclusive).
Calculate the sum of the numbers and print it.
Examples:
3, 5 -> 8
7, 3 -> 10
5, 5 -> 10
1, 10 -> 11
10, 1 -> 1

*/

let num1 = Math.floor(Math.random() * 10) +1
let num2 = Math.floor(Math.random() * 10) +1

console.log(num1);
console.log(num2);

console.log(num1 + num2);


/*

Write a program that generates 2 random numbers between 1 and 10 (both inclusive).
Calculate the absolute difference of the numbers and print it.
Examples:
3, 5 -> 2
7, 3 -> 4
5, 5 -> 0
1, 10 -> 9
10, 1 -> 9
*/

let num1 = Math.floor(Math.random() * 10) + 1
let num2 = Math.floor(Math.random() * 10) + 1

console.log(num1);
console.log(num2);

console.log(Math.abs(num1 - num2));

/*

Write a program that generates a random number between 1 and 10 (both inclusive).
Calculate the square of the number and print it.
Examples:
1 -> 1
2 -> 4
5 -> 25
10 -> 100

*/

let num1 = Math.floor(Math.random() * 10) + 1

console.log(num1);

console.log(num1 * num1);


/*Write a program that generates a random number between 1 and 10 (both inclusive).
Calculate the cube of the number and print it.
Examples:
1 -> 1
2 -> 8
5 -> 125
10 -> 1000
*/

let num1 = Math.floor(Math.random() * 10) + 1

console.log(num1);

console.log(num1 * num1 * num1);

/*

Write a program that generates a random number between 1 and 10 (both inclusive) to be considered 
as a mile unit.
Convert miles unit to kilometers and print it.
Please assume that 1 mile equals 1.6 kilometers.
Examples:
1 -> 1.6
2 -> 3.2
5 -> 8
*/

let num1 = Math.floor(Math.random() *100 ) + 1

console.log(num1);

console.log(num1 * 2.2);

/*
Write a program that generates 2 random numbers between 1 and 3 (both inclusive).
If the numbers are equal, print true.
Otherwise, print false.
Examples:
1, 1 -> true
1, 2 -> false
2,3 -> false
2,2 -> true
3, 3 -> false

*/

let num1 = Math.floor(Math.random() * 3) + 1
let num2 = Math.floor(Math.random() * 3) + 1


console.log(num1);
console.log(num2);

if(num1 === num2) console.log("true");
else console.log("false");

/*
function getRandomNumber (min, max) {
    return Math.floor(Math.random() *(max - min + 1)) + min;
}

let ranNumber1 = getRandomNumber(1 ,3);
let ranNumber2 = getRandomNumber(1, 3);

console.log(ranNumber1);
console.log(ranNumber2);

if (ranNumber1 === ranNumber2){
    console.log(true);
}

else {
    console.log(false);
}

/*

Write a program that generates a random number between 1 and 100 (both inclusive) to be considered 
as an age.
If the age is more than or equal to 16, print true.
Otherwise, print false.
Examples:
1 -> false
15 -> false
16 -> true
45 -> true
100 -> true

*/

let age = Math.floor(Math.random() * 100 ) + 1

console.log(age);

if(age >= 16 ) console.log("true");
else console.log("false")


/*

Write a program that generates 2 random numbers between 1 and 10 (both inclusive).
Find the greatest of the numbers and print it.
Examples:
3, 5 -> 5
7, 3 -> 7
5, 5 -> 5
1, 10 -> 10
10, 1 -> 10 

*/

let num1 = Math.floor(Math.random() * 10) + 1 
let num2 = Math.floor(Math.random() * 10) + 1
let num3 = Math.floor(Math.random() * 10) + 1


console.log(num1);
console.log(num2);
console.log(num3);



console.log(`The Min number =`, Math.min(num1 , num2, num3));


/*

Write a program that generates 3 random numbers between 1 and 10 (both inclusive).
Calculate the average of the numbers and print it.
Examples:
3, 5, 7 -> 5
7, 3, 2 -> 4
5, 5, 5 -> 5
1, 10, 7 -> 6
10, 1, 1 -> 4

*/

let num1 = Math.floor(Math.random() * 10) + 1
let num2 = Math.floor(Math.random() * 10) + 1
let num3 = Math.floor(Math.random() * 10) + 1

console.log(num1);
console.log(num2);
console.log(num3);

console.log((num1 + num2 + num3) / 3);

/*
Write a program that generates 3 random numbers between 1 and 10 (both inclusive).
Calculate the greatest and the smallest numbers and print their absolute difference.
Examples:
3, 5, 2 -> 3
7, 3, 1 -> 6
5, 5, 5 -> 0
1, 10, 9 -> 9
10, 1, 2 -> 9

*/
let num1 = Math.floor(Math.random() * 10) + 1
let num2 = Math.floor(Math.random() * 10) + 1
let num3 = Math.floor(Math.random() * 10) + 1

console.log(num1);
console.log(num2);
console.log(num3);

console.log(Math.max(num1, num2, num3));
console.log(Math.min(num1, num2, num3));


/*

Write a program that generates a random number between 1 and 100 (both inclusive).
Find which quarter of the range the number falls into and print it.
1st quarter is 1-25
2nd quarter is 26-50
3rd quarter is 51-75
4th quarter is 76-100
Examples:
15 -> 1st quarter
73 -> 3rd quarter
39 -> 2nd quarter
87 -> 4th quarte

*/


let num1 = Math.floor(Math.random() * 100) + 1

console.log(num1);

if(num1 >= 1 && num1 <= 25) console.log("first quarter");
else if(num1 >= 26 && num1 <= 50) console.log("second quarter");
else if(num1 >= 51 && num1 <= 75) console.log("third quarter");
else console.log("fourth quarter");


/*
Write a program that generates a random number between 1 and 100 (both inclusive).
Find which half of the range the number falls into and print it.
1st half is 1-50
2nd half is 51-100
Examples:
15 -> 1st half
50 -> 1st half
51 -> 2nd half 
87 -> 2nd half 
100 -> 2nd half

*/

let num1 = Math.floor(Math.random() * 100) + 1

console.log(num1);

if(num1 >= 1 && num1 <= 50) console.log("fiest half");
else console.log("second half");


/*

Write a program that generates 2 random numbers between 1 and 10 (both inclusive).
If the sum of the random numbers is even, print true.
Otherwise, print false.
Examples:
3, 5 -> true
7, 3 -> true
5, 5 -> true
1, 10 -> false
10, 1 -> false


*/


let num1 = Math.floor(Math.random() * 100) + 1
let num2 = Math.floor(Math.random() * 100) + 1

console.log(num1);
console.log(num2);

if((num1 + num2) % 2 === 0) console.log("even");
else console.log("false");

/*

Write a program that generates 2 random numbers between 1 and 10 (both inclusive).
If the product of the random numbers is odd, print true.
Otherwise, print false.
Examples:
3, 5 -> true
7, 3 -> true
5, 5 -> true
1, 10 -> false
10, 1 -> false

*/


let num1 = Math.floor(Math.random() * 100) + 1
let num2 = Math.floor(Math.random() * 100) + 1

console.log(num1);
console.log(num2);

if((num1 * num2) % 2 !== 0) console.log("true");
else console.log("false");


/*

Write a function named as rectangleArea()which calculates the area of a rectangle when invoked.
NOTE: Assume the sides of the rectangle are x and y.
Conversion Formula: Area = x * y
Examples:
rectangleArea(5, 4) -> 20
rectangleArea(3, 7) -> 21
rectangleArea(6, 10) -> 60

*/

function rectangleArea(x , y){
    return x * y
}

console.log(rectangleArea(3,7));

function rectanglePerimeter(x , y){

    return 2 * (x + y)
}

console.log(rectanglePerimeter(3, 7));

/*

Write a function named as squareArea() which calculates the area of a square when invoked.
NOTE: Assume the side of the square is x.
Conversion Formula:Area = x * x
Examples:
squareArea(5) -> 25
squareArea(3) -> 9
squareArea(6) -> 36

*/

function squareArea(x) {

    return x * x
}

console.log(squareArea(5));
console.log(squareArea(3));
console.log(squareArea(6));


/*

Write a function named as squarePerimeter() which calculates the perimeter of a square when invoked.
NOTE: Assume the side of the square is x.
Conversion Formula: Perimeter = 4 * x
Examples:
squarePerimeter(5) -> 20
squarePerimeter(3) -> 12
squarePerimeter(6) -> 24

*/

function squarePerimeter(x){
    return x * 4
}
console.log(squarePerimeter(3));

/*

Write a function named as doubleWord() which takes a string word as an argument and returns the 
given word back doubled when invoked.
NOTE: Assume you will not be given an empty word.
Examples:
doubleWord("Tech") -> "TechTech"
doubleWord("Global") -> "GlobalGlobal"

*/

function doubleWord(string) {
    return string + string
}

console.log(doubleWord("Tech"));

/*

Write a function named as firstCharacter() which takes a string word as an argument and returns the 
first character of the given word when invoked.
NOTE: Assume you will not be given an empty word.
Examples:
firstCharacter("Tech") -> "T"
firstCharacter("Global") -> "G

*/

function firstCharacter(word) {

    return word[0]
}

console.log(firstCharacter("Global"));

/*

Write a function named as firstTwoCharacters() which takes a string word as an argument and returns 
the first two characters of the given word when invoked.
NOTE: If the given word does not have 2 or more characters, then return the given string back.
Examples:
firstTwoCharacters("Tech") -> "Te"
firstTwoCharacters("Global") -> "Gl"
firstTwoCharacters("") -> ""
firstTwoCharacters(" ") -> " "
firstTwoCharacters("1") -> "1"

*/

function firstTwoCharacters(word) {

    return word.substring(0, 2);
}

console.log(firstTwoCharacters("Tech"));
console.log(firstTwoCharacters("Global")); 
console.log(firstTwoCharacters("1"));
console.log(firstTwoCharacters(" "));


/*

Write a function named as lastCharacter() which takes a string word as an argument and returns the last 
character of the given word when invoked.
NOTE: Assume you will not be given an empty word.
Examples:
lastCharacter("Tech") -> "h"
lastCharacter("Global") -> "ll"
lastCharacter(" ") -> " "
lastCharacter("123") -> "3"

*/

function lastCharacter(word) {

    return word[word.length -1];
}

console.log(lastCharacter("Tech"));
console.log(lastCharacter("Global"));
console.log(lastCharacter(" "));
console.log(lastCharacter("132"));

/*

Last Two Characters
Write a function named as lastTwoCharacters() which takes a string word as an argument and returns 
the last two characters of the given word when invoked.
NOTE: If the given word does not have 2 or more characters, then return the string back.
Examples:
lastTwoCharacters("Tech") -> "ch"
lastTwoCharacters("Global") -> "al"
lastTwoCharacters("") -> ""
lastTwoCharacters(" ") -> " "
lastTwoCharacters("1") -> "1

*/

function lastTwoCharacters(word){

    return word.slice(-2);
}

console.log(lastTwoCharacters("Tech"));
console.log(lastTwoCharacters("hamada"));
console.log(lastTwoCharacters("12324"));
console.log(lastTwoCharacters("madada"));


/*

Write a function named as firstLast() which takes a string word as an argument and returns the first and 
the last characters of the given word when invoked.
NOTE: If the given word does not have 2 or more characters, then return the string back.
Examples:
firstLast("Tech") -> "Th"
firstLast("TechGlobal") -> "Tl"
firstLast("") -> ""
firstLast(" ") -> " "
firstLast("1") -> "1"
firstLast("abcde") -> ae

*/

function firstLast(word) {

    return word[0] + word[word.length -1];
}


console.log(firstLast("Tech"));
console.log(firstLast("hamada"));
console.log(firstLast("12324"));
console.log(firstLast("madada"));


/*

Write a function named as hasFive() which takes a string word as an argument and returns true if given 
string has at least 5 characters, and false otherwise when invoked.
Examples:
hasFive("Tech") -> false
hasFive("Global") -> true
hasFive("") -> false
hasFive("12345") -> true
hasFive("hello") -> true

*/

function hasFive(word) {


    // length
    return word.length >= 5
}

console.log(hasFive("Tech"));
console.log(hasFive("global"));
console.log(hasFive("12345"));



/*

Write a function named as middle() which takes a string word as an argument and returns the middle 
character if the string has odd length, and returns the middle two characters if the string has even 
length when invoked.
NOTE: If the given word is empty, then return the empty string back.
Examples:
middle("Tech") -> "ec"
middle("Global") -> "ob"
middle("abcde") -> "c"
middle("1") -> "1"
middle("abc") -> "b"
middle(“1234”) -> "23"

*/

function middle(str) {

    if (str.length % 2 === 0) return str[str.length / 2-1] + str[str.length / 2];
    else if(str.length % 2 !== 0) return (str[(str.length / 2 ) -0.5]);
    else return (str);
}





console.log(middle("Global"));
console.log(middle("abcde"));
console.log(middle("1"));
console.log(middle("abc"));
console.log(middle("1234"));







function middle(str) {

    if(str.length % 2 === 0) return str[str.length / 2-1] + str[str.length / 2];
    else if (str.length % 2 !==0) return (str[(str.length / 2 ) -0.5]);
    else return(str)

}


/*
Write a function named as longer() which takes two string words as arguments and returns the string 
that has more characters when invoked.
NOTE: If both of the words have the same length, then return the first string.
Examples:
longer("Tech", "Global") -> "Global"
longer("Hello", "Hi") -> "Hello"
longer("Hello", "World") -> "Hello"

*/

function longer(word1, word2) {

    if(word1.length >= word2.length) return word1
    else return word2
} 


console.log(longer("Tech","Global"));
console.log(longer("hi","hello"));
console.log(longer("hello","world"));

/*

Write a function named as shorter() which takes two String words as arguments and returns the String 
has less characters when invoked.
NOTE: if both of the words have the same length, then return the second String.
Examples:
shorter("Tech", "Global") -> "Tech"
shorter("Hello", "Hi") -> "Hi"
shorter("Hello", "World") -> "World"

*/

function shorter(word1, word2){

    if(word1.length < word2.length) return word1
    else return word2
}

/*function shorter(word1, word2) {
    if (word1.length <= word2.length) {
      return word1;
    } else {
      return word2;
    }
  }
    */

console.log(shorter("Tech","Global"));
console.log(shorter("hi","hello"));
console.log(shorter("hello","world"));


/*

Write a function named as concat() which takes two string words as arguments and returns the words 
concatenated when invoked.
NOTE: Concatenation should always be as first string + second string . 
Examples:
concat("Tech", "Global") -> "TechGlobal"
concat("Hello", "World") -> "HelloWorld"
concat("", "abc") -> "abc"
concat("123", "1234") -> "1231234

*/

function concat(word1, word2) {

    return word1 + word2
}

console.log(concat("Tech", "Global"));          
console.log(concat("Hello", "World"));
console.log(concat("", "abc"));
console.log(concat("123", "1234"));


/*


Write a function named as startsVowel() which takes a string word as an argument and returns true if 
given string starts with a vowel letter, and false otherwise when invoked.
NOTE: Vowel letters are A, E, O, U, I, a, e, o, u, i.
Examples:
startsVowel("Tech") -> false
startsVowel("Apple") -> true
startsVowel("abc") -> true

*/

function startsVowel(word) {

    word = word.toLowerCase();
return word.startsWith('a') || word.startsWith('e') || word.startsWith('o') || word.startsWith('u') || word.startsWith("i")

}


function middle(str) {

    if (str.length % 2 === 0) return str[str.length / 2-1] + str[str.length / 2];
    else if(str.length % 2 !== 0) return (str[(str.length / 2 ) -0.5]);
    else return (str);
}


console.log(startsVowel("Hello"));// false
console.log(startsVowel("Apple")); // true
console.log(startsVowel("orange"));// true
console.log(startsVowel("")); //false
console.log(startsVowel("    "));//false
console.log(startsVowel("123") );//false
















function startsVowel(word){

word= word.toLowerCase();
return word.startsWith('a') || word.startsWith('e') || word.startsWith('o') || word.startsWith('u') || word.startsWith('i')

}

console.log(startsVowel("Hello"));// false
console.log(startsVowel("Apple")); // true
console.log(startsVowel("orange"));// true
console.log(startsVowel("")); //false
console.log(startsVowel("    "));//false
console.log(startsVowel("123") );//false



let num1 = Math.floor(Math.random() * 10) + 1

console.log(num1);

if(num1 % 2 !== 0) console.log("True");
else console.log("false");




















let num1 = Math.floor(Math.random() * 10) + 1
let num2 = Math.floor(Math.random() * 10) + 1


console.log(num1);
console.log(num2);


console.log(Math.max(num1, num2));




























let number1 = Math.floor(Math.random() * 5) -5

console.log(number1);

if(number1 > 0) console.log("true");
else console.log("false");



let str1 = Math.floor(Math.random() * 5) -5
let str2 = Math.floor(Math.random() * 5) -5
let str3 = Math.floor(Math.random() * 5) -5






function hasFive(str){

    if(str.length > 5) console.log(true);
    else console.log(false);
}

console.log(hasFive("tech"));










function hasFive(word) {

    return word.length > 5
  }
  
  console.log(hasFive("tech"));













