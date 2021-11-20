let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');

/* GET root page. */
router.get('/', indexController.displayHomePage);

// /* GET Home page. */
// router.get('home', function(req, res, next) {
//   res.render('index', { title: 'Survey Site' });
// });

/* GET Add Survey */
router.get('/add-survey',indexController.displayAddPage);

/* GET Login */
router.get('/login', indexController.displayLoginPage);

// /* GET My Survey */
// router.get('/mySurvey', function(req, res, next) {
//   res.render('index', { title: 'Access your Survey' });
// });

/* GET Statistics */
router.get('/statistics', indexController.displayStatsPage);

module.exports = router;
