


// Generate an even number bt 1 and 10
// Calculate how many attempts it takes to generate it
const { getRandomNumber } = require('../utils/MathHelper.js');


att = 0 
let ranNum;

while(ranNum % 2 ===0) {
    ranNum = getRandomNumber(1, 10);
    att++;
}

console.log(`we got an odd number after ${att} times!`);