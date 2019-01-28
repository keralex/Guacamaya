module.exports = (sequelize, type) => {
    return sequelize.define('customer', {
       customes_id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
       first_name: type.STRING
    })
}