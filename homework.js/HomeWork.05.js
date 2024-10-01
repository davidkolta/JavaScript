/*
Write a function named countPos() which takes an 
array of numbers as an argument and returns how 
many elements are positive  when invoked. 
Examples:
countPos([-45, 0, 0, 34, 5, 67])  -> 3
countPos([-23, -4, 0, 2, 5, 90, 123])  -> 4
countPos([0, -1, -2, -3])  -> 0
*/
console.log('\n---------------TASK01---------------\n');




 function countPoos(array) {
    return array.filter(num => num > 0).length;

}
console.log(countPoos([0, -1, -2, -3]));


/*
Write a function named countA() which takes a string 
argument and returns how many A or a there are in the 
given string when invoked.
NOTE: Ignore case sensitivity. 
Examples:
countA("TechGlobal is a QA bootcamp")  -> 4
countA("QA stands for Quality Assurance")  -> 5
countA("Cypress") 
*/

console.log('\n---------------TASK02---------------\n');



function countAA(string) {

    return string.toLowerCase().split('').filter(num => num === 'a').length;
}

console.log(countAA("TechGlobal is a QA bootcamp"));
console.log(countAA("QA stands for Quality Assurance"));
console.log(countAA("Cypress") );

/*
Write a function named as countVowels() which takes a 
string word as an argument and returns the count of the vowel 
letters when invoked.
NOTE: Vowel letters are A,E, O, U, I, a, e, o, u, i
Examples:
countVowels("Hello")  -> 2
countVowels("Hello World")  -> 3
countVowels("JavaScript is fun")  -> 5
countVowels("")  -> 0
*/

console.log('\n---------------TASK03---------------\n');


    const countVowels = (str) => {
        let str2 = 'AEIOU';
        const vowels = str.toUpperCase().split('').filter((letter) => str2.includes(letter));
        return vowels.length;
     };

     console.log(countVowels("Hello"));
     console.log(countVowels("Hello World"));
     console.log(countVowels("JavaScript is fun"));
     console.log(countVowels(""));


/*
Write a function named as countConsonants() which takes a 
string word as an argument and returns the count of the 
consonant letters when invoked.
NOTE: A letter that is not vowel is considered as a consonant 
letter.
Examples:
countConsonants("Hello")  -> 3
countConsonants("Hello World")  -> 8
countConsonants("JavaScript is fun")  -> 12
countConsonants("")
*/

console.log('\n---------------TASK04---------------\n');


function countConsonants(string) {
const vowels = (['a', 'e', 'i', 'o', 'u']);
    return string.toLowerCase().split('').filter(num => !vowels.includes(num)).length;
}

console.log(countConsonants("Hello"));
console.log(countConsonants("Hello World"));
console.log(countConsonants("JavaScript is fun"));
console.log(countConsonants(""));


/*
Write a function named countWords() which takes a 
string argument and returns the total count of words in 
the given string when invoked.
NOTE: Be careful about the extra whitespaces before 
and after the string.
Examples:
countWords("     Javascript is fun       ")  -> 3
countWords("Cypress is an UI automation tool.    ") 
-> 6 countWords("1 2 3 4") 

*/
console.log('\n---------------TASK05---------------\n');

function countWords(string) {

    return string.trim().split(' ').filter(word => word !== '').length;
} 

console.log(countWords("     Javascript is fun       "));
console.log(countWords("Cypress is an UI automation tool.    "));



/*
Write a function named as factorial() which takes a 
number as an argument and returns the factorial of the 
number when invoked.
NOTE: Mathematically, the factorial of a non-negative 
integer n is defined as:
n! = n × (n-1) × (n-2) × ... × 2 × 1
Assume you will not be given a negative number.
Examples:
factorial(5)  -> 120
factorial(4) -> 24
factorial(0) -> 1
factorial(1) -> 1
*/
console.log('\n---------------TASK06---------------\n');

function factorial(number) {
    let result = 1;
    for(let i = 1; i <= number; i++){
        result *= i;
    } return result;
}




console.log(factorial(5));
console.log(factorial(4)); 
console.log(factorial(0)); 
console.log(factorial(1));


/*
Write a function named as isPalindrome() which takes a 
string word as an argument and returns true if the word is 
palindrome or returns false otherwise when invoked.
NOTE: Palindrome: It is a word that is read the same backward 
as forward
Examples: kayak, civic, madam
NOTE: your function should ignore case sensitivity
Examples:
isPalindrome("Hello")  -> false
isPalindrome("Kayak")  -> true 
isPalindrome("civic")  -> true
isPalindrome("abba")  -> true
isPalindrome("ab  a")  -> false
isPalindrome("123454321")  -> true
isPalindrome("A")  -> true
isPalindrome("")  -> true
*/
console.log('\n---------------TASK07---------------\n');

function isPalindrome(string) { 
    const updatedWord = string.toLowerCase();
    const reversedWord = string.split('').reverse().join('');
    return updatedWord === reversedWord;

}



console.log(isPalindrome("Hello"));
console.log(isPalindrome("Kayak"));
console.log(isPalindrome("civic")); 
console.log(isPalindrome("abba"));  
console.log(isPalindrome("ab  a"));  
console.log(isPalindrome("123454321"));
console.log(isPalindrome("A"));
console.log(isPalindrome("")); 


/*
Write a function named as countMultipleWords() which takes 
an array as an argument and returns the count of the elements 
that has multiple words when invoked.
NOTE: Be careful about the extra whitespaces before and after 
the array element.
Examples:
countMultipleWords([ "foo", "", "    ", "foo bar", "     foo" ]) 
-> 1
countMultipleWords([ "foo", "bar", "foobar", "     foobar   " ]) 
-> 0
countMultipleWords([ "f o o", "b a r", "foo bar", "     foo bar   " ]) 
-> 4
countMultipleWords([ ]) 
*/

console.log('\n---------------TASK08---------------\n');


function countMultipleWords(array) {
    return array.filter((element) => element.trim().includes(' ')).length;
}


console.log(countMultipleWords([ "foo", "", "    ", "foo bar", "     foo" ]));
console.log(countMultipleWords([ "foo", "bar", "foobar", "     foobar   " ]));
console.log(countMultipleWords([ "f o o", "b a r", "foo bar", "     foo bar   " ]));
console.log(countMultipleWords([]));


/*
Write a function named as count3OrLess() which takes a 
string word as an argument and returns the count of the words 
that has 3 characters or less when invoked.
Examples:
count3OrLess("Hello")  -> 0
count3OrLess("Hi John")  -> 1
count3OrLess("JavaScript is fun")  -> 2
count3OrLess("My name is John Doe")  -> 3
count3OrLess("")  -> 0
*/
console.log('\n---------------TASK09---------------\n');

function count3OrLess(string) {
 const shortWords = string.split(' ');
 const wordswith3letters = shortWords.filter(string => string.length <= 3);

 return wordswith3letters.length
}
console.log(count3OrLess("Hello"));  
console.log(count3OrLess("Hi John"));
console.log(count3OrLess("JavaScript is fun"));   
console.log(count3OrLess("My name is John Doe")); 
console.log(count3OrLess(""));


/*

Write a function named as isPrime() which takes a 
number as an argument and returns true if the number 
is prime or returns false otherwise when invoked.
NOTE: Mathematically, Prime number is a number that 
can be divided only by itself and 1. It cannot be divided 
by any other number. The smallest prime number is 2 
and 2 is the only even prime number.
Examples: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31...
NOTE: The smallest prime number is 2 and there is no 
negative prime numbers.
Examples:
isPrime(5)  -> true
isPrime(2)  -> true
isPrime(29)  -> true
isPrime(-5) -> false
isPrime(0) -> false
*/

console.log('\n---------------TASK10---------------\n');

function isPrime(num) {

    if(num < 2) {
        return false;
    }
    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i === 0){
            return false;
        }
    }
    return true
}


console.log(isPrime(5));   // true
console.log(isPrime(2));   // true
console.log(isPrime(29));  // true
console.log(isPrime(-5));  // false
console.log(isPrime(0));


/*
Write a function named add() which takes two array of 
numbers as argument and returns a new array with sum of 
given arrays elements.
NOTE: Be careful about the array sizes as they could be 
different.
Examples:
add([3, 0, 0, 7, 5, 10], [6, 3, 2] )  -> [9, 3, 2, 7, 
5, 10]
add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34])  -> [16, 11, 9,  
3, 2, 7, 5, 10, 34] 
add([-5, 6, -3, 11], [5, -6, 3, -11])  -> [0, 0, 0, 0]
*/

console.log('\n---------------TASK11---------------\n');


const add = (arr1, arr2) => {
    if (arr1.length < arr2.length) {
        for (let i = arr1.length; i < arr2.length; i++) {
            arr1.push(0);
        }
    }
   
    
 
}


/*
Write a function named as removeExtraSpaces() which takes 
a string word as an argument and returns the string back with 
all extra spaces removed when invoked.
Examples:
removeExtraSpaces("Hello")  -> "Hello" 
removeExtraSpaces("      Hello    World     ")  -> "Hello 
World" 
removeExtraSpaces("     JavaScript is          fun")  -> 
"JavaScript is fun”
removeExtraSpaces("") 
*/
console.log('\n---------------TASK12---------------\n');

function removeExtraSpaces(str){

    const wordArray = str.split(' ');
    const filteredWords = wordArray.filter(str => str !== '');
    return filteredWords.join(' ');
}

console.log(removeExtraSpaces("Hello"));                     
console.log(removeExtraSpaces("      Hello    World     "));  
console.log(removeExtraSpaces("     JavaScript is          fun")); 


/*

Write a function named findClosestTo10() which takes an 
array of numbers as argument and returns the closest element 
to 10 from the given array.
NOTE: Assume that length of array is always more than zero.
NOTE: Ignore the 10 itself.
NOTE: If there are more than one numbers are close equally, 
return the smaller number.
Examples:
findClosestTo10([10, -13, 5, 70, 15, 57] )  -> 5
findClosestTo10([10, -13, 8, 12, 15, -20])  -> 8
findClosestTo10([0, -1, -2])  

*/
console.log('\n---------------TASK13---------------\n');




/*

Write a function named as isEmailValid() which takes a string 
email as an argument and returns true if the email is valid or 
returns false otherwise when invoked.
NOTE: A VALID EMAIL:
•should NOT have any space.
•should not have more than one “@” character.
•should be in the given format 
<2+chars>@<2+chars>.<2+chars> meaning
•There should be at least characters before @ character.
•There should be at least 2 characters between @ and . 
Characters.
•There should be at least 2 characters after the . character.
Examples:
 

*/

console.log('\n---------------TASK14---------------\n');

function isEmailValid(email) {
    if(email.includes(' ')){
        return false;
    }
    if(email.split('@'))
        return false;
}



/*


Write a function named as isPasswordValid() which takes a 
string email as an argument and returns true if the password 
is valid or returns false otherwise when invoked.
NOTE: A VALID PASSWORD:
•should have length of 8 to 16 (both inclusive).
•should have at least 1 digit, 1 uppercase, 1 lowercase and 1 
special char.
•should NOT have any space.
Examples:
isPasswordValid("")  -> false
isPasswordValid("abcd")  -> false
isPasswordValid("abcd1234")  -> false
isPasswordValid("Abcd1234")  -> false
isPasswordValid("Chicago12345US!#$%")  -> false
isPasswordValid("Abcd1234$")  -> true
isPasswordValid("Chicago123$")  -> true
isPasswordValid("Test1234#") 

*/
console.log('\n---------------TASK15---------------\n');

function isPasswordValid(password) {

    if(password.length <8 || password.length < 16 || password.includes(' ')) return false;

    let hasUppercase = false;
    let hasLowercase = false;
    let hasDigit = false;
    let hasSpecial = false;

    if(password.includes(' ')){
        return false;
    }

}