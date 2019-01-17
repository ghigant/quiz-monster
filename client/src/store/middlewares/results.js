import {API_PREFIX, API_REQUEST, API_SUCCESS} from './api';

export default (store) => (next) => action => {
    next(action);
    if (action.type === 'QUIZ_RESULT.SAVE') {
        store.dispatch({
            type: `${API_PREFIX}.${API_REQUEST}`,
            payload: {
                data: [
                    ...action.payload.answers
                ],
                meta: {
                    url: `//localhost:8080/quiz/${action.payload.id}/result`,
                    method: 'POST',
                    namespace: 'QUIZ_RESULT'
                }
            }
        });
    } else if (action.type === `QUIZ_RESULT.${API_SUCCESS}`) {
        console.log(action.payload);
    }
};
