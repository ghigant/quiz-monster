import {Schema} from 'mongoose';
import {quizConnection as connection} from './connections';
import {QuestionSchema} from './Question';

export const QuizSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    questions: [QuestionSchema]
}, {
    timestamps: true
});

export const Quiz = connection.model('Quiz', QuizSchema);