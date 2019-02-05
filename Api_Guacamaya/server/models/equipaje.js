module.exports = (sequelize, type) => {
    return sequelize.define('equipaje', {
       id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true,

        },
        peso_kg:{
            type: type.FLOAT,
            allowNull: false    
          },
        tipo:{
            type: type.STRING,
            allowNull: false    
          }



        
  
    })
}