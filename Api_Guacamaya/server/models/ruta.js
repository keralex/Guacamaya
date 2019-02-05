module.exports = (sequelize, type) => {
    return sequelize.define('ruta', {
       id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true,

        },
        precio_base:type.FLOAT,
        distancia:type.FLOAT
  
    })
}