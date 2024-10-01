/*

Convert given Strings below to number data types and 
find their sum, product, division, subtraction, remainder 
and exponentiation.
let str1 = "5", str2 = "2";
Expected results:
The sum of 5 and 2 is = 7
The product of 5 and 2 is = 10
The division of 5 and 2 is = 2.5
The subtraction of  5 and 2 is = 3
The remainder of 5 and 2 is = 1
The exponentiation of 5 and 2 is = 25

*/

console.log('\n---------------TASK01---------------\n');

str1 = "5", str2 = "2";

console.log(`The sum of ${str1} and ${str2} is = ${Number(str1) + Number(str2)}`)
console.log(`The the product of ${str1} and ${str2} is = ${Number(str1) * Number(str2)}`)
console.log(`The devision of ${str1} and ${str2} is = ${Number(str1) / Number(str2)}`)
console.log(`The subtraction of ${str1} and ${str2} is = ${Number(str1) - Number(str2)}`)
console.log(`The remainder of ${str1} and ${str2} is= ${Number(str1) % Number(str2)}`)
console.log(`The exponentiation of ${str1} and ${str2} is = ${Number(str1) ** Number(str2)}`)



/*

Convert given Strings below to number data 
types and find the greatest and smallest values 
and find the average and absolute difference of 
them.
let s1 = "200", s2 = "-50";
Expected results:
The greatest value is = 200
The smallest value is = -50
The average is = 75
The absolute difference is = 250

*/


console.log('\n---------------TASK02---------------\n');

let s1 = "200", s2 = "-50";

console.log(`The grteatest value is = ${Math.max(s1, s2)}`);
console.log(`The smallest value is = ${Math.min(s1, s2)}`);
console.log(`The average is = ${(Number(s1) + Number(s2)) / 2}`);
console.log(`The absolute difference is = ${Math.abs(s1 - s2)}`);

console.log("\n------------Task-2------------\n");
let s4 = "200", s3 = "-50";
let n1 = Number(s4), n2 = Number(s3);

console.log(`The greatest value is = ${Math.max(num1, num2)}`)
console.log(`The smallest value is = ${Math.min(num1, num2)}`)
console.log(`The average is = ${(num1 + num2) / 2}`)
console.log(`The absolute difference is = ${Math.abs(num1 - num2)}`)



/*

Write a program that generates 2 random numbers 
between 1 and 50 (both 1 and 50 are included). Then, 
find the absolute difference of these numbers.
 
Test Data:
5, 27
Expected Output:
The absolute difference between numbers is = 22

*/



//  Math.floor(Math.random() * range) + startpoint 

/*

Write a program that generates 2 random numbers 
between 1 and 50 (both 1 and 50 are included). Then, 
find the absolute difference of these numbers.
 
Test Data:
5, 27
Expected Output:
The absolute difference between numbers is = 22

*/


console.log('\n---------------TASK03---------------\n');


let rand1 = Math.floor(Math.random() * 51) + 1
let rand2 = Math.floor(Math.random() * 51) + 1

console.log(rand1)
console.log(rand2)

console.log(`The absolute difference between numbers = ${Math.abs(rand1 - rand2)}`);

/*

Write a program that generates 5 random numbers 
between 1 and 50 (both 1 and 50 are included). Then, 
find the max and min of these numbers.
 
Test Data:
3, 15, 45, 20, 25
Expected Output:
The max value = 45
The min value = 3
Math.floor(Math.random() * range) + startpoint
*/


console.log('\n---------------TASK04---------------\n');

let rand1 = Math.floor(Math.random() * 51) + 1
let rand2 = Math.floor(Math.random() * 51) + 1
let rand3 = Math.floor(Math.random() * 51) + 1
let rand4 = Math.floor(Math.random() * 51) + 1
let rand5 = Math.floor(Math.random() * 51) + 1

console.log(rand1);
console.log(rand2);
console.log(rand3);
console.log(rand4);
console.log(rand5);


console.log(`The max value = ${Math.max(rand1, rand2, rand3, rand4, rand5)}`);
console.log(`The min value = ${Math.min(rand1, rand2, rand3, rand4, rand5)}`);


/*

Write a program that generates 3 random numbers 
between 50 and 100 both included. 
First print the numbers
Then, find the sum of these numbers
 
Test Data:
55, 67, 90
Expected Output:
The number 1 = 55
The number 2 = 67
The number 3 = 90
The sum of numbers is = 212
Math.floor(Math.random() * range) + startpoint
*/

console.log('\n---------------TASK05---------------\n');

let rand1 = Math.floor(Math.random() * 51) + 50
let rand2 = Math.floor(Math.random() * 51) + 50
let rand3 = Math.floor(Math.random() * 51) + 50

console.log("the number 1 = " + rand1)
console.log("the number 2 = " + rand2)
console.log("the number 3 = " + rand3)

console.log(`The sum of numbers is = ${(rand1 + rand2 + rand3)}`);


/*

Write a program that generates 3 random numbers 
between 1 and 100 (1 and 100 are included) and find if 
all the numbers are more than 25.
Print true if all numbers are greater than 25.
Print false if any of the number is less than or equals 
25
Math.floor(Math.random() * range) + startpoint
*/
console.log('\n---------------TASK6--------------\n');

let rand1 = Math.floor(Math.random() * 101) + 25
let rand2 = Math.floor(Math.random() * 101) + 25
let rand3 = Math.floor(Math.random() * 101) + 25

console.log(rand1)
console.log(rand2)
console.log(rand3)
console.log(true || Math.random > 25 || false || Math.random <= 25);

console.log("\n------------Task-6------------\n");

let randomNum1 = Math.ceil(Math.random() * 100);
let randomNum2 = Math.ceil(Math.random() * 100);
let randomNum3 = Math.ceil(Math.random() * 100);

console.log(randomNum1)
console.log(randomNum1)
console.log(randomNum1)

console.log(randomNum1 > 25 && randomNum2 > 25 && randomNum3 > 25);




/*

Assume you are given a name let name = "David"; 
1. Print out the length of the name
2. Find the first character in the name and print it
3. Find the last character in the name and print it
4. Find the first 3 characters in the name and print 
them
5. Find the last 3 characters in the name and print 
them
Expected Output:
The length of the name is = 5
The first character in the name is = D
The last character in the name is = d
The first 3 characters in the name are = Dav
The last 3 characters in the name are = vid

*/

let name = "David";
 
console.log(`The length of the name is = ${name.length}`);
console.log(`The first character in the name is = ${(name.charAt(0))} `);
console.log(`The last character in the name is = ${(name.charAt(0))} `);
console.log(`The first 3 characters in the name are = ${name.slice(0, 3)}`);
console.log(`The last 3 characters in the name are = ${name.slice(2, 5)}`);










