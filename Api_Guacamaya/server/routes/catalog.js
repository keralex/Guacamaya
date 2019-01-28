var express = require('express');
var router = express.Router();

// Require controller modules.
var customer_controller = require('../controllers/customerController');

/// customer ROUTES ///

// GET request for creating customer. NOTE This must come before route for id (i.e. display customer).
router.get('/customer/create', customer_controller.customer_create_get);

// POST request for creating customer.
router.post('/customer/create', customer_controller.customer_create_post);

// GET request to delete customer.
router.get('/customer/:id/delete', customer_controller.customer_delete_get);

// POST request to delete customer.
router.post('/customer/:id/delete', customer_controller.customer_delete_post);

// GET request to update customer.
router.get('/customer/:id/update', customer_controller.customer_update_get);

// POST request to update customer.
router.post('/customer/:id/update', customer_controller.customer_update_post);

// GET request for one customer.
router.get('/customer/:id', customer_controller.customer_detail);

// GET request for list of all customers.
router.get('/customers', customer_controller.customer_list);



module.exports = router;