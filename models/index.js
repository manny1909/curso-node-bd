'use strict';

const Sequelize = require('sequelize');
require('dotenv').config();

const { User, UserSchema} = require('./user.model');
const { Role, RoleSchema} = require('./role.model');
const { Product, ProductSchema} = require('./product.model');
const { Order, OrderSchema} = require('./order.model');
const db = {};

function setupModels(sequelize) {
   User.init(UserSchema, User.config(sequelize))
   Role.init(RoleSchema, Role.config(sequelize))
   Product.init(ProductSchema, Product.config(sequelize))
   Order.init(OrderSchema, Order.config(sequelize))
  
}




module.exports = setupModels;
