'use strict';
module.exports = (sequelize, type) => {
    var pasaje=sequelize.define('pasaje', {
       id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true,

        },
       precio_total: {
         type: type.FLOAT,
         allowNull: false    
       },
       categoria:{
         type: type.STRING,
         allowNull: false    
       },
       programa_vuelo_id:{
         type:type.INTEGER,
         allowNull:false
       }
  

    },{});
    pasaje.associate=function(models){
     models.pasaje.belongsTo(models.programa_vuelo,{
          foreignKey:'programa_vuelo_id',
          targetKey:'id'
      })
    };  
    return pasaje;
};
