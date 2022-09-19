// Para os modelos serem inicializados na aplicação, deve-se informa-los aqui

const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');
const Address = require('../models/Address')

const connection = new Sequelize(dbConfig);

User.init(connection); // toda vez que eu dou um init, ele cadastra o model dentro da conexão
Address.init(connection)

User.associate(connection.models)
Address.associate(connection.models)

module.exports = connection;