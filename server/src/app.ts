import * as express from 'express';
import * as bodyParser from 'body-parser';

import {Question} from './models/Question';
import {Quiz} from './models/Quiz';

const port = 8080;
const host = '0.0.0.0';
const app = express();

app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/quizzes', async (req, res) => {
    const quizzes = await Quiz.find({}).select('-questions').exec();
    res.json(quizzes);
});

app.get('/quiz/:id', async (req, res) => {
    const {id} = req.params;
    const quiz: any = await Quiz.findOne({_id: id}).select('-').exec();
    const response = {
        ...quiz.toJSON(),
        questions: quiz.questions.map((q: any) => ({
            ...q.toJSON(),
            answer: {
                type: q.answer.type
            }
        }))
    };
    res.json(response);
});

app.post('/quiz/:id/result', async (req, res) => {
    const {id} = req.params;
    const quiz: any = await Quiz.findOne({_id: id}).exec();
    
    res.json({});
});

app.post('/admin/question', (req, res) => {
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
