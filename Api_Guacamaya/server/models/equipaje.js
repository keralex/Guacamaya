module.exports = (sequelize, type) => {
    return sequelize.define('equipaje', {
       id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true,

        },
        peso_kg:type.FLOAT,
        tipo:type.STRING



        
  
    })
}