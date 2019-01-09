import {combineReducers} from 'redux';
import {AUTH_STORAGE_KEY} from '../../config';

export const LOGIN = 'AUTHENTICATION.LOGIN';
export const LOGOUT = 'AUTHENTICATION.LOGOUT';
export const IN_PROGRESS = 'AUTHENTICATION.IN_PROGRESS';
export const SET_USER = 'AUTHENTICATION.SET_USER';
export const SET_TOKEN = 'AUTHENTICATION.SET_TOKEN';
export const LOGIN_SUCESS = 'AUTHENTICATION.SUCCESS';
export const LOGIN_ERROR = 'AUTHENTICATION.ERROR';

const initialState = getUserState();

/**
 * Action Generators
 */

export const login = (data) => ({
    type: LOGIN,
    payload: data
});

export const logout = () => ({
    type: LOGOUT
});

export const setProgressState = (state = true) => ({
     type: IN_PROGRESS,
     payload: state
});

export const setUser = (user = null) => ({
    type: SET_USER,
    payload: user
});

/**
 * Reducers
 */
const inProgress = (state = false, action) => {
    switch (action.type) {
        case IN_PROGRESS:
            return !state;
        default:
            return state;
    }
}

const token = (state = initialState.token, action) => {
    switch(action.type) {
        case SET_TOKEN: 
            return action.payload;
        default:
            return state;
    }
} 

export const user = (state = initialState.user, action) => {
    if (action.type === SET_USER) {
        return action.payload;
    }
    return state;
}

export const authentication = combineReducers({
    inProgress,
    token,
    user
});

export function getUserState() {
    const usrerData = sessionStorage.getItem(AUTH_STORAGE_KEY);
    if (usrerData) {
        try {
            return JSON.parse(usrerData);
        } catch(e) {}
    }

    return {
        user: null,
        token: null
    };
}