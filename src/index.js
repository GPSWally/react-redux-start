/* eslint-disable no-console */
//console.log('hi');

import 'babel-polyfill';  //fills in issue with babel compiled
import React from 'react';
import { render } from 'react-dom';  // needed for render function
import { Router, browserHistory } from 'react-router';  //how to handle history
import routes from './routes'; //referencing the routes file, which is used below.
import './styles/styles.css'; //Webpack can import CSS file too!
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';  //where bootstrap is installed.

render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('app')
);
