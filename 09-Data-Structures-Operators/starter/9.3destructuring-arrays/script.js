'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

/**
 * ARRAY DESTRUCTURING: ES6 feature that allows to unpack array in separated variables (break complex data in simple data)
 */
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

var [first, secondary] = restaurant.categories;
console.log(first, secondary);
var [first, , third] = restaurant.categories;
console.log(first, third);

var [main, secondary] = restaurant.categories;
console.log(main, secondary);
/**
 * Switch the order without using destructuring
 */
const temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary);
// Now using destructuring
var [main, secondary] = restaurant.categories;
[main, secondary] = [secondary, main];
console.log(main, secondary);

var [starter, main] = restaurant.order(2, 0);
console.log(starter, main);
// Using destructuring with nested arrays(an array inside another)
var nested = [2, 4, [5, 6]];
var [i, , j] = nested;
console.log(i, j);
// Destructuring inside destructuring
var [d, , [e, f]] = nested;
console.log(d, e, f);
// Setting default values to destructuring
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
