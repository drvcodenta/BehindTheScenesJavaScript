'use strict';

// 1.Javascript is a high-level language like python, it does the resources optimization on its own by the use of 
//abstraction available in it, not like C in which you have to do the resources optimization on your own
// like declaring the memory size of a variable. Due to this it becomes easier to learn python and Javascript 
// but they become slower in comparison to C in case of program running.

// 2.Javascript has a Garbage Collector which collects all the garbage code that is not in the use

//3.Javascript has a paradigm which is basically structuring of the code to improve the coding style and technique
// It's of three types: 1.Procedural 2.Object-Oriented 3.Functional Programming. Paradigms can be declarative and 
// Imperative !

//4. Prototype based Object Oriented: It basically has a prototype of all the objects in which all the methods are
// pre-written, and from there only the oversimplified methods are inherited to the code so that they can be used in 
// objects like array and methods like array.push to push the elements inside it!

//5. First Class function: Javascript treats all of its functions as variable in which values can be stored, so they
//can be stored in another funtion and used!

//6. Dynamic: Javascript is a Dynamic language and here all the variables can be used for storing any datatype 
// value like string, number etc. In low level language, i needed to store the values in a predefined variable 
// datatype.

//7. Javascript used the concurrency Model which means to implement tasks simultaneously at the same time,it is a
// language that works on a single thread so if there comes a bead that takes much longer time than anticipated
// then it would be taken out the thread exectued parallely and again merge it back into the thread.

// Modern JAVASCRIPT used the Just in time compilation model which is basically the mixture of both compilation 
// and interpretation

// In JS, first the code is parsed into abstract syntax tree(i.e. AST) which means that all the variables and code
// is placed in a tree , this is the place where Your syntax error is identified and indicated to the User.
// After the parsing, occurs our compilation. Since JS is just in time compilation, that's why just after compilation
// occurs our optimization of our machine code to optimize it to such a level that it's very much optimized
// That's why v-8 like JS-runtime are very fast!

// Let's Understand the concepts of Execution Context better by the following code:

// const name = 'Dhruv';

// const first = () => {
//     let a = 1;
//     const b = second(4,2); //1.First our GEC(Global Execution Context) will store const name,and other function names
//     //(first,second,x)
//     //From here on, the EC of first will go to Call Stack and create an EC for second function and work there !
//     a = a * b;
//     return a;
//     //3. Once second EC is popped from the Call Stack, then a value is returned from first EC!
// }

// const second = () => {
//     //2.An EC for second is generated, then works on this EC and returns value to the first EC!
//     var c = 2;
//     return c;
// }

// const x = first(); //And our GEC actually does not closes inside the Stack until the tab or browser is not closed!

// Scoping: The way we organise the variables of a program and the way they are accessed 
// Lexical Scoping: Scoping is controlled by placement of functions and blocks in the code 
// Scope: Space or environment where a particular variable is declared.There is Global Scope,Function Scope, and 
// Block Scope
// Scope of a variable: Region of our Code where a certain variable can be accessed

// In scope chaining, inner scope of the code actually looks for the variable inside the inner scope. If it's not 
// availabe there then it would simply look for its parent scope, it does not work the other way around.
// Parent scope never looks for the variables inside the inner scope. Plus it does not store some value in var,
// inner scope just looks the var element in its parent scope, just like that!

// Another thing to note down about the Scope is that:
// Global Scope: stores things available to All
// Function Scope: Stores things available to function only
// Block Scope: let,const would be accessible to only that Block and others like var is accessible outside the Block
// also...
// One-liner Concept:Scope only works upward and not sideways

// Scoping in Practice


// function calcAge(birthYear) {
//   const age = 2037 - birthYear;

//   function printAge() {
//     let output = `${firstName}, you are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       // Creating NEW variable with same name as outer scope's variable and value of firstName differs on whether
//       // it can be accessed by scoping or not
//       const firstName = 'Steven';

//       // Reasssigning outer scope's variable and you can see that output value changes after reassigning
//       output = 'NEW OUTPUT!';

//       const str = `Oh, and you're a millenial, ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//     }
//     // console.log(str);
//     console.log(millenial);
//     // console.log(add(2, 3));
//     console.log(output);
//   }
//   printAge();

//   return age;
// }




// Now i want to talk about the behaviour of JS code when we acess try to access the following before
// initialization:
// 1. Function Declaration: Hoisted due to which they can be accessed before they are declared, scope is Block
// 2. var variables: Hoisted but return undefined value, which is weird behaviour.Scope of these is functions
// 3. let and const variables: Not Hoisted, only available after they are declared inside Block. 
// and Temporal dead zone is defined for these variables
// 4. Function expression and arrows: depends on which kind of variable is used for expressing them.


//Now let us understand little about the functioning of the this keyword:
// 1.The this keyword returns the object or the owner of the method.
// 2.For a regular function, this keyword returns undefined in strict Mode. In case of sloppy mode, it returns window
// object of the simple function which is another headache, so always use the strict mode. It's just a rule that the
// regular function has its this keyword set to undefined!
// That's why you can create a const self = this outside the regular function in case its inside some method and 
// does not return object as shown in given example:
// Solution 1
    // const self = this; // self or that
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };
// but this is an older method, now in ES6 arrow functions are used to do the same:
// Solution 2
// const isMillenial = () => {
//     console.log(this);
//     console.log(this.year >= 1981 && this.year <= 1996);
//   };
//   isMillenial();
// In above solution, the this keyword takes out the this from its parent scope as it does not have any on its own
// 3.For Arrow functions: returns <this of the parent object/function, this is also called as lexical this. It does
// not return the variable of the same function
// 4.For Event listener: returns DOM element that the handler is attached to!

//Method borrowing by the use of this keyword:
// const jonas = {
//     year: 1991,
//     calcAge: function () {
//       console.log(this);
//       console.log(2037 - this.year);
//     },
//   };
//   jonas.calcAge();
  
//   const matilda = {
//     year: 2017,
//   };
  
//   matilda.calcAge = jonas.calcAge; // Here, method borrowing is done
//   matilda.calcAge();
  
//   const f = jonas.calcAge;
//   f();

// Now we will learn about the 'arguments' keyword, and they only work in regular expression, not in arrow functions
// // arguments keyword
// const addExpr = function (a, b) {
//     console.log(arguments);//it takes in more than the specified number of arguments due to arguments keyword!
//     return a + b;
//   };
//   addExpr(2, 5);
//   addExpr(2, 5, 8, 12);
  
//   var addArrow = (a, b) => {
//     console.log(arguments);
//     return a + b;
//   };
//   addArrow(2, 5, 8);