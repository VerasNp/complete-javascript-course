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

// Split create s an array with elements of string based on a separator
console.log("a+very+foo".split("+"));

const [firstname, lastname] = "Vitor Veras".split(" ");

// Join method is the inverse of split
const newName = ["Mr.", firstname, lastname.toUpperCase()].join(" ");

// Padding a string. Used to add a certain number of characters until a string has a certain number if strings
const message = "Go to gate 23";
console.log(message.padStart(25, "+"));
console.log(message.padEnd(25, "+"));

const maskCredicCard = function (number) {
    const str = number + "";
    const last = str.slice(-4);
    return last.padStart(str.length, "*");
};

// Repeat method. Used to repeat a string a multiple times
const message4 = "Teste teste teste";
console.log(message4.repeat(4));
