import React, { Component } from 'react';

class SignOut extends Component {
  constructor(props){
    super(props);
  }

  handleSignOut = async e => {
    e.preventDefault();
    const response = await fetch('/users/sign_out', {
      method: 'GET',
    });
    this.props.setUser(null);
  }

  render(){
    return(
      <div>
        <button type="button" className="btn btn-primary" onClick={this.handleSignOut}>Sign Out</button>
      </div>
    )
  }
}

export default SignOut;
