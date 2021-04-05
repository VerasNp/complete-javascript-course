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
 * SETS
 * An data structure that consist in a collection of unique values
 * Duplicated values will be ignored
 * Sets can receive mixed data types, but need to be an iterable
 */
// Declaring a Set
let ordersSet = new Set(["Foo", "Bar", "Ex", "Foo", "Foo"]);
console.log(ordersSet);
console.log(new Set("Foo"));

// Returns the sie of set. OBS.: .size != .length
console.log(ordersSet.size);
// Check if an value exists inside the Set
console.log(ordersSet.has("Foo"));
// Adds a new value to the Set
ordersSet.add("Boo");
console.log(ordersSet);
// Deletes a value of the Set
ordersSet.delete("Boo");
console.log(ordersSet);
// Delete all elements of Set
ordersSet.clear();
console.log(ordersSet);

ordersSet = new Set(["Foo", "Bar", "Ex", "Foo", "Foo"]);

for (const order of ordersSet) {
    console.log(order);
}

const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef"];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(new Set(staff).size);
console.log(new Set("abcdefghjklmno").size);
