/* 
Write a function named hasLowerCase() which takes a string argument and 
returns true if there is a lowercase letter and false if it there isn’t. 
Examples:
hasLowerCase("")  -> false
hasLowerCase("JAVASCRIPT")  -> false
hasLowerCase("hello")  -> true
hasLowerCase("125$")  -> false
hasLowerCase("   a   ") 

*/

console.log('\n---------------TASK1---------------\n');


function hasLowerCase(str){
    for(let i = 0; i < str.length; i++)
        {if(str[i] >= 'a' && str[i] <= 'z') return true; }
            return false;}


console.log(hasLowerCase("")); // false
console.log(hasLowerCase("JAVASCRIPT")); // false
console.log(hasLowerCase("hello")); // true
console.log(hasLowerCase("125$")); // false
console.log(hasLowerCase("   a   "));

/*

Write a function named noZero() which takes an array of numbers as argument 
and returns the array back with all zeros removed.
Examples:
noZero([1])  -> [1]
noZero( [1, 1, 10] )  -> [1, 1, 10] 
noZero([0, 1, 10])  -> [1, 10]
noZero([0, 0, 0])  -> []
noZero([10, 100 0]) -> [10, 100]

*/

console.log('\n---------------TASK2---------------\n');

function noZero(array){
    let result = [];
    for(let i =0; i < array.length; i++){
        if(array[i] !== 0){
            result.push(array[i]);
        }
    } return result;
}

console.log(noZero([1])); // [1]
console.log(noZero([1, 1, 10])); // [1, 1, 10]
console.log(noZero([0, 1, 10])); // [1, 10]
console.log(noZero([0, 0, 0])); // []
console.log(noZero([10, 100, 0]));

/*
Write a function named numberAndSquare() which takes an array of numbers 
as argument and returns a multidimensional array with all numbers squared. 
Examples:
numberAndSquare([1, 2, 3])  -> [[1, 1], [2, 4], [3, 9]]
numberAndSquare([0, 3, -6])  -> [[0, 0], [3, 9], [-6, 36]]
numberAndSquare([1, 4])  -> [[1,1], [4, 16]]
numberAndSquare([0, 0, 0])  -> [[0, 0], [0, 0], [0, 0]]
numberAndSquare([0, 1, -10])  -> [[0, 0], [1, 1], [-10, 100]]
*/

console.log('\n---------------TASK3---------------\n');


function numberAndSquare(array){
    let result = [];
    for(let i = 0; i< array.length; i++){
        result.push([array[i], array[i] * array[i]]);
    }
return result;

}

console.log(numberAndSquare([1, 2, 3])); // [[1, 1], [2, 4], [3, 9]]
console.log(numberAndSquare([0, 3, -6])); // [[0, 0], [3, 9], [-6, 36]]
console.log(numberAndSquare([1, 4])); // [[1, 1], [4, 16]]
console.log(numberAndSquare([0, 0, 0])); // [[0, 0], [0, 0], [0, 0]]
console.log(numberAndSquare([0, 1, -10]));

/*

Write a function named containsValue() which takes a string array and a 
string as arguments and returns a boolean value. Search the string variable 
inside of the array and return true if it exists in the array. If it doesn’t exist, 
return false.  
NOTE: Assume that array size is at least 1. 
NOTE: The method is case-sensitive.
Examples:
containsValue(["abc", "foo", "javascript"], "hello")  -> false
containsValue(["abc", "def", "123"], "Abc")  -> false
containsValue(["abc", "def", "123", "Javascript", "Hello"], "123")  

*/
console.log('\n---------------TASK4---------------\n');

function containsValue(arr, str) {

    for(let i = 0; i < arr.length; i++){
        if(arr[i] == str)
            return true;
    }return false;
}

console.log(containsValue(["abc", "foo", "javascript"], "hello")); // false
console.log(containsValue(["abc", "def", "123"], "Abc")); // false
console.log(containsValue(["abc", "def", "123", "Javascript", "Hello"], "123")); // true


/*

Write a function named reverseSentence() which takes a string as argument 
and returns the words in reverse order.  If there is no enough words reverse, 
return "There is not enough words!".
Examples:
reverseSentence("Hello")  -> "There is not enough words!"
reverseSentence("Javascript is fun")  -> "Fun is javascript"
reverseSentence("This is a sentence")  -> "Sentence a is this"
*/


console.log('\n---------------TASK5---------------\n');

function reverseSentence(str){
let words = str.split(' ');
if(str.length < 2) return "there is not enough words!";

let reversedwords = words.reverse();
return reversedwords.join(' ');


}

console.log(reverseSentence("Hello")); // "There is not enough words!"
console.log(reverseSentence("Javascript is fun")); // "fun is Javascript"
console.log(reverseSentence("This is a sentence")); // "sentence a is This"

/*
Write a function named removeStringSpecialsDigits() which takes a string 
as argument and return a string without the special characters or digits.
Examples:
removeStringSpecialsDigits("123Javascript #$%is fun")  -> "Javascript is 
fun" 
removeStringSpecialsDigits("Cypress")  -> "Cypress"
removeStringSpecialsDigits("Automation123#$%") 

*/

console.log('\n---------------TASK6---------------\n');


function removeStringSpecialsDigits(str){
    let result = '';
    for(let i = 0; i < str.length; i++){
        let char = str[i];
        if((char >= 'A' && char <= 'Z') || (char >='a' && char <= 'z' )|| char === ' ' ){
            result += char;
        }
    } return result;
}

console.log(removeStringSpecialsDigits("123Javascript #$%is fun")); // "Javascript is fun"
console.log(removeStringSpecialsDigits("Cypress")); // "Cypress"
console.log(removeStringSpecialsDigits("Automation123#$%")); 

/*

Write a function named removeArraySpecialsDigits() which takes a string 
array as argument and return back without the special characters or digits.
Examples:
removeArraySpecialsDigits(["123Javascript", "#$%is", "fun"])  -> 
["Javascript", "is", "fun"]
removeArraySpecialsDigits(["Cypress", "123$%", "###"])  -> ["Cypress", "", 
""]
removeArraySpecialsDigits(["Automation", "123#$%tool"])  -> ["Automation", 
"tool"]

*/

console.log('\n---------------TASK7---------------\n');


function removeArraySpecialsDigits(arr) {
    return arr.map(str => {
        let result = '';
        for (let char of str) {
            if ((char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z')) {
                result += char;
            }
        }
        return result;
    });
}

console.log(removeArraySpecialsDigits(["123Javascript", "#$%is", "fun"])); // ["Javascript", "is", "fun"]
console.log(removeArraySpecialsDigits(["Cypress", "123$%", "###"])); // ["Cypress", "", ""]
console.log(removeArraySpecialsDigits(["Automation", "123#$%tool"]));

/*
Write a function named getCommons() which takes two string arrays as 
arguments and returns all the common words.
Examples:
getCommons( ["Javascript", "is", "fun"], ["abc", "xyz", "123"] ) 
-> []
getCommons( ["Javascript", "is", "fun"], ["Javascript", "C#", "Python"] ) -> 
["Javascript"]
getCommons( ["Javascript", "C#", "C#"], ["Python", "C#", "C++"] )  -> ["C#"]
*/

function getCommons(arr1, arr2){


}

console.log(getCommons(["Javascript", "is", "fun"], ["abc", "xyz", "123"])); // []
console.log(getCommons(["Javascript", "is", "fun"], ["Javascript", "C#", "Python"])); // ["Javascript"]
console.log(getCommons(["Javascript", "C#", "C#"], ["Python", "C#", "C++"])); 