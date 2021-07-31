//non SQL db
//do not need SQL to query
const mongoose = require('mongoose'); //many built in methods
//schema for DB first
// mongoose is an OBJ. we key in to mongoose to pull Schema
const Schema = mongoose.Schema;
    //another object
    //Schema is class. class can be invoked

    //don't need "new Schema"
        //new creates instance of class and define it
            //pass in parameters for constructor
const QuestionSchema = Schema({
    name: {
        type: String,
        require: true, //MUST have a name
    },
    content: {
        type: String,
        require: true
    }, 
    live: {
        type: String
    },
    repo: {
        type: String
    }
}, {timestamps: true});
//takes instance of schema
//return value of schema is model for what data will look like
//module export for export in node
module.export = Question = mongoose.model('Question', QuestionSchema);
//exports question
// Question = return value of the function

//lets us manipulate DB