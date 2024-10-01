/*
Write a function named fizzBuzz1() which takes a number argument and 
returns "Fizz" if the given number is divisible by 3, "Buzz" if the number is 
divisible by 5, and "FizzBuzz" if the number is divisible by both 3 and 5. 
Otherwise, it will return the number itself. 
Examples:
fizzBuzz1(0)  -> "FizzBuzz"
fizzBuzz1(1)  -> 1
fizzBuzz1(3)  -> "Fizz"
fizzBuzz1(5)  -> "Buzz"
fizzBuzz1(30)  -> "FizzBuzz"
fizzBuzz1(10)  -> "Buzz"
fizzBuzz1(15)  -> "FizzBuzz"
fizzBuzz1(-15) -> "FizzBuzz"

*/

function fizzBuzz1(number){

    if(number % 3 === 0 && number % 5 === 0) return "FizzBuzz";
    else if (number % 3 === 0) return "Fizz";
    else if( number % 5 === 0) return "Buzz";
    else return number;

}

console.log(fizzBuzz1(0));
console.log(fizzBuzz1(1));
console.log(fizzBuzz1(3));
console.log(fizzBuzz1(5));
console.log(fizzBuzz1(30));
console.log(fizzBuzz1(10));
console.log(fizzBuzz1(15));
console.log(fizzBuzz1(-15));

/*
Write a function named fizzBuzz2() which takes a number argument and 
returns and array consist of numbers starting from 1 to given number. However, 
it will return "Fizz" for the numbers divided by 3, "Buzz" for the numbers divided 
by 5, and "FizzBuzz" for the numbers divided both by 3 and 5.
Examples:
fizzBuzz2(3)  -> [ 1, 2, 'Fizz' ]
fizzBuzz2(5)  -> [ 1, 2, 'Fizz', 4, 'Buzz' ]
fizzBuzz2(10)  -> [ 1 , 2 , 'Fizz' , 4 , 'Buzz' , 'Fizz' , 7, 8 , 'Fizz' , 'Buzz' ] 
fizzBuzz2(15)  -> [ 1 , 2 , 'Fizz' , 4 , 'Buzz' , 'Fizz' , 7, 8 , 'Fizz' , 'Buzz', 11, 'Fizz'. 
13, 14,  'FizzBuzz' ] 
fizzBuzz2(2)
*/


function fizzBuzz2(number){

    let result = [];

    for(let i = 1; i <= number; i++){
        if(i % 3 === 0 && i % 5 === 0){
            result.push("FizzBuzz");
        } else if(i % 3 === 0){
            result.push("Fizz");
        } else if (i % 5 === 0){
            result.push("Buzz");
        } else {
            result.push(i);
        }
    } return result;
}

console.log(fizzBuzz2(3));  // [1, 2, "Fizz"]
console.log(fizzBuzz2(5));  // [1, 2, "Fizz", 4, "Buzz"]
console.log(fizzBuzz2(10)); // [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz"]
console.log(fizzBuzz2(15)); // [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]
console.log(fizzBuzz2(2));



/*

Write a function named findSumNumbers() which takes a string argument 
and returns sum of the all numbers appears in the string.
Examples:
findSumNumbers("abc$") -> 0
findSumNumbers("a1b4c  6#") -> 11
findSumNumbers("ab110c045d") -> 155
findSumNumbers("525") -> 525
findSumNumbers("3 for 10 dollars") -> 13

*/

function findSumNumbers(string) {

    let sum = 0;
    let currentNumber = '';

    for(let char of string) {
        if(char >= '0' && char <= '9'){
            currentNumber +=char;
        } else{
            if(currentNumber){
                sum += parseInt(currentNumber)
            }
        }
    }
}

console.log(findSumNumbers("abc$"));              // Output: 0
console.log(findSumNumbers("a1b4c  6#"));        // Output: 11
console.log(findSumNumbers("ab110c045d"));       // Output: 155
console.log(findSumNumbers("525"));               // Output: 525
console.log(findSumNumbers("3 for 10 dollars")); 

/*
Write a function named findBiggestNumber() which takes a string argument 
and returns the biggest number appears in the string.
Examples:
findBiggestNumber("abc$")  -> 0
findBiggestNumber("a1b4c  6#")  -> 6
findBiggestNumber("ab110c045d")  -> 110
findBiggestNumber("525")  -> 525
findBiggestNumber("3 for 10 dollars")
*/

function findBiggestNumber(string) {

    let maxNumber = 0;
    let currentNumber = '';

    for(let char of string){
        if(char >= '0' && char <= '9'){
            currentNumber += char;
        } else {
        
        }
    }

}

/*

Write a function named countOccurrencesOfCharacters() which takes a 
string argument and returns the count of repeated characters in the String. 
NOTE: If given String is empty, then return empty String. 
NOTE: It is case sensitive.
Examples:
countOccurrencesOfCharacters("")  -> ""
countOccurrencesOfCharacters("abc")  -> "1a1b1c"
countOccurrencesOfCharacters("abbcca")  -> "1a2b2c1a"
countOccurrencesOfCharacters("aaAAa")  -> "2a2A1a”
countOccurrencesOfCharacters("www" ) -> "3w"

*/
console.log('\n---------------TASK5---------------\n');

function countOccurrencesOfCharacters(string) {

    if(string.length === 0) return "";

    let result = "";
    let count = 1;
    

    for(let i = 0; i < string.length; i++){
        if(i< string.length -1 && string[i] === string[i+1]){
            count++;
        } else {
            result += count+ string[i];
            count = 1;
        }
    }
return result;
}

console.log(countOccurrencesOfCharacters(""));           // Output: ""
console.log(countOccurrencesOfCharacters("abc"));        // Output: "1a1b1c"
console.log(countOccurrencesOfCharacters("abbcca"));     // Output: "1a2b2c1a"
console.log(countOccurrencesOfCharacters("aaAAa"));      // Output: "2a2A1a"
console.log(countOccurrencesOfCharacters("www")); 


/*

Write a function named fibonacciSeries1() which takes a number n argument 
and returns the n series of Fibonacci numbers as an array.  
REMEMBER: Fibonacci series = 0, 1, 1, 2, 3, 5, 8, 13, 21
Examples:
fibonacciSeries1(3)  -> [0, 1, 1]
fibonacciSeries1(5)  -> [0, 1, 1, 2, 3]
fibonacciSeries1(7)  -> [0, 1, 1, 2, 3, 5, 8]
fibonacciSeries1(8)  -> [0, 1, 1, 2, 3, 5, 8, 13]
fibonacciSeries1(1)  -> [0]
fibonacciSeries1(2)  -> [0, 1]

*/

console.log('\n---------------TASK6---------------\n');


function fibonacciSeries1(number) {

    if(number <= 0) return [];
    if(number === 1) return [0];

    const fibSeries = [0, 1];

    for(let i = 2; i < number; i++){
        fibSeries.push(fibSeries[i - 1] + fibSeries[i- 2]);
    }
return fibSeries;
}

console.log(fibonacciSeries1(3));  // [0, 1, 1]
console.log(fibonacciSeries1(5));  // [0, 1, 1, 2, 3]
console.log(fibonacciSeries1(7));  // [0, 1, 1, 2, 3, 5, 8]
console.log(fibonacciSeries1(8));  // [0, 1, 1, 2, 3, 5, 8, 13]
console.log(fibonacciSeries1(1));  // [0]
console.log(fibonacciSeries1(2)); 


/*
Write a function named fibonacciSeries2() which takes a number n argument 
and returns the nth series of Fibonacci number as a number.
REMEMBER: Fibonacci series = 0, 1, 1, 2, 3, 5, 8, 13, 21
Examples:
fibonacciSeries2(2)  -> 1
fibonacciSeries2(4)  -> 2
fibonacciSeries2(8)  -> 13
fibonacciSeries2(9)  -> 21
fibonacciSeries2(1)  -> 0
*/

console.log('\n---------------TASK7---------------\n');


function fibonacciSeries2(number) {

    if(number <= 0) return 0;
    if(number === 1) return 0;
    if(number === 2) return 1;

    let temp;
    let a = 0;
    let b = 1;
    for(let i = 3; i<= number; i++){
        temp = a + b;
        a = b;
        b = temp;
    } return b;

    
}

console.log(fibonacciSeries2(2));  // 1
console.log(fibonacciSeries2(4));  // 2
console.log(fibonacciSeries2(8));  // 13
console.log(fibonacciSeries2(9));  // 21
console.log(fibonacciSeries2(1)); 

/*

Write a function named findUniques() which takes two array of number 
arguments and returns the array which has only the unique values from both 
given arrays.
NOTE: If both arrays are empty, then return an empty array. 
NOTE: If one of the array is empty, then return unique values from the other 
array.
Examples:
findUniques([], [])  -> []
findUniques([], [1, 2, 3, 2])  -> [1, 2, 3]
findUniques([1, 2, 3, 4], [3, 4, 5, 5])  -> [1, 2, 5]
findUniques([8, 9], [9, 8, 9])  -> []
findUniques([-1, -2], [1, 2])  -> [-1, -2, 1, 2]

*/