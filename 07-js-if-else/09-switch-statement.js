const { getRandomNumber } = require('../utils/MathHelper.js');

let r1 = getRandomNumber(1, 10);

console.log(r1);
/*
if (r1 === 1) {
    console.log('3 points');
} else if (r1 === 2) {

    console.log('2 points');
} else{

    console.log('0 poits');
}
*/

switch(r1) {
    case 1: 
        console.log('3points');
        break;
    case 2: 
        console.log('1point');
        break;
    case 3:
        console.log('0 oibts');
        break;
    default:
        console.log('0points');


}



const date = new Date();

console.log(date.getDate());
console.log(date.getMonth());
console.log(date.getDay());




const date = new Date();


let day = new Date().getDay();

if(day >= 1 && day <= 5) console.log('weekday');
else console.log('weekend');

if(day === 0 || day === 6) console.log('weekend');
else console.log('weekday');

switch(day) {
    case 1:
    console.log(day.getWeek(0<=6));
    break;
}

const { getRandomNumber } = require('../utils/MathHelper.js');

let r2 = getRandomNumber(1, 100);

console.log('the random numbersi', r2);

if(r2 <= 25) console.log('first');
else if(r2 <= 50) console.log('second');
else if(r2 <= 75) console.log('thirtd');
else (console.log('fourth'));





else console.log('second');