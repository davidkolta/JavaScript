const a1 = [10, 3, 7];
const a2 = [3, 5, 1];
const a3 = [0, 9, 4, 3];
// Put together all these elements from a1, a2 and a3 in a descending order
// in a new array -> [10, 9, 7, 5, 4, 3, 3, 3, 1, 0]

const newarr = a1.concat(a2, a3);

newarr.sort((a, b) => b -a);

console.log(newarr);


/*
Requirement:
-Create 2 arrays that stores numbers below.
First array->     [ 5, 8, 2, 1, 2 ]
Second array ->   [ 9, 3, 5, 1, 0 ]

THEN:
-Output both arrays
–Then, create a new array that will multiply the numbers of the same indexes from the first 2 arrays 
and output the third array as well.

Third array->       [ 45, 24, 10, 1, 0 ]
*/

const arr1 = [ 5, 8, 2, 1, 2 ];
const arr2 = [ 9, 3, 5, 1, 0 ];


const newArray = arr1.concat(arr2)

console.log(newArray);

