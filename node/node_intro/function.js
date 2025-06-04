let test = "Harsh";

function hello(name){
    console.log("Hello " + name);
}

let person = {name: "Harsh", age: 29}

// console.log(module);
module.exports.name = test;
module.exports.hello = hello;
module.exports.person = person;
console.log(module);

//create an object name person in function file
// import that person in import.js
// try to display person's name and age