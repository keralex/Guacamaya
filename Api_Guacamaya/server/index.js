var express = require('express');
var app=express();
var mysql=require('mysql2')
const morgan=require('morgan');
var catalogRouter = require('./routes/catalog');
var config = require('./config/config');
const bodyParser=require('body-parser');
const {Customer}= require('./sequelize');
const cors=require('cors');

//settings
app.set('port',process.env.PORT || 3002);

//middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin:'http://localhost:4200'}));


//routes
app.use(require('./routes/catalog'));


//starting the server

var connection = mysql.createConnection({
    host     : config.host,
    port     : config.sql_port,
    user     : config.username,
    password : config.password
  });

  
connection.connect();
  

app.listen(app.get('port'), () =>{
    console.log('server on port',app.get('port'));
});

app.get('/', function (req, res) {
    res.send('Hello World!');
  });

  
let timeMiddleware = function (req, res, next) {
    console.log('Time:', Date.now());
    next();
  }
  
app.use('/catalog', timeMiddleware, catalogRouter); 

app.listen(config.port, function () {
    console.log('Example app listening on port 3000!');
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

app.get('/query', function (req, res) {
    let response;
    connection.query('SELECT * FROM sakila.customer', function(err, rows, fields) {
        if (err) throw err;
        console.log('The solution is: ', rows[0]);
        response = rows[0]
      });
    res.send(JSON.stringify(response));
});