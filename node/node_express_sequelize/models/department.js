const { sequelize, Sequelize } = require('../connection');

const Department = sequelize.define("Department", {
    DepartmentID: {
        type:Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    DepartmentName: {
        type: Sequelize.STRING,
        allowNull: false
    }

    //To Do
    //get
    //put
    //delete

})

module.exports = Department;

//Create an Employee Model
//Add ID column - type integer, autoIncrement, primarykey and can't be null
// Name column, type string can't be null
// add salary column the type of this is FLOAT and it can't be null
