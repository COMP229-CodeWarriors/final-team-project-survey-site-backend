let express = require('express');
let router = express.Router();

module.exports.displayHomePage = (req, res, next) => {
    res.render('index',{title:'Survey Site'});
}

module.exports.displayAddPage = (req, res, next) => {
    res.render('index', { title: 'Create Survey' });
}

module.exports.displayLoginPage = (req, res, next)=> {
    res.render('index', { title: 'Login' });
}

module.exports.displayStatsPage = (req, res, next)=> {
    res.render('index', { title: 'Generate Stats' });
}

