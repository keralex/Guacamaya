
module.exports = (sequelize, type) => {
    var vuelo=sequelize.define('vuelo', {
       id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true,

        },
        duracion_aprox:{
            type: type.TIME,
            allowNull: false    
          },
          ruta_id:{
              type:type.INTEGER,
              allowNull:false
          },
          avion_id:{
              type:type.INTEGER,
              allowNull:false
          }
  
    },{});
    vuelo.associate=function(models){
        models.vuelo.belongsTo(models.avion,{
             foreignKey:'avion_id',
             targetKey:'id'
         });
         models.vuelo.belongsTo(models.ruta,{
            foreignKey:'ruta_id',
            targetKey:'id'
        });
       };  

}