const { getRandomNumber } = require('../utils/MathHelper.js');


/* generate a random number betwee 1-10 both includedand check if 7

*/



let r1 = Math.floor(Math.random() * 100) + 1;
let r2 = Math.floor(Math.random() * 100) + 1;
let r3 = Math.floor(Math.random() * 100) + 1;


console.log(r1);
console.log(r2);
console.log(r3);
let average = (r1 + r2 + r3) / 3
 

console.log()
if (average >= 50) {
    console.log(true);
}  

else {

    console.log(false);
}