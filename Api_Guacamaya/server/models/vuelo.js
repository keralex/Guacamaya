
module.exports = (sequelize, type) => {
    return sequelize.define('vuelo', {
       id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true,

        },
     
          avion_id:{
              type:type.INTEGER,
              allowNull:false
          }
  
    }); 

}