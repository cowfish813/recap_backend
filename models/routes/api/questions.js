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

router.post('/', (req, res) => {
    const newQuestion = new Question({
        name: req.body.name, 
        //we're guaranteed to have a body
            //"name" is defined on FE
        content: req.body.content
            //content is defined from FE
    }); //create new question
}) 

module.exports = router; //exports whole router