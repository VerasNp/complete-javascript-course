'use strict';

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;
//   //   console.log(firstName); // To find this variable JS will make an variable look up

//   function printAge() {
//     let output = `${firstName}, you are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       const str = `Oh, and you're a millenial, ${firstName}`;
//       const firstName = 'Another';
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }

//       output = 'NEW OUTPUT';
//     }
//     // console.log(str); // Do not have access
//     // add(2, 4); // Do not have access, only on strict mode
//   }
//   printAge();
//   return age;
// }

// const firstName = 'Some';
// calcAge(1991);
// // console.log(age) // Do not have access
// // printAge() // Do not have access

// // Variables hoisting
// console.log(me); // Undefined
// console.log(job); // ReferenceError
// console.log(year); // ReferenceError

// var me = 'Some';
// let job = 'foo';
// const year = 1991;

// // Functions hoisting
// console.log(addDecl(2, 4)); // 6
// console.log(addExpr(2, 4)); // ReferenceError
// console.log(addExpr(2, 4)); // ReferenceError
// console.log(addArrow(2, 4)); // ReferenceError

// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// var addArrow = (a, b) => a + b;

// // Example that causes bug!, to avoid made de variables declaration in the beggining of scope

// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log('All products deleted');
// }

// console.log(this); // POints to window

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this); // Undefined
// };
// calcAge(1991);

// const calcAgeArrow = birthYear => {
//   console.log(2037 - birthYear);
//   console.log(this); // Window (lexical this)
// };
// calcAgeArrow(1991);

// const some = {
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//   },
// };
// some.calcAge(); // 'some' object

// const foo = {
//   year: 2017,
// };

// // Method borrowing
// foo.calcAge = some.calcAge;

// foo.calcAge(); // 'foo' object

// const some = {
//   firstName: 'some',
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     // const isMillenial = function () {
//     //     console.log(this); // undefined
//     //   console.log(this.year >= 1981 && this.year <= 1996);
//     // };
//     // first solution: use an aux variable
//     // const self = this; // self or that
//     // const isMillenial = function () {
//     //     console.log(self); // undefined
//     //   console.log(self.year >= 1981 && self.year <= 1996);
//     // };
//     // second solution: arrow
//     const isMillenial = () => {
//       console.log(this); // undefined
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };
//     isMillenial();
//   },

//   //   greet: () => {
//   //     console.log(this); // window
//   //     console.log(`hey ${this.firstName}`); // hey undifined
//   //   },
//   greet: function (params) {
//     console.log(this); // window
//     console.log(`hey ${this.firstName}`); // hey some
//   },
// };
// some.greet();
// some.calcAge();
// console.log(this); // window

// //Arguments keyword
// const addExpression = function addExp(a, b) {
//   console.log(arguments);
//   return a + b;
// };
// addExpression(2, 5);
// addExpression(2, 5, 6, 7);

// let age = 39;
// let oldAge = age;
// age = 31;
// console.log(age);
// console.log(oldAge);

// const me = {
//   name: 'some',
//   age: 30,
// };

// const foo = me;
// foo.age = 27; //Change the 2 object's age
// console.log('foo', foo);
// console.log('some', some);

// Primitive
let lastName = 'foo';
let oldLastName = lastName;
lastName = 'faa';
console.log(lastName, oldLastName);

// Reference
const some = {
  fisrtName: 'some',
  lastName: 'foo',
  age: 27,
};
const marriedSome = some;
marriedSome.lastName = 'faa';
console.log('Before marriage', some);
console.log('After marriage', marriedSome);

// marriedSome = {};

// Copying objects
const some2 = {
  fisrtName: 'some',
  lastName: 'foo',
  age: 27,
  family: ['a', 'b'],
};
const someCopy = Object.assign({}, some2);
someCopy.lastName = 'faa';
someCopy.family.push('c');
someCopy.family.push('d');
console.log('Before marriage', some2);
console.log('After marriage', someCopy);
