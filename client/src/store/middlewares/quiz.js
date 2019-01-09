import {REQUEST as QUIZ_REQUEST} from '../reducers/quiz';
import {API_PREFIX, API_REQUEST, API_SUCCESS} from './api';
import {setQuiz} from '../../store/reducers/quiz';

export default store => next => action => {
    next(action);
    const [namespace] = QUIZ_REQUEST.split('.');

    if (action.type === QUIZ_REQUEST) {
        store.dispatch({
            type: `${API_PREFIX}.${API_REQUEST}`,
            payload: {
                meta: {
                    url: '//localhost:8080/quiz',
                    namespace
                }
            }
        });
    } else if (action.type === `${namespace}.${API_SUCCESS}`) {
        store.dispatch(setQuiz(action.payload));
    }
}