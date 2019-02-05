module.exports = (sequelize, type) => {
    return sequelize.define('vuelo', {
       id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true,

        },
        duracion_aprox:type.INTEGER
  
    })
}