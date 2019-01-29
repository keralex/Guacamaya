const Sequelize = require('sequelize');
const CustomerModel = require('./models/customer');
const sequelize = new Sequelize('sakila', 'root', 'password',{
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

  sequelize.sync({ force: false })
  .then(() => {
    console.log(`Database & tables created!`)
  });
  module.exports = {
    Customer
  }