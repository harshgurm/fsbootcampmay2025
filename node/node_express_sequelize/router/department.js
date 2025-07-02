const Department = require('../models/department');
const   router = require('express').Router();

router.post('/create', async (req, res) => {
    const { department_name } = req.body;

    if(!department_name) res.status(400).json('Please provide a department name');

    try {
        const result = await Department.create({ DepartmentName: department_name });
        res.json(result);
    } catch (errors) {
        res.json(errors);
    }
});

module.exports = router;