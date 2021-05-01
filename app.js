const dotenv = require('dotenv');
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');


// .env 
dotenv.config({path:'./config.env'});

// port
const PORT = process.env.PORT;

// json
app.use(express.json());

//get cookies
app.use(cookieParser()) ;

// routes backend
app.use(require('./router/auth'));


// port listen
app.listen(PORT,()=>{
    console.log(`Server running at ${PORT}`);
})