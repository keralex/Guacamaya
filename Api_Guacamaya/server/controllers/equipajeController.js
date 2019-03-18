var equipaje = require('../models/equipaje');
const {Equipaje} = require('../sequelize')



// Display list of all equipajes.
exports.equipaje_list = function(req, res) {
      const cust = Equipaje.findAll().
        then(equipajes => res.json(equipajes))
        
};

// Display detail page for a specific Equipaje.
exports.equipaje_detail = function(req, res) {
    Equipaje.findById(req.params.id).
        then(equipaje => res.json({equipaje}))
};


// Handle Equipaje create on POST.
exports.equipaje_create_post = function(req, res) {
    console.log("REQ",req.body);
    console.log("REQ",req.params);
     Equipaje.create(req.body)
         .then(equipaje => res.json({ user: equipaje}))
    //res.send('NOT IMPLEMENTED: Equipaje create POST');
};



// Handle Equipaje delete on POST.
exports.equipaje_delete_post = function(req, res) {
    Equipaje.destroy({
        where: {
          id: req.params.id
        }
      });
};



// Handle Equipaje update on POST.
exports.equipaje_update_post = function(req, res) {
    Equipaje.update(
        req.body,
        { where: { id: req.params.id } }
      )
    
    };