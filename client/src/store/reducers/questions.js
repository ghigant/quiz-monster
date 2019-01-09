import {combineReducers} from 'redux';

export const NAMESPACE = 'QUESTIONS';
export const SET_QUESTIONS = `${NAMESPACE}.SET`;

export const setQuestions = (data) => ({
    type: SET_QUESTIONS,
    payload: data 
})

export const fetching = (state = false, action) => {
    return state;
}

export const data = (state = [], action) => {
    switch (action.type) {
        case SET_QUESTIONS:
            return [...action.payload];
        default:
            return state;
    }
}

export default combineReducers({
    fetching,
    data
});