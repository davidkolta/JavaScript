const num = [-1, 1, 3, 0, 2, 6, 8];
// Please find the first even number from the array -> 0

for (const num of nums) {
    if(num % 2 ===0) {
        console.log(num);
    break;
    }

}


const nums = [-1, 1, 3, 0, 2, 6, 8];

for (const num of nums) {
  if (num % 2 === 0) {
    console.log("The first even number is:", num);
    break; // Exit the loop once the first even number is found
  }
}


// Find the first city that has the odd length  -> Chicago
const  = ['Berlin', 'Rome', 'Chicago', 'Kyiv', 'Istanbul', 'Tokyo'];

for (const city of cities) {

    if(city.length % 2 !== 0) {
        console.log(city);
        break;
        
    }
}

// Find all the cities that has length more than 5 -> [ 'Berlin', 'Chicago', 'Istanbul' ]

const cities = ['Berlin', 'Rome', 'Chicago', 'Kyiv', 'Istanbul', 'Tokyo'];

const citiesWithLength6OrMore = [];

for( const city of cities) {

    if(city.length> 5) citiesWithLength6OrMore.push(city);
         

} 

console.log(citiesWithLength6OrMore);