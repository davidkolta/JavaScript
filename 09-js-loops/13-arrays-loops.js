const numbers = [3, 4, 7, 3, 2, 2, 7];
// Find the sum of numbers that has even index -> 3 + 7 + 2 + 7 -> 19

let product = 1;
for (let i = 0; i < numbers.length; i++) {
  if (i % 2 !== 0) {
    product *= numbers[i];
  }
}

console.log(product);