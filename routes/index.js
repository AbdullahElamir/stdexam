var express = require('express');
var router = express.Router();

/* GET home page. */
<<<<<<< HEAD
router.get('/', function(req, res) {
  res.render('index', { title: 'دخول' });
});


=======
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/reports', function(req, res, next) {
  res.render('reports', { title: 'reports' });
});
>>>>>>> 6233b46d276f7d7bbeb7e779449ccc0594ea1943

module.exports = router;
