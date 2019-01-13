import {API_PREFIX, API_REQUEST, API_SUCCESS} from './api';
import {API_HOST} from '../../config'

const NAMESPACE = 'QUESTION';
const SAVE = `${NAMESPACE}.SAVE`;

export default (store) => (next) => (action) => {

    next(action);
    switch (action.type) {
        case SAVE:
            store.dispatch({
                type: `${API_PREFIX}.${API_REQUEST}`,
                payload: {
                    data: action.payload,
                    meta: {
                        url: `//${API_HOST}/admin/question`,
                        method: 'POST',
                        namespace: NAMESPACE
                    }
                }
            });
        break;
        case `${NAMESPACE}.${API_SUCCESS}`:
            console.log('Question Saved');
        break;
        default:
    }
};
