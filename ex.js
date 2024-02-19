// let day = 9;
// switch (day) {
//     case 1:
//         console.log("Monday")
//         break;
//     case 2:
//         console.log("Tuesday")

//         break;
//     case 3:
//         console.log("Wednesday")

//         break;
//     case 4:
//         console.log("Thrusday")
//         break;

//     default:
//         console.log("enter valid day")
//         break;
// }


// let name2 = name1.split("").reverse().join("").split(" ").reverse().join(" ")
// console.log(name2); // Outputs "yaj vasirhs hsakA"


// name1 = name1.split(" ");
// let arr = [];
// for (let i = 0; i < name1?.length; i++) {
//     for (let j = name1[i].length - 1; j >= 0; j--) {
//         arr.push(name1[i][j])
//     }
//     arr.push(" ")
// }
// console.log(arr.join(""))


// class Animal {
//     constructor() {
//         console.log("constructore")
//     }
//     makeSound() {
//         console.log("Generic animal sound");
//     }
// }

// class Dog extends Animal {
//     constructor() {
//         super();
//         console.log("constructore 2")
//     }
//     makeSound() {
//         console.log("Woof!"); // Overriding the inherited method
//     }
// }

// const dog = new Dog();
// dog.makeSound(); // Output: Woof!



// class Calculator {
//     function add( a:Number,  b:Number):Number {
//        return a + b;
//     }

//      add( a,  b) {

//        return "i am String "+ a +" " + b;
//     }

//     //  add(String a, String b) {
//     //    return a + b;
//     // }
//  }

//  let a = new Calculator();

//  let b = a.add(4,6)

//  console.log(b)

let day = 89;

switch (day) {
    case 0:
        console.log("Sunday")
        break;
    case 1:
        console.log("Monday")
        break;
    case 2:
        console.log("Tuesday")
        break;
    case 3:
        console.log("Wednesday")
        break;
    case 4:
        console.log("Thursday")
        break;
    case 5:
        console.log("Friday")
        break;
    case 6:
        console.log("Saturday")
        break;

    default:
        console.log("Enter valid day")
        break;
}