import {Quiz} from '../src/models/Quiz';
import {Question} from '../src/models/Question';

import {data} from './questionsData';

const questions = data.map(entry => {
    const payload = {
        ...entry,
        responses: entry.responses.map(response => ({
            text: response
        }))
    };

    return new Question(payload);
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



