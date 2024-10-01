
const names = [ 'John', 'Jane', 'Alex', 'Max', 'james' ];
// Log each name

for(const name of names){

    console.log(name);
}

for(let i = 0; i < names.length; i++){

    console.log(names[i]);
}


for(let i = 0; i < names.length; i++) 
    

console.log(names[0])


const names1 = [ 'John', 'Jane', 'Alex', 'Max', 'james' ];


 let countj1 = 0
for(const name of names){

    if(name[0] === 'j' || name[0] === 'J') countj1++;
}

console.log(countj1);



const names2 = [ 'John', 'Jane', 'Alex', 'Max', 'james' ];


let letter = 0;

for( const name of names) {

    if(name.length ===4) 
        letter++;
}

console.log(letter);