const express = require('express');
const app = express();
const connection = require('./connection');

// console.log(connection)
app.use(express.json())

app.get('/', async (req, res) => {
    try {
        const [data] = await connection.promise().query(
            'SELECT * FROM customers');
        res.json(data);
    } catch (error) {
        //to send a status code 400 when an error occured
        // res.status(400).json(error);
        res.json(error);
    }

});

app.get('/customers/:id', async (req, res) => {
    let customer_id = req.params.id;
    try {
        const [data] = await connection.promise().query(
            `SELECT * 
                FROM customers
                WHERE customer_id = ?`, customer_id);

        if (data.length > 0) res.json(data);
        else res.json('No customer found');
    } catch (error) {
        res.json(error);
    }
    //Task - find something that check if the array is empty or not

});

//Task 1 - 5 mins
app.post('/customers/', async (req, res) => {
    // let customer_name = req.body.name;
    // let age = req.body.age;
    // let department = req.body.department;
    let { name, age, department } = req.body;

    try {
        const [data] = await connection.promise().query(`INSERT INTO fsmay2025.customers (name, age, department) 
                                    VALUES (?, ?, ?) `, [name, age, department]);
        if (data && data.affectedRows > 0) res.json("Record added successfully");
        else res.json("Unable to add the customer");

    } catch (error) {
        res.json(error);
    }

})

// - try to do the delete request
// get the delete id from the req params
// run the delete query where id is from the url/params
app.delete('/delete_customer/:id', async (req, res) => {
    let customer_id = req.params.id;
    try {
        if (customer_id) {
            const [data] = await connection.promise().query(`DELETE FROM fsmay2025.customers
            WHERE customer_id = ?`, customer_id); 
            if(data.affectedRows > 0 ) res.json('Customer deleted successfully!!!!');
            else res.json('Unable to delete the customer');
        } else {
            res.json(`Please provide a customer id`);
        }
    } catch(error) {
        res.json(error)
    }
    
})
// Task
//Try to find the customer you want to update
// get the customer id from the url 
app.put('/update_customers/:id', async (req, res) => {
    let customer_id = req.params.id;
    let {name, age, department} = req.body;
    try {
        const [customer] = await connection.promise().query(`SELECT * 
            FROM fsmay2025.customers 
            WHERE customer_id = ?`, customer_id);
            if(customer.length > 0) {
                console.log(customer[0].department)
                console.log(department);
                console.log(department == undefined);
                for(let cus in customer){
                    if(name == undefined) {
                        name = customer[cus].name;
                    }
                    if(department == undefined) {
                        console.log('Coming here', customer[cus].department)
                        department = customer[cus].department;
                    }
                    if(age == undefined) {
                        age = customer[cus].age;
                    }
                }
                const [data] = await connection.promise().query(`UPDATE fsmay2025.customers
                    SET name = ?, age = ?, department = ?
                    WHERE customer_id = ?`, [name, age, department, customer_id] )
                    res.json(data);
            } else {
                res.json('Customer does not exist');
            }
    } catch(error) {
        res.json(error);
    }
})


app.listen(3000, () => {
    console.log('Listening on port 3000');
})