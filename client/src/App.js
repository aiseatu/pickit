import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';

import Landing from './components/Landing';
import Navigation from './components/Navigation';
import SignUp from './components/SignUp';
import PostList from './components/PostList';
import PostShow from './components/PostShow';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: '',
    }
    this.setUser = this.setUser.bind(this);
  }
  setUser(user){
    this.setState({ user: user });
  }

  render(){
    return (
      <div>
        <Navigation
          user={this.state.user}
          setUser={this.setUser}/>
        <main>
          <Route exact path="/" component={Landing} />
          <Route path="/posts" component={PostList} />
          <Route path="/posts/:id" component={PostShow} />
        </main>
      </div>
    );
  }
}

export default App;
