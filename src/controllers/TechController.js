const Tech = require('../models/Tech')
const User = require('../models/User')

module.exports = {
    async index(req, res) {
        const { user_id } = req.params;
        const user = await User.findByPk(user_id)
        const techs = await Tech.findAll()
        return res.json(techs)
    },

    async store(req, res) {
        const { user_id } = req.params;
        const { name } = req.body;

        const user = await User.findByPk(user_id)

        if (!user) {
            return res.status(400).json({ error: 'User not Found' })
        }

        const [ tech ] = await Tech.findOrCreate({ // Método devolve um array com o modelo e um booleano   
            where: { name }                 // O boolean retorna true se a tecnologia acabou de ser criada
        })                                  // ou false se a tecnologia já existia

         await user.addTech(tech);

         return res.json(tech)
    },
}