const express = require("express");
const morgan = require("morgan");
const db =require('./mongodb');
const app = new express();
const studentRoute =require('./Routes/studentRoute');
app.use(morgan('dev'));
app.use('/api',studentRoute);


app.listen(7000,()=>{
    console.log("Litsening to port 4000")
})