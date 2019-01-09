import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';

import Login from './pages/Login';
import Home from './pages/Home';
import Admin from './pages/Admin';
import Quiz from './pages/Quiz';

export const PrivateRoute = ({ component: Component, isAuthenticated = false, ...rest }) => (
    <Route {...rest} render={(props) => (
        isAuthenticated
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    )} />
);

export class AppRouter extends Component {
    render() {
        const {isAuthenticated, isAdmin} = this.props;
        return (
            <Router>
                <>
                <Route path={'/login'} component={Login} />
                <PrivateRoute exact path={'/'} component={Home} isAuthenticated={isAuthenticated} />
                <PrivateRoute path={'/quiz/:id'} component={Quiz} isAuthenticated={isAuthenticated} />
                <PrivateRoute path={'/admin'} component={Admin} isAuthenticated={isAuthenticated && isAdmin} />
                </>
            </Router>
        );
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.authentication.user,
    isAdmin: !!(state.authentication.user && state.authentication.user.isAdmin)
})

export default connect(
    mapStateToProps
)(AppRouter);