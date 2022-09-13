const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const connection = Sequelize(dbConfig);

module.exports = connection;