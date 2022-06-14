var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //title prints the tiltle of site
  res.render('index', { title: 'Invoice App' });
});

module.exports = router;
