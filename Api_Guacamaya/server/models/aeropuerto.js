module.exports = (sequelize, type) => {
    return sequelize.define('aeropuerto', {
       id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: false,
          allowNull:false
        },
        pais: {
            type: type.STRING,
            allowNull: false    
          },
        ciudad:{
            type: type.STRING,
            allowNull: false    
          }
    })
}