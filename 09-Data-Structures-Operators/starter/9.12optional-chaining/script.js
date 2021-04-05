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
/**
 * OPTIONAL CHAINING
 * If an property do not exists undefined value is returned immediately
 */
// Check if an property exists without optional chaining
if (restaurant.openingHours.mon.open)
    console.log(restaurant.openingHours.mon.open);

if (restaurant.openingHours && restaurant.openingHours.fri.open)
    console.log(restaurant.openingHours.fri.open);

// Check if an property exists with optional chaining
console.log(restaurant.openingHours.sun?.open);
console.log(restaurant.openingHours?.sun?.open);

const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
for (const day of days) {
    const open = restaurant.openingHours[day]?.open ?? "closed";
    console.log(`On ${day}, we open at ${open}`);
}

// Check if an method exists before calling
console.log(restaurant.order?.(0, 1) ?? "Method does not exists");
console.log(restaurant.orderRisotto?.(0, 1) ?? "Method does not exists");

// Check if an array are empty with optional chaining
const users = [{ name: "Foo", email: "foo@foo.com" }];

// Check if an array are empty without optional chaining
if (users.length > 0) console.log(users[0].name);
else console.log("User array empty");

console.log(users[0]?.name ?? "User array empty");
