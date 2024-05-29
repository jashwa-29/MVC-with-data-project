const express = require('express')
const route = express.Router()
const servicefile = require('../services/services')
const controlfile = require('../controller/controller')

route.get('/', servicefile.indexpage)
route.get('/thankyou', servicefile.thankyoupage)
route.post('/jopapi', controlfile.wdd)
route.get('/jopapi', controlfile.find)
module.exports = route