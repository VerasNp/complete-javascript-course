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

    oderDelivery: function ({starterIndex, mainIndex, time, address}) {
        console.log(`Order delivered! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
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
 * DESTRUCTURING OBJECTS
 * Same usable of destructuring arrays (part an object in small objects)
 */
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);
// Specifying new names to objects keys
const {
    name: restaurantName,
    openingHours: hours,
    categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);
// Specifying default values (Useful to not provided data)
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);
// Mutate variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);
// Nested objects
const {
    fri: { open, close },
} = openingHours;
console.log(open, close);
restaurant.oderDelivery({
    time: "22:30",
    address: "Via foo",
    mainIndex: 2,
    starterIndex: 2,
});
