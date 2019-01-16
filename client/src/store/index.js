import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer as reduxFormReducer } from 'redux-form';

import { authentication } from './reducers/authentication';
import quiz from './reducers/quiz';
import questions from './reducers/questions';
import {reducer as quizzes} from './reducers/quizzes';

import apiMiddleware from './middlewares/api';
import loginMiddleware from './middlewares/login';
import quizMiddleware from './middlewares/quiz';
import quizzesMiddleware from './middlewares/quizzes';
import questionsMiddleware from './middlewares/questions';
import questionMiddleware from './middlewares/question';

const middlewares = [
    apiMiddleware,
    loginMiddleware,
    quizMiddleware,
    questionsMiddleware,
    questionMiddleware,
    quizzesMiddleware,
];

const store = createStore(
    combineReducers({
        authentication, 
        quiz, 
        questions,
        quizzes,
        form: reduxFormReducer
    }), 
    composeWithDevTools(
        applyMiddleware(...middlewares)
    )
);

export default store;