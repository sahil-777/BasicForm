const express = require('express');
const connection = require('./../config.js');
const router = express.Router();

var createTable = require('./../model/formInfo.js');

router.get('/',function(req,res){
    createTable();
    res.render('form');
})

router.post('/',function(req,res){
    var data ={
        "name":req.body.name,
        "age":req.body.age
    };
    connection.query('INSERT INTO forminfo SET ?',data);
    res.redirect('/showinfo');
})

router.get('/showinfo',function(req,res){
    connection.query('SELECT * FROM forminfo',function(err,data){
        if(err) throw err;
        res.render('showInfo',{data:data}); 
    })
})

module.exports = router;


