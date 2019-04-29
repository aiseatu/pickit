import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';

import Landing from './components/Landing';
import Navigation from './components/Navigation';
import SignUp from './components/SignUp'

class App extends Component {
  render(){
    return (
      <div>
        <Navigation />
        <main>
          <Route exact path="/" component={Landing} />
        </main>
      </div>
    );
  }
}

export default App;
