// Import Sequelize constructor from the library
const Sequelize = require('sequelize');

require('dotenv').config();

// Create connection to the database, passes mysql information for username and password
let sequelize;

if (process.env.JAWSDB_URL){
    sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
    sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
    });
}

// const sequelize = process.env.JAWSDB_URL
//   ? new Sequelize(process.env.JAWSDB_URL)
//   : new Sequelize('tech_blog_db', 'root', 'Shaon3512', {
//       host: 'localhost',
//       port: 3306,
//       dialect: 'mysql',
//       pool: {
//         max: 5,
//         min: 0,
//         idle: 10000
//       } 
//     });


module.exports = sequelize;
