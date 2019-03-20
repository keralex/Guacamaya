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
const asientoModel=require('./models/asiento');
const empleadoModel=require('./models/empleado');
const proveedor_charterModel=require('./models/proveedor');
const equipajeModel=require('./models/equipaje');
const mantenimientoModel=require('./models/mantenimiento');
const tripulacionModel=require('./models/tripulacion');
const cargoModel=require('./models/cargo');





//sequelize DB--------------
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

  //TABLES---------------
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
  //Asiento
  const Asiento= asientoModel(sequelize,Sequelize);
  //Empleado
  const Empleado=empleadoModel(sequelize,Sequelize);
  //Proveedor
  const Proveedor=proveedor_charterModel(sequelize,Sequelize);
  //Equipaje
  const Equipaje=equipajeModel(sequelize,Sequelize);
  //Mantenimiento
  const Mantenimiento=mantenimientoModel(sequelize,Sequelize);
  //Tripulacion
  const Tripulacion=tripulacionModel(sequelize,Sequelize);
  //Cargo
  const Cargo=cargoModel(sequelize,Sequelize);






  //RELACIONES----------------------

  //un programa de vuelo tiene n pasajes
  Programa_vuelo.hasMany(Pasaje);
  Pasaje.belongsTo(Programa_vuelo);
  //pasaje tiene un pasajero
  Pasajero.hasMany(Pasaje);
  Pasaje.belongsTo(Pasajero);
  //un pasajero puede comprar varios pasaes
  Pasajero.hasMany(Pasaje,{as:'Comprador'});
  Pasaje.belongsTo(Pasajero,{as:'Comprador'});
  //Un pasajero tiene varias maletas
  Pasajero.hasMany(Equipaje);
  Equipaje.belongsTo(Pasajero);
  //programa de vuelo tiene muchos vuelos y un vuelo puede estar en varios programas
  Programa_vuelo.belongsToMany(Vuelo,{through:'programas_x_vuelo', as:'programa_vuelo'});
  Vuelo.belongsToMany(Programa_vuelo,{through:'programas_x_vuelo'});
  //Un vuelo sigue una ruta
  Ruta.hasMany(Vuelo);
  Vuelo.belongsTo(Ruta);
  //Una ruta tiene muchos aeropuertos y un aeropuerto puede estar en varias rutas
  Ruta.belongsToMany(Aeropuerto,{through:'aeropuerto_x_ruta'});
  Aeropuerto.belongsToMany(Ruta,{through:'aeropuerto_x_ruta'});
  //Un aeropuerto tiene varias pistas
  Aeropuerto.hasMany(Pista);
  Pista.belongsTo(Aeropuerto);
  //un vuelo tiene un avion, un avion puede pertenecer a un vuelo
  Avion.hasMany(Vuelo);
  Vuelo.belongsTo(Avion);
  //Avion tiene muchos asientos
  Avion.hasMany(Asiento);
  Asiento.belongsTo(Asiento);
  //proveedor tiene varios aviones
  Proveedor.hasMany(Avion);
  //vuelo es tripulado por empleados
  Vuelo.belongsToMany(Empleado, {through:'tripula'});
  Empleado.belongsToMany(Vuelo, {through:'tripula'});
  //un empleado tiene un cargo
  Empleado.hasOne(Cargo);
  Cargo.belongsTo(Empleado);

  


  //CREAR TABLAS--------------
  sequelize.sync({ force: false })
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
    Pista,
    Asiento,
    Empleado,
    Proveedor,
    Equipaje,
    Mantenimiento,
    Tripulacion,
    Cargo

  }