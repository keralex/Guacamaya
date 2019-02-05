module.exports = (sequelize, type) => {
    return sequelize.define('aeropuerto', {
       id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: false,
        },
        pais:type.STRING,
        ciudad:type.STRING
        
    })
}