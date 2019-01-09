import * as mongoose from 'mongoose';
import {
    AUTH_CONNECTION_STRING,
    QUIZ_CONNECTION_STRING
} from '../config';

const connectionOptions = {
    useNewUrlParser: true,
    useCreateIndex:  true
}

export const authConnection = mongoose.createConnection(
    AUTH_CONNECTION_STRING,
    connectionOptions
)
export const quizConnection = mongoose.createConnection(
    QUIZ_CONNECTION_STRING,
    connectionOptions
)