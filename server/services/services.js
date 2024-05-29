exports.indexpage = (req , res)=>{
    res.render('index')
}

const axios = require('axios')
const { request } = require('express')
exports.thankyoupage = (req , res)=>{
    axios.get("http://localhost:2800/jopapi").then(function (request) {
        console.log(request);
        res.render('thankyou' , {"jpk":request.data})
    })

}