module.exports = (sequelize, type) => {
    return sequelize.define('ruta', {
       id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true,

        },
        precio_base:{
            type: type.FLOAT,
            allowNull: false    
          },
        distancia:{
            type: type.FLOAT,
            allowNull: false    
          } ,
          duracion_aprox:{
              type: type.TIME,
              allowNull: false    
            },
          IATA1:{
                type: type.STRING,
                allowNull: false    
              },
           IATA2:{
                  type: type.STRING,
                  allowNull: false    
                }
  
    })
}