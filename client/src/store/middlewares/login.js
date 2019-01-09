import {LOGIN, LOGOUT, setProgressState, setUser} from '../reducers/authentication';
import {API_REQUEST, API_SUCCESS, API_PREFIX, API_ERROR} from './api';
import {AUTH_STORAGE_KEY} from '../../config';

export default ({dispatch}) => next => action => {
    next(action);

    const [namespace] = LOGIN.split('.');
   
    switch (action.type) {
        case LOGIN:
            dispatch(setProgressState());
            dispatch({
                type: `${API_PREFIX}.${API_REQUEST}`,
                payload: {
                    data: action.payload,
                    meta: {
                        url: '//localhost:5050/login',
                        method: 'post',
                        namespace
                    }
                }
            });
        break; 
        case `${namespace}.${API_SUCCESS}`:
            dispatch(setProgressState(false));
            const {token} = action.payload;
            const strUser = atob(token.split('.')[1]);
            const user = JSON.parse(strUser);
            
            sessionStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify({
                token,
                user: user
            }));

            dispatch(setUser(user));    
        break;
        case `${namespace}.${API_ERROR}`:
            dispatch(setProgressState(false));
        break;
        case LOGOUT: 
            sessionStorage.removeItem(AUTH_STORAGE_KEY);
        break;
        default:
    } 
};
