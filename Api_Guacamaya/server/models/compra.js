module.exports = (sequelize, type) => {
    return sequelize.define('compra', {
       id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true,

        },
        total:{
            type: type.FLOAT,
            allowNull: false    
          }
  
    })
}