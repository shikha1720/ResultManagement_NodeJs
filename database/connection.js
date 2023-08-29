const Sequelize = require('sequelize'); 
                                                  //database connection
const sequelize = new Sequelize("result_management_db", "root", "root",
    {
        host: "localhost",
        dialect: "mysql",
        //operatorsAliases : false
    });

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch((error) => {
    console.error('Unable to connect to the database: ', error);
});

module.exports = sequelize;

// global var sequelize , so no need to import it everywhere
global.sequelize = sequelize;