var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/addStudent', function(req, res) {
  res.render('addStudent', {title: 'دخول' , flag:'active'});
});

router.get('/veiwStudent', function(req, res) {
  res.render('veiwStudent', {title: 'عرض الطلبة' , flag:'active'});
});

module.exports = router;