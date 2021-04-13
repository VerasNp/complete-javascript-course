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
const plane = "A342";

// Get a string in certain position
console.log(plane[0]);
console.log(plane[1]);
console.log("A8765"[2]);

console.log(airline.length);
console.log("B876567".length);

// Get a certain position of searched thing
// ATTENTION: It gives the first occurrence. If not found it gives -1
console.log(airline.indexOf("o"));
console.log(airline.lastIndexOf("o"));
console.log(airline.indexOf("Foo"));

// Slice a string
// It return a new string!
console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(" ")));
console.log(airline.slice(airline.lastIndexOf(" ") + 1));

// Negative values begin the count from the end
console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
    const s = seat.slice(-1);
    if (s === "B" || s === "E") console.log("You got the middle");
    else console.log("Nop middle");
};

checkMiddleSeat("11B");
checkMiddleSeat("23C");
checkMiddleSeat("3E");
