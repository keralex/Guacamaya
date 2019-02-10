'use strict';
module.exports = (sequelize, type) => {
    return sequelize.define('pasaje', {
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


    } )
};
