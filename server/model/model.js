const mongoose = require('mongoose')

const mongofields = new mongoose.Schema({
    firstname:{
        type:String , 
        required:true
    } , 
    lastname:{
        type:String , 
        required:true
    } , 

    phonenumber:{
        type:Number , 
        required:true
    } , 

    emaildata:{
        type:String , 
        require:true
    } , 
    postion:{
        type:String , 
        required:true
    },
    experience:{
        type:Number , 
        required:true
    },
    location:{
        type:String , 
        required:true
    } 


})

const detailexport = mongoose.model("Jobformcollection" , mongofields)
module.exports = detailexport