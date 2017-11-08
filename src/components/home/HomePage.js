import React from 'react';
import {Link} from 'react-rounter';

class HomePage extends React.Component {
  render() {
    return (
        <div className="jumbotron">
          <h1>Pluralsight Adminstration</h1>
          <p>React, Redux and React Rounter in ES6 for ultra-responsive web apps.</p>
          <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
        <div>
    );
  }
}

export default HomePage;