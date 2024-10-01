const numbers = [ 10, 20, 30, 40, 23 ];



for( const number of numbers){
    console.log(number);
}

for(let i = 0; i < numbers.length; i++){

    console.log(numbers[i]);

}

let index = 0;

while(index < numbers.length) {
    console.log(numbers[index++]);
    
}