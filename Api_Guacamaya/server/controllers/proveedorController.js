var proveedor = require('../models/proveedor');
const {Proveedor} = require('../sequelize')



// Display list of all proveedors.
exports.proveedor_list = function(req, res) {
      const cust = Proveedor.findAll().
        then(proveedors => res.json(proveedors))
        
};

// Display detail page for a specific Proveedor.
exports.proveedor_detail = function(req, res) {
    Proveedor.findById(req.params.id).
        then(proveedor => res.json({proveedor}))
};


// Handle Proveedor create on POST.
exports.proveedor_create_post = function(req, res) {
    console.log("REQ",req.body);
    console.log("REQ",req.params);
     Proveedor.create(req.body)
         .then(proveedor => res.json({ user: proveedor}))
    //res.send('NOT IMPLEMENTED: Proveedor create POST');
};



// Handle Proveedor delete on POST.
exports.proveedor_delete_post = function(req, res) {
    Proveedor.destroy({
        where: {
          id: req.params.id
        }
      });
};



// Handle Proveedor update on POST.
exports.proveedor_update_post = function(req, res) {
    Proveedor.update(
        req.body,
        { where: { id: req.params.id } }
      )
    
    };