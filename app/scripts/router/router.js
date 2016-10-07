/* eslint-disable no-unused-vars */
import React from 'react';
import {Router, Route, hashHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import Layout from '../view/Layout';
import PlayList from '../view/PlayList';
import Song from '../view/Song';

class MainRouter extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Layout}>
        </Route>
        <Route path="/items">
          <Route path=":id" component={Song}>
          </Route>
        </Route>
      </Router>
    );
  }
}
export default MainRouter;
