import {combineReducers} from 'redux';

export const REQUEST = 'QUIZ.REQUEST';
export const QUIZ_SET =  'QUIZ.SET';


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

export default combineReducers({
    data
});
