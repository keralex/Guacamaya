var pasajero = require('../models/pasajero');
const {Pasajero} = require('../sequelize')



// Display list of all pasajeros.
exports.pasajero_list = function(req, res) {
      const cust = Pasajero.findAll().
        then(pasajeros => res.json(pasajeros))
        
};

// Display detail page for a specific Pasajero.
exports.pasajero_detail = function(req, res) {
    Pasajero.findById(req.params.id).
        then(pasajero => res.json({pasajero}))
};


// Handle Pasajero create on POST.
exports.pasajero_create_post = function(req, res) {
    console.log("REQ",req.body);
    console.log("REQ",req.params);
     Pasajero.create(req.body)
         .then(pasajero => res.json({ user: pasajero}))
    //res.send('NOT IMPLEMENTED: Pasajero create POST');
};



// Handle Pasajero delete on POST.
exports.pasajero_delete_post = function(req, res) {
    Pasajero.destroy({
        where: {
          pasaporte: req.params.id
        }
      });
   // res.send('NOT IMPLEMENTED: Pasajero delete POST');
};

// Handle Pasajero delete on POST.
exports.pasajero_delete_post2 = function(req, res) {
  res.send('NOT IMPLEMENTED: Pasajero delete Get');
};

// Handle Pasajero update on POST.
exports.pasajero_update_post = function(req, res) {
    Pasajero.update(
        req.body,
        { where: { pasaporte: req.params.id } }
      )
    .then(result =>
        res.send("Success")
    ).catch(err=>
        res.send("Error")
    )
    //res.send('NOT IMPLEMENTED: Pasajero update POST');
};