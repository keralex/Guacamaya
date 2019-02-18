module.exports = (sequelize, type) => {
    return sequelize.define('mantenimiento', {
       id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true,

        },
        duracion:{
            type: type.TIME,
            allowNull: false    
          },
        tipo:{
            type: type.STRING,
            allowNull: false    
          }
  
    })
}