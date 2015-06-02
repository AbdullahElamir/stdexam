var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('', { title: 'دخول' });
});

router.get('/addFaculty', function(req, res) {
  res.render('addFaculty', {title: 'دخول' , flag:'active'});
});


module.exports = router;