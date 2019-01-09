import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { authentication } from './reducers/authentication';
import quiz from './reducers/quiz';
import questions from './reducers/questions';

import apiMiddleware from './middlewares/api';
import loginMiddleware from './middlewares/login';
import quizMiddleware from './middlewares/quiz';
import questionsMiddleware from './middlewares/questions';

const middlewares = [
    apiMiddleware,
    loginMiddleware,
    quizMiddleware,
    questionsMiddleware
];

const store = createStore(
    combineReducers({
        authentication, 
        quiz, 
        questions
    }), 
    composeWithDevTools(
        applyMiddleware(...middlewares)
    )
);

export default store;