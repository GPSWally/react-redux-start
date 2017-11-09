import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoursesPage from './components/course/CoursesPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component ={HomePage} /> 
    <Route path="course" component={CoursesPage} />
    <Route path="about" component={AboutPage} />
  </Route>
);

//if path is /, then load the home page.
//if path is about, load the About page.