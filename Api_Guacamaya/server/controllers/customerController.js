var customer = require('../models/customer');
const { Customer, Blog, Tag } = require('../sequelize')
// Display list of all Customers.
exports.customer_list = function(req, res) {
      const cust = Customer.findAll().
        then(customers => res.json(customers))
        
};

// Display detail page for a specific Customer.
exports.customer_detail = function(req, res) {
    Customer.findById(req.params.id).
        then(customer => res.render('customer',{ user: customer}))
    //res.send('NOT IMPLEMENTED: Customer detail: ' + req.params.id);
};

// Display Customer create form on GET.
exports.customer_create_get = function(req, res) {
    res.render("register");
   //res.send('NOT IMPLEMENTED: Customer create GET');
};

// Handle Customer create on POST.
exports.customer_create_post = function(req, res) {
    console.log("REQ",req.body);
    console.log("REQ",req.params);
     Customer.create(req.body)
         .then(customer => res.render('customer',{ user: customer}))
    //res.send('NOT IMPLEMENTED: Customer create POST');
};

// Display Customer delete form on GET.
exports.customer_delete_get = function(req, res) {
    Customer.destroy({
        where: {
          id: req.params.id
        }
    });
   // res.send('NOT IMPLEMENTED: Customer delete GET');
};

// Handle Customer delete on POST.
exports.customer_delete_post = function(req, res) {
    Customer.destroy({
        where: {
          id: req.params.id
        }
      });
   // res.send('NOT IMPLEMENTED: Customer delete POST');
};

// Display Customer update form on GET.
exports.customer_update_get = function(req, res) {
    Customer.update(
        { name: 'Gaboiaf' },
        { where: { id: req.params.id } }
      )
        .then(result =>
          res.json(result)
        )
    //res.send('NOT IMPLEMENTED: Customer update GET');
};

// Handle Customer update on POST.
exports.customer_update_post = function(req, res) {
    Customer.update(
        req.body,
        { where: { id: req.params.id } }
      )
    .then(result =>
        res.send("Success")
    ).catch(err=>
        res.send("Error")
    )
    //res.send('NOT IMPLEMENTED: Customer update POST');
};