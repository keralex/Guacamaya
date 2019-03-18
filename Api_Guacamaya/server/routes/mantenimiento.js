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