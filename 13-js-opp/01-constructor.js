/*
STUDENT PROTOTYPE - Properties - HAS
fname
lname
age
program
address
phone
SSN

STUDENT PROTOTYPE - functions - DOES
study()
attendClass()
takeExam()


CAR PROTOTYPE - properties 
make
model
year
price
color
engineSize


CAR PROTOTYPE - functions
drive()
turn()
brake()
accelarate()
stop()


BANK CUSTOMER - properties 
fname
lname
address
phone
SSN
accountNumber
credentials


BANK CUSTOMER - functions
transfer()
deposit()
openAccount()
closeAccount()
apply()
updateInfo()
*/

// NOT EFFICIENT TO CREATE EACH OBJECT SEPERATELY - We should create a template/blueprint/prototype and create many objects from it
/*
const student1 = {
  fname: 'John',
  lname: 'Doe',
  age: 25,
  info: function () {
    console.log(`Student info = Fullname: ${fname} ${lname}, Age: ${age}`);
  }
}

const student2 = {
  fname: 'Alina',
  lname: 'Hegyi',
  age: 36,
  info: function() {
      console.log(`Student info = Fullname ${fname} ${lname}, Age: ${age}`)
  }
}

const student3 = {
  fname: 'Adela',
  lname: 'Mucea',
  age: 37,
  info: function() {
      console.log(`Student info = Fullname ${fname} ${lname}, Age: ${age}`)
  }
}
*/


// BEFORE ES6 - Prototypes 



// AFTER ES^ - Classes

// TASK: Create a Teacher prototype with fname, lname, age, field properties

// Create 2 Teacher Prototype methods as teach and giveHomework with empty bodies

// Create 3 Teacher Objects




// Replicate this work with ES6 Classes as well




// Store all the ages in an array -> 
// Store all the first names in an array -> 
// Find and print the information of the oldest teacher ->

// TASK: Create a Teacher prototype with fname, lname, age, field properties

// constructor: it is a special method/function used to create objects of the prototype/class 
function Teacher(fname, lname, age, field) {
    this.fname = fname;
    this.lname = lname;
    this.age = age;
    this.field = field;
  }
  
  // Create 2 Teacher Prototype methods as teach and giveHomework
  Teacher.prototype.teach = function () {
    console.log(`${this.fname} teaches ${this.field}!`);
  }
  
  Teacher.prototype.giveHomework = function () {
    console.log(`${this.fname} gives homework!`);
  }