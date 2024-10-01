/*
Write a function named hasUpperCase() which takes a string argument and 
return true if there is an uppercase letter and false otherwise.
Examples:
hasUpperCase("javascript")  -> false
hasUpperCase("John")  -> true
hasUpperCase("$125.0")  -> false
hasUpperCase("") 
*/
console.log('\n---------------TASK1---------------\n');


function hasUpperCase(string){

    for(let i = 0; i < string.length; i++){
        if(string[i] >= 'A' && string[i] <= 'Z'){
            return true;
        }
    } return false;
}

console.log(hasUpperCase("javascript")); 
console.log(hasUpperCase("John"));     
console.log(hasUpperCase("$125.0"));     
console.log(hasUpperCase(""));  


/*
Write a function named noDigit() which takes a string argument and returns a 
new string with all digits removed from the original string .
Examples:
noDigit("")  -> ""
noDigit("Javascript")  -> "Javascript"
noDigit("123Hello")  -> "Hello"
noDigit("123Hello World149")  -> "Hello World”
noDigit("123Tech456Global149") 

*/

console.log('\n---------------TASK2---------------\n');

function noDigit(string){
    let result = '';

    for(let i = 0; i < string.length; i++){
        if(!(string[i] >= '0' && string[i] <= '9')){
            result += string[i];
        }
    } return result
}
console.log(noDigit(""));           
console.log(noDigit("Javascript"));        
console.log(noDigit("123Hello"));       
console.log(noDigit("123Hello World149")); 
console.log(noDigit("123Tech456Global149"));

/*

Write a function named noVowel() which takes a string argument and returns a 
new string with all vowels removed from the original string .
Examples:
noVowel("TechGlobal")  -> "TchGlbl"
noVowel("AEOxyz")  -> "xyz"
noVowel("Javascript")  -> "Jvscrpt"
noVowel("")  -> ""
noVowel("125$") 

*/
console.log('\n---------------TASK3---------------\n');

function noVowel(str) {
    let result = '';
    const vowels = 'AEOUIaeiou';
    for(let i = 0; i < str.length; i++){
        if(!vowels.includes(str[i])){
            result += str[i];
        }
    }
    return result;
}

console.log(noVowel("TechGlobal"));  // "TchGlbl"
console.log(noVowel("AEOxyz"));      // "xyz"
console.log(noVowel("Javascript"));  // "Jvscrpt"
console.log(noVowel(""));            // ""
console.log(noVowel("125$"));

/*
Write a function named no13() which takes an array of numbers as argument 
and return a new array with all 13s replaced with 0s.  
Examples:
no13([1, 2, 3 ,4])  -> [1, 2, 3 ,4] 
no13([13, 2, 3])  -> [0, 2, 3]
no13([13, 13, 13 , 13, 13])  -> [0, 0, 0, 0, 0]
no13([]) 

*/
console.log('\n---------------TASK4---------------\n');

function no13(arr){

    let result = [];
    
    for(let i = 0; i < arr.length; i++)
        if(arr[i] === 13) {
            result.push(0)
        } else {
            result.push(arr[i]);
        }return result;
}

console.log(no13([1, 2, 3, 4]));           // [1, 2, 3, 4]
console.log(no13([13, 2, 3]));             // [0, 2, 3]
console.log(no13([13, 13, 13, 13, 13]));   // [0, 0, 0, 0, 0]
console.log(no13([]));  

/*
Write a function named middleInt() which takes three number arguments and 
return the middle number.  
Examples:
middleInt(1, 2, 2)  -> 2
middleInt(5, 5, 8)  -> 5
middleInt(5, 3, 5)  -> 5
middleInt(1, 1, 1)  -> 1
middleInt(-1, 25, 10) 
*/

function middleInt(X, Y, Z){}


/*
Write a function named sumOfDigits() which takes a string argument and 
returns sum of all digits from the original string.  
Examples:
sumOfDigits("Javascript")  -> 0
sumOfDigits("John’s age is 29")  -> 11
sumOfDigits("$125.0")  -> 8
sumOfDigits("")
*/
console.log('\n---------------TASK6---------------\n');


function sumOfDigits(str){

    let result = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i] >= '0' && str[i] <= '9'){
            result +=parseInt(str[i]);
        }
    }return result;
}

console.log(sumOfDigits("Javascript"));         // 0
console.log(sumOfDigits("John’s age is 29"));   // 11
console.log(sumOfDigits("$125.0"));             // 8
console.log(sumOfDigits(""));      

/*
Write a function named arrFactorial() which takes an array of numbers as 
argument and return the array with every number replaced with their factorials.
Examples:
arrFactorial([1, 2, 3 ,4])  ->  [1, 2, 6, 24]
arrFactorial([0, 5])  -> [1,120]
arrFactorial([5 , 0, 6])  -> [120, 1, 720]
arrFactorial([]) 
*/
console.log('\n---------------TASK7---------------\n');

function arrFactorial(arr) {
    return arr.map(num => {
        let factorial = 1;
        for(let i = 1; i <= num; i++) {
            factorial *= i;
        } return factorial;
    
    })
}

console.log(arrFactorial([1, 2, 3, 4]));  // [1, 2, 6, 24]
console.log(arrFactorial([0, 5]));        // [1, 120]
console.log(arrFactorial([5, 0, 6]));     // [120, 1, 720]
console.log(arrFactorial([]));

/*

Write a function named categorizeCharacters() which takes a string word as 
argument and return an array as letters at index of 0, digits at index of 1 and 
specials at index of 2. 
Examples:
categorizeCharacters("1234")  -> [ '' , '1234', '' ] 
categorizeCharacters("abc123$#%")  -> [ 'abc', '123', '$#%' ]
categorizeCharacters("12ab$%3c%")

*/

function categorizeCharacters(word){

let letters = '';
let digits = '';
let specials = '';
 
for (let i = 0; i < word.length; i++){
    if((word[i] >= 'a' && word[i] <= 'z') || (word[i] >= 'A' && word[i] <= 'Z')) {
        letters += word[i];
    } else if (word[i] >= '0' && word[i] <= '9'){
    digits += word[i];
} else {
    specials += word[i];
}
} return [letters, digits, specials]; }


console.log(categorizeCharacters("1234"));         // [ '', '1234', '' ]
console.log(categorizeCharacters("abc123$#%"));    // [ 'abc', '123', '$#%' ]
console.log(categorizeCharacters("12ab$%3c%"));