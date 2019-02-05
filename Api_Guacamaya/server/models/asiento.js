module.exports = (sequelize, type) => {
    return sequelize.define('asiento', {
       id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true,

        },
       num_asiento:{
         type: type.INTEGER,
         allowNull: false    
       },
       tipo:{
         type: type.STRING,
         allowNull: false    
       },
       ubicacion:{
         type: type.STRING,
         allowNull: false    
       }

  
    })
}