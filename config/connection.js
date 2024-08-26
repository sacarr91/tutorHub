require('dotenv').config();
const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.POSTGRESURI, {dialect: 'postgres'});

module.exports = sequelize;