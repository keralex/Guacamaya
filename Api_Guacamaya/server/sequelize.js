const Sequelize = require('sequelize');
const PasajeroModel = require('./models/pasajero');
const sequelize = new Sequelize('guacamaya', 'root', 'password',{
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

  //pasajero
  const Pasajero = PasajeroModel(sequelize,Sequelize);
  sequelize.sync({ force: false })
  .then(() => {
    console.log(`Database & tables created!`)
  });
  module.exports = {
    Pasajero
    
  }