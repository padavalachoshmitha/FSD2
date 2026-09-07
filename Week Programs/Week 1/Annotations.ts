let cuisineName: string = "Bawarchi Restaurant";
let restaurantRating: number = 4.8;
let tasty: boolean = true;

// Function parameter and Return Type Annotations
function getReserved(title: string, stars: number): string {
    return `${title} is well known for its delicious food and has a customer rating of ${stars} stars.`;
}

// Array Annotations
let menuItems: string[] = [
    "Hyderabadi Chicken Biryani",
    "Paneer Butter Masala",
    "Tandoori Chicken",
    "Double Ka Meetha"
];

// Using the Annotated variables and functions
console.log("Cuisine Name:", cuisineName);
console.log("Rating:", restaurantRating);
console.log("Is Delicious:", tasty);
console.log(getReserved(cuisineName, restaurantRating));

console.log("Food Menu:");
for (let food of menuItems) {
    console.log(food);
}
