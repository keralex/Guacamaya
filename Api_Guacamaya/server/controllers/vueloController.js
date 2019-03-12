var vuelo = require('../models/vuelo');
const {Vuelo} = require('../sequelize')



// Display list of all vuelos.
exports.vuelo_list = function(req, res) {
      const cust = Vuelo.findAll().
        then(vuelos => res.json(vuelos))
        
};

// Display detail page for a specific Vuelo.
exports.vuelo_detail = function(req, res) {
    Vuelo.findById(req.params.id).
        then(vuelo => res.json({vuelo}))
};


// Handle Vuelo create on POST.
exports.vuelo_create_post = function(req, res) {
    console.log("REQ",req.body);
    console.log("REQ",req.params);
     Vuelo.create(req.body)
         .then(vuelo => res.json({ user: vuelo}))
    //res.send('NOT IMPLEMENTED: Vuelo create POST');
};



// Handle Vuelo delete on POST.
exports.vuelo_delete_post = function(req, res) {
    Vuelo.destroy({
        where: {
          id: req.params.id
        }
      });
};



// Handle Vuelo update on POST.
exports.vuelo_update_post = function(req, res) {
    Vuelo.update(
        req.body,
        { where: { id: req.params.id } }
      )
    
    };