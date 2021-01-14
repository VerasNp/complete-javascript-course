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

// Variables hoisting
console.log(me); // Undefined
console.log(job); // ReferenceError
console.log(year); // ReferenceError

var me = 'Some';
let job = 'foo';
const year = 1991;

// Functions hoisting
console.log(addDecl(2, 4)); // 6
console.log(addExpr(2, 4)); // ReferenceError
console.log(addExpr(2, 4)); // ReferenceError
console.log(addArrow(2, 4)); // ReferenceError

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example that causes bug!, to avoid made de variables declaration in the beggining of scope

if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted');
}
