const mongoose = require("mongoose");

var mongoURL = "mongodb+srv://ChinniDhanaLakshmiPrasanna:Kutti%40404@cluster1.i0tjko8.mongodb.net/Internship1"
mongoose.set('strictQuery', false);
mongoose.connect(mongoURL , {useUnifiedTopology:true , useNewUrlParser:true})

var db = mongoose.connection

db.on('connected' , ()=>{
    console.log('Mongo DB Connection Succesfull');
})

db.on('error' , ()=>{
    console.log('Mongo DB Connection failed');
})


module.exports = mongoose