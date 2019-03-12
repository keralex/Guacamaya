const Sequelize = require('sequelize');
const PasajeroModel = require('./models/pasajero');
const PasajeModel=require('./models/pasaje');
const Programa_vueloModel=require('./models/programa_vuelo');
const vueloModel=require('./models/vuelo');
//sequelize DB
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

  //TABLES

  //pasajero
  const Pasajero = PasajeroModel(sequelize,Sequelize);
  //pasaje
  const Pasaje=PasajeModel(sequelize,Sequelize);
  //programa_vuelo
  const Programa_vuelo=Programa_vueloModel(sequelize,Sequelize);
  // vuelo
  const Vuelo=vueloModel(sequelize,Sequelize);

  //relaciones

  Pasaje.belongsTo(Programa_vuelo);
  Pasaje.belongsTo(Pasajero);


  sequelize.sync({ force: false })
  .then(() => {
    console.log(`Database & tables created!`)
  });
  module.exports = {
    Pasajero,
    Pasaje,
    Programa_vuelo,
    Vuelo

    
  }