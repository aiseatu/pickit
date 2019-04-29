import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import SignUp from './SignUp';
import SignIn from './SignIn';
import SignOut from './SignOut';

class Navigation extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: '',
    }
  }
  setUser(user){
    this.setState({ user: user });
  }

  render(){
    return(
      <div>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          {(this.state.user) ? (
            <div>
              <li>
                <SignOut setUser={this.setUser.bind(this)} />
              </li>
            </div>
          ) : (
            <div>
              <li>
                <SignUp setUser={this.setUser.bind(this)} />
              </li>
              <li>
                <SignIn setUser={this.setUser.bind(this)} />
              </li>
            </div>
          )
          }

        </ul>
      </div>
    )
  }
}

export default Navigation;
