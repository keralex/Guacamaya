module.exports = (sequelize, type) => {
    return sequelize.define('avion', {
       id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true,

        },
        
        modelo:type.STRING,
        fabricante:type.STRING,
        estado:type.STRING,
        cant_asientos_VIP:type.INTEGER,
        cant_asientos_turista:type.INTEGER,
        peso_vacio:type.FLOAT,
        peso_max:type.FLOAT,
        equipaje_max: type.FLOAT,
        cabina_max:type.INTEGER,
        combustible_tipo:type.STRING,
        combustible_cant:type.FLOAT,
        dist_despegue:type.FLOAT,
        dist_aterrizaje:type.FLOAT,
        velocidad_max:type.FLOAT,
        velocidad_crucero:type.FLOAT,
        cant_banos:type.INTEGER,
        cant_salidas_Emergencia:type.INTEGER,
        asiento_tipo:type.STRING,
        internet:type.BOOLEAN,
        television:type.BOOLEAN,
        avion_alquilado:type.BOOLEAN




    })
}