const Sequelize = require('sequelize');
const sequelize = require('../database/connection');

module.exports = sequelize.define('Users',{
  email : {
      type : Sequelize.STRING,
      unique: true,
      allowNull : false
  },
  password : {
      type : Sequelize.STRING,
      allowNull : false
  },
  role: {
    type: Sequelize.STRING,
    enum: ["user", "admin"],
    default: "user",
  },
},
{
  timestamps: false, // Disable timestamps
});
