// const object = {
//  key:value,
//  key:value
// }

// string variable
var name = "Harsh";
var x = "5";

//number variable
var x = 5;

//boolean variable can be either true or false
var bool = true;

// object variable
const person = {
    first_name: "Harsh",
    last_name: "Gurm",
    age:"29",
    city: "Brampton"
}

console.log("First Name: " + person.first_name + " Last name: " + person.last_name);

//create an object name it car
// store its make , model and year
// print the values in console

const car = {
    make: "Honda",
    model: "Accord",
    year: 2025
};

console.log("I drive ", car.make , " " , car.model + ". The year is " + car.year);

//one way of creating an array
// array is used to store multiple values
var names_arr = ["Harsh", "Dan", "Runda", "Stephanie"];

var cars_arr = new Array("Honda", "Kia", "Tesla");

console.log(names_arr[2]);

// AND -> && -> both conditions need to be true in order for this to go in if statement
if(x >= 5 && name == "Harsh"){
    console.log("This will display the message if both conditions are true");
} else {
    console.log("Both conditions were not true")
}

// OR -> ||
if(x != 5 || name == "Harsh"){
    console.log("This will display the message if any of the conditions are true");
} else {
    console.log("Both the conditions are false")
}

// to calculate the total number of values in an array
// console.log(names_arr.length);
console.log(names_arr);

// indexOf function to search for a string/value in an array
console.log(names_arr.indexOf("Runda"));
// check if Sam exists is names_arr then print Sam exists
// else say user not found
if(names_arr.indexOf("Ronda") != -1){
    console.log("User exists")
} else {
    console.log("User not found!");
}

// adding new items/value to an array
names_arr.push("Sam", "Test");
console.log(names_arr);

// overwriting Harsh with Gurm in an names_arr
// Hint :
// Step 1: try to get the name Harsh printed
// Step 2: use the x = new_value overwriting approach on the array
//overwriting the array at index 0 with "Gurm"
names_arr[0] = "Gurm";

console.log(names_arr);

var full_name = "Harshvir Singh Gurm";
var short_name = full_name.substr(0,5);
console.log(short_name);

// creating a function
function hello(name){
    console.log('Hello ' + name);
}

// calling it
//convert these static names to be actually come from the names_arr
hello(names_arr[0]);
hello(names_arr[1]);
hello(names_arr[2]);
hello(names_arr[3]);

//create a function to calculate student percentage.

function calculatePercentage(name, total_marks){
    let percentage = total_marks/500 * 100;
    console.log("Hello " + name + " you got " + percentage + "% ");
}

calculatePercentage("Harsh", 400);
calculatePercentage("Dan", 500);
calculatePercentage("Runda", 500);
calculatePercentage("Stephanie", 500);

// Today we are going to learn about loops
// loops
// array within an array - later on

