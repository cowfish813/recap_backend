const express = require('express');
const router = express.Router(); //

const Question = require("../../models/question");

router.get('/', (req, res) => {
    Question.find() //no args in .find =>
                    //every instance of every question
                        //reaches into DB
                    //
        
        .then(questions => res.json(questions)) //creates res and format as JSON
        .catch(err => res.status(404).json(err))
        //if error creates error 404 and renders error into JSON
});