const express = require('express');
const bodyParser = require('body-parser');
var app= express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.set('view engine', 'ejs');

app.get('/',function(req,res){
    res.render('form');
})

app.post('/',function(req,res){
    console.log(req.body.name);
    console.log(req.body.age);
    
    res.render('form');
})

app.listen(3000,(err) =>{
    if(err) throw err;
    else
    console.log('Server is running on localhost:3000');
});
