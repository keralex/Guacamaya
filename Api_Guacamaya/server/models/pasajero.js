module.exports = (sequelize, type) => {
    return sequelize.define('pasajero', {
       pasaporte: {
          type: type.STRING,
          primaryKey: true,
          autoIncrement: false,

        },
       nombre: type.STRING,
       apellido: type.STRING,
       edad: type.INTEGER,
       sexo: type.STRING,
       cant_maletas:type.INTEGER
    })
}