const modelfile = require('../model/model')
exports.wdd = (req , res) => {
 const inptdata = new modelfile({
    firstname: req.body.firstname , 
    lastname: req.body.lastname , 
    phonenumber: req.body.phonenumber , 
    emaildata: req.body.emaildata , 
    postion: req.body.postion , 
    experience: req.body.experience , 
    location: req.body.location 
 })

 inptdata.save().then((sd)=>{
    console.log(sd);
    res.redirect('/thankyou')
  })
}

exports.find = (req , res) => {
    modelfile.find().then((details)=>{
      res.send(details)
    })
}