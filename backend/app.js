const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Port = 5000;
const router = require('./Routes/router')


app.use(bodyParser.json());
app.use('/api',router);



app.listen(5000,()=>{
    console.log(`Server running on Port ${Port}`);   
});