/*
Create a class called Customer
constructor with below fields
fname, lname, id
*/



class Customer {
    constructor(fname, lname, id ) {
      this.fname = fname;
      this.lname = lname;
      this.id = id;
     }
}

class PrimeCustomer extends Customer {

    constructor(fname,lname, id, priceCode) {
    super(fname,lname, id)
    this.priceCode = primeCode;
        
    }
}

const customer = new Customer('John','Doe',)