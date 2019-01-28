const express = require('express');
const app=express();
const morgan=require('morgan');
const bodyParser=require('body-parser');
const {Customer}= require('./sequelize');

//settings
app.set('port',process.env.PORT || 3000);

//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

//routes
app.use(require('./routes/catalog'));


//starting the server

app.listen(app.get('port'), () =>{
    console.log('server on port',app.get('port'));
});

app.get('/', function (req, res) {
    res.send('Hello World!');
  });





// create a user
app.post('/api/customers', (req, res) => {
    console.log("Req",req.body);
    Customer.create(req.body)
        .then(customer => res.json(customer))
})
// get all users
app.get('/api/customers', (req, res) => {
    Customer.findAll().then(customers => res.json(customers))
});