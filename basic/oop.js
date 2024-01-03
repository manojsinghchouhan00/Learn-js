// Defining object :-----

// let person = {
// 	first_name: 'Mukul',
// 	last_name: 'Latiyan',

// 	//method
// 	getFunction: function () {
// 		return (`The name of the person is
// 		${person.first_name} ${person.last_name}`)
// 	},
// 	//object within object
// 	phone_number: {
// 		mobile: '12345',
// 		landline: '6789'
// 	}
// }
// console.log(person.getFunction());
// console.log(person.phone_number.landline);

// --------------------------------------------------------------------------------


// Using a constructor
// function person(first_name, last_name) {
// 	this.first_name = first_name;
// 	this.last_name = last_name;
// }
// // Creating new instances of person object
// let person1 = new person('Mukul', 'Latiyan');
// let person2 = new person('Rahul', 'Avasthi');

// console.log(person1.first_name);
// console.log(`${person2.first_name} ${person2.last_name}`);


// --------------------------------------------------------------------------------


// Object.create() example a simple object with some properties

// const coder = {
// 	isStudying: false,
// 	printIntroduction: function () {
// 		console.log(`My name is ${this.name}. Am I
// 			studying?: ${this.isStudying}.`)
// 	}
// }
// // Object.create() method
// const me = Object.create(coder);

// // "name" is a property set on "me", but not on "coder"
// me.name = 'Mukul';

// // Inherited properties can be overwritten
// me.isStudying = true;

// me.printIntroduction();

// -------------------------------------class-------------------------------------


// Defining class using es6

// class Vehicle {
// 	constructor(name, maker, engine) {
// 		this.name = name;
// 		this.maker = maker;
// 		this.engine = engine;
// 	}
// 	getDetails() {
// 		return (`The name of the bike is ${this.name}.`)
// 	}
// }
// // Making object with the help of the constructor
// let bike1 = new Vehicle('Hayabusa', 'Suzuki', '1340cc');
// let bike2 = new Vehicle('Ninja', 'Kawasaki', '998cc');

// console.log(bike1.name); // Hayabusa
// console.log(bike2.maker); // Kawasaki
// console.log(bike1.getDetails());

// --------------------------------------------------------------------------------
// Defining class in a Traditional Way.

// function Vehicle(name, maker, engine) {
//     this.name = name,
//         this.maker = maker,
//         this.engine = engine
// };

// Vehicle.prototype.getDetails = function () {
//     console.log('The name of the bike is ' + this.name);
// }

// let bike1 = new Vehicle('Hayabusa', 'Suzuki', '1340cc');
// let bike2 = new Vehicle('Ninja', 'Kawasaki', '998cc');

// console.log(bike1.name);
// console.log(bike2.maker);
// console.log(bike1.getDetails());



// ------------------------Four pillar of OOPs :- Encapsulation example -------------------


// class person {
//     constructor(name, id) {
//         this.name = name;
//         this.id = id;
//     }
//     add_Address(add) {
//         this.add = add;
//     }
//     getDetails() {
//         console.log(`Name is ${this.name}, Address is: ${this.add},ID is: ${this.id}`);
//     }
// }

// let person1 = new person('Mukul', 21);
// person1.add_Address('Delhi');
// person1.getDetails();


// --------------------Four pillar of OOPs  2. Abstraction example--------------------


// function person(fname, lname) {
//     let firstname = fname;
//     let lastname = lname;

//     let getDetails_noaccess = function () {
//         return (`First name is: ${firstname} Last
// 			name is: ${lastname}`);
//     }

//     this.getDetails_access = function () {
//         return (`First name is: ${firstname}, Last
// 			name is: ${lastname}`);
//     }
// }
// let person1 = new person('Mukul', 'Latiyan');
// console.log(person1.firstname);
// console.log(person1.getDetails_noaccess);
// console.log(person1.getDetails_access());

// --------------------Four pillar of OOPs  2. Inheritance example--------------------

// class person {
//     constructor(name) {
//         this.name = name;
//     }
//     // method to return the string
//     toString() {
//         return (`Name of person: ${this.name}`);
//     }
// }
// class student extends person {
//     constructor(name, id) {
//         // super keyword for calling the above
//         // class constructor
//         super(name);
//         this.id = id;
//     }
//     toString() {
//         return (`${super.toString()},
// 		Student ID: ${this.id}`);
//     }
// }
// let student1 = new student('Mukul', 22);
// console.log(student1.toString());

// --------------------Four pillar of OOPs  4 Polymorphism example--------------------
//   poly-morohism method overiding
//   Parent object constructor

// function Shape() {
//     this.draw = function() {
//       console.log("Drawing a shape");
//     };
//   }

//   // Child object constructor that "overrides" the draw method
//   function Circle() {
//     this.draw = function() {
//       console.log("Drawing a circle");
//     };
//   }

//   // Create instances of the parent and child objects
//   const shape = new Shape();
//   const circle = new Circle();

//   // Call the draw method on both objects
//   shape.draw();  // Output: Drawing a shape
//   circle.draw(); // Output: Drawing a circle


// --------------------Four pillar of OOPs  4.1 Polymorphism example--------------------

// polymorphism method overriding ;--> when two methods have the same name and parameters.
// When the method signature (name and parameters) are the same in the superclass and the child class, it's called overriding (run time polymorphism or dynamic binding )

// Parent object constructor
// function Animal() {
//     this.makeSound = function() {
//       console.log("Some generic animal sound");
//     };
//   }

//   // Child object constructor that overrides the makeSound method
//   function Cat() {
//     Animal.call(this); // Inherit properties and methods from the parent
//     this.makeSound = function() {
//       console.log("Meow");
//     };
//   }

//   // Create instances of the parent and child objects
//   const genericAnimal = new Animal();
//   const myCat = new Cat();

//   // Call the makeSound method on both objects
//   genericAnimal.makeSound(); // Output: Some generic animal sound
//   myCat.makeSound();        // Output: Meow


// --------------------Four pillar of OOPs  4.2 Polymorphism example--------------------

// Polymorphism method-overloading
// When two or more methods in the same class have the same method name but different parameters, this is called overloading.

// function calculateArea() {
//     if (arguments.length === 0) {
//         return "No arguments provided. Please provide the necessary parameters.";
//     } else if (arguments.length === 1) {
//         // Calculate the area of a square
//         return "Area of a square: " + (arguments[0] * arguments[0]);
//     } else if (arguments.length === 2) {
//         // Calculate the area of a rectangle
//         return "Area of a rectangle: " + (arguments[0] * arguments[1]);
//     } else {
//         return "Invalid number of arguments provided.";
//     }
// }

// console.log(calculateArea());          // Output: "No arguments provided. Please provide the necessary parameters."
// console.log(calculateArea(5));         // Output: "Area of a square: 25"
// console.log(calculateArea(4, 6));      // Output: "Area of a rectangle: 24"
// console.log(calculateArea(3, 4, 5));   // Output: "Invalid number of arguments provided."
