var ruta = require('../models/ruta');
const {Ruta} = require('../sequelize')



// Display list of all rutas.
exports.ruta_list = function(req, res) {
      const cust = Ruta.findAll().
        then(rutas => res.json(rutas))
        
};

// Display detail page for a specific Ruta.
exports.ruta_detail = function(req, res) {
    Ruta.findById(req.params.id).
        then(ruta => res.json({ruta}))
};


// Handle Ruta create on POST.
exports.ruta_create_post = function(req, res) {
    console.log("REQ",req.body);
    console.log("REQ",req.params);
     Ruta.create(req.body)
         .then(ruta => res.json({ user: ruta}))
    //res.send('NOT IMPLEMENTED: Ruta create POST');
};



// Handle Ruta delete on POST.
exports.ruta_delete_post = function(req, res) {
    Ruta.destroy({
        where: {
          id: req.params.id
        }
      });
};



// Handle Ruta update on POST.
exports.ruta_update_post = function(req, res) {
    Ruta.update(
        req.body,
        { where: { id: req.params.id } }
      )
    
    };