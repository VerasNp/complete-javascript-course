"use strict";

const restaurant = {
    name: "Classico Italiano",
    location: "Via Angelo Tavanti 23, Firenze, Italy",
    categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
    starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
    mainMenu: ["Pizza", "Pasta", "Risotto"],

    // Thats a new way to declare methods on objects
    order(starterIndex, mainIndex) {
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
const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

/**
 * MAPS
 * Use to map values into keys
 * In maps the keys can have any type
 */
// Declares an new Map
const rest = new Map();
// Insert values to a map
rest.set("name", "Clássico Italiano");
rest.set(1, "Italy");
rest.set(2, "Lisbon");
rest.set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
    .set("open", 11)
    .set("close", 23)
    .set(true, "We are open :D")
    .set(false, "We are closed");

// Retrieve values from map
console.log(rest.get("name"));
console.log(rest.get(true));
console.log(rest.get("1"));
console.log(rest.get(1));

const time = 21;
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

console.log(rest.has("categories"));
console.log(rest.delete(2));
console.log(rest);
console.log(rest.size);
// rest.clear();

// Using arrays as keys
const arr = [1, 2];
rest.set(arr, "Test");
console.log(rest.get(arr));
console.log(rest);

rest.set(document.querySelector("h1"), "Heading");
console.log(rest);
