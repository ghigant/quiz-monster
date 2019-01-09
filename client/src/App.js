import React, { Component } from 'react';
import store from './store';
import {Provider} from 'react-redux';
import AppRouter from './AppRouter';
import './App.css';

class App extends Component {
  render() {
    return (
      <AppRouter />
    );
  }
}

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
