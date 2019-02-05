module.exports = (sequelize, type) => {
    return sequelize.define('cargo', {
       id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true,

        },
        nombre:type.STRING,
        sueldo:type.FLOAT
  
    })
}