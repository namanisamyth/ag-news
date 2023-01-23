const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://metallica:music5302@nephics.virgo5o.mongodb.net/ag-news'  , {useUnifiedTopology:true , useNewUrlParser:true})

const connection = mongoose.connection

connection.on('connected' , ()=>{
    console.log('Mongo DB Connection Successfull')
})

connection.on('error' , ()=>{
    console.log('Mongo DB Connection Failed')
})


module.exports = mongoose