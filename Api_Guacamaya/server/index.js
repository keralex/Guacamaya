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

//routes

//starting the server

app.listen(app.get('port'), () =>{
    console.log('server on port',app.get('port'));
});