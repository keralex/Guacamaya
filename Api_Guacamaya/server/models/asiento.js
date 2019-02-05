module.exports = (sequelize, type) => {
    return sequelize.define('asiento', {
       id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true,

        },
       num_asiento:type.INTEGER,
       tipo:type.INTEGER,
       ubicacion:type.INTEGER

  
    })
}