const numbers = [10, 5, 100, 77, 50, 65, 0];
// Find all the numbers that are 50 or more -> [100, 77, 50, 65]


const bigNum = numbers.filter((function(number) {
    return number >= 50;
}))

console.log(bigNum);


const fruits = [ 'Orange', 'Apple', 'Red apple', 'Pineapple', 'Kiwi'];
// Find all the fruits that has apple -> [ 'Apple', 'Red apple', 'Pineapple' ]
// Count how many elements has a      -> 4
// Count how many elements has i      -> 2

const fruitsWApple = fruits.filter(fruit => fruit.toLocaleLowerCase().includes('apple'));
const fruitswA = fruits.filter(fruit => fruit.toLocaleLowerCase().includes('a')).length;
const fruitsWI = fruits.filter(fruit => fruit.toLocaleLowerCase().includes('i')).length;


console.log(fruitsWApple);
console.log(fruitswA);
console.log(fruitsWI);




