
/*
Create a class called Customer
- Create a constructor for this class which takes 4 arguments:
    name
    age
    membershipType
    membershipCost
- Create a method called getDetails() which returns the customer's information in the format:
    {name} is {age} years old and has a {membershipType} membership with ${membershipCost}.
- Create a method called upgradeMembership()
    which upgrades the membership type of the customer to 'Premium' and increases the cost by 20%.
*
*/

class Customer {
    constructor (name, age, membershipType, membershipCost){
        this.name = name;
        this.age = age;
        this.membershipType = membershipType;
        this.membershipCost = membershipCost;
    }
    getDetails() {
        return `${this.name} is ${this.age} years old and has a ${this.membershipType} membership with ${this.membershipCost}`
    }

    upgradedMembership(){
        this.membershipType = 'Premium';
        this.membershipCost *= 1.20;
    }
}


customer1.upgradedMembership();
console.log(customer1.getDetails());


//task 2

/*
Create a class called VIPCustomer and inherit the Customer class
- Create a constructor for this class which takes 4 arguments:
    name
    age
    membershipType
    membershipCost
    - Inherit the Customer class constructor and the other methods
- Create a method called applyDiscount() which applies a discount of 10% to the VIP customer's 
membershipCost.
*/


class VIPCustomer extends Customer{
    constructor (name, age, membershipType, membershipCost){
        super(name, age, membershipType, membershipCost)
    }

applyDiscount(){
    return this.membershipCost *= 0.10;
}

}

class BusinessCustomer extends Customer{
    constructor (name, age, membershipType, membershipCost, duration){
        super(name, age, membershipType, membershipCost)
        this.duration = duration
    }
extendContract(){
    this.duration += 1;
    this.membershipCost = membershipCost - (membershipCost * 0.15);
    return;
}
}

const customer1 = new Customer ('Jane Smith', 35, 'Basic', 50);
const VIPcustomer = new VIPCustomer ('Jane Smith', 35, 'gold', 100);
const BusinessCustomer = new BusinessCustomer('David Jo', 40, 'Platinum',200, 2);

customer1.upgradedMembership();

VIPcustomer.applyDiscount();

BusinessCustomer.extendContract();

co




