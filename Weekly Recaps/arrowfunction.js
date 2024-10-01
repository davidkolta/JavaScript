

function printHello() {

    console.log('hello');
}


const printHello => () {

    console.log('hello');
}

const product => () {
    console.log('hello');
}


function (getInfo) {
    console.log('today is saturday');
    func();
}

function greet (func) {
    console.log('Hello');
    func();
}

greet(getInfo);