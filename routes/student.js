var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('', { title: 'دخول' });
});

router.get('/addStudent', function(req, res) {
  res.render('addStudent', {title: 'دخول' , flag:'active'});
});



module.exports = router;