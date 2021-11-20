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

/* GET Statistics */
router.get('/statistics', indexController.displayStatsPage);


/* GET Route for displaying the Login page */
router.get('/login', indexController.displayLoginPage);

/* POST Route for processing the Login page */
router.post('/login', indexController.processLoginPage);

/* GET Route for displaying the Register page */
router.get('/register', indexController.displayRegisterPage);

/* POST Route for processing the Register page */
router.post('/register', indexController.processRegisterPage);

/* GET to perform UserLogout */
router.get('/logout', indexController.performLogout);

// /* GET My Survey */
// router.get('/mySurvey', function(req, res, next) {
//   res.render('index', { title: 'Access your Survey' });
// });

module.exports = router;
