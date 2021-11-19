var express = require('express');
var router = express.Router();

/* GET root page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Survey Site' });
});

// /* GET Home page. */
// router.get('home', function(req, res, next) {
//   res.render('index', { title: 'Survey Site' });
// });

/* GET Add Survey */
router.get('/survey/add-survey', function(req, res, next) {
  res.render('index', { title: 'Create Survey' });
});

/* GET Login */
router.get('/login', function(req, res, next) {
  res.render('index', { title: 'Login' });
});

/* GET mySurvey */
router.get('/mySurvey', function(req, res, next) {
  res.render('index', { title: 'Access your Survey' });
});

/* GET Statistics */
router.get('/statistics', function(req, res, next) {
  res.render('index', { title: 'Generate Stats' });
});

module.exports = router;
