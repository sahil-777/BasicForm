var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Pass@1234',
  database : 'temp'
});
connection.connect(function(err){
  if(err){console.log('Database connection failed!'); throw err};

  connection.query('CREATE TABLE IF NOT EXISTS `formInfo` (`id` INT(11) NOT NULL AUTO_INCREMENT,`name` VARCHAR(255) NOT NULL,`age` INT(11) NOT NULL,PRIMARY KEY (`id`)) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1',function (err,result){
      if(err){console.log('Table creation failed!'); throw err};
     }
  );
  
});
module.exports = connection;