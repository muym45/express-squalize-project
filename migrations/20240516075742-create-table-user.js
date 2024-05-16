'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('users',{
      id:{
        type: Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false
      },
      name:{
        type:Sequelize.STRING,
        allowNull:false
      },
      email:{
        type:Sequelize.STRING,
        allowNull:false,
        unique:true,
        validate:{
          isEmail:true,
          notEmpty:true
        }
      },
      password:{
        type:Sequelize.STRING,
        allowNull:false
      },
      createdAt:{
        type:Sequelize.DATE,
        allowNull:false,
        defaultValue:Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatetAt:{
        type:Sequelize.DATE,
        allowNull:false,
        defaultValue:Sequelize.literal('CURRENT_TIMESTAMP'),
        onUpdate:Sequelize.literal('CURRENT_TIMESTAMP')
      }
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};
