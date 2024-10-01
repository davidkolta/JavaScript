const names = [ 'James', 'John', 'Alex', 'Mariia' ];
console.log('\n--------iteration of arrays with for...of loop--------\n');
for(const name of names) {
  console.log(name);
}
console.log('\n--------iteration of arrays with for loop--------\n');
for(let i = 0; i < names.length; i++) {
  console.log(names[i]);
}
console.log('\n--------iteration of arrays with forEach method--------\n');
names.forEach((x) => console.log(x));
// Print each name uppercased


names.forEach(name => console.log(name.toUpperCase()));


const firstLetter = charAt(0);
const lastLetter = name.charAt(length-1);

console.log(firstLetter + lastLetter);




name.forEach((name) => {
    let firstLetter = name[0];
    let lastLetter = name.at(-1);
    let result = firstLetter + lastLetter;
    console.log(result);
})



names.forEach((x)  => {
    if(x.length === 4) {
        console.log(x)
    }})

    const names = ['James', 'John', 'Alex', 'Mariia'];

    const lenghtOfNames = [];

    for (const lenghtOfNames of names)