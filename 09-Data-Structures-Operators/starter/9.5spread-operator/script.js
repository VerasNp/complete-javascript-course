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
 * SPREAD OPERATOR
 * Can be used on iterables(arrays, strings, maps, sets)
 */
// Adding new values to array without spread operator
const arr = [7, 8, 9];
const newArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(newArr);
// Adding new values to array with spread operator
const newArrSpread = [1, 2, ...arr];
console.log(newArrSpread);
// const newArrSpread = [1, 2, ...arr]; != const newArrSpread = [1, 2, arr];
console.log(...newArrSpread);
const newMenu = [...restaurant.mainMenu, "Foo"];
console.log(newMenu);
// Copy array
const mainMenuCopy = [...restaurant.mainMenu];
// Merge arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);
const str = "Foo";
const letters = [...str, "", "Bar"];
console.log(...str);
console.log(letters);

const ingredients = [
    prompt("Ingredient 1"),
    prompt("Ingredient 2"),
    prompt("Ingredient 3"),
];

// Calling an function with many paramter without spread operator
restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// Calling an function with many paramter with spread operator
restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = { foundedIn: 1999, ...restaurant, founder: "foo" };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'New Name';
console.log(restaurantCopy);