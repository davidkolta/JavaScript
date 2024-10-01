const { getRandomNumber } = require('../utils/MathHelper.js');

let number = getRandomNumber (1, 4);

console.log('Random number is=', number);


if(number === 1) {

console.log('ONE');

}

else if(number === 2 ) {

    console.log('TWO');
}

else if (number === 3) {

    console.log('t=THREE')
}

else if(number === 4) {

    console.log('four')
}

else {
    throw error ('the method created a number not un range');
}