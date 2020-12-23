const express = require('express');
const bodyParser = require('body-parser');
var app= express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.listen(3000,(err) =>{
    if(err) throw err;
    else
    console.log('Server is running on localhost:3000');
})
