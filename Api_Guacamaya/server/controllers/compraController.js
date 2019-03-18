var compra = require('../models/compra');
const {Compra} = require('../sequelize')



// Display list of all compras.
exports.compra_list = function(req, res) {
      const cust = Compra.findAll().
        then(compras => res.json(compras))
        
};

// Display detail page for a specific Compra.
exports.compra_detail = function(req, res) {
    Compra.findById(req.params.id).
        then(compra => res.json({compra}))
};


// Handle Compra create on POST.
exports.compra_create_post = function(req, res) {
    console.log("REQ",req.body);
    console.log("REQ",req.params);
     Compra.create(req.body)
         .then(compra => res.json({ user: compra}))
    //res.send('NOT IMPLEMENTED: Compra create POST');
};



// Handle Compra delete on POST.
exports.compra_delete_post = function(req, res) {
    Compra.destroy({
        where: {
          id: req.params.id
        }
      });
};



// Handle Compra update on POST.
exports.compra_update_post = function(req, res) {
    Compra.update(
        req.body,
        { where: { id: req.params.id } }
      )
    
    };