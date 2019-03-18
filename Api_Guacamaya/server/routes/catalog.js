var express = require('express');
var router = express.Router();
var programa_vuelo_controller = require('../controllers/programa_vueloController');
var vuelo_controller=require('../controllers/vueloController');
var ruta_controller=require('../controllers/rutaController');
var avion_controller=require('../controllers/avionController');
var aeropuerto_controller=require('../controllers/aeropuertoController');
var equipaje_controller=require('../controllers/equipajeController');
var mantenimiento_controller=require('../controllers/mantenimientoController');
var pasaje_controller=require('../controllers/pasajeController');
var tripulacion_controller=require('../controllers/tripulacionController');
var proveedor_controller=require('../controllers/proveedorController');
var empleado_controller=require('../controllers/empleadoController');
var compra_controller=require('../controllers/compraController');
var cargo_controller=require('../controllers/cargoController');
var asiento_controller=require('../controllers/asientoController');



//PASAJEROS
// Require controller modules.
var pasajero_controller = require('../controllers/pasajeroController');
// POST request for creating pasajero.
router.post('/pasajero/create', pasajero_controller.pasajero_create_post);
// POST request to delete pasajero.
router.post('/pasajero/:id/delete', pasajero_controller.pasajero_delete_post);
// POST request to update pasajero.
router.post('/pasajero/:id/update', pasajero_controller.pasajero_update_post);
// GET request for one pasajero.
router.get('/pasajero/:id', pasajero_controller.pasajero_detail);
// GET request for list of all customers.
router.get('/pasajero', pasajero_controller.pasajero_list);


//PROGRAMA_VUELO

// Require controller modules.
// POST request for creating programa_vuelo.
router.post('/programa_vuelo/create', programa_vuelo_controller.programa_vuelo_create_post);
// POST request to delete programa_vuelo.
router.post('/programa_vuelo/:id/delete', programa_vuelo_controller.programa_vuelo_delete_post);
// POST request to update programa_vuelo.
router.post('/programa_vuelo/:id/update', programa_vuelo_controller.programa_vuelo_update_post);
// GET request for one programa_vuelo.
router.get('/programa_vuelo/:id', programa_vuelo_controller.programa_vuelo_detail);
// GET request for list of all customers.
router.get('/programa_vuelo', programa_vuelo_controller.programa_vuelo_list);

//VUELO

// Require controller modules.
// POST request for creating vuelo.
router.post('/vuelo/create', vuelo_controller.vuelo_create_post);
// POST request to delete vuelo.
router.post('/vuelo/:id/delete', vuelo_controller.vuelo_delete_post);
// POST request to update vuelo.
router.post('/vuelo/:id/update', vuelo_controller.vuelo_update_post);
// GET request for onevuelo.
router.get('/vuelo/:id', vuelo_controller.vuelo_detail);
// GET request for list of all customers.
router.get('/vuelo', vuelo_controller.vuelo_list);



//RUTA

// Require controller modules.
// POST request for creating ruta.
router.post('/ruta/create', ruta_controller.ruta_create_post);
// POST request to delete ruta.
router.post('/ruta/:id/delete', ruta_controller.ruta_delete_post);
// POST request to update ruta.
router.post('/ruta/:id/update', ruta_controller.ruta_update_post);
// GET request for oneruta.
router.get('/ruta/:id', ruta_controller.ruta_detail);
// GET request for list of all customers.
router.get('/ruta', ruta_controller.ruta_list);


//AVION

// Require controller modules.
// POST request for creating avion.
router.post('/avion/create', avion_controller.avion_create_post);
// POST request to delete avion.
router.post('/avion/:id/delete', avion_controller.avion_delete_post);
// POST request to update avion.
router.post('/avion/:id/update', avion_controller.avion_update_post);
// GET request for oneavion.
router.get('/avion/:id', avion_controller.avion_detail);
// GET request for list of all customers.
router.get('/avion', avion_controller.avion_list);



//AEROPUERTO

// Require controller modules.
// POST request for creating aeropuerto.
router.post('/aeropuerto/create', aeropuerto_controller.aeropuerto_create_post);
// POST request to delete aeropuerto.
router.post('/aeropuerto/:id/delete', aeropuerto_controller.aeropuerto_delete_post);
// POST request to update aeropuerto.
router.post('/aeropuerto/:id/update', aeropuerto_controller.aeropuerto_update_post);
// GET request for oneaeropuerto.
router.get('/aeropuerto/:id', aeropuerto_controller.aeropuerto_detail);
// GET request for list of all customers.
router.get('/aeropuerto', aeropuerto_controller.aeropuerto_list);



//PISTA

// Require controller modules.
// POST request for creating equipaje.
router.post('/equipaje/create', equipaje_controller.equipaje_create_post);
// POST request to delete equipaje.
router.post('/equipaje/:id/delete', equipaje_controller.equipaje_delete_post);
// POST request to update equipaje.
router.post('/equipaje/:id/update', equipaje_controller.equipaje_update_post);
// GET request for oneequipaje.
router.get('/equipaje/:id', equipaje_controller.equipaje_detail);
// GET request for list of all customers.
router.get('/equipaje', equipaje_controller.equipaje_list);

//EQUIPAJE

// Require controller modules.
// POST request for creating equipaje.
router.post('/equipaje/create', equipaje_controller.equipaje_create_post);
// POST request to delete equipaje.
router.post('/equipaje/:id/delete', equipaje_controller.equipaje_delete_post);
// POST request to update equipaje.
router.post('/equipaje/:id/update', equipaje_controller.equipaje_update_post);
// GET request for oneequipaje.
router.get('/equipaje/:id', equipaje_controller.equipaje_detail);
// GET request for list of all customers.
router.get('/equipaje', equipaje_controller.equipaje_list);

//MANTENIMIENTO

// Require controller modules.
// POST request for creating mantenimiento.
router.post('/mantenimiento/create', mantenimiento_controller.mantenimiento_create_post);
// POST request to delete mantenimiento.
router.post('/mantenimiento/:id/delete', mantenimiento_controller.mantenimiento_delete_post);
// POST request to update mantenimiento.
router.post('/mantenimiento/:id/update', mantenimiento_controller.mantenimiento_update_post);
// GET request for onemantenimiento.
router.get('/mantenimiento/:id', mantenimiento_controller.mantenimiento_detail);
// GET request for list of all customers.
router.get('/mantenimiento', mantenimiento_controller.mantenimiento_list);

//PASAJE

// Require controller modules.
// POST request for creating pasaje.
router.post('/pasaje/create', pasaje_controller.pasaje_create_post);
// POST request to delete pasaje.
router.post('/pasaje/:id/delete', pasaje_controller.pasaje_delete_post);
// POST request to update pasaje.
router.post('/pasaje/:id/update', pasaje_controller.pasaje_update_post);
// GET request for onepasaje.
router.get('/pasaje/:id', pasaje_controller.pasaje_detail);
// GET request for list of all customers.
router.get('/pasaje', pasaje_controller.pasaje_list);

//TRIPULACION

// Require controller modules.
// POST request for creating tripulacion.
router.post('/tripulacion/create', tripulacion_controller.tripulacion_create_post);
// POST request to delete tripulacion.
router.post('/tripulacion/:id/delete', tripulacion_controller.tripulacion_delete_post);
// POST request to update tripulacion.
router.post('/tripulacion/:id/update', tripulacion_controller.tripulacion_update_post);
// GET request for onetripulacion.
router.get('/tripulacion/:id', tripulacion_controller.tripulacion_detail);
// GET request for list of all customers.
router.get('/tripulacion', tripulacion_controller.tripulacion_list);

//PROVEEDOR

// Require controller modules.
// POST request for creating proveedor.
router.post('/proveedor/create', proveedor_controller.proveedor_create_post);
// POST request to delete proveedor.
router.post('/proveedor/:id/delete', proveedor_controller.proveedor_delete_post);
// POST request to update proveedor.
router.post('/proveedor/:id/update', proveedor_controller.proveedor_update_post);
// GET request for oneproveedor.
router.get('/proveedor/:id', proveedor_controller.proveedor_detail);
// GET request for list of all customers.
router.get('/proveedor', proveedor_controller.proveedor_list);

//EMPLEADO

// Require controller modules.
// POST request for creating empleado.
router.post('/empleado/create', empleado_controller.empleado_create_post);
// POST request to delete empleado.
router.post('/empleado/:id/delete', empleado_controller.empleado_delete_post);
// POST request to update empleado.
router.post('/empleado/:id/update', empleado_controller.empleado_update_post);
// GET request for oneempleado.
router.get('/empleado/:id', empleado_controller.empleado_detail);
// GET request for list of all customers.
router.get('/empleado', empleado_controller.empleado_list);

//COMPRA

// Require controller modules.
// POST request for creating compra.
router.post('/compra/create', compra_controller.compra_create_post);
// POST request to delete compra.
router.post('/compra/:id/delete', compra_controller.compra_delete_post);
// POST request to update compra.
router.post('/compra/:id/update', compra_controller.compra_update_post);
// GET request for onecompra.
router.get('/compra/:id', compra_controller.compra_detail);
// GET request for list of all customers.
router.get('/compra', compra_controller.compra_list);

//CARGO

// Require controller modules.
// POST request for creating cargo.
router.post('/cargo/create', cargo_controller.cargo_create_post);
// POST request to delete cargo.
router.post('/cargo/:id/delete', cargo_controller.cargo_delete_post);
// POST request to update cargo.
router.post('/cargo/:id/update', cargo_controller.cargo_update_post);
// GET request for onecargo.
router.get('/cargo/:id', cargo_controller.cargo_detail);
// GET request for list of all customers.
router.get('/cargo', cargo_controller.cargo_list);

//ASIENTO

// Require controller modules.
// POST request for creating asiento.
router.post('/asiento/create', asiento_controller.asiento_create_post);
// POST request to delete asiento.
router.post('/asiento/:id/delete', asiento_controller.asiento_delete_post);
// POST request to update asiento.
router.post('/asiento/:id/update', asiento_controller.asiento_update_post);
// GET request for oneasiento.
router.get('/asiento/:id', asiento_controller.asiento_detail);
// GET request for list of all customers.
router.get('/asiento', asiento_controller.asiento_list);





module.exports = router;