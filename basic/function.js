// function A(){
//     console.log("This is my function")
// }
// A();

// function A(a){
//     console.log("This is my function with parameter",a)
// }
// A()

// let func = function(){
//     console.log("This is my anonymous  function ")
// }
// func()

// // //  A function that calls itself is called a recursive function. In some ways, recursion is analogous to a loop. Both execute the same code multiple times, and both require a condition (to avoid an infinite loop, or rather, infinite recursion in this case).

//  function loop(x) {
//     // "x >= 10" is the exit condition (equivalent to "!(x < 10)")
//     if (x >= 10) {
//       return console.log("Run if condition :-",x);
//     }
//     // do stuff
//     console.log(" Run recursive fuction :- ", x)
//     loop(x + 1); // the recursive call
//   }
//   loop(0);


// // // Nested functions and closures

// function outside(x) {
// console.log("x",x)
//     function inside(y) {
//         console.log("y",y)
//       return x + y;
//     }
//     return inside;
//   }
//   const fnInside = outside(3); // Think of it like: give me a function that adds 3 to whatever you give it
//   console.log(fnInside(5)); // 8
//   console.log(outside(3)(5)); // 8


// Anonymous function: 

// let add = function(a,b){
//   console.log("Anonymous function" ,a + b)
// }
// add(1,2);

//  //Nested function
// function msg(firstName) {
//   function hey() {
//     console.log("Hey " + firstName);
//   }
//   // hey()
//   return   hey()
// }

// msg("Ravi");


// Immediately invoked function expression: IIFE is The browser executes the invoked function expression as soon as it detects it.
// let msg = (function(){
//   console.log("IIFE");
//   return "Immediate invoked function expression";
// })();
// console.log("varriable",msg)

// .............................Function calling.................................
//--- JavaScript Function Call :-

// function product(a, b) {
//   return a * b;
// }
// // Calling product() function
// let result = product.call(this, 20, 5);
// console.log(result);
// ..............................................
// let employee = {
//   details: function (designation, experience) {
//     return this.name
//       + " "
//       + this.id
//       + designation
//       + experience;
//   }
// }
// // Objects declaration
// let emp1 = {
//   name: "A",
//   id: "123",
// }
// let emp2 = {
//   name: "B",
//   id: "456",
// }
// let x = employee.details.call(emp2, "Manager", "4 years");
// console.log(x);

// ...........Binding a object to a function...............

let obj = { a: 12, b: 13 };
function sum(name,h) {
  return this.a + this.b + name + h;
}
console.log(sum.call(obj," Name"," Manoj"));


// ...............................................................................
// ______________ Q.1 Find the sum of all parameters in function?? ______________ //

//   function sum(){
//     console.log(typeof arguments)
//     let element = 0;
//     for (let index = 0; index < arguments.length; index++) {
//          element += arguments[index];
//         // const sum = sum + element;
//         // console.log(element)
//     }
//     console.log("final sum is :- ",element)
// }
// sum(2,3,4,10);