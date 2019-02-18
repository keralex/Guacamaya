module.exports = (sequelize, type) => {
    return sequelize.define('cargo', {
       id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true,

        },
        nombre:{
            type: type.STRING,
            allowNull: false    
          },
        sueldo:{
            type: type.FLOAT,
            allowNull: false    
          }
  
    })
}