import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import LoginPage from './LoginPage';

import {login} from '../../store/reducers/authentication';

class LoginScreen extends Component {
    render() {
        const {isAutenticated, location} = this.props;
        const {state} = location;
        return isAutenticated ? 
            <Redirect to={state && state.from ? state.from: '/'} /> : 
            <LoginPage {...this.props}/>    
    }
}

const mapStateToProps = (state) => ({
    isAutenticated: state.authentication.user,
});

const mapDipatchToActions = (dispatch) => ({
    onSubmit: (data) => dispatch(login(data))
});

export default connect(
    mapStateToProps,
    mapDipatchToActions
)(LoginScreen);