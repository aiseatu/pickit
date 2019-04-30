import React, { Component } from 'react';

class SignUp extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      user: ''
    }
  }

  handleSignUp = async e => {
    e.preventDefault();
    const response = await fetch('/users/new', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: this.state.email, password: this.state.password })
    });
    const body = await response.json();
    console.log(body);
    if(body.error === "Validation error"){
      window.alert("Not valid Email")
    } else {
      this.setState({ user: body });
      this.props.setUser(body);
    }
    //this.setState({ email: '', password: '' });
  }

  render(){
    return (
      <div>
        <form className="form-inline" onSubmit={this.handleSignUp}>
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
          <button type="submit" className="btn btn-primary">Sign Up</button>
        </form>
      </div>
    )
  }
}

export default SignUp;
