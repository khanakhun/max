const express = require('express')

const router = express.Router()


// Login Landing Page 

router.get('/', (req,res)=> {
    res.send('Welcome to Dashboard')
 })

// User Auth Script
router.post('/login', (req, res)=> {
	let username = req.body.username;
	let password = req.body.password;
	if (username && password) {
		connection.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
			if (results.length > 0) {
				req.session.loggedin = true;
				req.session.username = username;
				res.redirect('/dashboard');
			} else {
				res.send('Incorrect Username and/or Password!');
			}			
			response.end();
		});
	} else {
		res.send('Please enter Username and Password!');
		res.end();
	}
});

module.exports = router