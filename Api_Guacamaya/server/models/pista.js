module.exports = (sequelize, type) => {
    return sequelize.define('pista', {
       id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true,

        },
        distancia:{
            type: type.FLOAT,
            allowNull: false    
          },
          IATA:{
            type: type.STRING,
            allowNull: false    
          },
    })
}