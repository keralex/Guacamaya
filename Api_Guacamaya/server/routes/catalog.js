var express = require('express');
var router = express.Router();
var programa_vuelo_controller = require('../controllers/programa_vueloController');
var vuelo_controller=require('../controllers/vueloController');

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





module.exports = router;