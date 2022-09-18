'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.createTable('addresses', { 
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
        zipcode: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        street: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        number: {
          type: Sequelize.INTEGER,
          allowNull: false,
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
    await queryInterface.dropTable('addresses');
  }
};
