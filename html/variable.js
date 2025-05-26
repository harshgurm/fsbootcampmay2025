// CTRL + /
// console.log('HG is HERE');
// alert('HERE!!!!!!');

// string value is stored in a variable
var name = "Harsh";

//number value assigned to a variable
var x = 5;

//boolean value is assigned to a variable
// so there will be only two values assigned to it either it will be true or false
var bool = true;

var y = 10;
var z = x + y;
var a = z * 5;
// console.log(a);

var b = "15";
var c = 15;
var d = b + c;
// console.log(d);

//create two variable
// assign them a two different number values then do the subtraction
var sub = y - x;
// console.log(sub);

//division example
var dub_example = c / x;
// console.log(dub_example);

x = 50;
// console.log(x);

// const - values declared using const remain unchanged. You can't overwrite them.
const h = 100;
// h = 10;
// console.log(h);


// let
if (bool) {
    let age = 18;
    var senior = 65;
    // console.log("Inside the if " + senior);
    // console.log("Inside the if " + age);
    // console.log("Coming in if statement");
} else {
    console.log("Coming in else statement");
}

// console.log("Outside" + senior);
// Age is not accessible here because it is defined using let variable within the if statement 
// It's scope is limited to be within that if statement
// console.log("Outside" + age);

if(x >= 100){
    console.log("X is greater than or equal to 100");
} else if(x >= 50){
    console.log("X is greater than or equal to 50");
} else {
    console.log("X is smaller than 50");
}

// create a variable name 
// assign that variable your name
// then add if else statement to check if name == "yourname" 
// then show a console message Hello + name(this name should be the variable) 
// else say "not able to find the user"
let nam = "Harsh";
if(nam == "Harsh"){
    console.log("Hello " + nam);
} else {
    console.log("Not able to find the user");
}

x = 5;
var five = 5;

// = is used to assign a value to a variable
// For instance x = 5 means the value of x is 5
//== is used to compare to variables/values
if(x == five){
    console.log("The values are equal");
} else {
    console.log("The values are not equal");
}

// === compare the value + the data type(comparing string vs string or number vs number) of that value
if(x === five){
    console.log("The values are equal and I am using === operator");
} else {
    console.log("The values are not equal  and I am using === operator");
}
