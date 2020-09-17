const mysql = require('mysql')
const dotenv =  require('dotenv')

dotenv.config({ path:   './config/config.env' })


let connection = mysql.createConnection({
	host     : process.env.HOST,
	user     : process.env.HOST,
	password : process.env.HOST,
	database : process.env.DB
});
 
connection.connect(function(err) {
	if (err) {
	  console.error('error connecting: ' + err.stack);
	  return;
	}
   
	console.log('connected as id ' + connection.threadId);
  });


module.exports = connection;