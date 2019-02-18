module.exports = (sequelize, type) => {
    return sequelize.define('proveedor', {
       id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true,

        },
        nombre:type.STRING,
        tiempo_respuesta:{
            type: type.TIME,
            allowNull: false    
          },
        precio_x_distancia:{
            type: type.FLOAT,
            allowNull: false    
          }
  
    })
}