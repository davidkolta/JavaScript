

function greet (func) {
    console.log('Hello');
    func();
}

function getInfo() {
    console.log('today is saturday');
}

greet(getInfo);

// arrow method


const printHello = ()=> { 

    console.log('Hello');
}

printHello();

const average = (a, b) => {

    return (a + b) / 2;

}
console.log(3, 5);

const average3  = (a, b) => {
    return (a + b) /2;
}