let mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Model Class
const questionSchema = new Schema({
    question: {
        type: String,
        required: true
    },
    answer: {
        type: Boolean,
        required: true
    }
});

const surveyModel = mongoose.Schema({

    Survey_Name: String,
    createdDate: String,
    Expiry_Date: String,
    description:String,
    questions: [questionSchema]
    // Q1: String,
    // A1: String,
    // Q2: String,
    // A2: String,
    // Q3: String,
    // A3: String,
    // Q4: String,
    // A4: String

},
{
    collection: "surveydemo"
});


module.exports = mongoose.model('Survey',surveyModel);
