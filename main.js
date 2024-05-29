const express = require('express')
const app = express()
const mongoose = require('mongoose')

 
const mongodburl = "mongodb+srv://jashwa-29:fXxQeI3RwO487uU5@cluster0.0tbvc4t.mongodb.net/withdataproject"
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
