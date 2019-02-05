var express = require('express');
var app=express();
var mysql=require('mysql2')
const morgan=require('morgan');
var catalogRouter = require('./routes/pasajeroRoute');
var config = require('./config/config');
const bodyParser=require('body-parser');
const {Customer,Pasajero}= require('./sequelize');
const cors=require('cors');

//settings
app.set('port',process.env.PORT || 3002);
app.listen(app.get('port'), () =>{
    console.log('server on port',app.get('port'));
});
app.listen(config.port, function () {
    console.log('Example app listening on port!',app.get('port'));
  });
//middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin:'http://localhost:4200'}));
  



//routes
app.use(require('./routes/pasajeroRoute'));


//starting the server

var connection = mysql.createConnection({
    host     : config.host,
    port     : config.sql_port,
    user     : config.username,
    password : config.password
  });

  
connection.connect();
  
  let timeMiddleware = function (req, res, next) {
    console.log('Time:', Date.now());
    next();
  }
  
app.use('/catalog', timeMiddleware, catalogRouter); 



//Pasajeros
// create a pasajero
app.post('/api/pasajeros', (req, res) => {
    console.log("Req",req.body);
    Pasajero.create(req.body)
        .then(pasajero => res.json(pasajero))
});
// get all users
app.get('/api/pasajeros', (req, res) => {
    Pasajero.findAll().then(pasajeros => res.json(pasajeros))
});

app.get('/query', function (req, res) {
    let response;
    connection.query('SELECT * FROM guacamaya.pasajero', function(err, rows, fields) {
        if (err) throw err;
        console.log('The solution is: ', rows[0]);
        response = rows[0]
      });
    res.send(JSON.stringify(response));
});