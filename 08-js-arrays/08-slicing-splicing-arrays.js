const animals = [ 'Cat', 'Dog', 'Cow', 'Monkey', 'Bird' ];


const animalsPartial1 = animals.slice(0, 3);

const animalsPartial2 = animals.slice(2, 4);

console.log(animals); // [ 'Cat', 'Dog', 'Cow', 'Monkey', 'Bird' ]
console.log(animalsPartial1); // [ 'Cat', 'Dog', 'Cow' ]
console.log(animalsPartial2); // [ 'Cow', 'Monkey' ]

// Get the last 3 elements [ 'Cow', 'Monkey', 'Bird' ]

const animalsPartial3 = animals.slice(2);
const animalsPartial4 = animals.slice(-3);

console.log(animalsPartial3); // [ 'Cow', 'Monkey', 'Bird' ]
console.log(animalsPartial4); // [ 'Cow', 'Monkey', 'Bird' ]
console.log(animals.slice(6, 10)); // [ ]
console.log(animals.slice(2, 3)); // [ 'Cow' ]

const numbers = [5, -2, 10, 20, 50, -10];

console.log(Math.min(...numbers.slice(0, 3)));
console.log(Math.max(...numbers.slice(3)));

const result = [...numbers.slice(3), ...numbers.slice(0, 3)];

console.log(result); // [ 20, 50, -10, 5, -2, 10 ]

//splice
//pop() remove the last element
//shift () remove the first 
// Push() adds alement to the end
// unshift() add element to start

const cities = ['chicago', 'rome', 'berlin'];

cities.splice(1, 0, 'LA');

console.log(cities);