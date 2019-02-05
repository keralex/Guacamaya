module.exports = (sequelize, type) => {
    return sequelize.define('empleado', {
       cedula: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: false,

        },
        nombre:type.STRING,
        apellido:type.STRING,
        edad:type.INTEGER,
        sexo:type.STRING,

  
    })
}