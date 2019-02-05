module.exports = (sequelize, type) => {
    return sequelize.define('proveedor', {
       id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true,

        },
        nombre:type.STRING,
        tiempo_respuesta:type.TIME,
        precio_x_distancia:type.FLOAT
  
    })
}