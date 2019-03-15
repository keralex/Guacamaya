var avion = require('../models/avion');
const {Avion} = require('../sequelize')



// Display list of all avions.
exports.avion_list = function(req, res) {
      const cust = Avion.findAll().
        then(avions => res.json(avions))
        
};

// Display detail page for a specific Avion.
exports.avion_detail = function(req, res) {
    Avion.findById(req.params.id).
        then(avion => res.json({avion}))
};


// Handle Avion create on POST.
exports.avion_create_post = function(req, res) {
    console.log("REQ",req.body);
    console.log("REQ",req.params);
     Avion.create(req.body)
         .then(avion => res.json({ user: avion}))
    //res.send('NOT IMPLEMENTED: Avion create POST');
};



// Handle Avion delete on POST.
exports.avion_delete_post = function(req, res) {
    Avion.destroy({
        where: {
          id: req.params.id
        }
      });
};



// Handle Avion update on POST.
exports.avion_update_post = function(req, res) {
    Avion.update(
        req.body,
        { where: { id: req.params.id } }
      )
    
    };