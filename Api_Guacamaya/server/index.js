var express = require('express');
var app=express();
var mysql=require('mysql2')
var catalogRouter = require('./routes/catalog');
var config = require('./config/config');
const bodyParser=require('body-parser');
const cors=require('cors');

//settings
app.set('port',process.env.PORT || 3002);
app.listen(app.get('port'), () =>{
    console.log('server on port',app.get('port'));
});



//middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
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
  
  let timeMiddleware = function (req, res, next) {
    console.log('Time:', Date.now());
    next();
  }
  
  
app.use('/catalog', timeMiddleware, catalogRouter); 



