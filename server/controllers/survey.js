let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//Create reference to DB schema

let Survey = require('../models/survey');


module.exports.displaySurveyList = (req, res, next) => {
    Survey.find((err, surveylist) => {

        if(err)
        {
            return console.error(err);
        }
        else
        {
        //    console.log(surveylist);
         res.render('survey/list',{title: "Survey List", SurveyList: surveylist});
        }
    });

}

module.exports.displayAddPage = (req, res, next)=>{
    res.render('survey/add',{title: "Create Survey"});
}

module.exports.processAddPage = (req, res, next)=>{
    let newSurvey = Survey({
        "Survey_Name": req.body.Survey_Name,
        "createdDate": req.body.createdDate,
        "Expiry_Date": req.body.Expiry_Date,
        "description": req.body.description,
        "Q1": req.body.Q1,
        "A1": req.body.A1,
        "Q2": req.body.Q2,
        "A2": req.body.A2,
        "Q3": req.body.Q3,
        "A3": req.body.A3,
        "Q4": req.body.Q4,
        "A4": req.body.A4
    });

    Survey.create(newSurvey,(err,Survey)=>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //refresh
            res.redirect('/surveylist');
        }

    });
}

module.exports.displayEditPage = (req, res, next)=>{
    let id = req.params.id;

    Survey.findById(id, (err, surveyToEdit)=>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.render('survey/edit',{title: 'Edit Survey', survey: surveyToEdit})
        }
    })

}

module.exports.processEditPage = (req, res, next)=>{
    let id = req.params.id
    let updatedSurvey = Survey({
        "_id": id,
        "Survey_Name": req.body.Survey_Name,
        "createdDate": req.body.createdDate,
        "Expiry_Date": req.body.Expiry_Date,
        "description": req.body.description,
        "Q1": req.body.Q1,
        "A1": req.body.A1,
        "Q2": req.body.Q2, 
        "A2": req.body.A2,
        "Q3": req.body.Q3,
        "A3": req.body.A3,
        "Q4": req.body.Q4,
        "A4": req.body.A4
    });

    Survey.updateOne({_id: id}, updatedSurvey,(err)=>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //refresh
            res.redirect('/surveylist');
        }
    });

}

module.exports.performDelete = (req, res, next)=>{
    let id = req.params.id;
    Survey.remove({_id: id}, (err)=>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //refresh
            res.redirect('/surveylist');
        }
    });

}