

console.log('Hello World');

let nam = "Harsh"

// Create a function
function hello(){
    console.log('Hello there!!!!! How are you '+ nam + '?');
    console.log(`Hello there. How are you ${nam}?`);
}

// calling the function
hello();

// what is the difference?
// const vs var vs let

//shortest way to write a function - we call it arrow function
// () => {
//     console.log('Hello there!!!!!')
// }

const http = require('http');
// const server = http.createServer();

// server.listen(3000);
// console.log('Server is running');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!\n');
});

server.listen(3000, () => {
    console.log("Listening on port 3000")
} );

// 1. callback function
// 2. arrow function
// 3. how to create a server in node
// 4 async vs sync
// 5 Promises
// server.mjs
// import { createServer } from 'node:http';

// const server = createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end('Hello World!\n');
// });

// // starts a simple http server locally on port 3000
// server.listen(3000, () => {
//   console.log('Listening on 127.0.0.1:3000');
// });

// run with `node server.mjs`

//create a server and run it
// Your server should display welcome to my Website

const path = require('path');
const os = require('os');
const fs = require('fs');

console.log(path.basename(__filename));
console.log("Filename -> " + __filename);
console.log("Dirname -> ", __dirname);

console.log(os.hostname());
console.log(os.totalmem());
console.log(os.freemem());

fs.readFile('../../web_2/form.html', "utf8", (error, data) => {
    // if (err) console.log(error);
    // else console.log(data)
    // OR
    if (error) {
        console.log(error);
    } else {
        // console.log(data)
    }
})

fs.readdir('../../../', (error, data) => {
    if(error) console.log(error);
    // else console.log(data);
})

//events
const EventEmitter = require('events');
const emitter = new EventEmitter();

//emitter.on
// OR

emitter.addListener('error', () => {
    console.log("Error happened!!!!Store it in the database and the logs");
})

emitter.emit('error');



emitter.on('bug', (args) => {
    console.log("Error happened!!!!Store it in the database and the logs", args);
})

emitter.emit('bug', {error_no: 148, url: "harshgurm.com"});

