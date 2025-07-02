const { sequelize, Sequelize } = require('../connection');

const Employee = sequelize.define("Employee", {
    EmployeeID: {
        type:Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    EmployeeName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Salary : {
        type: Sequelize.FLOAT,
        allowNull: false
    }

})

module.exports = Employee;
