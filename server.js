const express = require('express');
const bodyParser = require('body-parser');
var app= express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.set('view engine', 'ejs');
const PORT =process.env.PORT || 3000 ;

//----------------------------
const form = require('./controller/form.js');
app.use('/', form);

//var connection = require('./config.js');

/*---------------------------------------------

var createTable = require('./model/formInfo.js');
app.get('/',function(req,res){
    createTable();
    res.render('form');
})

app.post('/',function(req,res){
    var data ={
        "name":req.body.name,
        "age":req.body.age
    };
    connection.query('INSERT INTO forminfo SET ?',data);
    res.redirect('/showinfo');
})

app.get('/showinfo',function(req,res){
    connection.query('SELECT * FROM forminfo',function(err,data){
        if(err) throw err;
        res.render('showInfo',{data:data}); 
    })
})

//---------------------------------------------
*/

app.listen(PORT,(err) =>{
    if(err) throw err;
    console.log('Server is running on localhost:'+PORT);
});
