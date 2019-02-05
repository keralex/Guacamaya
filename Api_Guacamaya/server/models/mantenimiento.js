module.exports = (sequelize, type) => {
    return sequelize.define('mantenimiento', {
       id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true,

        },
        duracion:type.TIME,
        tipo:type.STRING
  
    })
}