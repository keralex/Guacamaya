var pasaje = require('../models/pasaje');
const {Pasaje} = require('../sequelize')



// Display list of all pasajes.
exports.pasaje_list = function(req, res) {
      const cust = Pasaje.findAll().
        then(pasajes => res.json(pasajes))
        
};

// Display detail page for a specific Pasaje.
exports.pasaje_detail = function(req, res) {
    Pasaje.findById(req.params.id).
        then(pasaje => res.json({pasaje}))
};


// Handle Pasaje create on POST.
exports.pasaje_create_post = function(req, res) {
    console.log("REQ",req.body);
    console.log("REQ",req.params);
     Pasaje.create(req.body)
         .then(pasaje => res.json({ user: pasaje}))
    //res.send('NOT IMPLEMENTED: Pasaje create POST');
};



// Handle Pasaje delete on POST.
exports.pasaje_delete_post = function(req, res) {
    Pasaje.destroy({
        where: {
          id: req.params.id
        }
      });
};



// Handle Pasaje update on POST.
exports.pasaje_update_post = function(req, res) {
    Pasaje.update(
        req.body,
        { where: { id: req.params.id } }
      )
    
    };