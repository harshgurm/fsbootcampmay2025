const { request } = require("http");

const pro = new Promise((resolve, reject) => {
    
    setTimeout(() => {
        // reject('Unable to connect to the database')
        // resolve("Database connected");
    }, 4000)
})


pro.then((data) => {
    console.log(" Display datab" , data);
}).catch((error) => {
    console.log("Display error ", error);
})

// async request
// sync request

//async
// a promise is created to connect to a database
// await waiting for the response
// in the meantime doing another query to get the data from database

const fs = require('fs');

try {
    console.log('HERE 5');
  fs.unlinkSync('test.txt');
  console.log('HERE 6');
  console.log('Harsh is here');
} catch (err) {
  // handle the error
  console.log(err);
}

