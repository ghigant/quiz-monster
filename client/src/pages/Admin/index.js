import React from 'react';
import AppHeader from '../../components/AppHeader';
import Router from './Rotues';

export default (props) => (
    <>
        <AppHeader title={'Welcome, Valentin'} />
        <Router {...props}/>
    </>
);