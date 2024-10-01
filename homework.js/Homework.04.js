const { getRandomNumber } = require('../utils/MathHelper.js');



/*
Write a program that outputs all the numbers that are 
divisible by 7 starting from 1 to 100 (both inclusive).
Expected Output:
7 
14
21
.
.
.
.
91
98

*/

console.log('\n---------------TASK01---------------\n');

for (let i = 1; i <= 100; i++){

    if(i % 7 === 0)

    console.log(i);
}

console.log('\n---------------while loop---------------\n');

let num = 7

while(num <= 100) {
    console.log(num);
    num +=7;
}


/*

Write a program that outputs all the numbers that are 
divisible by both 2 and 3 starting from 1 to 50 (both 
inclusive).
Expected Output:
6
12
18 
.
.
36
42
48

*/
console.log('\n---------------TASK02---------------\n');


for(let i = 1; i <= 50; i++) {

    if(i % 2 === 0 && i % 3 === 0)
    
        console.log(i);
}

console.log('\n---------------while loop---------------\n');

let num1 = 1

while(num1 <= 50 ){
    if(num1 % 2 === 0 && num1 % 3 ===0)
        console.log(num1);
    num1++;
}

/*

Write a program that outputs all the numbers that are 
divisible by 5 starting from 100 to 50 (both inclusive).
Expected Output:
100
95
90
85
.
.
.
60
55
50
*/
console.log('\n---------------TASK3---------------\n');

for(let i = 100; i >= 50; i--){

    if(i % 5 ===0) console.log(i);
}


console.log('\n---------------while loop---------------\n');

let number = 100;

while(number >= 50){
    console.log(number);
    number -=5; 

}

/*

Write a program that outputs the squares of all numbers 
starting from 0 to 7 (both inclusive).
NOTE: Use loop!!!
Expected Output:
The square of 0 is =  0
The square of 1 is =  1
The square of 2 is =  4
The square of 3 is =  9
The square of 4 is =  16
The square of 5 is =  25
The square of 6 is =  36
The square of 7 is =  49
*/
console.log('\n---------------TASK4---------------\n');


for(let i = 0; i <= 7; i++) {

    console.log(`The Squar of ${i} is = `, i * i);
}

console.log('\n---------------while loop---------------\n');


let numbers = 0

while(numbers <= 7) {
    console.log(`the square of ${numbers} is = `, numbers * numbers);
    numbers++;
}

/*

Write a program that finds sum of the numbers starting 
from 1 to 10 (both inclusive).
Calculation => 1+2+3+4+5+6+7+8+9+10
NOTE: Use loop!!!
Expected Output:
55

*/

console.log('\n---------------TASK5---------------\n');


let sum = 0
for (let i = 1; i <= 10; i++) {

   sum += i;
}

console.log(sum);

console.log('\n---------------while loop---------------\n');

let sum1 = 0
let numbs = 1

while (numbs <= 10){

    sum1 += numbs;
    numbs++;
}

console.log(sum1);


/*

Write a program generates a random number between 
1 and 10 (both inclusive).
And find the factorial of the number.
Mathematically, the factorial of a non-negative integer n 
is defined as:
n! = n × (n-1) × (n-2) × ... × 2 × 1
For example:
5! = 5 × 4 × 3 × 2 × 1 = 120
4! = 4 × 3 × 2 × 1 = 24
0! (by convention) is defined as 1

*/
console.log('\n---------------TASK6---------------\n');



 console.log(getRandomNumber(1,10));


let factorial = 1;

for (let i = 1; i <= getRandomNumber; i++) {
    factorial *= i;
}
console.log("factorial", factorial);



let fact = 1;
let i = 1;

console.log(getRandomNumber(1,10));


while (i <= getRandomNumber) {
    fact*= i;
    i++;
}

console.log(fact);





/*

Write a program generates a random number between 
1 and 100 (both inclusive).
Keep generating a new number till you get a number 
that is divisible by 5.
The program should also count how many attempts it 
takes to generate such a number.
Eventually, print the random number divisible by 5 with 
the number of attempts as below

*/

console.log('\n---------------TASK7---------------\n');


const { getRandomNumber } = require('../utils/MathHelper.js');
let att = 0;
let ran; 
do{
  ran = getRandomNumber(1, 100);

    att++;
} while (ran % 5 !== 0);

console.log(` The random number is ${ran} and it took ${att} attempt/s to generate it. `);


/*

-Create an array that stores countries below.
Germany, Argentina, Ukraine, Romania
THEN:
-Output the entire array
-Ouput the entire array sorted lexicographically
Expected Result:
['Germany', 'Argentina', 'Ukraine', 'Romania' ]
[ 'Argentina', 'Germany', 'Romania', 'Ukraine' 

**/

console.log('\n---------------TASK8---------------\n');


const contries = ['Germany', 'Argentina', 'Ukraine', 'Romania'];

console.log(contries);
console.log(contries.sort());


/*Create a String array that stores cartoon dogs below
Scooby Doo, Snoopy, Blue, Pluto, Dino, Sparky 
THEN:
-Output the entire array
-Then, check if the array has Pluto element
if it has Pluto, then output true
if it does not have Pluto, output false
Expected Result:
[ 'Scooby Doo', 'Snoopy', 'Blue', 'Pluto', 'Dino', 'Sparky' ]
true

*/



console.log('\n---------------TASK9---------------\n');

const cartoonDogs = ['Scooby Doo', 'Snoopy', 'Blue', 'Pluto', 'Dino', 'Sparky'];

console.log(cartoonDogs);

const includesPluto = cartoonDogs.includes('Pluto');

console.log(includesPluto);


/*Create an array that stores cartoon cats below.
Garfield, Tom, Sylvester, Azrael
THEN:
-Output the entire array sorted lexicographically
-Then, check if the array has both Garfield and Felix
if it has both, then output true
if it does not have both, output false
Expected Result:
[ 'Azrael', 'Garfield', 'Sylvester', 'Tom' ]
false

*/
console.log('\n---------------TASK10---------------\n');

const cartoonCats = ['Garfield', 'Tom', 'Sylvester', 'Azrael'];

console.log(cartoonCats.sort());

const includesGarfieldFelix = cartoonCats.includes('Garfield') && cartoonCats.includes('Felix');

console.log(includesGarfieldFelix);


/*

Create an array that stores numbers below
10.5, 20.75, 70, 80, 15.75
THEN:
-Output the entire array
-Ouput each element
Expected Result:
[ 10.5, 20.75, 70, 80, 15.75 ]
10.5
20.75
70
80
15.75
*/

console.log('\n---------------TASK11---------------\n');


const numbers1 = [10.5, 20.75, 70, 80, 15.75]

console.log(numbers1);

// Output each element individually using a for loop
for (let i = 0; i < numbers1.length; i++) {
    console.log(numbers1[i]);
  }

for(const number of numbers1) {

    console.log(number);
}



/*
Create an array that stores objects below.
Pen, notebook, Book, paper, bag, pencil, Ruler
THEN:
-Output the entire array.
-Output how many elements starts with 'B' or 'P', 
ignoring cases.
-Output how many elements has 'book' or 'pen' partial 
strings, ignoring cases.
Expected Result:
['Pen', 'notebook', 'Book', 'paper', 'bag', 'pencil', 'Ruler' ]
Elements starting with 'B' or 'P' = 5
Elements having 'book' or 'pen' = 4

*/
console.log('\n---------------TASK12---------------\n');

const objects = ['Pen', 'notebook', 'Book', 'paper', 'bag', 'pencil', 'Ruler'];

console.log(objects);

let element1 = 0;
let element2 = 0;

for(const item of objects) {

    if(item.toUpperCase().startsWith('B') || item.toUpperCase().startsWith('P')){
        element1++;
    }
    if (item.toLowerCase().includes('book') || item.toLowerCase().includes('pen')) {
        element2++;
    }
}
    console.log(`Elements starting with 'B or 'P' = ${element1}`);
    console.log(`Elements having 'book' or 'pen' = ${element2}`);


/*

-Create an array that stores numbers below.
3, 5, 7, 10, 0, 20, 17, 10, 23, 56, 78
THEN:
-Output the entire array
-Output how many elements are more than 10
-Output how many elements are less than 10
-Output how many elements are 10
Expected Result:
[ 3, 5, 7, 10, 0, 20, 17, 10, 23, 56, 78 ]
Elements that are more than 10 = 5
Elements that are less than 10 = 4
Elements that are 10 = 2

*/
console.log('\n---------------TASK13---------------\n');

const Arrays = [3, 5, 7, 10, 0, 20, 17, 10, 23, 56, 78];

console.log(Arrays);

let elementsmorethanten = 0;
let elementslessthanten = 0;
let elementsequalten = 0;

for (const array of Arrays) {

    if(array > 10) {
        elementsmorethanten++;
    } else if(array < 10) {
        elementslessthanten++;
    } else {
        elementsequalten++;
    }
}

console.log(`Elements that are more than 10 = ${elementsmorethanten}`);
console.log(`Elements that are less than 10 = ${elementslessthanten}`);
console.log(`Elements that are 10 = ${elementsequalten}`);



/*

Create 2 arrays that stores numbers below.
First array->  [ 5, 8, 13, 1, 2 ]
Second array ->  [ 9, 3, 67, 1, 0 ]
THEN:
-Output both arrays
–Then, create a new array that will take the greatest 
value of same index from first 2 arrays and output the 
third array as well.
Expected Result:
1st array is =  [ 5, 8, 13, 1, 2 ]
2nd array is = [ 9, 3, 67, 1, 0 ]
3rd array is =  [ 9, 8, 67, 1, 2 

*/

console.log('\n---------------TASK14---------------\n');


const firstArray =  [ 5, 8, 13, 1, 2 ];
const secondArray = [ 9, 3, 67, 1, 0 ];


const thirdArray = [];

for(let i = 0; i< firstArray.length; i++) {

    thirdArray.push(Math.max(firstArray[i] , secondArray[i]));

}

console.log(firstArray);
console.log(secondArray);
console.log(thirdArray);


/*

Write a function named as firstDuplicate() which takes an 
array argument and returns the first duplicated number in the 
array when invoked.
NOTE: Make your code dynamic that works for any array and 
return -1 if there are no duplicates in the array. For two 
elements to be considered as duplicated, value and data types 
of the elements must be same.
Examples:
firstDuplicate([ 3, 7, 10, 0, 3, 10 ]) -> 3
firstDuplicate([ 5, 7, 7, 0, 5, 10 ]) -> 5
firstDuplicate([ 5, '5', 3, 7, 4 ]) -> -1
firstDuplicate([ 123, 'abc', '123', 3, 'abc' ]) -> 'abc'
firstDuplicate([ 1, 2, 3]) -> -1
firstDuplicate([ 'foo', 'abc', '123', 'bar’ ])  -> -1

*/

console.log('\n---------------TASK15---------------\n');


function firstDuplicate(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] === arr[j]) return arr[i];
        }
    }
    return -1;
}

console.log(firstDuplicate([ 3, 7, 10, 0, 3, 10 ]))
console.log(firstDuplicate([ 5, 7, 7, 0, 5, 10 ]))
console.log(firstDuplicate([ 5, '5', 3, 7, 4 ]))
console.log(firstDuplicate([ 123, 'abc', '123', 3, 'abc' ]))
console.log(firstDuplicate([ 1, 2, 3]))
console.log(firstDuplicate([ 'foo', 'abc', '123', 'bar' ]))


  /*

  Write a function named as getDuplicates() which takes an 
array argument and returns all the duplicated elements in the 
array when invoked.
NOTE: Make your code dynamic that works for any array and 
return empty array if there are no duplicates in the array. For 
two elements to be considered as duplicated, value and data 
types of the elements must be same.
Examples:
getDuplicates([ 0, -4, -7, 0, 5, 10, 45, -7, 0 ]) -
> [ 0, -7 ]
getDuplicates([ 1, 2, 5, 0, 7 ]) -> [ ]
getDuplicates(['A', 'foo', '12’ , 12, 'bar', 'a', 'a', 'foo' ]) -
> [ 'foo', 'a’ ]
getDuplicates([ 'foo', '12' , 12, 'bar', 'a' ]) -
> [ ]

*/

console.log('\n---------------TASK16--------------\n');

function getDuplicates(arr){
    let container = [];
    let allDuplicates = [];

    for(let obj of arr){
        if(container.includes(obj) && !allDuplicates.includes(obj)) allDuplicates.push(obj)
        else container.push(obj)
    }
    return allDuplicates;
}


console.log(getDuplicates([ 0, -4, -7, 0, 5, 10, 45, -7, 0 ]))
console.log(getDuplicates([ 1, 2, 5, 0, 7 ]))
console.log(getDuplicates(['A', 'foo', '12' , 12, 'bar', 'a', 'a', 'foo' ]))
console.log(getDuplicates([ 'foo', '12' , 12, 'bar', 'a' ]))