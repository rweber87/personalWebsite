import React, { Component } from 'react';
import NavBar from './components/NavBar';
import { withRouter } from 'react-router';
import { Switch, Route } from 'react-router-dom';
import About from './components/About';
import Languages from './components/Languages';
import './App.css';

class Main extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <About />
        <Languages/>
      </div>
    );
  }
}

export default withRouter(Main);
