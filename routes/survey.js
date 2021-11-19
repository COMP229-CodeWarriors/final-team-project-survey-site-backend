let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//Connect to surveydemo model
let Survey = require('../models/surveymodel');

/* GET Route for Read Operation*/

router.get('/',(req, res, next) => {
    Survey.find((err, surveylist) => {

        if(err)
        {
            return console.error(err);
        }
        else
        {
           // console.log(Surveylist);
           res.render('survey',{title: "Survey List", SurveyList: surveylist})
        }
    });

});

module.exports = router;