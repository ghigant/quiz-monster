import {Schema} from 'mongoose';
import {quizConnection as connection} from './connections';

const questionSchema = new Schema({
    content: [{
        text: String,
        code: String
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

export const Question = connection.model('Question', questionSchema);