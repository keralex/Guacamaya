module.exports = (sequelize, type) => {
    return sequelize.define('customer', {
       customer_id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
       first_name: type.STRING
    })
}