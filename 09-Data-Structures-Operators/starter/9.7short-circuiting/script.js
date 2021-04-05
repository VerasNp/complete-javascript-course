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
 * LOGICAL OPERATORS:
 * Can be used with any type of data
 * Do SHORT CIRCUITING: If the first value is a true value it will immediately return this value
 */
// OR operator returns the first true value (if one of those is true)
console.log(3 || "Foo");
console.log("" || "Bar");
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || 0 || "" || "Hello" || 23 || null);

const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guest1);

const guest2 = restaurant.numGuests || 10;
console.log(guest2);

// AND operator returns the last true value (if both are true values)
console.log(0 && "Foo");
console.log(7 && "Foo");
console.log("Foo" && 23 && null && "Hello" && 23 && 45);

if (restaurant.orderPizza) {
    restaurant.orderPizza("Foo", "Bar");
}
// Avoiding if statement
restaurant.orderPizza && restaurant.orderPizza("Ex", "App");
