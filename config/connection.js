

const Sequelize = require('sequelize');

require('dotenv').config();


const sequilize = process.env.JAWSDB_URL
    ? new Sequilize(process.env.JAWSDB_URL)
    : new Sequilize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
        host: 'localhost',
        dialect: 'mysql',
        port: 3301
    });

module.exports = sequilize;