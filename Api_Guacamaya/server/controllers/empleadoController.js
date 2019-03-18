var empleado = require('../models/empleado');
const {Empleado} = require('../sequelize')



// Display list of all empleados.
exports.empleado_list = function(req, res) {
      const cust = Empleado.findAll().
        then(empleados => res.json(empleados))
        
};

// Display detail page for a specific Empleado.
exports.empleado_detail = function(req, res) {
    Empleado.findById(req.params.id).
        then(empleado => res.json({empleado}))
};


// Handle Empleado create on POST.
exports.empleado_create_post = function(req, res) {
    console.log("REQ",req.body);
    console.log("REQ",req.params);
     Empleado.create(req.body)
         .then(empleado => res.json({ user: empleado}))
    //res.send('NOT IMPLEMENTED: Empleado create POST');
};



// Handle Empleado delete on POST.
exports.empleado_delete_post = function(req, res) {
    Empleado.destroy({
        where: {
          id: req.params.id
        }
      });
};



// Handle Empleado update on POST.
exports.empleado_update_post = function(req, res) {
    Empleado.update(
        req.body,
        { where: { id: req.params.id } }
      )
    
    };