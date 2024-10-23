/*
Write a function named as doubleOrTripleWord() which takes a string word as an argument
and returns the given word back tripled if the string length is even or doubled if the string length
is odd when invoked.
Examples:
doubleOrTripleWord("Tech") -> "TechTechTech"
doubleOrTripleWord("Apple") -> "AppleApple”
doubleOrTripleWord("") -> ""
doubleOrTripleWord(" ") -> " "
doubleOrTripleWord("1") -> "11"
doubleOrTripleWord("22") -> "222222"


Double or Triple the Word
//no issues 

*/

function doubleOrTripleWord(string) {

    if(string.length % 2 ===0) {
        return string.repeat(3);}
        else{
            return string.repeat(2);
        }
    
}

console.log(doubleOrTripleWord("Tech"));  // Output: TechTechTech
console.log(doubleOrTripleWord("Apple"));  // Output: AppleApple
console.log(doubleOrTripleWord(""));  // Output: 
console.log(doubleOrTripleWord(" "));  // Output:  
console.log(doubleOrTripleWord("1"));  // Output: 11
console.log(doubleOrTripleWord("22"));

/*

Write a function named as firstlastWord() which takes a string word as an argument and
returns the first and last words from the given string when invoked.
NOTE: Return empty string if the given string does not have any word.
Examples:
firstLastWord("Hello World") -> "HelloWorld"
firstLastWord("I like JavaScript") -> "IJavaScript”
firstLastWord("Hello") -> "HelloHello"
firstLastWord("") -> ""
firstLastWord(" ") -> ""


First and Last Word
*/

function firstLastWord(string) {
    // Split the string into an array of words
    let words = string.split(' ');

    // Check if there are any words in the array
    if (words.length > 0) {
        // Return the first and last words joined together
        return words[0] + words[words.length - 1];
    } else {
        // Return an empty string if there are no words
        return '';
    }
}

// Test the function
console.log(firstLastWord("Hello World"));  // Output: HelloWorld
console.log(firstLastWord("I like JavaScript"));  // Output: IJavaScript
console.log(firstLastWord("Hello"));  // Output: HelloHello
console.log(firstLastWord(""));  // Output: 
console.log(firstLastWord(" ")); 


/*
Write a function named hasVowel() which takes a string argument and returns true if the
string has a vowel, returns false if the string doesn’t contain any vowel letter.
NOTE: Vowels are = a, e, o, u, i.
NOTE: Ignore upper/lower cases.
Examples:
hasVowel("") -> false
hasVowel("Javascript") -> true
hasVowel("Tech Global") -> true
hasVowel("1234") -> false
hasVowel("ABC") -> true


Has Vowel
*/

function hasVowel(string) {
    // Convert the string to lowercase
    var lowercaseString = string.toLowerCase();

    // Define the vowels
    var vowels = ['a', 'e', 'o', 'u', 'i'];

    // Check if the string contains any vowel
    for (var i = 0; i < lowercaseString.length; i++) {
        if (vowels.includes(lowercaseString[i])) {
            return true;
        }
    }

    // Return false if the string doesn't contain any vowel
    return false;
}

// Test the function
console.log(hasVowel(""));  // Output: false
console.log(hasVowel("Javascript"));  // Output: true
console.log(hasVowel("Tech Global"));  // Output: true
console.log(hasVowel("1234"));  // Output: false
console.log(hasVowel("ABC")); 


/*

Write a function named as startVowel() which takes a string word as an argument and returns
true if given string starts with a vowel, and false otherwise when invoked.
NOTE: Vowel letters: a, e, i o, u, A, E, I, O, U
Examples:
startVowel("Hello") -> false
startVowel("Apple") -> true
startVowel("orange") -> true
startVowel("") -> false
startVowel(" ") -> false
startVowel("123") -> false

Start Vowel
*/

function startVowel(word) {
    // Define the vowel letters
    var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

    // Check if the first character of the word is a vowel
    if (vowels.includes(word[0])) {
        return true;
    } else {
        return false;
    }
}

// Test the function
console.log(startVowel("Hello"));  // Output: false
console.log(startVowel("Apple"));  // Output: true
console.log(startVowel("orange"));  // Output: true
console.log(startVowel(""));  // Output: false
console.log(startVowel(" "));  // Output: false
console.log(startVowel("123")); 


/*
Write a function named averageOfEdges() which takes three number arguments and will
return average of min and max numbers.
Examples:
averageOfEdges(0, 0, 0) -> 0
averageOfEdges(0, 0, 6) -> 3
averageOfEdges(-2, -2, 10) -> 4
averageOfEdges(-3, 15, -3) -> 6
averageOfEdges(10, 13, 20) -> 15

Average of Edges
*/
function averageOfEdges(num1, num2, num3) {
    // Find the minimum and maximum numbers
    var min = Math.min(num1, num2, num3);
    var max = Math.max(num1, num2, num3);

    // Calculate the average of the minimum and maximum numbers
    var average = (min + max) / 2;

    return average;
}

// Test the function
console.log(averageOfEdges(0, 0, 0));  // Output: 0
console.log(averageOfEdges(0, 0, 6));  // Output: 3
console.log(averageOfEdges(-2, -2, 10));  // Output: 4
console.log(averageOfEdges(-3, 15, -3));  // Output: 6
console.log(averageOfEdges(10, 13, 20)); 





/*
Write a function named as swap4() which takes a string word as an argument and returns the
string back with its first and last 4 characters swapped when invoked.
NOTE: Return empty string if the given string does not have 8 or more characters.
Examples:
swap4("abc") -> ""
swap4("JavaScript") -> "riptScJava"
swap4("TechGlobal") -> "obalGlTech"
swap4("") -> ""
swap4(" ") -> ""
swap4("Apple") -> ""


Swap First and Last Characters
*/


function swap4(word) {
    // Check if the string has 8 or more characters
    if (word.length < 8) {
        return '';
    }

    // Swap the first and last 4 characters
    var firstFour = word.slice(0, 4);
    var lastFour = word.slice(-4);
    var middle = word.slice(4, -4);

    var swappedWord = lastFour + middle + firstFour;

    return swappedWord;
}

// Test the function
console.log(swap4("abc"));  // Output: ""
console.log(swap4("JavaScript"));  // Output: "riptScJava"
console.log(swap4("TechGlobal"));  // Output: "obalGlTech"
console.log(swap4(""));  // Output: ""
console.log(swap4(" "));  // Output: ""
console.log(swap4("Apple"));

/*
Write a function named replaceFirstLast() which takes a string argument and returns a new
string with the first and last characters replaced.
NOTE: If the length is less than 2, return an empty string.
NOTE: Ignore extra spaces before and after the string.
Examples:
replaceFirstLast("") -> ""
replaceFirstLast("Hello") -> "oellH"
replaceFirstLast("Tech Global") -> "lech GlobaT"
replaceFirstLast("A") -> ""
replaceFirstLast(" A ") -> ""

Swap First and Last Characters
*/

function replaceFirstLast(string) {
    // Trim the string to remove extra spaces
    var trimmedString = string.trim();

    // Check if the length is less than 2
    if (trimmedString.length < 2) {
        return '';
    }

    // Replace the first and last characters
    var newString = trimmedString[trimmedString.length - 1] + trimmedString.slice(1, -1) + trimmedString[0];

    return newString;
}

// Test the function
console.log(replaceFirstLast(""));  // Output: ""
console.log(replaceFirstLast("Hello"));  // Output: "oellH"
console.log(replaceFirstLast("Tech Global"));  // Output: "lech GlobaT"
console.log(replaceFirstLast("A"));  // Output: ""
console.log(replaceFirstLast(" A "));  // Output: ""


/*
Swap First and Last Words
Write a function named as swapFirstLastWord() which takes a string word as an argument
and returns the string back with its first and last words swapped when invoked.
NOTE: Return empty string if the given string does not have 2 or more words.
Examples:
swapFirstLastWord("Hello World") -> "World Hello"
swapFirstLastWord("I like JavaScript") -> "JavaScript like I"
swapFirstLastWord("foo bar foo bar") -> "bar bar foo foo"
swapFirstLastWord("") -> ""
swapFirstLastWord(" ") -> ""
swapFirstLastWord("Hello") -> ""
swapFirstLastWord("Hello ") -> ""

Swap First and Last Words
*/

function swapFirstLastWord(string) {
    // Split the string into an array of words
    var words = string.trim().split(' ');

    // Check if there are at least 2 words
    if (words.length < 2) {
        return '';
    }

    // Swap the first and last words
    var swappedWords = words.slice(-1).concat(words.slice(1, -1)).concat(words.slice(0, 1));

    // Join the swapped words back into a string
    var swappedString = swappedWords.join(' ');

    return swappedString;
}

// Test the function
console.log(swapFirstLastWord("Hello World"));  // Output: "World Hello"
console.log(swapFirstLastWord("I like JavaScript"));  // Output: "JavaScript like I"
console.log(swapFirstLastWord("foo bar foo bar"));  // Output: "bar bar foo foo"
console.log(swapFirstLastWord(""));  // Output: ""
console.log(swapFirstLastWord(" "));  // Output: ""
console.log(swapFirstLastWord("Hello"));  // Output: ""
console.log(swapFirstLastWord("Hello "));  // Output: ""



/*

Count Positive Numbers
Write a function named countPos() which takes an array of numbers as an argument and
returns how many elements are positive when invoked.
Examples:
countPos([-45, 0, 0, 34, 5, 67]) -> 3
countPos([-23, -4, 0, 2, 5, 90, 123]) -> 4
countPos([0, -1, -2, -3]) -> 0


Count Positive Numbers
*/

function countPos(numbers) {
    // Initialize a counter variable
    var count = 0;

    // Iterate over each element in the array
    for (var i = 0; i < numbers.length; i++) {
        // Check if the element is positive
        if (numbers[i] > 0) {
            // Increment the counter variable
            count++;
        }
    }

    // Return the counter variable
    return count;
}

// Test the function
console.log(countPos([-45, 0, 0, 34, 5, 67]));  // Output: 3
console.log(countPos([-23, -4, 0, 2, 5, 90, 123]));  // Output: 4
console.log(countPos([0, -1, -2, -3]));  // Output: 0


/*

Write a function named as getEvens() which takes 2 number arguments and returns all the
even numbers as an array stored from smallest even number to greatest even number when
invoked.
NOTE: Make your code dynamic that works for any numbers and return empty array if there are
no even numbers in the range of given 2 numbers.
Assume you will not be given negative numbers.
Examples:
getEvens(2, 7) -> [ 2, 4, 6 ]
getEvens(17, 5) -> [ 6, 8, 10, 12, 14, 16 ]
getEvens(4, 4) -> [ 4 ]
getEvens(3, 3) -> [ ]


Find Even Numbers

*/

function getEvens(start, end) {
    // Initialize an empty array to store the even numbers
    var evenNumbers = [];

    // Loop through the range from start to end
    for (var i = start; i <= end; i++) {
        // Check if the current number is even
        if (i % 2 === 0) {
            // Add the even number to the array
            evenNumbers.push(i);
        }
    }

    // Return the array of even numbers
    return evenNumbers;
}

// Test the function
console.log(getEvens(2, 7));  // Output: [ 2, 4, 6 ]
console.log(getEvens(17, 5));  // Output: [ 6, 8, 10, 12, 14, 16 ]
console.log(getEvens(4, 4));  // Output: [ 4 ]
console.log(getEvens(3, 3));


/*

Write a function named as getMultipleOf5() which takes 2 number arguments and returns all the
numbers divisible by 5 as an array stored from first found match to last found match when
invoked.
NOTE: Make your code dynamic that works for any numbers and return empty array if there are
no numbers divisible by 5 in the range of given 2 numbers.
Assume you will not be given negative numbers.
Examples:
getMultipleOf5(3, 17) -> [ 5, 10, 15]
getMultipleOf5(23, 5) -> [ 20, 15, 10, 5 ]
getMultipleOf5(5, 5) -> [ 5 ]
getMultipleOf5(2, 4) -> [ ]


Find Numbers Divisible By 5
*/

function getMultipleOf5(start, end) {
    // Initialize an empty array to store the numbers divisible by 5
    var multiplesOf5 = [];

    // Loop through the range from start to end
    for (var i = start; i <= end; i++) {
        // Check if the current number is divisible by 5
        if (i % 5 === 0) {
            // Add the number to the array
            multiplesOf5.push(i);
        }
    }

    // Return the array of numbers divisible by 5
    return multiplesOf5;
}

// Test the function
console.log(getMultipleOf5(3, 17));  // Output: [ 5, 10, 15 ]
console.log(getMultipleOf5(23, 5));  // Output: [ 20, 15, 10, 5 ]
console.log(getMultipleOf5(5, 5));  // Output: [ 5 ]
console.log(getMultipleOf5(2, 4));


/*

Write a function named countNeg() which takes an array of numbers as an argument and
returns how many elements are negative when invoked.
Examples:
countNeg([-45, 0, 0, 34, 5, 67]) -> 1
countNeg([-23, -4, 0, 2, 5, 90, 123]) -> 2
countNeg([0, -1, -2, -3])

Count Negative Numbers
*/

function countNeg(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            count++;
        }
    }
    return count;
}

console.log(countNeg([-45, 0, 0, 34, 5, 67])); // Output: 1
console.log(countNeg([-23, -4, 0, 2, 5, 90, 123])); // Output: 2
console.log(countNeg([0, -1, -2, -3]));


function countNeg(arr) {
    return arr.filter(x => x < 0).length;
  }
  
  // Examples
  console.log(countNeg([-45, 0, 0, 34, 5, 67]));    // 1
  console.log(countNeg([-23, -4, 0, 2, 5, 90, 123]));    // 2
  console.log(countNeg([0, -1, -2, -3



/*
Write a function named countA() which takes a string argument and returns how many A or a
there are in the given string when invoked.
NOTE: Ignore case sensitivity.
Examples:
countA("TechGlobal is a QA bootcamp") -> 4
countA("QA stands for Quality Assurance") -> 5
countA("Cypress")

Count A

*/
function countA(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === 'a') {
            count++;
        }
    }
    return count;
}


console.log(countA("TechGlobal is a QA bootcamp")); // Output: 4
console.log(countA("QA stands for Quality Assurance")); // Output: 5
console.log(countA("Cypress"));

/*

Write a function named countWords() which takes a string argument and returns the total
count of words in the given string when invoked.
NOTE: Be careful about the extra whitespaces before and after the string.
Examples:
countWords(" Javascript is fun ") -> 3
countWords("Cypress is an UI automation tool. ") -> 6
countWords("1 2 3 4") -> 4

Count Words
*/

function countWords(str) {
    // Trim the input string to remove leading and trailing spaces
    str = str.trim();
    
    // Split the string into an array of words using a simple space split
    let words = str.split(' ').filter(word => word !== '');
    
    // Return the count of words
    return words.length;
}

// Examples
console.log(countWords(" Javascript is fun ")); // 3
console.log(countWords("Cypress is an UI automation tool. ")); // 6
console.log(countWords("1 2 3 4")); 


/*
Write a function named as factorial() which takes a number as an argument and returns the
factorial of the number when invoked.
NOTE: Mathematically, the factorial of a non-negative integer n is defined as:
n! = n × (n-1) × (n-2) × ... × 2 × 1
Assume you will not be given a negative number.

Factorial

*/

function factorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

console.log(factorial(5)); 
console.log(factorial(4)); 
console.log(factorial(0)); 
console.log(factorial(1)); 


/*

Write a function named as count3OrLess() which takes a string word as an argument and
returns the count of the words that has 3 characters or less when invoked.
Examples:
count3OrLess("Hello") -> 0
count3OrLess("Hi John") -> 1
count3OrLess("JavaScript is fun") -> 2
count3OrLess("My name is John Doe") -> 3
count3OrLess("") -> 0

Count 3 or Less

*/

function count3OrLess(str) {

    let words = str.split(' ').filter(word => word.length > 0);
    let count = 0;
    for (let i = 0; i < words.length; i++) {
        if (words[i].length <= 3) {
            count++;
        }
    }
    return count;
}


console.log(count3OrLess("Hello")); // Output: 0
console.log(count3OrLess("Hi John")); // Output: 1
console.log(count3OrLess("JavaScript is fun")); // Output: 2
console.log(count3OrLess("My name is John Doe")); // Output: 3
console.log(count3OrLess("")); // Output: 0


/*

Write a function named as removeExtraSpaces() which takes a string word as an argument
and returns the string back with all extra spaces removed when invoked.
Examples:
removeExtraSpaces("Hello") -> "Hello"
removeExtraSpaces(" Hello World ") -> "Hello World"
removeExtraSpaces(" JavaScript is fun") -> "JavaScript is fun”
removeExtraSpaces("")

Remove Extra Spaces

*/

function removeExtraSpaces(str) {
    // Remove leading and trailing whitespaces
    str = str.trim();

    // Replace multiple consecutive whitespaces with a single whitespace
    str = str.replace(/\s+/g, ' ');

    return str;
}


console.log(removeExtraSpaces("Hello")); // Output: "Hello"
console.log(removeExtraSpaces(" Hello World ")); // Output: "Hello World"
console.log(removeExtraSpaces(" JavaScript is fun")); // Output: "JavaScript is fun"
console.log(removeExtraSpaces("")); 


/*

Write a function named middleInt() which takes three number arguments and return the middle
number.
Examples:
middleInt(1, 2, 2) -> 2
middleInt(5, 5, 8) -> 5
middleInt(5, 3, 5) -> 5
middleInt(1, 1, 1) -> 1
middleInt(-1, 25, 10) -> 10

Middle Number

*/


function middleInt(a, b, c) {
    // Sort the numbers in ascending order
    let sortedNumbers = [a, b, c].sort((x, y) => x - y);

    // Return the middle number
    return sortedNumbers[1];
}

console.log(middleInt(1, 2, 2)); // Output: 2
console.log(middleInt(5, 5, 8)); // Output: 5
console.log(middleInt(5, 3, 5)); // Output: 5
console.log(middleInt(1, 1, 1)); // Output: 1
console.log(middleInt(-1, 25, 10));


/*

Write a function named as firstDuplicate() which takes an array argument and returns the first
duplicated number in the array when invoked.
NOTE: Make your code dynamic that works for any array and return -1 if there are no duplicates
in the array. For two elements to be considered as duplicated, value and data types of the
elements must be same.
Examples:
firstDuplicate([ 3, 7, 10, 0, 3, 10 ]) -> 3
firstDuplicate([ 5, 7, 7, 0, 5, 10 ]) -> 5
firstDuplicate([ 5, '5', 3, 7, 4 ]) -> -1
firstDuplicate([ 123, 'abc', '123', 3, 'abc' ]) -> 'abc'
firstDuplicate([ 1, 2, 3]) -> -1
firstDuplicate([ 'foo', 'abc', '123', 'bar’ ]) -> -1

First Duplicate Element
*/

function firstDuplicate(arr) {
    // Create an empty object to store the count of each element
    let count = {};

    // Iterate over each element in the array
    for (let i = 0; i < arr.length; i++) {
        // Check if the element is already present in the count object
        if (count[arr[i]]) {
            // Return the first duplicated element
            return arr[i];
        } else {
            // Add the element to the count object
            count[arr[i]] = true;
        }
    }

    // Return -1 if there are no duplicates
    return -1;
}

console.log(firstDuplicate([ 3, 7, 10, 0, 3, 10 ])); // Output: 3
console.log(firstDuplicate([ 5, 7, 7, 0, 5, 10 ])); // Output: 5
console.log(firstDuplicate([ 5, '5', 3, 7, 4 ])); // Output: -1
console.log(firstDuplicate([ 123, 'abc', '123', 3, 'abc' ])); // Output: 'abc'
console.log(firstDuplicate([ 1, 2, 3])); // Output: -1
console.log(firstDuplicate([ 'foo', 'abc', '123', 'bar' ]));


/*

Write a function named as getDuplicates() which takes an array argument and returns all the
duplicated elements in the array when invoked.
NOTE: Make your code dynamic that works for any array and return empty array if there are no
duplicates in the array. For two elements to be considered as duplicated, value and data types
of the elements must be same.
Examples:
getDuplicates([ 0, -4, -7, 0, 5, 10, 45, -7, 0 ]) -> [ 0, -7 ]
getDuplicates([ 1, 2, 5, 0, 7 ]) -> [ ]
getDuplicates(['A', 'foo', '12’ , 12, 'bar', 'a', 'a', 'foo' ]) -> [ 'foo', 'a’ ]
getDuplicates([ 'foo', '12' , 12, 'bar', 'a' ]) -> [ ]

Find All Duplicate Elements
*/


function getDuplicates(arr) {
    // Create an empty object to store the count of each element
    let count = {};

    // Create an empty array to store the duplicates
    let duplicates = [];

    // Iterate over each element in the array
    for (let i = 0; i < arr.length; i++) {
        // Check if the element is already present in the count object
        if (count[arr[i]]) {
            // Check if the element is already added to the duplicates array
            if (!duplicates.includes(arr[i])) {
                // Add the element to the duplicates array
                duplicates.push(arr[i]);
            }
        } else {
            // Add the element to the count object
            count[arr[i]] = true;
        }
    }

    // Return the duplicates array
    return duplicates;
}


console.log(getDuplicates([ 0, -4, -7, 0, 5, 10, 45, -7, 0 ])); // Output: [ 0, -7 ]
console.log(getDuplicates([ 1, 2, 5, 0, 7 ])); // Output: [ ]
console.log(getDuplicates(['A', 'foo', '12', 12, 'bar', 'a', 'a', 'foo'])); // Output: [ 'foo', 'a' ]
console.log(getDuplicates([ 'foo', '12', 12, 'bar', 'a' ]));

/*
Write a function named as countVowels() which takes a string word as an argument and
returns the count of the vowel letters when invoked.
NOTE: Vowel letters are A,E, O, U, I, a, e, o, u, i
Examples:
countVowels("Hello") -> 2
countVowels("JavaScript is fun") -> 5
countVowels("") -> 0

Count Vowels
*/


function countVowels(word) {
    const vowels = 'AEIOUaeiou';
    let count = 0;
  
    for (let i = 0; i < word.length; i++) {
      if (vowels.includes(word[i])) {
        count++;
      }
    }
  
    return count;
  }
  
  // Examples
  console.log(countVowels("Hello"));    // 2
  console.log(countVowels("JavaScript is fun"));    // 5
  console.log(countVowels(""));


  /*

  Write a function named as reverseStringWords() which takes a string as an argument and
returns string back with each word separately reversed when invoked.
NOTE: Make your code dynamic that works for any string. Make sure you consider extra spaces
before and after words in the given string.
Examples:
reverseStringWords("Hello World") -> "olleH dlroW"
reverseStringWords("I like JavaScript") -> "I ekil tpircSavaJ"
reverseStringWords("Hello") -> "olleH"
reverseStringWords("") -> ""
reverseStringWords(" ") -> ""

Reverse String Words

*/

function reverseStringWords(str) {
    // Split the string into an array of words
    let words = str.split(' ');

    // Reverse each word in the array
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].split('').reverse().join('');
    }

    // Join the reversed words back into a string
    return words.join(' ');
}


console.log(reverseStringWords("Hello World")); // Output: "olleH dlroW"
console.log(reverseStringWords("I like JavaScript")); // Output: "I ekil tpircSavaJ"
console.log(reverseStringWords("Hello")); // Output: "olleH"
console.log(reverseStringWords("")); // Output: ""
console.log(reverseStringWords(" ")); 


/*

Write a function named as countConsonants() which takes a string word as an argument and
returns the count of the consonant letters when invoked.
NOTE: A letter that is not vowel is considered as a consonant letter.
Examples:
countConsonants("Hello") -> 3
countConsonants("Hello World") -> 8
countConsonants("JavaScript is fun") -> 12
countConsonants("") -> 0

Count Consonants
*/
    
    function countConsonants(word) {
    const vowels = 'AEIOUaeiou';
    let count = 0;
  
    for (let i = 0; i < word.length; i++) {
      let char = word[i];
      if (!vowels.includes(char) && char.toLowerCase() !== char.toUpperCase()) {
        count++;
      }
    }
  
    return count;
  }
  
  // Examples
  console.log(countConsonants("Hello"));    // 3
  console.log(countConsonants("Hello World"));    // 8
  console.log(countConsonants("JavaScript is fun"));    // 12
  console.log(countConsonants("")); 

  /*

  Write a function named as countMultipleWords() which takes an array as an argument and
returns the count of the elements that has multiple words when invoked.
NOTE: Be careful about the extra whitespaces before and after the array element.
Examples:
countMultipleWords([ "foo", "", " ", "foo bar", " foo" ]) -> 1
countMultipleWords([ "foo", "bar", "foobar", " foobar " ]) -> 0
countMultipleWords([ "f o o", "b a r", "foo bar", " foo bar " ]) -> 4
countMultipleWords([ ]) -> 0

Count Multiple Words

*/


function countMultipleWords(arr) {
    // Initialize a counter variable
    let count = 0;

    // Iterate over each element in the array
    for (let i = 0; i < arr.length; i++) {
        // Trim the element to remove extra whitespaces
        let trimmedElement = arr[i].trim();

        // Check if the trimmed element has multiple words
        if (trimmedElement.split(' ').length > 1) {
            // Increment the counter
            count++;
        }
    }

    // Return the count
    return count;
}

console.log(countMultipleWords([ "foo", "", " ", "foo bar", " foo" ])); // Output: 1
console.log(countMultipleWords([ "foo", "bar", "foobar", " foobar " ])); // Output: 0
console.log(countMultipleWords([ "f o o", "b a r", "foo bar", " foo bar " ])); // Output: 4
console.log(countMultipleWords([ ])); // Output: 0



/*

Write a function named as fizzBuzz() which takes 2 number arguments and returns a string
composed with below requirements when invoked.
• You need to find all the numbers within the range of given 2 numbers (both inclusive)
and store them in a string from smallest to greatest number with a ' | ' separator for each
number.
• You will need to convert numbers divisible by 3 to 'Fizz'
• You will need to convert numbers divisible by 5 to 'Buzz'
• You will need to convert numbers divisible by both 3 and 5 to 'FizzBuzz’
• The rest will stay the same.
NOTE: Make your code dynamic that works for any numbers.
Assume you will not be given negative numbers.
Examples:
fizzBuzz(13, 18) -> "13 | 14 | FizzBuzz | 16 | 17 | Fizz"
fizzBuzz(12, 5) -> "Buzz | Fizz | 7 | 8 | Fizz | Buzz | 11 | Fizz"
fizzBuzz(5, 5) -> "Buzz"
fizzBuzz(9, 6) -> "Fizz | 7 | 8 | Fizz"

FizzBuzz

*/

function fizzBuzz(start, end) {
    // Initialize an empty string to store the result
    let result = '';

    // Iterate over the range of numbers from start to end (inclusive)
    for (let i = start; i <= end; i++) {
        // Check if the current number is divisible by both 3 and 5
        if (i % 3 === 0 && i % 5 === 0) {
            result += 'FizzBuzz';
        }
        // Check if the current number is divisible by 3
        else if (i % 3 === 0) {
            result += 'Fizz';
        }
        // Check if the current number is divisible by 5
        else if (i % 5 === 0) {
            result += 'Buzz';
        }
        // If the current number does not meet any of the above conditions, add the number itself
        else {
            result += i;
        }

        // Add a ' | ' separator after each number except for the last number
        if (i !== end) {
            result += ' | ';
        }
    }

    // Return the result string
    return result;
}

console.log(fizzBuzz(13, 18)); // Output: "13 | 14 | FizzBuzz | 16 | 17 | Fizz"
console.log(fizzBuzz(12, 5)); // Output: "Buzz | Fizz | 7 | 8 | Fizz | Buzz | 11 | Fizz"
console.log(fizzBuzz(5, 5)); // Output: "Buzz"
console.log(fizzBuzz(9, 6)); // Output: "Fizz | 7 | 8 | Fizz"


/*

Write a function named as isPalindrome() which takes a string word as an argument and
returns true if the word is palindrome or returns false otherwise when invoked.
NOTE: Palindrome: It is a word that is read the same backward as forward
Examples: kayak, civic, madam
NOTE: your function should ignore case sensitivity
Examples:
isPalindrome("Hello") -> false
isPalindrome("Kayak") -> true
isPalindrome("civic") -> true
isPalindrome("abba") -> true
isPalindrome("ab a") -> false
isPalindrome("123454321") -> true
isPalindrome("A") -> true
isPalindrome("") -> true

Palindrome

*/

function isPalindrome(word) {
    // Convert the string to lowercase to ignore case sensitivity
    word = word.toLowerCase();
    
    // Initialize pointers for the start and end of the string
    let start = 0;
    let end = word.length - 1;
    
    // Check characters from both ends towards the center
    while (start < end) {
        if (word[start] !== word[end]) {
            return false;
        }
        start++;
        end--;
    }
    
    return true;
}


console.log(isPalindrome("Hello")); // false
console.log(isPalindrome("Kayak")); // true
console.log(isPalindrome("civic")); // true
console.log(isPalindrome("abba")); // true
console.log(isPalindrome("ab a")); // false
console.log(isPalindrome("123454321")); // true
console.log(isPalindrome("A")); // true
console.log(isPalindrome("")); 

/*

Write a function named as isPrime() which takes a number as an argument and returns true if
the number is prime or returns false otherwise when invoked.
NOTE: Mathematically, Prime number is a number that can be divided only by itself and 1. It
cannot be divided by any other number. The smallest prime number is 2 and 2 is the only even
prime number.
Examples: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31…
NOTE: The smallest prime number is 2 and there is no negative prime numbers.
Examples:
isPrime(5) -> true
isPrime(2) -> true
isPrime(29) -> true
isPrime(-5) -> false
isPrime(0) -> false
isPrime(1) -> false

Prime Number

*/

function isPrime(num) {
    // Check if the number is less than 2
    if (num < 2) {
        return false;
    }

    // Check if the number is divisible by any number from 2 to the square root of the number
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }

    // If the number is not divisible by any other number, it is prime
    return true;
}


console.log(isPrime(5)); // Output: true
console.log(isPrime(2)); // Output: true
console.log(isPrime(29)); // Output: true
console.log(isPrime(-5)); // Output: false
console.log(isPrime(0)); // Output: false
console.log(isPrime(1)); // Output: false


/*

Write a function named add() which takes two array of numbers as argument and returns a new
array with sum of given arrays elements.
NOTE: Be careful about the array sizes as they could be different.
Examples:
add([3, 0, 0, 7, 5, 10], [6, 3, 2]) -> [9, 3, 2, 7, 5, 10]
add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34]) -> [16, 11, 9, 3, 2, 7, 5, 10, 34]
add([-5, 6, -3, 11], [5, -6, 3, -11]) -> [0, 0, 0, 0]

*/

function add(arr1, arr2) {
  
    let maxLength = Math.max(arr1.length, arr2.length);
    
 
    let result = [];
    
  
    for (let i = 0; i < maxLength; i++) {
        let sum = (arr1[i] || 0) + (arr2[i] || 0);
        result.push(sum);
    }
    
    return result;
}

console.log(add([3, 0, 0, 7, 5, 10], [6, 3, 2])); // Output: [9, 3, 2, 7, 5, 10]
console.log(add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34])); // Output: [16, 11, 9, 3, 2, 7, 5, 10, 34]
console.log(add([-5, 6, -3, 11], [5, -6, 3, -11])); // Output: [0, 0, 0, 0]

function add(arr1, arr2) {
    // Determine the length of the longer array
    let maxLength = Math.max(arr1.length, arr2.length);
    
    // Initialize the result array
    let result = [];
    
    // Iterate through the arrays and sum the corresponding elements
    for (let i = 0; i < maxLength; i++) {
        let sum = (arr1[i] || 0) + (arr2[i] || 0);
        result.push(sum);
    }
    
    return result;
}

/*

Write a function named noA() which takes an array of strings as argument and will return a
new array with all elements starting with "A" or "a" replaced with "###".
Examples:
noA(["javascript", "hello", "123", "xyz"]) -> ["javascript", "hello", "123", "xyz"]
noA(["apple", "123", "ABC", "javascript"]) -> ["###", "123", "###", "javascript"]
noA(["apple", "abc", "ABC", "Alex", "A"]) -> ["###", "###", "###", "###", "###"]

No Elements With A
*/


function noA(arr) {
    return arr.map(str => (str[0].toLowerCase() === 'a' ? '###' : str));
}

// Examples
console.log(noA(["javascript", "hello", "123", "xyz"])); // ["javascript", "hello", "123", "xyz"]
console.log(noA(["apple", "123", "ABC", "javascript"])); // ["###", "123", "###", "javascript"]
console.log(noA(["apple", "abc", "ABC", "Alex", "A"])); // ["###", "###", "###", "###", "###"]


/*

Write a function named no3and5() which takes an array of integer numbers as argument and
will return a new array with elements replaced by conditions below.
If element can be divided by 5, replace it with 99
If element can be divided by 3, replace it with 100
If element can be divided by both 3 and 5, replace it with 101
Examples:
no3and5([7, 4, 11, 23, 17]) -> [7, 4, 11, 23, 17]
no3and5([3, 4, 5, 6]) -> [100, 4, 99, 100]
no3and5([10, 11, 12, 13, 14, 15]) -> [99, 11, 100, 13, 14, 101]


No Elements Divisible By 3 and 5
*/

function no3and5(arr) {
    return arr.map(num => {
        if (num % 3 === 0 && num % 5 === 0) {
            return 101;
        } else if (num % 5 === 0) {
            return 99;
        } else if (num % 3 === 0) {
            return 100;
        } else {
            return num;
        }
    });
}

console.log(no3and5([7, 4, 11, 23, 17])); // [7, 4, 11, 23, 17]
console.log(no3and5([3, 4, 5, 6])); // [100, 4, 99, 100]
console.log(no3and5([10, 11, 12, 13, 14, 15])); 


/*

Write a function named no13() which takes an array of numbers as argument and return a new
array with all 13s replaced with 0s.
Examples:
no13([1, 2, 3 ,4]) -> [1, 2, 3 ,4]
no13([13, 2, 3]) -> [0, 2, 3]
no13([13, 13, 13 , 13, 13]) -> [0, 0, 0, 0, 0]
no13([]) -> []

No Elements Equals 13

*/

function no13(arr) {
    return arr.map(num => (num === 13 ? 0 : num));
  }
  
  // Examples
  console.log(no13([1, 2, 3, 4]));    // [1, 2, 3, 4]
  console.log(no13([13, 2, 3]));    // [0, 2, 3]
  console.log(no13([13, 13, 13, 13, 13]));    // [0, 0, 0, 0, 0]
  console.log(no13([])); 


  

  /*

  Write a function named removeDuplicates() which takes an array argument and returns a new
array with all the duplicates removed.
Examples:
removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60]) -> [10, 20, 35, 60, 70]
removeDuplicates([1, 2, 5, 2, 3]) -> [1, 2, 5, 3]
removeDuplicates([0, -1, -2, -2, -1]) -> [0, -1, -2]
removeDuplicates(["abc", "xyz", "123", "ab", "abc", "ABC"]) -> ["abc", "xyz", "123", "ab", "ABC"]
removeDuplicates(["1", "2", "3", "2", "3"]) -> ["1", "2", "3"]

Remove Duplicates

*/


function removeDuplicates(arr) {
    return [...new Set(arr)];
}

// Examples
console.log(removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60])); // [10, 20, 35, 60, 70]
console.log(removeDuplicates([1, 2, 5, 2, 3])); // [1, 2, 5, 3]
console.log(removeDuplicates([0, -1, -2, -2, -1])); // [0, -1, -2]
console.log(removeDuplicates(["abc", "xyz", "123", "ab", "abc", "ABC"])); // ["abc", "xyz", "123", "ab", "ABC"]
console.log(removeDuplicates(["1", "2", "3", "2", "3"])); // ["1", "2", "3"]



/*

Write a function named noDigit() which takes a string argument and returns a new string with
all digits removed from the original string.
Examples:
noDigit("") -> ""
noDigit("Javascript") -> "Javascript"
noDigit("123Hello") -> "Hello"
noDigit("123Hello World149") -> "Hello World”
noDigit("123Tech456Global149") -> "TechGlobal"

No Digits
*/

function noDigit(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (!('0' <= str[i] && str[i] <= '9')) {
            result += str[i];
        }
    }
    return result;
}

// Examples
console.log(noDigit("")); // ""
console.log(noDigit("Javascript")); // "Javascript"
console.log(noDigit("123Hello")); // "Hello"
console.log(noDigit("123Hello World149")); // "Hello World"
console.log(noDigit("123Tech456Global149"));



/*

Write a function named noVowel() which takes a string argument and returns a new string
with all vowels removed from the original string.
Examples:
noVowel("TechGlobal") -> "TchGlbl"
noVowel("AEOxyz") -> "xyz"
noVowel("Javascript") -> "Jvscrpt"
noVowel("") -> ""
noVowel("125$") -> "125$"

No Vowel

*/

function noVowel(str) {
    let result = '';
    const vowels = 'aeiouAEIOU';
    for (let i = 0; i < str.length; i++) {
        if (!vowels.includes(str[i])) {
            result += str[i];
        }
    }
    return result;
}

// Examples
console.log(noVowel("TechGlobal")); // "TchGlbl"
console.log(noVowel("AEOxyz")); // "xyz"
console.log(noVowel("Javascript")); // "Jvscrpt"
console.log(noVowel("")); // ""
console.log(noVowel("125$"));


/*

Write a function named sumOfDigits() which takes a string argument and returns sum of all
digits from the original string.
Examples:
sumOfDigits("Javascript") -> 0
sumOfDigits("John’s age is 29") -> 11
sumOfDigits("$125.0") -> 8
sumOfDigits("") -> 0


Sum Of Digits
*/

function sumOfDigits(str) {
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
        if ('0' <= str[i] && str[i] <= '9') {
            sum += parseInt(str[i], 10);
        }
    }
    return sum;
}

// Examples
console.log(sumOfDigits("Javascript")); // 0
console.log(sumOfDigits("John’s age is 29")); // 11
console.log(sumOfDigits("$125.0")); // 8
console.log(sumOfDigits(""));


/*

Write a function named arrFactorial() which takes an array of numbers as argument and return
the array with every number replaced with their factorials.
Examples:
arrFactorial([1, 2, 3 ,4]) -> [1, 2, 6, 24]
arrFactorial([0, 5]) -> [1,120]
arrFactorial([5 , 0, 6]) -> [120, 1, 720]
arrFactorial([]) -> []


Array Factorial
*/

function arrFactorial(arr) {
    // Helper function to calculate factorial
    function factorial(n) {
        if (n === 0 || n === 1) {
            return 1;
        }
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }

    // Replace each number in the array with its factorial
    for (let i = 0; i < arr.length; i++) {
        arr[i] = factorial(arr[i]);
    }

    return arr;
}

function findMaxFactor