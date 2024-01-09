const student = {
    fullName : "Akash Passi",
    marks : 96,
    printMarks : function() {
        console.log("marks = ", this.marks);
    }
}

// this.marks means student.marks

// Prototypes in JS
// JS objects have a special property called prototype. A javaScript object is an entity having state and behavior (properties and method). _ _ proto _ _We can set prototype using 


// *If object & prototype have same method, object’s method will be used. 

const employee = {
    calcTax() {
        console.log("Tax rate is 10%");
    }
}

const roy = {
    salary : 50000
};

// If we use employee object property then use prototype.

roy.__proto__ = employee;


////////////////////////////////////// Classes in JS //////////////////////////////

// Those objects will have some state (variables) & some behaviour (functions) inside it. Class is a program-code template for creating objects.

// Syntax:

//   class MyClass {
//        constructor( ) { ... }    
//        myMethod( ) { ... } }

// let myObj = new MyClass( ) ; 

// class HondaCar {
//     start() {
//         console.log("Start");
//     }

//     stop() {
//         console.log("Stop");
//     }

//     setBrand(brand) {
//         this.brandName = brand; 
//     }
// }

// let Hcity = new HondaCar();
// Hcity.setBrand("Honda");

/////////////////////////////////////// Constructor //////////////////////////////////////

// Constructor( ) method is : * automatically invoked by, * new initializes object

// class HondaCar {
//     constructor(brand, mileage){
//         console.log("Creating new object")
//         this.brandName = brand;
//         this.mileage = mileage;
//     }
//     start() {
//         console.log("Start");
//     }

//     stop() {
//         console.log("Stop");
//     }
// }

// let Hcity = new HondaCar("Hcity", 20); // constructor
// console.log(Hcity);

//////////////////////////////////// Inheritance in JS //////////////////////////////////////

// Inheritance is passing down properties & methods from parent class to child class

// Example 1:

// class parent {
//     // Creating function.
//     hello () {
//         console.log("hello");
//     }
// }

// class child extends parent {
// }

// // Object Created 
// let obj = new child();

// Example 2:

// class Person {
//     eat () {
//         console.log('Eating food');
//     }

//     sleep () {
//         console.log('Sleeping');
//     }

//     exercise () {
//         console.log('Excerise');
//     }
// }

// class Engineer extends Person{
//     work () {
//         console.log('Problems solving');
//     }
// }

// let akash = new Engineer();

// *If Child & Parent have same method, child’s method will be used. [Method Overriding

// class Person {
//     eat () {
//         console.log('Eating food');
//     }

//     sleep () {
//         console.log('Sleeping');
//     }

//     exercise () {
//         console.log('Excerise');
//     }
    
//     work () {
//         console.log("do nothing")
//     }
// }

// class Engineer extends Person{
//     work () {
//         console.log('Problems solving');
//     }
// }

// class Doctor extends Person {
//     work () {
//         console.log("Treating");
//     }
// }

// let akash = new Engineer();

// class Person {
//     constructor() {
//         this.species = "Homo Sapiens";
//     }
//     eat () {
//         console.log('Eating food');
//     }

//     sleep () {
//         console.log('Sleeping');
//     }

//     exercise () {
//         console.log('Excerise');
//     }
    
//     work () {
//         console.log("do nothing")
//     }
// }

// class Engineer extends Person{
//     work () {
//         console.log('Problems solving');
//     }
// }

// class Doctor extends Person {
//     work () {
//         console.log("Treating");
//     }
// }

// let akash = new Engineer();

//////////////////////////////////////////////// Super keyword //////////////////////////////////////

// super Keyword : The super keyword is used to call the constructor of its parent class to access the parent's properties and methods.

// Example 1:

// class Person {
//     constructor() {
//         console.log("Enter the Parent constructor");
//         this.species = "Homo sapiens";
//     }

//     eat() {
//         console.log("eat");
//     }
// }

// class Engineer extends Person {
//     constructor(branch) {
//         console.log("Enter the Child constructor");
//         super(); // to invoke parent class constructor.
//         // super.eat(); // to invoke the parent class function.
//         this.branchName = branch;
//         console.log("Exit the Child constructor");
//     }

//     work () {
//         console.log("Solve Problems")
//     }
// }

// let engobj = new Engineer("Electronic Engg");


// Example 2:

// class Person {
//     constructor(name) {
//         this.species = "Homo sapiens";
//         this.name = name;
//     }

//     eat() {
//         console.log("eat");
//     }
// }

// class Engineer extends Person {
//     constructor(name) {
//         super(name); // to invoke parent class constructor.
//         // super.eat(); // to invoke the parent class function.
//     }

//     work () {
//         super.eat();
//         console.log("Solve Problems")
//     }
// }

// let engobj = new Engineer("Akash");

////////////////////////////////// Let‘s Practice ///////////////////////////////////

// Qs. You are creating a website for your college. 
//     Create a class User with 2 properties, name & email. It also has a method called viewData( ) that allows user to view website data. 

// let DATA = "Secret Information";

// class User {
//     constructor(name, email) {
//         this.name = name;
//         this.email = email;
//     }

//     // Created method(Function)
//     viewData() {
//         console.log("Data = ", DATA);
//     }
// }

// let student1 = new User("Ak", "abc@email.com");
// let student2 = new User("roy", "roy@email.com");

// let teacher1 = new User("teach", "teach@email.com");

// let dean = new User("dean", "Dean@email.com");


// Qs. Create a new class called Admin which inherits from User. Add a new method called editData to Admin that allows it to edit website data.

let DATA = "Secret Information";

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    // Created method(Function)
    viewData() {
        console.log("Data = ", DATA);
    }
}

class Admin extends User {
    constructor(name, email) {
        super(name, email);
    }
    editData() {
        DATA = "Some new values";
    }
}



let student1 = new User("Ak", "abc@email.com");
let student2 = new User("roy", "roy@email.com");

let teacher1 = new User("teach", "teach@email.com");

let dean = new User("dean", "Dean@email.com");


let admin1 = new Admin("Admin", "admin@email.com");


///////////////////////////////////////////////////// Error Handling /////////////////////////////////////////

// try-catch

let a = 5;
let b = 10;

console.log("a = ", a);
console.log("b = ", b);
console.log("a + b = ", a + b);

try {
    console.log("a + b = ", a + c); // error
}catch (err) {
    console.log(err);
}

console.log("a + b = ", a + b);
console.log("a + b = ", a + b);
console.log("a + b = ", a + b);
console.log("a + b = ", a + b);
console.log("a + b = ", a + b);
console.log("a + b = ", a + b);







