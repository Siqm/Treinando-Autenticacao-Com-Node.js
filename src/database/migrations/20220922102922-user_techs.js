'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.createTable('user_techs', { 
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        user_id: { // user_id é a chave estrangeira
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: 'users', key: 'id' }, // references é o que referencia uma outra tabela
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
        tech_id: { // user_id é a chave estrangeira
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: 'techs', key: 'id' }, // references é o que referencia uma outra tabela
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
        }
      });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('user_techs');
  }
};
