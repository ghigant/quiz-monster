import {NAMESPACE} from './../reducers/questions';
import {API_PREFIX, API_REQUEST} from './api';

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
                    namespace: NAMESPACE,
                    onSuccess: (data) => store.dispatch(setQuestions(data)),
                    onError: (error) => console.log(error)
                }
            }
        })
    } else if (action.type === `${NAMESPACE}.SAVE`) {
        store.dispatch({
            type: `${API_PREFIX}.${API_REQUEST}`,
            payload: {
                data: action.payload,
                meta: {
                    url: `//${API_HOST}/admin/question`,
                    method: 'POST',
                    namespace: NAMESPACE
                },
                onSuccess: () => store.dispatch(`${NAMESPACE}.${API_REQUEST}`),
                onError: (error) => console.log(error)
            }
        });
    }
};
