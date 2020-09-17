const express = require('express')
const dotenv =  require('dotenv')
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');

const connectDB = require('./Config/DBconnection.js')
dotenv.config({ path:   './Config/config.env' })
const app = express()


app.use(session({
    secret: 'Secret',
    resave: true,
    saveUninitialized:true
}));

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());



// Routes 
app.use('/', require('./Routes/login'))
app.use('/login', require('./Routes/login'))



// Port
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> {

    console.log(`Server Running  on Port ${PORT}`)
})