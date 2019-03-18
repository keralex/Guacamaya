var mantenimiento = require('../models/mantenimiento');
const {Mantenimiento} = require('../sequelize')



// Display list of all mantenimientos.
exports.mantenimiento_list = function(req, res) {
      const cust = Mantenimiento.findAll().
        then(mantenimientos => res.json(mantenimientos))
        
};

// Display detail page for a specific Mantenimiento.
exports.mantenimiento_detail = function(req, res) {
    Mantenimiento.findById(req.params.id).
        then(mantenimiento => res.json({mantenimiento}))
};


// Handle Mantenimiento create on POST.
exports.mantenimiento_create_post = function(req, res) {
    console.log("REQ",req.body);
    console.log("REQ",req.params);
     Mantenimiento.create(req.body)
         .then(mantenimiento => res.json({ user: mantenimiento}))
    //res.send('NOT IMPLEMENTED: Mantenimiento create POST');
};



// Handle Mantenimiento delete on POST.
exports.mantenimiento_delete_post = function(req, res) {
    Mantenimiento.destroy({
        where: {
          id: req.params.id
        }
      });
};



// Handle Mantenimiento update on POST.
exports.mantenimiento_update_post = function(req, res) {
    Mantenimiento.update(
        req.body,
        { where: { id: req.params.id } }
      )
    
    };