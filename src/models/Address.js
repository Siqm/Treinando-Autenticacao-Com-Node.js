const { Model, DataTypes } = require('sequelize');

class Address extends Model {
    static init(sequelize) {
        super.init({ // Campos da tabela: 
            zipcode: DataTypes.STRING,
            street: DataTypes.STRING,
            number: DataTypes.INTEGER,
        }, {
            sequelize 
        })
    }

    static associate(models) { // Não esquecer de definir a relação entre as tabelas aqui
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user'}) // Criando a chave estrangeira user_id e nomeando o relacionamento
    }
}

module.exports = Address;