const express = require('express');
const bodyParser = require('body-parser');
var app= express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.set('view engine', 'ejs');

var connection = require('./config.js');

app.get('/',function(req,res){
    res.render('form');
})

app.post('/',function(req,res){
    console.log(req.body.name);
    console.log(req.body.age);
    var data ={
        "name":req.body.name,
        "age":req.body.age
    };
    connection.query('INSERT INTO forminfo SET ?',data);
    res.render('form');
})

app.listen(3000,(err) =>{
    if(err) throw err;
    else
    console.log('Server is running on localhost:3000');
});
