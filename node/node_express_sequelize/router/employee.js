const Department = require('../models/department');
const Employee = require('../models/employee');
const router = require('express').Router();

router.post('/create', async (req, res) => {
    const { name, salary, department_id } = req.body;

    // if(!name) {
    //     return res.json(`Please provide a name`)
    // }
    // if(!salary) {
    //     return  res.json(`Please provide your salary information`)
    // }
    // if(!department_id) {
    //     return  res.json(`Please provide your department`)
    // }
    if (!salary || !department_id || !name) {
        return res.json(`Please provide all the required values`);
    }
    try {
        const result = await Employee.create({
            EmployeeName: name,
            Salary: salary,
            DepartmentDepartmentID: department_id
        });
        res.json(result);

    } catch (errors) {
        res.json(errors);
    }

});

router.get('/', async (req, res) => {
    try {
        const employees = await Employee.findAll();
        res.json(employees);
    } catch (dan) {
        res.json(dan);
    }

})

//create a request to get employee based on id
router.get('/:id', async (req, res) => {
    let employee_id = req.params.id;
    try {
        const employee = await Employee.findByPk(employee_id);
        // const employee = await Employee.findAll({ where : {EmployeeID: employee_id} });
        if (!employee) res.json(`Employee not found`);
        else res.json(employee);
    } catch (dan) {
        res.json(dan);
    }

})

router.delete('/delete/:id', async (req, res) => {
    let employee_id = req.params.id;
    try {
        const employee = await Employee.findByPk(employee_id);
        if(employee) {
            await employee.destroy();
            return res.json('Employee deleted successfully');
        } else {
            return res.json('Employee not found');
        }
    } catch(error) {
        res.json(error);
    }
});

router.patch('/update/:id', async (req, res) => {
    let employee_id = req.params.id;
    let employee_from_request = req.body;
    // grab the employee details based on the id
    try {
        const employee = await Employee.findByPk(employee_id);

        if(employee) {
            for(let emp in employee_from_request){
                employee[emp] = employee_from_request[emp];
            }
            const result = await employee.save();
            res.json(result);
        } else { 
            res.json('Employee not found');
        }

    } catch(error) {
        req.json(error)
    }
})

module.exports = router;