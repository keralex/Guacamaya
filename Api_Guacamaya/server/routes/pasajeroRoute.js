var express = require('express');
var router = express.Router();

// Require controller modules.
var pasajero_controller = require('../controllers/pasajeroController');


//pasajeros routes////////////

// POST request for creating pasajero.
router.post('/pasajero/create', pasajero_controller.pasajero_create_post);

// POST request to delete pasajero.
router.post('/pasajero/:id/delete', pasajero_controller.pasajero_delete_post);
router.get('/pasajero/:id/delete', pasajero_controller.pasajero_delete_post2);


// POST request to update pasajero.
router.post('/pasajero/:id/update', pasajero_controller.pasajero_update_post);

// GET request for one pasajero.
router.get('/pasajero/:id', pasajero_controller.pasajero_detail);

// GET request for list of all customers.
router.get('/pasajero', pasajero_controller.pasajero_list);


module.exports = router;