const { Model, DataTypes } = require('sequelize');

class User extends Model {
    static init(sequelize /* estou passando uma conexão ao banco de dados */) {
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
        }, {
            sequelize // outro objeto de configuração, posso passar só 'sequelize' se ali em cima o nome do parametro de conexão também for esse
        })
    }
}

module.exports = User;