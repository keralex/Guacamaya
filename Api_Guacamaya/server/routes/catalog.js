var express = require('express');
var router = express.Router();

// Require controller modules.
var pasajero_controller = require('../controllers/pasajeroController');



//pasajeros routes////////////

// GET request for creating pasajero. NOTE This must come before route for id (i.e. display customer).
router.get('/pasajero/create', pasajero_controller.pasajero_create_get);

// POST request for creating pasajero.
router.post('/pasajero/create', pasajero_controller.pasajero_create_post);

// GET request to delete pasajero.
router.get('/pasajero/:id/delete', pasajero_controller.pasajero_delete_get);

// POST request to delete pasajero.
router.post('/pasajero/:id/delete', pasajero_controller.pasajero_delete_post);

// GET request to update pasajero.
router.get('/pasajero/:id/update', pasajero_controller.pasajero_update_get);

// POST request to update pasajero.
router.post('/pasajero/:id/update', pasajero_controller.pasajero_update_post);

// GET request for one pasajero.
router.get('/pasajero/:id', pasajero_controller.pasajero_detail);

// GET request for list of all customers.
router.get('/pasajero', pasajero_controller.pasajero_list);


module.exports = router;