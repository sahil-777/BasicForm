var connection = require('./../config.js');


module.exports = function (){
connection.query('CREATE TABLE IF NOT EXISTS `formInfo` (`id` INT(11) NOT NULL AUTO_INCREMENT,`name` VARCHAR(255) NOT NULL,`age` INT(11) NOT NULL,PRIMARY KEY (`id`)) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1',function (err,result){
    if(err){console.log('Table creation failed!'); throw err};
    console.log('FormInfo Table created!');
   }
)};

 