/* eslint-disable no-unused-vars */
import 'styles/index.css';
import {render} from 'react-dom';
import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import Layout from './view/Layout';
import MainRouter from './router/router';
import {store} from './store/store';

export default class Application {
  start() {
    render(
      <Provider store= {store}>
        <MainRouter />
      </Provider>
      , document.getElementById('app'));
  }
}
