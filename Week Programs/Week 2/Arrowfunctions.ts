// Traditional Function
function collectHoney(bees: number, honeyPerBee: number): number {
    return bees * honeyPerBee;
}

// Arrow Function
const companyollectHoneyArrow = (bees: number, honeyPerBee: number): number => {
    return bees * honeyPerBee;
};

// Shorthand Arrow Function
const companyollectHoneyShort = (bees: number, honeyPerBee: number): number =>
    bees * honeyPerBee;


// Testing the Program

// Using Traditional Method
console.log("Using Traditional Function");
console.log("Total Honey Collected:", collectHoney(15, 3));


// Using Arrow Function Method
console.log("\nUsing Arrow Function");
console.log("Total Honey Collected:", collectHoneyArrow(15, 3));


// Using Shorthand Arrow Function
console.log("\nUsing Shorthand Arrow Function");
console.log("Total Honey Collected:", collectHoneyShort(15, 3));


// Inline Comparison
console.log("\nInline Comparison");
console.log("Traditional Function:", collectHoney(10, 4));
console.log("Arrow Function:", collectHoneyArrow(10, 4));
console.log("Shorthand Arrow Function:", collectHoneyShort(10, 4));


// Error 1: Passing string instead of number
// console.log(collectHoney(15, "3"));
// Error: Argument of type 'string' is not assignable to parameter of type 'number'.

// Error 2: Missing arguments
// console.log(collectHoneyArrow());
// Error: Expected 2 arguments, but got 0.