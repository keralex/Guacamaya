var cargo = require('../models/cargo');
const {Cargo} = require('../sequelize')



// Display list of all cargos.
exports.cargo_list = function(req, res) {
      const cust = Cargo.findAll().
        then(cargos => res.json(cargos))
        
};

// Display detail page for a specific Cargo.
exports.cargo_detail = function(req, res) {
    Cargo.findById(req.params.id).
        then(cargo => res.json({cargo}))
};


// Handle Cargo create on POST.
exports.cargo_create_post = function(req, res) {
    console.log("REQ",req.body);
    console.log("REQ",req.params);
     Cargo.create(req.body)
         .then(cargo => res.json({ user: cargo}))
    //res.send('NOT IMPLEMENTED: Cargo create POST');
};



// Handle Cargo delete on POST.
exports.cargo_delete_post = function(req, res) {
    Cargo.destroy({
        where: {
          id: req.params.id
        }
      });
};



// Handle Cargo update on POST.
exports.cargo_update_post = function(req, res) {
    Cargo.update(
        req.body,
        { where: { id: req.params.id } }
      )
    
    };