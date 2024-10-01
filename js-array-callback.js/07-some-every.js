const numbers = [-5, 0, 5, 10, 23, -10];
// check if some elements are divisible by 5 -> true
// check if every element is positive -> false
// check if some elements are negative -> true

const divisibleBy5 = numbers.some(num => num % 5 ===0);

console.log(divisibleBy5);

const positiveElement = numbers.every(num => num > 0);

console.log(positiveElement);

const negative = numbers.some(num => num <0);
console.log(negative);