import {combineEpics, ofType} from 'redux-observable';
import {of} from 'rxjs';
import {switchMap, concat, catchError, mergeMap, map } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

import {LOGIN, LOGOUT, setProgressState} from '../reducers/authentication';

const loginEpic = $action$ => 
    $action$.pipe(
        ofType(LOGIN),
        switchMap((action) => concat([
            of(setProgressState(true)),
            of(setProgressState(false))
        ]))
    );

const logoutEpic = ($action$) => {
    return $action$.pipe(
        ofType(LOGOUT),
        map(() => {
            sessionStorage.removeItem('auth');
        })
    )
};

export default combineEpics(
    loginEpic,
    logoutEpic
);