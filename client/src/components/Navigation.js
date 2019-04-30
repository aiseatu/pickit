import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import SignUp from './SignUp';
import SignIn from './SignIn';
import SignOut from './SignOut';

class Navigation extends Component {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     user: '',
  //   }
  //   this.setUser = this.setUser.bind(this);
  // }
  // setUser(user){
  //   this.setState({ user: user });
  // }

  render(){
    return(
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div>
          <Link className="navbar-brand" to='/'>Home</Link>
            {(this.props.user) ? (
              <div className="nav-item">
                  <SignOut setUser={this.props.setUser} />
              </div>
            ) : (
              <div>
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <SignUp setUser={this.props.setUser} />
                </li>
                <li className="nav-item">
                  <SignIn setUser={this.props.setUser} />
                </li>
              </ul>
              </div>
            )
            }
        </div>
      </nav>
    )
  }
}

export default Navigation;
