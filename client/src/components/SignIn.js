import React, { Component } from 'react';

class SignIn extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      user: ''
    }
  }

  handleSignIn = async e => {
    e.preventDefault();
    const response = await fetch('/users/sign_in', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: this.state.email, password: this.state.password }),
    });

    if(response.status == 401) {
      window.alert("Invalid email or password");
    } else {
      const body = await response.json();
      //console.log(body);
      this.setState({ user: body });
      this.props.setUser(body);
    }
    //this.setState({ email: '', password: '' });
  }


  render(){
    return (
      <div>
        <form className="form-inline"onSubmit={this.handleSignIn}>
          <div>
            <input
              className="form-control mr-sm-2"
              name="email"
              id="inputEmail"
              value={this.state.email}
              onChange={e => this.setState({ email: e.target.value})}
              type="text"
              placeholder="Email"
            />
          </div>
          <div>
            <input
              className="form-control mr-sm-2"
              name="password"
              id="inputPassword"
              value={this.state.password}
              onChange={e => this.setState({ password: e.target.value})}
              type="password"
              placeholder="Password"
            />
          </div>
          <button type="submit" className="btn btn-primary">Sign In</button>
        </form>
      </div>
    )
  }
}

export default SignIn;
