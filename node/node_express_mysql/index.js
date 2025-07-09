const express = require('express');
const cors = require('cors');
const app = express();
const connection = require('./connection');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const verifyUser = require('./auth');

app.use(cors());
// console.log(connection)
app.use(express.json())

const customers = [
  {
    "customer_id": 1,
    "name": "John",
    "age": 35,
    "department": "IT"
  },
  {
    "customer_id": 2,
    "name": "Stephanie",
    "age": 49,
    "department": "Admin"
  },
  {
    "customer_id": 3,
    "name": "Test User",
    "age": 28,
    "department": "IT"
  },
  {
    "customer_id": 5,
    "name": "Sam",
    "age": 34,
    "department": null
  },
  {
    "customer_id": 6,
    "name": "Gemini",
    "age": 30,
    "department": null
  },
  {
    "customer_id": 9,
    "name": "George",
    "age": 30,
    "department": "IT"
  }
];

app.get('/', (req, res) => {
    res.json(customers);
})

app.get('/customers', async (req, res) => {
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

app.get('/customers/:id', verifyUser, async (req, res) => {
    let customer_id = req.params.id;
    try {
        const [data] = await connection.promise().query(
            `SELECT * 
                FROM customers
                WHERE customer_id = ?`, customer_id);

        if (data.length > 0) res.send(data);
        else res.json('No customer found');
    } catch (error) {
        res.json(error);
    }

});


app.post('/customers/', async (req, res) => {
    let { name, age, department } = req.body;

    try {
        const [data] = await connection.promise().query(`INSERT INTO fsmay2025.customers (name, age, department) 
                                    VALUES (?, ?, ?) `, [name, age, department]);
        if (data && data.affectedRows > 0) res.status(200).send({message : "Record added successfully!!!"});
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

app.put('/update_customers/:id', async (req, res) => {
    let customer_id = req.params.id;
    let {name, age, department} = req.body;
    console.log('Customer ID', customer_id);
    console.log('Req body', req.body);
    try {
        const [customer] = await connection.promise().query(`SELECT * 
            FROM fsmay2025.customers 
            WHERE customer_id = ?`, customer_id);
            if(customer.length > 0) {
                for(let cus in customer){
                    if(name == undefined) {
                        name = customer[cus].name;
                    }
                    if(department == undefined) {
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

app.post('/signup', async (req, res) => {
    let { username, password, confirm_password, status } = req.body;

    if(!username || !password || !confirm_password){
        return res.status(401).json('Please provide all the values');
    }

    if(password != confirm_password) return res.status(401).json("Password doesn't match");

    if(!status) status = 1;

    const hashedPass = await bcrypt.hash(password, 10);

    try {
        const [data] = await connection.promise().query(`INSERT INTO fsmay2025.users (username, password, status) 
                                    VALUES (?, ?, ?) `, [username, hashedPass, status ]);
        if (data && data.affectedRows > 0) res.json("Record added successfully");
        else res.json("Unable to add the customer");
    } catch (error) {
        res.json(error);
    }
})


app.post('/signin', async (req, res) => {
    let { username, password } = req.body;

    if(!username || !password) return res.status(401).json('Please provide all the values');

    try {
        const [data] = await connection.promise().query(`
            SELECT users_id, username, password
            FROM fsmay2025.users 
            WHERE username = ? `, username);
        if (data.length > 0) {
            const passResult = await bcrypt.compare(password, data[0].password);
            if(passResult){
                const token = await jwt.sign({user_id:data[0].user_id}, 'thisIsMyEncryptionKey',  { expiresIn: '1h' });
                return res.status(200).json({'token': token});    
            } else {
                return res.status(401).json('Authentication failed!');
            }
        } else {
            return res.json("Customer not found");
        }

    } catch (error) {
        return res.json(error);
    }
})

app.listen(3000, () => {
    console.log('Listening on port 3000');
})