module.exports = (sequelize, type) => {
    return sequelize.define('tripulacion', {
       id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true,

        },
  
    })
}