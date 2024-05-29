const express = require('express')
const app = express()
const mongoose = require('mongoose')

 
const mongodburl = "mongodb://127.0.0.1:27017/withdataproject"
mongoose.connect(mongodburl, {}).then(()=>{
    console.log("database connected");
})

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.set('view engine' , "ejs")
app.use(express.static('public'))

app.use('/' , require('./server/routes/routes'))

app.listen(2800 , ()=>{
    console.log("port connected");
})