module.exports = (sequelize, type) => {
    return sequelize.define('pasajero', {
       pasajero_id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
       nombre: type.STRING,
       apellido: type.STRING,
       pasaporte:type.STRING,
       edad: type.INTEGER,
       sexo: type.STRING,
       pasaje:type.STRING

    })
}