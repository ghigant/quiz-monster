export const NAMESPACE = 'QUIZZES';
export const FETCH = `${NAMESPACE}.FETCH`;
export const SET = `${NAMESPACE}.SET`;

export const fetchQuzzes = () => ({
    type: FETCH
});

export const setQuizzes = (payload = []) => ({
    type: SET,
    payload
});

export const reducer = (state = [], action) => {
    if (action.type === SET) {
        return [...action.payload];
    }

    return state;
}
