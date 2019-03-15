const Sequelize = require('sequelize');
//modelos
const PasajeroModel = require('./models/pasajero');
const PasajeModel=require('./models/pasaje');
const Programa_vueloModel=require('./models/programa_vuelo');
const vueloModel=require('./models/vuelo');
const rutaModel=require('./models/ruta');
const avionModel=require('./models/avion');
const aeropuertoModel=require('./models/aeropuerto');
const pistaModel=require('./models/pista');
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
  //ruta
  const Ruta=rutaModel(sequelize,Sequelize);
  //Avion
  const Avion=avionModel(sequelize,Sequelize);
  //Aeropuerto
  const Aeropuerto=aeropuertoModel(sequelize,Sequelize);
  //Pista
  const Pista=pistaModel(sequelize,Sequelize);

  //relaciones
  Pasaje.belongsTo(Programa_vuelo);
  Pasaje.belongsTo(Pasajero);


  //Crear las tablas
  sequelize.sync({ force: true })
  .then(() => {
    console.log(`Database & tables created!`)
  });
  
  module.exports = {
    Pasajero,
    Pasaje,
    Programa_vuelo,
    Vuelo,
    Ruta,
    Avion,
    Aeropuerto,
    Pista
  }