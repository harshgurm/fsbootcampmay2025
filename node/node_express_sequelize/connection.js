const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('fsmay2025_sequelize', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate().then(() => {
    console.log('Connected!!!!')
}).catch( (error) => {
    console.log(error);
})

module.exports.Sequelize = Sequelize;
module.exports.sequelize = sequelize;