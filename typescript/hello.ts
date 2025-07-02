let x:number = 0;
let cust_name:string = "Harsh";
let is_on_sale:boolean = true;

let person : User = {id: 1, name: "Harsh", age: 29};
let user: User = {id: 1, name: "Sam", age: 20}

// array containing string values
let car: string[] = ["Honda", "Toyota", "BMW", "Kia"]
let car_name : (string | number)[] = ["C Class", "Accord", 1, 3, 4];

let username: [number, string] = [1, "Harsh"];

let mixed_array: any[] = [1, true, "Sam HERE"];

interface User {
     id: number;
     name: string;
     age: number 
}

let sum : (number | string) = 0;

is_on_sale = false;

console.log(x);

// functions
function hel(name: String, age?: number) : String {
    return "Hello " + name;
}

hel("Harsh");

function user_details(user: User){
    return user;
}

user_details({id: 30, name:"Harsh", age:10});