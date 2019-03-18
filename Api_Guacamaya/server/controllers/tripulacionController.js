var tripulacion = require('../models/tripulacion');
const {Tripulacion} = require('../sequelize')



// Display list of all tripulacions.
exports.tripulacion_list = function(req, res) {
      const cust = Tripulacion.findAll().
        then(tripulacions => res.json(tripulacions))
        
};

// Display detail page for a specific Tripulacion.
exports.tripulacion_detail = function(req, res) {
    Tripulacion.findById(req.params.id).
        then(tripulacion => res.json({tripulacion}))
};


// Handle Tripulacion create on POST.
exports.tripulacion_create_post = function(req, res) {
    console.log("REQ",req.body);
    console.log("REQ",req.params);
     Tripulacion.create(req.body)
         .then(tripulacion => res.json({ user: tripulacion}))
    //res.send('NOT IMPLEMENTED: Tripulacion create POST');
};



// Handle Tripulacion delete on POST.
exports.tripulacion_delete_post = function(req, res) {
    Tripulacion.destroy({
        where: {
          id: req.params.id
        }
      });
};



// Handle Tripulacion update on POST.
exports.tripulacion_update_post = function(req, res) {
    Tripulacion.update(
        req.body,
        { where: { id: req.params.id } }
      )
    
    };