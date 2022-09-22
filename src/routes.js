const express = require('express');
const AddressController = require('./controllers/AddressController');
const UserController = require('./controllers/UserController');
const TechController = require('./controllers/TechController');

const routes = express.Router();

routes.get('/', (req, res) => {
    return res.json({ hello: 'World' });
})

routes.post('/users', UserController.store)
routes.get('/users', UserController.index)

// Atrelando o cadastro de um endereço diretamente a um usuário, específicado pelo id do usuário
routes.post('/users/:user_id/addresses', AddressController.store)
routes.get('/users/:user_id/addresses', AddressController.index);

routes.post('/users/:user_id/techs', TechController.store);
routes.get('/users/:user_id/techs', TechController.index)
routes.delete('/users/:user_id/techs', TechController.delete)

module.exports = routes;