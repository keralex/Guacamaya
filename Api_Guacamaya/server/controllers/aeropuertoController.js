var aeropuerto = require('../models/aeropuerto');
const {Aeropuerto} = require('../sequelize')



// Display list of all aeropuertos.
exports.aeropuerto_list = function(req, res) {
      const cust = Aeropuerto.findAll().
        then(aeropuertos => res.json(aeropuertos))
        
};

// Display detail page for a specific Aeropuerto.
exports.aeropuerto_detail = function(req, res) {
    Aeropuerto.findById(req.params.id).
        then(aeropuerto => res.json({aeropuerto}))
};


// Handle Aeropuerto create on POST.
exports.aeropuerto_create_post = function(req, res) {
    console.log("REQ",req.body);
    console.log("REQ",req.params);
     Aeropuerto.create(req.body)
         .then(aeropuerto => res.json({ user: aeropuerto}))
    //res.send('NOT IMPLEMENTED: Aeropuerto create POST');
};



// Handle Aeropuerto delete on POST.
exports.aeropuerto_delete_post = function(req, res) {
    Aeropuerto.destroy({
        where: {
          IATA: req.params.id
        }
      });
};



// Handle Aeropuerto update on POST.
exports.aeropuerto_update_post = function(req, res) {
    Aeropuerto.update(
        req.body,
        { where: { IATA: req.params.id } }
      )
    
    };