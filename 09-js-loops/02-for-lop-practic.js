let sum = 0

for(let i = 10; i <= 15 ;  i++ ){

    sum += i;

   }

   console.log(sum);


   let product = 1


   for(let i = 1; i <= 6 ;  i++ ){

    product *= i

   }

   console.log(product);

   let str = 'techglobal school'
   let count0 = 0

   for(let i = 0; i < str.length; i++){
if (str[i] === 'o') count0++

   }

   console.log(count0);


   const { getRandomNumber } = require('../utils/MathHelper.js');

   let r2 = getRandomNumber(1, 10);

   console.log(getRandomNumber);
  
let product0 = 1

   for(let i = 1; i <= r2; i++){
    product0 *= i;
       }

       console.log(product0);




/*
Print all the numbers between 2 random numbers in the range of 1 to 10 (both inclusive) in ascending order

ran1 ran2
7, 5    -> 5 6 7
4, 8    -> 4 5 6 7 8
5, 5    -> 5
*/
const { getRandomNumber } = require('../utils/MathHelper.js');
let ran1 = getRandomNumber(1, 10);
let ran2 = getRandomNumber(1, 10);

console.log(`The random numbers are = ${ran1} and ${ran2}`);


for(let i = 1; i <= 10; i++){
   console.log(i);
       }
