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

const airline = "TAP Air Foo";

// Capitalization
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());
console.log("Foo".toUpperCase());

// Fiz capitalization in name
const passenger = "BaR";
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
    passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

//Comparing email
const email = "hello@jonal.io";
const loginEmail = "  Hello@Jonas.io   \n";
const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);
console.log(email === trimmedEmail);

// Replacing parts of a string. Case sensitive
const ptriceGB = "288,89#";
const ptriceAA = ptriceGB.replace("#", "$");
console.log(ptriceAA);

// Booleans
// Check if exists a part of string
const plane = "ASF23";
console.log(plane.includes("ASF"));
// Check if a string begins with an certain character
console.log(plane.startWith("A"));

if (plane.startsWith("ASF") && plane.endsWith(3)) {
    console.log("Nre airline family");
}
