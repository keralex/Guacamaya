var asiento = require('../models/asiento');
const {Asiento} = require('../sequelize')



// Display list of all asientos.
exports.asiento_list = function(req, res) {
      const cust = Asiento.findAll().
        then(asientos => res.json(asientos))
        
};

// Display detail page for a specific Asiento.
exports.asiento_detail = function(req, res) {
    Asiento.findById(req.params.id).
        then(asiento => res.json({asiento}))
};


// Handle Asiento create on POST.
exports.asiento_create_post = function(req, res) {
    console.log("REQ",req.body);
    console.log("REQ",req.params);
     Asiento.create(req.body)
         .then(asiento => res.json({ user: asiento}))
    //res.send('NOT IMPLEMENTED: Asiento create POST');
};



// Handle Asiento delete on POST.
exports.asiento_delete_post = function(req, res) {
    Asiento.destroy({
        where: {
          id: req.params.id
        }
      });
};



// Handle Asiento update on POST.
exports.asiento_update_post = function(req, res) {
    Asiento.update(
        req.body,
        { where: { id: req.params.id } }
      )
    
    };