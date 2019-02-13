var programa_vuelo = require('../models/programa_vuelo');
const {Programa_vuelo} = require('../sequelize')



// Display list of all programa_vuelos.
exports.programa_vuelo_list = function(req, res) {
      const cust = Programa_vuelo.findAll().
        then(programa_vuelos => res.json(programa_vuelos))
        
};

// Display detail page for a specific Programa_vuelo.
exports.programa_vuelo_detail = function(req, res) {
    Programa_vuelo.findById(req.params.id).
        then(programa_vuelo => res.json({ user: programa_vuelo}))
    //res.send('NOT IMPLEMENTED: Programa_vuelo detail: ' + req.params.id);
};


// Handle Programa_vuelo create on POST.
exports.programa_vuelo_create_post = function(req, res) {
    console.log("REQ",req.body);
    console.log("REQ",req.params);
     Programa_vuelo.create(req.body)
         .then(programa_vuelo => res.json({ user: programa_vuelo}))
    //res.send('NOT IMPLEMENTED: Programa_vuelo create POST');
};



// Handle Programa_vuelo delete on POST.
exports.programa_vuelo_delete_post = function(req, res) {
    Programa_vuelo.destroy({
        where: {
          id: req.params.id
        }
      });
   // res.send('NOT IMPLEMENTED: Programa_vuelo delete POST');
};



// Handle Programa_vuelo update on POST.
exports.programa_vuelo_update_post = function(req, res) {
    Programa_vuelo.update(
        req.body,
        { where: { id: req.params.id } }
      )
    .then(result =>
        res.send("Success")
    ).catch(err=>
        res.send("Error")
    )
    //res.send('NOT IMPLEMENTED: Programa_vuelo update POST');
};