var express = require('express');
var router = express.Router();
var InvoiceController = require('../controllers/InvoiceController');
/* GET home page. */
router.get('/', function(req, res, next) {
  //title prints the tiltle of site
  res.render('dashboard', { title: 'Dashboard' });
});


module.exports = router;