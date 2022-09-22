const { Model, DataTypes } = require('sequelize');

class Tech extends Model {
    static init(sequelize) {
        super.init({ // Campos da tabela: 
            name: DataTypes.STRING,
        }, {
            sequelize,
            tableName:'techs'
        })
    }

    static associate(models) { // Não esquecer de definir a relação entre as tabelas aqui
        this.belongsToMany(models.User, { foreignKey: 'tech_id', through: 'user_techs', as: 'techs' })
        //          Pertence a muitos usuarios                  Através de:             Nome da relação
    }

    
}

module.exports = Tech;