module.exports = (sequelize, type) => {
    return sequelize.define('programa_vuelo', {
       id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true,

        },
       
        fecha_salida:{
            type: type.DATEONLY,
            allowNull: false    
          },
        fecha_llegada:{
            type: type.DATEONLY,
            allowNull: false    
          },
        hora_salida:{
            type: type.TIME,
            allowNull: false    
          },
        hora_llegada:{
            type: type.TIME,
            allowNull: false    
          },
        posee_escala:{
            type: type.BOOLEAN,
            allowNull: false    
          },

          origen:{
            type:type.STRING,
            allowNull:false
          },
          destino:{
            type:type.STRING,
            allowNull:false
          }
  
    })
}