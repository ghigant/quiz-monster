import {Quiz} from '../src/models/Quiz';
import {data} from './questionsData';
import { Question } from '../src/models/Question';

const questions = data.map(entry => {
    const payload = {
        ...entry,
        responses: entry.responses.map(response => ({
            text: response
        }))
    };
    const question = new Question(payload);
    
    return question;
});

const main = async () => {
    await Quiz.deleteMany({}).exec();

    const quiz = new Quiz({
        name: '[TW] Final Evaluation Quiz',
        description: 'Demo Quiz',
        questions
    });

    await quiz.save();
    process.exit();
}

main();



