var express = require('express');
var router = express.Router();
var programa_vuelo_controller = require('../controllers/programa_vueloController');


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
router.delete('/programa_vuelo/:id/delete', programa_vuelo_controller.programa_vuelo_delete_post);
// POST request to update programa_vuelo.
router.put('/programa_vuelo/:id/update', programa_vuelo_controller.programa_vuelo_update_post);
// GET request for one programa_vuelo.
router.get('/programa_vuelo/:id', programa_vuelo_controller.programa_vuelo_detail);
// GET request for list of all customers.
router.get('/programa_vuelo', programa_vuelo_controller.programa_vuelo_list);





module.exports = router;