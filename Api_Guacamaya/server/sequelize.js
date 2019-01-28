const Sequelize = require('sequelize');
const CustomerModel = require('./models/customer');
const sequelize = new Sequelize('sakila', 'root', 'lovemusick5', {
    host: 'localhost',
    dialect: 'mysql',
    port: '3306',
    pool: {
      max: 10,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  });
  const Customer = CustomerModel(sequelize, Sequelize);
  module.exports = {
    Customer
  }