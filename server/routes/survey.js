let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//Connect to survey model
let Survey = require('../models/survey');
let surveyController = require('../controllers/survey');

/* GET Route for Read Operation*/
router.get('/',surveyController.displaySurveyList);

/* GET route for displaying add/create page */
router.get('/add', surveyController.displayAddPage);

/* POST route for processing add/create page */
router.post('/add', surveyController.processAddPage);

/* GET route for displaying edit page */
router.get('/edit/:id', surveyController.displayEditPage);

/* POST route for processing edit page */
router.post('/edit/:id',surveyController.processEditPage );

/* GET route for deletion */
router.get('/delete/:id',surveyController.performDelete );

module.exports = router;