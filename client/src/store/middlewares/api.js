import axios from 'axios';

export const API_PREFIX = 'API'; 
export const API_REQUEST = 'REQUEST';
export const API_SUCCESS = 'SUCCESS';
export const API_ERROR = 'ERROR';

export default ({dispatch}) => next => action => {
    next(action);

    switch (action.type) {
        case `${API_PREFIX}.${API_REQUEST}`:
            const {meta, data = {}} = action.payload;
            const {url, method = 'GET', namespace} = meta;
            axios.request(url, {
                data,
                method
            }).then((response) => {
                const {data} = response;
                next({
                    type: `${API_PREFIX}.${API_SUCCESS}`,
                    payload: {
                        data,
                        meta: { namespace }
                    }
                });
                next({
                    type: `${namespace}.${API_SUCCESS}`,
                    payload: data
                });
            }, (error) => {
                next({
                    type: `${API_PREFIX}.${API_ERROR}`,
                    payload: {
                        data: error,
                        meta: {namespace}
                    }
                });
                next({
                    type: `${namespace}.${API_ERROR}`,
                    payload: {
                        data: error
                    }
                });
                
            });
        break;
        default:
    }
}
