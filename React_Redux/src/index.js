/*eslint-disable import/default*/
//eslint is disabled coz configureStore doesn't have a default export

import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import { Router, browserHistory} from 'react-router';
import routes from './routes';
import { loadCourses } from './actions/courseActions';
import { loadAuthors } from './actions/authorActions';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';
/*
initialState can be added here as a parameter but its not needed.
We have defined initialState in courseReducer as [] and if we passed a new initialState here to override that.
initialState can be given from either the server or local storage, for eg.
*/
const store = configureStore(); 
store.dispatch(loadCourses());
store.dispatch(loadAuthors());

render (
    <Provider store={store}>
      <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('app')
);