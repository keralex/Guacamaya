var pista = require('../models/pista');
const {Pista} = require('../sequelize')

// Display list of all pistas.
exports.pista_list = function(req, res) {
      const cust = Pista.findAll().
        then(pistas => res.json(pistas))
};

// Display detail page for a specific Pista.
exports.pista_detail = function(req, res) {
    Pista.findById(req.params.id).
        then(pista => res.json({pista}))
};

// Handle Pista create on POST.
exports.pista_create_post = function(req, res) {
    console.log("REQ",req.body);
    console.log("REQ",req.params);
     Pista.create(req.body)
         .then(pista => res.json({ user: pista}))
    //res.send('NOT IMPLEMENTED: Pista create POST');
};

// Handle Pista delete on POST.
exports.pista_delete_post = function(req, res) {
    Pista.destroy({
        where: {
          id: req.params.id
        }
      });
};

// Handle Pista update on POST.
exports.pista_update_post = function(req, res) {
    Pista.update(
        req.body,
        { where: { id: req.params.id } }
      )
    
    };