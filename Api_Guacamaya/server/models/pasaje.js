module.exports = (sequelize, type) => {
    return sequelize.define('pasaje', {
       id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true,

        },
       precio_total: type.FLOAT,
       categoria: type.STRING,
  
    })
}