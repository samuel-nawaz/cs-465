const express = require('express'); 
const router = express.Router(); 
const controller= require('../app_api/controllers/travel'); 

/* GET home page. */ 
router.get('/', controller.travel); 
router.get('/', function(req, res, next) {
    controller.travel(req, res, next); // Call the travel function from the controller
  });

module.exports = router;