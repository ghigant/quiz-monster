import {Question} from '../src/models/Question';

import {data} from './questionsData';

const populate = () => {
    return Promise.all(
        data.map(entry => {
            const payload = {
                ...entry,
                responses: entry.responses.map(response => ({
                    text: response
                }))
            };
            const question = new Question(payload);
            return question.save();
        })
    )
}

const run = async () => {
    await Question.deleteMany({}).exec();
    console.log('CleanUp - Done');
    await populate();
    console.log('Populate - Done');
    process.exit();
}

run();