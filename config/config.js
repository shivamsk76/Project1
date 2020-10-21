const sequelize = require('sequelize')

module.exports = new sequelize('project1', 'admin', '8818810358',{
    host: 'database-2.cxxyjhbxcreg.us-east-2.rds.amazonaws.com',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})