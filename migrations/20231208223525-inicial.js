'use strict';

const { ORDER_TABLE, OrderSchema } = require('../models/order.model');
const { PRODUCT_TABLE, ProductSchema } = require('../models/product.model');
const { ROLE_TABLE, RoleSchema } = require('../models/role.model');
const { USER_TABLE, UserSchema } = require('../models/user.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createDatabase('tienda')
    await queryInterface.createTable(ROLE_TABLE, RoleSchema)
    await queryInterface.createTable(USER_TABLE, UserSchema)
    await queryInterface.createTable(PRODUCT_TABLE, ProductSchema)
    await queryInterface.createTable(ORDER_TABLE, OrderSchema)
  },
  
  async down (queryInterface, Sequelize) {
    await queryInterface.dropDatabase('tienda')
    await queryInterface.dropTable(ROLE_TABLE)
    await queryInterface.dropTable(USER_TABLE)
    await queryInterface.dropTable(PRODUCT_TABLE)
    await queryInterface.dropTable(ORDER_TABLE)
  }
};
