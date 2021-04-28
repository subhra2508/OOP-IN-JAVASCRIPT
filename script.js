'use strict';

/*
const Person = function(firstName,birthYear){
    //Instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;

    //never do this
    // this.calcAge = function(){
    //     console.log(2021 - this.birthYear)
    // }  
    //instead do this which is written in line 29
};

const jonas = new Person('Jonas',1991);
console.log(jonas);

//Behind the scene
//1. New {} empty obj is created
//2. function is called , this = {}
//3. {} linked to prototype
//4. function automatically return

console.log(jonas instanceof Person);


//prototypes
Person.prototype.calcAge = function(){
    console.log(2017 - this.birthYear);
};

jonas.calcAge();

//__proto__ is the actual object that is used in the lookup chain to resolve methods, etc. The prototype property is only present for functions and is a property that's set only if you're using the 'new' keyword when creating objects with this (constructor) function.
console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(jonas));//Person.Prototype is prototype of jonas
console.log(Person.prototype.isPrototypeOf(Person));//Person.prototype is not a prototype of Person

//we can also create properties on prototype not just methods
Person.prototype.species = 'Homo Sapiens';//inherited property

console.log(jonas.hasOwnProperty('species'));
console.log(jonas.hasOwnProperty('firstName'));

console.log(jonas.__proto__)
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3,4,5,6,7,8,9,2];//new array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);
//the prototype property of the constructor(Array) is gono be prototype of all the object created
//by that constructor

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function(){
   return[...new set(this)];
}
console.log(arr.unique());//like this we can add a property to the prototype constructor
//now we can call the array in any array
//It's not a good idea

const h1 = document.querySelector('h1');
console.log(x => x+1);
*/
//we can use either of them
//class expression
// const personcl = class {

// }
// --------------------------------------------------------------------------------------------
/*

//class declaration
class PersonCl{
   constructor(firstName,birthYear){
     this.firstName = firstName;
     this.birthYear = birthYear;
   }
   //instance method
   calcAge(){
       console.log(2021-this.birthYear);
   }
   get Age(){
       return 2021 - this.birthYear;
   }
   //static method
   static hey(){
      console.log('hey there');
   }
}

const jessica = new PersonCl('Jessica',1996);
console.log(jessica);
jessica.calcAge();

console.log(jessica.__proto__ === PersonCl.prototype);
PersonCl.prototype.greet = function(){
    console.log(`Hey ${this.firstName}`);
}
jessica.greet();

const ben = new PersonCl('Ben',2000);
console.log(ben);
console.log(ben.__proto__ === PersonCl.prototype)
ben.calcAge();
console.dir(PersonCl);

//1.classes are not hoisted //we can't use them before declaring them
//2.class are first-class citizens
//3.the body of a class always executed in strict mode

*/
// --------------------------------------------------------------------------------------------------
//Getter and setters
/*
const account = {
    owner:'jonas',
    movements:[100,200,30,300],
    get latest(){
        return this.movements.slice(-1).pop();
    },
    set latest(mov){
        this.movements.push(mov);
    }
};

console.log(account.latest);
account.latest = 50;
console.log(account.movements);
*/

//----------------------------------------------------------------------------------------------------------

//static methods
//Array.from() -> it convert any array like structure to real array
//the from method is attached to the entire Array constructor
//Number.parseFloat();
// Person.hey = function(){
//     console.log('Hey there');//this one is not inherited its attached to Person
// }
// Person.hey();

//---------------------------------------------------------------------------------------------------------------

// const PersonProto = {
//     calcAge(){
//         console.log(2021-this.birthYear);
//     },
//     init(firstName,birthYear){
//         this.firstName = firstName;
//         this.birthYear = birthYear;
//     }
// }

// const steven = Object.create(PersonProto);
// console.log(steven);
// steven.name = 'Steven';
// steven.birthYear = 2002;
// steven.calcAge();

// console.log(steven.__proto__ ===  PersonProto);

// const sarah = Object.create(PersonProto);
// sarah.init('Sarah',1995);
// sarah.calcAge();
//-------------------------------------------------------------------------------------------------------------------
//Inheritance between classes : constructor functions
/*
const Person = function(firstName,birthYear){
    this.firstName = firstName;
    this.birthYear = birthYear;
};
Person.prototype.calcAge = function(){
    console.log(2021 - this.birthYear);
}


const Student = function(firstName,birthYear,course){
    // this.firstName = firstName;
    // this.birthYear = birthYear;
    //Person(firstName,birthYear)//this simply doesn't work because
    //this is just a normal function call we didn't call the 'new' keyword
    //here so the this keyword in a regular function call set to undefined
    //so it doesn't work
    //we can use call method for this
    Person.call(this,firstName,birthYear);
    this.course = course;
}

Student.prototype = Object.create(Person.prototype);

// Student.prototype = Person.prototype;//this doesn't work
//because we want to link the prototype not to make it points to same one.

Student.prototype.introduce = function(){
    console.log(`My name is ${this.firstName} and i study ${this.course}`);
}

const mike = new Student('Mike',2020,'computerScience');
mike.introduce();
mike.calcAge();

Student.prototype.constructor = Student;
*/
//---------------------------------------------------------------------------------------------------------------
/*
//Inheritance Between classes ES6 classes
// Inheritance Between "Classes": ES6 Classes

class PersonCl {
    constructor(fullName, birthYear) {
      this.fullName = fullName;
      this.birthYear = birthYear;
    }
  
    // Instance methods
    calcAge() {
      console.log(2037 - this.birthYear);
    }
  
    greet() {
      console.log(`Hey ${this.fullName}`);
    }
  
    get age() {
      return 2037 - this.birthYear;
    }
  
    set fullName(name) {
      if (name.includes(' ')) this._fullName = name;
      else alert(`${name} is not a full name!`);
    }
  
    get fullName() {
      return this._fullName;
    }
  
    // Static method
    static hey() {
      console.log('Hey there 👋');
    }
  }

class StudentCl extends PersonCl {
    constructor(fullName,birthYear,course){
        //always needs to happen first
        //constructor function of the parent class
        super(fullName,birthYear);
        this.course = course;
    }
    introduce(){
        console.log(`My name is ${this.fullName} and i study ${this.course}`);
    }
    calcAge(){
        console.log(2037-this.birthYear);
    }
}

const martha = new StudentCl('Martha Jones',2012,'computerscience');
console.log(martha);
martha.introduce();
martha.calcAge();
*/
//================================================================================================================
/*
//Inheritance Between "Classes": Object.create
//classes // new keyword
//constructor function
//Object.create()

const PersonProto = {
    calcAge(){
        console.log(2037 - this.birthYear);
    },
    init(firstName,birthYear){
        this.firstName = firstName;
        this.birthYear = birthYear;
    },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function(firstName,birthYear,course){
    PersonProto.init.call(this,firstName,birthYear);
};
const jay = Object.create(StudentProto);
//PersonProto => StudentProto => jay
//  ||
//  \/
// steven

jay.init('Jay',2012,'computer science');
jay.calcAge();

*/
//=====================================================================================================

//Another class example =>

//javascript new features yet to release
//public fields
//private fields
//public methods
//private methods

/*
class Account {
    constructor(owner,currency,pin){
        this.owner = owner;
        this.currency = currency;
        this._pin = pin;
        //Protected
        this._movements = [];
        this.locale = navigator.language;
        console.log(`Thanks for opening an account, ${owner}`);
    }
    //these methods are interface to object
    //public interface
    getMovements(){
        return this._movements;
    }


    deposit(val){
        this._movements.push(val);
    }
    withdraw(val){
        this.deposit(-val);
    }
    _approveLoan(val){
        return true;
    }
    requestLoan(val){
       if(this._approveLoan(val)){
           this.deposit(val);
           console.log('Loan approved');
       } 
    }
}

const acc1 = new Account('Jonas','EUR',1111);

// acc1.movements.push(250);
// acc1.movements.push(-140);
acc1.deposit(250);
acc1.withdraw(-100);
acc1.requestLoan(1000);
console.log(acc1.getMovements);


console.log(acc1);
*/
//==============================================================================================================
/*
//javascript new features yet to release
//public fields
//private fields
//public methods
//private methods
//there is also a static method

 
class Account {
    //fields must be outside the methods
    //public fields
    locale = navigator.language;
    _movements = [];
     //private fields
     #movements = [];
     #pin;

    constructor(owner,currency,pin){
        this.owner = owner;
        this.currency = currency;
        this.#pin = pin;
        //Protected
        // this._movements = [];
        // this.locale = navigator.language;
        console.log(`Thanks for opening an account, ${owner}`);
    }
    //these methods are interface to object
    //public interface
    //public methods
    getMovements(){
        return this.#movements;
    }


    deposit(val){
        this.#movements.push(val);
    }
    withdraw(val){
        this.deposit(-val);
    }
    _approveLoan(val){
        return true;
    }
   
    requestLoan(val){
       if(this._approveLoan(val)){
           this.deposit(val);
           console.log('Loan approved');
       } 
    }
    static helper(){
        console.log('static-helper function');
    }
}

const acc1 = new Account('Jonas','EUR',1111);

// acc1.movements.push(250);
// acc1.movements.push(-140);
acc1.deposit(250);
acc1.withdraw(-100);
acc1.requestLoan(1000);
console.log(acc1.getMovements);


console.log(acc1);
// console.log(acc1.movements)
Account.helper();
*/
//===============================================================================================================

//chaining methods

// ======ES6 CLASSES SUMMARY======
//see photos

