import {NAMESPACE} from './../reducers/questions';
import {API_PREFIX, API_REQUEST, API_SUCCESS} from './api';
import {API_HOST} from '../../config'
import {setQuestions} from '../reducers/questions';

export default store => next => action => {
    next(action);

    if (action.type === `${NAMESPACE}.${API_REQUEST}`) {
        store.dispatch({
            type: `${API_PREFIX}.${API_REQUEST}`,
            payload: {
                meta: {
                    url: `//${API_HOST}/admin/questions`,
                    namespace: NAMESPACE
                }
            }
        })
    } else if (action.type === `${NAMESPACE}.${API_SUCCESS}`) {
        store.dispatch(setQuestions(action.payload));
    }
};
