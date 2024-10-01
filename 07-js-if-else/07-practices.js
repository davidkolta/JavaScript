const { getRandomNumber } = require('../utils/MathHelper.js');


let r1 = getRandomNumber(-10, 10);

console.log('Random number is=', r1);

if(r1 > 0) {

   
    console.log('the number is positive');
}


else if (r1 < 0) {

 console.log('nigative');
}

else {

    console.log('the number is zero');
}

//



const { getRandomNumber } = require('../utils/MathHelper.js');

let r2 = getRandomNumber(1, 12);

console.log('random month is =', r2);

if(r2 === 12 || r2 === 1 || r2 === 2)  console.log('winter');
if(r2 === 3 || r2 === 4 || r2 === 5)  console.log('Spring');
if(r2 === 6 || r2 === 7 || r2 === 8)  console.log('Summer');
if(r2 === 9 || r2 === 10 || r2 === 10)  console.log('Fall');





if(r2 === 12 || r2 === 1 || r2 === 2) {

    console.log('pring');
}


if(r2 === 3, 4, 5) {

    console.log('Spring');
}

if(r2 === 6, 7, 8) {

    console.log('Summer');
}

if(r2 === 9, 10, 11) {

    console.log('Summer');
}


functopm + argument + name 

function startE(name) {

    if(name[0] === 'E' || name[0] === 'e') return true;

    return false;
}

console.log(startE('Emily'));


function divisible5(Number) {

    if(Number % 5 === 0) return true;
    
     return false;
}

console.log(divisible5(7));
console.log(divisible5(0));
console.log(divisible5(10));
console.log(divisible5(99));
console.log(divisible5(125));


function fooBar(number) {

if(number / 5 === number) return 'foo';
if(number / 7 === number) return 'bar';

}
console.log(fooBar(2));
