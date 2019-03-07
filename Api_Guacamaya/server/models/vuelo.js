
module.exports = (sequelize, type) => {
    return sequelize.define('vuelo', {
       id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true,

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