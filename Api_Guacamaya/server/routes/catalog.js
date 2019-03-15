var express = require('express');
var router = express.Router();
var programa_vuelo_controller = require('../controllers/programa_vueloController');
var vuelo_controller=require('../controllers/vueloController');
var ruta_controller=require('../controllers/rutaController');
var avion_controller=require('../controllers/avionController');
var aeropuerto_controller=require('../controllers/aeropuertoController');
var pista_controller=require('../controllers/pistaController');

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
// POST request for creating pista.
router.post('/pista/create', pista_controller.pista_create_post);
// POST request to delete pista.
router.post('/pista/:id/delete', pista_controller.pista_delete_post);
// POST request to update pista.
router.post('/pista/:id/update', pista_controller.pista_update_post);
// GET request for onepista.
router.get('/pista/:id', pista_controller.pista_detail);
// GET request for list of all customers.
router.get('/pista', pista_controller.pista_list);

module.exports = router;