import {API_PREFIX, API_REQUEST, API_SUCCESS} from './api';
import {API_HOST} from '../../config';

import {
    NAMESPACE, 
    FETCH as FETCH_ALL,
    setQuizzes
} from '../reducers/quizzes';

export default store => next => action => {
    next(action);

    if (action.type === FETCH_ALL) {
        store.dispatch({
            type: `${API_PREFIX}.${API_REQUEST}`,
            payload: {
                meta: {
                    url: `//${API_HOST}/quizzes`,
                    namespace: `${NAMESPACE}`
                }
            }
        });
    } else if(action.type === `${NAMESPACE}.${API_SUCCESS}`) {
        store.dispatch(setQuizzes(action.payload));
    }
}