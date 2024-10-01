const cities = ['Rome', 'Kyiv', 'Berlin', 'Brugge', 'LA'];
// Find the first element that has 4 letters -> Rome
// Find the last element that has 6 letters -> Brugge
// Find the index of LA -> 4
// Find the first element which has i -> Kyiv
// Find the last element that has 4 letters -> Kyiv 

const firstElement = cities.find(city => city.length ===4);

console.log(firstElement);

const lastElement = cities.reverse().find(city => city.length ===6);

console.log(lastElement);

const indexOfLa = cities.findIndex().find(city => city.length);

console.log(indexOfLa);

console.log(cities.findLast((city) => city.length === 4));

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