let mongoose = require('mongoose');

//Model Class
let surveyModel = mongoose.Schema({

    name: String,
    expiry_date: Date,
    q1: String,
    a1: String,
    q2: String,
    a2: String,
    q3: String,
    a3: String,
    q4: String, 
    a4: String

},
{
    collection: "surveydemo"
});

module.export = mongoose.model('surveydemo',surveyModel);