module.exports = (sequelize, type) => {
    return sequelize.define('programa_vuelo', {
       id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true,

        },
        origen:type.STRING,
        destino:type.STRING,
        fecha_salida:DATEONLY,
        fecha_llegada:DATEONLY,
        hora_salida:TIME,
        hora_llegada:TIME,
        posee_escala:type.BOOLEAN
  
    })
}