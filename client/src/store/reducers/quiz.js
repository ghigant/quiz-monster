import {combineReducers} from 'redux';

export const REQUEST = 'QUIZ.REQUEST';
export const QUIZ_SET =  'QUIZ.SET';
export const SET_RESULT = 'QUIZ.SET_RESULT'


export const setQuiz = (payload = {}) => ({
    type: QUIZ_SET,
    payload
})
 
const data = (state = null, action) => {
    switch (action.type) {
        case QUIZ_SET:
            return action.payload;
        default:
            return state;
    }
};

const results = (state = {}, action) => {
    if (action.type === SET_RESULT) {
        return {
            ...state,
            [action.payload.id]: action.payload.response
        }
    }

    return state;
}

export default combineReducers({
    data,
    results
});
