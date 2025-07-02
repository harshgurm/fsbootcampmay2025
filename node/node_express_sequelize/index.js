const express = require('express');
const app = express();
const { sequelize, Sequelize } = require('./connection');

app.use(express.json());

const Department = require('./models/department');
const Employee = require('./models/employee');

const department_router = require('./router/department');
const employee_router = require('./router/employee');

app.use('/department/', department_router);
app.use('/employee/', employee_router);

Department.hasMany(Employee);
Employee.belongsTo(Department);

sequelize.sync().then( (res) => {
    // console.log(res);
}).catch( (error) => {
    console.log(error);
})

app.listen(3000, () => {
    console.log('Listening on port 3000');
})