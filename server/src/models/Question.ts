import {Schema} from 'mongoose';
import {quizConnection as connection} from './connections';

export const QuestionSchema = new Schema({
    content: [{
        text: String,
        code: String,
        lang: String
    }],
    answer: {
        type: {
            type: String,
            enum: ['single', 'multiple']
        },
        values: [Number]
    },
    responses: [{
        text: String
    }]
}, {
    timestamps: true
});

export const Question = connection.model('Question', QuestionSchema);