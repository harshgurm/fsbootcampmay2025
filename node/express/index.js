//explain about what is a postman and why we need it
//explain about database
const express = require('express');
const app = express();

const customers = [
    { id: 1, name: "Harsh" },
    { id: 2, name: "Sam" },
    { id: 3, name: "George" }
]

// app.get('/', (req, res) => {
//     res.send(customers);
// });

//all the incoming request are going be treated/converted into json
app.use(express.json());

// to get the data
app.get('/customers', (req, res) => {
    res.send(customers);
});

app.get('/customers/:id', (req, res) => {
    let customer = customers.find( (cus) => cus.id == req.params.id );
    if(customer)  {
        res.json(customer);
    }
    else {
        res.json('Customer does not exist');
    } 
});

// to insert the data you use post
app.post('/add_customer', (req, res) => {
    if(req.body){
        customers.push(req.body);
        res.json(customers);
    }
});

// Add a new customer from postman

//to update you use put or patch 
// app.put(); or app.patch();
app.put('/update_customers/:id/', (req, res) => {
    let customer_id = req.params.id;
    let customer_name = req.body.name;
    let customer = customers.find( (x) => x.id == customer_id);
    if(customer) {
        customer.name = customer_name
        res.json(customer);
    } else {
        res.json(`Customer not found`);
    }
    res.json(customer_id);
});
//grab the customer id from the url
//try to find whether that customer exist or not

//to delete you use delete api
app.delete('/delete_customer/:id', (req, res) => {
  
    // if yes then delete it otherwise throw an error
    let customer_id  = req.params.id;
    let customer = customers.find( 
        (cus) => cus.id == customer_id
);
    if(customer) {
        var index = customers.indexOf(customer);
        customers.splice(index, 1);
        res.json(customers);
    }
    else {
        res.json("No Customer found");
    }
});

app.listen(3000, () => {
    console.log(`Listening on port 3000`);
})