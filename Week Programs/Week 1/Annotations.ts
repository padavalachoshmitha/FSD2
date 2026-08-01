//Variable Annotations
let cuisineName:string="Pista House!";
let restaurantRating:number=5;
let tasty:boolean=true;

//Function parameter and Return Type Annotations
function getReserved(title:string,stars:number):string{
    return '${title} was serving a delicious food with restaurantRating of ${stars}.';
}

//Array Annotations
let menuItems:string[]=[" Chicken Dum Biryani","Chicken 65","Apricot Delight","Mutton ghee roast"];

//Using the Annotated variables and functions
console.log("Cuisine Name:", cuisineName);
console.log("Rating:", restaurantRating);
console.log("Is Delicious:", tasty);
console.log(getReserved(cuisineName, restaurantRating));

console.log("Food Menu:");
for (let food of menuItems) {
    console.log(food);
}
