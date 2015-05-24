var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'دخول' });
});


router.get('/addstudent', function(req, res) {
  res.render('addstudent', { title: 'دخول' });
});



module.exports = router;
