import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import SignUp from './SignUp';

class Navigation extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: ''
    }
  }
  setUser(currentUser){
    let user = currentUser;
    this.setState({ user: user });
  }

  render(){
    return(
      <div>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <SignUp setUser={this.setUser.bind(this)} />
          </li>
        </ul>
      </div>
    )
  }
}

export default Navigation;
