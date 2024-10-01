
/*
PROTOTYPE
Create a constructor called Car
and define 4 fields/instance variables/states as below

year
make
model
price
*/
/*
function Car (year, make, model, price){

    this.year = year;
    this.make = make;
    this.model = model;
    this.price = price
}

Car.prototype.drive = function() {
    console.log(`${this.year} ${this.make} ${this.model} drives!`)
  };
  Car.prototype.stop = function() {
    console.log(`${this.year} ${this.make} ${this.model} stops!`)
  };




  const car1 = new Car (2023, 'Tesla', 'X', 80000)
  const car2 = new Car (2022, 'BMW', 'X7', 60000)
  const car3 = new Car (2020, 'Tesla', 'Y', 2700)

  const cars = [car1, car2, car3];

  
  for (let i = 0; i < cars.length; i++){
    console.log(cars[i]);
  }

  cars.forEach((car) => {
    console.log('\n----------------------------\n');
    console.log(car);
    car.drive();
    car.stop();
    console.log(`${car.year} ${car.make} ${car.model} is $${car.price}.`);
  });

*/


class Car {
  constructor(year, make, model, price) {
    this.year = year;
    this.make = make;
    this.model = model;
    this.price = price;
  }

  drive() {
    console.log(`${this.year} ${this.make} ${this.model} drives!`);
  }

  stop() {
    console.log(`${this.year} ${this.make} ${this.model} stops!`);
  }
}

const car1 = new Car(2023, 'Tesla', 'X', 80000);
const car2 = new Car(2022, 'BMW', 'X7', 60000);
const car3 = new Car(2020, 'Tesla', 'Y', 27000);

[ car1, car2, car3 ].forEach((car) => {
  console.log('\n----------------------------\n');
  console.log(car);
  car.drive();
  car.stop();
  console.log(`${car.year} ${car.make} ${car.model} is $${car.price}.`);
});