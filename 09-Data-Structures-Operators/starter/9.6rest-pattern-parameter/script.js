"use strict";

const restaurant = {
    name: "Classico Italiano",
    location: "Via Angelo Tavanti 23, Firenze, Italy",
    categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
    starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
    mainMenu: ["Pizza", "Pasta", "Risotto"],

    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    oderDelivery: function ({ starterIndex, mainIndex, time, address }) {
        console.log(
            `Order delivered! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
        );
    },

    orderPasta: function (ing1, ing2, ing3) {
        console.log(`Here is your pasta with ${ing1}, ${ing2} and ${in3}`);
    },

    orderPizza: function (mainIngredient, ...otherIngredient) {
        console.log(mainIngredient);
        console.log(otherIngredient);
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
 * REST PATTERN AND PARAMETERS
 * Collects all data that are not assigned and put together
 * Must be the last key/parameter because it collects all the values that rest
 * ATTENTION: There's a similarity with the spread operator.
 * SPREAD OPERATOR: const arr = [1, 2, ...[3, 4]]; Used on the RIGHT side
 * REST OPERATOR: const [a, b, ...c] = [1, 2, 3, 4, 5, 6]; Used on the LEFT side.
 */
const [a, b, ...c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c);

const [pizza, , risotto, ...otherFood] = [
    ...restaurant.mainMenu,
    ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

const add = function (...numbers) {
    let sum = 0;
    for (let index = 0; index < numbers.length; index++) {
        sum += numbers[index];
    }
    console.log(sum);
};
add(2, 3);
add(5, 6, 7, 8);
add(9, 10, 11, 12, 13, 14);
add(15, 16, 17, 18, 19, 20);
const x = [23, 6, 4];
add(...x);
restaurant.orderPizza('Foo', 'Bar', 'Ex');
