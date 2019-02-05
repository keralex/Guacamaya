module.exports = (sequelize, type) => {
    return sequelize.define('avion', {
       id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true,

        },
        
        modelo: {
            type: type.STRING,
            allowNull: false    
          },
        fabricante: {
            type: type.STRING,
            allowNull: false    
          },
        estado: {
            type: type.STRING,
            allowNull: false    
          },
        cant_asientos_VIP:
        {
            type:type.INTEGER,
            allowNull: false    
          },
        cant_asientos_turista: {
            type:type.INTEGER,
            allowNull: false    
          },
        peso_vacio:{
            type: type.FLOAT,
            allowNull: false    
          },
        peso_max:{
            type: type.FLOAT,
            allowNull: false    
          },
        equipaje_max: {
            type: type.FLOAT,
            allowNull: false    
          },
        cabina_max: {
            type:type.INTEGER,
            allowNull: false    
          },
        combustible_tipo:{
            type: type.STRING,
            allowNull: false    
          },
        combustible_cant:{
            type: type.FLOAT,
            allowNull: false    
          },
        dist_despegue:{
            type: type.FLOAT,
            allowNull: false    
          },
        dist_aterrizaje:{
            type: type.FLOAT,
            allowNull: false    
          },
        velocidad_max:{
            type: type.FLOAT,
            allowNull: false    
          },
        velocidad_crucero:{
            type: type.FLOAT,
            allowNull: false    
          },
        cant_banos: {
            type:type.INTEGER,
            allowNull: false    
          },
        cant_salidas_Emergencia: {
            type:type.INTEGER,
            allowNull: false    
          },
        asiento_tipo: {
            type: type.STRING,
            allowNull: false    
          },
        internet:{
            type: type.BOOLEAN,
            allowNull: false    
          },
        television:{
            type: type.BOOLEAN,
            allowNull: false    
          },
        avion_alquilado:{
            type: type.BOOLEAN,
            allowNull: false    
          }




    })
}