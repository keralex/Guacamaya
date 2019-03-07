
module.exports = (sequelize, type) => {
    return sequelize.define('vuelo', {
       id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true,

        },
        duracion_aprox:{
            type: type.TIME,
            allowNull: false    
          },
          ruta_id:{
              type:type.INTEGER,
              allowNull:false
          },
          avion_id:{
              type:type.INTEGER,
              allowNull:false
          }
  
    }); 

}