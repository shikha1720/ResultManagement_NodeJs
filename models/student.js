const Sequelize = require('sequelize');
const sequelize = require('../database/connection');

module.exports = sequelize.define('Student',{
    roll_no : {
        type : Sequelize.INTEGER(15),
        primaryKey : true,
        allowNull : false
    },
    name : {
        type : Sequelize.STRING(50),
        allowNull : false
    },
    date_of_birth : {
        type : Sequelize.DATEONLY,
        allowNull : false
    },
    score : {
        type : Sequelize.INTEGER(3),
        allowNull : false
    }
})