// let  a = 10;

// let b = document.getElementById("main").innerHTML = "<h1>"+ a + "</h1>"

// console.log(b)

// class A{
//     add(){
//         let a = 10;
//         let b = 10;
//         console.log("Addition", a+b)
//     }
// };
// const x = new A();
// x.add();

//  // // // with constructor // // //

// class A {
//     // constuctor(){}
//     constructor(num1,num2) {
//         this.num1 = num1;
//         this.num2 = num2;
//         this.num3 = 50;
//         console.log("first",num1,num2)
//     }
//     // prototype method
//     add() {
//         console.log( this.num1 + this.num2 +this.num3)
//     }
//     // Static method

//     static hello(){
//         console.log("Hello static method")
//     }
// };
// const x = new A(10,20); ///call constuctor()
// const y = new A(40,20); ///call constuctor()
// x.add();                /// call prototype method
// A.hello();             /// call static metode call ==> cls name dot mehod name

// ...........ex -2 ........................//

// class car{
//     constructor(color,model,cc){
//         this.color = color;
//         this.model = model;
//         this.cc = cc;
//         console.log("constructor calling",color,model,cc);
//     }
//     run(){
//         console.log("Go farword",this.cc/10);
//     }
// }

// // const mahendra = new car("black",2020,1200);
// // mahendra.run();

// const suzuki = new car("red",2021,1100);
// suzuki.run();


// ..........Abstraction ............//


// function person(fname, lname) {
//     this.firstname = fname;
//     let lastname = lname;

//     let getDetails_noaccess = function () {
//         return (`First name is: ${firstname} Last
// 			name is: ${lastname}`);
//     }

//     this.getDetails_access = function () {
//         return (`First name is: ${this.firstname}, Last
// 			name is: ${lastname}`);
//     }
// }
// let person1 = new person('Mukul', 'Latiyan');
// console.log(person1.firstname);
// console.log(person1.getDetails_noaccess);
// console.log(person1.getDetails_access());


// .................inheritance ................//


class person {
    constructor(name) {
        this.name = name;
        console.log("person constructor");
    }
    // method to return the string
    simplFunc() {
        console.log("person simplFunc");

        return (`Name of person: ${this.name}`);
    }
}


class student extends person {
    constructor(name, id) {
        // super keyword for calling the above
        // class constructor
        super(name);
        this.id = id;
        console.log("student constructor");

    }
    simplFunc() {
        console.log("student simplFunc");
        
        return (`${super.simplFunc()},
		Student ID: ${this.id}`);
    }
}

// let p1 = new person("Rahul");
// console.log(p1.name)



let student1 = new student('Mukul', 22);
// console.log(student1)
console.log(student1.simplFunc());
