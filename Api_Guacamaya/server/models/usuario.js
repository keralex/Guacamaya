module.exports = (sequelize, type) => {
    return sequelize.define('usuario', {
       id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true,

        },
        nombre:{
            type: type.STRING,
            allowNull: false    
          },
        password:{
            type: type.STRING,
            allowNull: false    
          },
        
  
    })
}