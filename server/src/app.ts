import * as express from 'express';
import * as bodyParser from 'body-parser';

import {Question} from './models/Question';

const port = 8080;
const host = '0.0.0.0';
const app = express();

app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/quiz', async (req, res) => {
    const quiz = await Question.find({}).exec();
    res.json(quiz);
});

app.post('/admin/question', (req, res) => {
    console.log(req.body);
    const question = new Question({
        ...req.body
    });
    
    question.save().then(() => {
        res.json({
            message: 'ok'
        });
    });
})

// TODO - add 
app.get('/admin/questions', async (req, res) => {
    const questions = await Question.find({}).exec();
    res.json(questions);
});

app.listen(port, host, () => {
    console.log(`Server listen on ${host}:${port}`);
});
