let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//Connect to survey model
let Survey = require('../models/survey');

/* GET Route for Read Operation*/

router.get('/',(req, res, next) => {
    Survey.find((err, surveylist) => {

        if(err)
        {
            return console.error(err);
        }
        else
        {
        //    console.log(surveylist);
         res.render('survey',{title: "Survey List", SurveyList: surveylist})
        }
    });

});

module.exports = router;