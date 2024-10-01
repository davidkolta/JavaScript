

const numbers2 = [-7, -2, 0, -2, 0, 5, 5, 10, 100, 0];
// Count how many positive numbers you have in the array -> 4
let count = 0;
for( const number of numbers) {

    if(number >0) 
        count++;
}
console.log(count);

const numbers = [-7, -2, 0, -2, 0, 5, 5, 10, 100, 0];

let odd = 0;

for( const number of numbers){

    if(number % 2 === 0 && number > 0) 
        even++;
}

console.log(odd);



