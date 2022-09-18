const Address = require('../models/Address') // Existe a possibilidade de criar um endereço sem ele estar associado a um usuario?
const User = require('../models/User') // No nosso caso, não faz sentido. Então a gente já importa ele aqui

module.exports = {
    async store (req, res) {
        const { user_id } = req.params; // O Id do Usuário vem como parametro no endpoint
        const { zipcode, street, number } = req.body; // Enquanto as informações do endereço, vem no corpo da requisição
        
        const user = await User.findByPk(user_id);

        if (!user) {
            return res.status(400).json({ error: 'User not found'});
        }

        const address = await Address.create({
            zipcode,
            street,
            number,
            user_id,
        });

        return res.json(address)
    }
}