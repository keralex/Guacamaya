module.exports = (sequelize, type) => {
    return sequelize.define('pasajero', {
       pasaporte: {
          type: type.STRING,
          primaryKey: true,
          autoIncrement: false,
          allowNull:false

        },
       nombre: {
         type: type.STRING,
         allowNull: false    
       },
       apellido: {
         type: type.STRING,
         allowNull: false    
       },
       edad: {
         type:type.INTEGER,
         allowNull: false    
       },
       sexo: {
         type: type.STRING,
         allowNull: false    
       },
       cant_maletas:{
         type:type.INTEGER,
         allowNull: false    
       }
    })
}