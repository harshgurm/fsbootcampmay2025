let num = 10;

//for loop 
for( let i=0; i < num; i++ ){
    // console.log('The value of i' + i);
}

//create a loop that will run 50 times and print from 1 to 50
// for(let i=0; i<=50; i++){
//     console.log('The value of i', i);
// }

const names = ["Harsh", "Runda", "Dan", "Stephanie", "John", "Rob"];
//to count the length of this array
// then you can use for loop to run that many times and print each name using names[0])

// Approach 1
for(let i=0; i<names.length; i++){
    // console.log('The value of i', names[i]);
}

//Approach 2
for(let i in names){
    
    if(names[i] == "John"){
        names[i] = "John Wick"
    }
    hello(names[i]);
}

//Approach 3 displaying the values
names.forEach( (value) => console.log(" Value ", value)) 

// OR
names.forEach( (value, index) => console.log(" Index -> ", index, " Value ", value)) 

// function (value) {
//     console.log(value)
// }

// OR shortcut below

//arrow function
// (value) => console.log(value)


console.log(names);
// console.log(names);
//assigning a value 0 to i
let i = 0;

const per = {firstName: "Harsh", lastName: "Gurm", city: "Calgary"}
for(let i in per){
    // console.log(" -> ", i);
}

function hello(name ){
    console.log("Hello " + name);
}

// use a loop on this function in a way that it says Hello to everyone

let abc = 1;

console.log(abc);

let val = 0;
while (val < 10) {
    val++;// val = val + 1;
    console.log("While loop ", val);
}

do {
    console.log('It gonna print the first time for sure', val);
} while (val < 10);

//
var two_dim_arr = [
    ["Harsh", "Gurm", 25],
    ["Sam", "Smith", 30],
    ["George", "Brown", 35]
]

console.log(two_dim_arr[0][0]);